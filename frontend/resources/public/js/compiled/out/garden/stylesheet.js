// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17281 = arguments.length;
var i__10196__auto___17282 = (0);
while(true){
if((i__10196__auto___17282 < len__10195__auto___17281)){
args__10202__auto__.push((arguments[i__10196__auto___17282]));

var G__17283 = (i__10196__auto___17282 + (1));
i__10196__auto___17282 = G__17283;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__17284__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__17284 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__17285__i = 0, G__17285__a = new Array(arguments.length -  0);
while (G__17285__i < G__17285__a.length) {G__17285__a[G__17285__i] = arguments[G__17285__i + 0]; ++G__17285__i;}
  children = new cljs.core.IndexedSeq(G__17285__a,0,null);
} 
return G__17284__delegate.call(this,children);};
G__17284.cljs$lang$maxFixedArity = 0;
G__17284.cljs$lang$applyTo = (function (arglist__17286){
var children = cljs.core.seq(arglist__17286);
return G__17284__delegate(children);
});
G__17284.cljs$core$IFn$_invoke$arity$variadic = G__17284__delegate;
return G__17284;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq17279){
var G__17280 = cljs.core.first(seq17279);
var seq17279__$1 = cljs.core.next(seq17279);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__17280,seq17279__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__17287__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__17287 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17288__i = 0, G__17288__a = new Array(arguments.length -  0);
while (G__17288__i < G__17288__a.length) {G__17288__a[G__17288__i] = arguments[G__17288__i + 0]; ++G__17288__i;}
  args = new cljs.core.IndexedSeq(G__17288__a,0,null);
} 
return G__17287__delegate.call(this,args);};
G__17287.cljs$lang$maxFixedArity = 0;
G__17287.cljs$lang$applyTo = (function (arglist__17289){
var args = cljs.core.seq(arglist__17289);
return G__17287__delegate(args);
});
G__17287.cljs$core$IFn$_invoke$arity$variadic = G__17287__delegate;
return G__17287;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17291 = arguments.length;
var i__10196__auto___17292 = (0);
while(true){
if((i__10196__auto___17292 < len__10195__auto___17291)){
args__10202__auto__.push((arguments[i__10196__auto___17292]));

var G__17293 = (i__10196__auto___17292 + (1));
i__10196__auto___17292 = G__17293;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((0) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__10203__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq17290){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17290));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__17297 = arguments.length;
switch (G__17297) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17299 = arguments.length;
var i__10196__auto___17300 = (0);
while(true){
if((i__10196__auto___17300 < len__10195__auto___17299)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17300]));

var G__17301 = (i__10196__auto___17300 + (1));
i__10196__auto___17300 = G__17301;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10219__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq17295){
var G__17296 = cljs.core.first(seq17295);
var seq17295__$1 = cljs.core.next(seq17295);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__17296,seq17295__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17304 = arguments.length;
var i__10196__auto___17305 = (0);
while(true){
if((i__10196__auto___17305 < len__10195__auto___17304)){
args__10202__auto__.push((arguments[i__10196__auto___17305]));

var G__17306 = (i__10196__auto___17305 + (1));
i__10196__auto___17305 = G__17306;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq17302){
var G__17303 = cljs.core.first(seq17302);
var seq17302__$1 = cljs.core.next(seq17302);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__17303,seq17302__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17309 = arguments.length;
var i__10196__auto___17310 = (0);
while(true){
if((i__10196__auto___17310 < len__10195__auto___17309)){
args__10202__auto__.push((arguments[i__10196__auto___17310]));

var G__17311 = (i__10196__auto___17310 + (1));
i__10196__auto___17310 = G__17311;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq17307){
var G__17308 = cljs.core.first(seq17307);
var seq17307__$1 = cljs.core.next(seq17307);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__17308,seq17307__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
