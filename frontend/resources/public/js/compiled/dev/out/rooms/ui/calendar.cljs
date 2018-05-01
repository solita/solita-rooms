(ns rooms.ui.calendar
  (:require [rooms.config :as config]
            [rooms.language :as language]
            [rooms.fmt :as fmt]
            [rooms.date :as date]
            [rooms.styles.calendar :as calendar-style]
            [cljs-time.core :as t]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.state :as state]
            [rooms.ui.colors :as colors]
            [rooms.styles.utils :as utils])
  (:require-macros [rooms.ui.macros :refer [for*]]))

(defn cell-day-fmt [day-number]
  (if (<= day-number 9)
    (str "0" day-number)
    day-number))

(defn- day-cell [{:keys [current-date selected-date selected-month date date-selected]}]
  [:td (use-style (merge
                    calendar-style/cell
                    calendar-style/cell-clickable
                    (when (date/same-date? current-date date)
                      calendar-style/cell-current-date)
                    (when (date/same-date? selected-date date)
                      calendar-style/cell-selected-date)
                    (when (or (not= (t/year selected-month) (t/year date))
                              (not= (t/month selected-month) (t/month date)))
                      calendar-style/cell-greyed))
                  {:on-click #(date-selected date)})
   (cell-day-fmt (t/day date))])

(defn- week-row [{:keys [current-date selected-date selected-month week-number dates date-selected]}]
  [:tr
   [:td (use-style calendar-style/cell-bold) (cell-day-fmt week-number)]
   (for* [index (range 0 7)]
     [day-cell {:current-date current-date :selected-date selected-date
                :selected-month selected-month
                :date-selected date-selected :date (get dates index)}])])

(defn- dates-vector [{:keys [year month current-month-days-range previous-month-days-range
                             day-of-first-week row-index last-row-index]}]
  (let [full-row-vector (fn []
                          (take 7 (second (split-at (+ (+ (- 7 day-of-first-week) 1)
                                                       (* (dec row-index) 7))
                                                    current-month-days-range))))]
    (vec (cond
           ; First row, include the last days of the previous month + the first days of the current
           (= row-index 0)
           (let [previous-month-end (reverse (take (dec day-of-first-week)
                                                   (reverse previous-month-days-range)))
                 current-month-start (take (- 7 (count previous-month-end)) current-month-days-range)]
             (concat (map #(t/local-date-time year (date/previous-month month) %) previous-month-end)
                     (map #(t/local-date-time year month %) current-month-start)))

           ; Last row, include the last days of the current month + the first days of the next
           (= row-index last-row-index)
           (let [current-month-end (full-row-vector)
                 next-month-days (range 1 29) ; Every month has at least 28 days
                 next-month-start (take (- 7 (count current-month-end)) next-month-days)]
             (concat (map #(t/local-date-time year month %) current-month-end)
                     (map #(t/local-date-time year (date/next-month month) %) next-month-start)))

           ; Something between, include only days from the current month
           :default
           (map #(t/local-date-time year month %) (full-row-vector))))))

(defn- weeks [{:keys [selected-date date-selected selected-month]}]
  (let [current-date (t/time-now)
        month (t/month selected-month)
        year (t/year selected-month)
        first-day-of-month (t/local-date-time year month 1)
        last-day-of-month (t/last-day-of-the-month first-day-of-month)
        first-week-number (t/week-number-of-year first-day-of-month)
        day-of-first-week (t/day-of-week first-day-of-month)
        days-in-month (t/day last-day-of-month)
        days-range (range 1 (inc days-in-month))

        first-day-of-previous-month (t/local-date-time year (date/previous-month month) 1)
        last-day-of-previous-month (t/last-day-of-the-month first-day-of-previous-month)
        days-in-previous-month (t/day last-day-of-previous-month)
        previous-month-days-range (range 1 (inc days-in-previous-month))
        number-of-rows-needed (int (Math/ceil (/ (+ (- day-of-first-week 1) (count days-range))
                                                 7)))]
    [:tbody
     (for* [index (range 0 number-of-rows-needed)]
       [week-row
        {:current-date current-date
         :selected-date selected-date
         :date-selected date-selected
         :selected-month selected-month
         :week-number (+ first-week-number index)
         :dates (dates-vector {:year year
                               :month month
                               :current-month-days-range days-range
                               :previous-month-days-range previous-month-days-range
                               :day-of-first-week day-of-first-week
                               :row-index index
                               :last-row-index (dec number-of-rows-needed)})}])]))

(defn- calendar-header [month month-selected]
  [:header (use-style calendar-style/calendar-header)
   [:div (use-sub-style calendar-style/calendar-header :link
                        {:on-click #(month-selected (t/local-date-time
                                                      (if (= (t/month month) 1)
                                                        (dec (t/year month))
                                                        (t/year month))
                                                      (date/previous-month (t/month month))
                                                      (t/day month)))})
    [:img (use-sub-style calendar-style/calendar-header :triangle
                         {:src (str (config/url-images) "triangle-left-red.svg")})]]
   [:div (use-sub-style calendar-style/calendar-header :heading)
    (str (fmt/fmt-month-name month (:id @state/current-language)) " " (t/year month))]
   [:div (use-sub-style calendar-style/calendar-header :link
                        {:on-click #(month-selected (t/local-date-time
                                                      (if (= (t/month month) 12)
                                                        (inc (t/year month))
                                                        (t/year month))
                                                      (date/next-month (t/month month))
                                                      (t/day month)))})
    [:img (use-sub-style calendar-style/calendar-header :triangle
                         {:src (str (config/url-images) "triangle-right-red.svg")})]]])

(defn calendar [e! app]
  [:div (use-style calendar-style/calendar)
   [calendar-header (:calendar-month app) (fn [date] (e! (state/->SelectCalendarMonth date)))]
   [:div
    [:table
     [:thead
      [:tr
       [:th (use-style calendar-style/cell-bold) (language/text :week-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-monday-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-tuesday-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-wednesday-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-thursday-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-friday-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-saturday-short)]
       [:th (use-style calendar-style/cell-bold) (language/text :day-sunday-short)]]]
     [weeks
      {:selected-date (get-in app [:filters :date])
       :selected-month (:calendar-month app)
       :date-selected (fn [selected-date]
                        (e! (state/->SelectDate selected-date))
                        ;; Show bookigns for the selected date, if available on the app state.
                        ;; Fetch update from the server in any case.

                        ;; If bookings are not available on the app state, the user will see
                        ;; the current bookings in the view.
                        ;; Fetch completion will show the fetched bookings to the user
                        ;; if the selected date is still the same.
                        (e! (state/->ShowBookings selected-date))
                        (e! (state/->FetchRooms selected-date)))}]]]])