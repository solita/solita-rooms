using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Neukkariprojekti3.DTO;
using NUnit.Framework;

namespace Neukkariprojekti3.Cache
{
    public class RoomCacheManager {

        private static DateTime _lastClearTimestamp = DateTime.Now;
        private static readonly object AccessLock = new Object();

        /** @return null if rooms not found */
        public static CachedRooms FindCachedRoomsForDay(DateTime dateTime) {
            var dateTimeAsString = dateTime.ToString("yyyy-MM-dd");

            lock (AccessLock) {
                ClearCacheIfTooOld();
                if (HttpRuntime.Cache[dateTimeAsString] == null) return null;

                var cachedRooms = (CachedRooms) HttpRuntime.Cache[dateTime.ToString("yyyy-MM-dd")];
                var cachedRoomsDate = cachedRooms.GetTimestamp();
                if (cachedRoomsDate.AddMinutes(1) >= DateTime.Now) { // Cached less than minute ago
                    return cachedRooms;
                }

                RemoveCachedRooms(dateTime);
                return null;
            }
        }

        private static void RemoveCachedRooms(DateTime dateTime)
        {
            HttpRuntime.Cache.Remove(dateTime.ToString("yyyy-MM-dd"));
        }

        private static void ClearCacheIfTooOld() {
            var lastClearTimestampTemp = _lastClearTimestamp;
            if (lastClearTimestampTemp.AddMonths(1) >= DateTime.Now) return; // Cache cleared less than one month ago

            foreach (DictionaryEntry cache in HttpContext.Current.Cache)
            {
                HttpContext.Current.Cache.Remove(cache.Key.ToString());
            }

            _lastClearTimestamp = DateTime.Now;
        }

        public static void CacheRooms(IEnumerable<Room> rooms, DateTime bookingDate)
        {
            lock (AccessLock)
            {
                ClearCacheIfTooOld();
                HttpRuntime.Cache[bookingDate.ToString("yyyy-MM-dd")] = new CachedRooms(rooms);
            }
        }
    }
}