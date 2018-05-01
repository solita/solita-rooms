// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('ajax.protocols');
goog.require('cljs.core');
goog.require('cljs.core.constants');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$3(this$,request,handler) : m__9650__auto__.call(null,this$,request,handler));
} else {
var m__9650__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,request,handler) : m__9650__auto____$1.call(null,this$,request,handler));
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._abort[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._status[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._status_text[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns all headers as a map.
 */
ajax.protocols._get_all_headers = (function ajax$protocols$_get_all_headers(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._get_all_headers[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (ajax.protocols._get_all_headers["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-all-headers",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._body[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(this$,header) : m__9650__auto__.call(null,this$,header));
} else {
var m__9650__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,header) : m__9650__auto____$1.call(null,this$,header));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._process_request[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__9650__auto__.call(null,this$,request));
} else {
var m__9650__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,request) : m__9650__auto____$1.call(null,this$,request));
} else {
throw cljs.core.missing_protocol("Interceptor.-process-request",this$);
}
}
}
});

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (ajax.protocols._process_response[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(this$,response) : m__9650__auto__.call(null,this$,response));
} else {
var m__9650__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,response) : m__9650__auto____$1.call(null,this$,response));
} else {
throw cljs.core.missing_protocol("Interceptor.-process-response",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k19026,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__19030 = k19026;
var G__19030__$1 = (((G__19030 instanceof cljs.core.Keyword))?G__19030.fqn:null);
switch (G__19030__$1) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19026,else__9607__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#ajax.protocols.Response{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$status,self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$body,self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$status_DASH_text,self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$headers,self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$was_DASH_aborted,self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19025){
var self__ = this;
var G__19025__$1 = this;
return (new cljs.core.RecordIter((0),G__19025__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$status,cljs.core.cst$kw$body,cljs.core.cst$kw$status_DASH_text,cljs.core.cst$kw$headers,cljs.core.cst$kw$was_DASH_aborted], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__19031 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-473222333 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__19031(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19027,other19028){
var self__ = this;
var this19027__$1 = this;
return (!((other19028 == null))) && ((this19027__$1.constructor === other19028.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19027__$1.status,other19028.status)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19027__$1.body,other19028.body)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19027__$1.status_text,other19028.status_text)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19027__$1.headers,other19028.headers)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19027__$1.was_aborted,other19028.was_aborted)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19027__$1.__extmap,other19028.__extmap));
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$status_DASH_text.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.cst$kw$was_DASH_aborted.cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$was_DASH_aborted,null,cljs.core.cst$kw$status_DASH_text,null,cljs.core.cst$kw$headers,null,cljs.core.cst$kw$status,null,cljs.core.cst$kw$body,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__19025){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__19032 = cljs.core.keyword_identical_QMARK_;
var expr__19033 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__19035 = cljs.core.cst$kw$status;
var G__19036 = expr__19033;
return (pred__19032.cljs$core$IFn$_invoke$arity$2 ? pred__19032.cljs$core$IFn$_invoke$arity$2(G__19035,G__19036) : pred__19032.call(null,G__19035,G__19036));
})())){
return (new ajax.protocols.Response(G__19025,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19037 = cljs.core.cst$kw$body;
var G__19038 = expr__19033;
return (pred__19032.cljs$core$IFn$_invoke$arity$2 ? pred__19032.cljs$core$IFn$_invoke$arity$2(G__19037,G__19038) : pred__19032.call(null,G__19037,G__19038));
})())){
return (new ajax.protocols.Response(self__.status,G__19025,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19039 = cljs.core.cst$kw$status_DASH_text;
var G__19040 = expr__19033;
return (pred__19032.cljs$core$IFn$_invoke$arity$2 ? pred__19032.cljs$core$IFn$_invoke$arity$2(G__19039,G__19040) : pred__19032.call(null,G__19039,G__19040));
})())){
return (new ajax.protocols.Response(self__.status,self__.body,G__19025,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19041 = cljs.core.cst$kw$headers;
var G__19042 = expr__19033;
return (pred__19032.cljs$core$IFn$_invoke$arity$2 ? pred__19032.cljs$core$IFn$_invoke$arity$2(G__19041,G__19042) : pred__19032.call(null,G__19041,G__19042));
})())){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__19025,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__19043 = cljs.core.cst$kw$was_DASH_aborted;
var G__19044 = expr__19033;
return (pred__19032.cljs$core$IFn$_invoke$arity$2 ? pred__19032.cljs$core$IFn$_invoke$arity$2(G__19043,G__19044) : pred__19032.call(null,G__19043,G__19044));
})())){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__19025,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__19025),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$status,self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$body,self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$status_DASH_text,self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$headers,self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$was_DASH_aborted,self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__19025){
var self__ = this;
var this__9603__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__19025,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$status,cljs.core.cst$sym$body,cljs.core.cst$sym$status_DASH_text,cljs.core.cst$sym$headers,cljs.core.cst$sym$was_DASH_aborted], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"ajax.protocols/Response");
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"ajax.protocols/Response");
});

ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__19029){
return (new ajax.protocols.Response(cljs.core.cst$kw$status.cljs$core$IFn$_invoke$arity$1(G__19029),cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(G__19029),cljs.core.cst$kw$status_DASH_text.cljs$core$IFn$_invoke$arity$1(G__19029),cljs.core.cst$kw$headers.cljs$core$IFn$_invoke$arity$1(G__19029),cljs.core.cst$kw$was_DASH_aborted.cljs$core$IFn$_invoke$arity$1(G__19029),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19029,cljs.core.cst$kw$status,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$body,cljs.core.cst$kw$status_DASH_text,cljs.core.cst$kw$headers,cljs.core.cst$kw$was_DASH_aborted], 0))),null));
});

