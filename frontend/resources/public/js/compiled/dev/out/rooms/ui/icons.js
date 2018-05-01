// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.icons');
goog.require('cljs.core');
goog.require('rooms.config');
goog.require('rooms.styles.input');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('cljs_time.core');
goog.require('reagent.core');
goog.require('rooms.dom');
rooms.ui.icons.default_icon_size = (20);
rooms.ui.icons.text_and_icon = (function rooms$ui$icons$text_and_icon(var_args){
var G__52591 = arguments.length;
switch (G__52591) {
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
return rooms.ui.icons.text_and_icon.call(null,text,icon,null);
});

rooms.ui.icons.text_and_icon.cljs$core$IFn$_invoke$arity$3 = (function (text,icon,size){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0.5em"], null)),text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"relative","relative",22796862),new cljs.core.Keyword(null,"top","top",-1856271961),"-2px"], null),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join('')], null),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size);
if(cljs.core.truth_(temp__5457__auto__)){
var width = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size);
if(cljs.core.truth_(temp__5457__auto__)){
var height = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null);
} else {
return null;
}
})()))], null)], null);
});

rooms.ui.icons.text_and_icon.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=icons.js.map?rel=1525170771604
