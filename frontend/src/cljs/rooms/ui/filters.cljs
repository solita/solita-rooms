(ns rooms.ui.filters
  (:require [rooms.config :as config]
            [rooms.ui.colors :as colors]
            [rooms.ui.calendar :as calendar]
            [rooms.styles.grid :as grid]
            [rooms.ui.input :as input]
            [rooms.styles.filters :as filters-style]
            [rooms.language :as language]
            [rooms.ui.icons :as icons]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.styles.content :as content]
            [cljs-time.core :as t]
            [rooms.state :as state])
  (:require-macros [rooms.ui.macros :refer [for*]]))

(defn heading-and-filter [text component]
  [:div
   [:h5 (use-style filters-style/heading) text]
   [:div (use-style filters-style/heading-component)
    component]])

(defn filters [e! app]
  [:div (use-style filters-style/filters-style)
   [:div (use-style content/content-wrapper)

    [:div (use-style grid/grid)

     [:div (use-style (grid/column grid/col-size-4 grid/col-size-4 grid/col-size-12 grid/col-size-12))
      [heading-and-filter
       (language/text :date)
       [calendar/calendar e! app]]]

     [:div (use-style (grid/column grid/col-size-4 grid/col-size-4 grid/col-size-12 grid/col-size-12))
      [heading-and-filter
       (language/text :location)
       [:div
        (doall (for [location (config/locations)]
                 ^{:key (:id location)}
                 [:div
                  [input/checkbox (language/text (keyword (str "location-" (name (:id location)))))
                   (some? ((get-in app [:filters :locations]) (:id location)))
                   #(e! (state/->CheckFilterLocations (:id location)))]]))]]
      [heading-and-filter
       (language/text :urgency)
       [:div
        [input/checkbox (language/text :available-soon)
         (get-in app [:filters :urgency?])
         #(e! (state/->CheckFilterBoolean :urgency? %))]]]]

     [:div (use-style (grid/column grid/col-size-4 grid/col-size-4 grid/col-size-6 grid/col-size-12))
      [heading-and-filter
       (language/text :features)
       [:div
        [:div
         [input/checkbox [icons/text-and-icon
                          (language/text :video-meeting-room)
                          "video-gray40.svg"
                          {:height icons/default-icon-size}]
          (get-in app [:filters :video?])
          #(e! (state/->CheckFilterBoolean :video? %))]]
        [:div
         [input/checkbox [icons/text-and-icon
                          (language/text :client-meeting-room)
                          "person-gray40.svg"
                          {:height icons/default-icon-size}]
          (get-in app [:filters :client?])
          #(e! (state/->CheckFilterBoolean :client? %))]]
        [:div
         [input/checkbox [icons/text-and-icon
                          (language/text :internal-meeting-room)
                          "home-gray40.svg"
                          {:height icons/default-icon-size}]
          (get-in app [:filters :internal?])
          #(e! (state/->CheckFilterBoolean :internal? %))]]]]
      [heading-and-filter
       (language/text :capacity)
       [input/slider
        (get-in app [:filters :capacity]) 0 12
        #(e! (state/->CheckFilterCapacity %))]]]]]])