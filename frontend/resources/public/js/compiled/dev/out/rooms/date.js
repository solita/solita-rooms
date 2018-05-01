// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.date');
goog.require('cljs.core');
goog.require('cljs_time.core');
rooms.date.same_date_QMARK_ = (function rooms$date$same_date_QMARK_(date1,date2){
if(cljs.core.not.call(null,(function (){var and__30167__auto__ = date1;
if(cljs.core.truth_(and__30167__auto__)){
return date2;
} else {
return and__30167__auto__;
}
})())){
return false;
} else {
return (cljs.core._EQ_.call(null,cljs_time.core.year.call(null,date1),cljs_time.core.year.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.month.call(null,date1),cljs_time.core.month.call(null,date2))) && (cljs.core._EQ_.call(null,cljs_time.core.day.call(null,date1),cljs_time.core.day.call(null,date2)));
}
});
rooms.date.same_date_time_QMARK_ = (function rooms$date$same_date_time_QMARK_(date_time1,date_time2){
if(cljs.core.not.call(null,(function (){var and__30167__auto__ = date_time1;
if(cljs.core.truth_(and__30167__auto__)){
return date_time2;
} else {
return and__30167__auto__;
}
})())){
return false;
} else {
return (cljs.core._EQ_.call(null,cljs_time.core.year.call(null,date_time1),cljs_time.core.year.call(null,date_time2))) && (cljs.core._EQ_.call(null,cljs_time.core.month.call(null,date_time1),cljs_time.core.month.call(null,date_time2))) && (cljs.core._EQ_.call(null,cljs_time.core.day.call(null,date_time1),cljs_time.core.day.call(null,date_time2))) && (cljs.core._EQ_.call(null,cljs_time.core.hour.call(null,date_time1),cljs_time.core.hour.call(null,date_time2))) && (cljs.core._EQ_.call(null,cljs_time.core.minute.call(null,date_time1),cljs_time.core.minute.call(null,date_time2))) && (cljs.core._EQ_.call(null,cljs_time.core.second.call(null,date_time1),cljs_time.core.second.call(null,date_time2)));
}
});
rooms.date.next_month = (function rooms$date$next_month(month){
if((((1) <= month)) && ((month <= (12)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,"Month must be between 1 and 12, got: ",month)),"\n","(and (<= 1 month 12))"].join('')));
}

if(cljs.core._EQ_.call(null,(12),month)){
return (1);
} else {
return (month + (1));
}
});
rooms.date.previous_month = (function rooms$date$previous_month(month){
if((((1) <= month)) && ((month <= (12)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,"Month must be between 1 and 12, got: ",month)),"\n","(and (<= 1 month 12))"].join('')));
}

if(cljs.core._EQ_.call(null,(1),month)){
return (12);
} else {
return (month - (1));
}
});

//# sourceMappingURL=date.js.map?rel=1523973187194
