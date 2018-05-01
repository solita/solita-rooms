// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__16813__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16814__i = 0, G__16814__a = new Array(arguments.length -  0);
while (G__16814__i < G__16814__a.length) {G__16814__a[G__16814__i] = arguments[G__16814__i + 0]; ++G__16814__i;}
  args = new cljs.core.IndexedSeq(G__16814__a,0,null);
} 
return G__16813__delegate.call(this,args);};
G__16813.cljs$lang$maxFixedArity = 0;
G__16813.cljs$lang$applyTo = (function (arglist__16815){
var args = cljs.core.seq(arglist__16815);
return G__16813__delegate(args);
});
G__16813.cljs$core$IFn$_invoke$arity$variadic = G__16813__delegate;
return G__16813;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__16816__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16816 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16817__i = 0, G__16817__a = new Array(arguments.length -  0);
while (G__16817__i < G__16817__a.length) {G__16817__a[G__16817__i] = arguments[G__16817__i + 0]; ++G__16817__i;}
  args = new cljs.core.IndexedSeq(G__16817__a,0,null);
} 
return G__16816__delegate.call(this,args);};
G__16816.cljs$lang$maxFixedArity = 0;
G__16816.cljs$lang$applyTo = (function (arglist__16818){
var args = cljs.core.seq(arglist__16818);
return G__16816__delegate(args);
});
G__16816.cljs$core$IFn$_invoke$arity$variadic = G__16816__delegate;
return G__16816;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
