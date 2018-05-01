// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.styles_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.font_faces_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = cljs.core.cst$kw$_SHARP__stylefy_DASH_styles_;
stylefy.impl.dom.stylefy_constant_node_id = cljs.core.cst$kw$_SHARP__stylefy_DASH_constant_DASH_styles_;
stylefy.impl.dom.dom_needs_update_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_use),style_hash);
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node,node_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (style_hash){
return cljs.core.cst$kw$stylefy$impl$dom_SLASH_css.cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash(style_hash));
}),cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_use)));
var keyframes_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css){
return (function (keyframes){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keyframes], 0));
});})(styles_in_css))
,cljs.core.deref(stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css,keyframes_in_css){
return (function (properties){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0));
});})(styles_in_css,keyframes_in_css))
,cljs.core.deref(stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css,keyframes_in_css,font_faces_in_use){
return (function (tag_definition){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_name.cljs$core$IFn$_invoke$arity$1(tag_definition)),cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_properties.cljs$core$IFn$_invoke$arity$1(tag_definition)], null)], 0));
});})(styles_in_css,keyframes_in_css,font_faces_in_use))
,cljs.core.deref(stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use){
return (function (class_definition){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_name.cljs$core$IFn$_invoke$arity$1(class_definition))].join('')),cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_properties.cljs$core$IFn$_invoke$arity$1(class_definition)], null)], 0));
});})(styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use))
,cljs.core.deref(stylefy.impl.dom.custom_classes_in_use));
dommy.core.set_text_BANG_(node_constant,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0))));

return dommy.core.set_text_BANG_(node,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css));
});
stylefy.impl.dom.mark_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_styles_added_in_dom_BANG_(){
return cljs.core.reset_BANG_(stylefy.impl.dom.styles_in_use,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18142_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__18142_SHARP_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_use),p1__18142_SHARP_),cljs.core.cst$kw$stylefy$impl$dom_SLASH_in_DASH_dom_QMARK_,true)]);
}),cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_use)))));
});
stylefy.impl.dom.request_dom_update = (function stylefy$impl$dom$request_dom_update(){
return window.requestAnimationFrame(stylefy.impl.dom.continuously_update_styles_in_dom_BANG_);
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.update_styles_in_dom_BANG_ = (function stylefy$impl$dom$update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_needs_update_QMARK_))){
var node = document.querySelector(dommy.core.selector(stylefy.impl.dom.stylefy_node_id));
var node_constant = document.querySelector(dommy.core.selector(stylefy.impl.dom.stylefy_constant_node_id));
if(cljs.core.truth_((function (){var and__8904__auto__ = node;
if(cljs.core.truth_(and__8904__auto__)){
return node_constant;
} else {
return and__8904__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_(node,node_constant);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,false);

try{stylefy.impl.cache.cache_styles(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (node,node_constant){
return (function (p1__18143_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__18143_SHARP_,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_use),p1__18143_SHARP_),cljs.core.cst$kw$stylefy$impl$dom_SLASH_in_DASH_dom_QMARK_)]);
});})(node,node_constant))
,cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_use)))));
}catch (e18144){var e_18145 = e18144;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_18145)].join(''));

}
return stylefy.impl.dom.mark_styles_added_in_dom_BANG_();
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
} else {
return null;
}
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.continuously_update_styles_in_dom_BANG_ = (function stylefy$impl$dom$continuously_update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_needs_update_QMARK_))){
stylefy.impl.dom.update_styles_in_dom_BANG_();
} else {
}

