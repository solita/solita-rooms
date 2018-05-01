// Compiled by ClojureScript 1.9.946 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55589 = arguments.length;
var i__31459__auto___55590 = (0);
while(true){
if((i__31459__auto___55590 < len__31458__auto___55589)){
args__31465__auto__.push((arguments[i__31459__auto___55590]));

var G__55591 = (i__31459__auto___55590 + (1));
i__31459__auto___55590 = G__55591;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq55587){
var G__55588 = cljs.core.first.call(null,seq55587);
var seq55587__$1 = cljs.core.next.call(null,seq55587);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__55588,seq55587__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55594 = arguments.length;
var i__31459__auto___55595 = (0);
while(true){
if((i__31459__auto___55595 < len__31458__auto___55594)){
args__31465__auto__.push((arguments[i__31459__auto___55595]));

var G__55596 = (i__31459__auto___55595 + (1));
i__31459__auto___55595 = G__55596;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq55592){
var G__55593 = cljs.core.first.call(null,seq55592);
var seq55592__$1 = cljs.core.next.call(null,seq55592);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__55593,seq55592__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55599 = arguments.length;
var i__31459__auto___55600 = (0);
while(true){
if((i__31459__auto___55600 < len__31458__auto___55599)){
args__31465__auto__.push((arguments[i__31459__auto___55600]));

var G__55601 = (i__31459__auto___55600 + (1));
i__31459__auto___55600 = G__55601;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq55597){
var G__55598 = cljs.core.first.call(null,seq55597);
var seq55597__$1 = cljs.core.next.call(null,seq55597);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__55598,seq55597__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55604 = arguments.length;
var i__31459__auto___55605 = (0);
while(true){
if((i__31459__auto___55605 < len__31458__auto___55604)){
args__31465__auto__.push((arguments[i__31459__auto___55605]));

var G__55606 = (i__31459__auto___55605 + (1));
i__31459__auto___55605 = G__55606;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq55602){
var G__55603 = cljs.core.first.call(null,seq55602);
var seq55602__$1 = cljs.core.next.call(null,seq55602);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__55603,seq55602__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55609 = arguments.length;
var i__31459__auto___55610 = (0);
while(true){
if((i__31459__auto___55610 < len__31458__auto___55609)){
args__31465__auto__.push((arguments[i__31459__auto___55610]));

var G__55611 = (i__31459__auto___55610 + (1));
i__31459__auto___55610 = G__55611;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq55607){
var G__55608 = cljs.core.first.call(null,seq55607);
var seq55607__$1 = cljs.core.next.call(null,seq55607);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__55608,seq55607__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55614 = arguments.length;
var i__31459__auto___55615 = (0);
while(true){
if((i__31459__auto___55615 < len__31458__auto___55614)){
args__31465__auto__.push((arguments[i__31459__auto___55615]));

var G__55616 = (i__31459__auto___55615 + (1));
i__31459__auto___55615 = G__55616;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq55612){
var G__55613 = cljs.core.first.call(null,seq55612);
var seq55612__$1 = cljs.core.next.call(null,seq55612);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__55613,seq55612__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55619 = arguments.length;
var i__31459__auto___55620 = (0);
while(true){
if((i__31459__auto___55620 < len__31458__auto___55619)){
args__31465__auto__.push((arguments[i__31459__auto___55620]));

var G__55621 = (i__31459__auto___55620 + (1));
i__31459__auto___55620 = G__55621;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq55617){
var G__55618 = cljs.core.first.call(null,seq55617);
var seq55617__$1 = cljs.core.next.call(null,seq55617);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__55618,seq55617__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55624 = arguments.length;
var i__31459__auto___55625 = (0);
while(true){
if((i__31459__auto___55625 < len__31458__auto___55624)){
args__31465__auto__.push((arguments[i__31459__auto___55625]));

var G__55626 = (i__31459__auto___55625 + (1));
i__31459__auto___55625 = G__55626;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq55622){
var G__55623 = cljs.core.first.call(null,seq55622);
var seq55622__$1 = cljs.core.next.call(null,seq55622);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__55623,seq55622__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__31465__auto__ = [];
var len__31458__auto___55629 = arguments.length;
var i__31459__auto___55630 = (0);
while(true){
if((i__31459__auto___55630 < len__31458__auto___55629)){
args__31465__auto__.push((arguments[i__31459__auto___55630]));

var G__55631 = (i__31459__auto___55630 + (1));
i__31459__auto___55630 = G__55631;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__32677__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__32677__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__32677__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq55627){
var G__55628 = cljs.core.first.call(null,seq55627);
var seq55627__$1 = cljs.core.next.call(null,seq55627);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__55628,seq55627__$1);
});


//# sourceMappingURL=core.js.map?rel=1523638674631
