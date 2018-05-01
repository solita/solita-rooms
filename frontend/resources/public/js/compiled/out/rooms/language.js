// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.language');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.localisation');
goog.require('rooms.state');
rooms.language.text = (function rooms$language$text(var_args){
var G__26046 = arguments.length;
switch (G__26046) {
case 1:
return rooms.language.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rooms.language.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rooms.language.text.cljs$core$IFn$_invoke$arity$1 = (function (text_id){
return rooms.language.text.cljs$core$IFn$_invoke$arity$2(text_id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.state.current_language)));
});

rooms.language.text.cljs$core$IFn$_invoke$arity$2 = (function (text_id,language_id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(rooms.localisation.texts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text_id,language_id], null));
});

rooms.language.text.cljs$lang$maxFixedArity = 2;

