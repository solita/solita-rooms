(ns rooms.styles.input
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy]
            [rooms.styles.utils :as utils]
            [rooms.ui.fonts :as fonts]))

;; Checkbox

(def checkbox-container (merge
                          {:position :relative}
                          utils/clickable))

(def checkbox-input (merge
                      {:position :absolute
                       :opacity 0}
                      utils/clickable))

(def checkbox-span (merge
                     {:width "19px"
                      :height "19px"
                      :margin-right "10px"
                      :display :inline-block
                      :vertical-align :middle
                      :border (str "2px solid " colors/black)}
                     utils/clickable))

(def checkbox-span-checked (merge checkbox-span
                                  {:border :none
                                   :background-color colors/brand-red}))

(def checkbox-text {:margin-left "6px"})

;; Slider

(def slider-ball-size 30)

(def slider (merge
              {:position :relative
               :width "200px"
               :height "70px"
               :margin-left (str (int (/ slider-ball-size 2)) "px")
               :margin-right (str (int (/ slider-ball-size 2)) "px")}
              utils/clickable))

(def slider-bar (merge
                  {:width "200px"
                   :height "5px"
                   :background-color colors/brand-red
                   :position :absolute
                   :top "30px"
                   :left 0
                   :margin-right (str "-" (int (/ slider-ball-size 2)) "px")}
                  utils/clickable))


(def slider-ball (merge
                   {:width (str slider-ball-size "px")
                    :height (str slider-ball-size "px")
                    :border-radius "100%"
                    :background-color colors/brand-red
                    :top "17px"
                    :position :absolute}
                   utils/clickable))

(def slider-bar-min {:position :absolute
                     :bottom 0
                     :left "-4px"
                     :user-select :none
                     :font-size "0.8em"})

(def slider-bar-max {:position :absolute
                     :bottom 0
                     :right "-6px"
                     :user-select :none
                     :font-size "0.8em"})

(def slider-ball-text (merge
                        {:position :relative
                         :user-select :none
                         :top "-22px"
                         :width "30px"
                         :color colors/brand-red
                         :text-align :center}
                        (fonts/bold)))