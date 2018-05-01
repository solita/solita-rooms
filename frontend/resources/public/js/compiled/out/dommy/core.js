// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if((typeof data === 'string') || ((data instanceof cljs.core.Keyword))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__8916__auto__ = elem.textContent;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
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
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__17410 = arguments.length;
switch (G__17410) {
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
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5455__auto__ = elem.classList;
if(cljs.core.truth_(temp__5455__auto__)){
var class_list = temp__5455__auto__;
return class_list.contains(c__$1);
} else {
var temp__5457__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5457__auto__)){
var class_name = temp__5457__auto__;
var temp__5457__auto____$1 = dommy.utils.class_index(class_name,c__$1);
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
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
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
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__17413 = arguments.length;
switch (G__17413) {
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
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__17417 = arguments.length;
switch (G__17417) {
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
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__17415_SHARP_){
return !((p1__17415_SHARP_ === base));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
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
var args__10202__auto__ = [];
var len__10195__auto___17431 = arguments.length;
var i__10196__auto___17432 = (0);
while(true){
if((i__10196__auto___17432 < len__10195__auto___17431)){
args__10202__auto__.push((arguments[i__10196__auto___17432]));

var G__17433 = (i__10196__auto___17432 + (1));
i__10196__auto___17432 = G__17433;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__17421_17434 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__17422_17435 = null;
var count__17423_17436 = (0);
var i__17424_17437 = (0);
while(true){
if((i__17424_17437 < count__17423_17436)){
var vec__17425_17438 = chunk__17422_17435.cljs$core$IIndexed$_nth$arity$2(null,i__17424_17437);
var k_17439 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17425_17438,(0),null);
var v_17440 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17425_17438,(1),null);
style.setProperty(dommy.utils.as_str(k_17439),v_17440);

var G__17441 = seq__17421_17434;
var G__17442 = chunk__17422_17435;
var G__17443 = count__17423_17436;
var G__17444 = (i__17424_17437 + (1));
seq__17421_17434 = G__17441;
chunk__17422_17435 = G__17442;
count__17423_17436 = G__17443;
i__17424_17437 = G__17444;
continue;
} else {
var temp__5457__auto___17445 = cljs.core.seq(seq__17421_17434);
if(temp__5457__auto___17445){
var seq__17421_17446__$1 = temp__5457__auto___17445;
if(cljs.core.chunked_seq_QMARK_(seq__17421_17446__$1)){
var c__9847__auto___17447 = cljs.core.chunk_first(seq__17421_17446__$1);
var G__17448 = cljs.core.chunk_rest(seq__17421_17446__$1);
var G__17449 = c__9847__auto___17447;
var G__17450 = cljs.core.count(c__9847__auto___17447);
var G__17451 = (0);
seq__17421_17434 = G__17448;
chunk__17422_17435 = G__17449;
count__17423_17436 = G__17450;
i__17424_17437 = G__17451;
continue;
} else {
var vec__17428_17452 = cljs.core.first(seq__17421_17446__$1);
var k_17453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17428_17452,(0),null);
var v_17454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17428_17452,(1),null);
style.setProperty(dommy.utils.as_str(k_17453),v_17454);

var G__17455 = cljs.core.next(seq__17421_17446__$1);
var G__17456 = null;
var G__17457 = (0);
var G__17458 = (0);
seq__17421_17434 = G__17455;
chunk__17422_17435 = G__17456;
count__17423_17436 = G__17457;
i__17424_17437 = G__17458;
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

dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq17419){
var G__17420 = cljs.core.first(seq17419);
var seq17419__$1 = cljs.core.next(seq17419);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17420,seq17419__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17465 = arguments.length;
var i__10196__auto___17466 = (0);
while(true){
if((i__10196__auto___17466 < len__10195__auto___17465)){
args__10202__auto__.push((arguments[i__10196__auto___17466]));

var G__17467 = (i__10196__auto___17466 + (1));
i__10196__auto___17466 = G__17467;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__17461_17468 = cljs.core.seq(keywords);
var chunk__17462_17469 = null;
var count__17463_17470 = (0);
var i__17464_17471 = (0);
while(true){
if((i__17464_17471 < count__17463_17470)){
var kw_17472 = chunk__17462_17469.cljs$core$IIndexed$_nth$arity$2(null,i__17464_17471);
style.removeProperty(dommy.utils.as_str(kw_17472));

var G__17473 = seq__17461_17468;
var G__17474 = chunk__17462_17469;
var G__17475 = count__17463_17470;
var G__17476 = (i__17464_17471 + (1));
seq__17461_17468 = G__17473;
chunk__17462_17469 = G__17474;
count__17463_17470 = G__17475;
i__17464_17471 = G__17476;
continue;
} else {
var temp__5457__auto___17477 = cljs.core.seq(seq__17461_17468);
if(temp__5457__auto___17477){
var seq__17461_17478__$1 = temp__5457__auto___17477;
if(cljs.core.chunked_seq_QMARK_(seq__17461_17478__$1)){
var c__9847__auto___17479 = cljs.core.chunk_first(seq__17461_17478__$1);
var G__17480 = cljs.core.chunk_rest(seq__17461_17478__$1);
var G__17481 = c__9847__auto___17479;
var G__17482 = cljs.core.count(c__9847__auto___17479);
var G__17483 = (0);
seq__17461_17468 = G__17480;
chunk__17462_17469 = G__17481;
count__17463_17470 = G__17482;
i__17464_17471 = G__17483;
continue;
} else {
var kw_17484 = cljs.core.first(seq__17461_17478__$1);
style.removeProperty(dommy.utils.as_str(kw_17484));

var G__17485 = cljs.core.next(seq__17461_17478__$1);
var G__17486 = null;
var G__17487 = (0);
var G__17488 = (0);
seq__17461_17468 = G__17485;
chunk__17462_17469 = G__17486;
count__17463_17470 = G__17487;
i__17464_17471 = G__17488;
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

dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq17459){
var G__17460 = cljs.core.first(seq17459);
var seq17459__$1 = cljs.core.next(seq17459);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17460,seq17459__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17501 = arguments.length;
var i__10196__auto___17502 = (0);
while(true){
if((i__10196__auto___17502 < len__10195__auto___17501)){
args__10202__auto__.push((arguments[i__10196__auto___17502]));

var G__17503 = (i__10196__auto___17502 + (1));
i__10196__auto___17502 = G__17503;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__17491_17504 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__17492_17505 = null;
var count__17493_17506 = (0);
var i__17494_17507 = (0);
while(true){
if((i__17494_17507 < count__17493_17506)){
var vec__17495_17508 = chunk__17492_17505.cljs$core$IIndexed$_nth$arity$2(null,i__17494_17507);
var k_17509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17495_17508,(0),null);
var v_17510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17495_17508,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17509,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_17510),"px"].join('')], 0));

var G__17511 = seq__17491_17504;
var G__17512 = chunk__17492_17505;
var G__17513 = count__17493_17506;
var G__17514 = (i__17494_17507 + (1));
seq__17491_17504 = G__17511;
chunk__17492_17505 = G__17512;
count__17493_17506 = G__17513;
i__17494_17507 = G__17514;
continue;
} else {
var temp__5457__auto___17515 = cljs.core.seq(seq__17491_17504);
if(temp__5457__auto___17515){
var seq__17491_17516__$1 = temp__5457__auto___17515;
if(cljs.core.chunked_seq_QMARK_(seq__17491_17516__$1)){
var c__9847__auto___17517 = cljs.core.chunk_first(seq__17491_17516__$1);
var G__17518 = cljs.core.chunk_rest(seq__17491_17516__$1);
var G__17519 = c__9847__auto___17517;
var G__17520 = cljs.core.count(c__9847__auto___17517);
var G__17521 = (0);
seq__17491_17504 = G__17518;
chunk__17492_17505 = G__17519;
count__17493_17506 = G__17520;
i__17494_17507 = G__17521;
continue;
} else {
var vec__17498_17522 = cljs.core.first(seq__17491_17516__$1);
var k_17523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17498_17522,(0),null);
var v_17524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17498_17522,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_17523,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_17524),"px"].join('')], 0));

var G__17525 = cljs.core.next(seq__17491_17516__$1);
var G__17526 = null;
var G__17527 = (0);
var G__17528 = (0);
seq__17491_17504 = G__17525;
chunk__17492_17505 = G__17526;
count__17493_17506 = G__17527;
i__17494_17507 = G__17528;
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

dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq17489){
var G__17490 = cljs.core.first(seq17489);
var seq17489__$1 = cljs.core.next(seq17489);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17490,seq17489__$1);
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
var G__17534 = arguments.length;
switch (G__17534) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17548 = arguments.length;
var i__10196__auto___17549 = (0);
while(true){
if((i__10196__auto___17549 < len__10195__auto___17548)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17549]));

var G__17550 = (i__10196__auto___17549 + (1));
i__10196__auto___17549 = G__17550;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10219__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__17535 = elem;
(G__17535[k__$1] = v);

return G__17535;
} else {
var G__17536 = elem;
G__17536.setAttribute(k__$1,v);

return G__17536;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__17537_17551 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__17538_17552 = null;
var count__17539_17553 = (0);
var i__17540_17554 = (0);
while(true){
if((i__17540_17554 < count__17539_17553)){
var vec__17541_17555 = chunk__17538_17552.cljs$core$IIndexed$_nth$arity$2(null,i__17540_17554);
var k_17556__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17541_17555,(0),null);
var v_17557__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17541_17555,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_17556__$1,v_17557__$1);

var G__17558 = seq__17537_17551;
var G__17559 = chunk__17538_17552;
var G__17560 = count__17539_17553;
var G__17561 = (i__17540_17554 + (1));
seq__17537_17551 = G__17558;
chunk__17538_17552 = G__17559;
count__17539_17553 = G__17560;
i__17540_17554 = G__17561;
continue;
} else {
var temp__5457__auto___17562 = cljs.core.seq(seq__17537_17551);
if(temp__5457__auto___17562){
var seq__17537_17563__$1 = temp__5457__auto___17562;
if(cljs.core.chunked_seq_QMARK_(seq__17537_17563__$1)){
var c__9847__auto___17564 = cljs.core.chunk_first(seq__17537_17563__$1);
var G__17565 = cljs.core.chunk_rest(seq__17537_17563__$1);
var G__17566 = c__9847__auto___17564;
var G__17567 = cljs.core.count(c__9847__auto___17564);
var G__17568 = (0);
seq__17537_17551 = G__17565;
chunk__17538_17552 = G__17566;
count__17539_17553 = G__17567;
i__17540_17554 = G__17568;
continue;
} else {
var vec__17544_17569 = cljs.core.first(seq__17537_17563__$1);
var k_17570__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17544_17569,(0),null);
var v_17571__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17544_17569,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_17570__$1,v_17571__$1);

var G__17572 = cljs.core.next(seq__17537_17563__$1);
var G__17573 = null;
var G__17574 = (0);
var G__17575 = (0);
seq__17537_17551 = G__17572;
chunk__17538_17552 = G__17573;
count__17539_17553 = G__17574;
i__17540_17554 = G__17575;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq17530){
var G__17531 = cljs.core.first(seq17530);
var seq17530__$1 = cljs.core.next(seq17530);
var G__17532 = cljs.core.first(seq17530__$1);
var seq17530__$2 = cljs.core.next(seq17530__$1);
var G__17533 = cljs.core.first(seq17530__$2);
var seq17530__$3 = cljs.core.next(seq17530__$2);
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17531,G__17532,G__17533,seq17530__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__17580 = arguments.length;
switch (G__17580) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17587 = arguments.length;
var i__10196__auto___17588 = (0);
while(true){
if((i__10196__auto___17588 < len__10195__auto___17587)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17588]));

var G__17589 = (i__10196__auto___17588 + (1));
i__10196__auto___17588 = G__17589;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_17590__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__17581 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__17581.cljs$core$IFn$_invoke$arity$1 ? fexpr__17581.cljs$core$IFn$_invoke$arity$1(k_17590__$1) : fexpr__17581.call(null,k_17590__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_17590__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__17582_17591 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__17583_17592 = null;
var count__17584_17593 = (0);
var i__17585_17594 = (0);
while(true){
if((i__17585_17594 < count__17584_17593)){
var k_17595__$1 = chunk__17583_17592.cljs$core$IIndexed$_nth$arity$2(null,i__17585_17594);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_17595__$1);

var G__17596 = seq__17582_17591;
var G__17597 = chunk__17583_17592;
var G__17598 = count__17584_17593;
var G__17599 = (i__17585_17594 + (1));
seq__17582_17591 = G__17596;
chunk__17583_17592 = G__17597;
count__17584_17593 = G__17598;
i__17585_17594 = G__17599;
continue;
} else {
var temp__5457__auto___17600 = cljs.core.seq(seq__17582_17591);
if(temp__5457__auto___17600){
var seq__17582_17601__$1 = temp__5457__auto___17600;
if(cljs.core.chunked_seq_QMARK_(seq__17582_17601__$1)){
var c__9847__auto___17602 = cljs.core.chunk_first(seq__17582_17601__$1);
var G__17603 = cljs.core.chunk_rest(seq__17582_17601__$1);
var G__17604 = c__9847__auto___17602;
var G__17605 = cljs.core.count(c__9847__auto___17602);
var G__17606 = (0);
seq__17582_17591 = G__17603;
chunk__17583_17592 = G__17604;
count__17584_17593 = G__17605;
i__17585_17594 = G__17606;
continue;
} else {
var k_17607__$1 = cljs.core.first(seq__17582_17601__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_17607__$1);

var G__17608 = cljs.core.next(seq__17582_17601__$1);
var G__17609 = null;
var G__17610 = (0);
var G__17611 = (0);
seq__17582_17591 = G__17608;
chunk__17583_17592 = G__17609;
count__17584_17593 = G__17610;
i__17585_17594 = G__17611;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq17577){
var G__17578 = cljs.core.first(seq17577);
var seq17577__$1 = cljs.core.next(seq17577);
var G__17579 = cljs.core.first(seq17577__$1);
var seq17577__$2 = cljs.core.next(seq17577__$1);
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17578,G__17579,seq17577__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__17613 = arguments.length;
switch (G__17613) {
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
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__17619 = arguments.length;
switch (G__17619) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17633 = arguments.length;
var i__10196__auto___17634 = (0);
while(true){
if((i__10196__auto___17634 < len__10195__auto___17633)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17634]));

var G__17635 = (i__10196__auto___17634 + (1));
i__10196__auto___17634 = G__17635;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5455__auto___17636 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___17636)){
var class_list_17637 = temp__5455__auto___17636;
var seq__17620_17638 = cljs.core.seq(classes__$1);
var chunk__17621_17639 = null;
var count__17622_17640 = (0);
var i__17623_17641 = (0);
while(true){
if((i__17623_17641 < count__17622_17640)){
var c_17642 = chunk__17621_17639.cljs$core$IIndexed$_nth$arity$2(null,i__17623_17641);
class_list_17637.add(c_17642);

var G__17643 = seq__17620_17638;
var G__17644 = chunk__17621_17639;
var G__17645 = count__17622_17640;
var G__17646 = (i__17623_17641 + (1));
seq__17620_17638 = G__17643;
chunk__17621_17639 = G__17644;
count__17622_17640 = G__17645;
i__17623_17641 = G__17646;
continue;
} else {
var temp__5457__auto___17647 = cljs.core.seq(seq__17620_17638);
if(temp__5457__auto___17647){
var seq__17620_17648__$1 = temp__5457__auto___17647;
if(cljs.core.chunked_seq_QMARK_(seq__17620_17648__$1)){
var c__9847__auto___17649 = cljs.core.chunk_first(seq__17620_17648__$1);
var G__17650 = cljs.core.chunk_rest(seq__17620_17648__$1);
var G__17651 = c__9847__auto___17649;
var G__17652 = cljs.core.count(c__9847__auto___17649);
var G__17653 = (0);
seq__17620_17638 = G__17650;
chunk__17621_17639 = G__17651;
count__17622_17640 = G__17652;
i__17623_17641 = G__17653;
continue;
} else {
var c_17654 = cljs.core.first(seq__17620_17648__$1);
class_list_17637.add(c_17654);

var G__17655 = cljs.core.next(seq__17620_17648__$1);
var G__17656 = null;
var G__17657 = (0);
var G__17658 = (0);
seq__17620_17638 = G__17655;
chunk__17621_17639 = G__17656;
count__17622_17640 = G__17657;
i__17623_17641 = G__17658;
continue;
}
} else {
}
}
break;
}
} else {
var seq__17624_17659 = cljs.core.seq(classes__$1);
var chunk__17625_17660 = null;
var count__17626_17661 = (0);
var i__17627_17662 = (0);
while(true){
if((i__17627_17662 < count__17626_17661)){
var c_17663 = chunk__17625_17660.cljs$core$IIndexed$_nth$arity$2(null,i__17627_17662);
var class_name_17664 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_17664,c_17663))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_17664 === ""))?c_17663:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_17664)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_17663)].join('')));
}

