// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__9649__auto__ = (((obj == null))?null:obj);
var m__9650__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__9650__auto__.call(null,obj));
} else {
var m__9650__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__9650__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__18972 = millis;
if((G__18972 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__18972) : goog.date.UtcDateTime.fromTimestamp.call(null,G__18972));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__9798__auto__ = (function cljs_time$coerce$from_string_$_iter__18973(s__18974){
return (new cljs.core.LazySeq(null,(function (){
var s__18974__$1 = s__18974;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__18974__$1);
if(temp__5457__auto__){
var s__18974__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18974__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__18974__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__18976 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__18975 = (0);
while(true){
if((i__18975 < size__9797__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__18975);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18977){if((e18977 instanceof Error)){
var _ = e18977;
return null;
} else {
throw e18977;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__18976,d);

var G__18979 = (i__18975 + (1));
i__18975 = G__18979;
continue;
} else {
var G__18980 = (i__18975 + (1));
i__18975 = G__18980;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18976),cljs_time$coerce$from_string_$_iter__18973(cljs.core.chunk_rest(s__18974__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18976),null);
}
} else {
var f = cljs.core.first(s__18974__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e18978){if((e18978 instanceof Error)){
var _ = e18978;
return null;
} else {
throw e18978;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__18973(cljs.core.rest(s__18974__$2)));
} else {
var G__18981 = cljs.core.rest(s__18974__$2);
s__18974__$1 = G__18981;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9798__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__18982 = date;
var G__18982__$1 = (((G__18982 == null))?null:G__18982.getTime());
if((G__18982__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__18982__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__18983 = obj;
var G__18983__$1 = (((G__18983 == null))?null:cljs_time.coerce.to_date_time(G__18983));
if((G__18983__$1 == null)){
return null;
} else {
return G__18983__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var millis = cljs_time.coerce.to_long(obj);
var and__8904__auto__ = millis;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.quot(millis,(1000));
} else {
return and__8904__auto__;
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__18984 = obj;
var G__18984__$1 = (((G__18984 == null))?null:cljs_time.coerce.to_date_time(G__18984));
var G__18984__$2 = (((G__18984__$1 == null))?null:G__18984__$1.getTime());
if((G__18984__$2 == null)){
return null;
} else {
return (new Date(G__18984__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__18985 = obj;
var G__18985__$1 = (((G__18985 == null))?null:cljs_time.coerce.to_date_time(G__18985));
if((G__18985__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__18985__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.date.Date,cljs.core.type(obj))){
return obj;
} else {
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__5455__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__5455__auto__)){
var dt = temp__5455__auto__;
var G__18986 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__18986.setHours(dt.getHours());

G__18986.setMinutes(dt.getMinutes());

G__18986.setSeconds(dt.getSeconds());

G__18986.setMilliseconds(dt.getMilliseconds());

return G__18986;
} else {
return null;
}
} else {
return null;
}
});
goog.object.set(cljs_time.coerce.ICoerce,"null",true);

var G__18987_18996 = cljs_time.coerce.to_date_time;
var G__18988_18997 = "null";
var G__18989_18998 = ((function (G__18987_18996,G__18988_18997){
return (function (_){
return null;
});})(G__18987_18996,G__18988_18997))
;
goog.object.set(G__18987_18996,G__18988_18997,G__18989_18998);

Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = cljs.core.PROTOCOL_SENTINEL;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

goog.object.set(cljs_time.coerce.ICoerce,"number",true);

var G__18990_18999 = cljs_time.coerce.to_date_time;
var G__18991_19000 = "number";
var G__18992_19001 = ((function (G__18990_18999,G__18991_19000){
return (function (long$){
return cljs_time.coerce.from_long(long$);
});})(G__18990_18999,G__18991_19000))
;
goog.object.set(G__18990_18999,G__18991_19000,G__18992_19001);

goog.object.set(cljs_time.coerce.ICoerce,"string",true);

var G__18993_19002 = cljs_time.coerce.to_date_time;
var G__18994_19003 = "string";
var G__18995_19004 = ((function (G__18993_19002,G__18994_19003){
return (function (string){
return cljs_time.coerce.from_string(string);
});})(G__18993_19002,G__18994_19003))
;
goog.object.set(G__18993_19002,G__18994_19003,G__18995_19004);
