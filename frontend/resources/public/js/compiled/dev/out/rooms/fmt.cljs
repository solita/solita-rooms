(ns rooms.fmt
  (:require
    [cljs-time.format :as df]
    [cljs-time.predicates :as pred]
    [rooms.localisation :as localisation]))

(def finnish-date-formatter (df/formatter "dd.MM."))
(def ISO-8601-formatter (df/formatter "yyyy-MM-dd"))
(def hh-mm-formatter (df/formatter "HH:mm"))

(defn date->iso-8601
  "Converts date object to ISO-8601 (yyyy-MM-DD)."
  [date]
  (df/unparse ISO-8601-formatter date))

(defn date->fi-date
  "Converts date object to DD.MM."
  [date]
  (df/unparse finnish-date-formatter date))

(defn iso-8601->date
  "Converts ISO-8601 (yyyy-MM-DD) to date object."
  [date]
  (df/parse ISO-8601-formatter date))

(defn hhmm->date
  [time-string]
  (df/parse-local hh-mm-formatter time-string))

(defn fmt-weekday-name [date language-id]
  (cond (pred/monday? date)
        (localisation/text :day-monday language-id)

        (pred/tuesday? date)
        (localisation/text :day-tuesday language-id)

        (pred/wednesday? date)
        (localisation/text :day-wednesday language-id)

        (pred/thursday? date)
        (localisation/text :day-thursday language-id)

        (pred/friday? date)
        (localisation/text :day-friday language-id)

        (pred/saturday? date)
        (localisation/text :day-saturday language-id)

        (pred/sunday? date)
        (localisation/text :day-sunday language-id)))

(defn fmt-month-name [date language-id]
  (cond (pred/january? date)
        (localisation/text :january language-id)

        (pred/february? date)
        (localisation/text :february language-id)

        (pred/march? date)
        (localisation/text :march language-id)

        (pred/april? date)
        (localisation/text :april language-id)

        (pred/may? date)
        (localisation/text :may language-id)

        (pred/june? date)
        (localisation/text :june language-id)

        (pred/july? date)
        (localisation/text :july language-id)

        (pred/august? date)
        (localisation/text :august language-id)

        (pred/september? date)
        (localisation/text :september language-id)

        (pred/october? date)
        (localisation/text :october language-id)

        (pred/november? date)
        (localisation/text :november language-id)

        (pred/december? date)
        (localisation/text :december language-id)))