var G__17665 = seq__17624_17659;
var G__17666 = chunk__17625_17660;
var G__17667 = count__17626_17661;
var G__17668 = (i__17627_17662 + (1));
seq__17624_17659 = G__17665;
chunk__17625_17660 = G__17666;
count__17626_17661 = G__17667;
i__17627_17662 = G__17668;
continue;
} else {
var temp__5457__auto___17669 = cljs.core.seq(seq__17624_17659);
if(temp__5457__auto___17669){
var seq__17624_17670__$1 = temp__5457__auto___17669;
if(cljs.core.chunked_seq_QMARK_(seq__17624_17670__$1)){
var c__9847__auto___17671 = cljs.core.chunk_first(seq__17624_17670__$1);
var G__17672 = cljs.core.chunk_rest(seq__17624_17670__$1);
var G__17673 = c__9847__auto___17671;
var G__17674 = cljs.core.count(c__9847__auto___17671);
var G__17675 = (0);
seq__17624_17659 = G__17672;
chunk__17625_17660 = G__17673;
count__17626_17661 = G__17674;
i__17627_17662 = G__17675;
continue;
} else {
var c_17676 = cljs.core.first(seq__17624_17670__$1);
var class_name_17677 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_17677,c_17676))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_17677 === ""))?c_17676:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_17677)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_17676)].join('')));
}

