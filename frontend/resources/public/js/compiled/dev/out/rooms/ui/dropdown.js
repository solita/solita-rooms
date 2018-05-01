// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.dropdown');
goog.require('cljs.core');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.dropdown');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('rooms.language');
goog.require('rooms.styles.utils');
goog.require('reagent.core');
rooms.ui.dropdown.dropdown = (function rooms$ui$dropdown$dropdown(selected,selected_style,selected_fn,values){
var visible_QMARK_ = reagent.core.atom.call(null,false);
return ((function (visible_QMARK_){
return (function (selected__$1,selected_style__$1,selected_fn__$1,values__$1){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.dropdown.container),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,cljs.core.merge.call(null,selected_style__$1,rooms.styles.utils.clickable),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,visible_QMARK_,cljs.core.not);
});})(visible_QMARK_))
], null)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(selected__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,rooms.styles.dropdown.dropdown_triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-down-white.svg"].join('')], null))], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,visible_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,rooms.styles.dropdown.dropdown),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (visible_QMARK_){
return (function (i__36354__auto__,item__36355__auto__){
if(cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,item__36355__auto__),new cljs.core.Keyword(null,"key","key",-1516042587))){
return item__36355__auto__;
} else {
return cljs.core.with_meta.call(null,item__36355__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["for*52633",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__36354__auto__)].join('')], null));
}
});})(visible_QMARK_))
,(function (){var iter__31061__auto__ = ((function (visible_QMARK_){
return (function rooms$ui$dropdown$dropdown_$_iter__52634(s__52635){
return (new cljs.core.LazySeq(null,((function (visible_QMARK_){
return (function (){
var s__52635__$1 = s__52635;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52635__$1);
if(temp__5457__auto__){
var s__52635__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52635__$2)){
var c__31059__auto__ = cljs.core.chunk_first.call(null,s__52635__$2);
var size__31060__auto__ = cljs.core.count.call(null,c__31059__auto__);
var b__52637 = cljs.core.chunk_buffer.call(null,size__31060__auto__);
if((function (){var i__52636 = (0);
while(true){
if((i__52636 < size__31060__auto__)){
var value = cljs.core._nth.call(null,c__31059__auto__,i__52636);
cljs.core.chunk_append.call(null,b__52637,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,rooms.styles.dropdown.item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__52636,value,c__31059__auto__,size__31060__auto__,b__52637,s__52635__$2,temp__5457__auto__,visible_QMARK_){
return (function (){
selected_fn__$1.call(null,value);

return cljs.core.reset_BANG_.call(null,visible_QMARK_,false);
});})(i__52636,value,c__31059__auto__,size__31060__auto__,b__52637,s__52635__$2,temp__5457__auto__,visible_QMARK_))
], null)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(value)], null));

var G__52638 = (i__52636 + (1));
i__52636 = G__52638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52637),rooms$ui$dropdown$dropdown_$_iter__52634.call(null,cljs.core.chunk_rest.call(null,s__52635__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52637),null);
}
} else {
var value = cljs.core.first.call(null,s__52635__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,rooms.styles.dropdown.item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,s__52635__$2,temp__5457__auto__,visible_QMARK_){
return (function (){
selected_fn__$1.call(null,value);

return cljs.core.reset_BANG_.call(null,visible_QMARK_,false);
});})(value,s__52635__$2,temp__5457__auto__,visible_QMARK_))
], null)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(value)], null),rooms$ui$dropdown$dropdown_$_iter__52634.call(null,cljs.core.rest.call(null,s__52635__$2)));
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
return iter__31061__auto__.call(null,values__$1);
})()))], null):null)], null);
});
;})(visible_QMARK_))
});

//# sourceMappingURL=dropdown.js.map?rel=1525170771764
