// Compiled by ClojureScript 1.9.946 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name.call(null,data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__30179__auto__ = elem.textContent;
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__60426 = arguments.length;
switch (G__60426) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto__ = elem.classList;
if(cljs.core.truth_(temp__5455__auto__)){
var class_list = temp__5455__auto__;
return class_list.contains(c__$1);
} else {
var temp__5457__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5457__auto__)){
var class_name = temp__5457__auto__;
var temp__5457__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5457__auto____$1)){
var i = temp__5457__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__60429 = arguments.length;
switch (G__60429) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__60433 = arguments.length;
switch (G__60433) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__60431_SHARP_){
return !((p1__60431_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if(!((void 0 === elem.textContent))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60447 = arguments.length;
var i__31459__auto___60448 = (0);
while(true){
if((i__31459__auto___60448 < len__31458__auto___60447)){
args__31465__auto__.push((arguments[i__31459__auto___60448]));

var G__60449 = (i__31459__auto___60448 + (1));
i__31459__auto___60448 = G__60449;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__60437_60450 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__60438_60451 = null;
var count__60439_60452 = (0);
var i__60440_60453 = (0);
while(true){
if((i__60440_60453 < count__60439_60452)){
var vec__60441_60454 = cljs.core._nth.call(null,chunk__60438_60451,i__60440_60453);
var k_60455 = cljs.core.nth.call(null,vec__60441_60454,(0),null);
var v_60456 = cljs.core.nth.call(null,vec__60441_60454,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_60455),v_60456);

var G__60457 = seq__60437_60450;
var G__60458 = chunk__60438_60451;
var G__60459 = count__60439_60452;
var G__60460 = (i__60440_60453 + (1));
seq__60437_60450 = G__60457;
chunk__60438_60451 = G__60458;
count__60439_60452 = G__60459;
i__60440_60453 = G__60460;
continue;
} else {
var temp__5457__auto___60461 = cljs.core.seq.call(null,seq__60437_60450);
if(temp__5457__auto___60461){
var seq__60437_60462__$1 = temp__5457__auto___60461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60437_60462__$1)){
var c__31110__auto___60463 = cljs.core.chunk_first.call(null,seq__60437_60462__$1);
var G__60464 = cljs.core.chunk_rest.call(null,seq__60437_60462__$1);
var G__60465 = c__31110__auto___60463;
var G__60466 = cljs.core.count.call(null,c__31110__auto___60463);
var G__60467 = (0);
seq__60437_60450 = G__60464;
chunk__60438_60451 = G__60465;
count__60439_60452 = G__60466;
i__60440_60453 = G__60467;
continue;
} else {
var vec__60444_60468 = cljs.core.first.call(null,seq__60437_60462__$1);
var k_60469 = cljs.core.nth.call(null,vec__60444_60468,(0),null);
var v_60470 = cljs.core.nth.call(null,vec__60444_60468,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_60469),v_60470);

var G__60471 = cljs.core.next.call(null,seq__60437_60462__$1);
var G__60472 = null;
var G__60473 = (0);
var G__60474 = (0);
seq__60437_60450 = G__60471;
chunk__60438_60451 = G__60472;
count__60439_60452 = G__60473;
i__60440_60453 = G__60474;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq60435){
var G__60436 = cljs.core.first.call(null,seq60435);
var seq60435__$1 = cljs.core.next.call(null,seq60435);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60436,seq60435__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60481 = arguments.length;
var i__31459__auto___60482 = (0);
while(true){
if((i__31459__auto___60482 < len__31458__auto___60481)){
args__31465__auto__.push((arguments[i__31459__auto___60482]));

var G__60483 = (i__31459__auto___60482 + (1));
i__31459__auto___60482 = G__60483;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__60477_60484 = cljs.core.seq.call(null,keywords);
var chunk__60478_60485 = null;
var count__60479_60486 = (0);
var i__60480_60487 = (0);
while(true){
if((i__60480_60487 < count__60479_60486)){
var kw_60488 = cljs.core._nth.call(null,chunk__60478_60485,i__60480_60487);
style.removeProperty(dommy.utils.as_str.call(null,kw_60488));

var G__60489 = seq__60477_60484;
var G__60490 = chunk__60478_60485;
var G__60491 = count__60479_60486;
var G__60492 = (i__60480_60487 + (1));
seq__60477_60484 = G__60489;
chunk__60478_60485 = G__60490;
count__60479_60486 = G__60491;
i__60480_60487 = G__60492;
continue;
} else {
var temp__5457__auto___60493 = cljs.core.seq.call(null,seq__60477_60484);
if(temp__5457__auto___60493){
var seq__60477_60494__$1 = temp__5457__auto___60493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60477_60494__$1)){
var c__31110__auto___60495 = cljs.core.chunk_first.call(null,seq__60477_60494__$1);
var G__60496 = cljs.core.chunk_rest.call(null,seq__60477_60494__$1);
var G__60497 = c__31110__auto___60495;
var G__60498 = cljs.core.count.call(null,c__31110__auto___60495);
var G__60499 = (0);
seq__60477_60484 = G__60496;
chunk__60478_60485 = G__60497;
count__60479_60486 = G__60498;
i__60480_60487 = G__60499;
continue;
} else {
var kw_60500 = cljs.core.first.call(null,seq__60477_60494__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_60500));

var G__60501 = cljs.core.next.call(null,seq__60477_60494__$1);
var G__60502 = null;
var G__60503 = (0);
var G__60504 = (0);
seq__60477_60484 = G__60501;
chunk__60478_60485 = G__60502;
count__60479_60486 = G__60503;
i__60480_60487 = G__60504;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq60475){
var G__60476 = cljs.core.first.call(null,seq60475);
var seq60475__$1 = cljs.core.next.call(null,seq60475);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60476,seq60475__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60517 = arguments.length;
var i__31459__auto___60518 = (0);
while(true){
if((i__31459__auto___60518 < len__31458__auto___60517)){
args__31465__auto__.push((arguments[i__31459__auto___60518]));

var G__60519 = (i__31459__auto___60518 + (1));
i__31459__auto___60518 = G__60519;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__60507_60520 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__60508_60521 = null;
var count__60509_60522 = (0);
var i__60510_60523 = (0);
while(true){
if((i__60510_60523 < count__60509_60522)){
var vec__60511_60524 = cljs.core._nth.call(null,chunk__60508_60521,i__60510_60523);
var k_60525 = cljs.core.nth.call(null,vec__60511_60524,(0),null);
var v_60526 = cljs.core.nth.call(null,vec__60511_60524,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_60525,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60526),"px"].join(''));

var G__60527 = seq__60507_60520;
var G__60528 = chunk__60508_60521;
var G__60529 = count__60509_60522;
var G__60530 = (i__60510_60523 + (1));
seq__60507_60520 = G__60527;
chunk__60508_60521 = G__60528;
count__60509_60522 = G__60529;
i__60510_60523 = G__60530;
continue;
} else {
var temp__5457__auto___60531 = cljs.core.seq.call(null,seq__60507_60520);
if(temp__5457__auto___60531){
var seq__60507_60532__$1 = temp__5457__auto___60531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60507_60532__$1)){
var c__31110__auto___60533 = cljs.core.chunk_first.call(null,seq__60507_60532__$1);
var G__60534 = cljs.core.chunk_rest.call(null,seq__60507_60532__$1);
var G__60535 = c__31110__auto___60533;
var G__60536 = cljs.core.count.call(null,c__31110__auto___60533);
var G__60537 = (0);
seq__60507_60520 = G__60534;
chunk__60508_60521 = G__60535;
count__60509_60522 = G__60536;
i__60510_60523 = G__60537;
continue;
} else {
var vec__60514_60538 = cljs.core.first.call(null,seq__60507_60532__$1);
var k_60539 = cljs.core.nth.call(null,vec__60514_60538,(0),null);
var v_60540 = cljs.core.nth.call(null,vec__60514_60538,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_60539,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_60540),"px"].join(''));

var G__60541 = cljs.core.next.call(null,seq__60507_60532__$1);
var G__60542 = null;
var G__60543 = (0);
var G__60544 = (0);
seq__60507_60520 = G__60541;
chunk__60508_60521 = G__60542;
count__60509_60522 = G__60543;
i__60510_60523 = G__60544;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq60505){
var G__60506 = cljs.core.first.call(null,seq60505);
var seq60505__$1 = cljs.core.next.call(null,seq60505);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60506,seq60505__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__60550 = arguments.length;
switch (G__60550) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60564 = arguments.length;
var i__31459__auto___60565 = (0);
while(true){
if((i__31459__auto___60565 < len__31458__auto___60564)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60565]));

var G__60566 = (i__31459__auto___60565 + (1));
i__31459__auto___60565 = G__60566;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31482__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__60551 = elem;
(G__60551[k__$1] = v);

return G__60551;
} else {
var G__60552 = elem;
G__60552.setAttribute(k__$1,v);

return G__60552;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__60553_60567 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__60554_60568 = null;
var count__60555_60569 = (0);
var i__60556_60570 = (0);
while(true){
if((i__60556_60570 < count__60555_60569)){
var vec__60557_60571 = cljs.core._nth.call(null,chunk__60554_60568,i__60556_60570);
var k_60572__$1 = cljs.core.nth.call(null,vec__60557_60571,(0),null);
var v_60573__$1 = cljs.core.nth.call(null,vec__60557_60571,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_60572__$1,v_60573__$1);

var G__60574 = seq__60553_60567;
var G__60575 = chunk__60554_60568;
var G__60576 = count__60555_60569;
var G__60577 = (i__60556_60570 + (1));
seq__60553_60567 = G__60574;
chunk__60554_60568 = G__60575;
count__60555_60569 = G__60576;
i__60556_60570 = G__60577;
continue;
} else {
var temp__5457__auto___60578 = cljs.core.seq.call(null,seq__60553_60567);
if(temp__5457__auto___60578){
var seq__60553_60579__$1 = temp__5457__auto___60578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60553_60579__$1)){
var c__31110__auto___60580 = cljs.core.chunk_first.call(null,seq__60553_60579__$1);
var G__60581 = cljs.core.chunk_rest.call(null,seq__60553_60579__$1);
var G__60582 = c__31110__auto___60580;
var G__60583 = cljs.core.count.call(null,c__31110__auto___60580);
var G__60584 = (0);
seq__60553_60567 = G__60581;
chunk__60554_60568 = G__60582;
count__60555_60569 = G__60583;
i__60556_60570 = G__60584;
continue;
} else {
var vec__60560_60585 = cljs.core.first.call(null,seq__60553_60579__$1);
var k_60586__$1 = cljs.core.nth.call(null,vec__60560_60585,(0),null);
var v_60587__$1 = cljs.core.nth.call(null,vec__60560_60585,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_60586__$1,v_60587__$1);

var G__60588 = cljs.core.next.call(null,seq__60553_60579__$1);
var G__60589 = null;
var G__60590 = (0);
var G__60591 = (0);
seq__60553_60567 = G__60588;
chunk__60554_60568 = G__60589;
count__60555_60569 = G__60590;
i__60556_60570 = G__60591;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq60546){
var G__60547 = cljs.core.first.call(null,seq60546);
var seq60546__$1 = cljs.core.next.call(null,seq60546);
var G__60548 = cljs.core.first.call(null,seq60546__$1);
var seq60546__$2 = cljs.core.next.call(null,seq60546__$1);
var G__60549 = cljs.core.first.call(null,seq60546__$2);
var seq60546__$3 = cljs.core.next.call(null,seq60546__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60547,G__60548,G__60549,seq60546__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__60596 = arguments.length;
switch (G__60596) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60602 = arguments.length;
var i__31459__auto___60603 = (0);
while(true){
if((i__31459__auto___60603 < len__31458__auto___60602)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60603]));

var G__60604 = (i__31459__auto___60603 + (1));
i__31459__auto___60603 = G__60604;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_60605__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_60605__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_60605__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__60597_60606 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__60598_60607 = null;
var count__60599_60608 = (0);
var i__60600_60609 = (0);
while(true){
if((i__60600_60609 < count__60599_60608)){
var k_60610__$1 = cljs.core._nth.call(null,chunk__60598_60607,i__60600_60609);
dommy.core.remove_attr_BANG_.call(null,elem,k_60610__$1);

var G__60611 = seq__60597_60606;
var G__60612 = chunk__60598_60607;
var G__60613 = count__60599_60608;
var G__60614 = (i__60600_60609 + (1));
seq__60597_60606 = G__60611;
chunk__60598_60607 = G__60612;
count__60599_60608 = G__60613;
i__60600_60609 = G__60614;
continue;
} else {
var temp__5457__auto___60615 = cljs.core.seq.call(null,seq__60597_60606);
if(temp__5457__auto___60615){
var seq__60597_60616__$1 = temp__5457__auto___60615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60597_60616__$1)){
var c__31110__auto___60617 = cljs.core.chunk_first.call(null,seq__60597_60616__$1);
var G__60618 = cljs.core.chunk_rest.call(null,seq__60597_60616__$1);
var G__60619 = c__31110__auto___60617;
var G__60620 = cljs.core.count.call(null,c__31110__auto___60617);
var G__60621 = (0);
seq__60597_60606 = G__60618;
chunk__60598_60607 = G__60619;
count__60599_60608 = G__60620;
i__60600_60609 = G__60621;
continue;
} else {
var k_60622__$1 = cljs.core.first.call(null,seq__60597_60616__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_60622__$1);

var G__60623 = cljs.core.next.call(null,seq__60597_60616__$1);
var G__60624 = null;
var G__60625 = (0);
var G__60626 = (0);
seq__60597_60606 = G__60623;
chunk__60598_60607 = G__60624;
count__60599_60608 = G__60625;
i__60600_60609 = G__60626;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq60593){
var G__60594 = cljs.core.first.call(null,seq60593);
var seq60593__$1 = cljs.core.next.call(null,seq60593);
var G__60595 = cljs.core.first.call(null,seq60593__$1);
var seq60593__$2 = cljs.core.next.call(null,seq60593__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60594,G__60595,seq60593__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__60628 = arguments.length;
switch (G__60628) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__60634 = arguments.length;
switch (G__60634) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60648 = arguments.length;
var i__31459__auto___60649 = (0);
while(true){
if((i__31459__auto___60649 < len__31458__auto___60648)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60649]));

var G__60650 = (i__31459__auto___60649 + (1));
i__31459__auto___60649 = G__60650;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5455__auto___60651 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___60651)){
var class_list_60652 = temp__5455__auto___60651;
var seq__60635_60653 = cljs.core.seq.call(null,classes__$1);
var chunk__60636_60654 = null;
var count__60637_60655 = (0);
var i__60638_60656 = (0);
while(true){
if((i__60638_60656 < count__60637_60655)){
var c_60657 = cljs.core._nth.call(null,chunk__60636_60654,i__60638_60656);
class_list_60652.add(c_60657);

var G__60658 = seq__60635_60653;
var G__60659 = chunk__60636_60654;
var G__60660 = count__60637_60655;
var G__60661 = (i__60638_60656 + (1));
seq__60635_60653 = G__60658;
chunk__60636_60654 = G__60659;
count__60637_60655 = G__60660;
i__60638_60656 = G__60661;
continue;
} else {
var temp__5457__auto___60662 = cljs.core.seq.call(null,seq__60635_60653);
if(temp__5457__auto___60662){
var seq__60635_60663__$1 = temp__5457__auto___60662;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60635_60663__$1)){
var c__31110__auto___60664 = cljs.core.chunk_first.call(null,seq__60635_60663__$1);
var G__60665 = cljs.core.chunk_rest.call(null,seq__60635_60663__$1);
var G__60666 = c__31110__auto___60664;
var G__60667 = cljs.core.count.call(null,c__31110__auto___60664);
var G__60668 = (0);
seq__60635_60653 = G__60665;
chunk__60636_60654 = G__60666;
count__60637_60655 = G__60667;
i__60638_60656 = G__60668;
continue;
} else {
var c_60669 = cljs.core.first.call(null,seq__60635_60663__$1);
class_list_60652.add(c_60669);

var G__60670 = cljs.core.next.call(null,seq__60635_60663__$1);
var G__60671 = null;
var G__60672 = (0);
var G__60673 = (0);
seq__60635_60653 = G__60670;
chunk__60636_60654 = G__60671;
count__60637_60655 = G__60672;
i__60638_60656 = G__60673;
continue;
}
} else {
}
}
break;
}
} else {
var seq__60639_60674 = cljs.core.seq.call(null,classes__$1);
var chunk__60640_60675 = null;
var count__60641_60676 = (0);
var i__60642_60677 = (0);
while(true){
if((i__60642_60677 < count__60641_60676)){
var c_60678 = cljs.core._nth.call(null,chunk__60640_60675,i__60642_60677);
var class_name_60679 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_60679,c_60678))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_60679 === ""))?c_60678:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60679)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60678)].join('')));
}

var G__60680 = seq__60639_60674;
var G__60681 = chunk__60640_60675;
var G__60682 = count__60641_60676;
var G__60683 = (i__60642_60677 + (1));
seq__60639_60674 = G__60680;
chunk__60640_60675 = G__60681;
count__60641_60676 = G__60682;
i__60642_60677 = G__60683;
continue;
} else {
var temp__5457__auto___60684 = cljs.core.seq.call(null,seq__60639_60674);
if(temp__5457__auto___60684){
var seq__60639_60685__$1 = temp__5457__auto___60684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60639_60685__$1)){
var c__31110__auto___60686 = cljs.core.chunk_first.call(null,seq__60639_60685__$1);
var G__60687 = cljs.core.chunk_rest.call(null,seq__60639_60685__$1);
var G__60688 = c__31110__auto___60686;
var G__60689 = cljs.core.count.call(null,c__31110__auto___60686);
var G__60690 = (0);
seq__60639_60674 = G__60687;
chunk__60640_60675 = G__60688;
count__60641_60676 = G__60689;
i__60642_60677 = G__60690;
continue;
} else {
var c_60691 = cljs.core.first.call(null,seq__60639_60685__$1);
var class_name_60692 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_60692,c_60691))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_60692 === ""))?c_60691:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_60692)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_60691)].join('')));
}

