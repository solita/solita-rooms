(ns rooms.ui.header
  (:require [rooms.config :as config]
            [rooms.ui.colors :as colors]
            [rooms.styles.header :as header-style]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.ui.dropdown :as dropdown]
            [rooms.styles.content :as content]
            [rooms.language :as language]
            [rooms.styles.utils :as utils]
            [rooms.state :as state])
  (:require-macros [rooms.ui.macros :refer [for*]]))

(defn- logo []
  [:img {:src (str (config/url-images) "solita-rooms-logo.svg")}])

(defn- links []
  [:ul (use-style header-style/header-links)
   (for* [link (->> (config/header-links)
                    (filter :text-id))]
     [:li
      [:span
       [:a (use-style header-style/header-link {:href (:url link)})
        (language/text (:text-id link))]
       [:img (use-style header-style/header-link-triangle
                        {:src (str (config/url-images) "triangle-right-white.svg")})]]])])

(defn- language-selection []
  [dropdown/dropdown
   @state/current-language
   header-style/header-link
   state/switch-language
   (config/languages)])

(defn header []
  [:header (use-style header-style/header-style)
   [:div (use-style content/content-wrapper)
    [:div (use-style header-style/header-content)
     [logo]
     [links]
     [language-selection]]]])