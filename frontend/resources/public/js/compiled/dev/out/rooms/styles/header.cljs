(ns rooms.styles.header
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy]
            [rooms.styles.z-index :as z-index]))

(def header-style {:background-color colors/brand-red
                   :padding "8px 15px 8px"
                   :flex-shrink 0
                   :box-shadow (str "0 2px 4px rgba(0,0,0,0.2)")
                   :z-index z-index/header})

(def header-content {:display :flex
                     :justify-content :space-between
                     :align-items :center})

(def header-links {:list-style-type :none
                   :padding 0
                   :margin 0
                   :flex 1
                   :display :flex
                   :justify-content :space-between
                   :width "300px"
                   :max-width "300px"})

(def header-link {:color colors/white
                  :text-decoration "none"
                  ::stylefy/mode {:hover
                                  {:color colors/brand-gray-230
                                   :text-decoration "underline"}
                                  :active
                                  {:color colors/white
                                   :text-decoration "underline"}}})

(def header-link-triangle {:margin-left "5px"
                           :position :relative
                           :top "-2px"
                           :height "13px"})