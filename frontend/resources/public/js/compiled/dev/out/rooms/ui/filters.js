// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.filters');
goog.require('cljs.core');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.ui.calendar');
goog.require('rooms.styles.grid');
goog.require('rooms.ui.input');
goog.require('rooms.styles.filters');
goog.require('rooms.language');
goog.require('rooms.ui.icons');
goog.require('stylefy.core');
goog.require('rooms.styles.content');
goog.require('cljs_time.core');
goog.require('rooms.state');
rooms.ui.filters.heading_and_filter = (function rooms$ui$filters$heading_and_filter(text,component){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),stylefy.core.use_style.call(null,rooms.styles.filters.heading),text], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.filters.heading_component),component], null)], null);
});
rooms.ui.filters.filters = (function rooms$ui$filters$filters(e_BANG_,app){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.filters.filters_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.content.content_wrapper),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.grid.grid),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.grid.column.call(null,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_12,rooms.styles.grid.col_size_12)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.call(null,new cljs.core.Keyword(null,"date","date",-1463434462)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.calendar.calendar,e_BANG_,app], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.grid.column.call(null,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_12,rooms.styles.grid.col_size_12)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.call(null,new cljs.core.Keyword(null,"location","location",1815599388)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__31061__auto__ = (function rooms$ui$filters$filters_$_iter__52657(s__52658){
return (new cljs.core.LazySeq(null,(function (){
var s__52658__$1 = s__52658;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52658__$1);
if(temp__5457__auto__){
var s__52658__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52658__$2)){
var c__31059__auto__ = cljs.core.chunk_first.call(null,s__52658__$2);
var size__31060__auto__ = cljs.core.count.call(null,c__31059__auto__);
var b__52660 = cljs.core.chunk_buffer.call(null,size__31060__auto__);
if((function (){var i__52659 = (0);
while(true){
if((i__52659 < size__31060__auto__)){
var location = cljs.core._nth.call(null,c__31059__auto__,i__52659);
cljs.core.chunk_append.call(null,b__52660,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,rooms.language.text.call(null,cljs.core.keyword.call(null,["location-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)))].join(''))),!((cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"locations","locations",-435476560)], null)).call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)) == null)),((function (i__52659,location,c__31059__auto__,size__31060__auto__,b__52660,s__52658__$2,temp__5457__auto__){
return (function (){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterLocations.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)));
});})(i__52659,location,c__31059__auto__,size__31060__auto__,b__52660,s__52658__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)], null)));

var G__52661 = (i__52659 + (1));
i__52659 = G__52661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52660),rooms$ui$filters$filters_$_iter__52657.call(null,cljs.core.chunk_rest.call(null,s__52658__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52660),null);
}
} else {
var location = cljs.core.first.call(null,s__52658__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,rooms.language.text.call(null,cljs.core.keyword.call(null,["location-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)))].join(''))),!((cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"locations","locations",-435476560)], null)).call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)) == null)),((function (location,s__52658__$2,temp__5457__auto__){
return (function (){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterLocations.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)));
});})(location,s__52658__$2,temp__5457__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(location)], null)),rooms$ui$filters$filters_$_iter__52657.call(null,cljs.core.rest.call(null,s__52658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31061__auto__.call(null,rooms.config.locations.call(null));
})())], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.call(null,new cljs.core.Keyword(null,"urgency","urgency",-1292117426)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,rooms.language.text.call(null,new cljs.core.Keyword(null,"available-soon","available-soon",-925813179)),cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"urgency?","urgency?",-697725455)], null)),(function (p1__52652_SHARP_){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterBoolean.call(null,new cljs.core.Keyword(null,"urgency?","urgency?",-697725455),p1__52652_SHARP_));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,rooms.styles.grid.column.call(null,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_4,rooms.styles.grid.col_size_6,rooms.styles.grid.col_size_12)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.call(null,new cljs.core.Keyword(null,"features","features",-1146962336)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.icons.text_and_icon,rooms.language.text.call(null,new cljs.core.Keyword(null,"video-meeting-room","video-meeting-room",-988801834)),"video-gray40.svg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),rooms.ui.icons.default_icon_size], null)], null),cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"video?","video?",1029887787)], null)),(function (p1__52653_SHARP_){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterBoolean.call(null,new cljs.core.Keyword(null,"video?","video?",1029887787),p1__52653_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.icons.text_and_icon,rooms.language.text.call(null,new cljs.core.Keyword(null,"client-meeting-room","client-meeting-room",751784893)),"person-gray40.svg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),rooms.ui.icons.default_icon_size], null)], null),cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"client?","client?",-1933413058)], null)),(function (p1__52654_SHARP_){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterBoolean.call(null,new cljs.core.Keyword(null,"client?","client?",-1933413058),p1__52654_SHARP_));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.checkbox,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.icons.text_and_icon,rooms.language.text.call(null,new cljs.core.Keyword(null,"internal-meeting-room","internal-meeting-room",-1773577728)),"home-gray40.svg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),rooms.ui.icons.default_icon_size], null)], null),cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"internal?","internal?",-383058705)], null)),(function (p1__52655_SHARP_){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterBoolean.call(null,new cljs.core.Keyword(null,"internal?","internal?",-383058705),p1__52655_SHARP_));
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.heading_and_filter,rooms.language.text.call(null,new cljs.core.Keyword(null,"capacity","capacity",72689734)),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.input.slider,cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"capacity","capacity",72689734)], null)),(0),(12),(function (p1__52656_SHARP_){
return e_BANG_.call(null,rooms.state.__GT_CheckFilterCapacity.call(null,p1__52656_SHARP_));
})], null)], null)], null)], null)], null)], null);
});

//# sourceMappingURL=filters.js.map?rel=1525170771853
