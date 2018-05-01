(ns rooms.config
  (:require
    [rooms.config-init :as config-init]
    [reagent.core :as r]))

;; Basic application configuration

(def config (r/atom nil))

(defn init []
  (reset! config config-init/config))

;; Shortcuts

(defn use-licensed-assets? [] (:use-licensed-assets? @config))
(defn url-images [] (if (use-licensed-assets?) "images/" "images/free/"))
(defn header-links [] (:header-links @config))
(defn footer-links [] (:footer-links @config))
(defn languages [] (:languages @config))
(defn start-hour [] (get-in @config [:timetable :start-hour]))
(defn end-hour [] (get-in @config [:timetable :end-hour]))
(defn server-base-url [] (get-in @config [:fetching :base-url]))
(defn fetch-defay [] (get-in @config [:fetching :automatic-fetch-delay-ms]))
(defn locations [] (:locations @config))

;; File urls

;; Config manipulation

(defn shift-timetable-right []
  (let [start-hour (get-in @config [:timetable :start-hour])
        end-hour (get-in @config [:timetable :end-hour])]
    (when (< end-hour 23)
      (swap! config assoc
             :timetable {:start-hour (inc start-hour)
                         :end-hour (inc end-hour)}))))

(defn shift-timetable-left []
  (let [start-hour (get-in @config [:timetable :start-hour])
        end-hour (get-in @config [:timetable :end-hour])]
    (when (> start-hour 0)
      (swap! config assoc
             :timetable {:start-hour (dec start-hour)
                         :end-hour (dec end-hour)}))))

(defn adjust-start-and-end [viewport-width breakpoint-md breakpoint-sm]
  (let [new-size (cond
                   (>= viewport-width breakpoint-md) 10
                   (>= viewport-width breakpoint-sm) 6
                   :default 3)
        new-time-window {:start-hour (get-in @config [:timetable :start-hour])
                         :end-hour (+ (get-in @config [:timetable :start-hour]) new-size)}
        new-time-window (if (> (:end-hour new-time-window) 24)
                          {:start-hour (- (:end-hour new-time-window) new-size)
                           :end-hour 24}
                          new-time-window)]

    (swap! config assoc
           :timetable {:start-hour (:start-hour new-time-window)
                       :end-hour (:end-hour new-time-window)})))