(ns rooms.ui.rooms
  (:require [rooms.config :as config]
            [rooms.ui.colors :as colors]
            [rooms.styles.content :as content]
            [reagent.ratom :refer [atom]]
            [rooms.styles.rooms :as rooms]
            [rooms.dom :as dom]
            [rooms.language :as language]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.fmt :as fmt]
            [reagent.core :as r]
            [cljs-time.format :as df]
            [cljs-time.core :as t]
            [rooms.domain.room :as room-domain]
            [rooms.ui.fonts :as fonts]
            [rooms.ui.icons :as icons]
            [clojure.string :as str]
            [rooms.date :as date]
            [rooms.styles.utils :as utils]
            [rooms.styles.grid :as grid]
            [rooms.state :as state])
  (:require-macros [rooms.ui.macros :refer [for*]]))

(def column-room-location 100)
(def column-room-name 120)
(def column-room-features 120)

(def opened-timebar (r/atom {:id nil
                             :width nil
                             :x nil
                             :y nil}))

(defn- html-in-svg
  "Renders HTML inside SVG.
   Not all browsers support this (IE11 and below), so a working SVG solution
   should be provided for fallback rendering."
  ([opts element]
   (html-in-svg opts element nil))
  ([opts element fallback]
   (assert (and (:x opts) (:y opts) (:width opts) (:height opts)))
   (if dom/ie?
     (if fallback
       fallback
       (do (.warn js/console "HTML in SVG fallback not given for element: " (pr-str element))
           [:g]))
     [:foreignObject (select-keys opts [:x :y :width :height])
      element])))

(defn- cell
  ([size background-color text]
   (cell size background-color text nil))
  ([size background-color text text-style]
   (cell size background-color text text-style nil))
  ([size background-color text text-style fallback]
   [:g
    [:rect (merge size {:fill background-color})]
    [html-in-svg size
     [:div (use-style (merge {:padding "8px 5px"} text-style)) text]
     (if fallback
       fallback
       [:text (assoc size
                :x (+ (:x size) 5)
                :y (+ (:y size) 22)) text])]]))

