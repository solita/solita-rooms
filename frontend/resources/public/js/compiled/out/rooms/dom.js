// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
if(typeof rooms.dom.window_width !== 'undefined'){
} else {
rooms.dom.window_width = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.innerWidth);
}
if(typeof rooms.dom.window_height !== 'undefined'){
} else {
rooms.dom.window_height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(window.innerHeight);
}
if(typeof rooms.dom.resize_listener !== 'undefined'){
} else {
rooms.dom.resize_listener = (function (){
window.onresize = (function (_){
cljs.core.reset_BANG_(rooms.dom.window_width,window.innerWidth);

return cljs.core.reset_BANG_(rooms.dom.window_height,window.innerHeight);
});

return true;
})()
;
}
rooms.dom.element_width = (function rooms$dom$element_width(node){
var r = node.getBoundingClientRect();
var width = r.width;
return width;
});
rooms.dom.ie_QMARK_ = (function (){var ua = window.navigator.userAgent;
return (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),ua.indexOf("MSIE "))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),ua.indexOf("Trident/")));
})();
rooms.dom.distance_to_left_viewport = (function rooms$dom$distance_to_left_viewport(node){
var r = node.getBoundingClientRect();
var distance = r.left;
return distance;
});
rooms.dom.width = (function rooms$dom$width(node){
var r = node.getBoundingClientRect();
var width = r.width;
return width;
});
