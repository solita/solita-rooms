using System;
using System.Collections.Generic;
using System.Configuration;
using System.Text.RegularExpressions;
using Neukkariprojekti3.DTO;

namespace Neukkariprojekti3.AD {
    public class RoomDisplayNameParser {
        public static void ParseDisplayNameForRooms(IEnumerable<Room> rooms) {
            foreach (var room in rooms) {
                ParseDisplayNameForRoom(room);
            }
        }

        public static void ParseDisplayNameForRoom(Room room) {
            room.Location = ParseLocation(room.DisplayName);
            room.Capacity = ParseCapacity(room.DisplayName);
            room.IsSuitableForClientMeetings = ParseSuitabilityForClientMeetings(room.DisplayName);
            room.IsSuitableForInternalMeetings = ParseSuitabilityForInternalMeetings(room.DisplayName);
            room.HasVideoConferencingSupport = ParseHasVideoConferencingSupport(room.DisplayName);
        }

        public static String ParseLocation(String displayName) {
            var name = "";
            var regexString = ConfigurationManager.AppSettings["DisplayNameLocationRegex"];

            var regex = new Regex(@regexString);
            var match = regex.Match(displayName);
            if (match.Success) {
                name = match.ToString();
            }

            name = CheckLocationNameAbbreviations(name);

            return name;
        }

        private static string CheckLocationNameAbbreviations(string name) {
            // Abbrevations are stored as string in the following format: abbrevation=value;abbrevation=value etc.
            var abbrevations = ConfigurationManager.AppSettings["LocationAbbreviations"].Split(';');

            foreach (var abbrevationNameAndValue in abbrevations) {
                var key = abbrevationNameAndValue.Split('=')[0];
                var value = abbrevationNameAndValue.Split('=')[1];
                if (name.Equals(key)) {
                    return value;
                }
            }

            return name;
        }

        public static Boolean ParseSuitabilityForInternalMeetings(String displayName) {
            var lookForWord = ConfigurationManager.AppSettings["DisplayNameInternalWord"];
            return displayName.ToLower().Contains(lookForWord.ToLower());
        }

        public static Boolean ParseSuitabilityForClientMeetings(String displayName) {
            var lookForWord = ConfigurationManager.AppSettings["DisplayNameClientWord"];
            return displayName.ToLower().Contains(lookForWord.ToLower());
        }

        public static uint ParseCapacity(String displayName) {
            var regexString = ConfigurationManager.AppSettings["DisplayNameCapacityRegex"];
            var regex = new Regex(@regexString);
            var match = regex.Match(displayName);
            if (match.Success) {
                var regex2 = new Regex(@"\d+");
                var match2 = regex2.Match(match.ToString());
                return Convert.ToUInt32(match2.ToString());
            }

            return 0;
        }

        public static Boolean ParseHasVideoConferencingSupport(String displayName) {
            var lookForWord = ConfigurationManager.AppSettings["DisplayNameVideoWord"];
            return displayName.ToLower().Contains(lookForWord.ToLower());
        }
    }
}