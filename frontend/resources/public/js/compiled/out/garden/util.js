// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.util');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
garden.util.format = (function garden$util$format(var_args){
var args__10202__auto__ = [];
var len__10195__auto___14602 = arguments.length;
var i__10196__auto___14603 = (0);
while(true){
if((i__10196__auto___14603 < len__10195__auto___14602)){
args__10202__auto__.push((arguments[i__10196__auto___14603]));

var G__14604 = (i__10196__auto___14603 + (1));
i__10196__auto___14603 = G__14604;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

garden.util.format.cljs$lang$maxFixedArity = (1);

garden.util.format.cljs$lang$applyTo = (function (seq14600){
var G__14601 = cljs.core.first(seq14600);
var seq14600__$1 = cljs.core.next(seq14600);
return garden.util.format.cljs$core$IFn$_invoke$arity$variadic(G__14601,seq14600__$1);
});


/**
 * @interface
 */
garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
garden.util.to_str = (function garden$util$to_str(this$){
if((!((this$ == null))) && (!((this$.garden$util$ToString$to_str$arity$1 == null)))){
return this$.garden$util$ToString$to_str$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (garden.util.to_str[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (garden.util.to_str["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name(this$__$1);
});

goog.object.set(garden.util.ToString,"_",true);

var G__14605_14611 = garden.util.to_str;
var G__14606_14612 = "_";
var G__14607_14613 = ((function (G__14605_14611,G__14606_14612){
return (function (this$){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
});})(G__14605_14611,G__14606_14612))
;
goog.object.set(G__14605_14611,G__14606_14612,G__14607_14613);

goog.object.set(garden.util.ToString,"null",true);

var G__14608_14614 = garden.util.to_str;
var G__14609_14615 = "null";
var G__14610_14616 = ((function (G__14608_14614,G__14609_14615){
return (function (this$){
return "";
});})(G__14608_14614,G__14609_14615))
;
goog.object.set(G__14608_14614,G__14609_14615,G__14610_14616);
/**
 * Convert a variable number of values into strings.
 */
garden.util.as_str = (function garden$util$as_str(var_args){
var args__10202__auto__ = [];
var len__10195__auto___14618 = arguments.length;
var i__10196__auto___14619 = (0);
while(true){
if((i__10196__auto___14619 < len__10195__auto___14618)){
args__10202__auto__.push((arguments[i__10196__auto___14619]));

var G__14620 = (i__10196__auto___14619 + (1));
i__10196__auto___14619 = G__14620;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,args));
});

garden.util.as_str.cljs$lang$maxFixedArity = (0);

garden.util.as_str.cljs$lang$applyTo = (function (seq14617){
return garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14617));
});

/**
 * Convert a string to an integer with optional base.
 */
garden.util.string__GT_int = (function garden$util$string__GT_int(var_args){
var args__10202__auto__ = [];
var len__10195__auto___14627 = arguments.length;
var i__10196__auto___14628 = (0);
while(true){
if((i__10196__auto___14628 < len__10195__auto___14627)){
args__10202__auto__.push((arguments[i__10196__auto___14628]));

var G__14629 = (i__10196__auto___14628 + (1));
i__10196__auto___14628 = G__14629;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__14623){
var vec__14624 = p__14623;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14624,(0),null);
var radix__$1 = (function (){var or__8916__auto__ = radix;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

garden.util.string__GT_int.cljs$lang$applyTo = (function (seq14621){
var G__14622 = cljs.core.first(seq14621);
var seq14621__$1 = cljs.core.next(seq14621);
return garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic(G__14622,seq14621__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
garden.util.int__GT_string = (function garden$util$int__GT_string(var_args){
var args__10202__auto__ = [];
var len__10195__auto___14636 = arguments.length;
var i__10196__auto___14637 = (0);
while(true){
if((i__10196__auto___14637 < len__10195__auto___14636)){
args__10202__auto__.push((arguments[i__10196__auto___14637]));

var G__14638 = (i__10196__auto___14637 + (1));
i__10196__auto___14637 = G__14638;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__14632){
var vec__14633 = p__14632;
var radix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14633,(0),null);
var radix__$1 = (function (){var or__8916__auto__ = radix;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

garden.util.int__GT_string.cljs$lang$applyTo = (function (seq14630){
var G__14631 = cljs.core.first(seq14630);
var seq14630__$1 = cljs.core.next(seq14630);
return garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic(G__14631,seq14630__$1);
});

/**
 * Return a space separated list of values.
 */
garden.util.space_join = (function garden$util$space_join(xs){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
garden.util.comma_join = (function garden$util$comma_join(xs){
var ys = (function (){var iter__9798__auto__ = (function garden$util$comma_join_$_iter__14639(s__14640){
return (new cljs.core.LazySeq(null,(function (){
var s__14640__$1 = s__14640;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__14640__$1);
if(temp__5457__auto__){
var s__14640__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__14640__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__14640__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__14642 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__14641 = (0);
while(true){
if((i__14641 < size__9797__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__14641);
cljs.core.chunk_append(b__14642,((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)));

var G__14643 = (i__14641 + (1));
i__14641 = G__14643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__14642),garden$util$comma_join_$_iter__14639(cljs.core.chunk_rest(s__14640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__14642),null);
}
} else {
var x = cljs.core.first(s__14640__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?garden.util.space_join(x):garden.util.to_str(x)),garden$util$comma_join_$_iter__14639(cljs.core.rest(s__14640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__9798__auto__(xs);
})();
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
garden.util.wrap_quotes = (function garden$util$wrap_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
garden.util.hash_map_QMARK_ = (function garden$util$hash_map_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (!(cljs.core.record_QMARK_(x)));
});
/**
 * Alias to `vector?`.
 */
garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
garden.util.declaration_QMARK_ = garden.util.hash_map_QMARK_;
garden.util.at_rule_QMARK_ = (function garden$util$at_rule_QMARK_(x){
return (x instanceof garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
garden.util.at_media_QMARK_ = (function garden$util$at_media_QMARK_(x){
var and__8904__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$media);
} else {
return and__8904__auto__;
}
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
garden.util.at_keyframes_QMARK_ = (function garden$util$at_keyframes_QMARK_(x){
var and__8904__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$keyframes);
} else {
return and__8904__auto__;
}
});
/**
 * True if `x` is a CSS `@import` rule.
 */
garden.util.at_import_QMARK_ = (function garden$util$at_import_QMARK_(x){
var and__8904__auto__ = garden.util.at_rule_QMARK_(x);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$identifier.cljs$core$IFn$_invoke$arity$1(x),cljs.core.cst$kw$import);
} else {
return and__8904__auto__;
}
});
/**
 * Attach a CSS style prefix to s.
 */
garden.util.prefix = (function garden$util$prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.last(p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
garden.util.vendor_prefix = (function garden$util$vendor_prefix(p,s){
var p__$1 = garden.util.to_str(p);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.first(p__$1))){
return garden.util.prefix(p__$1,s);
} else {
return garden.util.prefix([cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
garden.util.natural_QMARK_ = (function garden$util$natural_QMARK_(n){
return (cljs.core.integer_QMARK_(n)) && ((n > (0)));
});
/**
 * True if n is a number between a and b.
 */
garden.util.between_QMARK_ = (function garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__9275__auto__ = a;
var y__9276__auto__ = b;
return ((x__9275__auto__ < y__9276__auto__) ? x__9275__auto__ : y__9276__auto__);
})();
var top = (function (){var x__9268__auto__ = a;
var y__9269__auto__ = b;
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
})();
return ((n >= bottom)) && ((n <= top));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
garden.util.clip = (function garden$util$clip(a,b,n){
var vec__14644 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(0),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14644,(1),null);
var x__9268__auto__ = a__$1;
var y__9269__auto__ = (function (){var x__9275__auto__ = b__$1;
var y__9276__auto__ = n;
return ((x__9275__auto__ < y__9276__auto__) ? x__9275__auto__ : y__9276__auto__);
})();
return ((x__9268__auto__ > y__9269__auto__) ? x__9268__auto__ : y__9269__auto__);
});
/**
 * Return the average of two or more numbers.
 */
garden.util.average = (function garden$util$average(var_args){
var args__10202__auto__ = [];
var len__10195__auto___14650 = arguments.length;
var i__10196__auto___14651 = (0);
while(true){
if((i__10196__auto___14651 < len__10195__auto___14650)){
args__10202__auto__.push((arguments[i__10196__auto___14651]));

var G__14652 = (i__10196__auto___14651 + (1));
i__10196__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count(more)));
});

garden.util.average.cljs$lang$maxFixedArity = (2);

garden.util.average.cljs$lang$applyTo = (function (seq14647){
var G__14648 = cljs.core.first(seq14647);
var seq14647__$1 = cljs.core.next(seq14647);
var G__14649 = cljs.core.first(seq14647__$1);
var seq14647__$2 = cljs.core.next(seq14647__$1);
return garden.util.average.cljs$core$IFn$_invoke$arity$variadic(G__14648,G__14649,seq14647__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
garden.util.cartesian_product = (function garden$util$cartesian_product(var_args){
var args__10202__auto__ = [];
var len__10195__auto___14654 = arguments.length;
var i__10196__auto___14655 = (0);
while(true){
if((i__10196__auto___14655 < len__10195__auto___14654)){
args__10202__auto__.push((arguments[i__10196__auto___14655]));

var G__14656 = (i__10196__auto___14655 + (1));
i__10196__auto___14655 = G__14656;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec(seqs);
var step = ((function (v_original_seqs){
return (function garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count(v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(-1))){
return null;
} else {
var temp__5455__auto__ = cljs.core.next((v_seqs__$2.cljs$core$IFn$_invoke$arity$1 ? v_seqs__$2.cljs$core$IFn$_invoke$arity$1(i) : v_seqs__$2.call(null,i)));
if(temp__5455__auto__){
var rst = temp__5455__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,rst);
} else {
var G__14657 = (i - (1));
var G__14658 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v_seqs__$2,i,(v_original_seqs.cljs$core$IFn$_invoke$arity$1 ? v_original_seqs.cljs$core$IFn$_invoke$arity$1(i) : v_original_seqs.call(null,i)));
i = G__14657;
v_seqs__$2 = G__14658;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return garden$util$step(increment(v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_(cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step(v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

garden.util.cartesian_product.cljs$lang$applyTo = (function (seq14653){
return garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14653));
});

