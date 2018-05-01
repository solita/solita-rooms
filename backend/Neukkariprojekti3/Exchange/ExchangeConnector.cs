using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices;
using System.Linq;
using Microsoft.Exchange.WebServices.Data;
using Neukkariprojekti3.DTO;
using Neukkariprojekti3.Cache;
using Neukkariprojekti3.AD;
using System.Net;
using System.Threading;

namespace Neukkariprojekti3.Exchange {
    public class ExchangeConnector {
        private readonly string _email = ConfigurationManager.AppSettings["ExchangeConnectorEmail"];
        private readonly ExchangeService _exchangeService;
        private readonly string exchangeUrl = ConfigurationManager.AppSettings["ExchangeUrl"];
        private readonly Boolean useDefaultCredentials = ConfigurationManager.AppSettings["UseDefaultCredentials"].Equals("true");
        private readonly string username = ConfigurationManager.AppSettings["WebCredentialsName"];
        private readonly string password = ConfigurationManager.AppSettings["WebCredentialsPassword"];
        private readonly Boolean autoDiscoverExchangeUrl = ConfigurationManager.AppSettings["AutoDiscoverExchangeUrl"].Equals("true");
        // Connection lock is used to limit unnecessary Exchange connections.
        // Only one connection to Exchange with the same arguments is ever allowed.
        private static readonly Dictionary<string, object> connectionLocks = new Dictionary<string, object>();

        public ExchangeConnector() {
            ServicePointManager.ServerCertificateValidationCallback +=(sender, cert, chain, sslPolicyErrors) => true;
            Logger.Logger.setLogging(ConfigurationManager.AppSettings["IsLoggingEnabled"].Equals("true"));

            _exchangeService = new ExchangeService();
        
            if (useDefaultCredentials) {
                _exchangeService.UseDefaultCredentials = true;
            } else {
                _exchangeService.Credentials = new WebCredentials(username, password);
            }

            if (autoDiscoverExchangeUrl) {
               _exchangeService.AutodiscoverUrl(_email);
            } else {
                _exchangeService.Url = new Uri(exchangeUrl);
            }
        }

        /** Returns a list of rooms and their bookings. The returned list of rooms is sorted by room location. */
        public IEnumerable<Room> GetRooms(DateTime dateTime) {
            Logger.Logger.Info("Getting rooms for date: " + dateTime);
            var dateString = dateTime.ToString("yyyy-MM-dd");
            Object connectionLock = null;

            if (connectionLocks.ContainsKey(dateString)) {
                Logger.Logger.Info("Got connection lock for date: " + dateString);
                connectionLock = connectionLocks[dateString];                
            } else {
                connectionLock = new object();
                connectionLocks.Add(dateString, connectionLock);
                Logger.Logger.Info("Creating a new connection lock for date: " + dateString);
            }

            lock (connectionLock) {
                // While we waited for the lock, it is possible that another thread
                // retrieved the rooms from Exchange. So, before making a connection, 
                // try to retrieve the Rooms from cache.
                if (ConfigurationManager.AppSettings["UseRoomCaching"].Equals("true") && RoomCacheManager.FindCachedRoomsForDay(dateTime) != null)
                {
                    Logger.Logger.Info("Got rooms from cache for date: " + dateString);
                    var cachedRooms = RoomCacheManager.FindCachedRoomsForDay(dateTime);
                    return cachedRooms.GetRooms();
                }

                Logger.Logger.Info("Connecting to Exchange to retrieve rooms for date: " + dateString);

                var ad = new ADConnector();
                var rooms = ad.GetRoomsList();
                RoomDisplayNameParser.ParseDisplayNameForRooms(rooms);
                rooms = ApplySpecialFilters(rooms);
                AddAvailabilityInfoToRooms(rooms, dateTime);
                rooms = rooms.OrderBy(room => room.Location).ThenBy(room => room.Name).ToList();

                var allResultsOk = true;
                foreach (var room in rooms) {
                    if (room.Error) {
                        allResultsOk = false;
                        break;
                    }
                }

                if (allResultsOk) {
                    Logger.Logger.Info("Caching Exchange response.");
                    RoomCacheManager.CacheRooms(rooms, dateTime);
                } else {
                    Logger.Logger.Info("Not caching Exchange response with errors.");
                }

                return rooms;
            }
        }

        private List<Room> ApplySpecialFilters(List<Room> rooms) {
            var locationsToBeFiltered = ConfigurationManager.AppSettings["FilterLocations"].Split(';');
            return rooms.Where(room => !locationsToBeFiltered.Any(s => s == room.Location)).ToList();
        }

