(ns rooms.domain.room
  "Domain helper functions for rooms & bookings."
  (:require
    [cljs-time.core :as t]
    [rooms.date :as date]
    [rooms.fmt :as fmt]))

(defn filter-urgency
  "Returns true if the given room satisfies the urgency filter (is free now or soon)"
  [room now]
  ;; None of the bookings overlap with the upcoming short time period
  ;; OR some of them do, but the booking is going to end soon and there is no
  ;; another booking starting after it.
  (let [bookings (map
                   (fn [booking]
                     (let [parsed-date (fmt/iso-8601->date (:date booking))
                           parsed-start-hh-mm (fmt/hhmm->date (:startTime booking))
                           parsed-end-hh-mm (fmt/hhmm->date (:endTime booking))]
                       (assoc booking
                         :date parsed-date
                         :startTime (t/local-date-time
                                      (t/year parsed-date)
                                      (t/month parsed-date)
                                      (t/day parsed-date)
                                      (t/hour parsed-start-hh-mm)
                                      (t/minute parsed-start-hh-mm))
                         :endTime (t/local-date-time
                                    (t/year parsed-date)
                                    (t/month parsed-date)
                                    (t/day parsed-date)
                                    (t/hour parsed-end-hh-mm)
                                    (t/minute parsed-end-hh-mm)))))
                   (:bookedTimes room))
        all-day-bookings (filter :isAllDayBooking bookings)
        next-short-time-period (t/interval now (t/plus now (t/minutes 15)))
        overlaping-bookings (filter #(t/overlaps? next-short-time-period
                                                  (t/interval (:startTime %) (:endTime %)))
                                    bookings)]
    (boolean (and (empty? all-day-bookings)
                  (or
                    (empty? overlaping-bookings)
                    (every?
                      (fn [overlaping-booking]
                        (let [overlaping-booking-end (:endTime overlaping-booking)
                              bookings-starting-after (filter (fn [booking]
                                                                (date/same-date-time?
                                                                  (:startTime booking)
                                                                  overlaping-booking-end))
                                                              bookings)]
                          (and (t/within? next-short-time-period overlaping-booking-end)
                               (empty? bookings-starting-after))))
                      overlaping-bookings))))))

(defn filtered-rooms [{:keys [rooms now filters locations-config]}]
  (filterv
    (fn [room]
      (let [location-ids (:locations filters)
            location-filter-names (->> (filter #(location-ids (:id %)) locations-config)
                                       (mapcat :filters)
                                       (set))]
        (boolean (and
                   ;; Location
                   (or (empty? location-filter-names)
                       (location-filter-names (:location room)))
                   ;; Features
                   (and (or (not (:video? filters))
                            (and (:video? filters)
                                 (:hasVideoConferencingSupport room))))
                   (and (or (not (:client? filters))
                            (and (:client? filters)
                                 (:isSuitableForClientMeetings room))))
                   (and (or (not (:internal? filters))
                            (and (:internal? filters)
                                 (:isSuitableForInternalMeetings room))))
                   ;; Urgency
                   (or (not (:urgency? filters))
                       (filter-urgency room now))
                   ;; Capacity
                   (>= (:capacity room)
                       (:capacity filters))))))
    rooms))