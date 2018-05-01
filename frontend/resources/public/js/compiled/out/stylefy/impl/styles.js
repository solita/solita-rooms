// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.utils');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(style)),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
return ["_stylefy_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(style,cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles)))].join('');
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__18172){
var map__18173 = p__18172;
var map__18173__$1 = ((((!((map__18173 == null)))?((((map__18173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18173.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18173):map__18173);
var style = map__18173__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18173__$1,cljs.core.cst$kw$hash);
stylefy.impl.dom.save_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$hash,hash], null));

var seq__18175 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(props)));
var chunk__18176 = null;
var count__18177 = (0);
var i__18178 = (0);
while(true){
if((i__18178 < count__18177)){
var sub_style = chunk__18176.cljs$core$IIndexed$_nth$arity$2(null,i__18178);
var G__18179_18181 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,sub_style,cljs.core.cst$kw$hash,stylefy.impl.styles.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__18179_18181) : stylefy.impl.styles.create_style_BANG_.call(null,G__18179_18181));

var G__18182 = seq__18175;
var G__18183 = chunk__18176;
var G__18184 = count__18177;
var G__18185 = (i__18178 + (1));
seq__18175 = G__18182;
chunk__18176 = G__18183;
count__18177 = G__18184;
i__18178 = G__18185;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18175);
if(temp__5457__auto__){
var seq__18175__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18175__$1)){
var c__9847__auto__ = cljs.core.chunk_first(seq__18175__$1);
var G__18186 = cljs.core.chunk_rest(seq__18175__$1);
var G__18187 = c__9847__auto__;
var G__18188 = cljs.core.count(c__9847__auto__);
var G__18189 = (0);
seq__18175 = G__18186;
chunk__18176 = G__18187;
count__18177 = G__18188;
i__18178 = G__18189;
continue;
} else {
var sub_style = cljs.core.first(seq__18175__$1);
var G__18180_18190 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,sub_style,cljs.core.cst$kw$hash,stylefy.impl.styles.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__18180_18190) : stylefy.impl.styles.create_style_BANG_.call(null,G__18180_18190));

var G__18191 = cljs.core.next(seq__18175__$1);
var G__18192 = null;
var G__18193 = (0);
var G__18194 = (0);
seq__18175 = G__18191;
chunk__18176 = G__18192;
count__18177 = G__18193;
i__18178 = G__18194;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var with_classes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(style),cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_props(options);
var html_attributes_class = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(html_attributes);
if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if(((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_(html_attributes_class))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes_class], 0)))].join('')),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

var contains_media_queries_QMARK_ = !((cljs.core.cst$kw$stylefy$core_SLASH_media.cljs$core$IFn$_invoke$arity$1(style) == null));
var contains_feature_queries_QMARK_ = !((cljs.core.cst$kw$stylefy$core_SLASH_supports.cljs$core$IFn$_invoke$arity$1(style) == null));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hover,null], null), null);
var contains_modes_not_excluded_QMARK_ = !(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),cljs.core.keys(cljs.core.cst$kw$stylefy$core_SLASH_mode.cljs$core$IFn$_invoke$arity$1(style)))));
var return_map = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(((html_attributes_class == null))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):((cljs.core.vector_QMARK_(html_attributes_class))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(html_attributes_class,with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):null)))], null)], 0));
var inline_style = stylefy.impl.utils.garden_units__GT_to_css(stylefy.impl.utils.filter_props(style));
if(cljs.core.truth_(stylefy.impl.dom.style_in_dom_QMARK_(style_hash))){
return return_map;
} else {
if((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_modes_not_excluded_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
cljs.core.deref(stylefy.impl.dom.styles_in_use);

if(cljs.core.empty_QMARK_(style)){
return null;
} else {
var with_classes_options = cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(style);
if(((with_classes_options == null)) || ((cljs.core.vector_QMARK_(with_classes_options)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_options)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_options], 0)))].join('')),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if(((with_classes_style == null)) || ((cljs.core.vector_QMARK_(with_classes_style)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_style)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_style], 0)))].join('')),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