        /** Tries to receive availability data (bookings) for all rooms. It is possible that a room sometimes returns an error.
            In this case the method waits a few seconds and tries again. If unable to receive successful data after
            too many tries, returns the data it got.*/
        private GetUserAvailabilityResults ReceiveRoomAvailabilityInfo(List<AttendeeInfo> attendees, DateTime? dateTime) {
            GetUserAvailabilityResults availabilityResults = null;
            var tryToReceiveResults = true;
            var maxTries = 3;
            var currentAttempt = 0;

            while (tryToReceiveResults) {
                currentAttempt++;

                availabilityResults = _exchangeService.GetUserAvailability(
                attendees,
                new TimeWindow(dateTime.Value,
                    dateTime.Value.AddDays(1)),
                AvailabilityData.FreeBusy);

                var allResultsOk = true;
                foreach (var attendeeAvailability in availabilityResults.AttendeesAvailability) {
                    if (attendeeAvailability.ErrorCode != ServiceError.NoError) {
                        allResultsOk = false;
                    }
                }

                if (allResultsOk == true) {
                    Logger.Logger.Info("Room availability info received successfully.");
                    tryToReceiveResults = false;
                } else {
                    if (currentAttempt < maxTries) {
                        Logger.Logger.Error("Room availability info returned an error. Trying again...");
                        Thread.Sleep(5000);
                    } else {
                        Logger.Logger.Error("Room availability info returned an error too many times. Using the data we got.");
                        tryToReceiveResults = false;
                    }
                }
            }

            return availabilityResults;
        }

        private void AddAvailabilityInfoToRooms(List<Room> rooms, DateTime? dateTime = null) {
            if (dateTime == null) {
                dateTime = DateTime.Now;
            }

            var attendees = rooms.Select(room => new AttendeeInfo(room.Email)).ToList();
            GetUserAvailabilityResults availabilityResults = ReceiveRoomAvailabilityInfo(attendees, dateTime);

            var i = 0;
            foreach (var attendeeAvailability in availabilityResults.AttendeesAvailability) {
                if (attendeeAvailability.ErrorCode != ServiceError.NoError) {
                    rooms[i].Error = true;
                    Logger.Logger.Error("Room " + rooms[i].Email + " availability contains error: " + attendeeAvailability.ErrorCode.ToString() + " " + attendeeAvailability.ErrorMessage);
                } else { 
                    foreach (var calendarEvent in attendeeAvailability.CalendarEvents) {
                        var booking = CreateBooking(calendarEvent);
                        rooms[i].BookedTimes.Add(booking);
                    }
                 }

                i++;
            }
        }

        private static Room.Booking CreateBooking(CalendarEvent calendarEvent) {
            var startHour = calendarEvent.StartTime.Hour;
            var startMinute = calendarEvent.StartTime.Minute;
            var endHour = calendarEvent.EndTime.Hour;
            var endMinute = calendarEvent.EndTime.Minute;

            var booking = new Room.Booking {
                StartTime =
                    AddLeadingZerosForMinutesAndHours(startHour) + ":" +
                    AddLeadingZerosForMinutesAndHours(startMinute),
                EndTime =
                    AddLeadingZerosForMinutesAndHours(endHour) + ":" +
                    AddLeadingZerosForMinutesAndHours(endMinute),
                Date = calendarEvent.StartTime.ToString("yyyy-MM-dd")
            };

            if (booking.StartTime == "00:00" && booking.EndTime == "00:00") {
                // NOTE: In Exchange all day events are marked with start time 0 and end time 0.
                booking.IsAllDayBooking = true;
            }

            if (calendarEvent.Details != null && calendarEvent.Details.Subject != null) {
                booking.Subject = calendarEvent.Details.Subject;
            }

            return booking;
        }

        /** Takes integer as an input and returns it as string with a leading zero if time was less than 10. */
        private static String AddLeadingZerosForMinutesAndHours(int time) {
            if (time >= 10) {
                return Convert.ToString(time);
            }

            return "0" + Convert.ToString(time);
        }

        /** Creates Room object from each AttendeeInfo objects passed to the method. */
        private static List<Room> ConvertAttendeeInfoListToRoomList(IEnumerable<AttendeeInfo> attendees) {
            return attendees.Select(attendee => new Room {
                Name = attendee.SmtpAddress.Substring(0, attendee.SmtpAddress.LastIndexOf('@')),
                BookedTimes = new List<Room.Booking>()
            }).ToList();
        }

        private static AttendeeInfo GetDirectoryEntryProperty(DirectoryEntry entry, String propertyName) {
            return new AttendeeInfo(entry.Properties[propertyName].Value.ToString().Trim());
        }
    }
}