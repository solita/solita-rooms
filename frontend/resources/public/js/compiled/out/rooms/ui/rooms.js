// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.rooms');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.content');
goog.require('reagent.ratom');
goog.require('rooms.styles.rooms');
goog.require('rooms.dom');
goog.require('rooms.language');
goog.require('stylefy.core');
goog.require('rooms.fmt');
goog.require('reagent.core');
goog.require('cljs_time.format');
goog.require('cljs_time.core');
goog.require('rooms.domain.room');
goog.require('rooms.ui.fonts');
goog.require('rooms.ui.icons');
goog.require('clojure.string');
goog.require('rooms.date');
goog.require('rooms.styles.utils');
goog.require('rooms.styles.grid');
goog.require('rooms.state');
rooms.ui.rooms.column_room_location = (100);
rooms.ui.rooms.column_room_name = (120);
rooms.ui.rooms.column_room_features = (120);
rooms.ui.rooms.opened_timebar = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,null,cljs.core.cst$kw$width,null,cljs.core.cst$kw$x,null,cljs.core.cst$kw$y,null], null));
/**
 * Renders HTML inside SVG.
 * Not all browsers support this (IE11 and below), so a working SVG solution
 * should be provided for fallback rendering.
 */
rooms.ui.rooms.html_in_svg = (function rooms$ui$rooms$html_in_svg(var_args){
var G__26112 = arguments.length;
switch (G__26112) {
case 2:
return rooms.ui.rooms.html_in_svg.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rooms.ui.rooms.html_in_svg.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rooms.ui.rooms.html_in_svg.cljs$core$IFn$_invoke$arity$2 = (function (opts,element){
return rooms.ui.rooms.html_in_svg.cljs$core$IFn$_invoke$arity$3(opts,element,null);
});

rooms.ui.rooms.html_in_svg.cljs$core$IFn$_invoke$arity$3 = (function (opts,element,fallback){
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8904__auto____$1)){
var and__8904__auto____$2 = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__8904__auto____$2)){
return cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__8904__auto____$2;
}
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (:x opts) (:y opts) (:width opts) (:height opts))"));
}

if(rooms.dom.ie_QMARK_){
if(cljs.core.truth_(fallback)){
return fallback;
} else {
console.warn("HTML in SVG fallback not given for element: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([element], 0)));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$foreignObject,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$x,cljs.core.cst$kw$y,cljs.core.cst$kw$width,cljs.core.cst$kw$height], null)),element], null);
}
});

rooms.ui.rooms.html_in_svg.cljs$lang$maxFixedArity = 3;

rooms.ui.rooms.cell = (function rooms$ui$rooms$cell(var_args){
var G__26115 = arguments.length;
switch (G__26115) {
case 3:
return rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$3 = (function (size,background_color,text){
return rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$4(size,background_color,text,null);
});

rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$4 = (function (size,background_color,text,text_style){
return rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$5(size,background_color,text,text_style,null);
});

rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$5 = (function (size,background_color,text,text_style,fallback){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,background_color], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"8px 5px"], null),text_style], 0))),text], null),(cljs.core.truth_(fallback)?fallback:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(size,cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(size) + (5)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(size) + (22))], 0)),text], null))], null)], null);
});

rooms.ui.rooms.cell.cljs$lang$maxFixedArity = 5;

