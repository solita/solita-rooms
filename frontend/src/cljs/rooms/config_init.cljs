(ns rooms.config-init)

(def config
  {:locations
    [{:id :tampere :filters ["Tampere"]}
    {:id :helsinki :filters ["Helsinki"]}
    {:id :oulu :filters ["Oulu"]}
    {:id :lahti :filters ["Lahti"]}
    {:id :turku :filters ["Turku"]}
    {:id :tallinn :filters ["Tallinna" "Tallinn"]}
    {:id :stockholm :filters ["Tukholma" "Sto" "Stockholm"]}
    {:id :virtual :filters ["Virtual" "Virtuaali"]}]
   :use-licensed-assets? false
   :timetable {:start-hour 7
               :end-hour 17}
   :languages [{:id :fi :name "FI"}
               {:id :en :name "EN"}]
   :header-links [{:text-id nil
                   :url nil}]
   :footer-links [{:text "Solita.fi"
                   :url "https://www.solita.fi"}]
   :fetching {:base-url "http://localhost:8000/"
              :fetch-next-days 2
              :automatic-fetch-delay-ms (* 1000 30)}})