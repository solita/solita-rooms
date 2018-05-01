// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.rooms');
goog.require('cljs.core');
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
rooms.ui.rooms.opened_timebar = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"x","x",2099068185),null,new cljs.core.Keyword(null,"y","y",-1757859776),null], null));
/**
 * Renders HTML inside SVG.
 * Not all browsers support this (IE11 and below), so a working SVG solution
 * should be provided for fallback rendering.
 */
rooms.ui.rooms.html_in_svg = (function rooms$ui$rooms$html_in_svg(var_args){
var G__52596 = arguments.length;
switch (G__52596) {
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
return rooms.ui.rooms.html_in_svg.call(null,opts,element,null);
});

rooms.ui.rooms.html_in_svg.cljs$core$IFn$_invoke$arity$3 = (function (opts,element,fallback){
if(cljs.core.truth_((function (){var and__30167__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__30167__auto__)){
var and__30167__auto____$1 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__30167__auto____$1)){
var and__30167__auto____$2 = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(and__30167__auto____$2)){
return new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__30167__auto____$2;
}
} else {
return and__30167__auto____$1;
}
} else {
return and__30167__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (:x opts) (:y opts) (:width opts) (:height opts))"));
}

if(rooms.dom.ie_QMARK_){
if(cljs.core.truth_(fallback)){
return fallback;
} else {
console.warn("HTML in SVG fallback not given for element: ",cljs.core.pr_str.call(null,element));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foreignObject","foreignObject",25502111),cljs.core.select_keys.call(null,opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null)),element], null);
}
});

rooms.ui.rooms.html_in_svg.cljs$lang$maxFixedArity = 3;

rooms.ui.rooms.cell = (function rooms$ui$rooms$cell(var_args){
var G__52599 = arguments.length;
switch (G__52599) {
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
return rooms.ui.rooms.cell.call(null,size,background_color,text,null);
});

rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$4 = (function (size,background_color,text,text_style){
return rooms.ui.rooms.cell.call(null,size,background_color,text,text_style,null);
});

rooms.ui.rooms.cell.cljs$core$IFn$_invoke$arity$5 = (function (size,background_color,text,text_style,fallback){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.merge.call(null,size,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),background_color], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 5px"], null),text_style)),text], null),(cljs.core.truth_(fallback)?fallback:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.assoc.call(null,size,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size) + (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size) + (22))),text], null))], null)], null);
});

rooms.ui.rooms.cell.cljs$lang$maxFixedArity = 5;

rooms.ui.rooms.timebar = (function rooms$ui$rooms$timebar(size,subject,start,end){
var id = cljs.core.gensym.call(null,"timebar");
var hover_QMARK_ = reagent.core.atom.call(null,false);
return ((function (id,hover_QMARK_){
return (function (size__$1,subject__$1,start__$1,end__$1){
var open_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.ui.rooms.opened_timebar)),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),cljs.core.merge.call(null,size__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),((open_QMARK_)?rooms.ui.colors.brand_red:(cljs.core.truth_(cljs.core.deref.call(null,hover_QMARK_))?rooms.ui.colors.timebar_hover:rooms.ui.colors.timebar
))], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"7px 5px",new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.white,new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size__$1)),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size__$1)),"px"].join(''),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null),rooms.ui.fonts.font_small.call(null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,id,hover_QMARK_){
return (function (e){
if(cljs.core.truth_((function (){var and__30167__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.ui.rooms.opened_timebar));
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.ui.rooms.opened_timebar)),id);
} else {
return and__30167__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,rooms.ui.rooms.opened_timebar,null);
} else {
cljs.core.reset_BANG_.call(null,rooms.ui.rooms.opened_timebar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size__$1),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size__$1),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size__$1),new cljs.core.Keyword(null,"subject","subject",-1411880451),subject__$1,new cljs.core.Keyword(null,"booking-period","booking-period",1549640663),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(start__$1)," - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(end__$1)].join('')], null));
}