return stylefy.impl.dom.request_dom_update();
});
stylefy.impl.dom.init_dom_update = (function stylefy$impl$dom$init_dom_update(){
return stylefy.impl.dom.continuously_update_styles_in_dom_BANG_();
});
stylefy.impl.dom.init_styles_in_use = (function stylefy$impl$dom$init_styles_in_use(options){
if(cljs.core.truth_(cljs.core.cst$kw$use_DASH_caching_QMARK_.cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.cache.use_caching_BANG_(cljs.core.cst$kw$cache_DASH_options.cljs$core$IFn$_invoke$arity$1(options));

var temp__5457__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_styles = temp__5457__auto__;
cljs.core.reset_BANG_(stylefy.impl.dom.styles_in_use,(function (){var or__8916__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return stylefy.impl.dom.update_styles_in_dom_BANG_();
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.dom.convert_stylefy_vendors_to_garden = (function stylefy$impl$dom$convert_stylefy_vendors_to_garden(props){
var temp__5457__auto__ = cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var vendors = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$vendors,vendors,cljs.core.cst$kw$auto_DASH_prefix,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.dom.convert_stylefy_modes_garden = (function stylefy$impl$dom$convert_stylefy_modes_garden(props){
var modes = cljs.core.cst$kw$stylefy$core_SLASH_mode.cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (modes){
return (function (p1__18146_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18146_SHARP_)].join('')),(p1__18146_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18146_SHARP_.cljs$core$IFn$_invoke$arity$1(modes) : p1__18146_SHARP_.call(null,modes))], null);
});})(modes))
,cljs.core.keys(modes));
});
stylefy.impl.dom.convert_base_style = (function stylefy$impl$dom$convert_base_style(p__18147,options){
var map__18148 = p__18147;
var map__18148__$1 = ((((!((map__18148 == null)))?((((map__18148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18148.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18148):map__18148);
var style = map__18148__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18148__$1,cljs.core.cst$kw$hash);
var style_props = stylefy.impl.utils.filter_props(props);
var class_selector = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden(props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden(props);
var garden_options = (function (){var or__8916__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0));
return css_class;
});
stylefy.impl.dom.convert_media_queries = (function stylefy$impl$dom$convert_media_queries(p__18150,options){
var map__18151 = p__18150;
var map__18151__$1 = ((((!((map__18151 == null)))?((((map__18151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18151):map__18151);
var style = map__18151__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18151__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18151__$1,cljs.core.cst$kw$hash);
var class_selector = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var stylefy_media_queries = cljs.core.cst$kw$stylefy$core_SLASH_media.cljs$core$IFn$_invoke$arity$1(props);
var css_media_queries = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (class_selector,stylefy_media_queries,map__18151,map__18151__$1,style,props,hash){
return (function (media_query){
var media_query_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stylefy_media_queries,media_query);
var style_props = stylefy.impl.utils.filter_props(media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden(media_query_props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden(media_query_props);
var garden_options = (function (){var or__8916__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(media_query,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(garden_class_definition,garden_pseudo_classes)], 0))], 0));
});})(class_selector,stylefy_media_queries,map__18151,map__18151__$1,style,props,hash))
,cljs.core.keys(stylefy_media_queries));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_media_queries);
});
stylefy.impl.dom.convert_supports_rules = (function stylefy$impl$dom$convert_supports_rules(p__18153,options){
var map__18154 = p__18153;
var map__18154__$1 = ((((!((map__18154 == null)))?((((map__18154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18154.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18154):map__18154);
var style = map__18154__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18154__$1,cljs.core.cst$kw$hash);
var class_selector = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var stylefy_supports = cljs.core.cst$kw$stylefy$core_SLASH_supports.cljs$core$IFn$_invoke$arity$1(props);
var css_supports = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (class_selector,stylefy_supports,map__18154,map__18154__$1,style,props,hash){
return (function (supports_selector){
var supports_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(stylefy_supports,supports_selector);
var style_props = stylefy.impl.utils.filter_props(supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden(style_props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden(supports_props);
var garden_options = (function (){var or__8916__auto__ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options,garden_vendors], 0));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.dom.convert_media_queries(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,supports_props,cljs.core.cst$kw$hash,hash], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null)], 0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
});})(class_selector,stylefy_supports,map__18154,map__18154__$1,style,props,hash))
,cljs.core.keys(stylefy_supports));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,css_supports);
});
/**
 * Options are sent directly to Garden
 */
stylefy.impl.dom.style__GT_css = (function stylefy$impl$dom$style__GT_css(var_args){
var G__18157 = arguments.length;
switch (G__18157) {
case 1:
return stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$2(style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__18158,options){
var map__18159 = p__18158;
var map__18159__$1 = ((((!((map__18159 == null)))?((((map__18159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18159):map__18159);
var style = map__18159__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,cljs.core.cst$kw$hash);
var css_class = stylefy.impl.dom.convert_base_style(style,options);
var css_media_queries = stylefy.impl.dom.convert_media_queries(style,options);
var css_supports = stylefy.impl.dom.convert_supports_rules(style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports)].join('');
});

stylefy.impl.dom.style__GT_css.cljs$lang$maxFixedArity = 2;

/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__18162){
var map__18163 = p__18162;
var map__18163__$1 = ((((!((map__18163 == null)))?((((map__18163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18163):map__18163);
var style = map__18163__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18163__$1,cljs.core.cst$kw$hash);
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var style_to_be_saved = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,style_css);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.styles_in_use,cljs.core.assoc,hash,style_to_be_saved);

return cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.cst$kw$stylefy$impl$dom_SLASH_in_DASH_dom_QMARK_.cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash(style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__10202__auto__ = [];
var len__10195__auto___18167 = arguments.length;
var i__10196__auto___18168 = (0);
while(true){
if((i__10196__auto___18168 < len__10195__auto___18167)){
args__10202__auto__.push((arguments[i__10196__auto___18168]));

var G__18169 = (i__10196__auto___18168 + (1));
i__10196__auto___18168 = G__18169;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.keyframes_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq18165){
var G__18166 = cljs.core.first(seq18165);
var seq18165__$1 = cljs.core.next(seq18165);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__18166,seq18165__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.font_faces_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_name,name,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_properties,properties], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,custom_tag_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_name,name,cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_properties,properties], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,custom_class_definition);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_class_definition;
});
