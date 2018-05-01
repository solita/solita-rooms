// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
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
var args__31465__auto__ = [];
var len__31458__auto___60383 = arguments.length;
var i__31459__auto___60384 = (0);
while(true){
if((i__31459__auto___60384 < len__31458__auto___60383)){
args__31465__auto__.push((arguments[i__31459__auto___60384]));

var G__60385 = (i__31459__auto___60384 + (1));
i__31459__auto___60384 = G__60385;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__60386__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__60386 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__60387__i = 0, G__60387__a = new Array(arguments.length -  0);
while (G__60387__i < G__60387__a.length) {G__60387__a[G__60387__i] = arguments[G__60387__i + 0]; ++G__60387__i;}
  children = new cljs.core.IndexedSeq(G__60387__a,0,null);
} 
return G__60386__delegate.call(this,children);};
G__60386.cljs$lang$maxFixedArity = 0;
G__60386.cljs$lang$applyTo = (function (arglist__60388){
var children = cljs.core.seq(arglist__60388);
return G__60386__delegate(children);
});
G__60386.cljs$core$IFn$_invoke$arity$variadic = G__60386__delegate;
return G__60386;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq60381){
var G__60382 = cljs.core.first.call(null,seq60381);
var seq60381__$1 = cljs.core.next.call(null,seq60381);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__60382,seq60381__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__60389__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__60389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__60390__i = 0, G__60390__a = new Array(arguments.length -  0);
while (G__60390__i < G__60390__a.length) {G__60390__a[G__60390__i] = arguments[G__60390__i + 0]; ++G__60390__i;}
  args = new cljs.core.IndexedSeq(G__60390__a,0,null);
} 
return G__60389__delegate.call(this,args);};
G__60389.cljs$lang$maxFixedArity = 0;
G__60389.cljs$lang$applyTo = (function (arglist__60391){
var args = cljs.core.seq(arglist__60391);
return G__60389__delegate(args);
});
G__60389.cljs$core$IFn$_invoke$arity$variadic = G__60389__delegate;
return G__60389;
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
var args__31465__auto__ = [];
var len__31458__auto___60393 = arguments.length;
var i__31459__auto___60394 = (0);
while(true){
if((i__31459__auto___60394 < len__31458__auto___60393)){
args__31465__auto__.push((arguments[i__31459__auto___60394]));

var G__60395 = (i__31459__auto___60394 + (1));
i__31459__auto___60394 = G__60395;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq60392){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq60392));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__60399 = arguments.length;
switch (G__60399) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60401 = arguments.length;
var i__31459__auto___60402 = (0);
while(true){
if((i__31459__auto___60402 < len__31458__auto___60401)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60402]));

var G__60403 = (i__31459__auto___60402 + (1));
i__31459__auto___60402 = G__60403;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31482__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq60397){
var G__60398 = cljs.core.first.call(null,seq60397);
var seq60397__$1 = cljs.core.next.call(null,seq60397);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__60398,seq60397__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60406 = arguments.length;
var i__31459__auto___60407 = (0);
while(true){
if((i__31459__auto___60407 < len__31458__auto___60406)){
args__31465__auto__.push((arguments[i__31459__auto___60407]));

var G__60408 = (i__31459__auto___60407 + (1));
i__31459__auto___60407 = G__60408;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq60404){
var G__60405 = cljs.core.first.call(null,seq60404);
var seq60404__$1 = cljs.core.next.call(null,seq60404);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__60405,seq60404__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60411 = arguments.length;
var i__31459__auto___60412 = (0);
while(true){
if((i__31459__auto___60412 < len__31458__auto___60411)){
args__31465__auto__.push((arguments[i__31459__auto___60412]));

var G__60413 = (i__31459__auto___60412 + (1));
i__31459__auto___60412 = G__60413;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq60409){
var G__60410 = cljs.core.first.call(null,seq60409);
var seq60409__$1 = cljs.core.next.call(null,seq60409);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__60410,seq60409__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1523638680449
