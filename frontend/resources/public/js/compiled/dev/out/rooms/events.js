// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.events');
goog.require('cljs.core');
goog.require('cljs.core.async');
rooms.events.event_chan = cljs.core.async.chan.call(null);
rooms.events.publish = cljs.core.async.pub.call(null,rooms.events.event_chan,new cljs.core.Keyword(null,"name","name",1843675177));
rooms.events.listen_BANG_ = (function rooms$events$listen_BANG_(name,chan_or_fn){
if(cljs.core.fn_QMARK_.call(null,chan_or_fn)){
var handler = chan_or_fn;
var ch = cljs.core.async.chan.call(null);
var c__33437__auto___36516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33437__auto___36516,handler,ch){
return (function (){
var f__33438__auto__ = (function (){var switch__33414__auto__ = ((function (c__33437__auto___36516,handler,ch){
return (function (state_36501){
var state_val_36502 = (state_36501[(1)]);
if((state_val_36502 === (1))){
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(2),ch);
} else {
if((state_val_36502 === (2))){
var inst_36487 = (state_36501[(2)]);
var inst_36488 = inst_36487;
var state_36501__$1 = (function (){var statearr_36503 = state_36501;
(statearr_36503[(7)] = inst_36488);

return statearr_36503;
})();
var statearr_36504_36517 = state_36501__$1;
(statearr_36504_36517[(2)] = null);

(statearr_36504_36517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (3))){
var inst_36488 = (state_36501[(7)]);
var state_36501__$1 = state_36501;
if(cljs.core.truth_(inst_36488)){
var statearr_36505_36518 = state_36501__$1;
(statearr_36505_36518[(1)] = (5));

} else {
var statearr_36506_36519 = state_36501__$1;
(statearr_36506_36519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (4))){
var inst_36499 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36501__$1,inst_36499);
} else {
if((state_val_36502 === (5))){
var inst_36488 = (state_36501[(7)]);
var inst_36491 = handler.call(null,inst_36488);
var state_36501__$1 = (function (){var statearr_36507 = state_36501;
(statearr_36507[(8)] = inst_36491);

return statearr_36507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36501__$1,(8),ch);
} else {
if((state_val_36502 === (6))){
var state_36501__$1 = state_36501;
var statearr_36508_36520 = state_36501__$1;
(statearr_36508_36520[(2)] = null);

(statearr_36508_36520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (7))){
var inst_36497 = (state_36501[(2)]);
var state_36501__$1 = state_36501;
var statearr_36509_36521 = state_36501__$1;
(statearr_36509_36521[(2)] = inst_36497);

(statearr_36509_36521[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36502 === (8))){
var inst_36493 = (state_36501[(2)]);
var inst_36488 = inst_36493;
var state_36501__$1 = (function (){var statearr_36510 = state_36501;
(statearr_36510[(7)] = inst_36488);

return statearr_36510;
})();
var statearr_36511_36522 = state_36501__$1;
(statearr_36511_36522[(2)] = null);

(statearr_36511_36522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__33437__auto___36516,handler,ch))
;
return ((function (switch__33414__auto__,c__33437__auto___36516,handler,ch){
return (function() {
var rooms$events$listen_BANG__$_state_machine__33415__auto__ = null;
var rooms$events$listen_BANG__$_state_machine__33415__auto____0 = (function (){
var statearr_36512 = [null,null,null,null,null,null,null,null,null];
(statearr_36512[(0)] = rooms$events$listen_BANG__$_state_machine__33415__auto__);

(statearr_36512[(1)] = (1));

return statearr_36512;
});
var rooms$events$listen_BANG__$_state_machine__33415__auto____1 = (function (state_36501){
while(true){
var ret_value__33416__auto__ = (function (){try{while(true){
var result__33417__auto__ = switch__33414__auto__.call(null,state_36501);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33417__auto__;
}
break;
}
}catch (e36513){if((e36513 instanceof Object)){
var ex__33418__auto__ = e36513;
var statearr_36514_36523 = state_36501;
(statearr_36514_36523[(5)] = ex__33418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36501);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36524 = state_36501;
state_36501 = G__36524;
continue;
} else {
return ret_value__33416__auto__;
}
break;
}
});
rooms$events$listen_BANG__$_state_machine__33415__auto__ = function(state_36501){
switch(arguments.length){
case 0:
return rooms$events$listen_BANG__$_state_machine__33415__auto____0.call(this);
case 1:
return rooms$events$listen_BANG__$_state_machine__33415__auto____1.call(this,state_36501);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$events$listen_BANG__$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$events$listen_BANG__$_state_machine__33415__auto____0;
rooms$events$listen_BANG__$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$events$listen_BANG__$_state_machine__33415__auto____1;
return rooms$events$listen_BANG__$_state_machine__33415__auto__;
})()
;})(switch__33414__auto__,c__33437__auto___36516,handler,ch))
})();
var state__33439__auto__ = (function (){var statearr_36515 = f__33438__auto__.call(null);
(statearr_36515[(6)] = c__33437__auto___36516);

return statearr_36515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33439__auto__);
});})(c__33437__auto___36516,handler,ch))
);


cljs.core.async.sub.call(null,rooms.events.publish,name,ch);

return ((function (handler,ch){
return (function (){
return cljs.core.async.unsub.call(null,rooms.events.publish,name,ch);
});
;})(handler,ch))
} else {
var handler = chan_or_fn;
cljs.core.async.sub.call(null,rooms.events.publish,name,handler);

return ((function (handler){
return (function (){
return cljs.core.async.unsub.call(null,rooms.events.publish,name,handler);
});
;})(handler))
}
});
rooms.events.publish_BANG_ = (function rooms$events$publish_BANG_(event){
var c__33437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33437__auto__){
return (function (){
var f__33438__auto__ = (function (){var switch__33414__auto__ = ((function (c__33437__auto__){
return (function (state_36528){
var state_val_36529 = (state_36528[(1)]);
if((state_val_36529 === (1))){
var state_36528__$1 = state_36528;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36528__$1,(2),rooms.events.event_chan,event);
} else {
if((state_val_36529 === (2))){
var inst_36526 = (state_36528[(2)]);
var state_36528__$1 = state_36528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36528__$1,inst_36526);
} else {
return null;
}
}
});})(c__33437__auto__))
;
return ((function (switch__33414__auto__,c__33437__auto__){
return (function() {
var rooms$events$publish_BANG__$_state_machine__33415__auto__ = null;
var rooms$events$publish_BANG__$_state_machine__33415__auto____0 = (function (){
var statearr_36530 = [null,null,null,null,null,null,null];
(statearr_36530[(0)] = rooms$events$publish_BANG__$_state_machine__33415__auto__);

(statearr_36530[(1)] = (1));

return statearr_36530;
});
var rooms$events$publish_BANG__$_state_machine__33415__auto____1 = (function (state_36528){
while(true){
var ret_value__33416__auto__ = (function (){try{while(true){
var result__33417__auto__ = switch__33414__auto__.call(null,state_36528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33417__auto__;
}
break;
}
}catch (e36531){if((e36531 instanceof Object)){
var ex__33418__auto__ = e36531;
var statearr_36532_36534 = state_36528;
(statearr_36532_36534[(5)] = ex__33418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36535 = state_36528;
state_36528 = G__36535;
continue;
} else {
return ret_value__33416__auto__;
}
break;
}
});
rooms$events$publish_BANG__$_state_machine__33415__auto__ = function(state_36528){
switch(arguments.length){
case 0:
return rooms$events$publish_BANG__$_state_machine__33415__auto____0.call(this);
case 1:
return rooms$events$publish_BANG__$_state_machine__33415__auto____1.call(this,state_36528);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$events$publish_BANG__$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$events$publish_BANG__$_state_machine__33415__auto____0;
rooms$events$publish_BANG__$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$events$publish_BANG__$_state_machine__33415__auto____1;
return rooms$events$publish_BANG__$_state_machine__33415__auto__;
})()
;})(switch__33414__auto__,c__33437__auto__))
})();
var state__33439__auto__ = (function (){var statearr_36533 = f__33438__auto__.call(null);
(statearr_36533[(6)] = c__33437__auto__);

return statearr_36533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33439__auto__);
});})(c__33437__auto__))
);

return c__33437__auto__;
});

//# sourceMappingURL=events.js.map?rel=1523973190820
