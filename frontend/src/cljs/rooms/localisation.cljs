(ns rooms.localisation)

(def ^{:private true} texts
  ;; Room fetching
  {:fetching-rooms {:fi "Haetaan varauksia"
                    :en "Retrieving bookings"}
   :showing-bookings {:fi "Varaukset: "
                      :en "Bookings for"}
   :rooms-fetch-failed {:fi "Varausten haku epäonnistui!"
                        :en "Unable to retrieve bookings from the server!"}
   ;; Heading
   :rooms-on-map {:fi "Neukkarit kartalla"
                  :en "Rooms on map"}
   :rooms-info {:fi "Neukkari-info"
                :en "Rooms info"}
   ;; Locations
   :location-helsinki {:fi "Helsinki"
                       :en "Helsinki"}
   :location-oulu {:fi "Oulu"
                       :en "Oulu"}
   :location-tampere {:fi "Tampere"
                       :en "Tampere"}
   :location-stockholm {:fi "Tukholma"
                       :en "Stockholm"}
   :location-tallinn {:fi "Tallinna"
                       :en "Tallinn"}
   :location-virtual {:fi "Virtuaali"
                       :en "Virtual"}
   ;; Filters
   :date {:fi "Päivämäärä"
          :en "Date"}
   :urgency {:fi "Kiireellisyys"
             :en "Urgency"}
   :capacity {:fi "Henkilömäärä"
              :en "Capacity persons"}
   :available-soon {:fi "Vapaa pian"
                    :en "Available soon"}
   :video-meeting-room {:fi "Video"
                        :en "Video"}
   :client-meeting-room {:fi "Asiakasneukkari"
                         :en "Client meeting"}
   :internal-meeting-room {:fi "Sisäinen neukkari"
                           :en "Internal meeting"}
   ;; Places
   :stockholm {:fi "Tukholma"
               :en "Stockholm"}
   :virtual {:fi "Virtuaali"
             :en "Virtual"}
   :tallin {:fi "Tallinna"
            :en "Tallinn"}
   ;; Timetable
   :location {:fi "Sijainti"
              :en "Location"}
   :room {:fi "Huone"
          :en "Room"}
   :features {:fi "Tiedot"
              :en "Features"}
   :subject {:fi "Aihe"
             :en "Subject"}
   :booking-period {:fi "Varausaika"
                    :en "Time"}
   :room-error {:fi "Varausten haku epäonnistui."
                :en "Unable to retrieve bookings."}
   ;; Months
   :january {:fi "Tammikuu"
             :en "January"}
   :february {:fi "Helmikuu"
              :en "February"}
   :march {:fi "Maaliskuu"
           :en "March"}
   :april {:fi "Huhtikuu"
           :en "April"}
   :may {:fi "Toukokuu"
         :en "May"}
   :june {:fi "Kesäkuu"
          :en "June"}
   :july {:fi "Heinäkuu"
          :en "July"}
   :august {:fi "Elokuu"
            :en "August"}
   :september {:fi "Syyskuu"
               :en "September"}
   :october {:fi "Lokakuu"
             :en "October"}
   :november {:fi "Marraskuu"
              :en "November"}
   :december {:fi "Joulukuu"
              :en "December"}
   ;; Days
   :week {:fi "Viikko"
          :en "Week"}
   :week-short {:fi "vk"
                :en "wk"}

   :day-monday {:fi "maanantai"
                :en "Monday"}
   :day-tuesday {:fi "tiistai"
                 :en "Tuesday"}
   :day-wednesday {:fi "keskiviikko"
                   :en "Wednesday"}
   :day-thursday {:fi "torstai"
                  :en "Thursday"}
   :day-friday {:fi "perjantai"
                :en "Friday"}
   :day-saturday {:fi "lauantai"
                  :en "Saturday"}
   :day-sunday {:fi "su"
                :en "Sunday"}

   :day-monday-short {:fi "ma"
                      :en "mon"}
   :day-tuesday-short {:fi "ti"
                       :en "tue"}
   :day-wednesday-short {:fi "ke"
                         :en "wed"}
   :day-thursday-short {:fi "to"
                        :en "thu"}
   :day-friday-short {:fi "pe"
                      :en "fri"}
   :day-saturday-short {:fi "la"
                        :en "sat"}
   :day-sunday-short {:fi "su"
                      :en "sun"}})

(defn text
  [text-id language-id]
   (get-in texts [text-id language-id]))