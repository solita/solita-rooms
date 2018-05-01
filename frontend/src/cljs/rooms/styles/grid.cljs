(ns rooms.styles.grid
  (:require [rooms.ui.colors :as colors]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]))

(def breakpoint-lg 1200)
(def breakpoint-md 992)
(def breakpoint-sm 768)

;; Column sizes use standard 12-grid.
(def col-size-4 "33.33%")
(def col-size-6 "50%")
(def col-size-12 "100%")

(defn- media-lg [width]
  {{:min-width (str breakpoint-lg "px")} {:width width}})
(defn- media-md [width]
  {{:min-width (str breakpoint-md "px")
    :max-width (str breakpoint-lg "px")} {:width width}})
(defn- media-sm [width]
  {{:min-width (str breakpoint-sm "px")
    :max-width (str breakpoint-md "px")} {:width width}})
(defn- media-xs [width]
  {{:max-width (str breakpoint-sm "px")} {:width width}})

(defn medias [lg md sm xs]
  {::stylefy/media (merge
                     (media-lg lg)
                     (media-md md)
                     (media-sm sm)
                     (media-xs xs))})

(def grid {:display :flex
           :flex-flow :row
           :flex-wrap :wrap})

(def column-padding {:padding "10px"})

(defn column [lg md sm xs]
  (merge
    column-padding
    (medias lg md sm xs)))