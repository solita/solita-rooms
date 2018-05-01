// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452 = (function (val,meta18453){
this.val = val;
this.meta18453 = meta18453;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18454,meta18453__$1){
var self__ = this;
var _18454__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452(self__.val,meta18453__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18454){
var self__ = this;
var _18454__$1 = this;
return self__.meta18453;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$val,cljs.core.cst$sym$meta18453], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18452";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels18452");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels18452 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels18452(val__$1,meta18453){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452(val__$1,meta18453));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels18452(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$handler,cljs.core.cst$sym$val], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto__.call(null,this$));
} else {
var m__9650__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9650__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_18466 = self__.puts.pop();
if((putter_18466 == null)){
} else {
var put_handler_18467 = putter_18466.handler;
var val_18468 = putter_18466.val;
if(put_handler_18467.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_18469 = put_handler_18467.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_18469,put_handler_18467,val_18468,putter_18466,this$__$1){
return (function (){
return (put_cb_18469.cljs$core$IFn$_invoke$arity$1 ? put_cb_18469.cljs$core$IFn$_invoke$arity$1(true) : put_cb_18469.call(null,true));
});})(put_cb_18469,put_handler_18467,val_18468,putter_18466,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return cljs.core.async.impl.channels.box(!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__8904__auto__ = self__.buf;
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__8904__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0)))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__18470 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__18470;
continue;
} else {
var G__18471 = takers;
takers = G__18471;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__18455_18472 = cljs.core.seq(take_cbs);
var chunk__18456_18473 = null;
var count__18457_18474 = (0);
var i__18458_18475 = (0);
while(true){
if((i__18458_18475 < count__18457_18474)){
var f_18476 = chunk__18456_18473.cljs$core$IIndexed$_nth$arity$2(null,i__18458_18475);
cljs.core.async.impl.dispatch.run(f_18476);

var G__18477 = seq__18455_18472;
var G__18478 = chunk__18456_18473;
var G__18479 = count__18457_18474;
var G__18480 = (i__18458_18475 + (1));
seq__18455_18472 = G__18477;
chunk__18456_18473 = G__18478;
count__18457_18474 = G__18479;
i__18458_18475 = G__18480;
continue;
} else {
var temp__5457__auto___18481 = cljs.core.seq(seq__18455_18472);
if(temp__5457__auto___18481){
var seq__18455_18482__$1 = temp__5457__auto___18481;
if(cljs.core.chunked_seq_QMARK_(seq__18455_18482__$1)){
var c__9847__auto___18483 = cljs.core.chunk_first(seq__18455_18482__$1);
var G__18484 = cljs.core.chunk_rest(seq__18455_18482__$1);
var G__18485 = c__9847__auto___18483;
var G__18486 = cljs.core.count(c__9847__auto___18483);
var G__18487 = (0);
seq__18455_18472 = G__18484;
chunk__18456_18473 = G__18485;
count__18457_18474 = G__18486;
i__18458_18475 = G__18487;
continue;
} else {
var f_18488 = cljs.core.first(seq__18455_18482__$1);
cljs.core.async.impl.dispatch.run(f_18488);

var G__18489 = cljs.core.next(seq__18455_18482__$1);
var G__18490 = null;
var G__18491 = (0);
var G__18492 = (0);
seq__18455_18472 = G__18489;
chunk__18456_18473 = G__18490;
count__18457_18474 = G__18491;
i__18458_18475 = G__18492;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit(taker);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count(self__.buf) > (0)))){
var temp__5455__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__18459 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__8904__auto__ = put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(and__8904__auto__){
return put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8904__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0)))){
var G__18493 = cbs__$1;
cbs = G__18493;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18459,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__18462_18494 = cljs.core.seq(cbs);
var chunk__18463_18495 = null;
var count__18464_18496 = (0);
var i__18465_18497 = (0);
while(true){
if((i__18465_18497 < count__18464_18496)){
var cb_18498 = chunk__18463_18495.cljs$core$IIndexed$_nth$arity$2(null,i__18465_18497);
cljs.core.async.impl.dispatch.run(((function (seq__18462_18494,chunk__18463_18495,count__18464_18496,i__18465_18497,cb_18498,val,vec__18459,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_18498.cljs$core$IFn$_invoke$arity$1 ? cb_18498.cljs$core$IFn$_invoke$arity$1(true) : cb_18498.call(null,true));
});})(seq__18462_18494,chunk__18463_18495,count__18464_18496,i__18465_18497,cb_18498,val,vec__18459,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__18499 = seq__18462_18494;
var G__18500 = chunk__18463_18495;
var G__18501 = count__18464_18496;
var G__18502 = (i__18465_18497 + (1));
seq__18462_18494 = G__18499;
chunk__18463_18495 = G__18500;
count__18464_18496 = G__18501;
i__18465_18497 = G__18502;
continue;
} else {
var temp__5457__auto___18503 = cljs.core.seq(seq__18462_18494);
if(temp__5457__auto___18503){
var seq__18462_18504__$1 = temp__5457__auto___18503;
if(cljs.core.chunked_seq_QMARK_(seq__18462_18504__$1)){
var c__9847__auto___18505 = cljs.core.chunk_first(seq__18462_18504__$1);
var G__18506 = cljs.core.chunk_rest(seq__18462_18504__$1);
var G__18507 = c__9847__auto___18505;
var G__18508 = cljs.core.count(c__9847__auto___18505);
var G__18509 = (0);
seq__18462_18494 = G__18506;
chunk__18463_18495 = G__18507;
count__18464_18496 = G__18508;
i__18465_18497 = G__18509;
continue;
} else {
var cb_18510 = cljs.core.first(seq__18462_18504__$1);
cljs.core.async.impl.dispatch.run(((function (seq__18462_18494,chunk__18463_18495,count__18464_18496,i__18465_18497,cb_18510,seq__18462_18504__$1,temp__5457__auto___18503,val,vec__18459,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return (cb_18510.cljs$core$IFn$_invoke$arity$1 ? cb_18510.cljs$core$IFn$_invoke$arity$1(true) : cb_18510.call(null,true));
});})(seq__18462_18494,chunk__18463_18495,count__18464_18496,i__18465_18497,cb_18510,seq__18462_18504__$1,temp__5457__auto___18503,val,vec__18459,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__18511 = cljs.core.next(seq__18462_18504__$1);
var G__18512 = null;
var G__18513 = (0);
var G__18514 = (0);
seq__18462_18494 = G__18511;
chunk__18463_18495 = G__18512;
count__18464_18496 = G__18513;
i__18465_18497 = G__18514;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run(((function (put_cb,putter,this$__$1){
return (function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__8904__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__8904__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__8904__auto__;
}
})())){
var has_val = (function (){var and__8904__auto__ = self__.buf;
if(cljs.core.truth_(and__8904__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8904__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__8904__auto__ = self__.buf;
if(cljs.core.truth_(and__8904__auto__)){
return (self__.puts.length === (0));
} else {
return and__8904__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_18515 = self__.takes.pop();
if((taker_18515 == null)){
} else {
if(taker_18515.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_18516 = taker_18515.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_18517 = (cljs.core.truth_((function (){var and__8904__auto__ = self__.buf;
if(cljs.core.truth_(and__8904__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__8904__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_18516,val_18517,taker_18515,this$__$1){
return (function (){
return (take_cb_18516.cljs$core$IFn$_invoke$arity$1 ? take_cb_18516.cljs$core$IFn$_invoke$arity$1(val_18517) : take_cb_18516.call(null,val_18517));
});})(take_cb_18516,val_18517,taker_18515,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$takes,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_takes,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$puts,cljs.core.with_meta(cljs.core.cst$sym$dirty_DASH_puts,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.with_meta(cljs.core.cst$sym$buf,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$not_DASH_native], null)),cljs.core.with_meta(cljs.core.cst$sym$closed,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$mutable,true], null)),cljs.core.cst$sym$add_BANG_], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__18518 = (function (){var or__8916__auto__ = exh;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__18518.cljs$core$IFn$_invoke$arity$1 ? fexpr__18518.cljs$core$IFn$_invoke$arity$1(t) : fexpr__18518.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__18520 = arguments.length;
switch (G__18520) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__18524 = null;
var G__18524__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e18521){var t = e18521;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__18524__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e18522){var t = e18522;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__18524 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__18524__1.call(this,buf__$1);
case 2:
return G__18524__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18524.cljs$core$IFn$_invoke$arity$1 = G__18524__1;
G__18524.cljs$core$IFn$_invoke$arity$2 = G__18524__2;
return G__18524;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;

