(ns rooms.ui.icons
  (:require [rooms.config :as config]
            [rooms.styles.input :as input-style]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.styles.content :as content]
            [cljs-time.core :as t]
            [reagent.core :as r]
            [rooms.dom :as dom]))

(def default-icon-size 20)

(defn text-and-icon
  ([text icon]
   (text-and-icon text icon nil))
  ([text icon size]
   [:span
    [:span (use-style {:margin-right "0.5em"}) text]
    [:img (use-style {:position :relative
                      :top "-2px"}
                     (merge
                       {:src (str (config/url-images) icon)}
                       (when-let [width (:width size)]
                         {:width width})
                       (when-let [height (:height size)]
                         {:height height})))]]))