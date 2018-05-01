(ns rooms.styles.calendar
  (:require [rooms.ui.colors :as colors]
            [rooms.styles.utils :as utils]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.ui.fonts :as fonts]))

(def calendar-width "320px")

(def calendar {:width calendar-width})

(def cell {:width "40px"
           :height "40px"
           :text-align :center})

(def cell-clickable (merge
                      utils/clickable
                      {::stylefy/mode {:hover {:color colors/white
                                               :background-color colors/brand-gray-80}}}))

(def cell-bold (merge cell (fonts/bold)))
(def cell-greyed (merge cell {:color colors/brand-gray-180}))
(def cell-current-date (merge cell {:border (str "1px solid " colors/brand-gray-40)}))
(def cell-selected-date (merge cell {:color colors/white
                                     :background-color colors/brand-red}))

(def calendar-header {:display :flex
                      ::stylefy/sub-styles {:link (merge
                                                    {:width "30px"
                                                     :text-align :center}
                                                    utils/clickable)
                                            :heading (merge
                                                       {:flex 1
                                                        :text-align :center}
                                                       (fonts/bold))
                                            :triangle {:height "18px"}}})