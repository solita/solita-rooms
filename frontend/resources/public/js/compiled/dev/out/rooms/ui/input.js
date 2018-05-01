// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.input');
goog.require('cljs.core');
goog.require('rooms.config');
goog.require('rooms.styles.input');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('cljs_time.core');
goog.require('reagent.core');
goog.require('rooms.dom');
goog.require('rooms.events');
rooms.ui.input.checkbox = (function rooms$ui$input$checkbox(text,checked_QMARK_,checked_fn){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),stylefy.core.use_style.call(null,rooms.styles.input.checkbox_container),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.call(null,rooms.styles.input.checkbox_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return checked_fn.call(null,cljs.core.not.call(null,checked_QMARK_));
})], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,(cljs.core.truth_(checked_QMARK_)?rooms.styles.input.checkbox_span_checked:rooms.styles.input.checkbox_span))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,rooms.styles.input.checkbox_text),text], null)], null)], null);
});
rooms.ui.input.slider = (function rooms$ui$input$slider(value,min_value,max_value,changed_fn){
var node = reagent.core.atom.call(null,null);
var dragging_QMARK_ = reagent.core.atom.call(null,false);
var drag_coordinates = reagent.core.atom.call(null,null);
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
return (x - rooms.dom.distance_to_left_viewport.call(null,cljs.core.deref.call(null,node)));
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max))
;
var x__GT_value = ((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element){
return (function (x_position_inside_slider){
var element_width = rooms.dom.width.call(null,cljs.core.deref.call(null,node));
var click_PERCENT_ = (x_position_inside_slider / element_width);
var actual_value = Math.round((min_value + (click_PERCENT_ * max_value)));
var actual_value__$1 = value_inside_min_and_max.call(null,actual_value);
return actual_value__$1;
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element))
;
var release_dragging_BANG_ = ((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))){
var x_position_inside_slider = x__GT_inside_element.call(null,cljs.core.deref.call(null,drag_coordinates));
var actual_value = x__GT_value.call(null,x_position_inside_slider);
changed_fn.call(null,actual_value);

cljs.core.reset_BANG_.call(null,drag_coordinates,null);

return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value))
;
var stop_global_event_listening = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (this$){
cljs.core.reset_BANG_.call(null,node,reagent.core.dom_node.call(null,this$));

return cljs.core.reset_BANG_.call(null,stop_global_event_listening,rooms.events.listen_BANG_.call(null,new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (event){
return release_dragging_BANG_.call(null);
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
));
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (this$){
var temp__5457__auto__ = cljs.core.deref.call(null,stop_global_event_listening);
if(cljs.core.truth_(temp__5457__auto__)){
var stop_event_listening = temp__5457__auto__;
return stop_event_listening.call(null);
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (value__$1,min_value__$1,max_value__$1,changed_fn__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.input.slider,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (p1__52649_SHARP_){
if(cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))){
return cljs.core.reset_BANG_.call(null,drag_coordinates,p1__52649_SHARP_.clientX);
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (event){
if(cljs.core.truth_((function (){var and__30167__auto__ = cljs.core.deref.call(null,node);
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.not.call(null,cljs.core.deref.call(null,dragging_QMARK_));
} else {
return and__30167__auto__;
}
})())){
var x_position_inside_slider = x__GT_inside_element.call(null,event.clientX);
var actual_value = x__GT_value.call(null,x_position_inside_slider);
var actual_value__$1 = value_inside_min_and_max.call(null,actual_value);
return changed_fn__$1.call(null,actual_value__$1);
} else {
return null;
}
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.input.slider_bar)], null),(cljs.core.truth_(cljs.core.deref.call(null,node))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,rooms.styles.input.slider_ball),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
], null),(cljs.core.truth_((function (){var and__30167__auto__ = cljs.core.deref.call(null,dragging_QMARK_);
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.deref.call(null,drag_coordinates);
} else {
return and__30167__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(function (){var x_inside_element = x__GT_inside_element.call(null,cljs.core.deref.call(null,drag_coordinates));
var x_inside_element__$1 = (((x_inside_element < (0)))?(0):(((x_inside_element > rooms.dom.width.call(null,cljs.core.deref.call(null,node))))?rooms.dom.width.call(null,cljs.core.deref.call(null,node)):x_inside_element
));
var x_inside_element__$2 = (x_inside_element__$1 - (rooms.styles.input.slider_ball_size / (2)));
return x_inside_element__$2;
})()], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(((value__$1 / max_value__$1) * rooms.dom.width.call(null,cljs.core.deref.call(null,node))) - (rooms.styles.input.slider_ball_size / (2)))], null)], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.input.slider_ball_text),(cljs.core.truth_((function (){var and__30167__auto__ = cljs.core.deref.call(null,dragging_QMARK_);
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.deref.call(null,drag_coordinates);
} else {
return and__30167__auto__;
}
})())?(function (){var x_position_inside_slider = x__GT_inside_element.call(null,cljs.core.deref.call(null,drag_coordinates));
var actual_value = x__GT_value.call(null,x_position_inside_slider);
var actual_value__$1 = value_inside_min_and_max.call(null,actual_value);
return actual_value__$1;
})():value__$1)], null)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.input.slider_bar_min),min_value__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.input.slider_bar_max),max_value__$1], null)], null);
});})(node,dragging_QMARK_,drag_coordinates,value_inside_min_and_max,x__GT_inside_element,x__GT_value,release_dragging_BANG_,stop_global_event_listening))
], null));
});

//# sourceMappingURL=input.js.map?rel=1525170771822
