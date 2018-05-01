using System;
using System.Collections.Generic;

namespace Neukkariprojekti3.DTO
{
    public class ReturnMessage
    {
        public String Message { get; set; }
        public Boolean CachedOnServer { get; set; }
        public DateTime CachedDateTime { get; set; }
        public String Date { get; set; } /// Contains the date of the returned rooms' bookings. Format: YYYY-MM-DD
        public IEnumerable<Room> Rooms { get; set; }
    }
}