var G__17678 = cljs.core.next(seq__17624_17670__$1);
var G__17679 = null;
var G__17680 = (0);
var G__17681 = (0);
seq__17624_17659 = G__17678;
chunk__17625_17660 = G__17679;
count__17626_17661 = G__17680;
i__17627_17662 = G__17681;
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
var seq__17628_17682 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__17629_17683 = null;
var count__17630_17684 = (0);
var i__17631_17685 = (0);
while(true){
if((i__17631_17685 < count__17630_17684)){
var c_17686 = chunk__17629_17683.cljs$core$IIndexed$_nth$arity$2(null,i__17631_17685);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_17686);

var G__17687 = seq__17628_17682;
var G__17688 = chunk__17629_17683;
var G__17689 = count__17630_17684;
var G__17690 = (i__17631_17685 + (1));
seq__17628_17682 = G__17687;
chunk__17629_17683 = G__17688;
count__17630_17684 = G__17689;
i__17631_17685 = G__17690;
continue;
} else {
var temp__5457__auto___17691 = cljs.core.seq(seq__17628_17682);
if(temp__5457__auto___17691){
var seq__17628_17692__$1 = temp__5457__auto___17691;
if(cljs.core.chunked_seq_QMARK_(seq__17628_17692__$1)){
var c__9847__auto___17693 = cljs.core.chunk_first(seq__17628_17692__$1);
var G__17694 = cljs.core.chunk_rest(seq__17628_17692__$1);
var G__17695 = c__9847__auto___17693;
var G__17696 = cljs.core.count(c__9847__auto___17693);
var G__17697 = (0);
seq__17628_17682 = G__17694;
chunk__17629_17683 = G__17695;
count__17630_17684 = G__17696;
i__17631_17685 = G__17697;
continue;
} else {
var c_17698 = cljs.core.first(seq__17628_17692__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_17698);

var G__17699 = cljs.core.next(seq__17628_17692__$1);
var G__17700 = null;
var G__17701 = (0);
var G__17702 = (0);
seq__17628_17682 = G__17699;
chunk__17629_17683 = G__17700;
count__17630_17684 = G__17701;
i__17631_17685 = G__17702;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq17616){
var G__17617 = cljs.core.first(seq17616);
var seq17616__$1 = cljs.core.next(seq17616);
var G__17618 = cljs.core.first(seq17616__$1);
var seq17616__$2 = cljs.core.next(seq17616__$1);
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17617,G__17618,seq17616__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__17707 = arguments.length;
switch (G__17707) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17713 = arguments.length;
var i__10196__auto___17714 = (0);
while(true){
if((i__10196__auto___17714 < len__10195__auto___17713)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17714]));

var G__17715 = (i__10196__auto___17714 + (1));
i__10196__auto___17714 = G__17715;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5455__auto___17716 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___17716)){
var class_list_17717 = temp__5455__auto___17716;
class_list_17717.remove(c__$1);
} else {
var class_name_17718 = dommy.core.class$(elem);
var new_class_name_17719 = dommy.utils.remove_class_str(class_name_17718,c__$1);
if((class_name_17718 === new_class_name_17719)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_17719);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__17708 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__17709 = null;
var count__17710 = (0);
var i__17711 = (0);
while(true){
if((i__17711 < count__17710)){
var c = chunk__17709.cljs$core$IIndexed$_nth$arity$2(null,i__17711);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__17720 = seq__17708;
var G__17721 = chunk__17709;
var G__17722 = count__17710;
var G__17723 = (i__17711 + (1));
seq__17708 = G__17720;
chunk__17709 = G__17721;
count__17710 = G__17722;
i__17711 = G__17723;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__17708);
if(temp__5457__auto__){
var seq__17708__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17708__$1)){
var c__9847__auto__ = cljs.core.chunk_first(seq__17708__$1);
var G__17724 = cljs.core.chunk_rest(seq__17708__$1);
var G__17725 = c__9847__auto__;
var G__17726 = cljs.core.count(c__9847__auto__);
var G__17727 = (0);
seq__17708 = G__17724;
chunk__17709 = G__17725;
count__17710 = G__17726;
i__17711 = G__17727;
continue;
} else {
var c = cljs.core.first(seq__17708__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);

var G__17728 = cljs.core.next(seq__17708__$1);
var G__17729 = null;
var G__17730 = (0);
var G__17731 = (0);
seq__17708 = G__17728;
chunk__17709 = G__17729;
count__17710 = G__17730;
i__17711 = G__17731;
continue;
}
} else {
return null;
}
}
break;
}
});

dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq17704){
var G__17705 = cljs.core.first(seq17704);
var seq17704__$1 = cljs.core.next(seq17704);
var G__17706 = cljs.core.first(seq17704__$1);
var seq17704__$2 = cljs.core.next(seq17704__$1);
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17705,G__17706,seq17704__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__17733 = arguments.length;
switch (G__17733) {
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
var c__$1 = dommy.utils.as_str(c);
var temp__5455__auto___17735 = elem.classList;
if(cljs.core.truth_(temp__5455__auto___17735)){
var class_list_17736 = temp__5455__auto___17735;
class_list_17736.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,!(dommy.core.has_class_QMARK_(elem,c__$1)));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__17738 = arguments.length;
switch (G__17738) {
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
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__17741 = arguments.length;
switch (G__17741) {
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
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__17747 = arguments.length;
switch (G__17747) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17754 = arguments.length;
var i__10196__auto___17755 = (0);
while(true){
if((i__10196__auto___17755 < len__10195__auto___17754)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17755]));

var G__17756 = (i__10196__auto___17755 + (1));
i__10196__auto___17755 = G__17756;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__17748 = parent;
G__17748.appendChild(child);

return G__17748;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__17749_17757 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__17750_17758 = null;
var count__17751_17759 = (0);
var i__17752_17760 = (0);
while(true){
if((i__17752_17760 < count__17751_17759)){
var c_17761 = chunk__17750_17758.cljs$core$IIndexed$_nth$arity$2(null,i__17752_17760);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17761);

var G__17762 = seq__17749_17757;
var G__17763 = chunk__17750_17758;
var G__17764 = count__17751_17759;
var G__17765 = (i__17752_17760 + (1));
seq__17749_17757 = G__17762;
chunk__17750_17758 = G__17763;
count__17751_17759 = G__17764;
i__17752_17760 = G__17765;
continue;
} else {
var temp__5457__auto___17766 = cljs.core.seq(seq__17749_17757);
if(temp__5457__auto___17766){
var seq__17749_17767__$1 = temp__5457__auto___17766;
if(cljs.core.chunked_seq_QMARK_(seq__17749_17767__$1)){
var c__9847__auto___17768 = cljs.core.chunk_first(seq__17749_17767__$1);
var G__17769 = cljs.core.chunk_rest(seq__17749_17767__$1);
var G__17770 = c__9847__auto___17768;
var G__17771 = cljs.core.count(c__9847__auto___17768);
var G__17772 = (0);
seq__17749_17757 = G__17769;
chunk__17750_17758 = G__17770;
count__17751_17759 = G__17771;
i__17752_17760 = G__17772;
continue;
} else {
var c_17773 = cljs.core.first(seq__17749_17767__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17773);

var G__17774 = cljs.core.next(seq__17749_17767__$1);
var G__17775 = null;
var G__17776 = (0);
var G__17777 = (0);
seq__17749_17757 = G__17774;
chunk__17750_17758 = G__17775;
count__17751_17759 = G__17776;
i__17752_17760 = G__17777;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq17744){
var G__17745 = cljs.core.first(seq17744);
var seq17744__$1 = cljs.core.next(seq17744);
var G__17746 = cljs.core.first(seq17744__$1);
var seq17744__$2 = cljs.core.next(seq17744__$1);
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17745,G__17746,seq17744__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__17782 = arguments.length;
switch (G__17782) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10218__auto__ = [];
var len__10195__auto___17789 = arguments.length;
var i__10196__auto___17790 = (0);
while(true){
if((i__10196__auto___17790 < len__10195__auto___17789)){
args_arr__10218__auto__.push((arguments[i__10196__auto___17790]));

var G__17791 = (i__10196__auto___17790 + (1));
i__10196__auto___17790 = G__17791;
continue;
} else {
}
break;
}

var argseq__10219__auto__ = (new cljs.core.IndexedSeq(args_arr__10218__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10219__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__17783 = parent;
G__17783.insertBefore(child,parent.firstChild);

return G__17783;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__17784_17792 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__17785_17793 = null;
var count__17786_17794 = (0);
var i__17787_17795 = (0);
while(true){
if((i__17787_17795 < count__17786_17794)){
var c_17796 = chunk__17785_17793.cljs$core$IIndexed$_nth$arity$2(null,i__17787_17795);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17796);

var G__17797 = seq__17784_17792;
var G__17798 = chunk__17785_17793;
var G__17799 = count__17786_17794;
var G__17800 = (i__17787_17795 + (1));
seq__17784_17792 = G__17797;
chunk__17785_17793 = G__17798;
count__17786_17794 = G__17799;
i__17787_17795 = G__17800;
continue;
} else {
var temp__5457__auto___17801 = cljs.core.seq(seq__17784_17792);
if(temp__5457__auto___17801){
var seq__17784_17802__$1 = temp__5457__auto___17801;
if(cljs.core.chunked_seq_QMARK_(seq__17784_17802__$1)){
var c__9847__auto___17803 = cljs.core.chunk_first(seq__17784_17802__$1);
var G__17804 = cljs.core.chunk_rest(seq__17784_17802__$1);
var G__17805 = c__9847__auto___17803;
var G__17806 = cljs.core.count(c__9847__auto___17803);
var G__17807 = (0);
seq__17784_17792 = G__17804;
chunk__17785_17793 = G__17805;
count__17786_17794 = G__17806;
i__17787_17795 = G__17807;
continue;
} else {
var c_17808 = cljs.core.first(seq__17784_17802__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_17808);

var G__17809 = cljs.core.next(seq__17784_17802__$1);
var G__17810 = null;
var G__17811 = (0);
var G__17812 = (0);
seq__17784_17792 = G__17809;
chunk__17785_17793 = G__17810;
count__17786_17794 = G__17811;
i__17787_17795 = G__17812;
continue;
}
} else {
}
}
break;
}

return parent;
});

dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq17779){
var G__17780 = cljs.core.first(seq17779);
var seq17779__$1 = cljs.core.next(seq17779);
var G__17781 = cljs.core.first(seq17779__$1);
var seq17779__$2 = cljs.core.next(seq17779__$1);
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17780,G__17781,seq17779__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
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
var temp__5455__auto___17813 = other.nextSibling;
if(cljs.core.truth_(temp__5455__auto___17813)){
var next_17814 = temp__5455__auto___17813;
dommy.core.insert_before_BANG_(elem,next_17814);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
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
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__17816 = arguments.length;
switch (G__17816) {
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
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__17817 = p;
G__17817.removeChild(elem);

return G__17817;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17819){
var vec__17820 = p__17819;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17820,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17820,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__17820,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__17820,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__8916__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__8904__auto__ = related_target;
if(cljs.core.truth_(and__8904__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__8904__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__17820,special_mouse_event,real_mouse_event))
});})(vec__17820,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__8904__auto__ = selected_target;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__8904__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__8916__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___17826 = arguments.length;
var i__10196__auto___17827 = (0);
while(true){
if((i__10196__auto___17827 < len__10195__auto___17826)){
args__10202__auto__.push((arguments[i__10196__auto___17827]));

var G__17828 = (i__10196__auto___17827 + (1));
i__10196__auto___17827 = G__17828;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq17823){
var G__17824 = cljs.core.first(seq17823);
var seq17823__$1 = cljs.core.next(seq17823);
var G__17825 = cljs.core.first(seq17823__$1);
var seq17823__$2 = cljs.core.next(seq17823__$1);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17824,G__17825,seq17823__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__17829 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__17829.cljs$core$IFn$_invoke$arity$1 ? fexpr__17829.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__17829.call(null,elem_sel));
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
var args__10202__auto__ = [];
var len__10195__auto___17877 = arguments.length;
var i__10196__auto___17878 = (0);
while(true){
if((i__10196__auto___17878 < len__10195__auto___17877)){
args__10202__auto__.push((arguments[i__10196__auto___17878]));

var G__17879 = (i__10196__auto___17878 + (1));
i__10196__auto___17878 = G__17879;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__17832_17880 = dommy.core.elem_and_selector(elem_sel);
var elem_17881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17832_17880,(0),null);
var selector_17882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17832_17880,(1),null);
var seq__17835_17883 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__17842_17884 = null;
var count__17843_17885 = (0);
var i__17844_17886 = (0);
while(true){
if((i__17844_17886 < count__17843_17885)){
var vec__17851_17887 = chunk__17842_17884.cljs$core$IIndexed$_nth$arity$2(null,i__17844_17886);
var orig_type_17888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17851_17887,(0),null);
var f_17889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17851_17887,(1),null);
var seq__17845_17890 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_17888,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_17888,cljs.core.identity])));
var chunk__17847_17891 = null;
var count__17848_17892 = (0);
var i__17849_17893 = (0);
while(true){
if((i__17849_17893 < count__17848_17892)){
var vec__17854_17894 = chunk__17847_17891.cljs$core$IIndexed$_nth$arity$2(null,i__17849_17893);
var actual_type_17895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854_17894,(0),null);
var factory_17896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17854_17894,(1),null);
var canonical_f_17897 = (function (){var G__17858 = (factory_17896.cljs$core$IFn$_invoke$arity$1 ? factory_17896.cljs$core$IFn$_invoke$arity$1(f_17889) : factory_17896.call(null,f_17889));
var fexpr__17857 = (cljs.core.truth_(selector_17882)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_17881,selector_17882):cljs.core.identity);
return (fexpr__17857.cljs$core$IFn$_invoke$arity$1 ? fexpr__17857.cljs$core$IFn$_invoke$arity$1(G__17858) : fexpr__17857.call(null,G__17858));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_17881,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17882,actual_type_17895,f_17889], null),canonical_f_17897], 0));