rooms.ui.rooms.timebar = (function rooms$ui$rooms$timebar(size,subject,start,end){
var id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("timebar");
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (id,hover_QMARK_){
return (function (size__$1,subject__$1,start__$1,end__$1){
var open_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.ui.rooms.opened_timebar)),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size__$1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fill,((open_QMARK_)?rooms.ui.colors.brand_red:(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?rooms.ui.colors.timebar_hover:rooms.ui.colors.timebar
))], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$padding,"7px 5px",cljs.core.cst$kw$color,rooms.ui.colors.white,cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer,cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size__$1)),"px"].join(''),cljs.core.cst$kw$height,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(size__$1)),"px"].join(''),cljs.core.cst$kw$white_DASH_space,cljs.core.cst$kw$nowrap,cljs.core.cst$kw$overflow,cljs.core.cst$kw$hidden], null),rooms.ui.fonts.font_small], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_click,((function (open_QMARK_,id,hover_QMARK_){
return (function (e){
if(cljs.core.truth_((function (){var and__8904__auto__ = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.ui.rooms.opened_timebar));
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.ui.rooms.opened_timebar)),id);
} else {
return and__8904__auto__;
}
})())){
cljs.core.reset_BANG_(rooms.ui.rooms.opened_timebar,null);
} else {
cljs.core.reset_BANG_(rooms.ui.rooms.opened_timebar,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,id,cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(size__$1),cljs.core.cst$kw$y,cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(size__$1),cljs.core.cst$kw$width,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size__$1),cljs.core.cst$kw$subject,subject__$1,cljs.core.cst$kw$booking_DASH_period,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(start__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end__$1)].join('')], null));
}

