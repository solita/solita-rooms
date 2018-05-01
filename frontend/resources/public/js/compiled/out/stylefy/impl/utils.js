// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('garden.color');
goog.require('garden.units');
goog.require('garden.types');
goog.require('garden.compiler');
goog.require('garden.stylesheet');
/**
 * Removes namespaced keywords from a map.
 */
stylefy.impl.utils.filter_props = (function stylefy$impl$utils$filter_props(props){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,props,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace,cljs.core.keys(props)));
});
/**
 * Checks all values in the map and converts all Garden units to CSS.
 */
stylefy.impl.utils.garden_units__GT_to_css = (function stylefy$impl$utils$garden_units__GT_to_css(props){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,next_key){
var value = (next_key.cljs$core$IFn$_invoke$arity$1 ? next_key.cljs$core$IFn$_invoke$arity$1(props) : next_key.call(null,props));
if(((value instanceof garden.types.CSSUnit)) || ((value instanceof garden.color.CSSColor))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,next_key,garden.compiler.render_css(value));
} else {
return result;
}
}),props,cljs.core.keys(props));
});