if(cljs.core.truth_(elem_17881.addEventListener)){
elem_17881.addEventListener(cljs.core.name(actual_type_17895),canonical_f_17897);
} else {
elem_17881.attachEvent(cljs.core.name(actual_type_17895),canonical_f_17897);
}

var G__17898 = seq__17845_17890;
var G__17899 = chunk__17847_17891;
var G__17900 = count__17848_17892;
var G__17901 = (i__17849_17893 + (1));
seq__17845_17890 = G__17898;
chunk__17847_17891 = G__17899;
count__17848_17892 = G__17900;
i__17849_17893 = G__17901;
continue;
} else {
var temp__5457__auto___17902 = cljs.core.seq(seq__17845_17890);
if(temp__5457__auto___17902){
var seq__17845_17903__$1 = temp__5457__auto___17902;
if(cljs.core.chunked_seq_QMARK_(seq__17845_17903__$1)){
var c__9847__auto___17904 = cljs.core.chunk_first(seq__17845_17903__$1);
var G__17905 = cljs.core.chunk_rest(seq__17845_17903__$1);
var G__17906 = c__9847__auto___17904;
var G__17907 = cljs.core.count(c__9847__auto___17904);
var G__17908 = (0);
seq__17845_17890 = G__17905;
chunk__17847_17891 = G__17906;
count__17848_17892 = G__17907;
i__17849_17893 = G__17908;
continue;
} else {
var vec__17859_17909 = cljs.core.first(seq__17845_17903__$1);
var actual_type_17910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859_17909,(0),null);
var factory_17911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17859_17909,(1),null);
var canonical_f_17912 = (function (){var G__17863 = (factory_17911.cljs$core$IFn$_invoke$arity$1 ? factory_17911.cljs$core$IFn$_invoke$arity$1(f_17889) : factory_17911.call(null,f_17889));
var fexpr__17862 = (cljs.core.truth_(selector_17882)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_17881,selector_17882):cljs.core.identity);
return (fexpr__17862.cljs$core$IFn$_invoke$arity$1 ? fexpr__17862.cljs$core$IFn$_invoke$arity$1(G__17863) : fexpr__17862.call(null,G__17863));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_17881,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17882,actual_type_17910,f_17889], null),canonical_f_17912], 0));

