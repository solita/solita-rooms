using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Neukkariprojekti3.DTO;

namespace Neukkariprojekti3.Cache
{
    public class CachedRooms {
        private readonly DateTime _cachedTimestamp;
        private readonly IEnumerable<Room> _rooms;

        public CachedRooms(IEnumerable<Room> rooms) {
            this._cachedTimestamp = DateTime.Now;
            this._rooms = rooms;
        }

        public DateTime GetTimestamp() {
            return _cachedTimestamp;
        }

        public IEnumerable<Room> GetRooms() {
            return _rooms;
        } 

    }
}