var style__$1 = stylefy.impl.styles.add_global_vendors(style);
var style_hash = stylefy.impl.styles.hash_style(style__$1);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if(cljs.core.truth_(already_created)){
} else {
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,style__$1,cljs.core.cst$kw$hash,style_hash], null));
}

return stylefy.impl.styles.style_return_value(style__$1,style_hash,options);
}
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0)))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__10202__auto__ = [];
var len__10195__auto___18199 = arguments.length;
var i__10196__auto___18200 = (0);
while(true){
if((i__10196__auto___18200 < len__10195__auto___18199)){
args__10202__auto__.push((arguments[i__10196__auto___18200]));

var G__18201 = (i__10196__auto___18200 + (1));
i__10196__auto___18200 = G__18201;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18195_SHARP_,p2__18196_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__18195_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles,p2__18196_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0)))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq18197){
var G__18198 = cljs.core.first(seq18197);
var seq18197__$1 = cljs.core.next(seq18197);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic(G__18198,seq18197__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(styles){
var styles_18206__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__18202_18207 = cljs.core.seq(styles_18206__$1);
var chunk__18203_18208 = null;
var count__18204_18209 = (0);
var i__18205_18210 = (0);
while(true){
if((i__18205_18210 < count__18204_18209)){
var style_18211 = chunk__18203_18208.cljs$core$IIndexed$_nth$arity$2(null,i__18205_18210);
stylefy.impl.styles.use_style_BANG_(style_18211,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___18212 = cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style_18211));
if(cljs.core.truth_(temp__5457__auto___18212)){
var sub_styles_18213 = temp__5457__auto___18212;
(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1(sub_styles_18213) : stylefy.impl.styles.prepare_styles.call(null,sub_styles_18213));
} else {
}

var G__18214 = seq__18202_18207;
var G__18215 = chunk__18203_18208;
var G__18216 = count__18204_18209;
var G__18217 = (i__18205_18210 + (1));
seq__18202_18207 = G__18214;
chunk__18203_18208 = G__18215;
count__18204_18209 = G__18216;
i__18205_18210 = G__18217;
continue;
} else {
var temp__5457__auto___18218 = cljs.core.seq(seq__18202_18207);
if(temp__5457__auto___18218){
var seq__18202_18219__$1 = temp__5457__auto___18218;
if(cljs.core.chunked_seq_QMARK_(seq__18202_18219__$1)){
var c__9847__auto___18220 = cljs.core.chunk_first(seq__18202_18219__$1);
var G__18221 = cljs.core.chunk_rest(seq__18202_18219__$1);
var G__18222 = c__9847__auto___18220;
var G__18223 = cljs.core.count(c__9847__auto___18220);
var G__18224 = (0);
seq__18202_18207 = G__18221;
chunk__18203_18208 = G__18222;
count__18204_18209 = G__18223;
i__18205_18210 = G__18224;
continue;
} else {
var style_18225 = cljs.core.first(seq__18202_18219__$1);
stylefy.impl.styles.use_style_BANG_(style_18225,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___18226__$1 = cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style_18225));
if(cljs.core.truth_(temp__5457__auto___18226__$1)){
var sub_styles_18227 = temp__5457__auto___18226__$1;
(stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1(sub_styles_18227) : stylefy.impl.styles.prepare_styles.call(null,sub_styles_18227));
} else {
}

var G__18228 = cljs.core.next(seq__18202_18219__$1);
var G__18229 = null;
var G__18230 = (0);
var G__18231 = (0);
seq__18202_18207 = G__18228;
chunk__18203_18208 = G__18229;
count__18204_18209 = G__18230;
i__18205_18210 = G__18231;
continue;
}
} else {
}
}
break;
}

return stylefy.impl.dom.update_styles_in_dom_BANG_();
});
stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = cljs.core.cst$kw$global_DASH_vendor_DASH_prefixes.cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});
