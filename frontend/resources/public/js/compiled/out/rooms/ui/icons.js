// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.icons');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.styles.input');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('cljs_time.core');
goog.require('reagent.core');
goog.require('rooms.dom');
rooms.ui.icons.default_icon_size = (20);
rooms.ui.icons.text_and_icon = (function rooms$ui$icons$text_and_icon(var_args){
var G__26107 = arguments.length;
switch (G__26107) {
case 2:
return rooms.ui.icons.text_and_icon.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rooms.ui.icons.text_and_icon.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rooms.ui.icons.text_and_icon.cljs$core$IFn$_invoke$arity$2 = (function (text,icon){
return rooms.ui.icons.text_and_icon.cljs$core$IFn$_invoke$arity$3(text,icon,null);
});

rooms.ui.icons.text_and_icon.cljs$core$IFn$_invoke$arity$3 = (function (text,icon,size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$margin_DASH_right,"0.5em"], null)),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,cljs.core.cst$kw$relative,cljs.core.cst$kw$top,"-2px"], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null),(function (){var temp__5457__auto__ = cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(size);
if(cljs.core.truth_(temp__5457__auto__)){
var width = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.cst$kw$height.cljs$core$IFn$_invoke$arity$1(size);
if(cljs.core.truth_(temp__5457__auto__)){
var height = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,height], null);
} else {
return null;
}
})()], 0)))], null)], null);
});

rooms.ui.icons.text_and_icon.cljs$lang$maxFixedArity = 3;