if(cljs.core.truth_(elem_17881.addEventListener)){
elem_17881.addEventListener(cljs.core.name(actual_type_17910),canonical_f_17912);
} else {
elem_17881.attachEvent(cljs.core.name(actual_type_17910),canonical_f_17912);
}

var G__17913 = cljs.core.next(seq__17845_17903__$1);
var G__17914 = null;
var G__17915 = (0);
var G__17916 = (0);
seq__17845_17890 = G__17913;
chunk__17847_17891 = G__17914;
count__17848_17892 = G__17915;
i__17849_17893 = G__17916;
continue;
}
} else {
}
}
break;
}

var G__17917 = seq__17835_17883;
var G__17918 = chunk__17842_17884;
var G__17919 = count__17843_17885;
var G__17920 = (i__17844_17886 + (1));
seq__17835_17883 = G__17917;
chunk__17842_17884 = G__17918;
count__17843_17885 = G__17919;
i__17844_17886 = G__17920;
continue;
} else {
var temp__5457__auto___17921 = cljs.core.seq(seq__17835_17883);
if(temp__5457__auto___17921){
var seq__17835_17922__$1 = temp__5457__auto___17921;
if(cljs.core.chunked_seq_QMARK_(seq__17835_17922__$1)){
var c__9847__auto___17923 = cljs.core.chunk_first(seq__17835_17922__$1);
var G__17924 = cljs.core.chunk_rest(seq__17835_17922__$1);
var G__17925 = c__9847__auto___17923;
var G__17926 = cljs.core.count(c__9847__auto___17923);
var G__17927 = (0);
seq__17835_17883 = G__17924;
chunk__17842_17884 = G__17925;
count__17843_17885 = G__17926;
i__17844_17886 = G__17927;
continue;
} else {
var vec__17864_17928 = cljs.core.first(seq__17835_17922__$1);
var orig_type_17929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17864_17928,(0),null);
var f_17930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17864_17928,(1),null);
var seq__17836_17931 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_17929,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_17929,cljs.core.identity])));
var chunk__17838_17932 = null;
var count__17839_17933 = (0);
var i__17840_17934 = (0);
while(true){
if((i__17840_17934 < count__17839_17933)){
var vec__17867_17935 = chunk__17838_17932.cljs$core$IIndexed$_nth$arity$2(null,i__17840_17934);
var actual_type_17936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17867_17935,(0),null);
var factory_17937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17867_17935,(1),null);
var canonical_f_17938 = (function (){var G__17871 = (factory_17937.cljs$core$IFn$_invoke$arity$1 ? factory_17937.cljs$core$IFn$_invoke$arity$1(f_17930) : factory_17937.call(null,f_17930));
var fexpr__17870 = (cljs.core.truth_(selector_17882)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_17881,selector_17882):cljs.core.identity);
return (fexpr__17870.cljs$core$IFn$_invoke$arity$1 ? fexpr__17870.cljs$core$IFn$_invoke$arity$1(G__17871) : fexpr__17870.call(null,G__17871));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_17881,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17882,actual_type_17936,f_17930], null),canonical_f_17938], 0));

if(cljs.core.truth_(elem_17881.addEventListener)){
elem_17881.addEventListener(cljs.core.name(actual_type_17936),canonical_f_17938);
} else {
elem_17881.attachEvent(cljs.core.name(actual_type_17936),canonical_f_17938);
}

var G__17939 = seq__17836_17931;
var G__17940 = chunk__17838_17932;
var G__17941 = count__17839_17933;
var G__17942 = (i__17840_17934 + (1));
seq__17836_17931 = G__17939;
chunk__17838_17932 = G__17940;
count__17839_17933 = G__17941;
i__17840_17934 = G__17942;
continue;
} else {
var temp__5457__auto___17943__$1 = cljs.core.seq(seq__17836_17931);
if(temp__5457__auto___17943__$1){
var seq__17836_17944__$1 = temp__5457__auto___17943__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17836_17944__$1)){
var c__9847__auto___17945 = cljs.core.chunk_first(seq__17836_17944__$1);
var G__17946 = cljs.core.chunk_rest(seq__17836_17944__$1);
var G__17947 = c__9847__auto___17945;
var G__17948 = cljs.core.count(c__9847__auto___17945);
var G__17949 = (0);
seq__17836_17931 = G__17946;
chunk__17838_17932 = G__17947;
count__17839_17933 = G__17948;
i__17840_17934 = G__17949;
continue;
} else {
var vec__17872_17950 = cljs.core.first(seq__17836_17944__$1);
var actual_type_17951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872_17950,(0),null);
var factory_17952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17872_17950,(1),null);
var canonical_f_17953 = (function (){var G__17876 = (factory_17952.cljs$core$IFn$_invoke$arity$1 ? factory_17952.cljs$core$IFn$_invoke$arity$1(f_17930) : factory_17952.call(null,f_17930));
var fexpr__17875 = (cljs.core.truth_(selector_17882)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_17881,selector_17882):cljs.core.identity);
return (fexpr__17875.cljs$core$IFn$_invoke$arity$1 ? fexpr__17875.cljs$core$IFn$_invoke$arity$1(G__17876) : fexpr__17875.call(null,G__17876));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_17881,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_17882,actual_type_17951,f_17930], null),canonical_f_17953], 0));

if(cljs.core.truth_(elem_17881.addEventListener)){
elem_17881.addEventListener(cljs.core.name(actual_type_17951),canonical_f_17953);
} else {
elem_17881.attachEvent(cljs.core.name(actual_type_17951),canonical_f_17953);
}

