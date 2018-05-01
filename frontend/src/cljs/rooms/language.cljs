(ns rooms.language
  (:require
    [rooms.localisation :as localisation]
    [rooms.state :as state]))

(defn text
  ([text-id]
   (text text-id (:id @state/current-language)))
  ([text-id language-id]
   (get-in localisation/texts [text-id language-id])))