return e.stopPropagation();
});})(open_QMARK_,id,hover_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_over,((function (open_QMARK_,id,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
});})(open_QMARK_,id,hover_QMARK_))
,cljs.core.cst$kw$on_DASH_mouse_DASH_out,((function (open_QMARK_,id,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_(hover_QMARK_,false);
});})(open_QMARK_,id,hover_QMARK_))
], null)),subject__$1], null),(function (){var size__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(size__$1,cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(size__$1) + (5)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(size__$1) + (22))], 0));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,size__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(size__$2,cljs.core.cst$kw$fill,"white"),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(subject__$1,(0),((cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size__$2) / (12)) | (0)))], null)], null);
})()], null)], null);
});
;})(id,hover_QMARK_))
});
rooms.ui.rooms.rooms_timetable_header = (function rooms$ui$rooms$rooms_timetable_header(p__26117){
var map__26118 = p__26117;
var map__26118__$1 = ((((!((map__26118 == null)))?((((map__26118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26118):map__26118);
var start_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,cljs.core.cst$kw$start_DASH_hour);
var end_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,cljs.core.cst$kw$end_DASH_hour);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,cljs.core.cst$kw$width);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26118__$1,cljs.core.cst$kw$row_DASH_height);
var size_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,row_height], null);
var background_color = rooms.ui.colors.background;
var hours = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_hour,(end_hour + (1)));
var hour_fmt = ((function (size_opts,background_color,hours,map__26118,map__26118__$1,start_hour,end_hour,width,row_height){
return (function (hour){
if((cljs.core.deref(rooms.dom.window_width) < rooms.styles.grid.breakpoint_md)){
return hour;
} else {
if((hour < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('');
}
}
});})(size_opts,background_color,hours,map__26118,map__26118__$1,start_hour,end_hour,width,row_height))
;
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var time_column_width = (function (){var x__9268__auto__ = (time_columns_width / cljs.core.count(hours));
var y__9269__auto__ = (0);
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,rooms.ui.rooms.column_room_location,cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0)], null)], 0)),background_color,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$location),rooms.ui.fonts.bold], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,rooms.ui.rooms.column_room_name,cljs.core.cst$kw$x,rooms.ui.rooms.column_room_location,cljs.core.cst$kw$y,(0)], null)], 0)),background_color,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$room),rooms.ui.fonts.bold], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,rooms.ui.rooms.column_room_features,cljs.core.cst$kw$x,(rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name),cljs.core.cst$kw$y,(0)], null)], 0)),background_color,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$features),rooms.ui.fonts.bold], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (size_opts,background_color,hours,hour_fmt,time_columns_width,time_column_start_x,time_column_width,map__26118,map__26118__$1,start_hour,end_hour,width,row_height){
return (function (index,hour){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,time_column_width,cljs.core.cst$kw$x,(time_column_start_x + (index * time_column_width)),cljs.core.cst$kw$y,(0)], null)], 0)),background_color,hour_fmt(hour),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$word_DASH_wrap,cljs.core.cst$kw$unset], null),rooms.ui.fonts.bold], 0))], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null));
});})(size_opts,background_color,hours,hour_fmt,time_columns_width,time_column_start_x,time_column_width,map__26118,map__26118__$1,start_hour,end_hour,width,row_height))
,hours))], null);
});
rooms.ui.rooms.feature_item = (function rooms$ui$rooms$feature_item(contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"30px",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$right], null)], null),contents], null);
});
rooms.ui.rooms.features = (function rooms$ui$rooms$features(room){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.feature_item,cljs.core.cst$kw$capacity.cljs$core$IFn$_invoke$arity$1(room)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.feature_item,(cljs.core.truth_(cljs.core.cst$kw$hasVideoConferencingSupport.cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"video-gray40.svg"].join('')], null))], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.feature_item,(cljs.core.truth_(cljs.core.cst$kw$isSuitableForClientMeetings.cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"person-gray40.svg"].join('')], null))], null):null)], null)], null)], null)], null);
});
rooms.ui.rooms.features_fallback = (function rooms$ui$rooms$features_fallback(room,position){
var text_position = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(position,cljs.core.cst$kw$x,(cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(position) + (5)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(position) + (22))], 0));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,text_position,cljs.core.cst$kw$capacity.cljs$core$IFn$_invoke$arity$1(room)], null),(cljs.core.truth_(cljs.core.cst$kw$hasVideoConferencingSupport.cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(position) + rooms.ui.icons.default_icon_size) + (10)),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(position) + (5)),cljs.core.cst$kw$height,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join(''),cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"video-gray40.svg"].join('')], null)], null):null),(cljs.core.truth_(cljs.core.cst$kw$isSuitableForClientMeetings.cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,((cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(position) + (rooms.ui.icons.default_icon_size * (2))) + (20)),cljs.core.cst$kw$y,(cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(position) + (5)),cljs.core.cst$kw$height,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join(''),cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"person-gray40.svg"].join('')], null)], null):null)], null);
});
rooms.ui.rooms.rooms_timetable_row = (function rooms$ui$rooms$rooms_timetable_row(index,room,p__26120){
var map__26121 = p__26120;
var map__26121__$1 = ((((!((map__26121 == null)))?((((map__26121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26121.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26121):map__26121);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26121__$1,cljs.core.cst$kw$width);
var start_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26121__$1,cljs.core.cst$kw$start_DASH_hour);
var end_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26121__$1,cljs.core.cst$kw$end_DASH_hour);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26121__$1,cljs.core.cst$kw$row_DASH_height);
var even_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.rem(index,(2)),(0));
var background_color = ((even_QMARK_)?rooms.ui.colors.brand_gray_240:rooms.ui.colors.background);
var hours = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_hour,(end_hour + (1)));
var size_opts = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,row_height], null);
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__9268__auto__ = (time_columns_width / cljs.core.count(hours));
var y__9269__auto__ = (0);
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(index * row_height),cljs.core.cst$kw$width,rooms.ui.rooms.column_room_location], null)], 0)),background_color,cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(room),rooms.ui.fonts.font_small], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,rooms.ui.rooms.column_room_location,cljs.core.cst$kw$y,(index * row_height),cljs.core.cst$kw$width,rooms.ui.rooms.column_room_name,cljs.core.cst$kw$height,row_height], null)], 0)),background_color,clojure.string.capitalize(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(room)),rooms.ui.fonts.font_small], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name),cljs.core.cst$kw$y,(index * row_height),cljs.core.cst$kw$width,rooms.ui.rooms.column_room_features,cljs.core.cst$kw$height,row_height], null)], 0)),background_color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.features,room], null),rooms.ui.fonts.font_small,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.features_fallback,room,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name),cljs.core.cst$kw$y,(index * row_height),cljs.core.cst$kw$width,rooms.ui.rooms.column_room_features,cljs.core.cst$kw$height,row_height], null)], null)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (even_QMARK_,background_color,hours,size_opts,time_columns_width,time_column_start_x,single_time_column_width,map__26121,map__26121__$1,width,start_hour,end_hour,row_height){
return (function (hour_index,hour){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size_opts,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,single_time_column_width,cljs.core.cst$kw$x,(time_column_start_x + (hour_index * single_time_column_width)),cljs.core.cst$kw$y,(index * row_height)], null)], 0)),background_color,"",rooms.ui.fonts.font_small], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,hour_index], null));
});})(even_QMARK_,background_color,hours,size_opts,time_columns_width,time_column_start_x,single_time_column_width,map__26121,map__26121__$1,width,start_hour,end_hour,row_height))
,hours)], null);
});
rooms.ui.rooms.timebars = (function rooms$ui$rooms$timebars(index,room,p__26123){
var map__26124 = p__26123;
var map__26124__$1 = ((((!((map__26124 == null)))?((((map__26124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26124.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26124):map__26124);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26124__$1,cljs.core.cst$kw$width);
var start_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26124__$1,cljs.core.cst$kw$start_DASH_hour);
var end_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26124__$1,cljs.core.cst$kw$end_DASH_hour);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26124__$1,cljs.core.cst$kw$row_DASH_height);
var hours = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_hour,(end_hour + (1)));
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__9268__auto__ = (time_columns_width / cljs.core.count(hours));
var y__9269__auto__ = (0);
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(cljs.core.truth_(cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$text,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(time_column_start_x + (5)),cljs.core.cst$kw$y,((index * row_height) + (25)),cljs.core.cst$kw$width,(300),cljs.core.cst$kw$height,row_height], null),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$room_DASH_error)], null):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (hours,time_columns_width,time_column_start_x,single_time_column_width,map__26124,map__26124__$1,width,start_hour,end_hour,row_height){
return (function (booked_index,booking){
var start_time = rooms.fmt.hhmm__GT_date(cljs.core.cst$kw$startTime.cljs$core$IFn$_invoke$arity$1(booking));
var end_time = rooms.fmt.hhmm__GT_date(cljs.core.cst$kw$endTime.cljs$core$IFn$_invoke$arity$1(booking));
var is_all_day_booking_QMARK_ = cljs.core.cst$kw$isAllDayBooking.cljs$core$IFn$_invoke$arity$1(booking);
var start_time__$1 = (cljs.core.truth_(is_all_day_booking_QMARK_)?cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(cljs_time.core.year(start_time),cljs_time.core.month(start_time),cljs_time.core.day(start_time),(0),(0)):start_time);
var end_time__$1 = (cljs.core.truth_(is_all_day_booking_QMARK_)?cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(cljs_time.core.year(end_time),cljs_time.core.month(end_time),cljs_time.core.day(end_time),(23),(59)):end_time);
var booking_start_hour = cljs_time.core.hour(start_time__$1);
var booking_start_minute = cljs_time.core.minute(start_time__$1);
var minutes_between = cljs_time.core.in_minutes(cljs_time.core.interval(start_time__$1,end_time__$1));
var duration_full_hours = ((minutes_between / (60)) | (0));
var duration_remaining_minutes = (minutes_between - (duration_full_hours * (60)));
var duration_in_pixels = ((duration_full_hours * single_time_column_width) + ((duration_remaining_minutes / (60)) * single_time_column_width));
var bar_width = duration_in_pixels;
var bar_start_x = ((time_column_start_x + ((booking_start_hour - start_hour) * single_time_column_width)) + ((booking_start_minute / (60)) * single_time_column_width));
var bar_end_x = (bar_start_x + bar_width);
var bar_start_x__$1 = ((((bar_start_x < time_column_start_x)) && ((bar_end_x > time_column_start_x)))?time_column_start_x:((((bar_start_x < time_column_start_x)) && ((bar_end_x <= time_column_start_x)))?null:bar_start_x
));
var size_opts = (cljs.core.truth_(bar_start_x__$1)?new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(bar_start_x__$1 + (1)),cljs.core.cst$kw$y,((index * row_height) + (1)),cljs.core.cst$kw$width,(bar_width - (2)),cljs.core.cst$kw$height,(row_height - (2))], null):null);
if(cljs.core.truth_(size_opts)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.timebar,size_opts,cljs.core.cst$kw$subject.cljs$core$IFn$_invoke$arity$1(booking),cljs.core.cst$kw$startTime.cljs$core$IFn$_invoke$arity$1(booking),cljs.core.cst$kw$endTime.cljs$core$IFn$_invoke$arity$1(booking)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,booked_index], null));
} else {
return null;
}
});})(hours,time_columns_width,time_column_start_x,single_time_column_width,map__26124,map__26124__$1,width,start_hour,end_hour,row_height))
,cljs.core.cst$kw$bookedTimes.cljs$core$IFn$_invoke$arity$1(room)))], null);
});
rooms.ui.rooms.borders = (function rooms$ui$rooms$borders(p__26126){
var map__26127 = p__26126;
var map__26127__$1 = ((((!((map__26127 == null)))?((((map__26127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26127):map__26127);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$height);
var start_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$start_DASH_hour);
var end_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26127__$1,cljs.core.cst$kw$end_DASH_hour);
var hours = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_hour,(end_hour + (1)));
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__9268__auto__ = (time_columns_width / cljs.core.count(hours));
var y__9269__auto__ = (0);
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,width,cljs.core.cst$kw$height,(1),cljs.core.cst$kw$fill,rooms.ui.colors.brand_gray_230], null)], null),(function (){var iter__9798__auto__ = ((function (hours,time_columns_width,time_column_start_x,single_time_column_width,map__26127,map__26127__$1,width,height,start_hour,end_hour){
return (function rooms$ui$rooms$borders_$_iter__26129(s__26130){
return (new cljs.core.LazySeq(null,((function (hours,time_columns_width,time_column_start_x,single_time_column_width,map__26127,map__26127__$1,width,height,start_hour,end_hour){
return (function (){
var s__26130__$1 = s__26130;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26130__$1);
if(temp__5457__auto__){
var s__26130__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26130__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__26130__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__26132 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__26131 = (0);
while(true){
if((i__26131 < size__9797__auto__)){
var hour_index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__26131);
cljs.core.chunk_append(b__26132,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(time_column_start_x + (hour_index * single_time_column_width)),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,height,cljs.core.cst$kw$fill,rooms.ui.colors.brand_gray_180], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,hour_index], null)));

var G__26133 = (i__26131 + (1));
i__26131 = G__26133;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26132),rooms$ui$rooms$borders_$_iter__26129(cljs.core.chunk_rest(s__26130__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26132),null);
}
} else {
var hour_index = cljs.core.first(s__26130__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,(time_column_start_x + (hour_index * single_time_column_width)),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,height,cljs.core.cst$kw$fill,rooms.ui.colors.brand_gray_180], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,hour_index], null)),rooms$ui$rooms$borders_$_iter__26129(cljs.core.rest(s__26130__$2)));
}
} else {
return null;
}
break;
}
});})(hours,time_columns_width,time_column_start_x,single_time_column_width,map__26127,map__26127__$1,width,height,start_hour,end_hour))
,null,null));
});})(hours,time_columns_width,time_column_start_x,single_time_column_width,map__26127,map__26127__$1,width,height,start_hour,end_hour))
;
return iter__9798__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((hours + (1)))));
})()], null);
});
rooms.ui.rooms.current_time = (function rooms$ui$rooms$current_time(p__26134){
var map__26135 = p__26134;
var map__26135__$1 = ((((!((map__26135 == null)))?((((map__26135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26135.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26135):map__26135);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,cljs.core.cst$kw$width);
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,cljs.core.cst$kw$height);
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,cljs.core.cst$kw$row_DASH_height);
var start_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,cljs.core.cst$kw$start_DASH_hour);
var end_hour = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26135__$1,cljs.core.cst$kw$end_DASH_hour);
var now = cljs.core.deref(rooms.state.now_local);
var hours = cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_hour,(end_hour + (1)));
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__9268__auto__ = (time_columns_width / cljs.core.count(hours));
var y__9269__auto__ = (0);
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
var current_time_x = ((time_column_start_x + ((cljs_time.core.hour(now) - start_hour) * single_time_column_width)) + ((cljs_time.core.minute(now) / (60)) * single_time_column_width));
if((current_time_x >= time_column_start_x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rect,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$x,current_time_x,cljs.core.cst$kw$y,row_height,cljs.core.cst$kw$width,(1),cljs.core.cst$kw$height,(height - row_height),cljs.core.cst$kw$fill,rooms.ui.colors.brand_red], null)], null)], null);
} else {
return null;
}
});
rooms.ui.rooms.time_shifting = (function rooms$ui$rooms$time_shifting(p__26137){
var map__26138 = p__26137;
var map__26138__$1 = ((((!((map__26138 == null)))?((((map__26138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26138.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26138):map__26138);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26138__$1,cljs.core.cst$kw$width);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var y = (11);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,(function (){var size = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(time_column_start_x - (25)),cljs.core.cst$kw$y,(y - (5)),cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(20)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.rooms.triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-left-red.svg"].join(''),cljs.core.cst$kw$on_DASH_click,rooms.config.shift_timetable_left], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-left-red.svg"].join(''),cljs.core.cst$kw$on_DASH_click,rooms.config.shift_timetable_left], null)], 0))], null)], null);
})(),(function (){var size = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(width - (23)),cljs.core.cst$kw$y,(y - (5)),cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(20)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.rooms.triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$cursor,cljs.core.cst$kw$pointer], null)], 0)),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-right-red.svg"].join(''),cljs.core.cst$kw$on_DASH_click,rooms.config.shift_timetable_right], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$image,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([size,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-right-red.svg"].join(''),cljs.core.cst$kw$on_DASH_click,rooms.config.shift_timetable_right], null)], 0))], null)], null);
})()], null);
});
rooms.ui.rooms.opened_room_info = (function rooms$ui$rooms$opened_room_info(opened_timebar,row_height){
if(cljs.core.truth_(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(opened_timebar))){
var size = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,cljs.core.cst$kw$x.cljs$core$IFn$_invoke$arity$1(opened_timebar),cljs.core.cst$kw$y,((cljs.core.cst$kw$y.cljs$core$IFn$_invoke$arity$1(opened_timebar) + row_height) - (3)),cljs.core.cst$kw$width,(function (){var x__9268__auto__ = (200);
var y__9269__auto__ = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(opened_timebar);
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})(),cljs.core.cst$kw$height,(row_height * 1.4)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.ui.fonts.font_small,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.brand_red,cljs.core.cst$kw$padding,"5px 7px",cljs.core.cst$kw$color,rooms.ui.colors.white], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (size){
return (function (e){
return e.stopPropagation();
});})(size))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.ui.fonts.bold),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$subject)),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$subject.cljs$core$IFn$_invoke$arity$1(opened_timebar)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.ui.fonts.bold),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$booking_DASH_period)),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,cljs.core.cst$kw$booking_DASH_period.cljs$core$IFn$_invoke$arity$1(opened_timebar)], null)], null)], null)], null);
} else {
return null;
}
});
rooms.ui.rooms.rooms_timetable = (function rooms$ui$rooms$rooms_timetable(rooms__$1,p__26140){
var map__26141 = p__26140;
var map__26141__$1 = ((((!((map__26141 == null)))?((((map__26141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26141.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26141):map__26141);
var options = map__26141__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26141__$1,cljs.core.cst$kw$width);
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_will_DASH_receive_DASH_props,((function (map__26141,map__26141__$1,options,width){
return (function (){
return cljs.core.reset_BANG_(rooms.ui.rooms.opened_timebar,null);
});})(map__26141,map__26141__$1,options,width))
,cljs.core.cst$kw$reagent_DASH_render,((function (map__26141,map__26141__$1,options,width){
return (function (rooms__$2,p__26143){
var map__26144 = p__26143;
var map__26144__$1 = ((((!((map__26144 == null)))?((((map__26144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26144.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26144):map__26144);
var options__$1 = map__26144__$1;
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26144__$1,cljs.core.cst$kw$width);
var row_height = (35);
var rows_height = (row_height + (row_height * cljs.core.count(rooms__$2)));
var svg_height = (rows_height + (row_height * (2)));
var start_hour = rooms.config.start_hour();
var end_hour = rooms.config.end_hour();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$xmlns,"http://www.w3.org/2000/svg",cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,svg_height,cljs.core.cst$kw$viewBox,["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg_height)].join('')], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$g,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (row_height,rows_height,svg_height,start_hour,end_hour,map__26144,map__26144__$1,options__$1,width__$1,map__26141,map__26141__$1,options,width){
return (function (){
return cljs.core.reset_BANG_(rooms.ui.rooms.opened_timebar,null);
});})(row_height,rows_height,svg_height,start_hour,end_hour,map__26144,map__26144__$1,options__$1,width__$1,map__26141,map__26141__$1,options,width))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_timetable_header,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$row_DASH_height,row_height,cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$start_DASH_hour,start_hour,cljs.core.cst$kw$end_DASH_hour,end_hour], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (row_height,rows_height,svg_height,start_hour,end_hour,map__26144,map__26144__$1,options__$1,width__$1,map__26141,map__26141__$1,options,width){
return (function (index,room){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_timetable_row,(index + (1)),room,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$row_DASH_height,row_height,cljs.core.cst$kw$start_DASH_hour,start_hour,cljs.core.cst$kw$end_DASH_hour,end_hour], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null));
});})(row_height,rows_height,svg_height,start_hour,end_hour,map__26144,map__26144__$1,options__$1,width__$1,map__26141,map__26141__$1,options,width))
,rooms__$2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.borders,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,rows_height,cljs.core.cst$kw$start_DASH_hour,start_hour,cljs.core.cst$kw$end_DASH_hour,end_hour], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (row_height,rows_height,svg_height,start_hour,end_hour,map__26144,map__26144__$1,options__$1,width__$1,map__26141,map__26141__$1,options,width){
return (function (index,room){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.timebars,(index + (1)),room,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$row_DASH_height,row_height,cljs.core.cst$kw$start_DASH_hour,start_hour,cljs.core.cst$kw$end_DASH_hour,end_hour], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,index], null));
});})(row_height,rows_height,svg_height,start_hour,end_hour,map__26144,map__26144__$1,options__$1,width__$1,map__26141,map__26141__$1,options,width))
,rooms__$2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.current_time,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$width,width__$1,cljs.core.cst$kw$height,rows_height,cljs.core.cst$kw$start_DASH_hour,start_hour,cljs.core.cst$kw$row_DASH_height,row_height,cljs.core.cst$kw$end_DASH_hour,end_hour], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.time_shifting,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width__$1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.opened_room_info,cljs.core.deref(rooms.ui.rooms.opened_timebar),row_height], null)], null)], null);
});})(map__26141,map__26141__$1,options,width))
], null));
});
rooms.ui.rooms.first_fetch_status = (function rooms$ui$rooms$first_fetch_status(app){
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(app))){
if(cljs.core.truth_(cljs.core.cst$kw$fetching_DASH_rooms_QMARK_.cljs$core$IFn$_invoke$arity$1(app))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.rooms.spinner_big,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"spinner.gif"].join('')], null))], null);
} else {
if(cljs.core.not(cljs.core.cst$kw$server_DASH_connection_QMARK_.cljs$core$IFn$_invoke$arity$1(app))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.rooms.connection_error),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rooms_DASH_fetch_DASH_failed)], null);
} else {
return null;

}
}
} else {
return null;
}
});
rooms.ui.rooms.rooms_header = (function rooms$ui$rooms$rooms_header(app){
var showing_bookings_date = cljs.core.cst$kw$showing_DASH_bookings.cljs$core$IFn$_invoke$arity$1(app);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"60px"], null)),((cljs.core.empty_QMARK_(cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(app)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.rooms.rooms_header),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,(cljs.core.truth_(showing_bookings_date)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$showing_DASH_bookings))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.fmt.fmt_weekday_name(showing_bookings_date,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.state.current_language))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.fmt.date__GT_fi_date(showing_bookings_date))].join(''):null)], null),(cljs.core.truth_(cljs.core.cst$kw$fetching_DASH_rooms_QMARK_.cljs$core$IFn$_invoke$arity$1(app))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.rooms.spinner_inline,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"spinner.gif"].join('')], null))], null),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$fetching_DASH_rooms)], null):((cljs.core.not(cljs.core.cst$kw$server_DASH_connection_QMARK_.cljs$core$IFn$_invoke$arity$1(app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,rooms.ui.colors.error], null)),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rooms_DASH_fetch_DASH_failed)], null):null
))], null))], null);
});
rooms.ui.rooms.rooms_STAR_ = (function rooms$ui$rooms$rooms_STAR_(e_BANG_,app){
var rendered_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var update_rendered_width = ((function (rendered_width){
return (function (p1__26146_SHARP_){
return cljs.core.reset_BANG_(rendered_width,rooms.dom.element_width(reagent.core.dom_node(p1__26146_SHARP_)));
});})(rendered_width))
;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (rendered_width,update_rendered_width){
return (function (this$){
update_rendered_width(this$);

return rooms.config.adjust_start_and_end(cljs.core.deref(rendered_width),rooms.styles.grid.breakpoint_md,rooms.styles.grid.breakpoint_sm);
});})(rendered_width,update_rendered_width))
,cljs.core.cst$kw$component_DASH_did_DASH_update,((function (rendered_width,update_rendered_width){
return (function (this$){
var old_width = cljs.core.deref(rendered_width);
update_rendered_width(this$);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_width,cljs.core.deref(rendered_width))){
return rooms.config.adjust_start_and_end(cljs.core.deref(rendered_width),rooms.styles.grid.breakpoint_md,rooms.styles.grid.breakpoint_sm);
} else {
return null;
}
});})(rendered_width,update_rendered_width))
,cljs.core.cst$kw$reagent_DASH_render,((function (rendered_width,update_rendered_width){
return (function (e_BANG___$1,app__$1){
cljs.core.deref(rooms.dom.window_width);

var showing_bookings = cljs.core.cst$kw$showing_DASH_bookings.cljs$core$IFn$_invoke$arity$1(app__$1);
var filters = cljs.core.cst$kw$filters.cljs$core$IFn$_invoke$arity$1(app__$1);
var rooms__$1 = (cljs.core.truth_(showing_bookings)?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rooms,rooms.fmt.date__GT_iso_8601(showing_bookings)], null)):null);
var render_timetable_QMARK_ = (function (){var and__8904__auto__ = cljs.core.deref(rendered_width);
if(cljs.core.truth_(and__8904__auto__)){
return !(cljs.core.empty_QMARK_(rooms__$1));
} else {
return and__8904__auto__;
}
})();
var filtered_rooms = rooms.domain.room.filtered_rooms(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$rooms,rooms__$1,cljs.core.cst$kw$now,cljs.core.deref(rooms.state.now_local),cljs.core.cst$kw$filters,filters,cljs.core.cst$kw$locations_DASH_config,rooms.config.locations()], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_header,app__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.first_fetch_status,app__$1], null),(cljs.core.truth_(render_timetable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_timetable,filtered_rooms,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,cljs.core.deref(rendered_width)], null)], null):null)], null);
});})(rendered_width,update_rendered_width))
], null));
});
rooms.ui.rooms.rooms = (function rooms$ui$rooms$rooms(e_BANG_,app){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$main,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.brand_gray_250], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.content.content_wrapper,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"1em",cljs.core.cst$kw$padding_DASH_bottom,"1em"], null)], 0))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_STAR_,e_BANG_,app], null)], null)], null);
});
