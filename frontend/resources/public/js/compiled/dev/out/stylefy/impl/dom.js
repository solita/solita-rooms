// Compiled by ClojureScript 1.9.946 {}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.styles_in_use = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.font_faces_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = new cljs.core.Keyword(null,"#_stylefy-styles_","#_stylefy-styles_",-1230236272);
stylefy.impl.dom.stylefy_constant_node_id = new cljs.core.Keyword(null,"#_stylefy-constant-styles_","#_stylefy-constant-styles_",1798573471);
stylefy.impl.dom.dom_needs_update_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
return cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),style_hash);
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node,node_constant){
var styles_in_css = cljs.core.map.call(null,(function (style_hash){
return new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash));
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)));
var keyframes_in_css = cljs.core.map.call(null,((function (styles_in_css){
return (function (keyframes){
return garden.core.css.call(null,keyframes);
});})(styles_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css){
return (function (properties){
return garden.core.css.call(null,properties);
});})(styles_in_css,keyframes_in_css))
,cljs.core.deref.call(null,stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use){
return (function (tag_definition){
return garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087).cljs$core$IFn$_invoke$arity$1(tag_definition)),new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703).cljs$core$IFn$_invoke$arity$1(tag_definition)], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.call(null,((function (styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use){
return (function (class_definition){
return garden.core.css.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126).cljs$core$IFn$_invoke$arity$1(class_definition))].join('')),new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216).cljs$core$IFn$_invoke$arity$1(class_definition)], null));
});})(styles_in_css,keyframes_in_css,font_faces_in_use,custom_tags_in_use))
,cljs.core.deref.call(null,stylefy.impl.dom.custom_classes_in_use));
dommy.core.set_text_BANG_.call(null,node_constant,cljs.core.apply.call(null,cljs.core.str,cljs.core.concat.call(null,font_faces_in_use,keyframes_in_css,custom_tags_in_use,custom_classes_in_use)));

return dommy.core.set_text_BANG_.call(null,node,cljs.core.apply.call(null,cljs.core.str,styles_in_css));
});
stylefy.impl.dom.mark_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_styles_added_in_dom_BANG_(){
return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,(function (p1__61375_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__61375_SHARP_,cljs.core.assoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__61375_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144),true)]);
}),cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
});
stylefy.impl.dom.request_dom_update = (function stylefy$impl$dom$request_dom_update(){
return window.requestAnimationFrame(stylefy.impl.dom.continuously_update_styles_in_dom_BANG_);
});
/**
 * Updates style tag if needed.
 */
stylefy.impl.dom.update_styles_in_dom_BANG_ = (function stylefy$impl$dom$update_styles_in_dom_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_needs_update_QMARK_))){
var node = document.querySelector(dommy.core.selector.call(null,stylefy.impl.dom.stylefy_node_id));
var node_constant = document.querySelector(dommy.core.selector.call(null,stylefy.impl.dom.stylefy_constant_node_id));
if(cljs.core.truth_((function (){var and__30167__auto__ = node;
if(cljs.core.truth_(and__30167__auto__)){
return node_constant;
} else {
return and__30167__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_.call(null,node,node_constant);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,false);

try{stylefy.impl.cache.cache_styles.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (node,node_constant){
return (function (p1__61376_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__61376_SHARP_,cljs.core.dissoc.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use),p1__61376_SHARP_),new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144))]);
});})(node,node_constant))
,cljs.core.keys.call(null,cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use)))));
}catch (e61377){var e_61378 = e61377;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_61378)].join(''));

}
return stylefy.impl.dom.mark_styles_added_in_dom_BANG_.call(null);
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
if(cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.dom.dom_needs_update_QMARK_))){
stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
} else {
}