return e.stopPropagation();
});})(open_QMARK_,id,hover_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (open_QMARK_,id,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,true);
});})(open_QMARK_,id,hover_QMARK_))
,new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),((function (open_QMARK_,id,hover_QMARK_){
return (function (){
return cljs.core.reset_BANG_.call(null,hover_QMARK_,false);
});})(open_QMARK_,id,hover_QMARK_))
], null)),subject__$1], null),(function (){var size__$2 = cljs.core.assoc.call(null,size__$1,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size__$1) + (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size__$1) + (22)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),size__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.assoc.call(null,size__$2,new cljs.core.Keyword(null,"fill","fill",883462889),"white"),cljs.core.subs.call(null,subject__$1,(0),((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size__$2) / (12)) | (0)))], null)], null);
})()], null)], null);
});
;})(id,hover_QMARK_))
});
rooms.ui.rooms.rooms_timetable_header = (function rooms$ui$rooms$rooms_timetable_header(p__52601){
var map__52602 = p__52601;
var map__52602__$1 = ((((!((map__52602 == null)))?((((map__52602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52602):map__52602);
var start_hour = cljs.core.get.call(null,map__52602__$1,new cljs.core.Keyword(null,"start-hour","start-hour",380944413));
var end_hour = cljs.core.get.call(null,map__52602__$1,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667));
var width = cljs.core.get.call(null,map__52602__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var row_height = cljs.core.get.call(null,map__52602__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var size_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),row_height], null);
var background_color = rooms.ui.colors.background;
var hours = cljs.core.range.call(null,start_hour,(end_hour + (1)));
var hour_fmt = ((function (size_opts,background_color,hours,map__52602,map__52602__$1,start_hour,end_hour,width,row_height){
return (function (hour){
if((cljs.core.deref.call(null,rooms.dom.window_width) < rooms.styles.grid.breakpoint_md)){
return hour;
} else {
if((hour < (10))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hour),":00"].join('');
}
}
});})(size_opts,background_color,hours,map__52602,map__52602__$1,start_hour,end_hour,width,row_height))
;
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var time_column_width = (function (){var x__30531__auto__ = (time_columns_width / cljs.core.count.call(null,hours));
var y__30532__auto__ = (0);
return ((x__30531__auto__ > y__30532__auto__) ? x__30531__auto__ : y__30532__auto__);
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_location,new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),background_color,rooms.language.text.call(null,new cljs.core.Keyword(null,"location","location",1815599388)),rooms.ui.fonts.bold.call(null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_name,new cljs.core.Keyword(null,"x","x",2099068185),rooms.ui.rooms.column_room_location,new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),background_color,rooms.language.text.call(null,new cljs.core.Keyword(null,"room","room",536484922)),rooms.ui.fonts.bold.call(null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_features,new cljs.core.Keyword(null,"x","x",2099068185),(rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),background_color,rooms.language.text.call(null,new cljs.core.Keyword(null,"features","features",-1146962336)),rooms.ui.fonts.bold.call(null)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (size_opts,background_color,hours,hour_fmt,time_columns_width,time_column_start_x,time_column_width,map__52602,map__52602__$1,start_hour,end_hour,width,row_height){
return (function (index,hour){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),time_column_width,new cljs.core.Keyword(null,"x","x",2099068185),(time_column_start_x + (index * time_column_width)),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)),background_color,hour_fmt.call(null,hour),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Keyword(null,"unset","unset",-513298114)], null),rooms.ui.fonts.bold.call(null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
});})(size_opts,background_color,hours,hour_fmt,time_columns_width,time_column_start_x,time_column_width,map__52602,map__52602__$1,start_hour,end_hour,width,row_height))
,hours))], null);
});
rooms.ui.rooms.feature_item = (function rooms$ui$rooms$feature_item(contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"30px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null),contents], null);
});
rooms.ui.rooms.features = (function rooms$ui$rooms$features(room){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.feature_item,new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(room)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.feature_item,(cljs.core.truth_(new cljs.core.Keyword(null,"hasVideoConferencingSupport","hasVideoConferencingSupport",-1462745985).cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"video-gray40.svg"].join('')], null))], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.feature_item,(cljs.core.truth_(new cljs.core.Keyword(null,"isSuitableForClientMeetings","isSuitableForClientMeetings",-2026578040).cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"person-gray40.svg"].join('')], null))], null):null)], null)], null)], null)], null);
});
rooms.ui.rooms.features_fallback = (function rooms$ui$rooms$features_fallback(room,position){
var text_position = cljs.core.assoc.call(null,position,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) + (5)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) + (22)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),position,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),text_position,new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(room)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"hasVideoConferencingSupport","hasVideoConferencingSupport",-1462745985).cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) + rooms.ui.icons.default_icon_size) + (10)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) + (5)),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join(''),new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"video-gray40.svg"].join('')], null)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"isSuitableForClientMeetings","isSuitableForClientMeetings",-2026578040).cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) + (rooms.ui.icons.default_icon_size * (2))) + (20)),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) + (5)),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.icons.default_icon_size),"px"].join(''),new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"person-gray40.svg"].join('')], null)], null):null)], null);
});
rooms.ui.rooms.rooms_timetable_row = (function rooms$ui$rooms$rooms_timetable_row(index,room,p__52604){
var map__52605 = p__52604;
var map__52605__$1 = ((((!((map__52605 == null)))?((((map__52605.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52605.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52605):map__52605);
var width = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_hour = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"start-hour","start-hour",380944413));
var end_hour = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667));
var row_height = cljs.core.get.call(null,map__52605__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var even_QMARK_ = cljs.core._EQ_.call(null,cljs.core.rem.call(null,index,(2)),(0));
var background_color = ((even_QMARK_)?rooms.ui.colors.brand_gray_240:rooms.ui.colors.background);
var hours = cljs.core.range.call(null,start_hour,(end_hour + (1)));
var size_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),row_height], null);
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__30531__auto__ = (time_columns_width / cljs.core.count.call(null,hours));
var y__30532__auto__ = (0);
return ((x__30531__auto__ > y__30532__auto__) ? x__30531__auto__ : y__30532__auto__);
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(index * row_height),new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_location], null)),background_color,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(room),rooms.ui.fonts.font_small.call(null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),rooms.ui.rooms.column_room_location,new cljs.core.Keyword(null,"y","y",-1757859776),(index * row_height),new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_name,new cljs.core.Keyword(null,"height","height",1025178622),row_height], null)),background_color,clojure.string.capitalize.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(room)),rooms.ui.fonts.font_small.call(null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name),new cljs.core.Keyword(null,"y","y",-1757859776),(index * row_height),new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_features,new cljs.core.Keyword(null,"height","height",1025178622),row_height], null)),background_color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.features,room], null),rooms.ui.fonts.font_small.call(null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.features_fallback,room,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name),new cljs.core.Keyword(null,"y","y",-1757859776),(index * row_height),new cljs.core.Keyword(null,"width","width",-384071477),rooms.ui.rooms.column_room_features,new cljs.core.Keyword(null,"height","height",1025178622),row_height], null)], null)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (even_QMARK_,background_color,hours,size_opts,time_columns_width,time_column_start_x,single_time_column_width,map__52605,map__52605__$1,width,start_hour,end_hour,row_height){
return (function (hour_index,hour){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.cell,cljs.core.merge.call(null,size_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),single_time_column_width,new cljs.core.Keyword(null,"x","x",2099068185),(time_column_start_x + (hour_index * single_time_column_width)),new cljs.core.Keyword(null,"y","y",-1757859776),(index * row_height)], null)),background_color,"",rooms.ui.fonts.font_small.call(null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour_index], null));
});})(even_QMARK_,background_color,hours,size_opts,time_columns_width,time_column_start_x,single_time_column_width,map__52605,map__52605__$1,width,start_hour,end_hour,row_height))
,hours))], null);
});
rooms.ui.rooms.timebars = (function rooms$ui$rooms$timebars(index,room,p__52607){
var map__52608 = p__52607;
var map__52608__$1 = ((((!((map__52608 == null)))?((((map__52608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52608):map__52608);
var width = cljs.core.get.call(null,map__52608__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var start_hour = cljs.core.get.call(null,map__52608__$1,new cljs.core.Keyword(null,"start-hour","start-hour",380944413));
var end_hour = cljs.core.get.call(null,map__52608__$1,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667));
var row_height = cljs.core.get.call(null,map__52608__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var hours = cljs.core.range.call(null,start_hour,(end_hour + (1)));
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__30531__auto__ = (time_columns_width / cljs.core.count.call(null,hours));
var y__30532__auto__ = (0);
return ((x__30531__auto__ > y__30532__auto__) ? x__30531__auto__ : y__30532__auto__);
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(room))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(time_column_start_x + (5)),new cljs.core.Keyword(null,"y","y",-1757859776),((index * row_height) + (25)),new cljs.core.Keyword(null,"width","width",-384071477),(300),new cljs.core.Keyword(null,"height","height",1025178622),row_height], null),rooms.language.text.call(null,new cljs.core.Keyword(null,"room-error","room-error",336814599))], null):cljs.core.map_indexed.call(null,((function (hours,time_columns_width,time_column_start_x,single_time_column_width,map__52608,map__52608__$1,width,start_hour,end_hour,row_height){
return (function (booked_index,booking){
var start_time = rooms.fmt.hhmm__GT_date.call(null,new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(booking));
var end_time = rooms.fmt.hhmm__GT_date.call(null,new cljs.core.Keyword(null,"endTime","endTime",-662648598).cljs$core$IFn$_invoke$arity$1(booking));
var is_all_day_booking_QMARK_ = new cljs.core.Keyword(null,"isAllDayBooking","isAllDayBooking",951031844).cljs$core$IFn$_invoke$arity$1(booking);
var start_time__$1 = (cljs.core.truth_(is_all_day_booking_QMARK_)?cljs_time.core.local_date_time.call(null,cljs_time.core.year.call(null,start_time),cljs_time.core.month.call(null,start_time),cljs_time.core.day.call(null,start_time),(0),(0)):start_time);
var end_time__$1 = (cljs.core.truth_(is_all_day_booking_QMARK_)?cljs_time.core.local_date_time.call(null,cljs_time.core.year.call(null,end_time),cljs_time.core.month.call(null,end_time),cljs_time.core.day.call(null,end_time),(23),(59)):end_time);
var booking_start_hour = cljs_time.core.hour.call(null,start_time__$1);
var booking_start_minute = cljs_time.core.minute.call(null,start_time__$1);
var minutes_between = cljs_time.core.in_minutes.call(null,cljs_time.core.interval.call(null,start_time__$1,end_time__$1));
var duration_full_hours = ((minutes_between / (60)) | (0));
var duration_remaining_minutes = (minutes_between - (duration_full_hours * (60)));
var duration_in_pixels = ((duration_full_hours * single_time_column_width) + ((duration_remaining_minutes / (60)) * single_time_column_width));
var bar_width = duration_in_pixels;
var bar_start_x = ((time_column_start_x + ((booking_start_hour - start_hour) * single_time_column_width)) + ((booking_start_minute / (60)) * single_time_column_width));
var bar_end_x = (bar_start_x + bar_width);
var bar_start_x__$1 = ((((bar_start_x < time_column_start_x)) && ((bar_end_x > time_column_start_x)))?time_column_start_x:((((bar_start_x < time_column_start_x)) && ((bar_end_x <= time_column_start_x)))?null:bar_start_x
));
var size_opts = (cljs.core.truth_(bar_start_x__$1)?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(bar_start_x__$1 + (1)),new cljs.core.Keyword(null,"y","y",-1757859776),((index * row_height) + (1)),new cljs.core.Keyword(null,"width","width",-384071477),(bar_width - (2)),new cljs.core.Keyword(null,"height","height",1025178622),(row_height - (2))], null):null);
if(cljs.core.truth_(size_opts)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.timebar,size_opts,new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(booking),new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(booking),new cljs.core.Keyword(null,"endTime","endTime",-662648598).cljs$core$IFn$_invoke$arity$1(booking)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),booked_index], null));
} else {
return null;
}
});})(hours,time_columns_width,time_column_start_x,single_time_column_width,map__52608,map__52608__$1,width,start_hour,end_hour,row_height))
,new cljs.core.Keyword(null,"bookedTimes","bookedTimes",-864821244).cljs$core$IFn$_invoke$arity$1(room)))], null);
});
rooms.ui.rooms.borders = (function rooms$ui$rooms$borders(p__52610){
var map__52611 = p__52610;
var map__52611__$1 = ((((!((map__52611 == null)))?((((map__52611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52611.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52611):map__52611);
var width = cljs.core.get.call(null,map__52611__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__52611__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start_hour = cljs.core.get.call(null,map__52611__$1,new cljs.core.Keyword(null,"start-hour","start-hour",380944413));
var end_hour = cljs.core.get.call(null,map__52611__$1,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667));
var hours = cljs.core.range.call(null,start_hour,(end_hour + (1)));
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__30531__auto__ = (time_columns_width / cljs.core.count.call(null,hours));
var y__30532__auto__ = (0);
return ((x__30531__auto__ > y__30532__auto__) ? x__30531__auto__ : y__30532__auto__);
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),(1),new cljs.core.Keyword(null,"fill","fill",883462889),rooms.ui.colors.brand_gray_230], null)], null),(function (){var iter__31061__auto__ = ((function (hours,time_columns_width,time_column_start_x,single_time_column_width,map__52611,map__52611__$1,width,height,start_hour,end_hour){
return (function rooms$ui$rooms$borders_$_iter__52613(s__52614){
return (new cljs.core.LazySeq(null,((function (hours,time_columns_width,time_column_start_x,single_time_column_width,map__52611,map__52611__$1,width,height,start_hour,end_hour){
return (function (){
var s__52614__$1 = s__52614;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52614__$1);
if(temp__5457__auto__){
var s__52614__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52614__$2)){
var c__31059__auto__ = cljs.core.chunk_first.call(null,s__52614__$2);
var size__31060__auto__ = cljs.core.count.call(null,c__31059__auto__);
var b__52616 = cljs.core.chunk_buffer.call(null,size__31060__auto__);
if((function (){var i__52615 = (0);
while(true){
if((i__52615 < size__31060__auto__)){
var hour_index = cljs.core._nth.call(null,c__31059__auto__,i__52615);
cljs.core.chunk_append.call(null,b__52616,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(time_column_start_x + (hour_index * single_time_column_width)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"fill","fill",883462889),rooms.ui.colors.brand_gray_180], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour_index], null)));

var G__52617 = (i__52615 + (1));
i__52615 = G__52617;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52616),rooms$ui$rooms$borders_$_iter__52613.call(null,cljs.core.chunk_rest.call(null,s__52614__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52616),null);
}
} else {
var hour_index = cljs.core.first.call(null,s__52614__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(time_column_start_x + (hour_index * single_time_column_width)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"fill","fill",883462889),rooms.ui.colors.brand_gray_180], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),hour_index], null)),rooms$ui$rooms$borders_$_iter__52613.call(null,cljs.core.rest.call(null,s__52614__$2)));
}
} else {
return null;
}
break;
}
});})(hours,time_columns_width,time_column_start_x,single_time_column_width,map__52611,map__52611__$1,width,height,start_hour,end_hour))
,null,null));
});})(hours,time_columns_width,time_column_start_x,single_time_column_width,map__52611,map__52611__$1,width,height,start_hour,end_hour))
;
return iter__31061__auto__.call(null,cljs.core.range.call(null,(0),cljs.core.count.call(null,(hours + (1)))));
})()], null);
});
rooms.ui.rooms.current_time = (function rooms$ui$rooms$current_time(p__52618){
var map__52619 = p__52618;
var map__52619__$1 = ((((!((map__52619 == null)))?((((map__52619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52619):map__52619);
var width = cljs.core.get.call(null,map__52619__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__52619__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var row_height = cljs.core.get.call(null,map__52619__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749));
var start_hour = cljs.core.get.call(null,map__52619__$1,new cljs.core.Keyword(null,"start-hour","start-hour",380944413));
var end_hour = cljs.core.get.call(null,map__52619__$1,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667));
var now = cljs.core.deref.call(null,rooms.state.now_local);
var hours = cljs.core.range.call(null,start_hour,(end_hour + (1)));
var time_columns_width = (((width - rooms.ui.rooms.column_room_location) - rooms.ui.rooms.column_room_name) - rooms.ui.rooms.column_room_features);
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var single_time_column_width = (function (){var x__30531__auto__ = (time_columns_width / cljs.core.count.call(null,hours));
var y__30532__auto__ = (0);
return ((x__30531__auto__ > y__30532__auto__) ? x__30531__auto__ : y__30532__auto__);
})();
var current_time_x = ((time_column_start_x + ((cljs_time.core.hour.call(null,now) - start_hour) * single_time_column_width)) + ((cljs_time.core.minute.call(null,now) / (60)) * single_time_column_width));
if((current_time_x >= time_column_start_x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),current_time_x,new cljs.core.Keyword(null,"y","y",-1757859776),row_height,new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"height","height",1025178622),(height - row_height),new cljs.core.Keyword(null,"fill","fill",883462889),rooms.ui.colors.brand_red], null)], null)], null);
} else {
return null;
}
});
rooms.ui.rooms.time_shifting = (function rooms$ui$rooms$time_shifting(p__52621){
var map__52622 = p__52621;
var map__52622__$1 = ((((!((map__52622 == null)))?((((map__52622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52622):map__52622);
var width = cljs.core.get.call(null,map__52622__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var time_column_start_x = ((rooms.ui.rooms.column_room_location + rooms.ui.rooms.column_room_name) + rooms.ui.rooms.column_room_features);
var y = (11);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),(function (){var size = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(time_column_start_x - (25)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,cljs.core.merge.call(null,rooms.styles.rooms.triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-left-red.svg"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rooms.config.shift_timetable_left], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.merge.call(null,size,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-left-red.svg"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rooms.config.shift_timetable_left], null))], null)], null);
})(),(function (){var size = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(width - (23)),new cljs.core.Keyword(null,"y","y",-1757859776),(y - (5)),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(20)], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,cljs.core.merge.call(null,rooms.styles.rooms.triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-right-red.svg"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rooms.config.shift_timetable_right], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.merge.call(null,size,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-right-red.svg"].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rooms.config.shift_timetable_right], null))], null)], null);
})()], null);
});
rooms.ui.rooms.opened_room_info = (function rooms$ui$rooms$opened_room_info(opened_timebar,row_height){
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(opened_timebar))){
var size = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opened_timebar),new cljs.core.Keyword(null,"y","y",-1757859776),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opened_timebar) + row_height) - (3)),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var x__30531__auto__ = (200);
var y__30532__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(opened_timebar);
return ((x__30531__auto__ > y__30532__auto__) ? x__30531__auto__ : y__30532__auto__);
})(),new cljs.core.Keyword(null,"height","height",1025178622),(row_height * 1.4)], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.html_in_svg,size,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,rooms.ui.fonts.font_small.call(null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rooms.ui.colors.brand_red,new cljs.core.Keyword(null,"padding","padding",1660304693),"5px 7px",new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.white], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (size){
return (function (e){
return e.stopPropagation();
});})(size))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,rooms.ui.fonts.bold.call(null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.language.text.call(null,new cljs.core.Keyword(null,"subject","subject",-1411880451))),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(opened_timebar)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,rooms.ui.fonts.bold.call(null)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.language.text.call(null,new cljs.core.Keyword(null,"booking-period","booking-period",1549640663))),": "].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"booking-period","booking-period",1549640663).cljs$core$IFn$_invoke$arity$1(opened_timebar)], null)], null)], null)], null);
} else {
return null;
}
});
rooms.ui.rooms.rooms_timetable = (function rooms$ui$rooms$rooms_timetable(rooms__$1,p__52624){
var map__52625 = p__52624;
var map__52625__$1 = ((((!((map__52625 == null)))?((((map__52625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52625):map__52625);
var options = map__52625__$1;
var width = cljs.core.get.call(null,map__52625__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-will-receive-props","component-will-receive-props",551608157),((function (map__52625,map__52625__$1,options,width){
return (function (){
return cljs.core.reset_BANG_.call(null,rooms.ui.rooms.opened_timebar,null);
});})(map__52625,map__52625__$1,options,width))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__52625,map__52625__$1,options,width){
return (function (rooms__$2,p__52627){
var map__52628 = p__52627;
var map__52628__$1 = ((((!((map__52628 == null)))?((((map__52628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52628):map__52628);
var options__$1 = map__52628__$1;
var width__$1 = cljs.core.get.call(null,map__52628__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var row_height = (35);
var rows_height = (row_height + (row_height * cljs.core.count.call(null,rooms__$2)));
var svg_height = (rows_height + (row_height * (2)));
var start_hour = rooms.config.start_hour.call(null);
var end_hour = rooms.config.end_hour.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),svg_height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(svg_height)].join('')], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (row_height,rows_height,svg_height,start_hour,end_hour,map__52628,map__52628__$1,options__$1,width__$1,map__52625,map__52625__$1,options,width){
return (function (){
return cljs.core.reset_BANG_.call(null,rooms.ui.rooms.opened_timebar,null);
});})(row_height,rows_height,svg_height,start_hour,end_hour,map__52628,map__52628__$1,options__$1,width__$1,map__52625,map__52625__$1,options,width))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_timetable_header,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-height","row-height",527360749),row_height,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"start-hour","start-hour",380944413),start_hour,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),end_hour], null)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (row_height,rows_height,svg_height,start_hour,end_hour,map__52628,map__52628__$1,options__$1,width__$1,map__52625,map__52625__$1,options,width){
return (function (index,room){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_timetable_row,(index + (1)),room,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749),row_height,new cljs.core.Keyword(null,"start-hour","start-hour",380944413),start_hour,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),end_hour], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
});})(row_height,rows_height,svg_height,start_hour,end_hour,map__52628,map__52628__$1,options__$1,width__$1,map__52625,map__52625__$1,options,width))
,rooms__$2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.borders,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),rows_height,new cljs.core.Keyword(null,"start-hour","start-hour",380944413),start_hour,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),end_hour], null)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (row_height,rows_height,svg_height,start_hour,end_hour,map__52628,map__52628__$1,options__$1,width__$1,map__52625,map__52625__$1,options,width){
return (function (index,room){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.timebars,(index + (1)),room,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749),row_height,new cljs.core.Keyword(null,"start-hour","start-hour",380944413),start_hour,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),end_hour], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
});})(row_height,rows_height,svg_height,start_hour,end_hour,map__52628,map__52628__$1,options__$1,width__$1,map__52625,map__52625__$1,options,width))
,rooms__$2)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.current_time,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),rows_height,new cljs.core.Keyword(null,"start-hour","start-hour",380944413),start_hour,new cljs.core.Keyword(null,"row-height","row-height",527360749),row_height,new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),end_hour], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.time_shifting,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.opened_room_info,cljs.core.deref.call(null,rooms.ui.rooms.opened_timebar),row_height], null)], null)], null);
});})(map__52625,map__52625__$1,options,width))
], null));
});
rooms.ui.rooms.first_fetch_status = (function rooms$ui$rooms$first_fetch_status(app){
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(app))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fetching-rooms?","fetching-rooms?",-848495851).cljs$core$IFn$_invoke$arity$1(app))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,rooms.styles.rooms.spinner_big,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"spinner.gif"].join('')], null))], null);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"server-connection?","server-connection?",-1416673702).cljs$core$IFn$_invoke$arity$1(app))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.rooms.connection_error),rooms.language.text.call(null,new cljs.core.Keyword(null,"rooms-fetch-failed","rooms-fetch-failed",-1117968120))], null);
} else {
return null;

}
}
} else {
return null;
}
});
rooms.ui.rooms.rooms_header = (function rooms$ui$rooms$rooms_header(app){
var showing_bookings_date = new cljs.core.Keyword(null,"showing-bookings","showing-bookings",-1294727436).cljs$core$IFn$_invoke$arity$1(app);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"60px"], null)),((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(app)))?null:new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.rooms.rooms_header),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),(cljs.core.truth_(showing_bookings_date)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.language.text.call(null,new cljs.core.Keyword(null,"showing-bookings","showing-bookings",-1294727436)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.fmt.fmt_weekday_name.call(null,showing_bookings_date,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.state.current_language))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.fmt.date__GT_fi_date.call(null,showing_bookings_date))].join(''):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"fetching-rooms?","fetching-rooms?",-848495851).cljs$core$IFn$_invoke$arity$1(app))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,rooms.styles.rooms.spinner_inline,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"spinner.gif"].join('')], null))], null),rooms.language.text.call(null,new cljs.core.Keyword(null,"fetching-rooms","fetching-rooms",-1785337324))], null):((cljs.core.not.call(null,new cljs.core.Keyword(null,"server-connection?","server-connection?",-1416673702).cljs$core$IFn$_invoke$arity$1(app)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.error], null)),rooms.language.text.call(null,new cljs.core.Keyword(null,"rooms-fetch-failed","rooms-fetch-failed",-1117968120))], null):null
))], null))], null);
});
rooms.ui.rooms.rooms_STAR_ = (function rooms$ui$rooms$rooms_STAR_(e_BANG_,app){
var rendered_width = reagent.core.atom.call(null,null);
var update_rendered_width = ((function (rendered_width){
return (function (p1__52630_SHARP_){
return cljs.core.reset_BANG_.call(null,rendered_width,rooms.dom.element_width.call(null,reagent.core.dom_node.call(null,p1__52630_SHARP_)));
});})(rendered_width))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (rendered_width,update_rendered_width){
return (function (this$){
update_rendered_width.call(null,this$);

return rooms.config.adjust_start_and_end.call(null,cljs.core.deref.call(null,rendered_width),rooms.styles.grid.breakpoint_md,rooms.styles.grid.breakpoint_sm);
});})(rendered_width,update_rendered_width))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (rendered_width,update_rendered_width){
return (function (this$){
var old_width = cljs.core.deref.call(null,rendered_width);
update_rendered_width.call(null,this$);

if(cljs.core.not_EQ_.call(null,old_width,cljs.core.deref.call(null,rendered_width))){
return rooms.config.adjust_start_and_end.call(null,cljs.core.deref.call(null,rendered_width),rooms.styles.grid.breakpoint_md,rooms.styles.grid.breakpoint_sm);
} else {
return null;
}
});})(rendered_width,update_rendered_width))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (rendered_width,update_rendered_width){
return (function (e_BANG___$1,app__$1){
cljs.core.deref.call(null,rooms.dom.window_width);

var showing_bookings = new cljs.core.Keyword(null,"showing-bookings","showing-bookings",-1294727436).cljs$core$IFn$_invoke$arity$1(app__$1);
var filters = new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(app__$1);
var rooms__$1 = (cljs.core.truth_(showing_bookings)?cljs.core.get_in.call(null,app__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),rooms.fmt.date__GT_iso_8601.call(null,showing_bookings)], null)):null);
var render_timetable_QMARK_ = (function (){var and__30167__auto__ = cljs.core.deref.call(null,rendered_width);
if(cljs.core.truth_(and__30167__auto__)){
return !(cljs.core.empty_QMARK_.call(null,rooms__$1));
} else {
return and__30167__auto__;
}
})();
var filtered_rooms = rooms.domain.room.filtered_rooms.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),rooms__$1,new cljs.core.Keyword(null,"now","now",-1650525531),cljs.core.deref.call(null,rooms.state.now_local),new cljs.core.Keyword(null,"filters","filters",974726919),filters,new cljs.core.Keyword(null,"locations-config","locations-config",1287505119),rooms.config.locations.call(null)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_header,app__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.first_fetch_status,app__$1], null),(cljs.core.truth_(render_timetable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_timetable,filtered_rooms,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,rendered_width)], null)], null):null)], null);
});})(rendered_width,update_rendered_width))
], null));
});
rooms.ui.rooms.rooms = (function rooms$ui$rooms$rooms(e_BANG_,app){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1),new cljs.core.Keyword(null,"background-color","background-color",570434026),rooms.ui.colors.brand_gray_250], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,cljs.core.merge.call(null,rooms.styles.content.content_wrapper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"1em",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"1em"], null))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms_STAR_,e_BANG_,app], null)], null)], null);
});

//# sourceMappingURL=rooms.js.map?rel=1525170771719
