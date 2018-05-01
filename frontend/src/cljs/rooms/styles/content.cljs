(ns rooms.styles.content
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy]))

(def content-max-width "1200px")

(def content-wrapper
  ;; Generic content wrapper. Makes sure the content never expands over the defined max width.
  {:max-width content-max-width
   :width "100%"
   :padding "10px"
   :margin-left :auto
   :margin-right :auto})