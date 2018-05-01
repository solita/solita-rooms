// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58345 = arguments.length;
var i__31459__auto___58346 = (0);
while(true){
if((i__31459__auto___58346 < len__31458__auto___58345)){
args__31465__auto__.push((arguments[i__31459__auto___58346]));

var G__58347 = (i__31459__auto___58346 + (1));
i__31459__auto___58346 = G__58347;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq58344){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58344));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58349 = arguments.length;
var i__31459__auto___58350 = (0);
while(true){
if((i__31459__auto___58350 < len__31458__auto___58349)){
args__31465__auto__.push((arguments[i__31459__auto___58350]));

var G__58351 = (i__31459__auto___58350 + (1));
i__31459__auto___58350 = G__58351;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq58348){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58348));
});

var g_QMARK__58352 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_58353 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__58352){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__58352))
,null));
var mkg_58354 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__58352,g_58353){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__58352,g_58353))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__58352,g_58353,mkg_58354){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__58352).call(null,x);
});})(g_QMARK__58352,g_58353,mkg_58354))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__58352,g_58353,mkg_58354){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_58354).call(null,gfn);
});})(g_QMARK__58352,g_58353,mkg_58354))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__58352,g_58353,mkg_58354){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_58353).call(null,generator);
});})(g_QMARK__58352,g_58353,mkg_58354))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__33108__auto___58374 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__33108__auto___58374){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58375 = arguments.length;
var i__31459__auto___58376 = (0);
while(true){
if((i__31459__auto___58376 < len__31458__auto___58375)){
args__31465__auto__.push((arguments[i__31459__auto___58376]));

var G__58377 = (i__31459__auto___58376 + (1));
i__31459__auto___58376 = G__58377;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58374))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58374){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58374),args);
});})(g__33108__auto___58374))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__33108__auto___58374){
return (function (seq58355){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58355));
});})(g__33108__auto___58374))
;


var g__33108__auto___58378 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__33108__auto___58378){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58379 = arguments.length;
var i__31459__auto___58380 = (0);
while(true){
if((i__31459__auto___58380 < len__31458__auto___58379)){
args__31465__auto__.push((arguments[i__31459__auto___58380]));

var G__58381 = (i__31459__auto___58380 + (1));
i__31459__auto___58380 = G__58381;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58378))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58378){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58378),args);
});})(g__33108__auto___58378))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__33108__auto___58378){
return (function (seq58356){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58356));
});})(g__33108__auto___58378))
;


var g__33108__auto___58382 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__33108__auto___58382){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58383 = arguments.length;
var i__31459__auto___58384 = (0);
while(true){
if((i__31459__auto___58384 < len__31458__auto___58383)){
args__31465__auto__.push((arguments[i__31459__auto___58384]));

var G__58385 = (i__31459__auto___58384 + (1));
i__31459__auto___58384 = G__58385;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58382))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58382){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58382),args);
});})(g__33108__auto___58382))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__33108__auto___58382){
return (function (seq58357){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58357));
});})(g__33108__auto___58382))
;


var g__33108__auto___58386 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__33108__auto___58386){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58387 = arguments.length;
var i__31459__auto___58388 = (0);
while(true){
if((i__31459__auto___58388 < len__31458__auto___58387)){
args__31465__auto__.push((arguments[i__31459__auto___58388]));

var G__58389 = (i__31459__auto___58388 + (1));
i__31459__auto___58388 = G__58389;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58386))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58386){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58386),args);
});})(g__33108__auto___58386))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__33108__auto___58386){
return (function (seq58358){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58358));
});})(g__33108__auto___58386))
;


var g__33108__auto___58390 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__33108__auto___58390){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58391 = arguments.length;
var i__31459__auto___58392 = (0);
while(true){
if((i__31459__auto___58392 < len__31458__auto___58391)){
args__31465__auto__.push((arguments[i__31459__auto___58392]));

var G__58393 = (i__31459__auto___58392 + (1));
i__31459__auto___58392 = G__58393;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58390))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58390){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58390),args);
});})(g__33108__auto___58390))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__33108__auto___58390){
return (function (seq58359){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58359));
});})(g__33108__auto___58390))
;


