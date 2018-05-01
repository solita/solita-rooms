(ns rooms.cache)

(defn read-cache-value
  [key]
  (when-let [cache-contents (.getItem (.-localStorage js/window) key)]
    (cljs.reader/read-string cache-contents)))

(defn cache-value
  [key value]
  (.setItem (.-localStorage js/window) key value))