(defn- timebar [size subject start end]
  (let [id (gensym "timebar")
        hover? (r/atom false)]
    (fn [size subject start end]
      (let [open? (= (:id @opened-timebar) id)]
        [:g
         [:rect (merge size {:fill (cond open? colors/brand-red
                                         @hover? colors/timebar-hover
                                         :default colors/timebar)})]
         [html-in-svg size
          [:div (use-style (merge {:padding "7px 5px"
                                   :color colors/white
                                   :cursor :pointer
                                   :width (str (:width size) "px")
                                   :height (str (:height size) "px")
                                   :white-space :nowrap
                                   :overflow :hidden}
                                  (fonts/font-small))
                           {:on-click (fn [e]
                                        (if (and (:id @opened-timebar) (= (:id @opened-timebar) id))
                                          (reset! opened-timebar nil)
                                          (reset! opened-timebar {:id id
                                                                  :x (:x size)
                                                                  :y (:y size)
                                                                  :width (:width size)
                                                                  :subject subject
                                                                  :booking-period (str start " - " end)}))
                                        (.stopPropagation e))
                            :on-mouse-over #(reset! hover? true)
                            :on-mouse-out #(reset! hover? false)})
           subject]
          (let [size (assoc size
                       :x (+ (:x size) 5)
                       :y (+ (:y size) 22))]
            [:g size
             [:text (assoc size :fill "white")
              ;; Make sure text is not drawn outside the bar (quick and dirty solution)
              (subs subject 0 (int (/ (:width size) 12)))]])]]))))

(defn- rooms-timetable-header [{:keys [start-hour end-hour width row-height]}]
  (let [size-opts {:height row-height}
        background-color colors/background
        hours (range start-hour (inc end-hour))
        hour-fmt (fn [hour]
                   (if (< @dom/window-width grid/breakpoint-md)
                     hour
                     (if (< hour 10)
                       (str "0" hour ":00")
                       (str hour ":00"))))
        time-columns-width (- width column-room-location column-room-name column-room-features)
        time-column-start-x (+ column-room-location column-room-name column-room-features)
        time-column-width (max (float (/ time-columns-width (count hours))) 0)]
    [:g
     [cell (merge size-opts {:width column-room-location
                             :x 0 :y 0}) background-color
      (language/text :location) (fonts/bold)]
     [cell (merge size-opts {:width column-room-name
                             :x column-room-location :y 0}) background-color
      (language/text :room) (fonts/bold)]
     [cell (merge size-opts {:width column-room-features
                             :x (+ column-room-location column-room-name) :y 0}) background-color
      (language/text :features) (fonts/bold)]

     (doall
       (map-indexed
         (fn [index hour]
           ^{:key index}
           [cell (merge size-opts {:width time-column-width
                                   :x (+ time-column-start-x (* index time-column-width))
                                   :y 0})
            background-color
            (hour-fmt hour)
            (merge {:word-wrap :unset} (fonts/bold))])
         hours))]))

(defn- feature-item [contents]
  [:td {:style {:width "30px" :text-align :right}} contents])

(defn- features [room]
  [:table
   [:tbody
    [:tr
     [feature-item (:capacity room)]
     [feature-item (when (:hasVideoConferencingSupport room)
                     [:img (use-style {:height (str icons/default-icon-size "px")}
                                      {:src (str (config/url-images) "video-gray40.svg")})])]
     [feature-item (when (:isSuitableForClientMeetings room)
                     [:img (use-style {:height (str icons/default-icon-size "px")}
                                      {:src (str (config/url-images) "person-gray40.svg")})])]]]])

(defn- features-fallback [room position]
  (let [text-position (assoc position
                        :x (+ (:x position) 5)
                        :y (+ (:y position) 22))]
    [:g position
     [:text text-position (:capacity room)]
     (when (:hasVideoConferencingSupport room)
       [:image {:x (+ (:x position) icons/default-icon-size 10)
                :y (+ (:y position) 5)
                :height (str icons/default-icon-size "px")
                :href (str (config/url-images) "video-gray40.svg")}])
     (when (:isSuitableForClientMeetings room)
       [:image {:x (+ (:x position) (* icons/default-icon-size 2) 20)
                :y (+ (:y position) 5)
                :height (str icons/default-icon-size "px")
                :href (str (config/url-images) "person-gray40.svg")}])]))

(defn- rooms-timetable-row [index room {:keys [width start-hour end-hour row-height]}]
  (let [even? (= (rem index 2) 0)
        background-color (if even? colors/brand-gray-240 colors/background)
        hours (range start-hour (inc end-hour))
        size-opts {:height row-height}
        time-columns-width (- width column-room-location column-room-name column-room-features)
        time-column-start-x (+ column-room-location column-room-name column-room-features)
        single-time-column-width (max (float (/ time-columns-width (count hours))) 0)]
    [:g
     ;; Location
     [cell (merge size-opts {:x 0 :y (* index row-height)
                             :width column-room-location})
      background-color
      (:location room)
      (fonts/font-small)]
     ;; Room name
     [cell (merge size-opts {:x column-room-location :y (* index row-height)
                             :width column-room-name :height row-height})
      background-color
      (str/capitalize (:name room))
      (fonts/font-small)]
     ;; Features
     [cell (merge size-opts {:x (+ column-room-location column-room-name) :y (* index row-height)
                             :width column-room-features :height row-height})
      background-color
      [features room]
      (fonts/font-small)
      [features-fallback room {:x (+ column-room-location column-room-name)
                               :y (* index row-height)
                               :width column-room-features
                               :height row-height}]]

     ;; Hours (background cells)
     (doall
       (map-indexed
         (fn [hour-index hour]
           ^{:key hour-index}
           [cell (merge size-opts {:width single-time-column-width
                                   :x (+ time-column-start-x (* hour-index single-time-column-width))
                                   :y (* index row-height)})
            background-color
            ""
            (fonts/font-small)])
         hours))]))

(defn- timebars [index room {:keys [width start-hour end-hour row-height]}]
  (let [hours (range start-hour (inc end-hour))
        time-columns-width (- width column-room-location column-room-name column-room-features)
        time-column-start-x (+ column-room-location column-room-name column-room-features)
        single-time-column-width (max (float (/ time-columns-width (count hours))) 0)]
    [:g
     (if (:error room)
       [:text {:x (+ time-column-start-x 5)
               :y (+ (* index row-height) 25)
               :width 300
               :height row-height}
        (language/text :room-error)]

       (map-indexed
         (fn [booked-index booking]
           (let [start-time (fmt/hhmm->date (:startTime booking))
                 end-time (fmt/hhmm->date (:endTime booking))
                 is-all-day-booking? (:isAllDayBooking booking)
                 start-time (if is-all-day-booking?
                              (t/local-date-time (t/year start-time) (t/month start-time) (t/day start-time) 0 0)
                              start-time)
                 end-time (if is-all-day-booking?
                            (t/local-date-time (t/year end-time) (t/month end-time) (t/day end-time) 23 59)
                            end-time)
                 booking-start-hour (t/hour start-time)
                 booking-start-minute (t/minute start-time)
                 minutes-between (t/in-minutes (t/interval start-time end-time))
                 duration-full-hours (int (/ minutes-between 60))
                 duration-remaining-minutes (- minutes-between (* duration-full-hours 60))
                 duration-in-pixels (+ (* duration-full-hours single-time-column-width)
                                       (* (/ duration-remaining-minutes 60) single-time-column-width))
                 bar-width duration-in-pixels
                 bar-start-x (+ time-column-start-x
                                (* (- booking-start-hour start-hour) single-time-column-width)
                                (* (/ booking-start-minute 60) single-time-column-width))
                 bar-end-x (+ bar-start-x bar-width)
                 ; Never draw bars on top of heading columns
                 bar-start-x (cond
                               (and (< bar-start-x time-column-start-x)
                                    (> bar-end-x time-column-start-x))
                               time-column-start-x

                               (and (< bar-start-x time-column-start-x)
                                    (<= bar-end-x time-column-start-x))
                               nil

                               :default
                               bar-start-x)
                 ; Add a bit of space between bars by not using the full width / height
                 size-opts (when bar-start-x
                             {:x (+ bar-start-x 1)
                              :y (+ (* index row-height) 1)
                              :width (- bar-width 2)
                              :height (- row-height 2)})]
             (when size-opts
               ^{:key booked-index}
               [timebar
                size-opts
                (:subject booking)
                (:startTime booking)
                (:endTime booking)])))
         (:bookedTimes room)))]))

(defn- borders [{:keys [width height start-hour end-hour]}]
  (let [hours (range start-hour (inc end-hour))
        time-columns-width (- width column-room-location column-room-name column-room-features)
        time-column-start-x (+ column-room-location column-room-name column-room-features)
        single-time-column-width (max (float (/ time-columns-width (count hours))) 0)]
    [:g
     ;; Heading border
     [:rect {:x 0 :y 0 :width width :height 1 :fill colors/brand-gray-230}]
     ;; Vertical borders
     (for [hour-index (range 0 (count (inc hours)))]
       ^{:key hour-index}
       [:rect {:x (+ time-column-start-x
                     (* hour-index single-time-column-width))
               :y 0
               :width 1
               :height height
               :fill colors/brand-gray-180}])]))

(defn- current-time [{:keys [width height row-height start-hour end-hour]}]
  (let [now @state/now-local
        hours (range start-hour (inc end-hour))
        time-columns-width (- width column-room-location column-room-name column-room-features)
        time-column-start-x (+ column-room-location column-room-name column-room-features)
        single-time-column-width (max (float (/ time-columns-width (count hours))) 0)
        current-time-x (+ time-column-start-x
                          ;; Full hours
                          (* (- (t/hour now) start-hour) single-time-column-width)
                          ;; Minutes
                          (* (/ (t/minute now) 60) single-time-column-width))]
    (when (>= current-time-x time-column-start-x)
      [:g
       [:rect {:x current-time-x
               :y row-height
               :width 1
               :height (- height row-height)
               :fill colors/brand-red}]])))

(defn time-shifting [{:keys [width]}]
  (let [time-column-start-x (+ column-room-location column-room-name column-room-features)
        y 11]
    [:g
     (let [size {:x (- time-column-start-x 25)
                 :y (- y 5)
                 :width 20
                 :height 20}]
       [html-in-svg
        size
        [:img (use-style (merge rooms/triangle {:cursor :pointer})
                         {:src (str (config/url-images) "triangle-left-red.svg")
                          :on-click config/shift-timetable-left})]
        [:image (merge size
                       {:href (str (config/url-images) "triangle-left-red.svg")
                        :on-click config/shift-timetable-left})]])
     (let [size {:x (- width 23)
                 :y (- y 5)
                 :width 20
                 :height 20}]
       [html-in-svg
        size
        [:img (use-style (merge rooms/triangle {:cursor :pointer})
                         {:src (str (config/url-images) "triangle-right-red.svg")
                          :on-click config/shift-timetable-right})]
        [:image (merge size
                       {:href (str (config/url-images) "triangle-right-red.svg")
                        :on-click config/shift-timetable-right})]])]))

(defn- opened-room-info [opened-timebar row-height]
  (when (:id opened-timebar)
    (let [size {:x (:x opened-timebar)
                :y (- (+ (:y opened-timebar)
                         row-height)
                      3)
                :width (max 200 (:width opened-timebar))
                :height (* row-height 1.4)}]
      [html-in-svg
       size
       [:div (use-style (merge (fonts/font-small)
                               {:background-color colors/brand-red
                                :padding "5px 7px"
                                :color colors/white})
                        {:on-click (fn [e]
                                     ;; Clicking the info box should not hide it
                                     (.stopPropagation e))})
        [:div
         [:span (use-style (fonts/bold))
          (str (language/text :subject) ": ")]
         [:span (:subject opened-timebar)]]
        [:div
         [:span (use-style (fonts/bold)) (str (language/text :booking-period) ": ")]
         [:span (:booking-period opened-timebar)]]]])))

(defn- rooms-timetable [rooms {:keys [width] :as options}]
  (r/create-class
    {:component-will-receive-props
     (fn []
       (reset! opened-timebar nil))
     :reagent-render
     (fn [rooms {:keys [width] :as options}]
       (let [row-height 35
             rows-height (+ row-height ; Heading
                            (* row-height (count rooms)))
             svg-height (+ rows-height (* row-height 2)) ;; Add empty space on bottom so that the opened info box is visible
             start-hour (config/start-hour)
             end-hour (config/end-hour)]
         [:svg
          {:xmlns "http://www.w3.org/2000/svg"
           :width width :height svg-height
           :viewBox (str "0 0 " width " " svg-height)}

          [:g {:on-click #(reset! opened-timebar nil)}
           [rooms-timetable-header {:row-height row-height
                                    :width width
                                    :start-hour start-hour
                                    :end-hour end-hour}]
           (doall
             (map-indexed
               (fn [index room]
                 ^{:key index}
                 [rooms-timetable-row (inc index) room {:width width
                                                        :row-height row-height
                                                        :start-hour start-hour
                                                        :end-hour end-hour}])
               rooms))
           [borders {:width width
                     :height rows-height
                     :start-hour start-hour
                     :end-hour end-hour}]
           (doall
             (map-indexed
               (fn [index room]
                 ^{:key index}
                 [timebars (inc index) room {:width width
                                             :row-height row-height
                                             :start-hour start-hour
                                             :end-hour end-hour}])
               rooms))
           [current-time {:width width
                          :height rows-height
                          :start-hour start-hour
                          :row-height row-height
                          :end-hour end-hour}]
           [time-shifting {:width width}]
           [opened-room-info @opened-timebar row-height]]]))}))

(defn- first-fetch-status [app]
  (when (empty? (:rooms app))
    (cond
      (:fetching-rooms? app)
      [:img (use-style rooms/spinner-big
                       {:src (str (config/url-images) "spinner.gif")})]

      (not (:server-connection? app))
      [:div (use-style rooms/connection-error)
       (language/text :rooms-fetch-failed)]

      :default nil)))

(defn rooms-header [app]
  (let [showing-bookings-date (:showing-bookings app)]
    [:div (use-style {:height "60px"})
     (when-not (empty? (:rooms app))
       [:div (use-style rooms/rooms-header)
        [:h3 (when showing-bookings-date
               (str (language/text :showing-bookings)
                    " "
                    (fmt/fmt-weekday-name showing-bookings-date (:id @state/current-language))
                    " "
                    (fmt/date->fi-date showing-bookings-date)))]
        (cond
          (:fetching-rooms? app)
          [:div
           [:img (use-style rooms/spinner-inline
                            {:src (str (config/url-images) "spinner.gif")})]
           (language/text :fetching-rooms)]

          (not (:server-connection? app))
          [:div (use-style {:color colors/error})
           (language/text :rooms-fetch-failed)]

          :default nil)])]))

(defn rooms* [e! app]
  (let [rendered-width (r/atom nil)
        update-rendered-width #(reset! rendered-width (dom/element-width (r/dom-node %)))]
    (r/create-class
      {:component-did-mount
       (fn [this]
         (update-rendered-width this)
         (config/adjust-start-and-end
           @rendered-width
           grid/breakpoint-md
           grid/breakpoint-sm))
       :component-did-update
       (fn [this]
         (let [old-width @rendered-width]
           (update-rendered-width this)
           (when (not= old-width @rendered-width)
             (config/adjust-start-and-end
               @rendered-width
               grid/breakpoint-md
               grid/breakpoint-sm))))
       :reagent-render
       (fn [e! app]
         @dom/window-width ; Render the SVG again if the width of the window is changed
         (let [showing-bookings (:showing-bookings app)
               filters (:filters app)
               rooms (when showing-bookings
                       (get-in app [:rooms (fmt/date->iso-8601 showing-bookings)]))
               render-timetable? (and @rendered-width (not (empty? rooms)))
               filtered-rooms (room-domain/filtered-rooms
                                {:rooms rooms
                                 :now @state/now-local
                                 :filters filters
                                 :locations-config (config/locations)})]
           [:div
            [rooms-header app]
            [first-fetch-status app]
            (when render-timetable?
              [rooms-timetable filtered-rooms {:width @rendered-width}])]))})))

(defn rooms [e! app]
  [:main (use-style {:flex 1 ; Expand and take all the remaining vertical space
                     :background-color colors/brand-gray-250})
   [:div (use-style (merge content/content-wrapper
                           {:padding-top "1em"
                            :padding-bottom "1em"}))
    [rooms* e! app]]])