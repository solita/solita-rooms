// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.date');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
rooms.date.same_date_QMARK_ = (function rooms$date$same_date_QMARK_(date1,date2){
if(cljs.core.not((function (){var and__8904__auto__ = date1;
if(cljs.core.truth_(and__8904__auto__)){
return date2;
} else {
return and__8904__auto__;
}
})())){
return false;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(date1),cljs_time.core.year(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date1),cljs_time.core.month(date2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day(date1),cljs_time.core.day(date2)));
}
});
rooms.date.same_date_time_QMARK_ = (function rooms$date$same_date_time_QMARK_(date_time1,date_time2){
if(cljs.core.not((function (){var and__8904__auto__ = date_time1;
if(cljs.core.truth_(and__8904__auto__)){
return date_time2;
} else {
return and__8904__auto__;
}
})())){
return false;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(date_time1),cljs_time.core.year(date_time2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.month(date_time1),cljs_time.core.month(date_time2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.day(date_time1),cljs_time.core.day(date_time2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.hour(date_time1),cljs_time.core.hour(date_time2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.minute(date_time1),cljs_time.core.minute(date_time2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs_time.core.second(date_time1),cljs_time.core.second(date_time2)));
}
});
rooms.date.next_month = (function rooms$date$next_month(month){
if((((1) <= month)) && ((month <= (12)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Month must be between 1 and 12, got: ",month], 0))),"\n","(and (<= 1 month 12))"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((12),month)){
return (1);
} else {
return (month + (1));
}
});
rooms.date.previous_month = (function rooms$date$previous_month(month){
if((((1) <= month)) && ((month <= (12)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Month must be between 1 and 12, got: ",month], 0))),"\n","(and (<= 1 month 12))"].join('')));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),month)){
return (12);
} else {
return (month - (1));
}
});
