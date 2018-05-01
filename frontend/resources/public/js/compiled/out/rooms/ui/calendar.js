// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.calendar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.language');
goog.require('rooms.fmt');
goog.require('rooms.date');
goog.require('rooms.styles.calendar');
goog.require('cljs_time.core');
goog.require('stylefy.core');
goog.require('rooms.state');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.utils');
rooms.ui.calendar.cell_day_fmt = (function rooms$ui$calendar$cell_day_fmt(day_number){
if((day_number <= (9))){
return ["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(day_number)].join('');
} else {
return day_number;
}
});
rooms.ui.calendar.day_cell = (function rooms$ui$calendar$day_cell(p__26056){
var map__26057 = p__26056;
var map__26057__$1 = ((((!((map__26057 == null)))?((((map__26057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26057.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26057):map__26057);
var current_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,cljs.core.cst$kw$current_DASH_date);
var selected_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,cljs.core.cst$kw$selected_DASH_date);
var selected_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,cljs.core.cst$kw$selected_DASH_month);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,cljs.core.cst$kw$date);
var date_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26057__$1,cljs.core.cst$kw$date_DASH_selected);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.calendar.cell,rooms.styles.calendar.cell_clickable,(cljs.core.truth_(rooms.date.same_date_QMARK_(current_date,date))?rooms.styles.calendar.cell_current_date:null),(cljs.core.truth_(rooms.date.same_date_QMARK_(selected_date,date))?rooms.styles.calendar.cell_selected_date:null),(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(selected_month),cljs_time.core.year(date))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(selected_month),cljs_time.core.month(date))))?rooms.styles.calendar.cell_greyed:null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (map__26057,map__26057__$1,current_date,selected_date,selected_month,date,date_selected){
return (function (){
return (date_selected.cljs$core$IFn$_invoke$arity$1 ? date_selected.cljs$core$IFn$_invoke$arity$1(date) : date_selected.call(null,date));
});})(map__26057,map__26057__$1,current_date,selected_date,selected_month,date,date_selected))
], null)),rooms.ui.calendar.cell_day_fmt(cljs_time.core.day(date))], null);
});
rooms.ui.calendar.week_row = (function rooms$ui$calendar$week_row(p__26059){
var map__26060 = p__26059;
var map__26060__$1 = ((((!((map__26060 == null)))?((((map__26060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26060):map__26060);
var current_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26060__$1,cljs.core.cst$kw$current_DASH_date);
var selected_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26060__$1,cljs.core.cst$kw$selected_DASH_date);
var selected_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26060__$1,cljs.core.cst$kw$selected_DASH_month);
var week_number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26060__$1,cljs.core.cst$kw$week_DASH_number);
var dates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26060__$1,cljs.core.cst$kw$dates);
var date_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26060__$1,cljs.core.cst$kw$date_DASH_selected);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.ui.calendar.cell_day_fmt(week_number)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (map__26060,map__26060__$1,current_date,selected_date,selected_month,week_number,dates,date_selected){
return (function (i__10276__auto__,item__10277__auto__){
if(cljs.core.contains_QMARK_(cljs.core.meta(item__10277__auto__),cljs.core.cst$kw$key)){
return item__10277__auto__;
} else {
return cljs.core.with_meta(item__10277__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["for*26062",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__10276__auto__)].join('')], null));
}
});})(map__26060,map__26060__$1,current_date,selected_date,selected_month,week_number,dates,date_selected))
,(function (){var iter__9798__auto__ = ((function (map__26060,map__26060__$1,current_date,selected_date,selected_month,week_number,dates,date_selected){
return (function rooms$ui$calendar$week_row_$_iter__26063(s__26064){
return (new cljs.core.LazySeq(null,((function (map__26060,map__26060__$1,current_date,selected_date,selected_month,week_number,dates,date_selected){
return (function (){
var s__26064__$1 = s__26064;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26064__$1);
if(temp__5457__auto__){
var s__26064__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26064__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__26064__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__26066 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__26065 = (0);
while(true){
if((i__26065 < size__9797__auto__)){
var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__26065);
cljs.core.chunk_append(b__26066,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.day_cell,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$current_DASH_date,current_date,cljs.core.cst$kw$selected_DASH_date,selected_date,cljs.core.cst$kw$selected_DASH_month,selected_month,cljs.core.cst$kw$date_DASH_selected,date_selected,cljs.core.cst$kw$date,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dates,index)], null)], null));

var G__26067 = (i__26065 + (1));
i__26065 = G__26067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26066),rooms$ui$calendar$week_row_$_iter__26063(cljs.core.chunk_rest(s__26064__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26066),null);
}
} else {
var index = cljs.core.first(s__26064__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.day_cell,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$current_DASH_date,current_date,cljs.core.cst$kw$selected_DASH_date,selected_date,cljs.core.cst$kw$selected_DASH_month,selected_month,cljs.core.cst$kw$date_DASH_selected,date_selected,cljs.core.cst$kw$date,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dates,index)], null)], null),rooms$ui$calendar$week_row_$_iter__26063(cljs.core.rest(s__26064__$2)));
}
} else {
return null;
}
break;
}
});})(map__26060,map__26060__$1,current_date,selected_date,selected_month,week_number,dates,date_selected))
,null,null));
});})(map__26060,map__26060__$1,current_date,selected_date,selected_month,week_number,dates,date_selected))
;
return iter__9798__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),(7)));
})()))], null);
});
rooms.ui.calendar.dates_vector = (function rooms$ui$calendar$dates_vector(p__26073){
var map__26074 = p__26073;
var map__26074__$1 = ((((!((map__26074 == null)))?((((map__26074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26074):map__26074);
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$year);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$month);
var current_month_days_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$current_DASH_month_DASH_days_DASH_range);
var previous_month_days_range = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$previous_DASH_month_DASH_days_DASH_range);
var day_of_first_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$day_DASH_of_DASH_first_DASH_week);
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$row_DASH_index);
var last_row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26074__$1,cljs.core.cst$kw$last_DASH_row_DASH_index);
var full_row_vector = ((function (map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((7),cljs.core.second(cljs.core.split_at(((((7) - day_of_first_week) + (1)) + ((row_index - (1)) * (7))),current_month_days_range)));
});})(map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
;
return cljs.core.vec(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?(function (){var previous_month_end = cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2((day_of_first_week - (1)),cljs.core.reverse(previous_month_days_range)));
var current_month_start = cljs.core.take.cljs$core$IFn$_invoke$arity$2(((7) - cljs.core.count(previous_month_end)),current_month_days_range);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (previous_month_end,current_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__26068_SHARP_){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,rooms.date.previous_month(month),p1__26068_SHARP_);
});})(previous_month_end,current_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,previous_month_end),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (previous_month_end,current_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__26069_SHARP_){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,month,p1__26069_SHARP_);
});})(previous_month_end,current_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,current_month_start));
})():((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,last_row_index))?(function (){var current_month_end = full_row_vector();
var next_month_days = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(29));
var next_month_start = cljs.core.take.cljs$core$IFn$_invoke$arity$2(((7) - cljs.core.count(current_month_end)),next_month_days);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_month_end,next_month_days,next_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__26070_SHARP_){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,month,p1__26070_SHARP_);
});})(current_month_end,next_month_days,next_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,current_month_end),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (current_month_end,next_month_days,next_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__26071_SHARP_){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,rooms.date.next_month(month),p1__26071_SHARP_);
});})(current_month_end,next_month_days,next_month_start,full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,next_month_start));
})():cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__26072_SHARP_){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,month,p1__26072_SHARP_);
});})(full_row_vector,map__26074,map__26074__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,full_row_vector())
)));
});
rooms.ui.calendar.weeks = (function rooms$ui$calendar$weeks(p__26076){
var map__26077 = p__26076;
var map__26077__$1 = ((((!((map__26077 == null)))?((((map__26077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26077):map__26077);
var selected_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077__$1,cljs.core.cst$kw$selected_DASH_date);
var date_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077__$1,cljs.core.cst$kw$date_DASH_selected);
var selected_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26077__$1,cljs.core.cst$kw$selected_DASH_month);
var current_date = cljs_time.core.time_now();
var month = cljs_time.core.month(selected_month);
var year = cljs_time.core.year(selected_month);
var first_day_of_month = cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,month,(1));
var last_day_of_month = cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(first_day_of_month);
var first_week_number = cljs_time.core.week_number_of_year(first_day_of_month);
var day_of_first_week = cljs_time.core.day_of_week(first_day_of_month);
var days_in_month = cljs_time.core.day(last_day_of_month);
var days_range = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(days_in_month + (1)));
var first_day_of_previous_month = cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(year,rooms.date.previous_month(month),(1));
var last_day_of_previous_month = cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(first_day_of_previous_month);
var days_in_previous_month = cljs_time.core.day(last_day_of_previous_month);
var previous_month_days_range = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(days_in_previous_month + (1)));
var number_of_rows_needed = ((function (){var G__26079 = (((day_of_first_week - (1)) + cljs.core.count(days_range)) / (7));
return Math.ceil(G__26079);
})() | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__26077,map__26077__$1,selected_date,date_selected,selected_month){
return (function (i__10276__auto__,item__10277__auto__){
if(cljs.core.contains_QMARK_(cljs.core.meta(item__10277__auto__),cljs.core.cst$kw$key)){
return item__10277__auto__;
} else {
return cljs.core.with_meta(item__10277__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["for*26080",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__10276__auto__)].join('')], null));
}
});})(current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__26077,map__26077__$1,selected_date,date_selected,selected_month))
,(function (){var iter__9798__auto__ = ((function (current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__26077,map__26077__$1,selected_date,date_selected,selected_month){
return (function rooms$ui$calendar$weeks_$_iter__26081(s__26082){
return (new cljs.core.LazySeq(null,((function (current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__26077,map__26077__$1,selected_date,date_selected,selected_month){
return (function (){
var s__26082__$1 = s__26082;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26082__$1);
if(temp__5457__auto__){
var s__26082__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26082__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__26082__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__26084 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__26083 = (0);
while(true){
if((i__26083 < size__9797__auto__)){
var index = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__26083);
cljs.core.chunk_append(b__26084,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.week_row,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$current_DASH_date,current_date,cljs.core.cst$kw$selected_DASH_date,selected_date,cljs.core.cst$kw$date_DASH_selected,date_selected,cljs.core.cst$kw$selected_DASH_month,selected_month,cljs.core.cst$kw$week_DASH_number,(first_week_number + index),cljs.core.cst$kw$dates,rooms.ui.calendar.dates_vector(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$year,year,cljs.core.cst$kw$month,month,cljs.core.cst$kw$current_DASH_month_DASH_days_DASH_range,days_range,cljs.core.cst$kw$previous_DASH_month_DASH_days_DASH_range,previous_month_days_range,cljs.core.cst$kw$day_DASH_of_DASH_first_DASH_week,day_of_first_week,cljs.core.cst$kw$row_DASH_index,index,cljs.core.cst$kw$last_DASH_row_DASH_index,(number_of_rows_needed - (1))], null))], null)], null));

var G__26085 = (i__26083 + (1));
i__26083 = G__26085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26084),rooms$ui$calendar$weeks_$_iter__26081(cljs.core.chunk_rest(s__26082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26084),null);
}
} else {
var index = cljs.core.first(s__26082__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.week_row,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$current_DASH_date,current_date,cljs.core.cst$kw$selected_DASH_date,selected_date,cljs.core.cst$kw$date_DASH_selected,date_selected,cljs.core.cst$kw$selected_DASH_month,selected_month,cljs.core.cst$kw$week_DASH_number,(first_week_number + index),cljs.core.cst$kw$dates,rooms.ui.calendar.dates_vector(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$year,year,cljs.core.cst$kw$month,month,cljs.core.cst$kw$current_DASH_month_DASH_days_DASH_range,days_range,cljs.core.cst$kw$previous_DASH_month_DASH_days_DASH_range,previous_month_days_range,cljs.core.cst$kw$day_DASH_of_DASH_first_DASH_week,day_of_first_week,cljs.core.cst$kw$row_DASH_index,index,cljs.core.cst$kw$last_DASH_row_DASH_index,(number_of_rows_needed - (1))], null))], null)], null),rooms$ui$calendar$weeks_$_iter__26081(cljs.core.rest(s__26082__$2)));
}
} else {
return null;
}
break;
}
});})(current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__26077,map__26077__$1,selected_date,date_selected,selected_month))
,null,null));
});})(current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__26077,map__26077__$1,selected_date,date_selected,selected_month))
;
return iter__9798__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),number_of_rows_needed));
})()))], null);
});
rooms.ui.calendar.calendar_header = (function rooms$ui$calendar$calendar_header(month,month_selected){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.calendar_header),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3(rooms.styles.calendar.calendar_header,cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__26086 = cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(month),(1)))?(cljs_time.core.year(month) - (1)):cljs_time.core.year(month)),rooms.date.previous_month(cljs_time.core.month(month)),cljs_time.core.day(month));
return (month_selected.cljs$core$IFn$_invoke$arity$1 ? month_selected.cljs$core$IFn$_invoke$arity$1(G__26086) : month_selected.call(null,G__26086));
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3(rooms.styles.calendar.calendar_header,cljs.core.cst$kw$triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-left-red.svg"].join('')], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.calendar.calendar_header,cljs.core.cst$kw$heading),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.fmt.fmt_month_name(month,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.state.current_language))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year(month))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3(rooms.styles.calendar.calendar_header,cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
var G__26087 = cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(month),(12)))?(cljs_time.core.year(month) + (1)):cljs_time.core.year(month)),rooms.date.next_month(cljs_time.core.month(month)),cljs_time.core.day(month));
return (month_selected.cljs$core$IFn$_invoke$arity$1 ? month_selected.cljs$core$IFn$_invoke$arity$1(G__26087) : month_selected.call(null,G__26087));
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_sub_style.cljs$core$IFn$_invoke$arity$3(rooms.styles.calendar.calendar_header,cljs.core.cst$kw$triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-right-red.svg"].join('')], null))], null)], null)], null);
});
rooms.ui.calendar.calendar = (function rooms$ui$calendar$calendar(e_BANG_,app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.calendar),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.calendar_header,cljs.core.cst$kw$calendar_DASH_month.cljs$core$IFn$_invoke$arity$1(app),(function (date){
var G__26088 = rooms.state.__GT_SelectCalendarMonth(date);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26088) : e_BANG_.call(null,G__26088));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$week_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_monday_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_tuesday_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_wednesday_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_thursday_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_friday_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_saturday_DASH_short)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.calendar.cell_bold),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$day_DASH_sunday_DASH_short)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.weeks,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$selected_DASH_date,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$date], null)),cljs.core.cst$kw$selected_DASH_month,cljs.core.cst$kw$calendar_DASH_month.cljs$core$IFn$_invoke$arity$1(app),cljs.core.cst$kw$date_DASH_selected,(function (selected_date){
var G__26089_26092 = rooms.state.__GT_SelectDate(selected_date);
(e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26089_26092) : e_BANG_.call(null,G__26089_26092));

var G__26090_26093 = rooms.state.__GT_ShowBookings(selected_date);
(e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26090_26093) : e_BANG_.call(null,G__26090_26093));

var G__26091 = rooms.state.__GT_FetchRooms(selected_date);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26091) : e_BANG_.call(null,G__26091));
})], null)], null)], null)], null)], null);
});
