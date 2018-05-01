// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.communication');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('rooms.config');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('goog.string');
rooms.communication.query = (function rooms$communication$query(var_args){
var G__52298 = arguments.length;
switch (G__52298) {
case 3:
return rooms.communication.query.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rooms.communication.query.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rooms.communication.query.cljs$core$IFn$_invoke$arity$3 = (function (uri,method,response_handler){
return rooms.communication.query.call(null,uri,method,response_handler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"retry","retry",-614012896),(0),new cljs.core.Keyword(null,"wait-timeout","wait-timeout",975782279),(0)], null));
});

rooms.communication.query.cljs$core$IFn$_invoke$arity$4 = (function (uri,method,p__52299,p__52300){
var map__52301 = p__52299;
var map__52301__$1 = ((((!((map__52301 == null)))?((((map__52301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52301):map__52301);
var response_handler = map__52301__$1;
var success = cljs.core.get.call(null,map__52301__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__52301__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__52302 = p__52300;
var map__52302__$1 = ((((!((map__52302 == null)))?((((map__52302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52302):map__52302);
var opts = map__52302__$1;
var retry = cljs.core.get.call(null,map__52302__$1,new cljs.core.Keyword(null,"retry","retry",-614012896));
var wait_timeout = cljs.core.get.call(null,map__52302__$1,new cljs.core.Keyword(null,"wait-timeout","wait-timeout",975782279));
var full_uri = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.server_base_url.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
var handler = ((function (full_uri,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout){
return (function (p__52305){
var vec__52306 = p__52305;
var _ = cljs.core.nth.call(null,vec__52306,(0),null);
var response = cljs.core.nth.call(null,vec__52306,(1),null);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response),(200))){
if((retry < (3))){
return rooms.communication.query.call(null,uri,method,response_handler,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"retry","retry",-614012896),(retry + (1)),new cljs.core.Keyword(null,"wait-timeout","wait-timeout",975782279),(wait_timeout + (2000))], null));
} else {
return error.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));
}
} else {
return success.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));

}
});})(full_uri,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout))
;
var c__33437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout){
return (function (){
var f__33438__auto__ = (function (){var switch__33414__auto__ = ((function (c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout){
return (function (state_52324){
var state_val_52325 = (state_52324[(1)]);
if((state_val_52325 === (1))){
var state_52324__$1 = state_52324;
if(cljs.core.truth_(wait_timeout)){
var statearr_52326_52339 = state_52324__$1;
(statearr_52326_52339[(1)] = (2));

} else {
var statearr_52327_52340 = state_52324__$1;
(statearr_52327_52340[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52325 === (2))){
var inst_52310 = cljs.core.async.timeout.call(null,wait_timeout);
var state_52324__$1 = state_52324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52324__$1,(5),inst_52310);
} else {
if((state_val_52325 === (3))){
var state_52324__$1 = state_52324;
var statearr_52328_52341 = state_52324__$1;
(statearr_52328_52341[(2)] = null);

(statearr_52328_52341[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52325 === (4))){
var inst_52315 = (state_52324[(2)]);
var inst_52316 = [new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"handler","handler",-195596612),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776)];
var inst_52317 = ajax.core.ring_response_format.call(null);
var inst_52319 = (function (){return ((function (inst_52315,inst_52316,inst_52317,state_val_52325,c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout){
return (function (p__52318){
var vec__52329 = p__52318;
var _ = cljs.core.nth.call(null,vec__52329,(0),null);
var response = cljs.core.nth.call(null,vec__52329,(1),null);
return error.call(null,new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response));
});
;})(inst_52315,inst_52316,inst_52317,state_val_52325,c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout))
})();
var inst_52320 = [full_uri,method,handler,inst_52317,inst_52319];
var inst_52321 = cljs.core.PersistentHashMap.fromArrays(inst_52316,inst_52320);
var inst_52322 = ajax.core.ajax_request.call(null,inst_52321);
var state_52324__$1 = (function (){var statearr_52332 = state_52324;
(statearr_52332[(7)] = inst_52315);

return statearr_52332;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52324__$1,inst_52322);
} else {
if((state_val_52325 === (5))){
var inst_52312 = (state_52324[(2)]);
var state_52324__$1 = state_52324;
var statearr_52333_52342 = state_52324__$1;
(statearr_52333_52342[(2)] = inst_52312);

(statearr_52333_52342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout))
;
return ((function (switch__33414__auto__,c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout){
return (function() {
var rooms$communication$state_machine__33415__auto__ = null;
var rooms$communication$state_machine__33415__auto____0 = (function (){
var statearr_52334 = [null,null,null,null,null,null,null,null];
(statearr_52334[(0)] = rooms$communication$state_machine__33415__auto__);

(statearr_52334[(1)] = (1));

return statearr_52334;
});
var rooms$communication$state_machine__33415__auto____1 = (function (state_52324){
while(true){
var ret_value__33416__auto__ = (function (){try{while(true){
var result__33417__auto__ = switch__33414__auto__.call(null,state_52324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33417__auto__;
}
break;
}
}catch (e52335){if((e52335 instanceof Object)){
var ex__33418__auto__ = e52335;
var statearr_52336_52343 = state_52324;
(statearr_52336_52343[(5)] = ex__33418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52344 = state_52324;
state_52324 = G__52344;
continue;
} else {
return ret_value__33416__auto__;
}
break;
}
});
rooms$communication$state_machine__33415__auto__ = function(state_52324){
switch(arguments.length){
case 0:
return rooms$communication$state_machine__33415__auto____0.call(this);
case 1:
return rooms$communication$state_machine__33415__auto____1.call(this,state_52324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$communication$state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$communication$state_machine__33415__auto____0;
rooms$communication$state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$communication$state_machine__33415__auto____1;
return rooms$communication$state_machine__33415__auto__;
})()
;})(switch__33414__auto__,c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout))
})();
var state__33439__auto__ = (function (){var statearr_52337 = f__33438__auto__.call(null);
(statearr_52337[(6)] = c__33437__auto__);

return statearr_52337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33439__auto__);
});})(c__33437__auto__,full_uri,handler,map__52301,map__52301__$1,response_handler,success,error,map__52302,map__52302__$1,opts,retry,wait_timeout))
);

return c__33437__auto__;
});

rooms.communication.query.cljs$lang$maxFixedArity = 4;

rooms.communication.fetch_rooms = (function rooms$communication$fetch_rooms(day_str,p__52345,p__52346){
var map__52347 = p__52345;
var map__52347__$1 = ((((!((map__52347 == null)))?((((map__52347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52347.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52347):map__52347);
var response_handler = map__52347__$1;
var success = cljs.core.get.call(null,map__52347__$1,new cljs.core.Keyword(null,"success","success",1890645906));
var error = cljs.core.get.call(null,map__52347__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var map__52348 = p__52346;
var map__52348__$1 = ((((!((map__52348 == null)))?((((map__52348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52348):map__52348);
var opts = map__52348__$1;
var use_cache_QMARK_ = cljs.core.get.call(null,map__52348__$1,new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778));
var handle_response = ((function (map__52347,map__52347__$1,response_handler,success,error,map__52348,map__52348__$1,opts,use_cache_QMARK_){
return (function (response,callback){
var reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
var json_as_cljs = cognitect.transit.read.call(null,reader,response);
var json_as_cljs__$1 = clojure.walk.keywordize_keys.call(null,json_as_cljs);
return callback.call(null,new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(json_as_cljs__$1));
});})(map__52347,map__52347__$1,response_handler,success,error,map__52348,map__52348__$1,opts,use_cache_QMARK_))
;
return rooms.communication.query.call(null,day_str,new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"success","success",1890645906),((function (handle_response,map__52347,map__52347__$1,response_handler,success,error,map__52348,map__52348__$1,opts,use_cache_QMARK_){
return (function (response){
return handle_response.call(null,response,success);
});})(handle_response,map__52347,map__52347__$1,response_handler,success,error,map__52348,map__52348__$1,opts,use_cache_QMARK_))
,new cljs.core.Keyword(null,"error","error",-978969032),((function (handle_response,map__52347,map__52347__$1,response_handler,success,error,map__52348,map__52348__$1,opts,use_cache_QMARK_){
return (function (response){
return handle_response.call(null,response,error);
});})(handle_response,map__52347,map__52347__$1,response_handler,success,error,map__52348,map__52348__$1,opts,use_cache_QMARK_))
], null));
});

//# sourceMappingURL=communication.js.map?rel=1525170770948