var G__60693 = cljs.core.next.call(null,seq__60639_60685__$1);
var G__60694 = null;
var G__60695 = (0);
var G__60696 = (0);
seq__60639_60674 = G__60693;
chunk__60640_60675 = G__60694;
count__60641_60676 = G__60695;
i__60642_60677 = G__60696;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__60643_60697 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__60644_60698 = null;
var count__60645_60699 = (0);
var i__60646_60700 = (0);
while(true){
if((i__60646_60700 < count__60645_60699)){
var c_60701 = cljs.core._nth.call(null,chunk__60644_60698,i__60646_60700);
dommy.core.add_class_BANG_.call(null,elem,c_60701);

var G__60702 = seq__60643_60697;
var G__60703 = chunk__60644_60698;
var G__60704 = count__60645_60699;
var G__60705 = (i__60646_60700 + (1));
seq__60643_60697 = G__60702;
chunk__60644_60698 = G__60703;
count__60645_60699 = G__60704;
i__60646_60700 = G__60705;
continue;
} else {
var temp__5457__auto___60706 = cljs.core.seq.call(null,seq__60643_60697);
if(temp__5457__auto___60706){
var seq__60643_60707__$1 = temp__5457__auto___60706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60643_60707__$1)){
var c__31110__auto___60708 = cljs.core.chunk_first.call(null,seq__60643_60707__$1);
var G__60709 = cljs.core.chunk_rest.call(null,seq__60643_60707__$1);
var G__60710 = c__31110__auto___60708;
var G__60711 = cljs.core.count.call(null,c__31110__auto___60708);
var G__60712 = (0);
seq__60643_60697 = G__60709;
chunk__60644_60698 = G__60710;
count__60645_60699 = G__60711;
i__60646_60700 = G__60712;
continue;
} else {
var c_60713 = cljs.core.first.call(null,seq__60643_60707__$1);
dommy.core.add_class_BANG_.call(null,elem,c_60713);

var G__60714 = cljs.core.next.call(null,seq__60643_60707__$1);
var G__60715 = null;
var G__60716 = (0);
var G__60717 = (0);
seq__60643_60697 = G__60714;
chunk__60644_60698 = G__60715;
count__60645_60699 = G__60716;
i__60646_60700 = G__60717;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq60631){
var G__60632 = cljs.core.first.call(null,seq60631);
var seq60631__$1 = cljs.core.next.call(null,seq60631);
var G__60633 = cljs.core.first.call(null,seq60631__$1);
var seq60631__$2 = cljs.core.next.call(null,seq60631__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60632,G__60633,seq60631__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__60722 = arguments.length;
switch (G__60722) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60728 = arguments.length;
var i__31459__auto___60729 = (0);
while(true){
if((i__31459__auto___60729 < len__31458__auto___60728)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60729]));

var G__60730 = (i__31459__auto___60729 + (1));
i__31459__auto___60729 = G__60730;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto___60731 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___60731)){
var class_list_60732 = temp__5455__auto___60731;
class_list_60732.remove(c__$1);
} else {
var class_name_60733 = dommy.core.class$.call(null,elem);
var new_class_name_60734 = dommy.utils.remove_class_str.call(null,class_name_60733,c__$1);
if((class_name_60733 === new_class_name_60734)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_60734);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__60723 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__60724 = null;
var count__60725 = (0);
var i__60726 = (0);
while(true){
if((i__60726 < count__60725)){
var c = cljs.core._nth.call(null,chunk__60724,i__60726);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__60735 = seq__60723;
var G__60736 = chunk__60724;
var G__60737 = count__60725;
var G__60738 = (i__60726 + (1));
seq__60723 = G__60735;
chunk__60724 = G__60736;
count__60725 = G__60737;
i__60726 = G__60738;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__60723);
if(temp__5457__auto__){
var seq__60723__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60723__$1)){
var c__31110__auto__ = cljs.core.chunk_first.call(null,seq__60723__$1);
var G__60739 = cljs.core.chunk_rest.call(null,seq__60723__$1);
var G__60740 = c__31110__auto__;
var G__60741 = cljs.core.count.call(null,c__31110__auto__);
var G__60742 = (0);
seq__60723 = G__60739;
chunk__60724 = G__60740;
count__60725 = G__60741;
i__60726 = G__60742;
continue;
} else {
var c = cljs.core.first.call(null,seq__60723__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);

var G__60743 = cljs.core.next.call(null,seq__60723__$1);
var G__60744 = null;
var G__60745 = (0);
var G__60746 = (0);
seq__60723 = G__60743;
chunk__60724 = G__60744;
count__60725 = G__60745;
i__60726 = G__60746;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq60719){
var G__60720 = cljs.core.first.call(null,seq60719);
var seq60719__$1 = cljs.core.next.call(null,seq60719);
var G__60721 = cljs.core.first.call(null,seq60719__$1);
var seq60719__$2 = cljs.core.next.call(null,seq60719__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60720,G__60721,seq60719__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__60748 = arguments.length;
switch (G__60748) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5455__auto___60750 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___60750)){
var class_list_60751 = temp__5455__auto___60750;
class_list_60751.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__60753 = arguments.length;
switch (G__60753) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__60756 = arguments.length;
switch (G__60756) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__60762 = arguments.length;
switch (G__60762) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60769 = arguments.length;
var i__31459__auto___60770 = (0);
while(true){
if((i__31459__auto___60770 < len__31458__auto___60769)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60770]));

var G__60771 = (i__31459__auto___60770 + (1));
i__31459__auto___60770 = G__60771;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__60763 = parent;
G__60763.appendChild(child);

return G__60763;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60764_60772 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__60765_60773 = null;
var count__60766_60774 = (0);
var i__60767_60775 = (0);
while(true){
if((i__60767_60775 < count__60766_60774)){
var c_60776 = cljs.core._nth.call(null,chunk__60765_60773,i__60767_60775);
dommy.core.append_BANG_.call(null,parent,c_60776);

var G__60777 = seq__60764_60772;
var G__60778 = chunk__60765_60773;
var G__60779 = count__60766_60774;
var G__60780 = (i__60767_60775 + (1));
seq__60764_60772 = G__60777;
chunk__60765_60773 = G__60778;
count__60766_60774 = G__60779;
i__60767_60775 = G__60780;
continue;
} else {
var temp__5457__auto___60781 = cljs.core.seq.call(null,seq__60764_60772);
if(temp__5457__auto___60781){
var seq__60764_60782__$1 = temp__5457__auto___60781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60764_60782__$1)){
var c__31110__auto___60783 = cljs.core.chunk_first.call(null,seq__60764_60782__$1);
var G__60784 = cljs.core.chunk_rest.call(null,seq__60764_60782__$1);
var G__60785 = c__31110__auto___60783;
var G__60786 = cljs.core.count.call(null,c__31110__auto___60783);
var G__60787 = (0);
seq__60764_60772 = G__60784;
chunk__60765_60773 = G__60785;
count__60766_60774 = G__60786;
i__60767_60775 = G__60787;
continue;
} else {
var c_60788 = cljs.core.first.call(null,seq__60764_60782__$1);
dommy.core.append_BANG_.call(null,parent,c_60788);

var G__60789 = cljs.core.next.call(null,seq__60764_60782__$1);
var G__60790 = null;
var G__60791 = (0);
var G__60792 = (0);
seq__60764_60772 = G__60789;
chunk__60765_60773 = G__60790;
count__60766_60774 = G__60791;
i__60767_60775 = G__60792;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq60759){
var G__60760 = cljs.core.first.call(null,seq60759);
var seq60759__$1 = cljs.core.next.call(null,seq60759);
var G__60761 = cljs.core.first.call(null,seq60759__$1);
var seq60759__$2 = cljs.core.next.call(null,seq60759__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60760,G__60761,seq60759__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__60797 = arguments.length;
switch (G__60797) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__31481__auto__ = [];
var len__31458__auto___60804 = arguments.length;
var i__31459__auto___60805 = (0);
while(true){
if((i__31459__auto___60805 < len__31458__auto___60804)){
args_arr__31481__auto__.push((arguments[i__31459__auto___60805]));

var G__60806 = (i__31459__auto___60805 + (1));
i__31459__auto___60805 = G__60806;
continue;
} else {
}
break;
}

var argseq__31482__auto__ = (new cljs.core.IndexedSeq(args_arr__31481__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31482__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__60798 = parent;
G__60798.insertBefore(child,parent.firstChild);

return G__60798;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__60799_60807 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__60800_60808 = null;
var count__60801_60809 = (0);
var i__60802_60810 = (0);
while(true){
if((i__60802_60810 < count__60801_60809)){
var c_60811 = cljs.core._nth.call(null,chunk__60800_60808,i__60802_60810);
dommy.core.prepend_BANG_.call(null,parent,c_60811);

var G__60812 = seq__60799_60807;
var G__60813 = chunk__60800_60808;
var G__60814 = count__60801_60809;
var G__60815 = (i__60802_60810 + (1));
seq__60799_60807 = G__60812;
chunk__60800_60808 = G__60813;
count__60801_60809 = G__60814;
i__60802_60810 = G__60815;
continue;
} else {
var temp__5457__auto___60816 = cljs.core.seq.call(null,seq__60799_60807);
if(temp__5457__auto___60816){
var seq__60799_60817__$1 = temp__5457__auto___60816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60799_60817__$1)){
var c__31110__auto___60818 = cljs.core.chunk_first.call(null,seq__60799_60817__$1);
var G__60819 = cljs.core.chunk_rest.call(null,seq__60799_60817__$1);
var G__60820 = c__31110__auto___60818;
var G__60821 = cljs.core.count.call(null,c__31110__auto___60818);
var G__60822 = (0);
seq__60799_60807 = G__60819;
chunk__60800_60808 = G__60820;
count__60801_60809 = G__60821;
i__60802_60810 = G__60822;
continue;
} else {
var c_60823 = cljs.core.first.call(null,seq__60799_60817__$1);
dommy.core.prepend_BANG_.call(null,parent,c_60823);

var G__60824 = cljs.core.next.call(null,seq__60799_60817__$1);
var G__60825 = null;
var G__60826 = (0);
var G__60827 = (0);
seq__60799_60807 = G__60824;
chunk__60800_60808 = G__60825;
count__60801_60809 = G__60826;
i__60802_60810 = G__60827;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq60794){
var G__60795 = cljs.core.first.call(null,seq60794);
var seq60794__$1 = cljs.core.next.call(null,seq60794);
var G__60796 = cljs.core.first.call(null,seq60794__$1);
var seq60794__$2 = cljs.core.next.call(null,seq60794__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60795,G__60796,seq60794__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5455__auto___60828 = other.nextSibling;
if(cljs.core.truth_(temp__5455__auto___60828)){
var next_60829 = temp__5455__auto___60828;
dommy.core.insert_before_BANG_.call(null,elem,next_60829);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__60831 = arguments.length;
switch (G__60831) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__60832 = p;
G__60832.removeChild(elem);

return G__60832;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__60834){
var vec__60835 = p__60834;
var special_mouse_event = cljs.core.nth.call(null,vec__60835,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__60835,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__60835,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__60835,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__30179__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__30167__auto__ = related_target;
if(cljs.core.truth_(and__30167__auto__)){
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__30167__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__60835,special_mouse_event,real_mouse_event))
});})(vec__60835,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__30167__auto__ = selected_target;
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__30167__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__30179__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60841 = arguments.length;
var i__31459__auto___60842 = (0);
while(true){
if((i__31459__auto___60842 < len__31458__auto___60841)){
args__31465__auto__.push((arguments[i__31459__auto___60842]));

var G__60843 = (i__31459__auto___60842 + (1));
i__31459__auto___60842 = G__60843;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((2) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__31466__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq60838){
var G__60839 = cljs.core.first.call(null,seq60838);
var seq60838__$1 = cljs.core.next.call(null,seq60838);
var G__60840 = cljs.core.first.call(null,seq60838__$1);
var seq60838__$2 = cljs.core.next.call(null,seq60838__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60839,G__60840,seq60838__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___60883 = arguments.length;
var i__31459__auto___60884 = (0);
while(true){
if((i__31459__auto___60884 < len__31458__auto___60883)){
args__31465__auto__.push((arguments[i__31459__auto___60884]));

var G__60885 = (i__31459__auto___60884 + (1));
i__31459__auto___60884 = G__60885;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__60846_60886 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_60887 = cljs.core.nth.call(null,vec__60846_60886,(0),null);
var selector_60888 = cljs.core.nth.call(null,vec__60846_60886,(1),null);
var seq__60849_60889 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__60856_60890 = null;
var count__60857_60891 = (0);
var i__60858_60892 = (0);
while(true){
if((i__60858_60892 < count__60857_60891)){
var vec__60865_60893 = cljs.core._nth.call(null,chunk__60856_60890,i__60858_60892);
var orig_type_60894 = cljs.core.nth.call(null,vec__60865_60893,(0),null);
var f_60895 = cljs.core.nth.call(null,vec__60865_60893,(1),null);
var seq__60859_60896 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_60894,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_60894,cljs.core.identity])));
var chunk__60861_60897 = null;
var count__60862_60898 = (0);
var i__60863_60899 = (0);
while(true){
if((i__60863_60899 < count__60862_60898)){
var vec__60868_60900 = cljs.core._nth.call(null,chunk__60861_60897,i__60863_60899);
var actual_type_60901 = cljs.core.nth.call(null,vec__60868_60900,(0),null);
var factory_60902 = cljs.core.nth.call(null,vec__60868_60900,(1),null);
var canonical_f_60903 = (cljs.core.truth_(selector_60888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_60887,selector_60888):cljs.core.identity).call(null,factory_60902.call(null,f_60895));
dommy.core.update_event_listeners_BANG_.call(null,elem_60887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_60888,actual_type_60901,f_60895], null),canonical_f_60903);

if(cljs.core.truth_(elem_60887.addEventListener)){
elem_60887.addEventListener(cljs.core.name.call(null,actual_type_60901),canonical_f_60903);
} else {
elem_60887.attachEvent(cljs.core.name.call(null,actual_type_60901),canonical_f_60903);
}

var G__60904 = seq__60859_60896;
var G__60905 = chunk__60861_60897;
var G__60906 = count__60862_60898;
var G__60907 = (i__60863_60899 + (1));
seq__60859_60896 = G__60904;
chunk__60861_60897 = G__60905;
count__60862_60898 = G__60906;
i__60863_60899 = G__60907;
continue;
} else {
var temp__5457__auto___60908 = cljs.core.seq.call(null,seq__60859_60896);
if(temp__5457__auto___60908){
var seq__60859_60909__$1 = temp__5457__auto___60908;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60859_60909__$1)){
var c__31110__auto___60910 = cljs.core.chunk_first.call(null,seq__60859_60909__$1);
var G__60911 = cljs.core.chunk_rest.call(null,seq__60859_60909__$1);
var G__60912 = c__31110__auto___60910;
var G__60913 = cljs.core.count.call(null,c__31110__auto___60910);
var G__60914 = (0);
seq__60859_60896 = G__60911;
chunk__60861_60897 = G__60912;
count__60862_60898 = G__60913;
i__60863_60899 = G__60914;
continue;
} else {
var vec__60871_60915 = cljs.core.first.call(null,seq__60859_60909__$1);
var actual_type_60916 = cljs.core.nth.call(null,vec__60871_60915,(0),null);
var factory_60917 = cljs.core.nth.call(null,vec__60871_60915,(1),null);
var canonical_f_60918 = (cljs.core.truth_(selector_60888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_60887,selector_60888):cljs.core.identity).call(null,factory_60917.call(null,f_60895));
dommy.core.update_event_listeners_BANG_.call(null,elem_60887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_60888,actual_type_60916,f_60895], null),canonical_f_60918);

if(cljs.core.truth_(elem_60887.addEventListener)){
elem_60887.addEventListener(cljs.core.name.call(null,actual_type_60916),canonical_f_60918);
} else {
elem_60887.attachEvent(cljs.core.name.call(null,actual_type_60916),canonical_f_60918);
}

var G__60919 = cljs.core.next.call(null,seq__60859_60909__$1);
var G__60920 = null;
var G__60921 = (0);
var G__60922 = (0);
seq__60859_60896 = G__60919;
chunk__60861_60897 = G__60920;
count__60862_60898 = G__60921;
i__60863_60899 = G__60922;
continue;
}
} else {
}
}
break;
}

var G__60923 = seq__60849_60889;
var G__60924 = chunk__60856_60890;
var G__60925 = count__60857_60891;
var G__60926 = (i__60858_60892 + (1));
seq__60849_60889 = G__60923;
chunk__60856_60890 = G__60924;
count__60857_60891 = G__60925;
i__60858_60892 = G__60926;
continue;
} else {
var temp__5457__auto___60927 = cljs.core.seq.call(null,seq__60849_60889);
if(temp__5457__auto___60927){
var seq__60849_60928__$1 = temp__5457__auto___60927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60849_60928__$1)){
var c__31110__auto___60929 = cljs.core.chunk_first.call(null,seq__60849_60928__$1);
var G__60930 = cljs.core.chunk_rest.call(null,seq__60849_60928__$1);
var G__60931 = c__31110__auto___60929;
var G__60932 = cljs.core.count.call(null,c__31110__auto___60929);
var G__60933 = (0);
seq__60849_60889 = G__60930;
chunk__60856_60890 = G__60931;
count__60857_60891 = G__60932;
i__60858_60892 = G__60933;
continue;
} else {
var vec__60874_60934 = cljs.core.first.call(null,seq__60849_60928__$1);
var orig_type_60935 = cljs.core.nth.call(null,vec__60874_60934,(0),null);
var f_60936 = cljs.core.nth.call(null,vec__60874_60934,(1),null);
var seq__60850_60937 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_60935,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_60935,cljs.core.identity])));
var chunk__60852_60938 = null;
var count__60853_60939 = (0);
var i__60854_60940 = (0);
while(true){
if((i__60854_60940 < count__60853_60939)){
var vec__60877_60941 = cljs.core._nth.call(null,chunk__60852_60938,i__60854_60940);
var actual_type_60942 = cljs.core.nth.call(null,vec__60877_60941,(0),null);
var factory_60943 = cljs.core.nth.call(null,vec__60877_60941,(1),null);
var canonical_f_60944 = (cljs.core.truth_(selector_60888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_60887,selector_60888):cljs.core.identity).call(null,factory_60943.call(null,f_60936));
dommy.core.update_event_listeners_BANG_.call(null,elem_60887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_60888,actual_type_60942,f_60936], null),canonical_f_60944);

if(cljs.core.truth_(elem_60887.addEventListener)){
elem_60887.addEventListener(cljs.core.name.call(null,actual_type_60942),canonical_f_60944);
} else {
elem_60887.attachEvent(cljs.core.name.call(null,actual_type_60942),canonical_f_60944);
}

var G__60945 = seq__60850_60937;
var G__60946 = chunk__60852_60938;
var G__60947 = count__60853_60939;
var G__60948 = (i__60854_60940 + (1));
seq__60850_60937 = G__60945;
chunk__60852_60938 = G__60946;
count__60853_60939 = G__60947;
i__60854_60940 = G__60948;
continue;
} else {
var temp__5457__auto___60949__$1 = cljs.core.seq.call(null,seq__60850_60937);
if(temp__5457__auto___60949__$1){
var seq__60850_60950__$1 = temp__5457__auto___60949__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60850_60950__$1)){
var c__31110__auto___60951 = cljs.core.chunk_first.call(null,seq__60850_60950__$1);
var G__60952 = cljs.core.chunk_rest.call(null,seq__60850_60950__$1);
var G__60953 = c__31110__auto___60951;
var G__60954 = cljs.core.count.call(null,c__31110__auto___60951);
var G__60955 = (0);
seq__60850_60937 = G__60952;
chunk__60852_60938 = G__60953;
count__60853_60939 = G__60954;
i__60854_60940 = G__60955;
continue;
} else {
var vec__60880_60956 = cljs.core.first.call(null,seq__60850_60950__$1);
var actual_type_60957 = cljs.core.nth.call(null,vec__60880_60956,(0),null);
var factory_60958 = cljs.core.nth.call(null,vec__60880_60956,(1),null);
var canonical_f_60959 = (cljs.core.truth_(selector_60888)?cljs.core.partial.call(null,dommy.core.live_listener,elem_60887,selector_60888):cljs.core.identity).call(null,factory_60958.call(null,f_60936));
dommy.core.update_event_listeners_BANG_.call(null,elem_60887,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_60888,actual_type_60957,f_60936], null),canonical_f_60959);

