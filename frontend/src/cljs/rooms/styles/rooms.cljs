(ns rooms.styles.rooms
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy]))

(def spinner-big {:display :block
                  :margin-left :auto
                  :margin-right :auto
                  :margin-top "10px"
                  :margin-bottom "20px"
                  :width "150px"})

(def connection-error {:margin-top "3em"
                       :color colors/error
                       :text-align :center})

(def rooms-header {:display :flex
                   :justify-content :space-between
                   :padding "8px"})

(def spinner-inline {:height "2em"})

(def triangle {:height "18px"})