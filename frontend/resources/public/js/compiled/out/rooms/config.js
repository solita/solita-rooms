// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
rooms.config.config = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
rooms.config.init = (function rooms$config$init(){
return cljs.core.reset_BANG_(rooms.config.config,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$locations,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$helsinki,cljs.core.cst$kw$filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Helsinki"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$oulu,cljs.core.cst$kw$filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Oulu"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$tampere,cljs.core.cst$kw$filters,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tampere"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$virtual,cljs.core.cst$kw$filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Virtual","Virtuaali"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$tallinn,cljs.core.cst$kw$filters,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Tallinna","Tallinn"], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$stockholm,cljs.core.cst$kw$filters,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sto","Stockholm","Tukholma"], null)], null)], null)),cljs.core.cst$kw$timetable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_hour,(7),cljs.core.cst$kw$end_DASH_hour,(17)], null),cljs.core.cst$kw$fetching,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$base_DASH_url,"https://roomswebservice.solita.fi/api/rooms/",cljs.core.cst$kw$fetch_DASH_next_DASH_days,(2),cljs.core.cst$kw$automatic_DASH_fetch_DASH_delay_DASH_ms,((1000) * (30))], null)], null));
});
rooms.config.start_hour = (function rooms$config$start_hour(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$start_DASH_hour], null));
});
rooms.config.end_hour = (function rooms$config$end_hour(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$end_DASH_hour], null));
});
rooms.config.server_base_url = (function rooms$config$server_base_url(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetching,cljs.core.cst$kw$base_DASH_url], null));
});
rooms.config.fetch_defay = (function rooms$config$fetch_defay(){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$fetching,cljs.core.cst$kw$automatic_DASH_fetch_DASH_delay_DASH_ms], null));
});
rooms.config.locations = (function rooms$config$locations(){
return cljs.core.cst$kw$locations.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.config.config));
});
rooms.config.url_images = "images/";
rooms.config.shift_timetable_right = (function rooms$config$shift_timetable_right(){
var start_hour = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$start_DASH_hour], null));
var end_hour = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$end_DASH_hour], null));
if((end_hour < (23))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rooms.config.config,cljs.core.assoc,cljs.core.cst$kw$timetable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_hour,(start_hour + (1)),cljs.core.cst$kw$end_DASH_hour,(end_hour + (1))], null));
} else {
return null;
}
});
rooms.config.shift_timetable_left = (function rooms$config$shift_timetable_left(){
var start_hour = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$start_DASH_hour], null));
var end_hour = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$end_DASH_hour], null));
if((start_hour > (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rooms.config.config,cljs.core.assoc,cljs.core.cst$kw$timetable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_hour,(start_hour - (1)),cljs.core.cst$kw$end_DASH_hour,(end_hour - (1))], null));
} else {
return null;
}
});
rooms.config.adjust_start_and_end = (function rooms$config$adjust_start_and_end(viewport_width,breakpoint_md,breakpoint_sm){
var new_size = (((viewport_width >= breakpoint_md))?(10):(((viewport_width >= breakpoint_sm))?(6):(3)
));
var new_time_window = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_hour,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$start_DASH_hour], null)),cljs.core.cst$kw$end_DASH_hour,(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$timetable,cljs.core.cst$kw$start_DASH_hour], null)) + new_size)], null);
var new_time_window__$1 = (((cljs.core.cst$kw$end_DASH_hour.cljs$core$IFn$_invoke$arity$1(new_time_window) > (24)))?new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_hour,(cljs.core.cst$kw$end_DASH_hour.cljs$core$IFn$_invoke$arity$1(new_time_window) - new_size),cljs.core.cst$kw$end_DASH_hour,(24)], null):new_time_window);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(rooms.config.config,cljs.core.assoc,cljs.core.cst$kw$timetable,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start_DASH_hour,cljs.core.cst$kw$start_DASH_hour.cljs$core$IFn$_invoke$arity$1(new_time_window__$1),cljs.core.cst$kw$end_DASH_hour,cljs.core.cst$kw$end_DASH_hour.cljs$core$IFn$_invoke$arity$1(new_time_window__$1)], null));
});