if(cljs.core.truth_(elem_60887.addEventListener)){
elem_60887.addEventListener(cljs.core.name.call(null,actual_type_60957),canonical_f_60959);
} else {
elem_60887.attachEvent(cljs.core.name.call(null,actual_type_60957),canonical_f_60959);
}

var G__60960 = cljs.core.next.call(null,seq__60850_60950__$1);
var G__60961 = null;
var G__60962 = (0);
var G__60963 = (0);
seq__60850_60937 = G__60960;
chunk__60852_60938 = G__60961;
count__60853_60939 = G__60962;
i__60854_60940 = G__60963;
continue;
}
} else {
}
}
break;
}

var G__60964 = cljs.core.next.call(null,seq__60849_60928__$1);
var G__60965 = null;
var G__60966 = (0);
var G__60967 = (0);
seq__60849_60889 = G__60964;
chunk__60856_60890 = G__60965;
count__60857_60891 = G__60966;
i__60858_60892 = G__60967;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq60844){
var G__60845 = cljs.core.first.call(null,seq60844);
var seq60844__$1 = cljs.core.next.call(null,seq60844);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60845,seq60844__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___61007 = arguments.length;
var i__31459__auto___61008 = (0);
while(true){
if((i__31459__auto___61008 < len__31458__auto___61007)){
args__31465__auto__.push((arguments[i__31459__auto___61008]));

var G__61009 = (i__31459__auto___61008 + (1));
i__31459__auto___61008 = G__61009;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__60970_61010 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_61011 = cljs.core.nth.call(null,vec__60970_61010,(0),null);
var selector_61012 = cljs.core.nth.call(null,vec__60970_61010,(1),null);
var seq__60973_61013 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__60980_61014 = null;
var count__60981_61015 = (0);
var i__60982_61016 = (0);
while(true){
if((i__60982_61016 < count__60981_61015)){
var vec__60989_61017 = cljs.core._nth.call(null,chunk__60980_61014,i__60982_61016);
var orig_type_61018 = cljs.core.nth.call(null,vec__60989_61017,(0),null);
var f_61019 = cljs.core.nth.call(null,vec__60989_61017,(1),null);
var seq__60983_61020 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_61018,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61018,cljs.core.identity])));
var chunk__60985_61021 = null;
var count__60986_61022 = (0);
var i__60987_61023 = (0);
while(true){
if((i__60987_61023 < count__60986_61022)){
var vec__60992_61024 = cljs.core._nth.call(null,chunk__60985_61021,i__60987_61023);
var actual_type_61025 = cljs.core.nth.call(null,vec__60992_61024,(0),null);
var __61026 = cljs.core.nth.call(null,vec__60992_61024,(1),null);
var keys_61027 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61012,actual_type_61025,f_61019], null);
var canonical_f_61028 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_61011),keys_61027);
dommy.core.update_event_listeners_BANG_.call(null,elem_61011,dommy.utils.dissoc_in,keys_61027);

