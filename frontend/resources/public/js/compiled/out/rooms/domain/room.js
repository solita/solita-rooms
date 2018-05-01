// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.domain.room');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('rooms.date');
goog.require('rooms.fmt');
/**
 * Returns true if the given room satisfies the urgency filter (is free now or soon)
 */
rooms.domain.room.filter_urgency = (function rooms$domain$room$filter_urgency(room,now){
var bookings = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (booking){
var parsed_date = rooms.fmt.iso_8601__GT_date(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(booking));
var parsed_start_hh_mm = rooms.fmt.hhmm__GT_date(cljs.core.cst$kw$startTime.cljs$core$IFn$_invoke$arity$1(booking));
var parsed_end_hh_mm = rooms.fmt.hhmm__GT_date(cljs.core.cst$kw$endTime.cljs$core$IFn$_invoke$arity$1(booking));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(booking,cljs.core.cst$kw$date,parsed_date,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$startTime,cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(cljs_time.core.year(parsed_date),cljs_time.core.month(parsed_date),cljs_time.core.day(parsed_date),cljs_time.core.hour(parsed_start_hh_mm),cljs_time.core.minute(parsed_start_hh_mm)),cljs.core.cst$kw$endTime,cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5(cljs_time.core.year(parsed_date),cljs_time.core.month(parsed_date),cljs_time.core.day(parsed_date),cljs_time.core.hour(parsed_end_hh_mm),cljs_time.core.minute(parsed_end_hh_mm))], 0));
}),cljs.core.cst$kw$bookedTimes.cljs$core$IFn$_invoke$arity$1(room));
var all_day_bookings = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$isAllDayBooking,bookings);
var next_short_time_period = cljs_time.core.interval(now,cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(now,cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((15))));
var overlaping_bookings = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bookings,all_day_bookings,next_short_time_period){
return (function (p1__19013_SHARP_){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2(next_short_time_period,cljs_time.core.interval(cljs.core.cst$kw$startTime.cljs$core$IFn$_invoke$arity$1(p1__19013_SHARP_),cljs.core.cst$kw$endTime.cljs$core$IFn$_invoke$arity$1(p1__19013_SHARP_)));
});})(bookings,all_day_bookings,next_short_time_period))
,bookings);
return cljs.core.boolean$((cljs.core.empty_QMARK_(all_day_bookings)) && ((cljs.core.empty_QMARK_(overlaping_bookings)) || (cljs.core.every_QMARK_(((function (bookings,all_day_bookings,next_short_time_period,overlaping_bookings){
return (function (overlaping_booking){
var overlaping_booking_end = cljs.core.cst$kw$endTime.cljs$core$IFn$_invoke$arity$1(overlaping_booking);
var bookings_starting_after = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (overlaping_booking_end,bookings,all_day_bookings,next_short_time_period,overlaping_bookings){
return (function (booking){
return rooms.date.same_date_time_QMARK_(cljs.core.cst$kw$startTime.cljs$core$IFn$_invoke$arity$1(booking),overlaping_booking_end);
});})(overlaping_booking_end,bookings,all_day_bookings,next_short_time_period,overlaping_bookings))
,bookings);
var and__8904__auto__ = cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2(next_short_time_period,overlaping_booking_end);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.empty_QMARK_(bookings_starting_after);
} else {
return and__8904__auto__;
}
});})(bookings,all_day_bookings,next_short_time_period,overlaping_bookings))
,overlaping_bookings))));
});
rooms.domain.room.filtered_rooms = (function rooms$domain$room$filtered_rooms(p__19015){
var map__19016 = p__19015;
var map__19016__$1 = ((((!((map__19016 == null)))?((((map__19016.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19016.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19016):map__19016);
var rooms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19016__$1,cljs.core.cst$kw$rooms);
var now = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19016__$1,cljs.core.cst$kw$now);
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19016__$1,cljs.core.cst$kw$filters);
var locations_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19016__$1,cljs.core.cst$kw$locations_DASH_config);
return cljs.core.filterv(((function (map__19016,map__19016__$1,rooms__$1,now,filters,locations_config){
return (function (room){
var location_ids = cljs.core.cst$kw$locations.cljs$core$IFn$_invoke$arity$1(filters);
var location_filter_names = cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$filters,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (location_ids,map__19016,map__19016__$1,rooms__$1,now,filters,locations_config){
return (function (p1__19014_SHARP_){
var G__19018 = cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__19014_SHARP_);
return (location_ids.cljs$core$IFn$_invoke$arity$1 ? location_ids.cljs$core$IFn$_invoke$arity$1(G__19018) : location_ids.call(null,G__19018));
});})(location_ids,map__19016,map__19016__$1,rooms__$1,now,filters,locations_config))
,locations_config)], 0)));
return cljs.core.boolean$((function (){var and__8904__auto__ = (function (){var or__8916__auto__ = cljs.core.empty_QMARK_(location_filter_names);
if(or__8916__auto__){
return or__8916__auto__;
} else {
var G__19022 = cljs.core.cst$kw$location.cljs$core$IFn$_invoke$arity$1(room);
return (location_filter_names.cljs$core$IFn$_invoke$arity$1 ? location_filter_names.cljs$core$IFn$_invoke$arity$1(G__19022) : location_filter_names.call(null,G__19022));
}
})();
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = (function (){var or__8916__auto__ = cljs.core.not(cljs.core.cst$kw$video_QMARK_.cljs$core$IFn$_invoke$arity$1(filters));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var and__8904__auto____$1 = cljs.core.cst$kw$video_QMARK_.cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(and__8904__auto____$1)){
return cljs.core.cst$kw$hasVideoConferencingSupport.cljs$core$IFn$_invoke$arity$1(room);
} else {
return and__8904__auto____$1;
}
}
})();
if(cljs.core.truth_(and__8904__auto____$1)){
var and__8904__auto____$2 = (function (){var or__8916__auto__ = cljs.core.not(cljs.core.cst$kw$client_QMARK_.cljs$core$IFn$_invoke$arity$1(filters));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var and__8904__auto____$2 = cljs.core.cst$kw$client_QMARK_.cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(and__8904__auto____$2)){
return cljs.core.cst$kw$isSuitableForClientMeetings.cljs$core$IFn$_invoke$arity$1(room);
} else {
return and__8904__auto____$2;
}
}
})();
if(cljs.core.truth_(and__8904__auto____$2)){
var and__8904__auto____$3 = (function (){var or__8916__auto__ = cljs.core.not(cljs.core.cst$kw$internal_QMARK_.cljs$core$IFn$_invoke$arity$1(filters));
if(or__8916__auto__){
return or__8916__auto__;
} else {
var and__8904__auto____$3 = cljs.core.cst$kw$internal_QMARK_.cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(and__8904__auto____$3)){
return cljs.core.cst$kw$isSuitableForInternalMeetings.cljs$core$IFn$_invoke$arity$1(room);
} else {
return and__8904__auto____$3;
}
}
})();
if(cljs.core.truth_(and__8904__auto____$3)){
var and__8904__auto____$4 = (function (){var or__8916__auto__ = cljs.core.not(cljs.core.cst$kw$urgency_QMARK_.cljs$core$IFn$_invoke$arity$1(filters));
if(or__8916__auto__){
return or__8916__auto__;
} else {
return rooms.domain.room.filter_urgency(room,now);
}
})();
if(cljs.core.truth_(and__8904__auto____$4)){
return (cljs.core.cst$kw$capacity.cljs$core$IFn$_invoke$arity$1(room) >= cljs.core.cst$kw$capacity.cljs$core$IFn$_invoke$arity$1(filters));
} else {
return and__8904__auto____$4;
}
} else {
return and__8904__auto____$3;
}
} else {
return and__8904__auto____$2;
}
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
})());
});})(map__19016,map__19016__$1,rooms__$1,now,filters,locations_config))
,rooms__$1);
});
