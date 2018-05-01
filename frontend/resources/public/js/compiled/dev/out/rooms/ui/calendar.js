// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.calendar');
goog.require('cljs.core');
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
rooms.ui.calendar.day_cell = (function rooms$ui$calendar$day_cell(p__52557){
var map__52558 = p__52557;
var map__52558__$1 = ((((!((map__52558 == null)))?((((map__52558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52558):map__52558);
var current_date = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"current-date","current-date",-1728476105));
var selected_date = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548));
var selected_month = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952));
var date = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var date_selected = cljs.core.get.call(null,map__52558__$1,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_style.call(null,cljs.core.merge.call(null,rooms.styles.calendar.cell,rooms.styles.calendar.cell_clickable,(cljs.core.truth_(rooms.date.same_date_QMARK_.call(null,current_date,date))?rooms.styles.calendar.cell_current_date:null),(cljs.core.truth_(rooms.date.same_date_QMARK_.call(null,selected_date,date))?rooms.styles.calendar.cell_selected_date:null),(((cljs.core.not_EQ_.call(null,cljs_time.core.year.call(null,selected_month),cljs_time.core.year.call(null,date))) || (cljs.core.not_EQ_.call(null,cljs_time.core.month.call(null,selected_month),cljs_time.core.month.call(null,date))))?rooms.styles.calendar.cell_greyed:null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__52558,map__52558__$1,current_date,selected_date,selected_month,date,date_selected){
return (function (){
return date_selected.call(null,date);
});})(map__52558,map__52558__$1,current_date,selected_date,selected_month,date,date_selected))
], null)),rooms.ui.calendar.cell_day_fmt.call(null,cljs_time.core.day.call(null,date))], null);
});
rooms.ui.calendar.week_row = (function rooms$ui$calendar$week_row(p__52560){
var map__52561 = p__52560;
var map__52561__$1 = ((((!((map__52561 == null)))?((((map__52561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52561):map__52561);
var current_date = cljs.core.get.call(null,map__52561__$1,new cljs.core.Keyword(null,"current-date","current-date",-1728476105));
var selected_date = cljs.core.get.call(null,map__52561__$1,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548));
var selected_month = cljs.core.get.call(null,map__52561__$1,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952));
var week_number = cljs.core.get.call(null,map__52561__$1,new cljs.core.Keyword(null,"week-number","week-number",-1796812346));
var dates = cljs.core.get.call(null,map__52561__$1,new cljs.core.Keyword(null,"dates","dates",-1600154075));
var date_selected = cljs.core.get.call(null,map__52561__$1,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.ui.calendar.cell_day_fmt.call(null,week_number)], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (map__52561,map__52561__$1,current_date,selected_date,selected_month,week_number,dates,date_selected){
return (function (i__36354__auto__,item__36355__auto__){
if(cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,item__36355__auto__),new cljs.core.Keyword(null,"key","key",-1516042587))){
return item__36355__auto__;
} else {
return cljs.core.with_meta.call(null,item__36355__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["for*52563",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__36354__auto__)].join('')], null));
}
});})(map__52561,map__52561__$1,current_date,selected_date,selected_month,week_number,dates,date_selected))
,(function (){var iter__31061__auto__ = ((function (map__52561,map__52561__$1,current_date,selected_date,selected_month,week_number,dates,date_selected){
return (function rooms$ui$calendar$week_row_$_iter__52564(s__52565){
return (new cljs.core.LazySeq(null,((function (map__52561,map__52561__$1,current_date,selected_date,selected_month,week_number,dates,date_selected){
return (function (){
var s__52565__$1 = s__52565;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52565__$1);
if(temp__5457__auto__){
var s__52565__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52565__$2)){
var c__31059__auto__ = cljs.core.chunk_first.call(null,s__52565__$2);
var size__31060__auto__ = cljs.core.count.call(null,c__31059__auto__);
var b__52567 = cljs.core.chunk_buffer.call(null,size__31060__auto__);
if((function (){var i__52566 = (0);
while(true){
if((i__52566 < size__31060__auto__)){
var index = cljs.core._nth.call(null,c__31059__auto__,i__52566);
cljs.core.chunk_append.call(null,b__52567,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.day_cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_date,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),selected_date,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952),selected_month,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025),date_selected,new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.get.call(null,dates,index)], null)], null));

var G__52568 = (i__52566 + (1));
i__52566 = G__52568;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52567),rooms$ui$calendar$week_row_$_iter__52564.call(null,cljs.core.chunk_rest.call(null,s__52565__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52567),null);
}
} else {
var index = cljs.core.first.call(null,s__52565__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.day_cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_date,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),selected_date,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952),selected_month,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025),date_selected,new cljs.core.Keyword(null,"date","date",-1463434462),cljs.core.get.call(null,dates,index)], null)], null),rooms$ui$calendar$week_row_$_iter__52564.call(null,cljs.core.rest.call(null,s__52565__$2)));
}
} else {
return null;
}
break;
}
});})(map__52561,map__52561__$1,current_date,selected_date,selected_month,week_number,dates,date_selected))
,null,null));
});})(map__52561,map__52561__$1,current_date,selected_date,selected_month,week_number,dates,date_selected))
;
return iter__31061__auto__.call(null,cljs.core.range.call(null,(0),(7)));
})()))], null);
});
rooms.ui.calendar.dates_vector = (function rooms$ui$calendar$dates_vector(p__52574){
var map__52575 = p__52574;
var map__52575__$1 = ((((!((map__52575 == null)))?((((map__52575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52575):map__52575);
var year = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"year","year",335913393));
var month = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var current_month_days_range = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"current-month-days-range","current-month-days-range",-1242421296));
var previous_month_days_range = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"previous-month-days-range","previous-month-days-range",-415193305));
var day_of_first_week = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"day-of-first-week","day-of-first-week",1379440027));
var row_index = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var last_row_index = cljs.core.get.call(null,map__52575__$1,new cljs.core.Keyword(null,"last-row-index","last-row-index",531921486));
var full_row_vector = ((function (map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (){
return cljs.core.take.call(null,(7),cljs.core.second.call(null,cljs.core.split_at.call(null,((((7) - day_of_first_week) + (1)) + ((row_index - (1)) * (7))),current_month_days_range)));
});})(map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
;
return cljs.core.vec.call(null,((cljs.core._EQ_.call(null,row_index,(0)))?(function (){var previous_month_end = cljs.core.reverse.call(null,cljs.core.take.call(null,(day_of_first_week - (1)),cljs.core.reverse.call(null,previous_month_days_range)));
var current_month_start = cljs.core.take.call(null,((7) - cljs.core.count.call(null,previous_month_end)),current_month_days_range);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (previous_month_end,current_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__52569_SHARP_){
return cljs_time.core.local_date_time.call(null,year,rooms.date.previous_month.call(null,month),p1__52569_SHARP_);
});})(previous_month_end,current_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,previous_month_end),cljs.core.map.call(null,((function (previous_month_end,current_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__52570_SHARP_){
return cljs_time.core.local_date_time.call(null,year,month,p1__52570_SHARP_);
});})(previous_month_end,current_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,current_month_start));
})():((cljs.core._EQ_.call(null,row_index,last_row_index))?(function (){var current_month_end = full_row_vector.call(null);
var next_month_days = cljs.core.range.call(null,(1),(29));
var next_month_start = cljs.core.take.call(null,((7) - cljs.core.count.call(null,current_month_end)),next_month_days);
return cljs.core.concat.call(null,cljs.core.map.call(null,((function (current_month_end,next_month_days,next_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__52571_SHARP_){
return cljs_time.core.local_date_time.call(null,year,month,p1__52571_SHARP_);
});})(current_month_end,next_month_days,next_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,current_month_end),cljs.core.map.call(null,((function (current_month_end,next_month_days,next_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__52572_SHARP_){
return cljs_time.core.local_date_time.call(null,year,rooms.date.next_month.call(null,month),p1__52572_SHARP_);
});})(current_month_end,next_month_days,next_month_start,full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,next_month_start));
})():cljs.core.map.call(null,((function (full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index){
return (function (p1__52573_SHARP_){
return cljs_time.core.local_date_time.call(null,year,month,p1__52573_SHARP_);
});})(full_row_vector,map__52575,map__52575__$1,year,month,current_month_days_range,previous_month_days_range,day_of_first_week,row_index,last_row_index))
,full_row_vector.call(null))
)));
});
rooms.ui.calendar.weeks = (function rooms$ui$calendar$weeks(p__52577){
var map__52578 = p__52577;
var map__52578__$1 = ((((!((map__52578 == null)))?((((map__52578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52578):map__52578);
var selected_date = cljs.core.get.call(null,map__52578__$1,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548));
var date_selected = cljs.core.get.call(null,map__52578__$1,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025));
var selected_month = cljs.core.get.call(null,map__52578__$1,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952));
var current_date = cljs_time.core.time_now.call(null);
var month = cljs_time.core.month.call(null,selected_month);
var year = cljs_time.core.year.call(null,selected_month);
var first_day_of_month = cljs_time.core.local_date_time.call(null,year,month,(1));
var last_day_of_month = cljs_time.core.last_day_of_the_month.call(null,first_day_of_month);
var first_week_number = cljs_time.core.week_number_of_year.call(null,first_day_of_month);
var day_of_first_week = cljs_time.core.day_of_week.call(null,first_day_of_month);
var days_in_month = cljs_time.core.day.call(null,last_day_of_month);
var days_range = cljs.core.range.call(null,(1),(days_in_month + (1)));
var first_day_of_previous_month = cljs_time.core.local_date_time.call(null,year,rooms.date.previous_month.call(null,month),(1));
var last_day_of_previous_month = cljs_time.core.last_day_of_the_month.call(null,first_day_of_previous_month);
var days_in_previous_month = cljs_time.core.day.call(null,last_day_of_previous_month);
var previous_month_days_range = cljs.core.range.call(null,(1),(days_in_previous_month + (1)));
var number_of_rows_needed = (Math.ceil((((day_of_first_week - (1)) + cljs.core.count.call(null,days_range)) / (7))) | (0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__52578,map__52578__$1,selected_date,date_selected,selected_month){
return (function (i__36354__auto__,item__36355__auto__){
if(cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,item__36355__auto__),new cljs.core.Keyword(null,"key","key",-1516042587))){
return item__36355__auto__;
} else {
return cljs.core.with_meta.call(null,item__36355__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["for*52580",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__36354__auto__)].join('')], null));
}
});})(current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__52578,map__52578__$1,selected_date,date_selected,selected_month))
,(function (){var iter__31061__auto__ = ((function (current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__52578,map__52578__$1,selected_date,date_selected,selected_month){
return (function rooms$ui$calendar$weeks_$_iter__52581(s__52582){
return (new cljs.core.LazySeq(null,((function (current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__52578,map__52578__$1,selected_date,date_selected,selected_month){
return (function (){
var s__52582__$1 = s__52582;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52582__$1);
if(temp__5457__auto__){
var s__52582__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52582__$2)){
var c__31059__auto__ = cljs.core.chunk_first.call(null,s__52582__$2);
var size__31060__auto__ = cljs.core.count.call(null,c__31059__auto__);
var b__52584 = cljs.core.chunk_buffer.call(null,size__31060__auto__);
if((function (){var i__52583 = (0);
while(true){
if((i__52583 < size__31060__auto__)){
var index = cljs.core._nth.call(null,c__31059__auto__,i__52583);
cljs.core.chunk_append.call(null,b__52584,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.week_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_date,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),selected_date,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025),date_selected,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952),selected_month,new cljs.core.Keyword(null,"week-number","week-number",-1796812346),(first_week_number + index),new cljs.core.Keyword(null,"dates","dates",-1600154075),rooms.ui.calendar.dates_vector.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"current-month-days-range","current-month-days-range",-1242421296),days_range,new cljs.core.Keyword(null,"previous-month-days-range","previous-month-days-range",-415193305),previous_month_days_range,new cljs.core.Keyword(null,"day-of-first-week","day-of-first-week",1379440027),day_of_first_week,new cljs.core.Keyword(null,"row-index","row-index",-828710296),index,new cljs.core.Keyword(null,"last-row-index","last-row-index",531921486),(number_of_rows_needed - (1))], null))], null)], null));

var G__52585 = (i__52583 + (1));
i__52583 = G__52585;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52584),rooms$ui$calendar$weeks_$_iter__52581.call(null,cljs.core.chunk_rest.call(null,s__52582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52584),null);
}
} else {
var index = cljs.core.first.call(null,s__52582__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.week_row,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"current-date","current-date",-1728476105),current_date,new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),selected_date,new cljs.core.Keyword(null,"date-selected","date-selected",1054208025),date_selected,new cljs.core.Keyword(null,"selected-month","selected-month",1168157952),selected_month,new cljs.core.Keyword(null,"week-number","week-number",-1796812346),(first_week_number + index),new cljs.core.Keyword(null,"dates","dates",-1600154075),rooms.ui.calendar.dates_vector.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"current-month-days-range","current-month-days-range",-1242421296),days_range,new cljs.core.Keyword(null,"previous-month-days-range","previous-month-days-range",-415193305),previous_month_days_range,new cljs.core.Keyword(null,"day-of-first-week","day-of-first-week",1379440027),day_of_first_week,new cljs.core.Keyword(null,"row-index","row-index",-828710296),index,new cljs.core.Keyword(null,"last-row-index","last-row-index",531921486),(number_of_rows_needed - (1))], null))], null)], null),rooms$ui$calendar$weeks_$_iter__52581.call(null,cljs.core.rest.call(null,s__52582__$2)));
}
} else {
return null;
}
break;
}
});})(current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__52578,map__52578__$1,selected_date,date_selected,selected_month))
,null,null));
});})(current_date,month,year,first_day_of_month,last_day_of_month,first_week_number,day_of_first_week,days_in_month,days_range,first_day_of_previous_month,last_day_of_previous_month,days_in_previous_month,previous_month_days_range,number_of_rows_needed,map__52578,map__52578__$1,selected_date,date_selected,selected_month))
;
return iter__31061__auto__.call(null,cljs.core.range.call(null,(0),number_of_rows_needed));
})()))], null);
});
rooms.ui.calendar.calendar_header = (function rooms$ui$calendar$calendar_header(month,month_selected){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),stylefy.core.use_style.call(null,rooms.styles.calendar.calendar_header),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.call(null,rooms.styles.calendar.calendar_header,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return month_selected.call(null,cljs_time.core.local_date_time.call(null,((cljs.core._EQ_.call(null,cljs_time.core.month.call(null,month),(1)))?(cljs_time.core.year.call(null,month) - (1)):cljs_time.core.year.call(null,month)),rooms.date.previous_month.call(null,cljs_time.core.month.call(null,month)),cljs_time.core.day.call(null,month)));
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_sub_style.call(null,rooms.styles.calendar.calendar_header,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-left-red.svg"].join('')], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.call(null,rooms.styles.calendar.calendar_header,new cljs.core.Keyword(null,"heading","heading",-1312171873)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.fmt.fmt_month_name.call(null,month,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.state.current_language))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year.call(null,month))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_sub_style.call(null,rooms.styles.calendar.calendar_header,new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return month_selected.call(null,cljs_time.core.local_date_time.call(null,((cljs.core._EQ_.call(null,cljs_time.core.month.call(null,month),(12)))?(cljs_time.core.year.call(null,month) + (1)):cljs_time.core.year.call(null,month)),rooms.date.next_month.call(null,cljs_time.core.month.call(null,month)),cljs_time.core.day.call(null,month)));
})], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_sub_style.call(null,rooms.styles.calendar.calendar_header,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-right-red.svg"].join('')], null))], null)], null)], null);
});
rooms.ui.calendar.calendar = (function rooms$ui$calendar$calendar(e_BANG_,app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.calendar.calendar),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.calendar_header,new cljs.core.Keyword(null,"calendar-month","calendar-month",1157136365).cljs$core$IFn$_invoke$arity$1(app),(function (date){
return e_BANG_.call(null,rooms.state.__GT_SelectCalendarMonth.call(null,date));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"week-short","week-short",-620634707))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-monday-short","day-monday-short",-476062073))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-tuesday-short","day-tuesday-short",-109725409))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-wednesday-short","day-wednesday-short",-1538868808))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-thursday-short","day-thursday-short",92228663))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-friday-short","day-friday-short",1866840726))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-saturday-short","day-saturday-short",-701850462))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),stylefy.core.use_style.call(null,rooms.styles.calendar.cell_bold),rooms.language.text.call(null,new cljs.core.Keyword(null,"day-sunday-short","day-sunday-short",1788839857))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.weeks,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected-date","selected-date",-1397749548),cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)], null)),new cljs.core.Keyword(null,"selected-month","selected-month",1168157952),new cljs.core.Keyword(null,"calendar-month","calendar-month",1157136365).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"date-selected","date-selected",1054208025),(function (selected_date){
e_BANG_.call(null,rooms.state.__GT_SelectDate.call(null,selected_date));

e_BANG_.call(null,rooms.state.__GT_ShowBookings.call(null,selected_date));

return e_BANG_.call(null,rooms.state.__GT_FetchRooms.call(null,selected_date));
})], null)], null)], null)], null)], null);
});

//# sourceMappingURL=calendar.js.map?rel=1525170771551
