(ns rooms.ui.fonts
  (:require
    [rooms.ui.colors :as colors]
    [rooms.config :as config]
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(defn font-medium [] (if (config/use-licensed-assets?)
                       "'Sharp Sans Medium', Arial, sans-serif"
                       "'Montserrat', Arial, sans-serif"))
(defn font-bold [] (if (config/use-licensed-assets?)
                     "'Sharp Sans Bold', Century Gothic Bold, Arial Bold, sans-serif"
                     "'Montserrat Bold',  Century Gothic Bold, Arial Bold, sans-serif"))
(defn font-semibold [] (if (config/use-licensed-assets?)
                         "'Sharp Sans Semibold', Century Gothic, Arial, sans-serif"
                         "'Montserrat Semibold', Century Gothic, Arial, sans-serif"))

(defn font-small []
  {:font-family (font-medium)
   :font-size "0.875em"
   :line-height 1.5})

(defn bold [] {:font-family (font-bold)})

(defn init-stylefy-fonts []
  (if (config/use-licensed-assets?)
    (do
      (stylefy/font-face {:font-family "'Sharp Sans Medium'"
                          :src "url('/fonts/SharpSans-Medium.woff2') format('woff2'),
                            url('/fonts/SharpSans-Medium.woff') format('woff')"})
      (stylefy/font-face {:font-family "'Sharp Sans Bold'"
                          :src "url('/fonts/SharpSans-Bold.woff2') format('woff2'),
                            url('/fonts/SharpSans-Bold.woff') format('woff')"})
      (stylefy/font-face {:font-family "'Sharp Sans Semibold'"
                          :src "url('/fonts/SharpSans-Semibold.woff2') format('woff2'),
                            url('/fonts/SharpSans-Semibold.woff') format('woff')"}))
    (do
      (stylefy/font-face {:font-family "'Montserrat Medium'"
                          :src "url('/fonts/free/Montserrat-Medium.ttf') format('truetype')"})
      (stylefy/font-face {:font-family "'Montserrat Bold'"
                          :src "url('/fonts/free/Montserrat-Bold.ttf') format('truetype')"})
      (stylefy/font-face {:font-family "'Montserrat Semibold'"
                          :src "url('/fonts/free/Montserrat-Semibold.ttf') format('truetype')"})))

  (stylefy/tag "body"
               {:font-family (font-medium)
                :color colors/text})


  (stylefy/tag "h1"
               {:font-family (font-bold)
                :font-size "2.5rem"
                :line-height 1.25
                :color colors/text})

  (stylefy/tag "h2"
               {:font-family (font-semibold)
                :font-size "1.75rem"
                :line-height 1.25
                :color colors/text})

  (stylefy/tag "h3"
               {:font-family (font-bold)
                :font-size "1.5rem"
                :line-height 1.25
                :color colors/text})

  (stylefy/tag "h4"
               {:font-family (font-semibold)
                :font-size "1.25rem"
                :line-height 1.25
                :color colors/text})

  (stylefy/tag "h5"
               {:font-family (font-bold)
                :font-size "1.125rem"
                :line-height 1.25
                :color colors/text}))

(def link {:color colors/brand-red
           :text-decoration "none"
           ::stylefy/mode {:hover
                           {:color colors/brand-gray-80
                            :text-decoration "underline"}
                           :active
                           {:color colors/text
                            :text-decoration "underline"}}})