var g__33108__auto___58394 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__33108__auto___58394){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58395 = arguments.length;
var i__31459__auto___58396 = (0);
while(true){
if((i__31459__auto___58396 < len__31458__auto___58395)){
args__31465__auto__.push((arguments[i__31459__auto___58396]));

var G__58397 = (i__31459__auto___58396 + (1));
i__31459__auto___58396 = G__58397;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58394))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58394){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58394),args);
});})(g__33108__auto___58394))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__33108__auto___58394){
return (function (seq58360){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58360));
});})(g__33108__auto___58394))
;


var g__33108__auto___58398 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__33108__auto___58398){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58399 = arguments.length;
var i__31459__auto___58400 = (0);
while(true){
if((i__31459__auto___58400 < len__31458__auto___58399)){
args__31465__auto__.push((arguments[i__31459__auto___58400]));

var G__58401 = (i__31459__auto___58400 + (1));
i__31459__auto___58400 = G__58401;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58398))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58398){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58398),args);
});})(g__33108__auto___58398))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__33108__auto___58398){
return (function (seq58361){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58361));
});})(g__33108__auto___58398))
;


var g__33108__auto___58402 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__33108__auto___58402){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58403 = arguments.length;
var i__31459__auto___58404 = (0);
while(true){
if((i__31459__auto___58404 < len__31458__auto___58403)){
args__31465__auto__.push((arguments[i__31459__auto___58404]));

var G__58405 = (i__31459__auto___58404 + (1));
i__31459__auto___58404 = G__58405;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58402))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58402){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58402),args);
});})(g__33108__auto___58402))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__33108__auto___58402){
return (function (seq58362){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58362));
});})(g__33108__auto___58402))
;


var g__33108__auto___58406 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__33108__auto___58406){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58407 = arguments.length;
var i__31459__auto___58408 = (0);
while(true){
if((i__31459__auto___58408 < len__31458__auto___58407)){
args__31465__auto__.push((arguments[i__31459__auto___58408]));

var G__58409 = (i__31459__auto___58408 + (1));
i__31459__auto___58408 = G__58409;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58406))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58406){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58406),args);
});})(g__33108__auto___58406))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__33108__auto___58406){
return (function (seq58363){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58363));
});})(g__33108__auto___58406))
;


var g__33108__auto___58410 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__33108__auto___58410){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58411 = arguments.length;
var i__31459__auto___58412 = (0);
while(true){
if((i__31459__auto___58412 < len__31458__auto___58411)){
args__31465__auto__.push((arguments[i__31459__auto___58412]));

var G__58413 = (i__31459__auto___58412 + (1));
i__31459__auto___58412 = G__58413;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58410))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58410){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58410),args);
});})(g__33108__auto___58410))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__33108__auto___58410){
return (function (seq58364){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58364));
});})(g__33108__auto___58410))
;


var g__33108__auto___58414 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__33108__auto___58414){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58415 = arguments.length;
var i__31459__auto___58416 = (0);
while(true){
if((i__31459__auto___58416 < len__31458__auto___58415)){
args__31465__auto__.push((arguments[i__31459__auto___58416]));

var G__58417 = (i__31459__auto___58416 + (1));
i__31459__auto___58416 = G__58417;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58414))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58414){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58414),args);
});})(g__33108__auto___58414))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__33108__auto___58414){
return (function (seq58365){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58365));
});})(g__33108__auto___58414))
;


var g__33108__auto___58418 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__33108__auto___58418){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58419 = arguments.length;
var i__31459__auto___58420 = (0);
while(true){
if((i__31459__auto___58420 < len__31458__auto___58419)){
args__31465__auto__.push((arguments[i__31459__auto___58420]));

var G__58421 = (i__31459__auto___58420 + (1));
i__31459__auto___58420 = G__58421;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58418))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58418){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58418),args);
});})(g__33108__auto___58418))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__33108__auto___58418){
return (function (seq58366){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58366));
});})(g__33108__auto___58418))
;


