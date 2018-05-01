(ns rooms.ui.utils)

(defmacro for*
  "Handles unique keys automatically"
  [for-bindings body]
  (let [key-prefix (str (gensym "for*"))]
    `(doall
       (map-indexed
         (fn [i# item#]
           (if (contains? (meta item#) :key)
             item#
             (with-meta item#
                        {:key (str ~key-prefix i#)})))
         (for ~for-bindings
           ~body)))))