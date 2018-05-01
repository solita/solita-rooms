// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.dropdown');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('rooms.language');
goog.require('rooms.styles.utils');
goog.require('reagent.core');
rooms.ui.dropdown.dropdown = (function rooms$ui$dropdown$dropdown(selected,selected_style,selected_fn,values){
var visible_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return ((function (visible_QMARK_){
return (function (selected__$1,selected_style__$1,selected_fn__$1,values__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.dropdown.container),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([selected_style__$1,rooms.styles.utils.clickable], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (visible_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(visible_QMARK_,cljs.core.not);
});})(visible_QMARK_))
], null)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(selected__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.dropdown.dropdown_triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-down-white.svg"].join('')], null))], null)], null),(cljs.core.truth_(cljs.core.deref(visible_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.dropdown.dropdown),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (visible_QMARK_){
return (function (i__10276__auto__,item__10277__auto__){
if(cljs.core.contains_QMARK_(cljs.core.meta(item__10277__auto__),cljs.core.cst$kw$key)){
return item__10277__auto__;
} else {
return cljs.core.with_meta(item__10277__auto__,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["for*26151",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__10276__auto__)].join('')], null));
}
});})(visible_QMARK_))
,(function (){var iter__9798__auto__ = ((function (visible_QMARK_){
return (function rooms$ui$dropdown$dropdown_$_iter__26152(s__26153){
return (new cljs.core.LazySeq(null,((function (visible_QMARK_){
return (function (){
var s__26153__$1 = s__26153;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__26153__$1);
if(temp__5457__auto__){
var s__26153__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__26153__$2)){
var c__9796__auto__ = cljs.core.chunk_first(s__26153__$2);
var size__9797__auto__ = cljs.core.count(c__9796__auto__);
var b__26155 = cljs.core.chunk_buffer(size__9797__auto__);
if((function (){var i__26154 = (0);
while(true){
if((i__26154 < size__9797__auto__)){
var value = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__9796__auto__,i__26154);
cljs.core.chunk_append(b__26155,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.dropdown.item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (i__26154,value,c__9796__auto__,size__9797__auto__,b__26155,s__26153__$2,temp__5457__auto__,visible_QMARK_){
return (function (){
(selected_fn__$1.cljs$core$IFn$_invoke$arity$1 ? selected_fn__$1.cljs$core$IFn$_invoke$arity$1(value) : selected_fn__$1.call(null,value));

return cljs.core.reset_BANG_(visible_QMARK_,false);
});})(i__26154,value,c__9796__auto__,size__9797__auto__,b__26155,s__26153__$2,temp__5457__auto__,visible_QMARK_))
], null)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(value)], null));

var G__26156 = (i__26154 + (1));
i__26154 = G__26156;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__26155),rooms$ui$dropdown$dropdown_$_iter__26152(cljs.core.chunk_rest(s__26153__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__26155),null);
}
} else {
var value = cljs.core.first(s__26153__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.dropdown.item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,((function (value,s__26153__$2,temp__5457__auto__,visible_QMARK_){
return (function (){
(selected_fn__$1.cljs$core$IFn$_invoke$arity$1 ? selected_fn__$1.cljs$core$IFn$_invoke$arity$1(value) : selected_fn__$1.call(null,value));

return cljs.core.reset_BANG_(visible_QMARK_,false);
});})(value,s__26153__$2,temp__5457__auto__,visible_QMARK_))
], null)),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(value)], null),rooms$ui$dropdown$dropdown_$_iter__26152(cljs.core.rest(s__26153__$2)));
}
} else {
return null;
}
break;
}
});})(visible_QMARK_))
,null,null));
});})(visible_QMARK_))
;
return iter__9798__auto__(values__$1);
})()))], null):null)], null);
});
;})(visible_QMARK_))
});
