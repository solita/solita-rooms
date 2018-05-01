(ns rooms.domain.room-test
  (:require [rooms.domain.room :as room-domain]
            [cljs-time.core :as t]
            [clojure.test :refer :all]))

(deftest filter-urgency-test
  ;; These tests assume that the urgency filter uses 15 minutes
  ;; as the short time period

  (is (true? (room-domain/filter-urgency
               {:bookedTimes [{:date "2018-01-01"
                               :startTime "8:00"
                               :endTime "8:30"}]}
               (t/date-time 2018 1 1 9 0)))
      "Current time is after all bookings")

  (is (true? (room-domain/filter-urgency
               {:bookedTimes [{:date "2018-01-01"
                               :startTime "8:00"
                               :endTime "8:30"}
                              {:date "2018-01-01"
                               :startTime "11:00"
                               :endTime "12:00"}]}
               (t/date-time 2018 1 1 9 0)))
      "None of the booked times are near the current time")

  (is (false? (room-domain/filter-urgency
                {:bookedTimes [{:date "2018-01-01"
                                :startTime "8:00"
                                :endTime "10:00"}]}
                (t/date-time 2018 1 1 9 0)))
      "Current time is in the middle of the booking")

  (is (true? (room-domain/filter-urgency
               {:bookedTimes [{:date "2018-01-01"
                               :startTime "8:00"
                               :endTime "9:00"}]}
               (t/date-time 2018 1 1 9 0)))
      "The time is 9:00 and the current booking ends at 9:00")

  (is (true? (room-domain/filter-urgency
               {:bookedTimes [{:date "2018-01-01"
                               :startTime "8:00"
                               :endTime "8:55"}]}
               (t/date-time 2018 1 1 9 0)))
      "The time is 9:00 and the current booking ended 5 minutes ago")

  (is (true? (room-domain/filter-urgency
               {:bookedTimes [{:date "2018-01-01"
                               :startTime "8:00"
                               :endTime "9:05"}]}
               (t/date-time 2018 1 1 9 0)))
      "The time is 9:00 and the current booking is going to end in 5 minutes")

  (is (false? (room-domain/filter-urgency
                {:bookedTimes [{:date "2018-01-01"
                                :startTime "8:00"
                                :endTime "9:00"}
                               {:date "2018-01-01"
                                :startTime "9:00"
                                :endTime "10:00"}]}
                (t/date-time 2018 1 1 9 0)))
      "The time is 9:00 and the current booking is going to end in 5 minutes. The other booking is starting immediately afterwars.")

  (is (true? (room-domain/filter-urgency
               {:bookedTimes [{:date "2018-01-01"
                               :startTime "8:00"
                               :endTime "9:00"}
                              {:date "2018-01-01"
                               :startTime "9:30"
                               :endTime "10:00"}]}
               (t/date-time 2018 1 1 9 0)))
      "The time is 9:00 and the current booking is going to end in 5 minutes. There are 30 minutes free time to the next booking."))