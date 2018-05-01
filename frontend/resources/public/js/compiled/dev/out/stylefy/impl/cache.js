// Compiled by ClojureScript 1.9.946 {}
goog.provide('stylefy.impl.cache');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
stylefy.impl.cache.cache_prefix = "stylefy_cache_";
stylefy.impl.cache.cache_key_styles = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylefy.impl.cache.cache_prefix),"styles"].join('');
stylefy.impl.cache.cache_key_created = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(stylefy.impl.cache.cache_prefix),"created"].join('');
stylefy.impl.cache.cache_styles_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.cache.now_in_seconds = (function stylefy$impl$cache$now_in_seconds(){
return Math.floor((Date.now() / (1000)));
});
/**
 * Reads the cache if caching is used.
 */
stylefy.impl.cache.read_cache_value = (function stylefy$impl$cache$read_cache_value(key){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.cache.cache_styles_QMARK_))){
var temp__5457__auto__ = window.localStorage.getItem(key);
if(cljs.core.truth_(temp__5457__auto__)){
var cache_contents = temp__5457__auto__;
return cljs.reader.read_string.call(null,cache_contents);
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.cache.cache_expired_QMARK_ = (function stylefy$impl$cache$cache_expired_QMARK_(cache_created,expiration_age,now){
if(cljs.core.truth_((function (){var and__30167__auto__ = cache_created;
if(cljs.core.truth_(and__30167__auto__)){
return expiration_age;
} else {
return and__30167__auto__;
}
})())){
return ((cache_created + expiration_age) < now);
} else {
return false;
}
});
stylefy.impl.cache.set_cache_created_time = (function stylefy$impl$cache$set_cache_created_time(time_created){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_created,time_created);
});
stylefy.impl.cache.clear_styles = (function stylefy$impl$cache$clear_styles(){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles,"");
});
stylefy.impl.cache.use_caching_BANG_ = (function stylefy$impl$cache$use_caching_BANG_(cache_options){
cljs.core.reset_BANG_.call(null,stylefy.impl.cache.cache_styles_QMARK_,true);

if(cljs.core.truth_(stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_created))){
} else {
console.info("Setting cache creation date.");

stylefy.impl.cache.set_cache_created_time.call(null,stylefy.impl.cache.now_in_seconds.call(null));
}

if(cljs.core.truth_(stylefy.impl.cache.cache_expired_QMARK_.call(null,stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_created),new cljs.core.Keyword(null,"expires","expires",1393008816).cljs$core$IFn$_invoke$arity$1(cache_options),stylefy.impl.cache.now_in_seconds.call(null)))){
stylefy.impl.cache.clear_styles.call(null);

console.info("stylefy cache expired. The cache has been cleared.");

return stylefy.impl.cache.set_cache_created_time.call(null,stylefy.impl.cache.now_in_seconds.call(null));
} else {
return null;
}
});
/**
 * Caches the given style if caching is used.
 *   Throws QUOTA_EXCEEDED_ERR if the storage is full.
 */
stylefy.impl.cache.cache_styles = (function stylefy$impl$cache$cache_styles(styles){
if(cljs.core.truth_((function (){var and__30167__auto__ = cljs.core.deref.call(null,stylefy.impl.cache.cache_styles_QMARK_);
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.map_QMARK_.call(null,styles);
} else {
return and__30167__auto__;
}
})())){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles,styles);
} else {
return null;
}
});

//# sourceMappingURL=cache.js.map?rel=1523638681276
