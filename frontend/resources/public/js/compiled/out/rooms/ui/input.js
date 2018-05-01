// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.input');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.styles.input');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('cljs_time.core');
goog.require('reagent.core');
goog.require('rooms.dom');
goog.require('rooms.events');
rooms.ui.input.checkbox = (function rooms$ui$input$checkbox(text,checked_QMARK_,checked_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.checkbox_container),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.input.checkbox_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$checked,checked_QMARK_,cljs.core.cst$kw$on_DASH_change,(function (){
var G__26215 = cljs.core.not(checked_QMARK_);
return (checked_fn.cljs$core$IFn$_invoke$arity$1 ? checked_fn.cljs$core$IFn$_invoke$arity$1(G__26215) : checked_fn.call(null,G__26215));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(checked_QMARK_)?rooms.styles.input.checkbox_span_checked:rooms.styles.input.checkbox_span))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.checkbox_text),text], null)], null)], null);
});
rooms.ui.input.slider = (function rooms$ui$input$slider(value,min_value,max_value,changed_fn){
var node = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_coordinates = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var value_inside_min_and_max = ((function (node,dragging_QMARK_,drag_coordinates){
return (function (value__$1){
if((value__$1 > max_value)){
return max_value;
} else {
if((value__$1 < min_value)){
return min_value;
} else {
return value__$1;

}
}
});})(node,dragging_QMARK_,drag_coordinates))
;
var x__GT_inside_element = ((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max){
return (function (x){
return (x - rooms.dom.distance_to_left_viewport(cljs.core.deref(node)));
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max))
;
var x__GT_value = ((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element){
return (function (x_position_inside_slider){
var element_width = rooms.dom.width(cljs.core.deref(node));
var click_PERCENT_ = (x_position_inside_slider / element_width);
var actual_value = (function (){var G__26217 = (min_value + (click_PERCENT_ * max_value));
return Math.round(G__26217);
})();
var actual_value__$1 = value_inside_min_and_max(actual_value);
return actual_value__$1;
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element))
;
var release_dragging_BANG_ = ((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value){
return (function (){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var x_position_inside_slider = x__GT_inside_element(cljs.core.deref(drag_coordinates));
var actual_value = x__GT_value(x_position_inside_slider);
(changed_fn.cljs$core$IFn$_invoke$arity$1 ? changed_fn.cljs$core$IFn$_invoke$arity$1(actual_value) : changed_fn.call(null,actual_value));

cljs.core.reset_BANG_(drag_coordinates,null);

return cljs.core.reset_BANG_(dragging_QMARK_,false);
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value))
;
var stop_global_event_listening = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (this$){
cljs.core.reset_BANG_(node,reagent.core.dom_node(this$));

return cljs.core.reset_BANG_(stop_global_event_listening,rooms.events.listen_BANG_(cljs.core.cst$kw$mouse_DASH_up,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (event){
return release_dragging_BANG_();
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
));
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
,cljs.core.cst$kw$component_DASH_will_DASH_unmount,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (this$){
var temp__5457__auto__ = cljs.core.deref(stop_global_event_listening);
if(cljs.core.truth_(temp__5457__auto__)){
var stop_event_listening = temp__5457__auto__;
return (stop_event_listening.cljs$core$IFn$_invoke$arity$0 ? stop_event_listening.cljs$core$IFn$_invoke$arity$0() : stop_event_listening.call(null));
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
,cljs.core.cst$kw$reagent_DASH_render,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (value__$1,min_value__$1,max_value__$1,changed_fn__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.input.slider,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_mouse_DASH_move,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (p1__26216_SHARP_){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
return cljs.core.reset_BANG_(drag_coordinates,p1__26216_SHARP_.clientX);
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
,cljs.core.cst$kw$on_DASH_click,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (event){
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.deref(node);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not(cljs.core.deref(dragging_QMARK_));
} else {
return and__8904__auto__;
}
})())){
var x_position_inside_slider = x__GT_inside_element(event.clientX);
var actual_value = x__GT_value(x_position_inside_slider);
var actual_value__$1 = value_inside_min_and_max(actual_value);
return (changed_fn__$1.cljs$core$IFn$_invoke$arity$1 ? changed_fn__$1.cljs$core$IFn$_invoke$arity$1(actual_value__$1) : changed_fn__$1.call(null,actual_value__$1));
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.slider_bar)], null),(cljs.core.truth_(cljs.core.deref(node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.slider_ball),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_mouse_DASH_down,((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (){
return cljs.core.reset_BANG_(dragging_QMARK_,true);
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
], null),(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.deref(dragging_QMARK_);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.deref(drag_coordinates);
} else {
return and__8904__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(function (){var x_inside_element = x__GT_inside_element(cljs.core.deref(drag_coordinates));
var x_inside_element__$1 = (((x_inside_element < (0)))?(0):(((x_inside_element > rooms.dom.width(cljs.core.deref(node))))?rooms.dom.width(cljs.core.deref(node)):x_inside_element
));
var x_inside_element__$2 = (x_inside_element__$1 - (rooms.styles.input.slider_ball_size / (2)));
return x_inside_element__$2;
})()], null)], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(((value__$1 / max_value__$1) * rooms.dom.width(cljs.core.deref(node))) - (rooms.styles.input.slider_ball_size / (2)))], null)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.slider_ball_text),(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.deref(dragging_QMARK_);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.deref(drag_coordinates);
} else {
return and__8904__auto__;
}
})())?(function (){var x_position_inside_slider = x__GT_inside_element(cljs.core.deref(drag_coordinates));
var actual_value = x__GT_value(x_position_inside_slider);
var actual_value__$1 = value_inside_min_and_max(actual_value);
return actual_value__$1;
})():value__$1)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.slider_bar_min),min_value__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.input.slider_bar_max),max_value__$1], null)], null);
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
], null));
});
