// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.main');
goog.require('cljs.core');
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
e_BANG_.call(null,rooms.state.__GT_FetchRooms.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)], null))));

e_BANG_.call(null,rooms.state.__GT_FetchRooms.call(null,cljs_time.core.plus.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)], null)),cljs_time.core.days.call(null,(1)))));

e_BANG_.call(null,rooms.state.__GT_FetchRooms.call(null,cljs_time.core.plus.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)], null)),cljs_time.core.days.call(null,(2)))));

var c__33437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33437__auto__){
return (function (){
var f__33438__auto__ = (function (){var switch__33414__auto__ = ((function (c__33437__auto__){
return (function (state_52684){
var state_val_52685 = (state_52684[(1)]);
if((state_val_52685 === (1))){
var state_52684__$1 = state_52684;
var statearr_52686_52693 = state_52684__$1;
(statearr_52686_52693[(2)] = null);

(statearr_52686_52693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52685 === (2))){
var inst_52669 = rooms.config.fetch_defay.call(null);
var inst_52670 = cljs.core.async.timeout.call(null,inst_52669);
var state_52684__$1 = state_52684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52684__$1,(4),inst_52670);
} else {
if((state_val_52685 === (3))){
var inst_52682 = (state_52684[(2)]);
var state_52684__$1 = state_52684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52684__$1,inst_52682);
} else {
if((state_val_52685 === (4))){
var inst_52672 = (state_52684[(2)]);
var inst_52673 = cljs.core.deref.call(null,rooms.state.state);
var inst_52674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52675 = [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)];
var inst_52676 = (new cljs.core.PersistentVector(null,2,(5),inst_52674,inst_52675,null));
var inst_52677 = cljs.core.get_in.call(null,inst_52673,inst_52676);
var inst_52678 = rooms.state.__GT_FetchRooms.call(null,inst_52677);
var inst_52679 = e_BANG_.call(null,inst_52678);
var state_52684__$1 = (function (){var statearr_52687 = state_52684;
(statearr_52687[(7)] = inst_52672);

(statearr_52687[(8)] = inst_52679);

return statearr_52687;
})();
var statearr_52688_52694 = state_52684__$1;
(statearr_52688_52694[(2)] = null);

(statearr_52688_52694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__33437__auto__))
;
return ((function (switch__33414__auto__,c__33437__auto__){
return (function() {
var rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto__ = null;
var rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto____0 = (function (){
var statearr_52689 = [null,null,null,null,null,null,null,null,null];
(statearr_52689[(0)] = rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto__);

(statearr_52689[(1)] = (1));

return statearr_52689;
});
var rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto____1 = (function (state_52684){
while(true){
var ret_value__33416__auto__ = (function (){try{while(true){
var result__33417__auto__ = switch__33414__auto__.call(null,state_52684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33417__auto__;
}
break;
}
}catch (e52690){if((e52690 instanceof Object)){
var ex__33418__auto__ = e52690;
var statearr_52691_52695 = state_52684;
(statearr_52691_52695[(5)] = ex__33418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52690;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52696 = state_52684;
state_52684 = G__52696;
continue;
} else {
return ret_value__33416__auto__;
}
break;
}
});
rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto__ = function(state_52684){
switch(arguments.length){
case 0:
return rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto____0.call(this);
case 1:
return rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto____1.call(this,state_52684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto____0;
rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto____1;
return rooms$main$start_automatic_room_fetching_$_state_machine__33415__auto__;
})()
;})(switch__33414__auto__,c__33437__auto__))
})();
var state__33439__auto__ = (function (){var statearr_52692 = f__33438__auto__.call(null);
(statearr_52692[(6)] = c__33437__auto__);

return statearr_52692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33439__auto__);
});})(c__33437__auto__))
);

return c__33437__auto__;
});
rooms.main.main_content_STAR_ = (function rooms$main$main_content_STAR_(e_BANG_,app){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return rooms.main.start_automatic_room_fetching.call(null,e_BANG_);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (e_BANG___$1,app__$1){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324),new cljs.core.PersistentArrayMap(null, 1, ["display: flex",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
return rooms.events.publish_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mouse-up","mouse-up",999952135)], null));
})], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.filters.filters,e_BANG___$1,app__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.rooms.rooms,e_BANG___$1,app__$1], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.footer.footer], null)], null);
})], null));
});
rooms.main.main_content = (function rooms$main$main_content(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuck.core.tuck,rooms.state.state,rooms.main.main_content_STAR_], null);
});
rooms.main.init = (function rooms$main$init(){
rooms.config.init.call(null);

rooms.ui.fonts.init_stylefy_fonts.call(null);

stylefy.core.init.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313),true,new cljs.core.Keyword(null,"cache-options","cache-options",1443503739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expires","expires",1393008816),(600000)], null)], null));

rooms.state.start_updating_local_now.call(null);

rooms.state.load_filters_from_cache.call(null);

return stylefy.core.tag.call(null,"body",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),rooms.ui.colors.black], null));
});
rooms.main.start = (function rooms$main$start(){
rooms.main.init.call(null);

return reagent.core.render.call(null,rooms.main.main_content,document.getElementById("app"));
});
goog.exportSymbol('rooms.main.start', rooms.main.start);

//# sourceMappingURL=main.js.map?rel=1525170771914
