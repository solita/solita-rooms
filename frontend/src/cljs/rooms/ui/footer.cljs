(ns rooms.ui.footer
  (:require [rooms.config :as config]
            [rooms.ui.colors :as colors]
            [rooms.styles.footer :as footer-style]
            [rooms.styles.utils :as style-utils]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]])
  (:require-macros [rooms.ui.macros :refer [for*]]))

(defn footer []
  (let [footer-links (->> (config/footer-links)
                          (filter :text))]
    [:footer (use-style footer-style/footer-style)
     [:img (use-style footer-style/footer-logo
                      {:src (str (config/url-images) "solita-footer-logo-white.svg")})]
     [:ul (use-style footer-style/link-list)

      (doall
        (map-indexed
          (fn [index link]
            ^{:key index}
            [:li (use-style footer-style/link-list-item)
             [:span
              [:a (use-style footer-style/link-list-a
                             {:href (:url link)})
               (:text link)]
              (when (not= (inc index) (count footer-links))
                [:span (use-style style-utils/text-separator) "|"])]])
          footer-links))]]))