var g__33108__auto___58422 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__33108__auto___58422){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58423 = arguments.length;
var i__31459__auto___58424 = (0);
while(true){
if((i__31459__auto___58424 < len__31458__auto___58423)){
args__31465__auto__.push((arguments[i__31459__auto___58424]));

var G__58425 = (i__31459__auto___58424 + (1));
i__31459__auto___58424 = G__58425;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58422))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58422){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58422),args);
});})(g__33108__auto___58422))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__33108__auto___58422){
return (function (seq58367){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58367));
});})(g__33108__auto___58422))
;


var g__33108__auto___58426 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__33108__auto___58426){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58427 = arguments.length;
var i__31459__auto___58428 = (0);
while(true){
if((i__31459__auto___58428 < len__31458__auto___58427)){
args__31465__auto__.push((arguments[i__31459__auto___58428]));

var G__58429 = (i__31459__auto___58428 + (1));
i__31459__auto___58428 = G__58429;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58426))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58426){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58426),args);
});})(g__33108__auto___58426))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__33108__auto___58426){
return (function (seq58368){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58368));
});})(g__33108__auto___58426))
;


var g__33108__auto___58430 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__33108__auto___58430){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58431 = arguments.length;
var i__31459__auto___58432 = (0);
while(true){
if((i__31459__auto___58432 < len__31458__auto___58431)){
args__31465__auto__.push((arguments[i__31459__auto___58432]));

var G__58433 = (i__31459__auto___58432 + (1));
i__31459__auto___58432 = G__58433;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58430))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58430){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58430),args);
});})(g__33108__auto___58430))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__33108__auto___58430){
return (function (seq58369){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58369));
});})(g__33108__auto___58430))
;


var g__33108__auto___58434 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__33108__auto___58434){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58435 = arguments.length;
var i__31459__auto___58436 = (0);
while(true){
if((i__31459__auto___58436 < len__31458__auto___58435)){
args__31465__auto__.push((arguments[i__31459__auto___58436]));

var G__58437 = (i__31459__auto___58436 + (1));
i__31459__auto___58436 = G__58437;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58434))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58434){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58434),args);
});})(g__33108__auto___58434))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__33108__auto___58434){
return (function (seq58370){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58370));
});})(g__33108__auto___58434))
;


var g__33108__auto___58438 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__33108__auto___58438){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58439 = arguments.length;
var i__31459__auto___58440 = (0);
while(true){
if((i__31459__auto___58440 < len__31458__auto___58439)){
args__31465__auto__.push((arguments[i__31459__auto___58440]));

var G__58441 = (i__31459__auto___58440 + (1));
i__31459__auto___58440 = G__58441;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58438))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58438){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58438),args);
});})(g__33108__auto___58438))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__33108__auto___58438){
return (function (seq58371){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58371));
});})(g__33108__auto___58438))
;


var g__33108__auto___58442 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__33108__auto___58442){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58443 = arguments.length;
var i__31459__auto___58444 = (0);
while(true){
if((i__31459__auto___58444 < len__31458__auto___58443)){
args__31465__auto__.push((arguments[i__31459__auto___58444]));

var G__58445 = (i__31459__auto___58444 + (1));
i__31459__auto___58444 = G__58445;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58442))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58442){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58442),args);
});})(g__33108__auto___58442))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__33108__auto___58442){
return (function (seq58372){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58372));
});})(g__33108__auto___58442))
;


var g__33108__auto___58446 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__33108__auto___58446){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58447 = arguments.length;
var i__31459__auto___58448 = (0);
while(true){
if((i__31459__auto___58448 < len__31458__auto___58447)){
args__31465__auto__.push((arguments[i__31459__auto___58448]));

var G__58449 = (i__31459__auto___58448 + (1));
i__31459__auto___58448 = G__58449;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33108__auto___58446))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33108__auto___58446){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__33108__auto___58446),args);
});})(g__33108__auto___58446))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__33108__auto___58446){
return (function (seq58373){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58373));
});})(g__33108__auto___58446))
;

