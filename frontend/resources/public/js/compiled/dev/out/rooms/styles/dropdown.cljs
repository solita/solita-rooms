(ns rooms.styles.dropdown
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy]
            [rooms.styles.utils :as utils]))

(def container {:position :relative})

(def dropdown {:position :absolute
               :background-color colors/white
               :border (str "1px solid " colors/black)
               :padding 0
               :list-style-type :none})

(def dropdown-triangle {:margin-left "5px"
                        :position :relative
                        :top "-2px"
                        :height "15px"})

(def item (merge
                     {:padding "5px"
                      :margin 0
                      ::stylefy/mode {:hover
                                      {:background-color colors/brand-gray-230}}}
                     utils/clickable))