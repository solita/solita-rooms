// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__31465__auto__ = [];
var len__31458__auto___61362 = arguments.length;
var i__31459__auto___61363 = (0);
while(true){
if((i__31459__auto___61363 < len__31458__auto___61362)){
args__31465__auto__.push((arguments[i__31459__auto___61363]));

var G__61364 = (i__31459__auto___61363 + (1));
i__31459__auto___61363 = G__61364;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq61361){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61361));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__31465__auto__ = [];
var len__31458__auto___61366 = arguments.length;
var i__31459__auto___61367 = (0);
while(true){
if((i__31459__auto___61367 < len__31458__auto___61366)){
args__31465__auto__.push((arguments[i__31459__auto___61367]));

var G__61368 = (i__31459__auto___61367 + (1));
i__31459__auto___61367 = G__61368;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq61365){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq61365));
});


//# sourceMappingURL=core.js.map?rel=1523638681242