var g__33121__auto___58471 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__33121__auto___58471){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58472 = arguments.length;
var i__31459__auto___58473 = (0);
while(true){
if((i__31459__auto___58473 < len__31458__auto___58472)){
args__31465__auto__.push((arguments[i__31459__auto___58473]));

var G__58474 = (i__31459__auto___58473 + (1));
i__31459__auto___58473 = G__58474;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58471))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58471){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58471);
});})(g__33121__auto___58471))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__33121__auto___58471){
return (function (seq58450){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58450));
});})(g__33121__auto___58471))
;


var g__33121__auto___58475 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__33121__auto___58475){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58476 = arguments.length;
var i__31459__auto___58477 = (0);
while(true){
if((i__31459__auto___58477 < len__31458__auto___58476)){
args__31465__auto__.push((arguments[i__31459__auto___58477]));

var G__58478 = (i__31459__auto___58477 + (1));
i__31459__auto___58477 = G__58478;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58475))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58475){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58475);
});})(g__33121__auto___58475))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__33121__auto___58475){
return (function (seq58451){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58451));
});})(g__33121__auto___58475))
;


var g__33121__auto___58479 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__33121__auto___58479){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58480 = arguments.length;
var i__31459__auto___58481 = (0);
while(true){
if((i__31459__auto___58481 < len__31458__auto___58480)){
args__31465__auto__.push((arguments[i__31459__auto___58481]));

var G__58482 = (i__31459__auto___58481 + (1));
i__31459__auto___58481 = G__58482;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58479))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58479){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58479);
});})(g__33121__auto___58479))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__33121__auto___58479){
return (function (seq58452){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58452));
});})(g__33121__auto___58479))
;


var g__33121__auto___58483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__33121__auto___58483){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58484 = arguments.length;
var i__31459__auto___58485 = (0);
while(true){
if((i__31459__auto___58485 < len__31458__auto___58484)){
args__31465__auto__.push((arguments[i__31459__auto___58485]));

var G__58486 = (i__31459__auto___58485 + (1));
i__31459__auto___58485 = G__58486;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58483))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58483){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58483);
});})(g__33121__auto___58483))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__33121__auto___58483){
return (function (seq58453){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58453));
});})(g__33121__auto___58483))
;


var g__33121__auto___58487 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__33121__auto___58487){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58488 = arguments.length;
var i__31459__auto___58489 = (0);
while(true){
if((i__31459__auto___58489 < len__31458__auto___58488)){
args__31465__auto__.push((arguments[i__31459__auto___58489]));

var G__58490 = (i__31459__auto___58489 + (1));
i__31459__auto___58489 = G__58490;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58487))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58487){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58487);
});})(g__33121__auto___58487))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__33121__auto___58487){
return (function (seq58454){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58454));
});})(g__33121__auto___58487))
;


var g__33121__auto___58491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__33121__auto___58491){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58492 = arguments.length;
var i__31459__auto___58493 = (0);
while(true){
if((i__31459__auto___58493 < len__31458__auto___58492)){
args__31465__auto__.push((arguments[i__31459__auto___58493]));

var G__58494 = (i__31459__auto___58493 + (1));
i__31459__auto___58493 = G__58494;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58491))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58491){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58491);
});})(g__33121__auto___58491))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__33121__auto___58491){
return (function (seq58455){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58455));
});})(g__33121__auto___58491))
;


var g__33121__auto___58495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__33121__auto___58495){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58496 = arguments.length;
var i__31459__auto___58497 = (0);
while(true){
if((i__31459__auto___58497 < len__31458__auto___58496)){
args__31465__auto__.push((arguments[i__31459__auto___58497]));

var G__58498 = (i__31459__auto___58497 + (1));
i__31459__auto___58497 = G__58498;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58495))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58495){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58495);
});})(g__33121__auto___58495))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__33121__auto___58495){
return (function (seq58456){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58456));
});})(g__33121__auto___58495))
;


var g__33121__auto___58499 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__33121__auto___58499){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58500 = arguments.length;
var i__31459__auto___58501 = (0);
while(true){
if((i__31459__auto___58501 < len__31458__auto___58500)){
args__31465__auto__.push((arguments[i__31459__auto___58501]));

var G__58502 = (i__31459__auto___58501 + (1));
i__31459__auto___58501 = G__58502;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58499))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58499){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58499);
});})(g__33121__auto___58499))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__33121__auto___58499){
return (function (seq58457){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58457));
});})(g__33121__auto___58499))
;


