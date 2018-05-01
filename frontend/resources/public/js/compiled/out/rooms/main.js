// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.core');
goog.require('cljs.core.async');
goog.require('tuck.core');
goog.require('reagent.core');
goog.require('rooms.ui.header');
goog.require('rooms.ui.footer');
goog.require('rooms.ui.filters');
goog.require('rooms.ui.rooms');
goog.require('rooms.ui.colors');
goog.require('rooms.ui.fonts');
goog.require('rooms.state');
goog.require('rooms.config');
goog.require('cljs_time.core');
goog.require('rooms.events');
goog.require('rooms.language');
goog.require('rooms.date');
rooms.main.start_automatic_room_fetching = (function rooms$main$start_automatic_room_fetching(e_BANG_){
var G__26247_26275 = rooms.state.__GT_FetchRooms(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$date], null)));
(e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26247_26275) : e_BANG_.call(null,G__26247_26275));

var G__26248_26276 = rooms.state.__GT_FetchRooms(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$date], null)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1))));
(e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26248_26276) : e_BANG_.call(null,G__26248_26276));

var G__26249_26277 = rooms.state.__GT_FetchRooms(cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$date], null)),cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((2))));
(e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__26249_26277) : e_BANG_.call(null,G__26249_26277));

var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__){
return (function (state_26266){
var state_val_26267 = (state_26266[(1)]);
if((state_val_26267 === (1))){
var state_26266__$1 = state_26266;
var statearr_26268_26278 = state_26266__$1;
(statearr_26268_26278[(2)] = null);

(statearr_26268_26278[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26267 === (2))){
var inst_26251 = rooms.config.fetch_defay();
var inst_26252 = cljs.core.async.timeout(inst_26251);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26266__$1,(4),inst_26252);
} else {
if((state_val_26267 === (3))){
var inst_26264 = (state_26266[(2)]);
var state_26266__$1 = state_26266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26266__$1,inst_26264);
} else {
if((state_val_26267 === (4))){
var inst_26254 = (state_26266[(2)]);
var inst_26255 = cljs.core.deref(rooms.state.state);
var inst_26256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26257 = [cljs.core.cst$kw$filters,cljs.core.cst$kw$date];
var inst_26258 = (new cljs.core.PersistentVector(null,2,(5),inst_26256,inst_26257,null));
var inst_26259 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_26255,inst_26258);
var inst_26260 = rooms.state.__GT_FetchRooms(inst_26259);
var inst_26261 = (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(inst_26260) : e_BANG_.call(null,inst_26260));
var state_26266__$1 = (function (){var statearr_26269 = state_26266;
(statearr_26269[(7)] = inst_26254);

(statearr_26269[(8)] = inst_26261);

return statearr_26269;
})();
var statearr_26270_26279 = state_26266__$1;
(statearr_26270_26279[(2)] = null);

(statearr_26270_26279[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__21431__auto__))
;
return ((function (switch__21329__auto__,c__21431__auto__){
return (function() {
var rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto__ = null;
var rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto____0 = (function (){
var statearr_26271 = [null,null,null,null,null,null,null,null,null];
(statearr_26271[(0)] = rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto__);

(statearr_26271[(1)] = (1));

return statearr_26271;
});
var rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto____1 = (function (state_26266){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_26266);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e26272){if((e26272 instanceof Object)){
var ex__21333__auto__ = e26272;
var statearr_26273_26280 = state_26266;
(statearr_26273_26280[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26266);

return cljs.core.cst$kw$recur;
} else {
throw e26272;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__26281 = state_26266;
state_26266 = G__26281;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto__ = function(state_26266){
switch(arguments.length){
case 0:
return rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto____0.call(this);
case 1:
return rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto____1.call(this,state_26266);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto____0;
rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto____1;
return rooms$main$start_automatic_room_fetching_$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_26274 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_26274[(6)] = c__21431__auto__);

return statearr_26274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});
rooms.main.main_content_STAR_ = (function rooms$main$main_content_STAR_(e_BANG_,app){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$component_DASH_did_DASH_mount,(function (this$){
return rooms.main.start_automatic_room_fetching(e_BANG_);
}),cljs.core.cst$kw$reagent_DASH_render,(function (e_BANG___$1,app__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"100%",cljs.core.cst$kw$stylefy$core_SLASH_supports,new cljs.core.PersistentArrayMap(null, 1, ["display: flex",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,cljs.core.cst$kw$column], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_mouse_DASH_up,(function (){
return rooms.events.publish_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,cljs.core.cst$kw$mouse_DASH_up], null));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.filters,e_BANG___$1,app__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms,e_BANG___$1,app__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.footer.footer], null)], null);
})], null));
});
rooms.main.main_content = (function rooms$main$main_content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuck.core.tuck,rooms.state.state,rooms.main.main_content_STAR_], null);
});
rooms.main.init = (function rooms$main$init(){
rooms.ui.fonts.init_stylefy_fonts();

stylefy.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$use_DASH_caching_QMARK_,true,cljs.core.cst$kw$cache_DASH_options,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$expires,(600000)], null)], null));

rooms.config.init();

rooms.state.start_updating_local_now();

rooms.state.load_filters_from_cache();

return stylefy.core.tag("body",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.black], null));
});
rooms.main.start = (function rooms$main$start(){
rooms.main.init();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(rooms.main.main_content,document.getElementById("app"));
});
goog.exportSymbol('rooms.main.start', rooms.main.start);
