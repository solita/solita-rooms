// Compiled by ClojureScript 1.9.946 {}
goog.provide('stylefy.impl.utils');
goog.require('cljs.core');
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
return cljs.core.apply.call(null,cljs.core.dissoc,props,cljs.core.filter.call(null,cljs.core.namespace,cljs.core.keys.call(null,props)));
});
/**
 * Checks all values in the map and converts all Garden units to CSS.
 */
stylefy.impl.utils.garden_units__GT_to_css = (function stylefy$impl$utils$garden_units__GT_to_css(props){
return cljs.core.reduce.call(null,(function (result,next_key){
var value = next_key.call(null,props);
if(((value instanceof garden.types.CSSUnit)) || ((value instanceof garden.color.CSSColor))){
return cljs.core.assoc.call(null,result,next_key,garden.compiler.render_css.call(null,value));
} else {
return result;
}
}),props,cljs.core.keys.call(null,props));
});

//# sourceMappingURL=utils.js.map?rel=1523638681259
