// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.footer');
goog.require('cljs.core');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.footer');
goog.require('rooms.styles.utils');
goog.require('stylefy.core');
rooms.ui.footer.footer = (function rooms$ui$footer$footer(){
var footer_links = cljs.core.filter.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),rooms.config.footer_links.call(null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer","footer",1606445390),stylefy.core.use_style.call(null,rooms.styles.footer.footer_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,rooms.styles.footer.footer_logo,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),"solita-footer-logo-white.svg"].join('')], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.call(null,rooms.styles.footer.link_list),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (footer_links){
return (function (index,link){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.call(null,rooms.styles.footer.link_list_item),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),stylefy.core.use_style.call(null,rooms.styles.footer.link_list_a,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(link)], null)),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(link)], null),((cljs.core.not_EQ_.call(null,(index + (1)),cljs.core.count.call(null,footer_links)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,rooms.styles.utils.text_separator),"|"], null):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
});})(footer_links))
,footer_links))], null)], null);
});

//# sourceMappingURL=footer.js.map?rel=1525170771886
