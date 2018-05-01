using System;
using System.Collections.Generic;
using System.Configuration;
using System.DirectoryServices;
using System.Linq;
using Microsoft.Exchange.WebServices.Data;
using Neukkariprojekti3.DTO;
using Neukkariprojekti3.Cache;
using System.Net;
using System.Threading;

namespace Neukkariprojekti3.AD {
    public class ADConnector {
        private readonly Boolean autoDiscoverAD = ConfigurationManager.AppSettings["AutoDiscoverAD"].Equals("true");
        private readonly string adEntry = ConfigurationManager.AppSettings["ADEntry"];
        private readonly string adUsername = ConfigurationManager.AppSettings["ADUsername"];
        private readonly string adPassword = ConfigurationManager.AppSettings["ADPassword"];

        public List<Room> GetRoomsList() {
            var resultCollection = FindRoomsFromActiveDirectory();

            return (from SearchResult result in resultCollection
                    select result.GetDirectoryEntry()
                into entry
                    let roomName = entry.Properties["mailNickname"].Value.ToString().Trim()
                    let roomEmail = entry.Properties["mail"].Value.ToString().Trim()
                    let roomDisplayName = entry.Properties["displayName"].Value.ToString().Trim()
                    select new Room { Name = roomName, Email = roomEmail, DisplayName = roomDisplayName }).ToList();
        }

        private SearchResultCollection FindRoomsFromActiveDirectory() {
            const string filter = "(&(objectClass=*)(msExchRecipientDisplayType=7))";
            DirectorySearcher search = null;

            if (autoDiscoverAD) {
                search = new DirectorySearcher(filter);
            } else {
                DirectoryEntry entry = new DirectoryEntry(adEntry, adUsername, adPassword);
                search = new DirectorySearcher(entry, filter);
            }

            return search.FindAll();
        }
    }
}