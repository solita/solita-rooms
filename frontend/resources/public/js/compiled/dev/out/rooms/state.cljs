(ns rooms.state
  (:require [tuck.core :as tuck]
            [reagent.ratom :refer [atom]]
            [cljs-time.core :as t]
            [cljs.core.async :refer [<! >! put! close! chan timeout]]
            [rooms.communication :as communication]
            [rooms.fmt :as fmt]
            [alandipert.storage-atom :refer [local-storage]]
            [rooms.cache :as cache]
            [reagent.core :as r]
            [rooms.date :as date])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(def filters-cache-key "rooms2-filters")

(def state (atom {:filters {:date (t/time-now) ; Filter values in the UI
                            :locations #{}
                            :urgency? false
                            :video? false
                            :internal? false
                            :client? false
                            :capacity 0}
                  :calendar-month (t/time-now) ; Selected calendar month
                  :showing-bookings nil ; Date for which the bookings are shown
                  :rooms {} ; ISO-8601 string -> rooms & bookings payload from the server
                  :server-connection? true
                  :fetching-rooms? false}))

(defrecord SetFilters [filters])
(defrecord FetchRooms [date])
(defrecord SelectDate [date])
(defrecord CheckFilterLocations [location-id])
(defrecord CheckFilterBoolean [name value])
(defrecord CheckFilterCapacity [value])
(defrecord SelectCalendarMonth [date])
(defrecord ShowBookings [date])
(defrecord RoomsFetched [date rooms])
(defrecord RoomsNotFetched [])

;; Helpers

(defn- cache-filters [app]
  (cache/cache-value filters-cache-key (dissoc (:filters app)
                                               :date)))

(defn load-filters-from-cache []
  (when-let [cached-filters (cache/read-cache-value filters-cache-key)]
    (reset! state (assoc @state :filters (merge (:filters @state)
                                                cached-filters)))))

(def now-local (r/atom (t/time-now)))

(defn start-updating-local-now []
  (.addEventListener js/document "visibilitychange"
                     #(reset! now-local (t/time-now)))

  (go-loop
    []
    (<! (timeout (* 1000 60)))
    (reset! now-local (t/time-now))
    (recur)))

(def current-language (local-storage (r/atom {:id :en :name "EN"})
                                     :rooms2-language))

(defn switch-language [new-language]
  (reset! current-language new-language))

;; Storage manipulation

(extend-protocol tuck/Event
  SetFilters
  (process-event [{filters :filters} app]
    (assoc app :filters filters))

  FetchRooms
  (process-event [{date :date} app]
    (let [rooms-fetched (tuck/send-async! ->RoomsFetched)
          rooms-not-fetched (tuck/send-async! ->RoomsNotFetched)]
      (go
        (communication/fetch-rooms
          (fmt/date->iso-8601 (get-in app [:filters :date]))
          {:success (fn [response]
                      (rooms-fetched date response))
           :error (fn [response]
                    (rooms-not-fetched))}
          {:use-cache? true}))
      (assoc app :fetching-rooms? true)))

  SelectDate
  (process-event [{date :date} app]
    (assoc-in app [:filters :date] date))

  CheckFilterLocations
  (process-event [{location-id :location-id} app]
    (let [current-locations (get-in app [:filters :locations])
          checked? ((get-in app [:filters :locations]) location-id)
          new-state (if checked?
                      (assoc-in app [:filters :locations] (disj current-locations location-id))
                      (assoc-in app [:filters :locations] (conj current-locations location-id)))]
      (cache-filters new-state)
      new-state))

  CheckFilterBoolean
  (process-event [{name :name value :value} app]
    (let [new-state (assoc-in app [:filters name] value)]
      (cache-filters new-state)
      new-state))

  CheckFilterCapacity
  (process-event [{value :value} app]
    (let [new-state (assoc-in app [:filters :capacity] value)]
      (cache-filters new-state)
      new-state))

  SelectCalendarMonth
  (process-event [{date :date} app]
    (assoc app :calendar-month date))

  ShowBookings
  ;; Shows bookings for the selected date, if the result is available on the app state
  ;; and it's not too old
  (process-event [{date :date} app]
    (if-let [rooms (get-in app [:rooms (fmt/date->iso-8601 date)])]
      (let [saved-timestamp (:saved (meta rooms))
            max-age-in-seconds 30
            result-too-old? (> (t/in-seconds (t/interval saved-timestamp (t/time-now)))
                               max-age-in-seconds)]
        (if result-too-old?
          app
          (assoc app :showing-bookings date)))
      app))

  RoomsFetched
  (process-event [{rooms :rooms date :date} app]
    (merge app
           {:rooms (merge (:rooms app)
                          {(fmt/date->iso-8601 date) (with-meta rooms
                                                                {:saved (t/time-now)})})
            :server-connection? true}
           ;; If the selected date is still the same, show bookings to the user.
           (let [current-date (get-in @state [:filters :date])]
             (when (date/same-date? date current-date)
               {:showing-bookings current-date
                :fetching-rooms? false}))))

  RoomsNotFetched
  (process-event [_ app]
    (assoc app :fetching-rooms? false
               :server-connection? false)))