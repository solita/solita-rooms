// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__37160__delegate = function (x__37144__auto__){
if(cljs.core.truth_(rooms.main.start)){
return cljs.core.apply.call(null,rooms.main.start,x__37144__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("rooms.main/start"),"' is missing"].join(''));
}
};
var G__37160 = function (var_args){
var x__37144__auto__ = null;
if (arguments.length > 0) {
var G__37161__i = 0, G__37161__a = new Array(arguments.length -  0);
while (G__37161__i < G__37161__a.length) {G__37161__a[G__37161__i] = arguments[G__37161__i + 0]; ++G__37161__i;}
  x__37144__auto__ = new cljs.core.IndexedSeq(G__37161__a,0,null);
} 
return G__37160__delegate.call(this,x__37144__auto__);};
G__37160.cljs$lang$maxFixedArity = 0;
G__37160.cljs$lang$applyTo = (function (arglist__37162){
var x__37144__auto__ = cljs.core.seq(arglist__37162);
return G__37160__delegate(x__37144__auto__);
});
G__37160.cljs$core$IFn$_invoke$arity$variadic = G__37160__delegate;
return G__37160;
})()
,new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),false,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1523638714251
