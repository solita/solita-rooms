// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.cache');
goog.require('cljs.core');
goog.require('cljs.core.constants');
rooms.cache.read_cache_value = (function rooms$cache$read_cache_value(key){
var temp__5457__auto__ = window.localStorage.getItem(key);
if(cljs.core.truth_(temp__5457__auto__)){
var cache_contents = temp__5457__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cache_contents);
} else {
return null;
}
});
rooms.cache.cache_value = (function rooms$cache$cache_value(key,value){
return window.localStorage.setItem(key,value);
});
