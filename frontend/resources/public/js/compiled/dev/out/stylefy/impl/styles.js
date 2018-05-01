// Compiled by ClojureScript 1.9.946 {}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.utils');
goog.require('clojure.set');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null));
});
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
return ["_stylefy_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,cljs.core.dissoc.call(null,style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432))))].join('');
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__61405){
var map__61406 = p__61405;
var map__61406__$1 = ((((!((map__61406 == null)))?((((map__61406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__61406.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61406):map__61406);
var style = map__61406__$1;
var props = cljs.core.get.call(null,map__61406__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__61406__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__61408 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__61409 = null;
var count__61410 = (0);
var i__61411 = (0);
while(true){
if((i__61411 < count__61410)){
var sub_style = cljs.core._nth.call(null,chunk__61409,i__61411);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));

var G__61412 = seq__61408;
var G__61413 = chunk__61409;
var G__61414 = count__61410;
var G__61415 = (i__61411 + (1));
seq__61408 = G__61412;
chunk__61409 = G__61413;
count__61410 = G__61414;
i__61411 = G__61415;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__61408);
if(temp__5457__auto__){
var seq__61408__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61408__$1)){
var c__31110__auto__ = cljs.core.chunk_first.call(null,seq__61408__$1);
var G__61416 = cljs.core.chunk_rest.call(null,seq__61408__$1);
var G__61417 = c__31110__auto__;
var G__61418 = cljs.core.count.call(null,c__31110__auto__);
var G__61419 = (0);
seq__61408 = G__61416;
chunk__61409 = G__61417;
count__61410 = G__61418;
i__61411 = G__61419;
continue;
} else {
var sub_style = cljs.core.first.call(null,seq__61408__$1);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));

var G__61420 = cljs.core.next.call(null,seq__61408__$1);
var G__61421 = null;
var G__61422 = (0);
var G__61423 = (0);
seq__61408 = G__61420;
chunk__61409 = G__61421;
count__61410 = G__61422;
i__61411 = G__61423;
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
var with_classes = cljs.core.concat.call(null,new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_props.call(null,options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if(((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_.call(null,html_attributes_class))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,html_attributes_class))].join('')),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

var contains_media_queries_QMARK_ = !((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null));
var contains_feature_queries_QMARK_ = !((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var contains_modes_not_excluded_QMARK_ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,excluded_modes),cljs.core.keys.call(null,new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style)))));
var return_map = cljs.core.merge.call(null,html_attributes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(((html_attributes_class == null))?clojure.string.join.call(null," ",cljs.core.concat.call(null,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((cljs.core.vector_QMARK_.call(null,html_attributes_class))?clojure.string.join.call(null," ",cljs.core.concat.call(null,html_attributes_class,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):null)))], null));
var inline_style = stylefy.impl.utils.garden_units__GT_to_css.call(null,stylefy.impl.utils.filter_props.call(null,style));
if(cljs.core.truth_(stylefy.impl.dom.style_in_dom_QMARK_.call(null,style_hash))){
return return_map;
} else {
if((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_modes_not_excluded_QMARK_)){
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null))], null));
} else {
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
cljs.core.deref.call(null,stylefy.impl.dom.styles_in_use);

if(cljs.core.empty_QMARK_.call(null,style)){
return null;
} else {
var with_classes_options = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
if(((with_classes_options == null)) || ((cljs.core.vector_QMARK_.call(null,with_classes_options)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_options)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes_options))].join('')),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if(((with_classes_style == null)) || ((cljs.core.vector_QMARK_.call(null,with_classes_style)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_style)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,with_classes_style))].join('')),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

var style__$1 = stylefy.impl.styles.add_global_vendors.call(null,style);
var style_hash = stylefy.impl.styles.hash_style.call(null,style__$1);
var already_created = stylefy.impl.dom.style_by_hash.call(null,style_hash);
if(cljs.core.truth_(already_created)){
} else {
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style__$1,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null));
}

return stylefy.impl.styles.style_return_value.call(null,style__$1,style_hash,options);
}
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_.call(null,resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_style))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__31465__auto__ = [];
var len__31458__auto___61428 = arguments.length;
var i__31459__auto___61429 = (0);
while(true){
if((i__31459__auto___61429 < len__31458__auto___61428)){
args__31465__auto__.push((arguments[i__31459__auto___61429]));

var G__61430 = (i__31459__auto___61429 + (1));
i__31459__auto___61429 = G__61430;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.call(null,(function (p1__61424_SHARP_,p2__61425_SHARP_){
return cljs.core.get_in.call(null,p1__61424_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__61425_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,sub_styles))," not found in style: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,style))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq61426){
var G__61427 = cljs.core.first.call(null,seq61426);
var seq61426__$1 = cljs.core.next.call(null,seq61426);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic(G__61427,seq61426__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(styles){
var styles_61435__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles);
var seq__61431_61436 = cljs.core.seq.call(null,styles_61435__$1);
var chunk__61432_61437 = null;
var count__61433_61438 = (0);
var i__61434_61439 = (0);
while(true){
if((i__61434_61439 < count__61433_61438)){
var style_61440 = cljs.core._nth.call(null,chunk__61432_61437,i__61434_61439);
stylefy.impl.styles.use_style_BANG_.call(null,style_61440,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___61441 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_61440));
if(cljs.core.truth_(temp__5457__auto___61441)){
var sub_styles_61442 = temp__5457__auto___61441;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_61442);
} else {
}

var G__61443 = seq__61431_61436;
var G__61444 = chunk__61432_61437;
var G__61445 = count__61433_61438;
var G__61446 = (i__61434_61439 + (1));
seq__61431_61436 = G__61443;
chunk__61432_61437 = G__61444;
count__61433_61438 = G__61445;
i__61434_61439 = G__61446;
continue;
} else {
var temp__5457__auto___61447 = cljs.core.seq.call(null,seq__61431_61436);
if(temp__5457__auto___61447){
var seq__61431_61448__$1 = temp__5457__auto___61447;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__61431_61448__$1)){
var c__31110__auto___61449 = cljs.core.chunk_first.call(null,seq__61431_61448__$1);
var G__61450 = cljs.core.chunk_rest.call(null,seq__61431_61448__$1);
var G__61451 = c__31110__auto___61449;
var G__61452 = cljs.core.count.call(null,c__31110__auto___61449);
var G__61453 = (0);
seq__61431_61436 = G__61450;
chunk__61432_61437 = G__61451;
count__61433_61438 = G__61452;
i__61434_61439 = G__61453;
continue;
} else {
var style_61454 = cljs.core.first.call(null,seq__61431_61448__$1);
stylefy.impl.styles.use_style_BANG_.call(null,style_61454,cljs.core.PersistentArrayMap.EMPTY);

var temp__5457__auto___61455__$1 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_61454));
if(cljs.core.truth_(temp__5457__auto___61455__$1)){
var sub_styles_61456 = temp__5457__auto___61455__$1;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_61456);
} else {
}

var G__61457 = cljs.core.next.call(null,seq__61431_61448__$1);
var G__61458 = null;
var G__61459 = (0);
var G__61460 = (0);
seq__61431_61436 = G__61457;
chunk__61432_61437 = G__61458;
count__61433_61438 = G__61459;
i__61434_61439 = G__61460;
continue;
}
} else {
}
}
break;
}

return stylefy.impl.dom.update_styles_in_dom_BANG_.call(null);
});
stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});

//# sourceMappingURL=styles.js.map?rel=1523638681399