if(cljs.core.truth_(elem_61011.removeEventListener)){
elem_61011.removeEventListener(cljs.core.name.call(null,actual_type_61025),canonical_f_61028);
} else {
elem_61011.detachEvent(cljs.core.name.call(null,actual_type_61025),canonical_f_61028);
}

var G__61029 = seq__60983_61020;
var G__61030 = chunk__60985_61021;
var G__61031 = count__60986_61022;
var G__61032 = (i__60987_61023 + (1));
seq__60983_61020 = G__61029;
chunk__60985_61021 = G__61030;
count__60986_61022 = G__61031;
i__60987_61023 = G__61032;
continue;
} else {
var temp__5457__auto___61033 = cljs.core.seq.call(null,seq__60983_61020);
if(temp__5457__auto___61033){
var seq__60983_61034__$1 = temp__5457__auto___61033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60983_61034__$1)){
var c__31110__auto___61035 = cljs.core.chunk_first.call(null,seq__60983_61034__$1);
var G__61036 = cljs.core.chunk_rest.call(null,seq__60983_61034__$1);
var G__61037 = c__31110__auto___61035;
var G__61038 = cljs.core.count.call(null,c__31110__auto___61035);
var G__61039 = (0);
seq__60983_61020 = G__61036;
chunk__60985_61021 = G__61037;
count__60986_61022 = G__61038;
i__60987_61023 = G__61039;
continue;
} else {
var vec__60995_61040 = cljs.core.first.call(null,seq__60983_61034__$1);
var actual_type_61041 = cljs.core.nth.call(null,vec__60995_61040,(0),null);
var __61042 = cljs.core.nth.call(null,vec__60995_61040,(1),null);
var keys_61043 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61012,actual_type_61041,f_61019], null);
var canonical_f_61044 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_61011),keys_61043);
dommy.core.update_event_listeners_BANG_.call(null,elem_61011,dommy.utils.dissoc_in,keys_61043);

