(ns rooms.ui.dropdown
  (:require [rooms.config :as config]
            [rooms.ui.colors :as colors]
            [rooms.styles.dropdown :as dropdown-style]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.styles.content :as content]
            [rooms.language :as language]
            [rooms.styles.utils :as utils]
            [reagent.core :as r])
  (:require-macros [rooms.ui.macros :refer [for*]]))

(defn dropdown [selected selected-style selected-fn values]
  (let [visible? (r/atom false)]
    (fn [selected selected-style selected-fn values]
      [:div (use-style dropdown-style/container)
       [:span (use-style (merge selected-style
                                utils/clickable)
                         {:on-click #(swap! visible? not)})
        (:name selected)
        [:img (use-style dropdown-style/dropdown-triangle
                         {:src (str (config/url-images) "triangle-down-white.svg")})]]
       (when @visible?
         [:ul (use-style dropdown-style/dropdown)
          (for* [value values]
            [:li (use-style dropdown-style/item
                            {:on-click (fn []
                                         (selected-fn value)
                                         (reset! visible? false))})
             (:name value)])])])))