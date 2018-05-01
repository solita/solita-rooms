// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.fmt');
goog.require('cljs.core');
goog.require('cljs_time.format');
goog.require('cljs_time.predicates');
goog.require('rooms.localisation');
rooms.fmt.finnish_date_formatter = cljs_time.format.formatter.call(null,"dd.MM.");
rooms.fmt.ISO_8601_formatter = cljs_time.format.formatter.call(null,"yyyy-MM-dd");
rooms.fmt.hh_mm_formatter = cljs_time.format.formatter.call(null,"HH:mm");
/**
 * Converts date object to ISO-8601 (yyyy-MM-DD).
 */
rooms.fmt.date__GT_iso_8601 = (function rooms$fmt$date__GT_iso_8601(date){
return cljs_time.format.unparse.call(null,rooms.fmt.ISO_8601_formatter,date);
});
/**
 * Converts date object to DD.MM.
 */
rooms.fmt.date__GT_fi_date = (function rooms$fmt$date__GT_fi_date(date){
return cljs_time.format.unparse.call(null,rooms.fmt.finnish_date_formatter,date);
});
/**
 * Converts ISO-8601 (yyyy-MM-DD) to date object.
 */
rooms.fmt.iso_8601__GT_date = (function rooms$fmt$iso_8601__GT_date(date){
return cljs_time.format.parse.call(null,rooms.fmt.ISO_8601_formatter,date);
});
rooms.fmt.hhmm__GT_date = (function rooms$fmt$hhmm__GT_date(time_string){
return cljs_time.format.parse_local.call(null,rooms.fmt.hh_mm_formatter,time_string);
});
rooms.fmt.fmt_weekday_name = (function rooms$fmt$fmt_weekday_name(date,language_id){
if(cljs.core.truth_(cljs_time.predicates.monday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-monday","day-monday",1622694791),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.tuesday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-tuesday","day-tuesday",1913680520),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.wednesday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-wednesday","day-wednesday",1749654516),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.thursday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-thursday","day-thursday",477157659),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.friday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-friday","day-friday",-144241214),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.saturday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-saturday","day-saturday",-135465020),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.sunday_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"day-sunday","day-sunday",-1045713117),language_id);
} else {
return null;
}
}
}
}
}
}
}
});
rooms.fmt.fmt_month_name = (function rooms$fmt$fmt_month_name(date,language_id){
if(cljs.core.truth_(cljs_time.predicates.january_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"january","january",-1839911577),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.february_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"february","february",-838070847),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.march_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"march","march",785932605),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.april_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"april","april",-1939299981),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.may_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"may","may",752466808),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.june_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"june","june",868430842),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.july_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"july","july",-1743457083),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.august_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"august","august",942113694),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.september_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"september","september",-8203016),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.october_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"october","october",-803196260),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.november_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"november","november",-1392894147),language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.december_QMARK_.call(null,date))){
return rooms.localisation.text.call(null,new cljs.core.Keyword(null,"december","december",952055411),language_id);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});

//# sourceMappingURL=fmt.js.map?rel=1523976895398
