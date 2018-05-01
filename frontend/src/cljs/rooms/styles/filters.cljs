(ns rooms.styles.filters
  (:require [rooms.ui.colors :as colors]
            [rooms.styles.z-index :as z-index]))

(def heading {:margin-bottom "0.7em"})
(def heading-component {:margin-bottom "0.7em"})

(def filters-style {:background-color colors/brand-gray-240
                    :flex-shrink 0
                    :box-shadow (str "0 2px 4px rgba(0,0,0,0.2)")
                    :z-index z-index/filters})