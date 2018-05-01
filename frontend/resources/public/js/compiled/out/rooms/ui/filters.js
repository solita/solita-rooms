// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.filters');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.ui.calendar');
goog.require('rooms.styles.grid');
goog.require('rooms.ui.input');
goog.require('rooms.styles.filters');
goog.require('rooms.language');
goog.require('rooms.ui.icons');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('cljs_time.core');
goog.require('rooms.state');
rooms.ui.filters.heading_and_filter = (function rooms$ui$filters$heading_and_filter(text,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.filters.heading),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.filters.heading_component),component], null)], null);
});
rooms.ui.filters.filters = (function rooms$ui$filters$filters(e_BANG_,app){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.filters.filters_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.content.content_wrapper),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.grid),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.column(rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_12,rooms.styles.grid.col_size_12)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$date),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.calendar,e_BANG_,app], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.column(rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_12,rooms.styles.grid.col_size_12)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$location),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__9798__auto__ = (function rooms$ui$filters$filters_$_iter__26225(s__26226){
return (new cljs.core.LazySeq(null,(function (){
var s__26226__$1 = s__26226;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26226__$1);
if(temp__5457__auto__){
var s__26226__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26226__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__26226__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__26228 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__26227 = (0);
while(true){
if((i__26227 < size__9797__auto__)){
var location = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__26227);
cljs.core.chunk_append(b__26228,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["location-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location)))].join(''))),!(((function (){var G__26230 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location);
var fexpr__26229 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$locations], null));
return (fexpr__26229.cljs$core$IFn$_invoke$arity$1 ? fexpr__26229.cljs$core$IFn$_invoke$arity$1(G__26230) : fexpr__26229.call(null,G__26230));
})() == null)),((function (i__26227,location,c__9796__auto__,size__9797__auto__,b__26228,s__26226__$2,temp__5457__auto__){
return (function (){
var G__26231 = rooms.state.__GT_CheckFilterLocations(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location));
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26231) : e_BANG_.call(null,G__26231));
});})(i__26227,location,c__9796__auto__,size__9797__auto__,b__26228,s__26226__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location)], null)));

var G__26240 = (i__26227 + (1));
i__26227 = G__26240;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26228),rooms$ui$filters$filters_$_iter__26225(cljs.core.chunk_rest(s__26226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26228),null);
}
} else {
var location = cljs.core.first(s__26226__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["location-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location)))].join(''))),!(((function (){var G__26233 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location);
var fexpr__26232 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$locations], null));
return (fexpr__26232.cljs$core$IFn$_invoke$arity$1 ? fexpr__26232.cljs$core$IFn$_invoke$arity$1(G__26233) : fexpr__26232.call(null,G__26233));
})() == null)),((function (location,s__26226__$2,temp__5457__auto__){
return (function (){
var G__26234 = rooms.state.__GT_CheckFilterLocations(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location));
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26234) : e_BANG_.call(null,G__26234));
});})(location,s__26226__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(location)], null)),rooms$ui$filters$filters_$_iter__26225(cljs.core.rest(s__26226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9798__auto__(rooms.config.locations());
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$urgency),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$available_DASH_soon),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$urgency_QMARK_], null)),(function (p1__26220_SHARP_){
var G__26235 = rooms.state.__GT_CheckFilterBoolean(cljs.core.cst$kw$urgency_QMARK_,p1__26220_SHARP_);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26235) : e_BANG_.call(null,G__26235));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.column(rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_6,rooms.styles.grid.col_size_12)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$features),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.icons.text_and_icon,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$video_DASH_meeting_DASH_room),"video-gray40.svg",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,rooms.ui.icons.default_icon_size], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$video_QMARK_], null)),(function (p1__26221_SHARP_){
var G__26236 = rooms.state.__GT_CheckFilterBoolean(cljs.core.cst$kw$video_QMARK_,p1__26221_SHARP_);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26236) : e_BANG_.call(null,G__26236));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.icons.text_and_icon,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$client_DASH_meeting_DASH_room),"person-gray40.svg",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,rooms.ui.icons.default_icon_size], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$client_QMARK_], null)),(function (p1__26222_SHARP_){
var G__26237 = rooms.state.__GT_CheckFilterBoolean(cljs.core.cst$kw$client_QMARK_,p1__26222_SHARP_);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26237) : e_BANG_.call(null,G__26237));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.icons.text_and_icon,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$internal_DASH_meeting_DASH_room),"home-gray40.svg",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,rooms.ui.icons.default_icon_size], null)], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$internal_QMARK_], null)),(function (p1__26223_SHARP_){
var G__26238 = rooms.state.__GT_CheckFilterBoolean(cljs.core.cst$kw$internal_QMARK_,p1__26223_SHARP_);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26238) : e_BANG_.call(null,G__26238));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$capacity),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.slider,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$capacity], null)),(0),(12),(function (p1__26224_SHARP_){
var G__26239 = rooms.state.__GT_CheckFilterCapacity(p1__26224_SHARP_);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26239) : e_BANG_.call(null,G__26239));
})], null)], null)], null)], null)], null)], null);
});