var g__33121__auto___58503 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__33121__auto___58503){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58504 = arguments.length;
var i__31459__auto___58505 = (0);
while(true){
if((i__31459__auto___58505 < len__31458__auto___58504)){
args__31465__auto__.push((arguments[i__31459__auto___58505]));

var G__58506 = (i__31459__auto___58505 + (1));
i__31459__auto___58505 = G__58506;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58503))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58503){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58503);
});})(g__33121__auto___58503))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__33121__auto___58503){
return (function (seq58458){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58458));
});})(g__33121__auto___58503))
;


var g__33121__auto___58507 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__33121__auto___58507){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58508 = arguments.length;
var i__31459__auto___58509 = (0);
while(true){
if((i__31459__auto___58509 < len__31458__auto___58508)){
args__31465__auto__.push((arguments[i__31459__auto___58509]));

var G__58510 = (i__31459__auto___58509 + (1));
i__31459__auto___58509 = G__58510;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58507))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58507){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58507);
});})(g__33121__auto___58507))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__33121__auto___58507){
return (function (seq58459){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58459));
});})(g__33121__auto___58507))
;


var g__33121__auto___58511 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__33121__auto___58511){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58512 = arguments.length;
var i__31459__auto___58513 = (0);
while(true){
if((i__31459__auto___58513 < len__31458__auto___58512)){
args__31465__auto__.push((arguments[i__31459__auto___58513]));

var G__58514 = (i__31459__auto___58513 + (1));
i__31459__auto___58513 = G__58514;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58511))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58511){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58511);
});})(g__33121__auto___58511))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__33121__auto___58511){
return (function (seq58460){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58460));
});})(g__33121__auto___58511))
;


var g__33121__auto___58515 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__33121__auto___58515){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58516 = arguments.length;
var i__31459__auto___58517 = (0);
while(true){
if((i__31459__auto___58517 < len__31458__auto___58516)){
args__31465__auto__.push((arguments[i__31459__auto___58517]));

var G__58518 = (i__31459__auto___58517 + (1));
i__31459__auto___58517 = G__58518;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58515))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58515){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58515);
});})(g__33121__auto___58515))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__33121__auto___58515){
return (function (seq58461){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58461));
});})(g__33121__auto___58515))
;


var g__33121__auto___58519 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__33121__auto___58519){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58520 = arguments.length;
var i__31459__auto___58521 = (0);
while(true){
if((i__31459__auto___58521 < len__31458__auto___58520)){
args__31465__auto__.push((arguments[i__31459__auto___58521]));

var G__58522 = (i__31459__auto___58521 + (1));
i__31459__auto___58521 = G__58522;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58519))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58519){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58519);
});})(g__33121__auto___58519))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__33121__auto___58519){
return (function (seq58462){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58462));
});})(g__33121__auto___58519))
;


var g__33121__auto___58523 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__33121__auto___58523){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58524 = arguments.length;
var i__31459__auto___58525 = (0);
while(true){
if((i__31459__auto___58525 < len__31458__auto___58524)){
args__31465__auto__.push((arguments[i__31459__auto___58525]));

var G__58526 = (i__31459__auto___58525 + (1));
i__31459__auto___58525 = G__58526;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58523))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58523){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58523);
});})(g__33121__auto___58523))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__33121__auto___58523){
return (function (seq58463){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58463));
});})(g__33121__auto___58523))
;


var g__33121__auto___58527 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__33121__auto___58527){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58528 = arguments.length;
var i__31459__auto___58529 = (0);
while(true){
if((i__31459__auto___58529 < len__31458__auto___58528)){
args__31465__auto__.push((arguments[i__31459__auto___58529]));

var G__58530 = (i__31459__auto___58529 + (1));
i__31459__auto___58529 = G__58530;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58527))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58527){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58527);
});})(g__33121__auto___58527))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__33121__auto___58527){
return (function (seq58464){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58464));
});})(g__33121__auto___58527))
;


