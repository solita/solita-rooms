(ns rooms.date
  (:require [cljs-time.core :as t]))

(defn same-date? [date1 date2]
  (if-not (and date1 date2)
    false
    (and (= (t/year date1) (t/year date2))
         (= (t/month date1) (t/month date2))
         (= (t/day date1) (t/day date2)))))

(defn same-date-time? [date-time1 date-time2]
  (if-not (and date-time1 date-time2)
    false
    (and (= (t/year date-time1) (t/year date-time2))
         (= (t/month date-time1) (t/month date-time2))
         (= (t/day date-time1) (t/day date-time2))
         (= (t/hour date-time1) (t/hour date-time2))
         (= (t/minute date-time1) (t/minute date-time2))
         (= (t/second date-time1) (t/second date-time2)))))

(defn next-month [month]
  (assert (and (<= 1 month 12))
          (pr-str "Month must be between 1 and 12, got: " month))
  (if (= 12 month) 1 (inc month)))

(defn previous-month [month]
  (assert (and (<= 1 month 12))
          (pr-str "Month must be between 1 and 12, got: " month))
  (if (= 1 month) 12 (dec month)))