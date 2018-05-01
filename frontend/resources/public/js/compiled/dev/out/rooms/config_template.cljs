(ns rooms.config-template)

(def template
  {:locations
   (sort-by :name [{:id :helsinki :filters ["Helsinki"]}
                   {:id :oulu :filters ["Oulu"]}
                   {:id :tampere :filters ["Tampere"]}
                   {:id :virtual :filters ["Virtual" "Virtuaali"]}
                   {:id :tallinn :filters ["Tallinna" "Tallinn"]}
                   {:id :stockholm :filters ["Sto" "Stockholm" "Tukholma"]}])
   :timetable {:start-hour 7
               :end-hour 17}
   :fetching {:base-url "https://roomswebservice.example.com/api/rooms/"
              :fetch-next-days 2
              :automatic-fetch-delay-ms (* 1000 30)}})