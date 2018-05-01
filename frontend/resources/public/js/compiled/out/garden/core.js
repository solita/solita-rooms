// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__10202__auto__ = [];
var len__10195__auto___16686 = arguments.length;
var i__10196__auto___16687 = (0);
while(true){
if((i__10196__auto___16687 < len__10195__auto___16686)){
args__10202__auto__.push((arguments[i__10196__auto___16687]));

var G__16688 = (i__10196__auto___16687 + (1));
i__10196__auto___16687 = G__16688;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq16685){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16685));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__10202__auto__ = [];
var len__10195__auto___16690 = arguments.length;
var i__10196__auto___16691 = (0);
while(true){
if((i__10196__auto___16691 < len__10195__auto___16690)){
args__10202__auto__.push((arguments[i__10196__auto___16691]));

var G__16692 = (i__10196__auto___16691 + (1));
i__10196__auto___16691 = G__16692;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style(maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq16689){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16689));
});

