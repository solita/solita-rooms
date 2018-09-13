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

(defn- check-bookings
  "Checks that every booking start time is before end time. If not, fixes them.
   This is done because it is possible, although rare, that the response might contain bad start and end times."
  [rooms]
  (mapv (fn [room]
          (let [bookings (:bookedTimes room)
                checked-bookings
                (map (fn [booking]
                       (let [start-time (:startTime booking)
                             end-time (:endTime booking)
                             start-time-parsed (fmt/hhmm->date start-time)
                             end-time-parsed (fmt/hhmm->date end-time)
                             bad-start-and-end-time? (t/after? start-time-parsed end-time-parsed)
                             checked-start-time (if bad-start-and-end-time? end-time start-time)
                             checked-end-time (if bad-start-and-end-time? start-time end-time)]
                         (assoc booking
                           :startTime checked-start-time
                           :endTime checked-end-time)))
                     bookings)]
            (assoc room :bookedTimes checked-bookings)))
        rooms))

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
          (fmt/date->iso-8601 date)
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

  RoomsFetched
  (process-event [{rooms :rooms date :date} app]
    (let [checked-response (check-bookings rooms)]
      (merge app
             {:rooms (merge (:rooms app)
                            {(fmt/date->iso-8601 date) (with-meta
                                                         checked-response
                                                         {:saved (t/time-now)})})
              :server-connection? true
              :fetching-rooms? false})))

  RoomsNotFetched
  (process-event [_ app]
    (assoc app :fetching-rooms? false
               :server-connection? false)))