if(cljs.core.truth_(elem_61011.removeEventListener)){
elem_61011.removeEventListener(cljs.core.name.call(null,actual_type_61041),canonical_f_61044);
} else {
elem_61011.detachEvent(cljs.core.name.call(null,actual_type_61041),canonical_f_61044);
}

var G__61045 = cljs.core.next.call(null,seq__60983_61034__$1);
var G__61046 = null;
var G__61047 = (0);
var G__61048 = (0);
seq__60983_61020 = G__61045;
chunk__60985_61021 = G__61046;
count__60986_61022 = G__61047;
i__60987_61023 = G__61048;
continue;
}
} else {
}
}
break;
}

var G__61049 = seq__60973_61013;
var G__61050 = chunk__60980_61014;
var G__61051 = count__60981_61015;
var G__61052 = (i__60982_61016 + (1));
seq__60973_61013 = G__61049;
chunk__60980_61014 = G__61050;
count__60981_61015 = G__61051;
i__60982_61016 = G__61052;
continue;
} else {
var temp__5457__auto___61053 = cljs.core.seq.call(null,seq__60973_61013);
if(temp__5457__auto___61053){
var seq__60973_61054__$1 = temp__5457__auto___61053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60973_61054__$1)){
var c__31110__auto___61055 = cljs.core.chunk_first.call(null,seq__60973_61054__$1);
var G__61056 = cljs.core.chunk_rest.call(null,seq__60973_61054__$1);
var G__61057 = c__31110__auto___61055;
var G__61058 = cljs.core.count.call(null,c__31110__auto___61055);
var G__61059 = (0);
seq__60973_61013 = G__61056;
chunk__60980_61014 = G__61057;
count__60981_61015 = G__61058;
i__60982_61016 = G__61059;
continue;
} else {
var vec__60998_61060 = cljs.core.first.call(null,seq__60973_61054__$1);
var orig_type_61061 = cljs.core.nth.call(null,vec__60998_61060,(0),null);
var f_61062 = cljs.core.nth.call(null,vec__60998_61060,(1),null);
var seq__60974_61063 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_61061,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_61061,cljs.core.identity])));
var chunk__60976_61064 = null;
var count__60977_61065 = (0);
var i__60978_61066 = (0);
while(true){
if((i__60978_61066 < count__60977_61065)){
var vec__61001_61067 = cljs.core._nth.call(null,chunk__60976_61064,i__60978_61066);
var actual_type_61068 = cljs.core.nth.call(null,vec__61001_61067,(0),null);
var __61069 = cljs.core.nth.call(null,vec__61001_61067,(1),null);
var keys_61070 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61012,actual_type_61068,f_61062], null);
var canonical_f_61071 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_61011),keys_61070);
dommy.core.update_event_listeners_BANG_.call(null,elem_61011,dommy.utils.dissoc_in,keys_61070);

