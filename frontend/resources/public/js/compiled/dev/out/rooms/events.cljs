(ns rooms.events
  (:require [cljs.core.async :refer [<! >! chan alts! pub sub unsub unsub-all put! close!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def event-chan (chan))
(def publish (pub event-chan :name))

(defn listen!
  [name chan-or-fn]
  (if (fn? chan-or-fn)
    ;; Listener is a function
    (let [handler chan-or-fn
          ch (chan)]
      (go (loop [event (<! ch)]
            (when event
              (handler event)
              (recur (<! ch)))))
      (sub publish name ch)
      #(unsub publish name ch))

    ;; Listener is a channel
    (let [handler chan-or-fn]
      (sub publish name handler)
      #(unsub publish name handler))))

(defn publish!
  [event]
  (go (>! event-chan event)))
