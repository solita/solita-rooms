(ns rooms.dom
  (:require [reagent.core :as r]))

(defonce window-width (r/atom (-> js/window .-innerWidth)))
(defonce window-height (r/atom (-> js/window .-innerHeight)))

(defonce resize-listener (do (set! (.-onresize js/window)
                                   (fn [_]
                                     (reset! window-width (-> js/window .-innerWidth))
                                     (reset! window-height (-> js/window .-innerHeight))))
                             true))

(defn element-width [node]
  (let [r (.getBoundingClientRect node)
        width (.-width r)]
    width))

(def ie? (let [ua (-> js/window .-navigator .-userAgent)]
           (or (not= -1 (.indexOf ua "MSIE "))
               (not= -1 (.indexOf ua "Trident/")))))

(defn distance-to-left-viewport [node]
  (let [r (.getBoundingClientRect node)
        distance (.-left r)]
    distance))

(defn width [node]
  (let [r (.getBoundingClientRect node)
        width (.-width r)]
    width))