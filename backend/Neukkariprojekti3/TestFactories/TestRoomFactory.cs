using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Neukkariprojekti3.DTO;

namespace Neukkariprojekti3.TestRoomFactory
{
    public class TestRoomFactory
    {
        /** Creates aarbitrary rooms, can be used for testing purposes. */
        public List<Room> CreateTestRooms()
        {
            var rooms = new List<Room>();

            var room1 = new Room { Name = "RoomFromServer1", Location = "Oulu" };
            room1.BookedTimes.Add(new Room.Booking { StartTime = "10:00", EndTime = "11:15" });
            room1.BookedTimes.Add(new Room.Booking { StartTime = "13:00", EndTime = "13:45" });
            room1.HasVideoConferencingSupport = true;
            room1.IsSuitableForClientMeetings = true;
            room1.IsSuitableForInternalMeetings = true;
            rooms.Add(room1);

            var room2 = new Room { Name = "RoomFromServer2", Location = "Tampere" };
            room2.BookedTimes.Add(new Room.Booking { StartTime = "11:00", EndTime = "12:35" });
            room2.HasVideoConferencingSupport = false;
            room2.IsSuitableForClientMeetings = false;
            room2.IsSuitableForInternalMeetings = true;
            rooms.Add(room2);

            var room3 = new Room { Name = "RoomFromServer3", Location = "Helsinki" };
            room3.BookedTimes.Add(new Room.Booking { StartTime = "8:00", EndTime = "10:00" });
            room3.HasVideoConferencingSupport = true;
            room3.IsSuitableForClientMeetings = false;
            room3.IsSuitableForInternalMeetings = true;
            rooms.Add(room3);

            return rooms;
        }
    }
}