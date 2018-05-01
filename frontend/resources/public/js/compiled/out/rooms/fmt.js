// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.fmt');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.format');
goog.require('cljs_time.predicates');
goog.require('rooms.localisation');
rooms.fmt.finnish_date_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("dd.MM.");
rooms.fmt.ISO_8601_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
rooms.fmt.hh_mm_formatter = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm");
/**
 * Converts date object to ISO-8601 (yyyy-MM-DD).
 */
rooms.fmt.date__GT_iso_8601 = (function rooms$fmt$date__GT_iso_8601(date){
return cljs_time.format.unparse(rooms.fmt.ISO_8601_formatter,date);
});
/**
 * Converts date object to DD.MM.
 */
rooms.fmt.date__GT_fi_date = (function rooms$fmt$date__GT_fi_date(date){
return cljs_time.format.unparse(rooms.fmt.finnish_date_formatter,date);
});
/**
 * Converts ISO-8601 (yyyy-MM-DD) to date object.
 */
rooms.fmt.iso_8601__GT_date = (function rooms$fmt$iso_8601__GT_date(date){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(rooms.fmt.ISO_8601_formatter,date);
});
rooms.fmt.hhmm__GT_date = (function rooms$fmt$hhmm__GT_date(time_string){
return cljs_time.format.parse_local.cljs$core$IFn$_invoke$arity$2(rooms.fmt.hh_mm_formatter,time_string);
});
rooms.fmt.fmt_weekday_name = (function rooms$fmt$fmt_weekday_name(date,language_id){
if(cljs.core.truth_(cljs_time.predicates.monday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_monday,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.tuesday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_tuesday,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.wednesday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_wednesday,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.thursday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_thursday,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.friday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_friday,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.saturday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_saturday,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.sunday_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$day_DASH_sunday,language_id);
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
if(cljs.core.truth_(cljs_time.predicates.january_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$january,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.february_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$february,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.march_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$march,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.april_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$april,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.may_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$may,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.june_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$june,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.july_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$july,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.august_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$august,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.september_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$september,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.october_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$october,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.november_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$november,language_id);
} else {
if(cljs.core.truth_(cljs_time.predicates.december_QMARK_(date))){
return rooms.localisation.text(cljs.core.cst$kw$december,language_id);
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
