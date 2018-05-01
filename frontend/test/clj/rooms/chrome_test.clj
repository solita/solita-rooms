(ns rooms.chrome-test
  (:require  [clojure.test :refer [deftest]]
             [clj-chrome-devtools.cljs.test :refer [build-and-test]]))


(deftest chrome-test
  (build-and-test "test"
                  '[rooms.domain.room-test]))