var G__17954 = cljs.core.next(seq__17836_17944__$1);
var G__17955 = null;
var G__17956 = (0);
var G__17957 = (0);
seq__17836_17931 = G__17954;
chunk__17838_17932 = G__17955;
count__17839_17933 = G__17956;
i__17840_17934 = G__17957;
continue;
}
} else {
}
}
break;
}

var G__17958 = cljs.core.next(seq__17835_17922__$1);
var G__17959 = null;
var G__17960 = (0);
var G__17961 = (0);
seq__17835_17883 = G__17958;
chunk__17842_17884 = G__17959;
count__17843_17885 = G__17960;
i__17844_17886 = G__17961;
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

dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq17830){
var G__17831 = cljs.core.first(seq17830);
var seq17830__$1 = cljs.core.next(seq17830);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17831,seq17830__$1);
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
var args__10202__auto__ = [];
var len__10195__auto___18001 = arguments.length;
var i__10196__auto___18002 = (0);
while(true){
if((i__10196__auto___18002 < len__10195__auto___18001)){
args__10202__auto__.push((arguments[i__10196__auto___18002]));

var G__18003 = (i__10196__auto___18002 + (1));
i__10196__auto___18002 = G__18003;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__17964_18004 = dommy.core.elem_and_selector(elem_sel);
var elem_18005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964_18004,(0),null);
var selector_18006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17964_18004,(1),null);
var seq__17967_18007 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__17974_18008 = null;
var count__17975_18009 = (0);
var i__17976_18010 = (0);
while(true){
if((i__17976_18010 < count__17975_18009)){
var vec__17983_18011 = chunk__17974_18008.cljs$core$IIndexed$_nth$arity$2(null,i__17976_18010);
var orig_type_18012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983_18011,(0),null);
var f_18013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17983_18011,(1),null);
var seq__17977_18014 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18012,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_18012,cljs.core.identity])));
var chunk__17979_18015 = null;
var count__17980_18016 = (0);
var i__17981_18017 = (0);
while(true){
if((i__17981_18017 < count__17980_18016)){
var vec__17986_18018 = chunk__17979_18015.cljs$core$IIndexed$_nth$arity$2(null,i__17981_18017);
var actual_type_18019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17986_18018,(0),null);
var __18020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17986_18018,(1),null);
var keys_18021 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18006,actual_type_18019,f_18013], null);
var canonical_f_18022 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18005),keys_18021);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18005,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_18021], 0));

if(cljs.core.truth_(elem_18005.removeEventListener)){
elem_18005.removeEventListener(cljs.core.name(actual_type_18019),canonical_f_18022);
} else {
elem_18005.detachEvent(cljs.core.name(actual_type_18019),canonical_f_18022);
}

var G__18023 = seq__17977_18014;
var G__18024 = chunk__17979_18015;
var G__18025 = count__17980_18016;
var G__18026 = (i__17981_18017 + (1));
seq__17977_18014 = G__18023;
chunk__17979_18015 = G__18024;
count__17980_18016 = G__18025;
i__17981_18017 = G__18026;
continue;
} else {
var temp__5457__auto___18027 = cljs.core.seq(seq__17977_18014);
if(temp__5457__auto___18027){
var seq__17977_18028__$1 = temp__5457__auto___18027;
if(cljs.core.chunked_seq_QMARK_(seq__17977_18028__$1)){
var c__9847__auto___18029 = cljs.core.chunk_first(seq__17977_18028__$1);
var G__18030 = cljs.core.chunk_rest(seq__17977_18028__$1);
var G__18031 = c__9847__auto___18029;
var G__18032 = cljs.core.count(c__9847__auto___18029);
var G__18033 = (0);
seq__17977_18014 = G__18030;
chunk__17979_18015 = G__18031;
count__17980_18016 = G__18032;
i__17981_18017 = G__18033;
continue;
} else {
var vec__17989_18034 = cljs.core.first(seq__17977_18028__$1);
var actual_type_18035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989_18034,(0),null);
var __18036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17989_18034,(1),null);
var keys_18037 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18006,actual_type_18035,f_18013], null);
var canonical_f_18038 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18005),keys_18037);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18005,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_18037], 0));

if(cljs.core.truth_(elem_18005.removeEventListener)){
elem_18005.removeEventListener(cljs.core.name(actual_type_18035),canonical_f_18038);
} else {
elem_18005.detachEvent(cljs.core.name(actual_type_18035),canonical_f_18038);
}

var G__18039 = cljs.core.next(seq__17977_18028__$1);
var G__18040 = null;
var G__18041 = (0);
var G__18042 = (0);
seq__17977_18014 = G__18039;
chunk__17979_18015 = G__18040;
count__17980_18016 = G__18041;
i__17981_18017 = G__18042;
continue;
}
} else {
}
}
break;
}

var G__18043 = seq__17967_18007;
var G__18044 = chunk__17974_18008;
var G__18045 = count__17975_18009;
var G__18046 = (i__17976_18010 + (1));
seq__17967_18007 = G__18043;
chunk__17974_18008 = G__18044;
count__17975_18009 = G__18045;
i__17976_18010 = G__18046;
continue;
} else {
var temp__5457__auto___18047 = cljs.core.seq(seq__17967_18007);
if(temp__5457__auto___18047){
var seq__17967_18048__$1 = temp__5457__auto___18047;
if(cljs.core.chunked_seq_QMARK_(seq__17967_18048__$1)){
var c__9847__auto___18049 = cljs.core.chunk_first(seq__17967_18048__$1);
var G__18050 = cljs.core.chunk_rest(seq__17967_18048__$1);
var G__18051 = c__9847__auto___18049;
var G__18052 = cljs.core.count(c__9847__auto___18049);
var G__18053 = (0);
seq__17967_18007 = G__18050;
chunk__17974_18008 = G__18051;
count__17975_18009 = G__18052;
i__17976_18010 = G__18053;
continue;
} else {
var vec__17992_18054 = cljs.core.first(seq__17967_18048__$1);
var orig_type_18055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17992_18054,(0),null);
var f_18056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17992_18054,(1),null);
var seq__17968_18057 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_18055,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_18055,cljs.core.identity])));
var chunk__17970_18058 = null;
var count__17971_18059 = (0);
var i__17972_18060 = (0);
while(true){
if((i__17972_18060 < count__17971_18059)){
var vec__17995_18061 = chunk__17970_18058.cljs$core$IIndexed$_nth$arity$2(null,i__17972_18060);
var actual_type_18062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17995_18061,(0),null);
var __18063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17995_18061,(1),null);
var keys_18064 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18006,actual_type_18062,f_18056], null);
var canonical_f_18065 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18005),keys_18064);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18005,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_18064], 0));