if(cljs.core.truth_(elem_61011.removeEventListener)){
elem_61011.removeEventListener(cljs.core.name.call(null,actual_type_61068),canonical_f_61071);
} else {
elem_61011.detachEvent(cljs.core.name.call(null,actual_type_61068),canonical_f_61071);
}

var G__61072 = seq__60974_61063;
var G__61073 = chunk__60976_61064;
var G__61074 = count__60977_61065;
var G__61075 = (i__60978_61066 + (1));
seq__60974_61063 = G__61072;
chunk__60976_61064 = G__61073;
count__60977_61065 = G__61074;
i__60978_61066 = G__61075;
continue;
} else {
var temp__5457__auto___61076__$1 = cljs.core.seq.call(null,seq__60974_61063);
if(temp__5457__auto___61076__$1){
var seq__60974_61077__$1 = temp__5457__auto___61076__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__60974_61077__$1)){
var c__31110__auto___61078 = cljs.core.chunk_first.call(null,seq__60974_61077__$1);
var G__61079 = cljs.core.chunk_rest.call(null,seq__60974_61077__$1);
var G__61080 = c__31110__auto___61078;
var G__61081 = cljs.core.count.call(null,c__31110__auto___61078);
var G__61082 = (0);
seq__60974_61063 = G__61079;
chunk__60976_61064 = G__61080;
count__60977_61065 = G__61081;
i__60978_61066 = G__61082;
continue;
} else {
var vec__61004_61083 = cljs.core.first.call(null,seq__60974_61077__$1);
var actual_type_61084 = cljs.core.nth.call(null,vec__61004_61083,(0),null);
var __61085 = cljs.core.nth.call(null,vec__61004_61083,(1),null);
var keys_61086 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_61012,actual_type_61084,f_61062], null);
var canonical_f_61087 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_61011),keys_61086);
dommy.core.update_event_listeners_BANG_.call(null,elem_61011,dommy.utils.dissoc_in,keys_61086);

