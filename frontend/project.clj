(defproject rooms "2.0.0-SNAPSHOT"
  :description "Solita Rooms"
  :url ""
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.9.946"]

                 [reagent "0.7.0"]
                 [hiccup "1.0.5"]
                 [com.andrewmcveigh/cljs-time "0.5.0"]
                 [clj-time "0.14.3"]
                 [com.cognitect/transit-cljs "0.8.243"]
                 [org.clojure/core.async "0.4.474"]
                 [stylefy "1.7.0"]
                 [garden "1.3.4"]
                 [webjure/tuck "0.4.3"]
                 [alandipert/storage-atom "1.2.4"]
                 [com.taoensso/timbre "4.10.0"]
                 [cljs-ajax "0.7.3"]]
  :main rooms.core
  :aot :all
  :auto-clean false ; For uberjar
  :target-path "target/%s"
  :plugins [[lein-cljsbuild "1.1.7"]
            [lein-ancient "0.6.10"]
            [lein-figwheel "0.5.15"]]
  :repl-options {:port 1339
                 :timeout 120000}
  :profiles {:dev {:dependencies [[clj-chrome-devtools "20180310"]]}}
  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src/cljs"]
                        :figwheel     {:on-jsload "rooms.main/start"
                                       :websocket-host   "localhost"
                                       :heads-up-display false}
                        :compiler     {:output-to     "resources/public/js/compiled/dev/rooms.js"
                                       :output-dir    "resources/public/js/compiled/dev/out"
                                       :optimizations :none
                                       :pretty-print  true}}
                       {:id           "production"
                        :source-paths ["src/cljs"]
                        :compiler     {:output-to     "resources/public/js/compiled/rooms.js"
                                       :output-dir    "resources/public/js/compiled/out"
                                       :optimizations :advanced}}]}
  :clean-targets #^{:protect false} ["resources/public/js/dev/rooms.js"
                                     "resources/public/js/dev/out"
                                     "resources/public/js/rooms.js"
                                     "resources/public/js/out"]
  :figwheel {:http-server-root "public"}
  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj"]

  :jvm-opts ^:replace ["-Xmx1g" "-server"
                       ;; For Java 9 & 10:
                       "--add-modules" "java.xml.bind"])
