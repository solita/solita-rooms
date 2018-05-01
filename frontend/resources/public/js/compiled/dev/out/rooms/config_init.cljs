(ns rooms.config-init)

(def config
  {:locations
   (sort-by :name [{:id :helsinki :filters ["Helsinki"]}
                   {:id :oulu :filters ["Oulu"]}
                   {:id :tampere :filters ["Tampere"]}
                   {:id :virtual :filters ["Virtual" "Virtuaali"]}
                   {:id :tallinn :filters ["Tallinna" "Tallinn"]}
                   {:id :stockholm :filters ["Sto" "Stockholm" "Tukholma"]}])
   :use-licensed-assets? false
   :timetable {:start-hour 7
               :end-hour 17}
   :languages [{:id :fi :name "FI"}
               {:id :en :name "EN"}]
   :header-links [{:text-id :rooms-on-map
                   :url "https://seat.solita.fi"}
                  {:text-id :rooms-info
                   :url "https://intra.solita.fi/display/TOIM/Neuvotteluhuoneet"}]
   :footer-links [{:text "Solita.fi"
                   :url "https://www.solita.fi"}
                  {:text "Solita intra"
                   :url "https://intra.solita.fi"}]
   :fetching {:base-url "https://roomswebservice.solita.fi/api/rooms/"
              :fetch-next-days 2
              :automatic-fetch-delay-ms (* 1000 30)}})