// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.header');
goog.require('cljs.core');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.header');
goog.require('stylefy.core');
goog.require('rooms.ui.dropdown');
goog.require('rooms.styles.content');
goog.require('rooms.language');
goog.require('rooms.styles.utils');
goog.require('rooms.state');
rooms.ui.header.logo = (function rooms$ui$header$logo(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"solita-rooms-logo.svg"].join('')], null)], null);
});
rooms.ui.header.links = (function rooms$ui$header$links(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,rooms.styles.header.header_links),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,(function (i__36354__auto__,item__36355__auto__){
if(cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,item__36355__auto__),new cljs.core.Keyword(null,"key","key",-1516042587))){
return item__36355__auto__;
} else {
return cljs.core.with_meta.call(null,item__36355__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["for*52641",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i__36354__auto__)].join('')], null));
}
}),(function (){var iter__31061__auto__ = (function rooms$ui$header$links_$_iter__52642(s__52643){
return (new cljs.core.LazySeq(null,(function (){
var s__52643__$1 = s__52643;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52643__$1);
if(temp__5457__auto__){
var s__52643__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52643__$2)){
var c__31059__auto__ = cljs.core.chunk_first.call(null,s__52643__$2);
var size__31060__auto__ = cljs.core.count.call(null,c__31059__auto__);
var b__52645 = cljs.core.chunk_buffer.call(null,size__31060__auto__);
if((function (){var i__52644 = (0);
while(true){
if((i__52644 < size__31060__auto__)){
var link = cljs.core._nth.call(null,c__31059__auto__,i__52644);
cljs.core.chunk_append.call(null,b__52645,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,rooms.styles.header.header_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link)], null)),rooms.language.text.call(null,new cljs.core.Keyword(null,"text-id","text-id",-32710605).cljs$core$IFn$_invoke$arity$1(link))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,rooms.styles.header.header_link_triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-right-white.svg"].join('')], null))], null)], null)], null));

var G__52646 = (i__52644 + (1));
i__52644 = G__52646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52645),rooms$ui$header$links_$_iter__52642.call(null,cljs.core.chunk_rest.call(null,s__52643__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52645),null);
}
} else {
var link = cljs.core.first.call(null,s__52643__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,rooms.styles.header.header_link,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link)], null)),rooms.language.text.call(null,new cljs.core.Keyword(null,"text-id","text-id",-32710605).cljs$core$IFn$_invoke$arity$1(link))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,rooms.styles.header.header_link_triangle,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"triangle-right-white.svg"].join('')], null))], null)], null)], null),rooms$ui$header$links_$_iter__52642.call(null,cljs.core.rest.call(null,s__52643__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31061__auto__.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"text-id","text-id",-32710605),rooms.config.header_links.call(null)));
})()))], null);
});
rooms.ui.header.language_selection = (function rooms$ui$header$language_selection(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.dropdown.dropdown,cljs.core.deref.call(null,rooms.state.current_language),rooms.styles.header.header_link,rooms.state.switch_language,rooms.config.languages.call(null)], null);
});
rooms.ui.header.header = (function rooms$ui$header$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),stylefy.core.use_style.call(null,rooms.styles.header.header_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.content.content_wrapper),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.header.header_content),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.logo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.links], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.language_selection], null)], null)], null)], null);
});

//# sourceMappingURL=header.js.map?rel=1525170771788