if(cljs.core.truth_(elem_18005.removeEventListener)){
elem_18005.removeEventListener(cljs.core.name(actual_type_18062),canonical_f_18065);
} else {
elem_18005.detachEvent(cljs.core.name(actual_type_18062),canonical_f_18065);
}

var G__18066 = seq__17968_18057;
var G__18067 = chunk__17970_18058;
var G__18068 = count__17971_18059;
var G__18069 = (i__17972_18060 + (1));
seq__17968_18057 = G__18066;
chunk__17970_18058 = G__18067;
count__17971_18059 = G__18068;
i__17972_18060 = G__18069;
continue;
} else {
var temp__5457__auto___18070__$1 = cljs.core.seq(seq__17968_18057);
if(temp__5457__auto___18070__$1){
var seq__17968_18071__$1 = temp__5457__auto___18070__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17968_18071__$1)){
var c__9847__auto___18072 = cljs.core.chunk_first(seq__17968_18071__$1);
var G__18073 = cljs.core.chunk_rest(seq__17968_18071__$1);
var G__18074 = c__9847__auto___18072;
var G__18075 = cljs.core.count(c__9847__auto___18072);
var G__18076 = (0);
seq__17968_18057 = G__18073;
chunk__17970_18058 = G__18074;
count__17971_18059 = G__18075;
i__17972_18060 = G__18076;
continue;
} else {
var vec__17998_18077 = cljs.core.first(seq__17968_18071__$1);
var actual_type_18078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17998_18077,(0),null);
var __18079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17998_18077,(1),null);
var keys_18080 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_18006,actual_type_18078,f_18056], null);
var canonical_f_18081 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_18005),keys_18080);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_18005,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_18080], 0));

if(cljs.core.truth_(elem_18005.removeEventListener)){
elem_18005.removeEventListener(cljs.core.name(actual_type_18078),canonical_f_18081);
} else {
elem_18005.detachEvent(cljs.core.name(actual_type_18078),canonical_f_18081);
}

var G__18082 = cljs.core.next(seq__17968_18071__$1);
var G__18083 = null;
var G__18084 = (0);
var G__18085 = (0);
seq__17968_18057 = G__18082;
chunk__17970_18058 = G__18083;
count__17971_18059 = G__18084;
i__17972_18060 = G__18085;
continue;
}
} else {
}
}
break;
}

var G__18086 = cljs.core.next(seq__17967_18048__$1);
var G__18087 = null;
var G__18088 = (0);
var G__18089 = (0);
seq__17967_18007 = G__18086;
chunk__17974_18008 = G__18087;
count__17975_18009 = G__18088;
i__17976_18010 = G__18089;
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

dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq17962){
var G__17963 = cljs.core.first(seq17962);
var seq17962__$1 = cljs.core.next(seq17962);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17963,seq17962__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___18105 = arguments.length;
var i__10196__auto___18106 = (0);
while(true){
if((i__10196__auto___18106 < len__10195__auto___18105)){
args__10202__auto__.push((arguments[i__10196__auto___18106]));

var G__18107 = (i__10196__auto___18106 + (1));
i__10196__auto___18106 = G__18107;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__18092_18108 = dommy.core.elem_and_selector(elem_sel);
var elem_18109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092_18108,(0),null);
var selector_18110 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18092_18108,(1),null);
var seq__18095_18111 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__18096_18112 = null;
var count__18097_18113 = (0);
var i__18098_18114 = (0);
while(true){
if((i__18098_18114 < count__18097_18113)){
var vec__18099_18115 = chunk__18096_18112.cljs$core$IIndexed$_nth$arity$2(null,i__18098_18114);
var type_18116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18099_18115,(0),null);
var f_18117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18099_18115,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_18116,((function (seq__18095_18111,chunk__18096_18112,count__18097_18113,i__18098_18114,vec__18099_18115,type_18116,f_18117,vec__18092_18108,elem_18109,selector_18110){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_18116,dommy$core$this_fn], 0));

return (f_18117.cljs$core$IFn$_invoke$arity$1 ? f_18117.cljs$core$IFn$_invoke$arity$1(e) : f_18117.call(null,e));
});})(seq__18095_18111,chunk__18096_18112,count__18097_18113,i__18098_18114,vec__18099_18115,type_18116,f_18117,vec__18092_18108,elem_18109,selector_18110))
], 0));

var G__18118 = seq__18095_18111;
var G__18119 = chunk__18096_18112;
var G__18120 = count__18097_18113;
var G__18121 = (i__18098_18114 + (1));
seq__18095_18111 = G__18118;
chunk__18096_18112 = G__18119;
count__18097_18113 = G__18120;
i__18098_18114 = G__18121;
continue;
} else {
var temp__5457__auto___18122 = cljs.core.seq(seq__18095_18111);
if(temp__5457__auto___18122){
var seq__18095_18123__$1 = temp__5457__auto___18122;
if(cljs.core.chunked_seq_QMARK_(seq__18095_18123__$1)){
var c__9847__auto___18124 = cljs.core.chunk_first(seq__18095_18123__$1);
var G__18125 = cljs.core.chunk_rest(seq__18095_18123__$1);
var G__18126 = c__9847__auto___18124;
var G__18127 = cljs.core.count(c__9847__auto___18124);
var G__18128 = (0);
seq__18095_18111 = G__18125;
chunk__18096_18112 = G__18126;
count__18097_18113 = G__18127;
i__18098_18114 = G__18128;
continue;
} else {
var vec__18102_18129 = cljs.core.first(seq__18095_18123__$1);
var type_18130 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102_18129,(0),null);
var f_18131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102_18129,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_18130,((function (seq__18095_18111,chunk__18096_18112,count__18097_18113,i__18098_18114,vec__18102_18129,type_18130,f_18131,seq__18095_18123__$1,temp__5457__auto___18122,vec__18092_18108,elem_18109,selector_18110){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_18130,dommy$core$this_fn], 0));

return (f_18131.cljs$core$IFn$_invoke$arity$1 ? f_18131.cljs$core$IFn$_invoke$arity$1(e) : f_18131.call(null,e));
});})(seq__18095_18111,chunk__18096_18112,count__18097_18113,i__18098_18114,vec__18102_18129,type_18130,f_18131,seq__18095_18123__$1,temp__5457__auto___18122,vec__18092_18108,elem_18109,selector_18110))
], 0));

var G__18132 = cljs.core.next(seq__18095_18123__$1);
var G__18133 = null;
var G__18134 = (0);
var G__18135 = (0);
seq__18095_18111 = G__18132;
chunk__18096_18112 = G__18133;
count__18097_18113 = G__18134;
i__18098_18114 = G__18135;
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

dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq18090){
var G__18091 = cljs.core.first(seq18090);
var seq18090__$1 = cljs.core.next(seq18090);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18091,seq18090__$1);
});

