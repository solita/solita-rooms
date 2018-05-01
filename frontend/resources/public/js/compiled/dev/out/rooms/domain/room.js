// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.domain.room');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('rooms.date');
goog.require('rooms.fmt');
/**
 * Returns true if the given room satisfies the urgency filter (is free now or soon)
 */
rooms.domain.room.filter_urgency = (function rooms$domain$room$filter_urgency(room,now){
var bookings = cljs.core.map.call(null,(function (booking){
var parsed_date = rooms.fmt.iso_8601__GT_date.call(null,new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(booking));
var parsed_start_hh_mm = rooms.fmt.hhmm__GT_date.call(null,new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(booking));
var parsed_end_hh_mm = rooms.fmt.hhmm__GT_date.call(null,new cljs.core.Keyword(null,"endTime","endTime",-662648598).cljs$core$IFn$_invoke$arity$1(booking));
return cljs.core.assoc.call(null,booking,new cljs.core.Keyword(null,"date","date",-1463434462),parsed_date,new cljs.core.Keyword(null,"startTime","startTime",1583467878),cljs_time.core.local_date_time.call(null,cljs_time.core.year.call(null,parsed_date),cljs_time.core.month.call(null,parsed_date),cljs_time.core.day.call(null,parsed_date),cljs_time.core.hour.call(null,parsed_start_hh_mm),cljs_time.core.minute.call(null,parsed_start_hh_mm)),new cljs.core.Keyword(null,"endTime","endTime",-662648598),cljs_time.core.local_date_time.call(null,cljs_time.core.year.call(null,parsed_date),cljs_time.core.month.call(null,parsed_date),cljs_time.core.day.call(null,parsed_date),cljs_time.core.hour.call(null,parsed_end_hh_mm),cljs_time.core.minute.call(null,parsed_end_hh_mm)));
}),new cljs.core.Keyword(null,"bookedTimes","bookedTimes",-864821244).cljs$core$IFn$_invoke$arity$1(room));
var all_day_bookings = cljs.core.filter.call(null,new cljs.core.Keyword(null,"isAllDayBooking","isAllDayBooking",951031844),bookings);
var next_short_time_period = cljs_time.core.interval.call(null,now,cljs_time.core.plus.call(null,now,cljs_time.core.minutes.call(null,(15))));
var overlaping_bookings = cljs.core.filter.call(null,((function (bookings,all_day_bookings,next_short_time_period){
return (function (p1__43099_SHARP_){
return cljs_time.core.overlaps_QMARK_.call(null,next_short_time_period,cljs_time.core.interval.call(null,new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(p1__43099_SHARP_),new cljs.core.Keyword(null,"endTime","endTime",-662648598).cljs$core$IFn$_invoke$arity$1(p1__43099_SHARP_)));
});})(bookings,all_day_bookings,next_short_time_period))
,bookings);
return cljs.core.boolean$.call(null,(cljs.core.empty_QMARK_.call(null,all_day_bookings)) && ((cljs.core.empty_QMARK_.call(null,overlaping_bookings)) || (cljs.core.every_QMARK_.call(null,((function (bookings,all_day_bookings,next_short_time_period,overlaping_bookings){
return (function (overlaping_booking){
var overlaping_booking_end = new cljs.core.Keyword(null,"endTime","endTime",-662648598).cljs$core$IFn$_invoke$arity$1(overlaping_booking);
var bookings_starting_after = cljs.core.filter.call(null,((function (overlaping_booking_end,bookings,all_day_bookings,next_short_time_period,overlaping_bookings){
return (function (booking){
return rooms.date.same_date_time_QMARK_.call(null,new cljs.core.Keyword(null,"startTime","startTime",1583467878).cljs$core$IFn$_invoke$arity$1(booking),overlaping_booking_end);
});})(overlaping_booking_end,bookings,all_day_bookings,next_short_time_period,overlaping_bookings))
,bookings);
var and__30167__auto__ = cljs_time.core.within_QMARK_.call(null,next_short_time_period,overlaping_booking_end);
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.empty_QMARK_.call(null,bookings_starting_after);
} else {
return and__30167__auto__;
}
});})(bookings,all_day_bookings,next_short_time_period,overlaping_bookings))
,overlaping_bookings))));
});
rooms.domain.room.filtered_rooms = (function rooms$domain$room$filtered_rooms(p__43101){
var map__43102 = p__43101;
var map__43102__$1 = ((((!((map__43102 == null)))?((((map__43102.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43102.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43102):map__43102);
var rooms__$1 = cljs.core.get.call(null,map__43102__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var now = cljs.core.get.call(null,map__43102__$1,new cljs.core.Keyword(null,"now","now",-1650525531));
var filters = cljs.core.get.call(null,map__43102__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var locations_config = cljs.core.get.call(null,map__43102__$1,new cljs.core.Keyword(null,"locations-config","locations-config",1287505119));
return cljs.core.filterv.call(null,((function (map__43102,map__43102__$1,rooms__$1,now,filters,locations_config){
return (function (room){
var location_ids = new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(filters);
var location_filter_names = cljs.core.set.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.filter.call(null,((function (location_ids,map__43102,map__43102__$1,rooms__$1,now,filters,locations_config){
return (function (p1__43100_SHARP_){
return location_ids.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__43100_SHARP_));
});})(location_ids,map__43102,map__43102__$1,rooms__$1,now,filters,locations_config))
,locations_config)));
return cljs.core.boolean$.call(null,(function (){var and__30167__auto__ = (function (){var or__30179__auto__ = cljs.core.empty_QMARK_.call(null,location_filter_names);
if(or__30179__auto__){
return or__30179__auto__;
} else {
return location_filter_names.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(room));
}
})();
if(cljs.core.truth_(and__30167__auto__)){
var and__30167__auto____$1 = (function (){var or__30179__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"video?","video?",1029887787).cljs$core$IFn$_invoke$arity$1(filters));
if(or__30179__auto__){
return or__30179__auto__;
} else {
var and__30167__auto____$1 = new cljs.core.Keyword(null,"video?","video?",1029887787).cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(and__30167__auto____$1)){
return new cljs.core.Keyword(null,"hasVideoConferencingSupport","hasVideoConferencingSupport",-1462745985).cljs$core$IFn$_invoke$arity$1(room);
} else {
return and__30167__auto____$1;
}
}
})();
if(cljs.core.truth_(and__30167__auto____$1)){
var and__30167__auto____$2 = (function (){var or__30179__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"client?","client?",-1933413058).cljs$core$IFn$_invoke$arity$1(filters));
if(or__30179__auto__){
return or__30179__auto__;
} else {
var and__30167__auto____$2 = new cljs.core.Keyword(null,"client?","client?",-1933413058).cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(and__30167__auto____$2)){
return new cljs.core.Keyword(null,"isSuitableForClientMeetings","isSuitableForClientMeetings",-2026578040).cljs$core$IFn$_invoke$arity$1(room);
} else {
return and__30167__auto____$2;
}
}
})();
if(cljs.core.truth_(and__30167__auto____$2)){
var and__30167__auto____$3 = (function (){var or__30179__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"internal?","internal?",-383058705).cljs$core$IFn$_invoke$arity$1(filters));
if(or__30179__auto__){
return or__30179__auto__;
} else {
var and__30167__auto____$3 = new cljs.core.Keyword(null,"internal?","internal?",-383058705).cljs$core$IFn$_invoke$arity$1(filters);
if(cljs.core.truth_(and__30167__auto____$3)){
return new cljs.core.Keyword(null,"isSuitableForInternalMeetings","isSuitableForInternalMeetings",-36605632).cljs$core$IFn$_invoke$arity$1(room);
} else {
return and__30167__auto____$3;
}
}
})();
if(cljs.core.truth_(and__30167__auto____$3)){
var and__30167__auto____$4 = (function (){var or__30179__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"urgency?","urgency?",-697725455).cljs$core$IFn$_invoke$arity$1(filters));
if(or__30179__auto__){
return or__30179__auto__;
} else {
return rooms.domain.room.filter_urgency.call(null,room,now);
}
})();
if(cljs.core.truth_(and__30167__auto____$4)){
return (new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(room) >= new cljs.core.Keyword(null,"capacity","capacity",72689734).cljs$core$IFn$_invoke$arity$1(filters));
} else {
return and__30167__auto____$4;
}
} else {
return and__30167__auto____$3;
}
} else {
return and__30167__auto____$2;
}
} else {
return and__30167__auto____$1;
}
} else {
return and__30167__auto__;
}
})());
});})(map__43102,map__43102__$1,rooms__$1,now,filters,locations_config))
,rooms__$1);
});

//# sourceMappingURL=room.js.map?rel=1523976895919
