// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.communication');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('rooms.config');
goog.require('ajax.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('goog.string');
rooms.communication.query = (function rooms$communication$query(var_args){
var G__23380 = arguments.length;
switch (G__23380) {
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
return rooms.communication.query.cljs$core$IFn$_invoke$arity$4(uri,method,response_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$retry,(0),cljs.core.cst$kw$wait_DASH_timeout,(0)], null));
});

rooms.communication.query.cljs$core$IFn$_invoke$arity$4 = (function (uri,method,p__23381,p__23382){
var map__23383 = p__23381;
var map__23383__$1 = ((((!((map__23383 == null)))?((((map__23383.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23383.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23383):map__23383);
var response_handler = map__23383__$1;
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383__$1,cljs.core.cst$kw$success);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23383__$1,cljs.core.cst$kw$error);
var map__23384 = p__23382;
var map__23384__$1 = ((((!((map__23384 == null)))?((((map__23384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23384):map__23384);
var opts = map__23384__$1;
var retry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23384__$1,cljs.core.cst$kw$retry);
var wait_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23384__$1,cljs.core.cst$kw$wait_DASH_timeout);
var full_uri = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.server_base_url()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)].join('');
var handler = ((function (full_uri,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout){
return (function (p__23387){
var vec__23388 = p__23387;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23388,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23388,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(response),(200))){
if((retry < (3))){
return rooms.communication.query.cljs$core$IFn$_invoke$arity$4(uri,method,response_handler,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$retry,(retry + (1)),cljs.core.cst$kw$wait_DASH_timeout,(wait_timeout + (2000))], null));
} else {
var G__23391 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response);
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__23391) : error.call(null,G__23391));
}
} else {
var G__23392 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__23392) : success.call(null,G__23392));

}
});})(full_uri,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout))
;
var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout){
return (function (state_23408){
var state_val_23409 = (state_23408[(1)]);
if((state_val_23409 === (1))){
var state_23408__$1 = state_23408;
if(cljs.core.truth_(wait_timeout)){
var statearr_23410_23424 = state_23408__$1;
(statearr_23410_23424[(1)] = (2));

} else {
var statearr_23411_23425 = state_23408__$1;
(statearr_23411_23425[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23409 === (2))){
var inst_23394 = cljs.core.async.timeout(wait_timeout);
var state_23408__$1 = state_23408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23408__$1,(5),inst_23394);
} else {
if((state_val_23409 === (3))){
var state_23408__$1 = state_23408;
var statearr_23412_23426 = state_23408__$1;
(statearr_23412_23426[(2)] = null);

(statearr_23412_23426[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23409 === (4))){
var inst_23399 = (state_23408[(2)]);
var inst_23400 = [cljs.core.cst$kw$uri,cljs.core.cst$kw$method,cljs.core.cst$kw$handler,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$error_DASH_handler];
var inst_23401 = (ajax.core.ring_response_format.cljs$core$IFn$_invoke$arity$0 ? ajax.core.ring_response_format.cljs$core$IFn$_invoke$arity$0() : ajax.core.ring_response_format.call(null));
var inst_23403 = (function (){return ((function (inst_23399,inst_23400,inst_23401,state_val_23409,c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout){
return (function (p__23402){
var vec__23413 = p__23402;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23413,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23413,(1),null);
var G__23416 = cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(response);
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(G__23416) : error.call(null,G__23416));
});
;})(inst_23399,inst_23400,inst_23401,state_val_23409,c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout))
})();
var inst_23404 = [full_uri,method,handler,inst_23401,inst_23403];
var inst_23405 = cljs.core.PersistentHashMap.fromArrays(inst_23400,inst_23404);
var inst_23406 = (ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(inst_23405) : ajax.core.ajax_request.call(null,inst_23405));
var state_23408__$1 = (function (){var statearr_23417 = state_23408;
(statearr_23417[(7)] = inst_23399);

return statearr_23417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23408__$1,inst_23406);
} else {
if((state_val_23409 === (5))){
var inst_23396 = (state_23408[(2)]);
var state_23408__$1 = state_23408;
var statearr_23418_23427 = state_23408__$1;
(statearr_23418_23427[(2)] = inst_23396);

(statearr_23418_23427[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
});})(c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout))
;
return ((function (switch__21329__auto__,c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout){
return (function() {
var rooms$communication$state_machine__21330__auto__ = null;
var rooms$communication$state_machine__21330__auto____0 = (function (){
var statearr_23419 = [null,null,null,null,null,null,null,null];
(statearr_23419[(0)] = rooms$communication$state_machine__21330__auto__);

(statearr_23419[(1)] = (1));

return statearr_23419;
});
var rooms$communication$state_machine__21330__auto____1 = (function (state_23408){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_23408);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e23420){if((e23420 instanceof Object)){
var ex__21333__auto__ = e23420;
var statearr_23421_23428 = state_23408;
(statearr_23421_23428[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23408);

return cljs.core.cst$kw$recur;
} else {
throw e23420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__23429 = state_23408;
state_23408 = G__23429;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
rooms$communication$state_machine__21330__auto__ = function(state_23408){
switch(arguments.length){
case 0:
return rooms$communication$state_machine__21330__auto____0.call(this);
case 1:
return rooms$communication$state_machine__21330__auto____1.call(this,state_23408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$communication$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$communication$state_machine__21330__auto____0;
rooms$communication$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$communication$state_machine__21330__auto____1;
return rooms$communication$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout))
})();
var state__21433__auto__ = (function (){var statearr_23422 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_23422[(6)] = c__21431__auto__);

return statearr_23422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__,full_uri,handler,map__23383,map__23383__$1,response_handler,success,error,map__23384,map__23384__$1,opts,retry,wait_timeout))
);

return c__21431__auto__;
});

rooms.communication.query.cljs$lang$maxFixedArity = 4;

rooms.communication.fetch_rooms = (function rooms$communication$fetch_rooms(day_str,p__23430,p__23431){
var map__23432 = p__23430;
var map__23432__$1 = ((((!((map__23432 == null)))?((((map__23432.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23432.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23432):map__23432);
var response_handler = map__23432__$1;
var success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432__$1,cljs.core.cst$kw$success);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23432__$1,cljs.core.cst$kw$error);
var map__23433 = p__23431;
var map__23433__$1 = ((((!((map__23433 == null)))?((((map__23433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23433.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23433):map__23433);
var opts = map__23433__$1;
var use_cache_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23433__$1,cljs.core.cst$kw$use_DASH_cache_QMARK_);
var handle_response = ((function (map__23432,map__23432__$1,response_handler,success,error,map__23433,map__23433__$1,opts,use_cache_QMARK_){
return (function (response,callback){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$json);
var json_as_cljs = cognitect.transit.read(reader,response);
var json_as_cljs__$1 = clojure.walk.keywordize_keys(json_as_cljs);
var G__23436 = cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(json_as_cljs__$1);
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__23436) : callback.call(null,G__23436));
});})(map__23432,map__23432__$1,response_handler,success,error,map__23433,map__23433__$1,opts,use_cache_QMARK_))
;
return rooms.communication.query.cljs$core$IFn$_invoke$arity$3(day_str,cljs.core.cst$kw$get,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$success,((function (handle_response,map__23432,map__23432__$1,response_handler,success,error,map__23433,map__23433__$1,opts,use_cache_QMARK_){
return (function (response){
return handle_response(response,success);
});})(handle_response,map__23432,map__23432__$1,response_handler,success,error,map__23433,map__23433__$1,opts,use_cache_QMARK_))
,cljs.core.cst$kw$error,((function (handle_response,map__23432,map__23432__$1,response_handler,success,error,map__23433,map__23433__$1,opts,use_cache_QMARK_){
return (function (response){
return handle_response(response,error);
});})(handle_response,map__23432,map__23432__$1,response_handler,success,error,map__23433,map__23433__$1,opts,use_cache_QMARK_))
], null));
});