return stylefy.impl.dom.request_dom_update.call(null);
});
stylefy.impl.dom.init_dom_update = (function stylefy$impl$dom$init_dom_update(){
return stylefy.impl.dom.continuously_update_styles_in_dom_BANG_.call(null);
});
stylefy.impl.dom.init_styles_in_use = (function stylefy$impl$dom$init_styles_in_use(options){
if(cljs.core.truth_(new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options))){
stylefy.impl.cache.use_caching_BANG_.call(null,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options));

var temp__5457__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_styles = temp__5457__auto__;
cljs.core.reset_BANG_.call(null,stylefy.impl.dom.styles_in_use,(function (){var or__30179__auto__ = stylefy.impl.cache.read_cache_value.call(null,stylefy.impl.cache.cache_key_styles);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.dom.convert_stylefy_vendors_to_garden = (function stylefy$impl$dom$convert_stylefy_vendors_to_garden(props){
var temp__5457__auto__ = new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5457__auto__)){
var vendors = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.dom.convert_stylefy_modes_garden = (function stylefy$impl$dom$convert_stylefy_modes_garden(props){
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.mapv.call(null,((function (modes){
return (function (p1__61379_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__61379_SHARP_)].join('')),p1__61379_SHARP_.call(null,modes)], null);
});})(modes))
,cljs.core.keys.call(null,modes));
});
stylefy.impl.dom.convert_base_style = (function stylefy$impl$dom$convert_base_style(p__61380,options){
var map__61381 = p__61380;
var map__61381__$1 = ((((!((map__61381 == null)))?((((map__61381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61381.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61381):map__61381);
var style = map__61381__$1;
var props = cljs.core.get.call(null,map__61381__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__61381__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var style_props = stylefy.impl.utils.filter_props.call(null,props);
var class_selector = cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden.call(null,props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden.call(null,props);
var garden_options = (function (){var or__30179__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.call(null,garden_options,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes));
return css_class;
});
stylefy.impl.dom.convert_media_queries = (function stylefy$impl$dom$convert_media_queries(p__61383,options){
var map__61384 = p__61383;
var map__61384__$1 = ((((!((map__61384 == null)))?((((map__61384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61384):map__61384);
var style = map__61384__$1;
var props = cljs.core.get.call(null,map__61384__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__61384__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var class_selector = cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var stylefy_media_queries = new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(props);
var css_media_queries = cljs.core.map.call(null,((function (class_selector,stylefy_media_queries,map__61384,map__61384__$1,style,props,hash){
return (function (media_query){
var media_query_props = cljs.core.get.call(null,stylefy_media_queries,media_query);
var style_props = stylefy.impl.utils.filter_props.call(null,media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden.call(null,media_query_props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden.call(null,media_query_props);
var garden_options = (function (){var or__30179__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.call(null,garden_options,garden.stylesheet.at_media.call(null,media_query,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes)));
});})(class_selector,stylefy_media_queries,map__61384,map__61384__$1,style,props,hash))
,cljs.core.keys.call(null,stylefy_media_queries));
return cljs.core.apply.call(null,cljs.core.str,css_media_queries);
});
stylefy.impl.dom.convert_supports_rules = (function stylefy$impl$dom$convert_supports_rules(p__61386,options){
var map__61387 = p__61386;
var map__61387__$1 = ((((!((map__61387 == null)))?((((map__61387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61387.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61387):map__61387);
var style = map__61387__$1;
var props = cljs.core.get.call(null,map__61387__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__61387__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var class_selector = cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
var stylefy_supports = new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(props);
var css_supports = cljs.core.map.call(null,((function (class_selector,stylefy_supports,map__61387,map__61387__$1,style,props,hash){
return (function (supports_selector){
var supports_props = cljs.core.get.call(null,stylefy_supports,supports_selector);
var style_props = stylefy.impl.utils.filter_props.call(null,supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null);
var garden_pseudo_classes = stylefy.impl.dom.convert_stylefy_modes_garden.call(null,style_props);
var garden_vendors = stylefy.impl.dom.convert_stylefy_vendors_to_garden.call(null,supports_props);
var garden_options = (function (){var or__30179__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.dom.convert_media_queries.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),supports_props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.call(null,garden_options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [class_selector,style_props], null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
});})(class_selector,stylefy_supports,map__61387,map__61387__$1,style,props,hash))
,cljs.core.keys.call(null,stylefy_supports));
return cljs.core.apply.call(null,cljs.core.str,css_supports);
});
/**
 * Options are sent directly to Garden
 */
stylefy.impl.dom.style__GT_css = (function stylefy$impl$dom$style__GT_css(var_args){
var G__61390 = arguments.length;
switch (G__61390) {
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
return stylefy.impl.dom.style__GT_css.call(null,style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.impl.dom.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__61391,options){
var map__61392 = p__61391;
var map__61392__$1 = ((((!((map__61392 == null)))?((((map__61392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61392):map__61392);
var style = map__61392__$1;
var props = cljs.core.get.call(null,map__61392__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__61392__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var css_class = stylefy.impl.dom.convert_base_style.call(null,style,options);
var css_media_queries = stylefy.impl.dom.convert_media_queries.call(null,style,options);
var css_supports = stylefy.impl.dom.convert_supports_rules.call(null,style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports)].join('');
});

stylefy.impl.dom.style__GT_css.cljs$lang$maxFixedArity = 2;

/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__61395){
var map__61396 = p__61395;
var map__61396__$1 = ((((!((map__61396 == null)))?((((map__61396.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61396.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61396):map__61396);
var style = map__61396__$1;
var props = cljs.core.get.call(null,map__61396__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__61396__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.dom.style__GT_css.call(null,style);
var style_to_be_saved = cljs.core.assoc.call(null,props,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061),style_css);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.styles_in_use,cljs.core.assoc,hash,style_to_be_saved);

return cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$.call(null,new cljs.core.Keyword("stylefy.impl.dom","in-dom?","stylefy.impl.dom/in-dom?",-1380916144).cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.style_by_hash.call(null,style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__31465__auto__ = [];
var len__31458__auto___61400 = arguments.length;
var i__31459__auto___61401 = (0);
while(true){
if((i__31459__auto___61401 < len__31458__auto___61400)){
args__31465__auto__.push((arguments[i__31459__auto___61401]));

var G__61402 = (i__31459__auto___61401 + (1));
i__31459__auto___61401 = G__61402;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.call(null,garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.keyframes_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq61398){
var G__61399 = cljs.core.first.call(null,seq61398);
var seq61398__$1 = cljs.core.next.call(null,seq61398);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__61399,seq61398__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.call(null,properties);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.font_faces_in_use,cljs.core.conj,garden_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","tag-name","stylefy.impl.dom/tag-name",-639357087),name,new cljs.core.Keyword("stylefy.impl.dom","tag-properties","stylefy.impl.dom/tag-properties",327168703),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,custom_tag_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.impl.dom","class-name","stylefy.impl.dom/class-name",1864711126),name,new cljs.core.Keyword("stylefy.impl.dom","class-properties","stylefy.impl.dom/class-properties",-2034606216),properties], null);
cljs.core.swap_BANG_.call(null,stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,custom_class_definition);

cljs.core.reset_BANG_.call(null,stylefy.impl.dom.dom_needs_update_QMARK_,true);

return custom_class_definition;
});

//# sourceMappingURL=dom.js.map?rel=1523638681340
