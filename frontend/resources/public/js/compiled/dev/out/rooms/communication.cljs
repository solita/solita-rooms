(ns rooms.communication
  (:require [reagent.core :as r]
            [rooms.config :as config]
            [ajax.core :refer [ajax-request ring-response-format] :as ajax]
            [cljs.core.async :refer [<! >! put! close! chan timeout]]
            [cognitect.transit :as transit]
            [clojure.string :as str]
            [cljs-time.core :as time]
            [goog.string :as gstr])
  (:require-macros [cljs.core.async.macros :refer [go go-loop alt!]]))

(defn- query
  ([uri method response-handler]
   (query uri method response-handler {:retry 0 :wait-timeout 0}))
  ([uri method {:keys [success error] :as response-handler} {:keys [retry wait-timeout] :as opts}]
   (let [full-uri (str (config/server-base-url) uri)
         handler (fn [[_ response]]
                   (cond
                     (and (not= (:status response) 200))
                     (if (< retry 3)
                       (query uri method response-handler {:retry (inc retry)
                                                           :wait-timeout (+ wait-timeout 2000)})
                       (error (:body response)))

                     :default
                     (success (:body response))))]
     (go
       (when wait-timeout
         (<! (timeout wait-timeout)))
       (ajax-request {:uri full-uri
                      :method method
                      :handler handler
                      :response-format (ring-response-format)
                      :error-handler (fn [[_ response]]
                                       (error (:body response)))})))))

(defn fetch-rooms [day-str
                   {:keys [success error] :as response-handler}
                   {:keys [use-cache?] :as opts}]
  (let [handle-response (fn [response callback]
                          (let [reader (transit/reader :json)
                                json-as-cljs (transit/read reader response)
                                json-as-cljs (clojure.walk/keywordize-keys json-as-cljs)]
                            (callback (:rooms json-as-cljs))))]
    (query day-str :get {:success (fn [response]
                                (handle-response response success))
                     :error (fn [response]
                              (handle-response response error))})))