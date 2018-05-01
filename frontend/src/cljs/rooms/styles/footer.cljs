(ns rooms.styles.footer
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy]
            [rooms.ui.fonts :as fonts]))

(def footer-style {:background-color colors/black
                   :flex-shrink 0
                   :padding-top "60px"
                   :padding-left "75px"
                   :padding-right "75px"
                   :height "120px"})

(def footer-logo {:display :inline-block
                  :margin-right "50px"})

(def link-list {:list-style-type :none
                :display :inline-block
                :color colors/white
                :padding 0
                :margin 0})

(def link-list-item {:display :inline-block})

(def link-list-a (merge
                   (fonts/font-small)
                   {:color colors/brand-gray-230
                    ::stylefy/mode {:hover {:color colors/brand-gray-180}}}))