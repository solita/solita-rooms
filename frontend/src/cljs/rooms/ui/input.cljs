(ns rooms.ui.input
  (:require [rooms.config :as config]
            [rooms.styles.input :as input-style]
            [stylefy.core :as stylefy :refer [use-style use-sub-style]]
            [rooms.styles.content :as content]
            [cljs-time.core :as t]
            [reagent.core :as r]
            [rooms.dom :as dom]
            [rooms.events :as events]))

(defn checkbox [text checked? checked-fn]
  [:span
   [:label (use-style input-style/checkbox-container)
    [:input (use-style input-style/checkbox-input
                       {:type "checkbox"
                        :checked checked?
                        :on-change #(checked-fn (not checked?))})]
    [:span (use-style
             (if checked?
               input-style/checkbox-span-checked
               input-style/checkbox-span))]
    [:span (use-style input-style/checkbox-text) text]]])

(defn slider [value min-value max-value changed-fn]
  (let [node (r/atom nil)
        dragging? (r/atom false)
        drag-coordinates (r/atom nil)
        value-inside-min-and-max (fn [value]
                                   (cond
                                     (> value max-value)
                                     max-value

                                     (< value min-value)
                                     min-value

                                     :default value))
        x->inside-element (fn [x]
                            (- x (dom/distance-to-left-viewport @node)))
        x->value (fn [x-position-inside-slider]
                   (let [element-width (dom/width @node)
                         click% (float (/ x-position-inside-slider element-width))
                         actual-value (Math/round (+ min-value (* click% max-value)))
                         actual-value (value-inside-min-and-max actual-value)]
                     actual-value))
        release-dragging! (fn []
                            (when @dragging?
                              (let [x-position-inside-slider (x->inside-element @drag-coordinates)
                                    actual-value (x->value x-position-inside-slider)]
                                (changed-fn actual-value)
                                (reset! drag-coordinates nil)
                                (reset! dragging? false))))
        stop-global-event-listening (atom nil)]

    (r/create-class
      {:component-did-mount
       (fn [this]
         (reset! node (r/dom-node this))
         (reset! stop-global-event-listening
                 (events/listen! :mouse-up
                                 (fn [event]
                                   (release-dragging!)))))
       :component-will-unmount
       (fn [this]
         (when-let [stop-event-listening @stop-global-event-listening]
           (stop-event-listening)))
       :reagent-render
       (fn [value min-value max-value changed-fn]
         [:div (use-style
                 input-style/slider
                 {:on-mouse-move #(when @dragging?
                                    (reset! drag-coordinates (-> % .-clientX)))
                  :on-click
                  (fn [event]
                    (when (and @node (not @dragging?))
                      (let [x-position-inside-slider (x->inside-element (.-clientX event))
                            actual-value (x->value x-position-inside-slider)
                            actual-value (value-inside-min-and-max actual-value)]
                        (changed-fn actual-value))))})

          ;; Bar
          [:div (use-style input-style/slider-bar)]

          ;; Ball
          (when @node
            [:div (merge
                    (use-style input-style/slider-ball)
                    {:on-mouse-down #(reset! dragging? true)}
                    (if (and @dragging? @drag-coordinates)
                      ;; Draw the dragging position
                      {:style {:left (let [x-inside-element (x->inside-element @drag-coordinates)
                                           ;; Fix boundaries
                                           x-inside-element (cond
                                                              (< x-inside-element 0) 0
                                                              (> x-inside-element (dom/width @node)) (dom/width @node)
                                                              :default x-inside-element)
                                           ;; Center on the ball
                                           x-inside-element (- x-inside-element
                                                               (/ input-style/slider-ball-size 2))]
                                       x-inside-element)}}
                      ;; Draw the position of the actual value
                      {:style {:left (- (* (/ value max-value) (dom/width @node))
                                        (/ input-style/slider-ball-size 2))}}))
             [:div (use-style input-style/slider-ball-text)
              (if (and @dragging? @drag-coordinates)
                (let [x-position-inside-slider (x->inside-element @drag-coordinates)
                      actual-value (x->value x-position-inside-slider)
                      actual-value (value-inside-min-and-max actual-value)]
                  actual-value)
                value)]])

          ;; Min / Max
          [:div (use-style input-style/slider-bar-min)
           min-value]
          [:div (use-style input-style/slider-bar-max)
           max-value]])})))