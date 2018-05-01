// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.dom');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof rooms.dom.window_width !== 'undefined'){
} else {
rooms.dom.window_width = reagent.core.atom.call(null,window.innerWidth);
}
if(typeof rooms.dom.window_height !== 'undefined'){
} else {
rooms.dom.window_height = reagent.core.atom.call(null,window.innerHeight);
}
if(typeof rooms.dom.resize_listener !== 'undefined'){
} else {
rooms.dom.resize_listener = (function (){
window.onresize = (function (_){
cljs.core.reset_BANG_.call(null,rooms.dom.window_width,window.innerWidth);

return cljs.core.reset_BANG_.call(null,rooms.dom.window_height,window.innerHeight);
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
return (cljs.core.not_EQ_.call(null,(-1),ua.indexOf("MSIE "))) || (cljs.core.not_EQ_.call(null,(-1),ua.indexOf("Trident/")));
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

//# sourceMappingURL=dom.js.map?rel=1523973190384
