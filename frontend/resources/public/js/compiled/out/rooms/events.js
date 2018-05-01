// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.events');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async');
rooms.events.event_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
rooms.events.publish = cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2(rooms.events.event_chan,cljs.core.cst$kw$name);
rooms.events.listen_BANG_ = (function rooms$events$listen_BANG_(name,chan_or_fn){
if(cljs.core.fn_QMARK_(chan_or_fn)){
var handler = chan_or_fn;
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__21431__auto___26193 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___26193,handler,ch){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___26193,handler,ch){
return (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (1))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26178__$1,(2),ch);
} else {
if((state_val_26179 === (2))){
var inst_26164 = (state_26178[(2)]);
var inst_26165 = inst_26164;
var state_26178__$1 = (function (){var statearr_26180 = state_26178;
(statearr_26180[(7)] = inst_26165);

return statearr_26180;
})();
var statearr_26181_26194 = state_26178__$1;
(statearr_26181_26194[(2)] = null);

(statearr_26181_26194[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26179 === (3))){
var inst_26165 = (state_26178[(7)]);
var state_26178__$1 = state_26178;
if(cljs.core.truth_(inst_26165)){
var statearr_26182_26195 = state_26178__$1;
(statearr_26182_26195[(1)] = (5));

} else {
var statearr_26183_26196 = state_26178__$1;
(statearr_26183_26196[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_26179 === (4))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (5))){
var inst_26165 = (state_26178[(7)]);
var inst_26168 = (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(inst_26165) : handler.call(null,inst_26165));
var state_26178__$1 = (function (){var statearr_26184 = state_26178;
(statearr_26184[(8)] = inst_26168);

return statearr_26184;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_26178__$1,(8),ch);
} else {
if((state_val_26179 === (6))){
var state_26178__$1 = state_26178;
var statearr_26185_26197 = state_26178__$1;
(statearr_26185_26197[(2)] = null);

(statearr_26185_26197[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26186_26198 = state_26178__$1;
(statearr_26186_26198[(2)] = inst_26174);

(statearr_26186_26198[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_26179 === (8))){
var inst_26170 = (state_26178[(2)]);
var inst_26165 = inst_26170;
var state_26178__$1 = (function (){var statearr_26187 = state_26178;
(statearr_26187[(7)] = inst_26165);

return statearr_26187;
})();
var statearr_26188_26199 = state_26178__$1;
(statearr_26188_26199[(2)] = null);

(statearr_26188_26199[(1)] = (3));


return cljs.core.cst$kw$recur;
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
});})(c__21431__auto___26193,handler,ch))
;
return ((function (switch__21329__auto__,c__21431__auto___26193,handler,ch){
return (function() {
var rooms$events$listen_BANG__$_state_machine__21330__auto__ = null;
var rooms$events$listen_BANG__$_state_machine__21330__auto____0 = (function (){
var statearr_26189 = [null,null,null,null,null,null,null,null,null];
(statearr_26189[(0)] = rooms$events$listen_BANG__$_state_machine__21330__auto__);

(statearr_26189[(1)] = (1));

return statearr_26189;
});
var rooms$events$listen_BANG__$_state_machine__21330__auto____1 = (function (state_26178){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_26178);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e26190){if((e26190 instanceof Object)){
var ex__21333__auto__ = e26190;
var statearr_26191_26200 = state_26178;
(statearr_26191_26200[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26178);

return cljs.core.cst$kw$recur;
} else {
throw e26190;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__26201 = state_26178;
state_26178 = G__26201;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
rooms$events$listen_BANG__$_state_machine__21330__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return rooms$events$listen_BANG__$_state_machine__21330__auto____0.call(this);
case 1:
return rooms$events$listen_BANG__$_state_machine__21330__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$events$listen_BANG__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$events$listen_BANG__$_state_machine__21330__auto____0;
rooms$events$listen_BANG__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$events$listen_BANG__$_state_machine__21330__auto____1;
return rooms$events$listen_BANG__$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___26193,handler,ch))
})();
var state__21433__auto__ = (function (){var statearr_26192 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_26192[(6)] = c__21431__auto___26193);

return statearr_26192;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___26193,handler,ch))
);


cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(rooms.events.publish,name,ch);

return ((function (handler,ch){
return (function (){
return cljs.core.async.unsub(rooms.events.publish,name,ch);
});
;})(handler,ch))
} else {
var handler = chan_or_fn;
cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3(rooms.events.publish,name,handler);

return ((function (handler){
return (function (){
return cljs.core.async.unsub(rooms.events.publish,name,handler);
});
;})(handler))
}
});
rooms.events.publish_BANG_ = (function rooms$events$publish_BANG_(event){
var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__){
return (function (state_26205){
var state_val_26206 = (state_26205[(1)]);
if((state_val_26206 === (1))){
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_26205__$1,(2),rooms.events.event_chan,event);
} else {
if((state_val_26206 === (2))){
var inst_26203 = (state_26205[(2)]);
var state_26205__$1 = state_26205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26205__$1,inst_26203);
} else {
return null;
}
}
});})(c__21431__auto__))
;
return ((function (switch__21329__auto__,c__21431__auto__){
return (function() {
var rooms$events$publish_BANG__$_state_machine__21330__auto__ = null;
var rooms$events$publish_BANG__$_state_machine__21330__auto____0 = (function (){
var statearr_26207 = [null,null,null,null,null,null,null];
(statearr_26207[(0)] = rooms$events$publish_BANG__$_state_machine__21330__auto__);

(statearr_26207[(1)] = (1));

return statearr_26207;
});
var rooms$events$publish_BANG__$_state_machine__21330__auto____1 = (function (state_26205){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_26205);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e26208){if((e26208 instanceof Object)){
var ex__21333__auto__ = e26208;
var statearr_26209_26211 = state_26205;
(statearr_26209_26211[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26205);

return cljs.core.cst$kw$recur;
} else {
throw e26208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__26212 = state_26205;
state_26205 = G__26212;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
rooms$events$publish_BANG__$_state_machine__21330__auto__ = function(state_26205){
switch(arguments.length){
case 0:
return rooms$events$publish_BANG__$_state_machine__21330__auto____0.call(this);
case 1:
return rooms$events$publish_BANG__$_state_machine__21330__auto____1.call(this,state_26205);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$events$publish_BANG__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$events$publish_BANG__$_state_machine__21330__auto____0;
rooms$events$publish_BANG__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$events$publish_BANG__$_state_machine__21330__auto____1;
return rooms$events$publish_BANG__$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_26210 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_26210[(6)] = c__21431__auto__);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});