if(cljs.core.truth_(elem_61011.removeEventListener)){
elem_61011.removeEventListener(cljs.core.name.call(null,actual_type_61084),canonical_f_61087);
} else {
elem_61011.detachEvent(cljs.core.name.call(null,actual_type_61084),canonical_f_61087);
}

var G__61088 = cljs.core.next.call(null,seq__60974_61077__$1);
var G__61089 = null;
var G__61090 = (0);
var G__61091 = (0);
seq__60974_61063 = G__61088;
chunk__60976_61064 = G__61089;
count__60977_61065 = G__61090;
i__60978_61066 = G__61091;
continue;
}
} else {
}
}
break;
}

var G__61092 = cljs.core.next.call(null,seq__60973_61054__$1);
var G__61093 = null;
var G__61094 = (0);
var G__61095 = (0);
seq__60973_61013 = G__61092;
chunk__60980_61014 = G__61093;
count__60981_61015 = G__61094;
i__60982_61016 = G__61095;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq60968){
var G__60969 = cljs.core.first.call(null,seq60968);
var seq60968__$1 = cljs.core.next.call(null,seq60968);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__60969,seq60968__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___61111 = arguments.length;
var i__31459__auto___61112 = (0);
while(true){
if((i__31459__auto___61112 < len__31458__auto___61111)){
args__31465__auto__.push((arguments[i__31459__auto___61112]));

var G__61113 = (i__31459__auto___61112 + (1));
i__31459__auto___61112 = G__61113;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__61098_61114 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_61115 = cljs.core.nth.call(null,vec__61098_61114,(0),null);
var selector_61116 = cljs.core.nth.call(null,vec__61098_61114,(1),null);
var seq__61101_61117 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__61102_61118 = null;
var count__61103_61119 = (0);
var i__61104_61120 = (0);
while(true){
if((i__61104_61120 < count__61103_61119)){
var vec__61105_61121 = cljs.core._nth.call(null,chunk__61102_61118,i__61104_61120);
var type_61122 = cljs.core.nth.call(null,vec__61105_61121,(0),null);
var f_61123 = cljs.core.nth.call(null,vec__61105_61121,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_61122,((function (seq__61101_61117,chunk__61102_61118,count__61103_61119,i__61104_61120,vec__61105_61121,type_61122,f_61123,vec__61098_61114,elem_61115,selector_61116){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_61122,dommy$core$this_fn);

return f_61123.call(null,e);
});})(seq__61101_61117,chunk__61102_61118,count__61103_61119,i__61104_61120,vec__61105_61121,type_61122,f_61123,vec__61098_61114,elem_61115,selector_61116))
);

var G__61124 = seq__61101_61117;
var G__61125 = chunk__61102_61118;
var G__61126 = count__61103_61119;
var G__61127 = (i__61104_61120 + (1));
seq__61101_61117 = G__61124;
chunk__61102_61118 = G__61125;
count__61103_61119 = G__61126;
i__61104_61120 = G__61127;
continue;
} else {
var temp__5457__auto___61128 = cljs.core.seq.call(null,seq__61101_61117);
if(temp__5457__auto___61128){
var seq__61101_61129__$1 = temp__5457__auto___61128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61101_61129__$1)){
var c__31110__auto___61130 = cljs.core.chunk_first.call(null,seq__61101_61129__$1);
var G__61131 = cljs.core.chunk_rest.call(null,seq__61101_61129__$1);
var G__61132 = c__31110__auto___61130;
var G__61133 = cljs.core.count.call(null,c__31110__auto___61130);
var G__61134 = (0);
seq__61101_61117 = G__61131;
chunk__61102_61118 = G__61132;
count__61103_61119 = G__61133;
i__61104_61120 = G__61134;
continue;
} else {
var vec__61108_61135 = cljs.core.first.call(null,seq__61101_61129__$1);
var type_61136 = cljs.core.nth.call(null,vec__61108_61135,(0),null);
var f_61137 = cljs.core.nth.call(null,vec__61108_61135,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_61136,((function (seq__61101_61117,chunk__61102_61118,count__61103_61119,i__61104_61120,vec__61108_61135,type_61136,f_61137,seq__61101_61129__$1,temp__5457__auto___61128,vec__61098_61114,elem_61115,selector_61116){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_61136,dommy$core$this_fn);

return f_61137.call(null,e);
});})(seq__61101_61117,chunk__61102_61118,count__61103_61119,i__61104_61120,vec__61108_61135,type_61136,f_61137,seq__61101_61129__$1,temp__5457__auto___61128,vec__61098_61114,elem_61115,selector_61116))
);

var G__61138 = cljs.core.next.call(null,seq__61101_61129__$1);
var G__61139 = null;
var G__61140 = (0);
var G__61141 = (0);
seq__61101_61117 = G__61138;
chunk__61102_61118 = G__61139;
count__61103_61119 = G__61140;
i__61104_61120 = G__61141;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq61096){
var G__61097 = cljs.core.first.call(null,seq61096);
var seq61096__$1 = cljs.core.next.call(null,seq61096);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__61097,seq61096__$1);
});


//# sourceMappingURL=core.js.map?rel=1523638680675