var g__33121__auto___58531 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__33121__auto___58531){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58532 = arguments.length;
var i__31459__auto___58533 = (0);
while(true){
if((i__31459__auto___58533 < len__31458__auto___58532)){
args__31465__auto__.push((arguments[i__31459__auto___58533]));

var G__58534 = (i__31459__auto___58533 + (1));
i__31459__auto___58533 = G__58534;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58531))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58531){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58531);
});})(g__33121__auto___58531))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__33121__auto___58531){
return (function (seq58465){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58465));
});})(g__33121__auto___58531))
;


var g__33121__auto___58535 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__33121__auto___58535){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58536 = arguments.length;
var i__31459__auto___58537 = (0);
while(true){
if((i__31459__auto___58537 < len__31458__auto___58536)){
args__31465__auto__.push((arguments[i__31459__auto___58537]));

var G__58538 = (i__31459__auto___58537 + (1));
i__31459__auto___58537 = G__58538;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58535))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58535){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58535);
});})(g__33121__auto___58535))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__33121__auto___58535){
return (function (seq58466){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58466));
});})(g__33121__auto___58535))
;


var g__33121__auto___58539 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__33121__auto___58539){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58540 = arguments.length;
var i__31459__auto___58541 = (0);
while(true){
if((i__31459__auto___58541 < len__31458__auto___58540)){
args__31465__auto__.push((arguments[i__31459__auto___58541]));

var G__58542 = (i__31459__auto___58541 + (1));
i__31459__auto___58541 = G__58542;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58539))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58539){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58539);
});})(g__33121__auto___58539))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__33121__auto___58539){
return (function (seq58467){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58467));
});})(g__33121__auto___58539))
;


var g__33121__auto___58543 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__33121__auto___58543){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58544 = arguments.length;
var i__31459__auto___58545 = (0);
while(true){
if((i__31459__auto___58545 < len__31458__auto___58544)){
args__31465__auto__.push((arguments[i__31459__auto___58545]));

var G__58546 = (i__31459__auto___58545 + (1));
i__31459__auto___58545 = G__58546;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58543))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58543){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58543);
});})(g__33121__auto___58543))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__33121__auto___58543){
return (function (seq58468){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58468));
});})(g__33121__auto___58543))
;


var g__33121__auto___58547 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__33121__auto___58547){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58548 = arguments.length;
var i__31459__auto___58549 = (0);
while(true){
if((i__31459__auto___58549 < len__31458__auto___58548)){
args__31465__auto__.push((arguments[i__31459__auto___58549]));

var G__58550 = (i__31459__auto___58549 + (1));
i__31459__auto___58549 = G__58550;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58547))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58547){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58547);
});})(g__33121__auto___58547))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__33121__auto___58547){
return (function (seq58469){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58469));
});})(g__33121__auto___58547))
;


var g__33121__auto___58551 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__33121__auto___58551){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58552 = arguments.length;
var i__31459__auto___58553 = (0);
while(true){
if((i__31459__auto___58553 < len__31458__auto___58552)){
args__31465__auto__.push((arguments[i__31459__auto___58553]));

var G__58554 = (i__31459__auto___58553 + (1));
i__31459__auto___58553 = G__58554;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});})(g__33121__auto___58551))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__33121__auto___58551){
return (function (args){
return cljs.core.deref.call(null,g__33121__auto___58551);
});})(g__33121__auto___58551))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__33121__auto___58551){
return (function (seq58470){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58470));
});})(g__33121__auto___58551))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31465__auto__ = [];
var len__31458__auto___58557 = arguments.length;
var i__31459__auto___58558 = (0);
while(true){
if((i__31459__auto___58558 < len__31458__auto___58557)){
args__31465__auto__.push((arguments[i__31459__auto___58558]));

var G__58559 = (i__31459__auto___58558 + (1));
i__31459__auto___58558 = G__58559;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__58555_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__58555_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq58556){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58556));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__58560_SHARP_){
return (new Date(p1__58560_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1523638677361
