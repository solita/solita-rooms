// Compiled by ClojureScript 1.9.946 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__55636__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55636 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55637__i = 0, G__55637__a = new Array(arguments.length -  0);
while (G__55637__i < G__55637__a.length) {G__55637__a[G__55637__i] = arguments[G__55637__i + 0]; ++G__55637__i;}
  args = new cljs.core.IndexedSeq(G__55637__a,0,null);
} 
return G__55636__delegate.call(this,args);};
G__55636.cljs$lang$maxFixedArity = 0;
G__55636.cljs$lang$applyTo = (function (arglist__55638){
var args = cljs.core.seq(arglist__55638);
return G__55636__delegate(args);
});
G__55636.cljs$core$IFn$_invoke$arity$variadic = G__55636__delegate;
return G__55636;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__55639__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__55639 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__55640__i = 0, G__55640__a = new Array(arguments.length -  0);
while (G__55640__i < G__55640__a.length) {G__55640__a[G__55640__i] = arguments[G__55640__i + 0]; ++G__55640__i;}
  args = new cljs.core.IndexedSeq(G__55640__a,0,null);
} 
return G__55639__delegate.call(this,args);};
G__55639.cljs$lang$maxFixedArity = 0;
G__55639.cljs$lang$applyTo = (function (arglist__55641){
var args = cljs.core.seq(arglist__55641);
return G__55639__delegate(args);
});
G__55639.cljs$core$IFn$_invoke$arity$variadic = G__55639__delegate;
return G__55639;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1523638674664
