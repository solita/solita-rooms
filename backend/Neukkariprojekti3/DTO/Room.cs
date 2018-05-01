using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace Neukkariprojekti3.DTO
{
    public class Room
    {
        public String Name { get; set; }
        public String Location { get; set; }
        public Boolean IsSuitableForInternalMeetings { get; set; }
        public Boolean IsSuitableForClientMeetings { get; set; }
        public Boolean HasVideoConferencingSupport { get; set; }
        public List<Booking> BookedTimes { get; set; }
        public uint Capacity { get; set; }
        public String Email { get; set; }
        public String DisplayName { get; set; }
        public bool Error { get; set; }

        public Room() {
            BookedTimes = new List<Booking>();
        }

        public class Booking {
            public String Date { get; set; } /// Format: YYYY-MM-DD TODO Change to DateTime and parse
            public String StartTime { get; set; } /// Format: HH:MM TODO Change to  DateTime and parse
            public String EndTime { get; set; }
            public String Subject { get; set; }
            public String BookedBy { get; set; }
            public bool IsAllDayBooking { get; set; }
        }
    }
}