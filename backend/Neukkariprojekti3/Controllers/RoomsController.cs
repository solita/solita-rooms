using System;
using System.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;
using Neukkariprojekti3.Cache;
using Neukkariprojekti3.DTO;
using Neukkariprojekti3.Exchange;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace Neukkariprojekti3.Controllers
{
    // [Authorize]
    [EnableCors("*", "*", "*")]
    public class RoomsController : ApiController
    {
        /** GET api/rooms
         * Gets the list of rooms for the current day.
         */
        public ReturnMessage Get()
        {
            return Get(DateTime.Now.ToString("yyyy-MM-dd"));
        }

        /** GET api/rooms/date
         * Gets the list of rooms for the selected day.
         * @param date format YYYY-MM-DD
         */
        [Route("api/rooms/{date}")] // Should be the same as default routing but that did not work...
        public ReturnMessage Get(String date)
        {
            var dateTime = Convert.ToDateTime(date);
            var rooms = new ExchangeConnector().GetRooms(dateTime);

            return new ReturnMessage
            {
                Message = "OK",
                Rooms = rooms,
                Date = date
            };
        }
    }
}