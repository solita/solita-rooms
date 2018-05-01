(ns rooms.main
  (:require
    [stylefy.core :as stylefy :refer [use-style use-sub-style]]
    [cljs.core.async :refer [<! >! put! close! chan timeout]]
    [tuck.core :as tuck]
    [reagent.core :as r]
    [rooms.ui.header :as header]
    [rooms.ui.footer :as footer]
    [rooms.ui.filters :as filters]
    [rooms.ui.rooms :as rooms]
    [rooms.ui.colors :as colors]
    [rooms.ui.fonts :as fonts]
    [rooms.state :as state]
    [rooms.config :as config]
    [cljs-time.core :as t]
    [rooms.events :as events]
    [rooms.language :as language]
    [rooms.date :as date])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(defn- start-automatic-room-fetching [e!]
  ;; First, fetch the results for the next days
  ;; Note: Cannot pass app here, it's not going to update!
  (e! (state/->FetchRooms (get-in @state/state [:filters :date])))
  (e! (state/->FetchRooms (t/plus (get-in @state/state [:filters :date]) (t/days 1))))
  (e! (state/->FetchRooms (t/plus (get-in @state/state [:filters :date]) (t/days 2))))

  (go-loop
    []
    (<! (timeout (config/fetch-defay)))
    (e! (state/->FetchRooms (get-in @state/state [:filters :date])))
    (recur)))

(defn- main-content* [e! app]
  (r/create-class
    {:component-did-mount
     (fn [this]
       (start-automatic-room-fetching e!))
     :reagent-render
     (fn [e! app]
       [:div (use-style
               {:height "100%"
                ::stylefy/supports {"display: flex"
                                    {:display "flex"
                                     :flex-direction :column}}}
               {:on-mouse-up #(events/publish! {:name :mouse-up})})
        [header/header]
        [filters/filters e! app]
        [rooms/rooms e! app]
        [footer/footer]])}))

(defn- main-content []
  [tuck/tuck state/state main-content*])

(defn- init []
  (config/init)
  (fonts/init-stylefy-fonts)
  (stylefy/init {:use-caching? true
                 :cache-options {:expires 600000}}) ;; Clear after one week
  (state/start-updating-local-now)
  (state/load-filters-from-cache)
  (stylefy/tag "body" {:background-color colors/black}))

(defn ^:export start []
  (init)
  (r/render main-content (.getElementById js/document "app")))