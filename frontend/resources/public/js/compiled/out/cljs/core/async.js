// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21491 = arguments.length;
switch (G__21491) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21492 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21492 = (function (f,blockable,meta21493){
this.f = f;
this.blockable = blockable;
this.meta21493 = meta21493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21494,meta21493__$1){
var self__ = this;
var _21494__$1 = this;
return (new cljs.core.async.t_cljs$core$async21492(self__.f,self__.blockable,meta21493__$1));
});

cljs.core.async.t_cljs$core$async21492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21494){
var self__ = this;
var _21494__$1 = this;
return self__.meta21493;
});

cljs.core.async.t_cljs$core$async21492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta21493], null);
});

cljs.core.async.t_cljs$core$async21492.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21492";

cljs.core.async.t_cljs$core$async21492.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async21492");
});

cljs.core.async.__GT_t_cljs$core$async21492 = (function cljs$core$async$__GT_t_cljs$core$async21492(f__$1,blockable__$1,meta21493){
return (new cljs.core.async.t_cljs$core$async21492(f__$1,blockable__$1,meta21493));
});

}

return (new cljs.core.async.t_cljs$core$async21492(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__21498 = arguments.length;
switch (G__21498) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21501 = arguments.length;
switch (G__21501) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__21504 = arguments.length;
switch (G__21504) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21506 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21506) : fn1.call(null,val_21506));
} else {
cljs.core.async.impl.dispatch.run(((function (val_21506,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21506) : fn1.call(null,val_21506));
});})(val_21506,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__21508 = arguments.length;
switch (G__21508) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__9961__auto___21510 = n;
var x_21511 = (0);
while(true){
if((x_21511 < n__9961__auto___21510)){
(a[x_21511] = (0));

var G__21512 = (x_21511 + (1));
x_21511 = G__21512;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__21513 = (i + (1));
i = G__21513;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async21514 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21514 = (function (flag,meta21515){
this.flag = flag;
this.meta21515 = meta21515;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21516,meta21515__$1){
var self__ = this;
var _21516__$1 = this;
return (new cljs.core.async.t_cljs$core$async21514(self__.flag,meta21515__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21516){
var self__ = this;
var _21516__$1 = this;
return self__.meta21515;
});})(flag))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21514.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta21515], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21514.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21514.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21514";

cljs.core.async.t_cljs$core$async21514.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async21514");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21514 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21514(flag__$1,meta21515){
return (new cljs.core.async.t_cljs$core$async21514(flag__$1,meta21515));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21514(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21517 = (function (flag,cb,meta21518){
this.flag = flag;
this.cb = cb;
this.meta21518 = meta21518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21519,meta21518__$1){
var self__ = this;
var _21519__$1 = this;
return (new cljs.core.async.t_cljs$core$async21517(self__.flag,self__.cb,meta21518__$1));
});

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21519){
var self__ = this;
var _21519__$1 = this;
return self__.meta21518;
});

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta21518], null);
});

cljs.core.async.t_cljs$core$async21517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21517";

cljs.core.async.t_cljs$core$async21517.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async21517");
});

cljs.core.async.__GT_t_cljs$core$async21517 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21517(flag__$1,cb__$1,meta21518){
return (new cljs.core.async.t_cljs$core$async21517(flag__$1,cb__$1,meta21518));
});

}

return (new cljs.core.async.t_cljs$core$async21517(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21520_SHARP_){
var G__21522 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21520_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21522) : fret.call(null,G__21522));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21521_SHARP_){
var G__21523 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21521_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__21523) : fret.call(null,G__21523));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__8916__auto__ = wport;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21524 = (i + (1));
i = G__21524;
continue;
}
} else {
return null;
}
break;
}
})();
var or__8916__auto__ = ret;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5457__auto__ = (function (){var and__8904__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__8904__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___21530 = arguments.length;
var i__10196__auto___21531 = (0);
while(true){
if((i__10196__auto___21531 < len__10195__auto___21530)){
args__10202__auto__.push((arguments[i__10196__auto___21531]));

var G__21532 = (i__10196__auto___21531 + (1));
i__10196__auto___21531 = G__21532;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21527){
var map__21528 = p__21527;
var map__21528__$1 = ((((!((map__21528 == null)))?((((map__21528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21528.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21528):map__21528);
var opts = map__21528__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21525){
var G__21526 = cljs.core.first(seq21525);
var seq21525__$1 = cljs.core.next(seq21525);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21526,seq21525__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__21534 = arguments.length;
switch (G__21534) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21431__auto___21580 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___21580){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___21580){
return (function (state_21558){
var state_val_21559 = (state_21558[(1)]);
if((state_val_21559 === (7))){
var inst_21554 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
var statearr_21560_21581 = state_21558__$1;
(statearr_21560_21581[(2)] = inst_21554);

(statearr_21560_21581[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (1))){
var state_21558__$1 = state_21558;
var statearr_21561_21582 = state_21558__$1;
(statearr_21561_21582[(2)] = null);

(statearr_21561_21582[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (4))){
var inst_21537 = (state_21558[(7)]);
var inst_21537__$1 = (state_21558[(2)]);
var inst_21538 = (inst_21537__$1 == null);
var state_21558__$1 = (function (){var statearr_21562 = state_21558;
(statearr_21562[(7)] = inst_21537__$1);

return statearr_21562;
})();
if(cljs.core.truth_(inst_21538)){
var statearr_21563_21583 = state_21558__$1;
(statearr_21563_21583[(1)] = (5));

} else {
var statearr_21564_21584 = state_21558__$1;
(statearr_21564_21584[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (13))){
var state_21558__$1 = state_21558;
var statearr_21565_21585 = state_21558__$1;
(statearr_21565_21585[(2)] = null);

(statearr_21565_21585[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (6))){
var inst_21537 = (state_21558[(7)]);
var state_21558__$1 = state_21558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21558__$1,(11),to,inst_21537);
} else {
if((state_val_21559 === (3))){
var inst_21556 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21558__$1,inst_21556);
} else {
if((state_val_21559 === (12))){
var state_21558__$1 = state_21558;
var statearr_21566_21586 = state_21558__$1;
(statearr_21566_21586[(2)] = null);

(statearr_21566_21586[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (2))){
var state_21558__$1 = state_21558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21558__$1,(4),from);
} else {
if((state_val_21559 === (11))){
var inst_21547 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
if(cljs.core.truth_(inst_21547)){
var statearr_21567_21587 = state_21558__$1;
(statearr_21567_21587[(1)] = (12));

} else {
var statearr_21568_21588 = state_21558__$1;
(statearr_21568_21588[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (9))){
var state_21558__$1 = state_21558;
var statearr_21569_21589 = state_21558__$1;
(statearr_21569_21589[(2)] = null);

(statearr_21569_21589[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (5))){
var state_21558__$1 = state_21558;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21570_21590 = state_21558__$1;
(statearr_21570_21590[(1)] = (8));

} else {
var statearr_21571_21591 = state_21558__$1;
(statearr_21571_21591[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (14))){
var inst_21552 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
var statearr_21572_21592 = state_21558__$1;
(statearr_21572_21592[(2)] = inst_21552);

(statearr_21572_21592[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (10))){
var inst_21544 = (state_21558[(2)]);
var state_21558__$1 = state_21558;
var statearr_21573_21593 = state_21558__$1;
(statearr_21573_21593[(2)] = inst_21544);

(statearr_21573_21593[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21559 === (8))){
var inst_21541 = cljs.core.async.close_BANG_(to);
var state_21558__$1 = state_21558;
var statearr_21574_21594 = state_21558__$1;
(statearr_21574_21594[(2)] = inst_21541);

(statearr_21574_21594[(1)] = (10));


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
}
}
}
}
}
}
});})(c__21431__auto___21580))
;
return ((function (switch__21329__auto__,c__21431__auto___21580){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_21575 = [null,null,null,null,null,null,null,null];
(statearr_21575[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_21575[(1)] = (1));

return statearr_21575;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_21558){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21558);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21576){if((e21576 instanceof Object)){
var ex__21333__auto__ = e21576;
var statearr_21577_21595 = state_21558;
(statearr_21577_21595[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21558);

return cljs.core.cst$kw$recur;
} else {
throw e21576;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21596 = state_21558;
state_21558 = G__21596;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_21558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_21558);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___21580))
})();
var state__21433__auto__ = (function (){var statearr_21578 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21578[(6)] = c__21431__auto___21580);

return statearr_21578;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___21580))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__21597){
var vec__21598 = p__21597;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21598,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21598,(1),null);
var job = vec__21598;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__21431__auto___21769 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___21769,res,vec__21598,v,p,job,jobs,results){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___21769,res,vec__21598,v,p,job,jobs,results){
return (function (state_21605){
var state_val_21606 = (state_21605[(1)]);
if((state_val_21606 === (1))){
var state_21605__$1 = state_21605;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21605__$1,(2),res,v);
} else {
if((state_val_21606 === (2))){
var inst_21602 = (state_21605[(2)]);
var inst_21603 = cljs.core.async.close_BANG_(res);
var state_21605__$1 = (function (){var statearr_21607 = state_21605;
(statearr_21607[(7)] = inst_21602);

return statearr_21607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21605__$1,inst_21603);
} else {
return null;
}
}
});})(c__21431__auto___21769,res,vec__21598,v,p,job,jobs,results))
;
return ((function (switch__21329__auto__,c__21431__auto___21769,res,vec__21598,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0 = (function (){
var statearr_21608 = [null,null,null,null,null,null,null,null];
(statearr_21608[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__);

(statearr_21608[(1)] = (1));

return statearr_21608;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1 = (function (state_21605){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21605);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21609){if((e21609 instanceof Object)){
var ex__21333__auto__ = e21609;
var statearr_21610_21770 = state_21605;
(statearr_21610_21770[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21605);

return cljs.core.cst$kw$recur;
} else {
throw e21609;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21771 = state_21605;
state_21605 = G__21771;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = function(state_21605){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1.call(this,state_21605);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___21769,res,vec__21598,v,p,job,jobs,results))
})();
var state__21433__auto__ = (function (){var statearr_21611 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21611[(6)] = c__21431__auto___21769);

return statearr_21611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___21769,res,vec__21598,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21612){
var vec__21613 = p__21612;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21613,(1),null);
var job = vec__21613;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__9961__auto___21772 = n;
var __21773 = (0);
while(true){
if((__21773 < n__9961__auto___21772)){
var G__21616_21774 = type;
var G__21616_21775__$1 = (((G__21616_21774 instanceof cljs.core.Keyword))?G__21616_21774.fqn:null);
switch (G__21616_21775__$1) {
case "compute":
var c__21431__auto___21777 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21773,c__21431__auto___21777,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (__21773,c__21431__auto___21777,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async){
return (function (state_21629){
var state_val_21630 = (state_21629[(1)]);
if((state_val_21630 === (1))){
var state_21629__$1 = state_21629;
var statearr_21631_21778 = state_21629__$1;
(statearr_21631_21778[(2)] = null);

(statearr_21631_21778[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21630 === (2))){
var state_21629__$1 = state_21629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21629__$1,(4),jobs);
} else {
if((state_val_21630 === (3))){
var inst_21627 = (state_21629[(2)]);
var state_21629__$1 = state_21629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21629__$1,inst_21627);
} else {
if((state_val_21630 === (4))){
var inst_21619 = (state_21629[(2)]);
var inst_21620 = process(inst_21619);
var state_21629__$1 = state_21629;
if(cljs.core.truth_(inst_21620)){
var statearr_21632_21779 = state_21629__$1;
(statearr_21632_21779[(1)] = (5));

} else {
var statearr_21633_21780 = state_21629__$1;
(statearr_21633_21780[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21630 === (5))){
var state_21629__$1 = state_21629;
var statearr_21634_21781 = state_21629__$1;
(statearr_21634_21781[(2)] = null);

(statearr_21634_21781[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21630 === (6))){
var state_21629__$1 = state_21629;
var statearr_21635_21782 = state_21629__$1;
(statearr_21635_21782[(2)] = null);

(statearr_21635_21782[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21630 === (7))){
var inst_21625 = (state_21629[(2)]);
var state_21629__$1 = state_21629;
var statearr_21636_21783 = state_21629__$1;
(statearr_21636_21783[(2)] = inst_21625);

(statearr_21636_21783[(1)] = (3));


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
});})(__21773,c__21431__auto___21777,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async))
;
return ((function (__21773,switch__21329__auto__,c__21431__auto___21777,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0 = (function (){
var statearr_21637 = [null,null,null,null,null,null,null];
(statearr_21637[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__);

(statearr_21637[(1)] = (1));

return statearr_21637;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1 = (function (state_21629){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21629);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21638){if((e21638 instanceof Object)){
var ex__21333__auto__ = e21638;
var statearr_21639_21784 = state_21629;
(statearr_21639_21784[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21629);

return cljs.core.cst$kw$recur;
} else {
throw e21638;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21785 = state_21629;
state_21629 = G__21785;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = function(state_21629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1.call(this,state_21629);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__;
})()
;})(__21773,switch__21329__auto__,c__21431__auto___21777,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async))
})();
var state__21433__auto__ = (function (){var statearr_21640 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21640[(6)] = c__21431__auto___21777);

return statearr_21640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(__21773,c__21431__auto___21777,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async))
);


break;
case "async":
var c__21431__auto___21786 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21773,c__21431__auto___21786,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (__21773,c__21431__auto___21786,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async){
return (function (state_21653){
var state_val_21654 = (state_21653[(1)]);
if((state_val_21654 === (1))){
var state_21653__$1 = state_21653;
var statearr_21655_21787 = state_21653__$1;
(statearr_21655_21787[(2)] = null);

(statearr_21655_21787[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21654 === (2))){
var state_21653__$1 = state_21653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21653__$1,(4),jobs);
} else {
if((state_val_21654 === (3))){
var inst_21651 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21653__$1,inst_21651);
} else {
if((state_val_21654 === (4))){
var inst_21643 = (state_21653[(2)]);
var inst_21644 = async(inst_21643);
var state_21653__$1 = state_21653;
if(cljs.core.truth_(inst_21644)){
var statearr_21656_21788 = state_21653__$1;
(statearr_21656_21788[(1)] = (5));

} else {
var statearr_21657_21789 = state_21653__$1;
(statearr_21657_21789[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21654 === (5))){
var state_21653__$1 = state_21653;
var statearr_21658_21790 = state_21653__$1;
(statearr_21658_21790[(2)] = null);

(statearr_21658_21790[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21654 === (6))){
var state_21653__$1 = state_21653;
var statearr_21659_21791 = state_21653__$1;
(statearr_21659_21791[(2)] = null);

(statearr_21659_21791[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21654 === (7))){
var inst_21649 = (state_21653[(2)]);
var state_21653__$1 = state_21653;
var statearr_21660_21792 = state_21653__$1;
(statearr_21660_21792[(2)] = inst_21649);

(statearr_21660_21792[(1)] = (3));


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
});})(__21773,c__21431__auto___21786,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async))
;
return ((function (__21773,switch__21329__auto__,c__21431__auto___21786,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0 = (function (){
var statearr_21661 = [null,null,null,null,null,null,null];
(statearr_21661[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__);

(statearr_21661[(1)] = (1));

return statearr_21661;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1 = (function (state_21653){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21653);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21662){if((e21662 instanceof Object)){
var ex__21333__auto__ = e21662;
var statearr_21663_21793 = state_21653;
(statearr_21663_21793[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21653);

return cljs.core.cst$kw$recur;
} else {
throw e21662;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21794 = state_21653;
state_21653 = G__21794;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = function(state_21653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1.call(this,state_21653);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__;
})()
;})(__21773,switch__21329__auto__,c__21431__auto___21786,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async))
})();
var state__21433__auto__ = (function (){var statearr_21664 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21664[(6)] = c__21431__auto___21786);

return statearr_21664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(__21773,c__21431__auto___21786,G__21616_21774,G__21616_21775__$1,n__9961__auto___21772,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21616_21775__$1)].join('')));

}

var G__21795 = (__21773 + (1));
__21773 = G__21795;
continue;
} else {
}
break;
}

var c__21431__auto___21796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___21796,jobs,results,process,async){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___21796,jobs,results,process,async){
return (function (state_21686){
var state_val_21687 = (state_21686[(1)]);
if((state_val_21687 === (1))){
var state_21686__$1 = state_21686;
var statearr_21688_21797 = state_21686__$1;
(statearr_21688_21797[(2)] = null);

(statearr_21688_21797[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21687 === (2))){
var state_21686__$1 = state_21686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21686__$1,(4),from);
} else {
if((state_val_21687 === (3))){
var inst_21684 = (state_21686[(2)]);
var state_21686__$1 = state_21686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21686__$1,inst_21684);
} else {
if((state_val_21687 === (4))){
var inst_21667 = (state_21686[(7)]);
var inst_21667__$1 = (state_21686[(2)]);
var inst_21668 = (inst_21667__$1 == null);
var state_21686__$1 = (function (){var statearr_21689 = state_21686;
(statearr_21689[(7)] = inst_21667__$1);

return statearr_21689;
})();
if(cljs.core.truth_(inst_21668)){
var statearr_21690_21798 = state_21686__$1;
(statearr_21690_21798[(1)] = (5));

} else {
var statearr_21691_21799 = state_21686__$1;
(statearr_21691_21799[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21687 === (5))){
var inst_21670 = cljs.core.async.close_BANG_(jobs);
var state_21686__$1 = state_21686;
var statearr_21692_21800 = state_21686__$1;
(statearr_21692_21800[(2)] = inst_21670);

(statearr_21692_21800[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21687 === (6))){
var inst_21672 = (state_21686[(8)]);
var inst_21667 = (state_21686[(7)]);
var inst_21672__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_21673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21674 = [inst_21667,inst_21672__$1];
var inst_21675 = (new cljs.core.PersistentVector(null,2,(5),inst_21673,inst_21674,null));
var state_21686__$1 = (function (){var statearr_21693 = state_21686;
(statearr_21693[(8)] = inst_21672__$1);

return statearr_21693;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21686__$1,(8),jobs,inst_21675);
} else {
if((state_val_21687 === (7))){
var inst_21682 = (state_21686[(2)]);
var state_21686__$1 = state_21686;
var statearr_21694_21801 = state_21686__$1;
(statearr_21694_21801[(2)] = inst_21682);

(statearr_21694_21801[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21687 === (8))){
var inst_21672 = (state_21686[(8)]);
var inst_21677 = (state_21686[(2)]);
var state_21686__$1 = (function (){var statearr_21695 = state_21686;
(statearr_21695[(9)] = inst_21677);

return statearr_21695;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21686__$1,(9),results,inst_21672);
} else {
if((state_val_21687 === (9))){
var inst_21679 = (state_21686[(2)]);
var state_21686__$1 = (function (){var statearr_21696 = state_21686;
(statearr_21696[(10)] = inst_21679);

return statearr_21696;
})();
var statearr_21697_21802 = state_21686__$1;
(statearr_21697_21802[(2)] = null);

(statearr_21697_21802[(1)] = (2));


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
}
});})(c__21431__auto___21796,jobs,results,process,async))
;
return ((function (switch__21329__auto__,c__21431__auto___21796,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0 = (function (){
var statearr_21698 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__);

(statearr_21698[(1)] = (1));

return statearr_21698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1 = (function (state_21686){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21686);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21699){if((e21699 instanceof Object)){
var ex__21333__auto__ = e21699;
var statearr_21700_21803 = state_21686;
(statearr_21700_21803[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21686);

return cljs.core.cst$kw$recur;
} else {
throw e21699;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21804 = state_21686;
state_21686 = G__21804;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = function(state_21686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1.call(this,state_21686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___21796,jobs,results,process,async))
})();
var state__21433__auto__ = (function (){var statearr_21701 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21701[(6)] = c__21431__auto___21796);

return statearr_21701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___21796,jobs,results,process,async))
);


var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__,jobs,results,process,async){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__,jobs,results,process,async){
return (function (state_21739){
var state_val_21740 = (state_21739[(1)]);
if((state_val_21740 === (7))){
var inst_21735 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
var statearr_21741_21805 = state_21739__$1;
(statearr_21741_21805[(2)] = inst_21735);

(statearr_21741_21805[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (20))){
var state_21739__$1 = state_21739;
var statearr_21742_21806 = state_21739__$1;
(statearr_21742_21806[(2)] = null);

(statearr_21742_21806[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (1))){
var state_21739__$1 = state_21739;
var statearr_21743_21807 = state_21739__$1;
(statearr_21743_21807[(2)] = null);

(statearr_21743_21807[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (4))){
var inst_21704 = (state_21739[(7)]);
var inst_21704__$1 = (state_21739[(2)]);
var inst_21705 = (inst_21704__$1 == null);
var state_21739__$1 = (function (){var statearr_21744 = state_21739;
(statearr_21744[(7)] = inst_21704__$1);

return statearr_21744;
})();
if(cljs.core.truth_(inst_21705)){
var statearr_21745_21808 = state_21739__$1;
(statearr_21745_21808[(1)] = (5));

} else {
var statearr_21746_21809 = state_21739__$1;
(statearr_21746_21809[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (15))){
var inst_21717 = (state_21739[(8)]);
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21739__$1,(18),to,inst_21717);
} else {
if((state_val_21740 === (21))){
var inst_21730 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
var statearr_21747_21810 = state_21739__$1;
(statearr_21747_21810[(2)] = inst_21730);

(statearr_21747_21810[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (13))){
var inst_21732 = (state_21739[(2)]);
var state_21739__$1 = (function (){var statearr_21748 = state_21739;
(statearr_21748[(9)] = inst_21732);

return statearr_21748;
})();
var statearr_21749_21811 = state_21739__$1;
(statearr_21749_21811[(2)] = null);

(statearr_21749_21811[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (6))){
var inst_21704 = (state_21739[(7)]);
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21739__$1,(11),inst_21704);
} else {
if((state_val_21740 === (17))){
var inst_21725 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
if(cljs.core.truth_(inst_21725)){
var statearr_21750_21812 = state_21739__$1;
(statearr_21750_21812[(1)] = (19));

} else {
var statearr_21751_21813 = state_21739__$1;
(statearr_21751_21813[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (3))){
var inst_21737 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21739__$1,inst_21737);
} else {
if((state_val_21740 === (12))){
var inst_21714 = (state_21739[(10)]);
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21739__$1,(14),inst_21714);
} else {
if((state_val_21740 === (2))){
var state_21739__$1 = state_21739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21739__$1,(4),results);
} else {
if((state_val_21740 === (19))){
var state_21739__$1 = state_21739;
var statearr_21752_21814 = state_21739__$1;
(statearr_21752_21814[(2)] = null);

(statearr_21752_21814[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (11))){
var inst_21714 = (state_21739[(2)]);
var state_21739__$1 = (function (){var statearr_21753 = state_21739;
(statearr_21753[(10)] = inst_21714);

return statearr_21753;
})();
var statearr_21754_21815 = state_21739__$1;
(statearr_21754_21815[(2)] = null);

(statearr_21754_21815[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (9))){
var state_21739__$1 = state_21739;
var statearr_21755_21816 = state_21739__$1;
(statearr_21755_21816[(2)] = null);

(statearr_21755_21816[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (5))){
var state_21739__$1 = state_21739;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21756_21817 = state_21739__$1;
(statearr_21756_21817[(1)] = (8));

} else {
var statearr_21757_21818 = state_21739__$1;
(statearr_21757_21818[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (14))){
var inst_21717 = (state_21739[(8)]);
var inst_21719 = (state_21739[(11)]);
var inst_21717__$1 = (state_21739[(2)]);
var inst_21718 = (inst_21717__$1 == null);
var inst_21719__$1 = cljs.core.not(inst_21718);
var state_21739__$1 = (function (){var statearr_21758 = state_21739;
(statearr_21758[(8)] = inst_21717__$1);

(statearr_21758[(11)] = inst_21719__$1);

return statearr_21758;
})();
if(inst_21719__$1){
var statearr_21759_21819 = state_21739__$1;
(statearr_21759_21819[(1)] = (15));

} else {
var statearr_21760_21820 = state_21739__$1;
(statearr_21760_21820[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (16))){
var inst_21719 = (state_21739[(11)]);
var state_21739__$1 = state_21739;
var statearr_21761_21821 = state_21739__$1;
(statearr_21761_21821[(2)] = inst_21719);

(statearr_21761_21821[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (10))){
var inst_21711 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
var statearr_21762_21822 = state_21739__$1;
(statearr_21762_21822[(2)] = inst_21711);

(statearr_21762_21822[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (18))){
var inst_21722 = (state_21739[(2)]);
var state_21739__$1 = state_21739;
var statearr_21763_21823 = state_21739__$1;
(statearr_21763_21823[(2)] = inst_21722);

(statearr_21763_21823[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21740 === (8))){
var inst_21708 = cljs.core.async.close_BANG_(to);
var state_21739__$1 = state_21739;
var statearr_21764_21824 = state_21739__$1;
(statearr_21764_21824[(2)] = inst_21708);

(statearr_21764_21824[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21431__auto__,jobs,results,process,async))
;
return ((function (switch__21329__auto__,c__21431__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0 = (function (){
var statearr_21765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21765[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__);

(statearr_21765[(1)] = (1));

return statearr_21765;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1 = (function (state_21739){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21739);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21766){if((e21766 instanceof Object)){
var ex__21333__auto__ = e21766;
var statearr_21767_21825 = state_21739;
(statearr_21767_21825[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21739);

return cljs.core.cst$kw$recur;
} else {
throw e21766;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21826 = state_21739;
state_21739 = G__21826;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__ = function(state_21739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1.call(this,state_21739);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21330__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__,jobs,results,process,async))
})();
var state__21433__auto__ = (function (){var statearr_21768 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21768[(6)] = c__21431__auto__);

return statearr_21768;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__,jobs,results,process,async))
);

return c__21431__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__21828 = arguments.length;
switch (G__21828) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__21831 = arguments.length;
switch (G__21831) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__21834 = arguments.length;
switch (G__21834) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__21431__auto___21883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___21883,tc,fc){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___21883,tc,fc){
return (function (state_21860){
var state_val_21861 = (state_21860[(1)]);
if((state_val_21861 === (7))){
var inst_21856 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21862_21884 = state_21860__$1;
(statearr_21862_21884[(2)] = inst_21856);

(statearr_21862_21884[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (1))){
var state_21860__$1 = state_21860;
var statearr_21863_21885 = state_21860__$1;
(statearr_21863_21885[(2)] = null);

(statearr_21863_21885[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (4))){
var inst_21837 = (state_21860[(7)]);
var inst_21837__$1 = (state_21860[(2)]);
var inst_21838 = (inst_21837__$1 == null);
var state_21860__$1 = (function (){var statearr_21864 = state_21860;
(statearr_21864[(7)] = inst_21837__$1);

return statearr_21864;
})();
if(cljs.core.truth_(inst_21838)){
var statearr_21865_21886 = state_21860__$1;
(statearr_21865_21886[(1)] = (5));

} else {
var statearr_21866_21887 = state_21860__$1;
(statearr_21866_21887[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (13))){
var state_21860__$1 = state_21860;
var statearr_21867_21888 = state_21860__$1;
(statearr_21867_21888[(2)] = null);

(statearr_21867_21888[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (6))){
var inst_21837 = (state_21860[(7)]);
var inst_21843 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_21837) : p.call(null,inst_21837));
var state_21860__$1 = state_21860;
if(cljs.core.truth_(inst_21843)){
var statearr_21868_21889 = state_21860__$1;
(statearr_21868_21889[(1)] = (9));

} else {
var statearr_21869_21890 = state_21860__$1;
(statearr_21869_21890[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (3))){
var inst_21858 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21860__$1,inst_21858);
} else {
if((state_val_21861 === (12))){
var state_21860__$1 = state_21860;
var statearr_21870_21891 = state_21860__$1;
(statearr_21870_21891[(2)] = null);

(statearr_21870_21891[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (2))){
var state_21860__$1 = state_21860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21860__$1,(4),ch);
} else {
if((state_val_21861 === (11))){
var inst_21837 = (state_21860[(7)]);
var inst_21847 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21860__$1,(8),inst_21847,inst_21837);
} else {
if((state_val_21861 === (9))){
var state_21860__$1 = state_21860;
var statearr_21871_21892 = state_21860__$1;
(statearr_21871_21892[(2)] = tc);

(statearr_21871_21892[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (5))){
var inst_21840 = cljs.core.async.close_BANG_(tc);
var inst_21841 = cljs.core.async.close_BANG_(fc);
var state_21860__$1 = (function (){var statearr_21872 = state_21860;
(statearr_21872[(8)] = inst_21840);

return statearr_21872;
})();
var statearr_21873_21893 = state_21860__$1;
(statearr_21873_21893[(2)] = inst_21841);

(statearr_21873_21893[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (14))){
var inst_21854 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
var statearr_21874_21894 = state_21860__$1;
(statearr_21874_21894[(2)] = inst_21854);

(statearr_21874_21894[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (10))){
var state_21860__$1 = state_21860;
var statearr_21875_21895 = state_21860__$1;
(statearr_21875_21895[(2)] = fc);

(statearr_21875_21895[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21861 === (8))){
var inst_21849 = (state_21860[(2)]);
var state_21860__$1 = state_21860;
if(cljs.core.truth_(inst_21849)){
var statearr_21876_21896 = state_21860__$1;
(statearr_21876_21896[(1)] = (12));

} else {
var statearr_21877_21897 = state_21860__$1;
(statearr_21877_21897[(1)] = (13));

}

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
}
}
}
}
}
}
});})(c__21431__auto___21883,tc,fc))
;
return ((function (switch__21329__auto__,c__21431__auto___21883,tc,fc){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_21878 = [null,null,null,null,null,null,null,null,null];
(statearr_21878[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_21878[(1)] = (1));

return statearr_21878;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_21860){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21860);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21879){if((e21879 instanceof Object)){
var ex__21333__auto__ = e21879;
var statearr_21880_21898 = state_21860;
(statearr_21880_21898[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21860);

return cljs.core.cst$kw$recur;
} else {
throw e21879;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21899 = state_21860;
state_21860 = G__21899;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_21860){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_21860);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___21883,tc,fc))
})();
var state__21433__auto__ = (function (){var statearr_21881 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21881[(6)] = c__21431__auto___21883);

return statearr_21881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___21883,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__){
return (function (state_21920){
var state_val_21921 = (state_21920[(1)]);
if((state_val_21921 === (7))){
var inst_21916 = (state_21920[(2)]);
var state_21920__$1 = state_21920;
var statearr_21922_21940 = state_21920__$1;
(statearr_21922_21940[(2)] = inst_21916);

(statearr_21922_21940[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (1))){
var inst_21900 = init;
var state_21920__$1 = (function (){var statearr_21923 = state_21920;
(statearr_21923[(7)] = inst_21900);

return statearr_21923;
})();
var statearr_21924_21941 = state_21920__$1;
(statearr_21924_21941[(2)] = null);

(statearr_21924_21941[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (4))){
var inst_21903 = (state_21920[(8)]);
var inst_21903__$1 = (state_21920[(2)]);
var inst_21904 = (inst_21903__$1 == null);
var state_21920__$1 = (function (){var statearr_21925 = state_21920;
(statearr_21925[(8)] = inst_21903__$1);

return statearr_21925;
})();
if(cljs.core.truth_(inst_21904)){
var statearr_21926_21942 = state_21920__$1;
(statearr_21926_21942[(1)] = (5));

} else {
var statearr_21927_21943 = state_21920__$1;
(statearr_21927_21943[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (6))){
var inst_21900 = (state_21920[(7)]);
var inst_21903 = (state_21920[(8)]);
var inst_21907 = (state_21920[(9)]);
var inst_21907__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_21900,inst_21903) : f.call(null,inst_21900,inst_21903));
var inst_21908 = cljs.core.reduced_QMARK_(inst_21907__$1);
var state_21920__$1 = (function (){var statearr_21928 = state_21920;
(statearr_21928[(9)] = inst_21907__$1);

return statearr_21928;
})();
if(inst_21908){
var statearr_21929_21944 = state_21920__$1;
(statearr_21929_21944[(1)] = (8));

} else {
var statearr_21930_21945 = state_21920__$1;
(statearr_21930_21945[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (3))){
var inst_21918 = (state_21920[(2)]);
var state_21920__$1 = state_21920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21920__$1,inst_21918);
} else {
if((state_val_21921 === (2))){
var state_21920__$1 = state_21920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21920__$1,(4),ch);
} else {
if((state_val_21921 === (9))){
var inst_21907 = (state_21920[(9)]);
var inst_21900 = inst_21907;
var state_21920__$1 = (function (){var statearr_21931 = state_21920;
(statearr_21931[(7)] = inst_21900);

return statearr_21931;
})();
var statearr_21932_21946 = state_21920__$1;
(statearr_21932_21946[(2)] = null);

(statearr_21932_21946[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (5))){
var inst_21900 = (state_21920[(7)]);
var state_21920__$1 = state_21920;
var statearr_21933_21947 = state_21920__$1;
(statearr_21933_21947[(2)] = inst_21900);

(statearr_21933_21947[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (10))){
var inst_21914 = (state_21920[(2)]);
var state_21920__$1 = state_21920;
var statearr_21934_21948 = state_21920__$1;
(statearr_21934_21948[(2)] = inst_21914);

(statearr_21934_21948[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21921 === (8))){
var inst_21907 = (state_21920[(9)]);
var inst_21910 = cljs.core.deref(inst_21907);
var state_21920__$1 = state_21920;
var statearr_21935_21949 = state_21920__$1;
(statearr_21935_21949[(2)] = inst_21910);

(statearr_21935_21949[(1)] = (10));


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
}
}
});})(c__21431__auto__))
;
return ((function (switch__21329__auto__,c__21431__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21330__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21330__auto____0 = (function (){
var statearr_21936 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21936[(0)] = cljs$core$async$reduce_$_state_machine__21330__auto__);

(statearr_21936[(1)] = (1));

return statearr_21936;
});
var cljs$core$async$reduce_$_state_machine__21330__auto____1 = (function (state_21920){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21920);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21937){if((e21937 instanceof Object)){
var ex__21333__auto__ = e21937;
var statearr_21938_21950 = state_21920;
(statearr_21938_21950[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21920);

return cljs.core.cst$kw$recur;
} else {
throw e21937;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21951 = state_21920;
state_21920 = G__21951;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21330__auto__ = function(state_21920){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21330__auto____1.call(this,state_21920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21330__auto____0;
cljs$core$async$reduce_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21330__auto____1;
return cljs$core$async$reduce_$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_21939 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21939[(6)] = c__21431__auto__);

return statearr_21939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__,f__$1){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__,f__$1){
return (function (state_21957){
var state_val_21958 = (state_21957[(1)]);
if((state_val_21958 === (1))){
var inst_21952 = cljs.core.async.reduce(f__$1,init,ch);
var state_21957__$1 = state_21957;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21957__$1,(2),inst_21952);
} else {
if((state_val_21958 === (2))){
var inst_21954 = (state_21957[(2)]);
var inst_21955 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_21954) : f__$1.call(null,inst_21954));
var state_21957__$1 = state_21957;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21957__$1,inst_21955);
} else {
return null;
}
}
});})(c__21431__auto__,f__$1))
;
return ((function (switch__21329__auto__,c__21431__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__21330__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21330__auto____0 = (function (){
var statearr_21959 = [null,null,null,null,null,null,null];
(statearr_21959[(0)] = cljs$core$async$transduce_$_state_machine__21330__auto__);

(statearr_21959[(1)] = (1));

return statearr_21959;
});
var cljs$core$async$transduce_$_state_machine__21330__auto____1 = (function (state_21957){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21957);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e21960){if((e21960 instanceof Object)){
var ex__21333__auto__ = e21960;
var statearr_21961_21963 = state_21957;
(statearr_21961_21963[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21957);

return cljs.core.cst$kw$recur;
} else {
throw e21960;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__21964 = state_21957;
state_21957 = G__21964;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21330__auto__ = function(state_21957){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21330__auto____1.call(this,state_21957);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21330__auto____0;
cljs$core$async$transduce_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21330__auto____1;
return cljs$core$async$transduce_$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__,f__$1))
})();
var state__21433__auto__ = (function (){var statearr_21962 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_21962[(6)] = c__21431__auto__);

return statearr_21962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__,f__$1))
);

return c__21431__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__21966 = arguments.length;
switch (G__21966) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__){
return (function (state_21991){
var state_val_21992 = (state_21991[(1)]);
if((state_val_21992 === (7))){
var inst_21973 = (state_21991[(2)]);
var state_21991__$1 = state_21991;
var statearr_21993_22014 = state_21991__$1;
(statearr_21993_22014[(2)] = inst_21973);

(statearr_21993_22014[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (1))){
var inst_21967 = cljs.core.seq(coll);
var inst_21968 = inst_21967;
var state_21991__$1 = (function (){var statearr_21994 = state_21991;
(statearr_21994[(7)] = inst_21968);

return statearr_21994;
})();
var statearr_21995_22015 = state_21991__$1;
(statearr_21995_22015[(2)] = null);

(statearr_21995_22015[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (4))){
var inst_21968 = (state_21991[(7)]);
var inst_21971 = cljs.core.first(inst_21968);
var state_21991__$1 = state_21991;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21991__$1,(7),ch,inst_21971);
} else {
if((state_val_21992 === (13))){
var inst_21985 = (state_21991[(2)]);
var state_21991__$1 = state_21991;
var statearr_21996_22016 = state_21991__$1;
(statearr_21996_22016[(2)] = inst_21985);

(statearr_21996_22016[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (6))){
var inst_21976 = (state_21991[(2)]);
var state_21991__$1 = state_21991;
if(cljs.core.truth_(inst_21976)){
var statearr_21997_22017 = state_21991__$1;
(statearr_21997_22017[(1)] = (8));

} else {
var statearr_21998_22018 = state_21991__$1;
(statearr_21998_22018[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (3))){
var inst_21989 = (state_21991[(2)]);
var state_21991__$1 = state_21991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21991__$1,inst_21989);
} else {
if((state_val_21992 === (12))){
var state_21991__$1 = state_21991;
var statearr_21999_22019 = state_21991__$1;
(statearr_21999_22019[(2)] = null);

(statearr_21999_22019[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (2))){
var inst_21968 = (state_21991[(7)]);
var state_21991__$1 = state_21991;
if(cljs.core.truth_(inst_21968)){
var statearr_22000_22020 = state_21991__$1;
(statearr_22000_22020[(1)] = (4));

} else {
var statearr_22001_22021 = state_21991__$1;
(statearr_22001_22021[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (11))){
var inst_21982 = cljs.core.async.close_BANG_(ch);
var state_21991__$1 = state_21991;
var statearr_22002_22022 = state_21991__$1;
(statearr_22002_22022[(2)] = inst_21982);

(statearr_22002_22022[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (9))){
var state_21991__$1 = state_21991;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22003_22023 = state_21991__$1;
(statearr_22003_22023[(1)] = (11));

} else {
var statearr_22004_22024 = state_21991__$1;
(statearr_22004_22024[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (5))){
var inst_21968 = (state_21991[(7)]);
var state_21991__$1 = state_21991;
var statearr_22005_22025 = state_21991__$1;
(statearr_22005_22025[(2)] = inst_21968);

(statearr_22005_22025[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (10))){
var inst_21987 = (state_21991[(2)]);
var state_21991__$1 = state_21991;
var statearr_22006_22026 = state_21991__$1;
(statearr_22006_22026[(2)] = inst_21987);

(statearr_22006_22026[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_21992 === (8))){
var inst_21968 = (state_21991[(7)]);
var inst_21978 = cljs.core.next(inst_21968);
var inst_21968__$1 = inst_21978;
var state_21991__$1 = (function (){var statearr_22007 = state_21991;
(statearr_22007[(7)] = inst_21968__$1);

return statearr_22007;
})();
var statearr_22008_22027 = state_21991__$1;
(statearr_22008_22027[(2)] = null);

(statearr_22008_22027[(1)] = (2));


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
}
}
}
}
}
});})(c__21431__auto__))
;
return ((function (switch__21329__auto__,c__21431__auto__){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_22009 = [null,null,null,null,null,null,null,null];
(statearr_22009[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_22009[(1)] = (1));

return statearr_22009;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_21991){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_21991);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22010){if((e22010 instanceof Object)){
var ex__21333__auto__ = e22010;
var statearr_22011_22028 = state_21991;
(statearr_22011_22028[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21991);

return cljs.core.cst$kw$recur;
} else {
throw e22010;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22029 = state_21991;
state_21991 = G__22029;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_21991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_21991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_22012 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22012[(6)] = c__21431__auto__);

return statearr_22012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__9649__auto__ = (((_ == null))?null:_);
var m__9650__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__9650__auto__.call(null,_));
} else {
var m__9650__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__9650__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9650__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__9650__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__9650__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9650__auto__.call(null,m,ch));
} else {
var m__9650__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9650__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9650__auto__.call(null,m));
} else {
var m__9650__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9650__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22030 = (function (ch,cs,meta22031){
this.ch = ch;
this.cs = cs;
this.meta22031 = meta22031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22032,meta22031__$1){
var self__ = this;
var _22032__$1 = this;
return (new cljs.core.async.t_cljs$core$async22030(self__.ch,self__.cs,meta22031__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22032){
var self__ = this;
var _22032__$1 = this;
return self__.meta22031;
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta22031], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22030";

cljs.core.async.t_cljs$core$async22030.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22030");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22030 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22030(ch__$1,cs__$1,meta22031){
return (new cljs.core.async.t_cljs$core$async22030(ch__$1,cs__$1,meta22031));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22030(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21431__auto___22252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22252,cs,m,dchan,dctr,done){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22252,cs,m,dchan,dctr,done){
return (function (state_22167){
var state_val_22168 = (state_22167[(1)]);
if((state_val_22168 === (7))){
var inst_22163 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22169_22253 = state_22167__$1;
(statearr_22169_22253[(2)] = inst_22163);

(statearr_22169_22253[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (20))){
var inst_22066 = (state_22167[(7)]);
var inst_22078 = cljs.core.first(inst_22066);
var inst_22079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22078,(0),null);
var inst_22080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22078,(1),null);
var state_22167__$1 = (function (){var statearr_22170 = state_22167;
(statearr_22170[(8)] = inst_22079);

return statearr_22170;
})();
if(cljs.core.truth_(inst_22080)){
var statearr_22171_22254 = state_22167__$1;
(statearr_22171_22254[(1)] = (22));

} else {
var statearr_22172_22255 = state_22167__$1;
(statearr_22172_22255[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (27))){
var inst_22108 = (state_22167[(9)]);
var inst_22115 = (state_22167[(10)]);
var inst_22035 = (state_22167[(11)]);
var inst_22110 = (state_22167[(12)]);
var inst_22115__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22108,inst_22110);
var inst_22116 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22115__$1,inst_22035,done);
var state_22167__$1 = (function (){var statearr_22173 = state_22167;
(statearr_22173[(10)] = inst_22115__$1);

return statearr_22173;
})();
if(cljs.core.truth_(inst_22116)){
var statearr_22174_22256 = state_22167__$1;
(statearr_22174_22256[(1)] = (30));

} else {
var statearr_22175_22257 = state_22167__$1;
(statearr_22175_22257[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (1))){
var state_22167__$1 = state_22167;
var statearr_22176_22258 = state_22167__$1;
(statearr_22176_22258[(2)] = null);

(statearr_22176_22258[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (24))){
var inst_22066 = (state_22167[(7)]);
var inst_22085 = (state_22167[(2)]);
var inst_22086 = cljs.core.next(inst_22066);
var inst_22044 = inst_22086;
var inst_22045 = null;
var inst_22046 = (0);
var inst_22047 = (0);
var state_22167__$1 = (function (){var statearr_22177 = state_22167;
(statearr_22177[(13)] = inst_22047);

(statearr_22177[(14)] = inst_22085);

(statearr_22177[(15)] = inst_22046);

(statearr_22177[(16)] = inst_22044);

(statearr_22177[(17)] = inst_22045);

return statearr_22177;
})();
var statearr_22178_22259 = state_22167__$1;
(statearr_22178_22259[(2)] = null);

(statearr_22178_22259[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (39))){
var state_22167__$1 = state_22167;
var statearr_22182_22260 = state_22167__$1;
(statearr_22182_22260[(2)] = null);

(statearr_22182_22260[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (4))){
var inst_22035 = (state_22167[(11)]);
var inst_22035__$1 = (state_22167[(2)]);
var inst_22036 = (inst_22035__$1 == null);
var state_22167__$1 = (function (){var statearr_22183 = state_22167;
(statearr_22183[(11)] = inst_22035__$1);

return statearr_22183;
})();
if(cljs.core.truth_(inst_22036)){
var statearr_22184_22261 = state_22167__$1;
(statearr_22184_22261[(1)] = (5));

} else {
var statearr_22185_22262 = state_22167__$1;
(statearr_22185_22262[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (15))){
var inst_22047 = (state_22167[(13)]);
var inst_22046 = (state_22167[(15)]);
var inst_22044 = (state_22167[(16)]);
var inst_22045 = (state_22167[(17)]);
var inst_22062 = (state_22167[(2)]);
var inst_22063 = (inst_22047 + (1));
var tmp22179 = inst_22046;
var tmp22180 = inst_22044;
var tmp22181 = inst_22045;
var inst_22044__$1 = tmp22180;
var inst_22045__$1 = tmp22181;
var inst_22046__$1 = tmp22179;
var inst_22047__$1 = inst_22063;
var state_22167__$1 = (function (){var statearr_22186 = state_22167;
(statearr_22186[(18)] = inst_22062);

(statearr_22186[(13)] = inst_22047__$1);

(statearr_22186[(15)] = inst_22046__$1);

(statearr_22186[(16)] = inst_22044__$1);

(statearr_22186[(17)] = inst_22045__$1);

return statearr_22186;
})();
var statearr_22187_22263 = state_22167__$1;
(statearr_22187_22263[(2)] = null);

(statearr_22187_22263[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (21))){
var inst_22089 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22191_22264 = state_22167__$1;
(statearr_22191_22264[(2)] = inst_22089);

(statearr_22191_22264[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (31))){
var inst_22115 = (state_22167[(10)]);
var inst_22119 = done(null);
var inst_22120 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22115);
var state_22167__$1 = (function (){var statearr_22192 = state_22167;
(statearr_22192[(19)] = inst_22119);

return statearr_22192;
})();
var statearr_22193_22265 = state_22167__$1;
(statearr_22193_22265[(2)] = inst_22120);

(statearr_22193_22265[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (32))){
var inst_22108 = (state_22167[(9)]);
var inst_22107 = (state_22167[(20)]);
var inst_22109 = (state_22167[(21)]);
var inst_22110 = (state_22167[(12)]);
var inst_22122 = (state_22167[(2)]);
var inst_22123 = (inst_22110 + (1));
var tmp22188 = inst_22108;
var tmp22189 = inst_22107;
var tmp22190 = inst_22109;
var inst_22107__$1 = tmp22189;
var inst_22108__$1 = tmp22188;
var inst_22109__$1 = tmp22190;
var inst_22110__$1 = inst_22123;
var state_22167__$1 = (function (){var statearr_22194 = state_22167;
(statearr_22194[(9)] = inst_22108__$1);

(statearr_22194[(20)] = inst_22107__$1);

(statearr_22194[(22)] = inst_22122);

(statearr_22194[(21)] = inst_22109__$1);

(statearr_22194[(12)] = inst_22110__$1);

return statearr_22194;
})();
var statearr_22195_22266 = state_22167__$1;
(statearr_22195_22266[(2)] = null);

(statearr_22195_22266[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (40))){
var inst_22135 = (state_22167[(23)]);
var inst_22139 = done(null);
var inst_22140 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_22135);
var state_22167__$1 = (function (){var statearr_22196 = state_22167;
(statearr_22196[(24)] = inst_22139);

return statearr_22196;
})();
var statearr_22197_22267 = state_22167__$1;
(statearr_22197_22267[(2)] = inst_22140);

(statearr_22197_22267[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (33))){
var inst_22126 = (state_22167[(25)]);
var inst_22128 = cljs.core.chunked_seq_QMARK_(inst_22126);
var state_22167__$1 = state_22167;
if(inst_22128){
var statearr_22198_22268 = state_22167__$1;
(statearr_22198_22268[(1)] = (36));

} else {
var statearr_22199_22269 = state_22167__$1;
(statearr_22199_22269[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (13))){
var inst_22056 = (state_22167[(26)]);
var inst_22059 = cljs.core.async.close_BANG_(inst_22056);
var state_22167__$1 = state_22167;
var statearr_22200_22270 = state_22167__$1;
(statearr_22200_22270[(2)] = inst_22059);

(statearr_22200_22270[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (22))){
var inst_22079 = (state_22167[(8)]);
var inst_22082 = cljs.core.async.close_BANG_(inst_22079);
var state_22167__$1 = state_22167;
var statearr_22201_22271 = state_22167__$1;
(statearr_22201_22271[(2)] = inst_22082);

(statearr_22201_22271[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (36))){
var inst_22126 = (state_22167[(25)]);
var inst_22130 = cljs.core.chunk_first(inst_22126);
var inst_22131 = cljs.core.chunk_rest(inst_22126);
var inst_22132 = cljs.core.count(inst_22130);
var inst_22107 = inst_22131;
var inst_22108 = inst_22130;
var inst_22109 = inst_22132;
var inst_22110 = (0);
var state_22167__$1 = (function (){var statearr_22202 = state_22167;
(statearr_22202[(9)] = inst_22108);

(statearr_22202[(20)] = inst_22107);

(statearr_22202[(21)] = inst_22109);

(statearr_22202[(12)] = inst_22110);

return statearr_22202;
})();
var statearr_22203_22272 = state_22167__$1;
(statearr_22203_22272[(2)] = null);

(statearr_22203_22272[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (41))){
var inst_22126 = (state_22167[(25)]);
var inst_22142 = (state_22167[(2)]);
var inst_22143 = cljs.core.next(inst_22126);
var inst_22107 = inst_22143;
var inst_22108 = null;
var inst_22109 = (0);
var inst_22110 = (0);
var state_22167__$1 = (function (){var statearr_22204 = state_22167;
(statearr_22204[(9)] = inst_22108);

(statearr_22204[(20)] = inst_22107);

(statearr_22204[(27)] = inst_22142);

(statearr_22204[(21)] = inst_22109);

(statearr_22204[(12)] = inst_22110);

return statearr_22204;
})();
var statearr_22205_22273 = state_22167__$1;
(statearr_22205_22273[(2)] = null);

(statearr_22205_22273[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (43))){
var state_22167__$1 = state_22167;
var statearr_22206_22274 = state_22167__$1;
(statearr_22206_22274[(2)] = null);

(statearr_22206_22274[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (29))){
var inst_22151 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22207_22275 = state_22167__$1;
(statearr_22207_22275[(2)] = inst_22151);

(statearr_22207_22275[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (44))){
var inst_22160 = (state_22167[(2)]);
var state_22167__$1 = (function (){var statearr_22208 = state_22167;
(statearr_22208[(28)] = inst_22160);

return statearr_22208;
})();
var statearr_22209_22276 = state_22167__$1;
(statearr_22209_22276[(2)] = null);

(statearr_22209_22276[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (6))){
var inst_22099 = (state_22167[(29)]);
var inst_22098 = cljs.core.deref(cs);
var inst_22099__$1 = cljs.core.keys(inst_22098);
var inst_22100 = cljs.core.count(inst_22099__$1);
var inst_22101 = cljs.core.reset_BANG_(dctr,inst_22100);
var inst_22106 = cljs.core.seq(inst_22099__$1);
var inst_22107 = inst_22106;
var inst_22108 = null;
var inst_22109 = (0);
var inst_22110 = (0);
var state_22167__$1 = (function (){var statearr_22210 = state_22167;
(statearr_22210[(30)] = inst_22101);

(statearr_22210[(9)] = inst_22108);

(statearr_22210[(20)] = inst_22107);

(statearr_22210[(29)] = inst_22099__$1);

(statearr_22210[(21)] = inst_22109);

(statearr_22210[(12)] = inst_22110);

return statearr_22210;
})();
var statearr_22211_22277 = state_22167__$1;
(statearr_22211_22277[(2)] = null);

(statearr_22211_22277[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (28))){
var inst_22107 = (state_22167[(20)]);
var inst_22126 = (state_22167[(25)]);
var inst_22126__$1 = cljs.core.seq(inst_22107);
var state_22167__$1 = (function (){var statearr_22212 = state_22167;
(statearr_22212[(25)] = inst_22126__$1);

return statearr_22212;
})();
if(inst_22126__$1){
var statearr_22213_22278 = state_22167__$1;
(statearr_22213_22278[(1)] = (33));

} else {
var statearr_22214_22279 = state_22167__$1;
(statearr_22214_22279[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (25))){
var inst_22109 = (state_22167[(21)]);
var inst_22110 = (state_22167[(12)]);
var inst_22112 = (inst_22110 < inst_22109);
var inst_22113 = inst_22112;
var state_22167__$1 = state_22167;
if(cljs.core.truth_(inst_22113)){
var statearr_22215_22280 = state_22167__$1;
(statearr_22215_22280[(1)] = (27));

} else {
var statearr_22216_22281 = state_22167__$1;
(statearr_22216_22281[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (34))){
var state_22167__$1 = state_22167;
var statearr_22217_22282 = state_22167__$1;
(statearr_22217_22282[(2)] = null);

(statearr_22217_22282[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (17))){
var state_22167__$1 = state_22167;
var statearr_22218_22283 = state_22167__$1;
(statearr_22218_22283[(2)] = null);

(statearr_22218_22283[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (3))){
var inst_22165 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22167__$1,inst_22165);
} else {
if((state_val_22168 === (12))){
var inst_22094 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22219_22284 = state_22167__$1;
(statearr_22219_22284[(2)] = inst_22094);

(statearr_22219_22284[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (2))){
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22167__$1,(4),ch);
} else {
if((state_val_22168 === (23))){
var state_22167__$1 = state_22167;
var statearr_22220_22285 = state_22167__$1;
(statearr_22220_22285[(2)] = null);

(statearr_22220_22285[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (35))){
var inst_22149 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22221_22286 = state_22167__$1;
(statearr_22221_22286[(2)] = inst_22149);

(statearr_22221_22286[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (19))){
var inst_22066 = (state_22167[(7)]);
var inst_22070 = cljs.core.chunk_first(inst_22066);
var inst_22071 = cljs.core.chunk_rest(inst_22066);
var inst_22072 = cljs.core.count(inst_22070);
var inst_22044 = inst_22071;
var inst_22045 = inst_22070;
var inst_22046 = inst_22072;
var inst_22047 = (0);
var state_22167__$1 = (function (){var statearr_22222 = state_22167;
(statearr_22222[(13)] = inst_22047);

(statearr_22222[(15)] = inst_22046);

(statearr_22222[(16)] = inst_22044);

(statearr_22222[(17)] = inst_22045);

return statearr_22222;
})();
var statearr_22223_22287 = state_22167__$1;
(statearr_22223_22287[(2)] = null);

(statearr_22223_22287[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (11))){
var inst_22066 = (state_22167[(7)]);
var inst_22044 = (state_22167[(16)]);
var inst_22066__$1 = cljs.core.seq(inst_22044);
var state_22167__$1 = (function (){var statearr_22224 = state_22167;
(statearr_22224[(7)] = inst_22066__$1);

return statearr_22224;
})();
if(inst_22066__$1){
var statearr_22225_22288 = state_22167__$1;
(statearr_22225_22288[(1)] = (16));

} else {
var statearr_22226_22289 = state_22167__$1;
(statearr_22226_22289[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (9))){
var inst_22096 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22227_22290 = state_22167__$1;
(statearr_22227_22290[(2)] = inst_22096);

(statearr_22227_22290[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (5))){
var inst_22042 = cljs.core.deref(cs);
var inst_22043 = cljs.core.seq(inst_22042);
var inst_22044 = inst_22043;
var inst_22045 = null;
var inst_22046 = (0);
var inst_22047 = (0);
var state_22167__$1 = (function (){var statearr_22228 = state_22167;
(statearr_22228[(13)] = inst_22047);

(statearr_22228[(15)] = inst_22046);

(statearr_22228[(16)] = inst_22044);

(statearr_22228[(17)] = inst_22045);

return statearr_22228;
})();
var statearr_22229_22291 = state_22167__$1;
(statearr_22229_22291[(2)] = null);

(statearr_22229_22291[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (14))){
var state_22167__$1 = state_22167;
var statearr_22230_22292 = state_22167__$1;
(statearr_22230_22292[(2)] = null);

(statearr_22230_22292[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (45))){
var inst_22157 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22231_22293 = state_22167__$1;
(statearr_22231_22293[(2)] = inst_22157);

(statearr_22231_22293[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (26))){
var inst_22099 = (state_22167[(29)]);
var inst_22153 = (state_22167[(2)]);
var inst_22154 = cljs.core.seq(inst_22099);
var state_22167__$1 = (function (){var statearr_22232 = state_22167;
(statearr_22232[(31)] = inst_22153);

return statearr_22232;
})();
if(inst_22154){
var statearr_22233_22294 = state_22167__$1;
(statearr_22233_22294[(1)] = (42));

} else {
var statearr_22234_22295 = state_22167__$1;
(statearr_22234_22295[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (16))){
var inst_22066 = (state_22167[(7)]);
var inst_22068 = cljs.core.chunked_seq_QMARK_(inst_22066);
var state_22167__$1 = state_22167;
if(inst_22068){
var statearr_22235_22296 = state_22167__$1;
(statearr_22235_22296[(1)] = (19));

} else {
var statearr_22236_22297 = state_22167__$1;
(statearr_22236_22297[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (38))){
var inst_22146 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22237_22298 = state_22167__$1;
(statearr_22237_22298[(2)] = inst_22146);

(statearr_22237_22298[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (30))){
var state_22167__$1 = state_22167;
var statearr_22238_22299 = state_22167__$1;
(statearr_22238_22299[(2)] = null);

(statearr_22238_22299[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (10))){
var inst_22047 = (state_22167[(13)]);
var inst_22045 = (state_22167[(17)]);
var inst_22055 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22045,inst_22047);
var inst_22056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22055,(0),null);
var inst_22057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22055,(1),null);
var state_22167__$1 = (function (){var statearr_22239 = state_22167;
(statearr_22239[(26)] = inst_22056);

return statearr_22239;
})();
if(cljs.core.truth_(inst_22057)){
var statearr_22240_22300 = state_22167__$1;
(statearr_22240_22300[(1)] = (13));

} else {
var statearr_22241_22301 = state_22167__$1;
(statearr_22241_22301[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (18))){
var inst_22092 = (state_22167[(2)]);
var state_22167__$1 = state_22167;
var statearr_22242_22302 = state_22167__$1;
(statearr_22242_22302[(2)] = inst_22092);

(statearr_22242_22302[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (42))){
var state_22167__$1 = state_22167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22167__$1,(45),dchan);
} else {
if((state_val_22168 === (37))){
var inst_22135 = (state_22167[(23)]);
var inst_22126 = (state_22167[(25)]);
var inst_22035 = (state_22167[(11)]);
var inst_22135__$1 = cljs.core.first(inst_22126);
var inst_22136 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_22135__$1,inst_22035,done);
var state_22167__$1 = (function (){var statearr_22243 = state_22167;
(statearr_22243[(23)] = inst_22135__$1);

return statearr_22243;
})();
if(cljs.core.truth_(inst_22136)){
var statearr_22244_22303 = state_22167__$1;
(statearr_22244_22303[(1)] = (39));

} else {
var statearr_22245_22304 = state_22167__$1;
(statearr_22245_22304[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22168 === (8))){
var inst_22047 = (state_22167[(13)]);
var inst_22046 = (state_22167[(15)]);
var inst_22049 = (inst_22047 < inst_22046);
var inst_22050 = inst_22049;
var state_22167__$1 = state_22167;
if(cljs.core.truth_(inst_22050)){
var statearr_22246_22305 = state_22167__$1;
(statearr_22246_22305[(1)] = (10));

} else {
var statearr_22247_22306 = state_22167__$1;
(statearr_22247_22306[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21431__auto___22252,cs,m,dchan,dctr,done))
;
return ((function (switch__21329__auto__,c__21431__auto___22252,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21330__auto__ = null;
var cljs$core$async$mult_$_state_machine__21330__auto____0 = (function (){
var statearr_22248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22248[(0)] = cljs$core$async$mult_$_state_machine__21330__auto__);

(statearr_22248[(1)] = (1));

return statearr_22248;
});
var cljs$core$async$mult_$_state_machine__21330__auto____1 = (function (state_22167){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22167);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22249){if((e22249 instanceof Object)){
var ex__21333__auto__ = e22249;
var statearr_22250_22307 = state_22167;
(statearr_22250_22307[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22167);

return cljs.core.cst$kw$recur;
} else {
throw e22249;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22308 = state_22167;
state_22167 = G__22308;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21330__auto__ = function(state_22167){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21330__auto____1.call(this,state_22167);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21330__auto____0;
cljs$core$async$mult_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21330__auto____1;
return cljs$core$async$mult_$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22252,cs,m,dchan,dctr,done))
})();
var state__21433__auto__ = (function (){var statearr_22251 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22251[(6)] = c__21431__auto___22252);

return statearr_22251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22252,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__22310 = arguments.length;
switch (G__22310) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9650__auto__.call(null,m,ch));
} else {
var m__9650__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9650__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9650__auto__.call(null,m,ch));
} else {
var m__9650__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__9650__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__9650__auto__.call(null,m));
} else {
var m__9650__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__9650__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9650__auto__.call(null,m,state_map));
} else {
var m__9650__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__9650__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__9649__auto__ = (((m == null))?null:m);
var m__9650__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9650__auto__.call(null,m,mode));
} else {
var m__9650__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__9650__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___22322 = arguments.length;
var i__10196__auto___22323 = (0);
while(true){
if((i__10196__auto___22323 < len__10195__auto___22322)){
args__10202__auto__.push((arguments[i__10196__auto___22323]));

var G__22324 = (i__10196__auto___22323 + (1));
i__10196__auto___22323 = G__22324;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((3) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10203__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22316){
var map__22317 = p__22316;
var map__22317__$1 = ((((!((map__22317 == null)))?((((map__22317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22317.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22317):map__22317);
var opts = map__22317__$1;
var statearr_22319_22325 = state;
(statearr_22319_22325[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__22317,map__22317__$1,opts){
return (function (val){
var statearr_22320_22326 = state;
(statearr_22320_22326[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__22317,map__22317__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_22321_22327 = state;
(statearr_22321_22327[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22312){
var G__22313 = cljs.core.first(seq22312);
var seq22312__$1 = cljs.core.next(seq22312);
var G__22314 = cljs.core.first(seq22312__$1);
var seq22312__$2 = cljs.core.next(seq22312__$1);
var G__22315 = cljs.core.first(seq22312__$2);
var seq22312__$3 = cljs.core.next(seq22312__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22313,G__22314,G__22315,seq22312__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22328 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta22329){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta22329 = meta22329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22330,meta22329__$1){
var self__ = this;
var _22330__$1 = this;
return (new cljs.core.async.t_cljs$core$async22328(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta22329__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22330){
var self__ = this;
var _22330__$1 = this;
return self__.meta22329;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$out,cljs.core.cst$sym$cs,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$change,cljs.core.cst$sym$changed,cljs.core.cst$sym$pick,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$meta22329], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22328";

cljs.core.async.t_cljs$core$async22328.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22328");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22328 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22328(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22329){
return (new cljs.core.async.t_cljs$core$async22328(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta22329));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22328(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21431__auto___22492 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22492,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22492,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22432){
var state_val_22433 = (state_22432[(1)]);
if((state_val_22433 === (7))){
var inst_22347 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22434_22493 = state_22432__$1;
(statearr_22434_22493[(2)] = inst_22347);

(statearr_22434_22493[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (20))){
var inst_22359 = (state_22432[(7)]);
var state_22432__$1 = state_22432;
var statearr_22435_22494 = state_22432__$1;
(statearr_22435_22494[(2)] = inst_22359);

(statearr_22435_22494[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (27))){
var state_22432__$1 = state_22432;
var statearr_22436_22495 = state_22432__$1;
(statearr_22436_22495[(2)] = null);

(statearr_22436_22495[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (1))){
var inst_22334 = (state_22432[(8)]);
var inst_22334__$1 = calc_state();
var inst_22336 = (inst_22334__$1 == null);
var inst_22337 = cljs.core.not(inst_22336);
var state_22432__$1 = (function (){var statearr_22437 = state_22432;
(statearr_22437[(8)] = inst_22334__$1);

return statearr_22437;
})();
if(inst_22337){
var statearr_22438_22496 = state_22432__$1;
(statearr_22438_22496[(1)] = (2));

} else {
var statearr_22439_22497 = state_22432__$1;
(statearr_22439_22497[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (24))){
var inst_22406 = (state_22432[(9)]);
var inst_22392 = (state_22432[(10)]);
var inst_22383 = (state_22432[(11)]);
var inst_22406__$1 = (inst_22383.cljs$core$IFn$_invoke$arity$1 ? inst_22383.cljs$core$IFn$_invoke$arity$1(inst_22392) : inst_22383.call(null,inst_22392));
var state_22432__$1 = (function (){var statearr_22440 = state_22432;
(statearr_22440[(9)] = inst_22406__$1);

return statearr_22440;
})();
if(cljs.core.truth_(inst_22406__$1)){
var statearr_22441_22498 = state_22432__$1;
(statearr_22441_22498[(1)] = (29));

} else {
var statearr_22442_22499 = state_22432__$1;
(statearr_22442_22499[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (4))){
var inst_22350 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22350)){
var statearr_22443_22500 = state_22432__$1;
(statearr_22443_22500[(1)] = (8));

} else {
var statearr_22444_22501 = state_22432__$1;
(statearr_22444_22501[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (15))){
var inst_22377 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22377)){
var statearr_22445_22502 = state_22432__$1;
(statearr_22445_22502[(1)] = (19));

} else {
var statearr_22446_22503 = state_22432__$1;
(statearr_22446_22503[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (21))){
var inst_22382 = (state_22432[(12)]);
var inst_22382__$1 = (state_22432[(2)]);
var inst_22383 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22382__$1,cljs.core.cst$kw$solos);
var inst_22384 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22382__$1,cljs.core.cst$kw$mutes);
var inst_22385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22382__$1,cljs.core.cst$kw$reads);
var state_22432__$1 = (function (){var statearr_22447 = state_22432;
(statearr_22447[(12)] = inst_22382__$1);

(statearr_22447[(13)] = inst_22384);

(statearr_22447[(11)] = inst_22383);

return statearr_22447;
})();
return cljs.core.async.ioc_alts_BANG_(state_22432__$1,(22),inst_22385);
} else {
if((state_val_22433 === (31))){
var inst_22414 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22414)){
var statearr_22448_22504 = state_22432__$1;
(statearr_22448_22504[(1)] = (32));

} else {
var statearr_22449_22505 = state_22432__$1;
(statearr_22449_22505[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (32))){
var inst_22391 = (state_22432[(14)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22432__$1,(35),out,inst_22391);
} else {
if((state_val_22433 === (33))){
var inst_22382 = (state_22432[(12)]);
var inst_22359 = inst_22382;
var state_22432__$1 = (function (){var statearr_22450 = state_22432;
(statearr_22450[(7)] = inst_22359);

return statearr_22450;
})();
var statearr_22451_22506 = state_22432__$1;
(statearr_22451_22506[(2)] = null);

(statearr_22451_22506[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (13))){
var inst_22359 = (state_22432[(7)]);
var inst_22366 = inst_22359.cljs$lang$protocol_mask$partition0$;
var inst_22367 = (inst_22366 & (64));
var inst_22368 = inst_22359.cljs$core$ISeq$;
var inst_22369 = (cljs.core.PROTOCOL_SENTINEL === inst_22368);
var inst_22370 = (inst_22367) || (inst_22369);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22370)){
var statearr_22452_22507 = state_22432__$1;
(statearr_22452_22507[(1)] = (16));

} else {
var statearr_22453_22508 = state_22432__$1;
(statearr_22453_22508[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (22))){
var inst_22392 = (state_22432[(10)]);
var inst_22391 = (state_22432[(14)]);
var inst_22390 = (state_22432[(2)]);
var inst_22391__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22390,(0),null);
var inst_22392__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22390,(1),null);
var inst_22393 = (inst_22391__$1 == null);
var inst_22394 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_22392__$1,change);
var inst_22395 = (inst_22393) || (inst_22394);
var state_22432__$1 = (function (){var statearr_22454 = state_22432;
(statearr_22454[(10)] = inst_22392__$1);

(statearr_22454[(14)] = inst_22391__$1);

return statearr_22454;
})();
if(cljs.core.truth_(inst_22395)){
var statearr_22455_22509 = state_22432__$1;
(statearr_22455_22509[(1)] = (23));

} else {
var statearr_22456_22510 = state_22432__$1;
(statearr_22456_22510[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (36))){
var inst_22382 = (state_22432[(12)]);
var inst_22359 = inst_22382;
var state_22432__$1 = (function (){var statearr_22457 = state_22432;
(statearr_22457[(7)] = inst_22359);

return statearr_22457;
})();
var statearr_22458_22511 = state_22432__$1;
(statearr_22458_22511[(2)] = null);

(statearr_22458_22511[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (29))){
var inst_22406 = (state_22432[(9)]);
var state_22432__$1 = state_22432;
var statearr_22459_22512 = state_22432__$1;
(statearr_22459_22512[(2)] = inst_22406);

(statearr_22459_22512[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (6))){
var state_22432__$1 = state_22432;
var statearr_22460_22513 = state_22432__$1;
(statearr_22460_22513[(2)] = false);

(statearr_22460_22513[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (28))){
var inst_22402 = (state_22432[(2)]);
var inst_22403 = calc_state();
var inst_22359 = inst_22403;
var state_22432__$1 = (function (){var statearr_22461 = state_22432;
(statearr_22461[(7)] = inst_22359);

(statearr_22461[(15)] = inst_22402);

return statearr_22461;
})();
var statearr_22462_22514 = state_22432__$1;
(statearr_22462_22514[(2)] = null);

(statearr_22462_22514[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (25))){
var inst_22428 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22463_22515 = state_22432__$1;
(statearr_22463_22515[(2)] = inst_22428);

(statearr_22463_22515[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (34))){
var inst_22426 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22464_22516 = state_22432__$1;
(statearr_22464_22516[(2)] = inst_22426);

(statearr_22464_22516[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (17))){
var state_22432__$1 = state_22432;
var statearr_22465_22517 = state_22432__$1;
(statearr_22465_22517[(2)] = false);

(statearr_22465_22517[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (3))){
var state_22432__$1 = state_22432;
var statearr_22466_22518 = state_22432__$1;
(statearr_22466_22518[(2)] = false);

(statearr_22466_22518[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (12))){
var inst_22430 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22432__$1,inst_22430);
} else {
if((state_val_22433 === (2))){
var inst_22334 = (state_22432[(8)]);
var inst_22339 = inst_22334.cljs$lang$protocol_mask$partition0$;
var inst_22340 = (inst_22339 & (64));
var inst_22341 = inst_22334.cljs$core$ISeq$;
var inst_22342 = (cljs.core.PROTOCOL_SENTINEL === inst_22341);
var inst_22343 = (inst_22340) || (inst_22342);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22343)){
var statearr_22467_22519 = state_22432__$1;
(statearr_22467_22519[(1)] = (5));

} else {
var statearr_22468_22520 = state_22432__$1;
(statearr_22468_22520[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (23))){
var inst_22391 = (state_22432[(14)]);
var inst_22397 = (inst_22391 == null);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22397)){
var statearr_22469_22521 = state_22432__$1;
(statearr_22469_22521[(1)] = (26));

} else {
var statearr_22470_22522 = state_22432__$1;
(statearr_22470_22522[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (35))){
var inst_22417 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
if(cljs.core.truth_(inst_22417)){
var statearr_22471_22523 = state_22432__$1;
(statearr_22471_22523[(1)] = (36));

} else {
var statearr_22472_22524 = state_22432__$1;
(statearr_22472_22524[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (19))){
var inst_22359 = (state_22432[(7)]);
var inst_22379 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22359);
var state_22432__$1 = state_22432;
var statearr_22473_22525 = state_22432__$1;
(statearr_22473_22525[(2)] = inst_22379);

(statearr_22473_22525[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (11))){
var inst_22359 = (state_22432[(7)]);
var inst_22363 = (inst_22359 == null);
var inst_22364 = cljs.core.not(inst_22363);
var state_22432__$1 = state_22432;
if(inst_22364){
var statearr_22474_22526 = state_22432__$1;
(statearr_22474_22526[(1)] = (13));

} else {
var statearr_22475_22527 = state_22432__$1;
(statearr_22475_22527[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (9))){
var inst_22334 = (state_22432[(8)]);
var state_22432__$1 = state_22432;
var statearr_22476_22528 = state_22432__$1;
(statearr_22476_22528[(2)] = inst_22334);

(statearr_22476_22528[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (5))){
var state_22432__$1 = state_22432;
var statearr_22477_22529 = state_22432__$1;
(statearr_22477_22529[(2)] = true);

(statearr_22477_22529[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (14))){
var state_22432__$1 = state_22432;
var statearr_22478_22530 = state_22432__$1;
(statearr_22478_22530[(2)] = false);

(statearr_22478_22530[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (26))){
var inst_22392 = (state_22432[(10)]);
var inst_22399 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_22392);
var state_22432__$1 = state_22432;
var statearr_22479_22531 = state_22432__$1;
(statearr_22479_22531[(2)] = inst_22399);

(statearr_22479_22531[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (16))){
var state_22432__$1 = state_22432;
var statearr_22480_22532 = state_22432__$1;
(statearr_22480_22532[(2)] = true);

(statearr_22480_22532[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (38))){
var inst_22422 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22481_22533 = state_22432__$1;
(statearr_22481_22533[(2)] = inst_22422);

(statearr_22481_22533[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (30))){
var inst_22392 = (state_22432[(10)]);
var inst_22384 = (state_22432[(13)]);
var inst_22383 = (state_22432[(11)]);
var inst_22409 = cljs.core.empty_QMARK_(inst_22383);
var inst_22410 = (inst_22384.cljs$core$IFn$_invoke$arity$1 ? inst_22384.cljs$core$IFn$_invoke$arity$1(inst_22392) : inst_22384.call(null,inst_22392));
var inst_22411 = cljs.core.not(inst_22410);
var inst_22412 = (inst_22409) && (inst_22411);
var state_22432__$1 = state_22432;
var statearr_22482_22534 = state_22432__$1;
(statearr_22482_22534[(2)] = inst_22412);

(statearr_22482_22534[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (10))){
var inst_22334 = (state_22432[(8)]);
var inst_22355 = (state_22432[(2)]);
var inst_22356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22355,cljs.core.cst$kw$solos);
var inst_22357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22355,cljs.core.cst$kw$mutes);
var inst_22358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22355,cljs.core.cst$kw$reads);
var inst_22359 = inst_22334;
var state_22432__$1 = (function (){var statearr_22483 = state_22432;
(statearr_22483[(16)] = inst_22357);

(statearr_22483[(17)] = inst_22356);

(statearr_22483[(7)] = inst_22359);

(statearr_22483[(18)] = inst_22358);

return statearr_22483;
})();
var statearr_22484_22535 = state_22432__$1;
(statearr_22484_22535[(2)] = null);

(statearr_22484_22535[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (18))){
var inst_22374 = (state_22432[(2)]);
var state_22432__$1 = state_22432;
var statearr_22485_22536 = state_22432__$1;
(statearr_22485_22536[(2)] = inst_22374);

(statearr_22485_22536[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (37))){
var state_22432__$1 = state_22432;
var statearr_22486_22537 = state_22432__$1;
(statearr_22486_22537[(2)] = null);

(statearr_22486_22537[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22433 === (8))){
var inst_22334 = (state_22432[(8)]);
var inst_22352 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_22334);
var state_22432__$1 = state_22432;
var statearr_22487_22538 = state_22432__$1;
(statearr_22487_22538[(2)] = inst_22352);

(statearr_22487_22538[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21431__auto___22492,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21329__auto__,c__21431__auto___22492,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21330__auto__ = null;
var cljs$core$async$mix_$_state_machine__21330__auto____0 = (function (){
var statearr_22488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22488[(0)] = cljs$core$async$mix_$_state_machine__21330__auto__);

(statearr_22488[(1)] = (1));

return statearr_22488;
});
var cljs$core$async$mix_$_state_machine__21330__auto____1 = (function (state_22432){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22432);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22489){if((e22489 instanceof Object)){
var ex__21333__auto__ = e22489;
var statearr_22490_22539 = state_22432;
(statearr_22490_22539[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22432);

return cljs.core.cst$kw$recur;
} else {
throw e22489;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22540 = state_22432;
state_22432 = G__22540;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21330__auto__ = function(state_22432){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21330__auto____1.call(this,state_22432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21330__auto____0;
cljs$core$async$mix_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21330__auto____1;
return cljs$core$async$mix_$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22492,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21433__auto__ = (function (){var statearr_22491 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22491[(6)] = c__21431__auto___22492);

return statearr_22491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22492,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$4 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9650__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__9650__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__9650__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9650__auto__.call(null,p,v,ch));
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__9650__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22542 = arguments.length;
switch (G__22542) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__9650__auto__.call(null,p));
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__9650__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__9649__auto__ = (((p == null))?null:p);
var m__9650__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__9650__auto__.call(null,p,v));
} else {
var m__9650__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__9650__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__22546 = arguments.length;
switch (G__22546) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__8916__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__8916__auto__,mults){
return (function (p1__22544_SHARP_){
if(cljs.core.truth_((p1__22544_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__22544_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__22544_SHARP_.call(null,topic)))){
return p1__22544_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__22544_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__8916__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22547 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22548){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22548 = meta22548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22549,meta22548__$1){
var self__ = this;
var _22549__$1 = this;
return (new cljs.core.async.t_cljs$core$async22547(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22548__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22549){
var self__ = this;
var _22549__$1 = this;
return self__.meta22548;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta22548], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22547.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22547.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22547";

cljs.core.async.t_cljs$core$async22547.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22547");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22547 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22547(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22548){
return (new cljs.core.async.t_cljs$core$async22547(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22548));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22547(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21431__auto___22667 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22667,mults,ensure_mult,p){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22667,mults,ensure_mult,p){
return (function (state_22621){
var state_val_22622 = (state_22621[(1)]);
if((state_val_22622 === (7))){
var inst_22617 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
var statearr_22623_22668 = state_22621__$1;
(statearr_22623_22668[(2)] = inst_22617);

(statearr_22623_22668[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (20))){
var state_22621__$1 = state_22621;
var statearr_22624_22669 = state_22621__$1;
(statearr_22624_22669[(2)] = null);

(statearr_22624_22669[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (1))){
var state_22621__$1 = state_22621;
var statearr_22625_22670 = state_22621__$1;
(statearr_22625_22670[(2)] = null);

(statearr_22625_22670[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (24))){
var inst_22600 = (state_22621[(7)]);
var inst_22609 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_22600);
var state_22621__$1 = state_22621;
var statearr_22626_22671 = state_22621__$1;
(statearr_22626_22671[(2)] = inst_22609);

(statearr_22626_22671[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (4))){
var inst_22552 = (state_22621[(8)]);
var inst_22552__$1 = (state_22621[(2)]);
var inst_22553 = (inst_22552__$1 == null);
var state_22621__$1 = (function (){var statearr_22627 = state_22621;
(statearr_22627[(8)] = inst_22552__$1);

return statearr_22627;
})();
if(cljs.core.truth_(inst_22553)){
var statearr_22628_22672 = state_22621__$1;
(statearr_22628_22672[(1)] = (5));

} else {
var statearr_22629_22673 = state_22621__$1;
(statearr_22629_22673[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (15))){
var inst_22594 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
var statearr_22630_22674 = state_22621__$1;
(statearr_22630_22674[(2)] = inst_22594);

(statearr_22630_22674[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (21))){
var inst_22614 = (state_22621[(2)]);
var state_22621__$1 = (function (){var statearr_22631 = state_22621;
(statearr_22631[(9)] = inst_22614);

return statearr_22631;
})();
var statearr_22632_22675 = state_22621__$1;
(statearr_22632_22675[(2)] = null);

(statearr_22632_22675[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (13))){
var inst_22576 = (state_22621[(10)]);
var inst_22578 = cljs.core.chunked_seq_QMARK_(inst_22576);
var state_22621__$1 = state_22621;
if(inst_22578){
var statearr_22633_22676 = state_22621__$1;
(statearr_22633_22676[(1)] = (16));

} else {
var statearr_22634_22677 = state_22621__$1;
(statearr_22634_22677[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (22))){
var inst_22606 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
if(cljs.core.truth_(inst_22606)){
var statearr_22635_22678 = state_22621__$1;
(statearr_22635_22678[(1)] = (23));

} else {
var statearr_22636_22679 = state_22621__$1;
(statearr_22636_22679[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (6))){
var inst_22602 = (state_22621[(11)]);
var inst_22600 = (state_22621[(7)]);
var inst_22552 = (state_22621[(8)]);
var inst_22600__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_22552) : topic_fn.call(null,inst_22552));
var inst_22601 = cljs.core.deref(mults);
var inst_22602__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_22601,inst_22600__$1);
var state_22621__$1 = (function (){var statearr_22637 = state_22621;
(statearr_22637[(11)] = inst_22602__$1);

(statearr_22637[(7)] = inst_22600__$1);

return statearr_22637;
})();
if(cljs.core.truth_(inst_22602__$1)){
var statearr_22638_22680 = state_22621__$1;
(statearr_22638_22680[(1)] = (19));

} else {
var statearr_22639_22681 = state_22621__$1;
(statearr_22639_22681[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (25))){
var inst_22611 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
var statearr_22640_22682 = state_22621__$1;
(statearr_22640_22682[(2)] = inst_22611);

(statearr_22640_22682[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (17))){
var inst_22576 = (state_22621[(10)]);
var inst_22585 = cljs.core.first(inst_22576);
var inst_22586 = cljs.core.async.muxch_STAR_(inst_22585);
var inst_22587 = cljs.core.async.close_BANG_(inst_22586);
var inst_22588 = cljs.core.next(inst_22576);
var inst_22562 = inst_22588;
var inst_22563 = null;
var inst_22564 = (0);
var inst_22565 = (0);
var state_22621__$1 = (function (){var statearr_22641 = state_22621;
(statearr_22641[(12)] = inst_22565);

(statearr_22641[(13)] = inst_22563);

(statearr_22641[(14)] = inst_22564);

(statearr_22641[(15)] = inst_22562);

(statearr_22641[(16)] = inst_22587);

return statearr_22641;
})();
var statearr_22642_22683 = state_22621__$1;
(statearr_22642_22683[(2)] = null);

(statearr_22642_22683[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (3))){
var inst_22619 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22621__$1,inst_22619);
} else {
if((state_val_22622 === (12))){
var inst_22596 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
var statearr_22643_22684 = state_22621__$1;
(statearr_22643_22684[(2)] = inst_22596);

(statearr_22643_22684[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (2))){
var state_22621__$1 = state_22621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22621__$1,(4),ch);
} else {
if((state_val_22622 === (23))){
var state_22621__$1 = state_22621;
var statearr_22644_22685 = state_22621__$1;
(statearr_22644_22685[(2)] = null);

(statearr_22644_22685[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (19))){
var inst_22602 = (state_22621[(11)]);
var inst_22552 = (state_22621[(8)]);
var inst_22604 = cljs.core.async.muxch_STAR_(inst_22602);
var state_22621__$1 = state_22621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22621__$1,(22),inst_22604,inst_22552);
} else {
if((state_val_22622 === (11))){
var inst_22576 = (state_22621[(10)]);
var inst_22562 = (state_22621[(15)]);
var inst_22576__$1 = cljs.core.seq(inst_22562);
var state_22621__$1 = (function (){var statearr_22645 = state_22621;
(statearr_22645[(10)] = inst_22576__$1);

return statearr_22645;
})();
if(inst_22576__$1){
var statearr_22646_22686 = state_22621__$1;
(statearr_22646_22686[(1)] = (13));

} else {
var statearr_22647_22687 = state_22621__$1;
(statearr_22647_22687[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (9))){
var inst_22598 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
var statearr_22648_22688 = state_22621__$1;
(statearr_22648_22688[(2)] = inst_22598);

(statearr_22648_22688[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (5))){
var inst_22559 = cljs.core.deref(mults);
var inst_22560 = cljs.core.vals(inst_22559);
var inst_22561 = cljs.core.seq(inst_22560);
var inst_22562 = inst_22561;
var inst_22563 = null;
var inst_22564 = (0);
var inst_22565 = (0);
var state_22621__$1 = (function (){var statearr_22649 = state_22621;
(statearr_22649[(12)] = inst_22565);

(statearr_22649[(13)] = inst_22563);

(statearr_22649[(14)] = inst_22564);

(statearr_22649[(15)] = inst_22562);

return statearr_22649;
})();
var statearr_22650_22689 = state_22621__$1;
(statearr_22650_22689[(2)] = null);

(statearr_22650_22689[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (14))){
var state_22621__$1 = state_22621;
var statearr_22654_22690 = state_22621__$1;
(statearr_22654_22690[(2)] = null);

(statearr_22654_22690[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (16))){
var inst_22576 = (state_22621[(10)]);
var inst_22580 = cljs.core.chunk_first(inst_22576);
var inst_22581 = cljs.core.chunk_rest(inst_22576);
var inst_22582 = cljs.core.count(inst_22580);
var inst_22562 = inst_22581;
var inst_22563 = inst_22580;
var inst_22564 = inst_22582;
var inst_22565 = (0);
var state_22621__$1 = (function (){var statearr_22655 = state_22621;
(statearr_22655[(12)] = inst_22565);

(statearr_22655[(13)] = inst_22563);

(statearr_22655[(14)] = inst_22564);

(statearr_22655[(15)] = inst_22562);

return statearr_22655;
})();
var statearr_22656_22691 = state_22621__$1;
(statearr_22656_22691[(2)] = null);

(statearr_22656_22691[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (10))){
var inst_22565 = (state_22621[(12)]);
var inst_22563 = (state_22621[(13)]);
var inst_22564 = (state_22621[(14)]);
var inst_22562 = (state_22621[(15)]);
var inst_22570 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_22563,inst_22565);
var inst_22571 = cljs.core.async.muxch_STAR_(inst_22570);
var inst_22572 = cljs.core.async.close_BANG_(inst_22571);
var inst_22573 = (inst_22565 + (1));
var tmp22651 = inst_22563;
var tmp22652 = inst_22564;
var tmp22653 = inst_22562;
var inst_22562__$1 = tmp22653;
var inst_22563__$1 = tmp22651;
var inst_22564__$1 = tmp22652;
var inst_22565__$1 = inst_22573;
var state_22621__$1 = (function (){var statearr_22657 = state_22621;
(statearr_22657[(12)] = inst_22565__$1);

(statearr_22657[(13)] = inst_22563__$1);

(statearr_22657[(14)] = inst_22564__$1);

(statearr_22657[(17)] = inst_22572);

(statearr_22657[(15)] = inst_22562__$1);

return statearr_22657;
})();
var statearr_22658_22692 = state_22621__$1;
(statearr_22658_22692[(2)] = null);

(statearr_22658_22692[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (18))){
var inst_22591 = (state_22621[(2)]);
var state_22621__$1 = state_22621;
var statearr_22659_22693 = state_22621__$1;
(statearr_22659_22693[(2)] = inst_22591);

(statearr_22659_22693[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22622 === (8))){
var inst_22565 = (state_22621[(12)]);
var inst_22564 = (state_22621[(14)]);
var inst_22567 = (inst_22565 < inst_22564);
var inst_22568 = inst_22567;
var state_22621__$1 = state_22621;
if(cljs.core.truth_(inst_22568)){
var statearr_22660_22694 = state_22621__$1;
(statearr_22660_22694[(1)] = (10));

} else {
var statearr_22661_22695 = state_22621__$1;
(statearr_22661_22695[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21431__auto___22667,mults,ensure_mult,p))
;
return ((function (switch__21329__auto__,c__21431__auto___22667,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_22662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22662[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_22662[(1)] = (1));

return statearr_22662;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_22621){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22621);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22663){if((e22663 instanceof Object)){
var ex__21333__auto__ = e22663;
var statearr_22664_22696 = state_22621;
(statearr_22664_22696[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22621);

return cljs.core.cst$kw$recur;
} else {
throw e22663;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22697 = state_22621;
state_22621 = G__22697;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_22621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_22621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22667,mults,ensure_mult,p))
})();
var state__21433__auto__ = (function (){var statearr_22665 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22665[(6)] = c__21431__auto___22667);

return statearr_22665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22667,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__22699 = arguments.length;
switch (G__22699) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22702 = arguments.length;
switch (G__22702) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__22705 = arguments.length;
switch (G__22705) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__21431__auto___22772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22772,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22772,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22744){
var state_val_22745 = (state_22744[(1)]);
if((state_val_22745 === (7))){
var state_22744__$1 = state_22744;
var statearr_22746_22773 = state_22744__$1;
(statearr_22746_22773[(2)] = null);

(statearr_22746_22773[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (1))){
var state_22744__$1 = state_22744;
var statearr_22747_22774 = state_22744__$1;
(statearr_22747_22774[(2)] = null);

(statearr_22747_22774[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (4))){
var inst_22708 = (state_22744[(7)]);
var inst_22710 = (inst_22708 < cnt);
var state_22744__$1 = state_22744;
if(cljs.core.truth_(inst_22710)){
var statearr_22748_22775 = state_22744__$1;
(statearr_22748_22775[(1)] = (6));

} else {
var statearr_22749_22776 = state_22744__$1;
(statearr_22749_22776[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (15))){
var inst_22740 = (state_22744[(2)]);
var state_22744__$1 = state_22744;
var statearr_22750_22777 = state_22744__$1;
(statearr_22750_22777[(2)] = inst_22740);

(statearr_22750_22777[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (13))){
var inst_22733 = cljs.core.async.close_BANG_(out);
var state_22744__$1 = state_22744;
var statearr_22751_22778 = state_22744__$1;
(statearr_22751_22778[(2)] = inst_22733);

(statearr_22751_22778[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (6))){
var state_22744__$1 = state_22744;
var statearr_22752_22779 = state_22744__$1;
(statearr_22752_22779[(2)] = null);

(statearr_22752_22779[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (3))){
var inst_22742 = (state_22744[(2)]);
var state_22744__$1 = state_22744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22744__$1,inst_22742);
} else {
if((state_val_22745 === (12))){
var inst_22730 = (state_22744[(8)]);
var inst_22730__$1 = (state_22744[(2)]);
var inst_22731 = cljs.core.some(cljs.core.nil_QMARK_,inst_22730__$1);
var state_22744__$1 = (function (){var statearr_22753 = state_22744;
(statearr_22753[(8)] = inst_22730__$1);

return statearr_22753;
})();
if(cljs.core.truth_(inst_22731)){
var statearr_22754_22780 = state_22744__$1;
(statearr_22754_22780[(1)] = (13));

} else {
var statearr_22755_22781 = state_22744__$1;
(statearr_22755_22781[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (2))){
var inst_22707 = cljs.core.reset_BANG_(dctr,cnt);
var inst_22708 = (0);
var state_22744__$1 = (function (){var statearr_22756 = state_22744;
(statearr_22756[(9)] = inst_22707);

(statearr_22756[(7)] = inst_22708);

return statearr_22756;
})();
var statearr_22757_22782 = state_22744__$1;
(statearr_22757_22782[(2)] = null);

(statearr_22757_22782[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (11))){
var inst_22708 = (state_22744[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_22744,(10),Object,null,(9));
var inst_22717 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_22708) : chs__$1.call(null,inst_22708));
var inst_22718 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_22708) : done.call(null,inst_22708));
var inst_22719 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_22717,inst_22718);
var state_22744__$1 = state_22744;
var statearr_22758_22783 = state_22744__$1;
(statearr_22758_22783[(2)] = inst_22719);


cljs.core.async.impl.ioc_helpers.process_exception(state_22744__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (9))){
var inst_22708 = (state_22744[(7)]);
var inst_22721 = (state_22744[(2)]);
var inst_22722 = (inst_22708 + (1));
var inst_22708__$1 = inst_22722;
var state_22744__$1 = (function (){var statearr_22759 = state_22744;
(statearr_22759[(10)] = inst_22721);

(statearr_22759[(7)] = inst_22708__$1);

return statearr_22759;
})();
var statearr_22760_22784 = state_22744__$1;
(statearr_22760_22784[(2)] = null);

(statearr_22760_22784[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (5))){
var inst_22728 = (state_22744[(2)]);
var state_22744__$1 = (function (){var statearr_22761 = state_22744;
(statearr_22761[(11)] = inst_22728);

return statearr_22761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22744__$1,(12),dchan);
} else {
if((state_val_22745 === (14))){
var inst_22730 = (state_22744[(8)]);
var inst_22735 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_22730);
var state_22744__$1 = state_22744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22744__$1,(16),out,inst_22735);
} else {
if((state_val_22745 === (16))){
var inst_22737 = (state_22744[(2)]);
var state_22744__$1 = (function (){var statearr_22762 = state_22744;
(statearr_22762[(12)] = inst_22737);

return statearr_22762;
})();
var statearr_22763_22785 = state_22744__$1;
(statearr_22763_22785[(2)] = null);

(statearr_22763_22785[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (10))){
var inst_22712 = (state_22744[(2)]);
var inst_22713 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_22744__$1 = (function (){var statearr_22764 = state_22744;
(statearr_22764[(13)] = inst_22712);

return statearr_22764;
})();
var statearr_22765_22786 = state_22744__$1;
(statearr_22765_22786[(2)] = inst_22713);


cljs.core.async.impl.ioc_helpers.process_exception(state_22744__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_22745 === (8))){
var inst_22726 = (state_22744[(2)]);
var state_22744__$1 = state_22744;
var statearr_22766_22787 = state_22744__$1;
(statearr_22766_22787[(2)] = inst_22726);

(statearr_22766_22787[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__21431__auto___22772,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21329__auto__,c__21431__auto___22772,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_22767 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22767[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_22767[(1)] = (1));

return statearr_22767;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_22744){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22744);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22768){if((e22768 instanceof Object)){
var ex__21333__auto__ = e22768;
var statearr_22769_22788 = state_22744;
(statearr_22769_22788[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22744);

return cljs.core.cst$kw$recur;
} else {
throw e22768;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22789 = state_22744;
state_22744 = G__22789;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_22744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_22744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22772,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21433__auto__ = (function (){var statearr_22770 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22770[(6)] = c__21431__auto___22772);

return statearr_22770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22772,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__22792 = arguments.length;
switch (G__22792) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21431__auto___22846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22846,out){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22846,out){
return (function (state_22824){
var state_val_22825 = (state_22824[(1)]);
if((state_val_22825 === (7))){
var inst_22804 = (state_22824[(7)]);
var inst_22803 = (state_22824[(8)]);
var inst_22803__$1 = (state_22824[(2)]);
var inst_22804__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22803__$1,(0),null);
var inst_22805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22803__$1,(1),null);
var inst_22806 = (inst_22804__$1 == null);
var state_22824__$1 = (function (){var statearr_22826 = state_22824;
(statearr_22826[(7)] = inst_22804__$1);

(statearr_22826[(9)] = inst_22805);

(statearr_22826[(8)] = inst_22803__$1);

return statearr_22826;
})();
if(cljs.core.truth_(inst_22806)){
var statearr_22827_22847 = state_22824__$1;
(statearr_22827_22847[(1)] = (8));

} else {
var statearr_22828_22848 = state_22824__$1;
(statearr_22828_22848[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (1))){
var inst_22793 = cljs.core.vec(chs);
var inst_22794 = inst_22793;
var state_22824__$1 = (function (){var statearr_22829 = state_22824;
(statearr_22829[(10)] = inst_22794);

return statearr_22829;
})();
var statearr_22830_22849 = state_22824__$1;
(statearr_22830_22849[(2)] = null);

(statearr_22830_22849[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (4))){
var inst_22794 = (state_22824[(10)]);
var state_22824__$1 = state_22824;
return cljs.core.async.ioc_alts_BANG_(state_22824__$1,(7),inst_22794);
} else {
if((state_val_22825 === (6))){
var inst_22820 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
var statearr_22831_22850 = state_22824__$1;
(statearr_22831_22850[(2)] = inst_22820);

(statearr_22831_22850[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (3))){
var inst_22822 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22824__$1,inst_22822);
} else {
if((state_val_22825 === (2))){
var inst_22794 = (state_22824[(10)]);
var inst_22796 = cljs.core.count(inst_22794);
var inst_22797 = (inst_22796 > (0));
var state_22824__$1 = state_22824;
if(cljs.core.truth_(inst_22797)){
var statearr_22833_22851 = state_22824__$1;
(statearr_22833_22851[(1)] = (4));

} else {
var statearr_22834_22852 = state_22824__$1;
(statearr_22834_22852[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (11))){
var inst_22794 = (state_22824[(10)]);
var inst_22813 = (state_22824[(2)]);
var tmp22832 = inst_22794;
var inst_22794__$1 = tmp22832;
var state_22824__$1 = (function (){var statearr_22835 = state_22824;
(statearr_22835[(11)] = inst_22813);

(statearr_22835[(10)] = inst_22794__$1);

return statearr_22835;
})();
var statearr_22836_22853 = state_22824__$1;
(statearr_22836_22853[(2)] = null);

(statearr_22836_22853[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (9))){
var inst_22804 = (state_22824[(7)]);
var state_22824__$1 = state_22824;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22824__$1,(11),out,inst_22804);
} else {
if((state_val_22825 === (5))){
var inst_22818 = cljs.core.async.close_BANG_(out);
var state_22824__$1 = state_22824;
var statearr_22837_22854 = state_22824__$1;
(statearr_22837_22854[(2)] = inst_22818);

(statearr_22837_22854[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (10))){
var inst_22816 = (state_22824[(2)]);
var state_22824__$1 = state_22824;
var statearr_22838_22855 = state_22824__$1;
(statearr_22838_22855[(2)] = inst_22816);

(statearr_22838_22855[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22825 === (8))){
var inst_22804 = (state_22824[(7)]);
var inst_22805 = (state_22824[(9)]);
var inst_22794 = (state_22824[(10)]);
var inst_22803 = (state_22824[(8)]);
var inst_22808 = (function (){var cs = inst_22794;
var vec__22799 = inst_22803;
var v = inst_22804;
var c = inst_22805;
return ((function (cs,vec__22799,v,c,inst_22804,inst_22805,inst_22794,inst_22803,state_val_22825,c__21431__auto___22846,out){
return (function (p1__22790_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__22790_SHARP_);
});
;})(cs,vec__22799,v,c,inst_22804,inst_22805,inst_22794,inst_22803,state_val_22825,c__21431__auto___22846,out))
})();
var inst_22809 = cljs.core.filterv(inst_22808,inst_22794);
var inst_22794__$1 = inst_22809;
var state_22824__$1 = (function (){var statearr_22839 = state_22824;
(statearr_22839[(10)] = inst_22794__$1);

return statearr_22839;
})();
var statearr_22840_22856 = state_22824__$1;
(statearr_22840_22856[(2)] = null);

(statearr_22840_22856[(1)] = (2));


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
}
}
}
});})(c__21431__auto___22846,out))
;
return ((function (switch__21329__auto__,c__21431__auto___22846,out){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_22841 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22841[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_22841[(1)] = (1));

return statearr_22841;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_22824){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22824);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22842){if((e22842 instanceof Object)){
var ex__21333__auto__ = e22842;
var statearr_22843_22857 = state_22824;
(statearr_22843_22857[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22824);

return cljs.core.cst$kw$recur;
} else {
throw e22842;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22858 = state_22824;
state_22824 = G__22858;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_22824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_22824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22846,out))
})();
var state__21433__auto__ = (function (){var statearr_22844 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22844[(6)] = c__21431__auto___22846);

return statearr_22844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22846,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__22860 = arguments.length;
switch (G__22860) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21431__auto___22905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22905,out){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22905,out){
return (function (state_22884){
var state_val_22885 = (state_22884[(1)]);
if((state_val_22885 === (7))){
var inst_22866 = (state_22884[(7)]);
var inst_22866__$1 = (state_22884[(2)]);
var inst_22867 = (inst_22866__$1 == null);
var inst_22868 = cljs.core.not(inst_22867);
var state_22884__$1 = (function (){var statearr_22886 = state_22884;
(statearr_22886[(7)] = inst_22866__$1);

return statearr_22886;
})();
if(inst_22868){
var statearr_22887_22906 = state_22884__$1;
(statearr_22887_22906[(1)] = (8));

} else {
var statearr_22888_22907 = state_22884__$1;
(statearr_22888_22907[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (1))){
var inst_22861 = (0);
var state_22884__$1 = (function (){var statearr_22889 = state_22884;
(statearr_22889[(8)] = inst_22861);

return statearr_22889;
})();
var statearr_22890_22908 = state_22884__$1;
(statearr_22890_22908[(2)] = null);

(statearr_22890_22908[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (4))){
var state_22884__$1 = state_22884;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22884__$1,(7),ch);
} else {
if((state_val_22885 === (6))){
var inst_22879 = (state_22884[(2)]);
var state_22884__$1 = state_22884;
var statearr_22891_22909 = state_22884__$1;
(statearr_22891_22909[(2)] = inst_22879);

(statearr_22891_22909[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (3))){
var inst_22881 = (state_22884[(2)]);
var inst_22882 = cljs.core.async.close_BANG_(out);
var state_22884__$1 = (function (){var statearr_22892 = state_22884;
(statearr_22892[(9)] = inst_22881);

return statearr_22892;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22884__$1,inst_22882);
} else {
if((state_val_22885 === (2))){
var inst_22861 = (state_22884[(8)]);
var inst_22863 = (inst_22861 < n);
var state_22884__$1 = state_22884;
if(cljs.core.truth_(inst_22863)){
var statearr_22893_22910 = state_22884__$1;
(statearr_22893_22910[(1)] = (4));

} else {
var statearr_22894_22911 = state_22884__$1;
(statearr_22894_22911[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (11))){
var inst_22861 = (state_22884[(8)]);
var inst_22871 = (state_22884[(2)]);
var inst_22872 = (inst_22861 + (1));
var inst_22861__$1 = inst_22872;
var state_22884__$1 = (function (){var statearr_22895 = state_22884;
(statearr_22895[(10)] = inst_22871);

(statearr_22895[(8)] = inst_22861__$1);

return statearr_22895;
})();
var statearr_22896_22912 = state_22884__$1;
(statearr_22896_22912[(2)] = null);

(statearr_22896_22912[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (9))){
var state_22884__$1 = state_22884;
var statearr_22897_22913 = state_22884__$1;
(statearr_22897_22913[(2)] = null);

(statearr_22897_22913[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (5))){
var state_22884__$1 = state_22884;
var statearr_22898_22914 = state_22884__$1;
(statearr_22898_22914[(2)] = null);

(statearr_22898_22914[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (10))){
var inst_22876 = (state_22884[(2)]);
var state_22884__$1 = state_22884;
var statearr_22899_22915 = state_22884__$1;
(statearr_22899_22915[(2)] = inst_22876);

(statearr_22899_22915[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22885 === (8))){
var inst_22866 = (state_22884[(7)]);
var state_22884__$1 = state_22884;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22884__$1,(11),out,inst_22866);
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
}
}
}
});})(c__21431__auto___22905,out))
;
return ((function (switch__21329__auto__,c__21431__auto___22905,out){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_22900 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22900[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_22900[(1)] = (1));

return statearr_22900;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_22884){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22884);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22901){if((e22901 instanceof Object)){
var ex__21333__auto__ = e22901;
var statearr_22902_22916 = state_22884;
(statearr_22902_22916[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22884);

return cljs.core.cst$kw$recur;
} else {
throw e22901;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22917 = state_22884;
state_22884 = G__22917;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_22884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_22884);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22905,out))
})();
var state__21433__auto__ = (function (){var statearr_22903 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22903[(6)] = c__21431__auto___22905);

return statearr_22903;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22905,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22919 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22919 = (function (f,ch,meta22920){
this.f = f;
this.ch = ch;
this.meta22920 = meta22920;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22921,meta22920__$1){
var self__ = this;
var _22921__$1 = this;
return (new cljs.core.async.t_cljs$core$async22919(self__.f,self__.ch,meta22920__$1));
});

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22921){
var self__ = this;
var _22921__$1 = this;
return self__.meta22920;
});

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22922 = (function (f,ch,meta22920,_,fn1,meta22923){
this.f = f;
this.ch = ch;
this.meta22920 = meta22920;
this._ = _;
this.fn1 = fn1;
this.meta22923 = meta22923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22924,meta22923__$1){
var self__ = this;
var _22924__$1 = this;
return (new cljs.core.async.t_cljs$core$async22922(self__.f,self__.ch,self__.meta22920,self__._,self__.fn1,meta22923__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22924){
var self__ = this;
var _22924__$1 = this;
return self__.meta22923;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22918_SHARP_){
var G__22925 = (((p1__22918_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__22918_SHARP_) : self__.f.call(null,p1__22918_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__22925) : f1.call(null,G__22925));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22922.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22920,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async22919], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta22923], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22922";

cljs.core.async.t_cljs$core$async22922.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22922");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22922 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22922(f__$1,ch__$1,meta22920__$1,___$2,fn1__$1,meta22923){
return (new cljs.core.async.t_cljs$core$async22922(f__$1,ch__$1,meta22920__$1,___$2,fn1__$1,meta22923));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22922(self__.f,self__.ch,self__.meta22920,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__8904__auto__ = ret;
if(cljs.core.truth_(and__8904__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__8904__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__22926 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__22926) : self__.f.call(null,G__22926));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22919.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22919.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22920], null);
});

cljs.core.async.t_cljs$core$async22919.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22919.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22919";

cljs.core.async.t_cljs$core$async22919.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22919");
});

cljs.core.async.__GT_t_cljs$core$async22919 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22919(f__$1,ch__$1,meta22920){
return (new cljs.core.async.t_cljs$core$async22919(f__$1,ch__$1,meta22920));
});

}

return (new cljs.core.async.t_cljs$core$async22919(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22927 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22927 = (function (f,ch,meta22928){
this.f = f;
this.ch = ch;
this.meta22928 = meta22928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22929,meta22928__$1){
var self__ = this;
var _22929__$1 = this;
return (new cljs.core.async.t_cljs$core$async22927(self__.f,self__.ch,meta22928__$1));
});

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22929){
var self__ = this;
var _22929__$1 = this;
return self__.meta22928;
});

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22927.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async22927.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22928], null);
});

cljs.core.async.t_cljs$core$async22927.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22927.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22927";

cljs.core.async.t_cljs$core$async22927.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22927");
});

cljs.core.async.__GT_t_cljs$core$async22927 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22927(f__$1,ch__$1,meta22928){
return (new cljs.core.async.t_cljs$core$async22927(f__$1,ch__$1,meta22928));
});

}

return (new cljs.core.async.t_cljs$core$async22927(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22930 = (function (p,ch,meta22931){
this.p = p;
this.ch = ch;
this.meta22931 = meta22931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22932,meta22931__$1){
var self__ = this;
var _22932__$1 = this;
return (new cljs.core.async.t_cljs$core$async22930(self__.p,self__.ch,meta22931__$1));
});

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22932){
var self__ = this;
var _22932__$1 = this;
return self__.meta22931;
});

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22930.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta22931], null);
});

cljs.core.async.t_cljs$core$async22930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22930";

cljs.core.async.t_cljs$core$async22930.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write(writer__9588__auto__,"cljs.core.async/t_cljs$core$async22930");
});

cljs.core.async.__GT_t_cljs$core$async22930 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22930(p__$1,ch__$1,meta22931){
return (new cljs.core.async.t_cljs$core$async22930(p__$1,ch__$1,meta22931));
});

}

return (new cljs.core.async.t_cljs$core$async22930(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__22934 = arguments.length;
switch (G__22934) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21431__auto___22974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___22974,out){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___22974,out){
return (function (state_22955){
var state_val_22956 = (state_22955[(1)]);
if((state_val_22956 === (7))){
var inst_22951 = (state_22955[(2)]);
var state_22955__$1 = state_22955;
var statearr_22957_22975 = state_22955__$1;
(statearr_22957_22975[(2)] = inst_22951);

(statearr_22957_22975[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (1))){
var state_22955__$1 = state_22955;
var statearr_22958_22976 = state_22955__$1;
(statearr_22958_22976[(2)] = null);

(statearr_22958_22976[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (4))){
var inst_22937 = (state_22955[(7)]);
var inst_22937__$1 = (state_22955[(2)]);
var inst_22938 = (inst_22937__$1 == null);
var state_22955__$1 = (function (){var statearr_22959 = state_22955;
(statearr_22959[(7)] = inst_22937__$1);

return statearr_22959;
})();
if(cljs.core.truth_(inst_22938)){
var statearr_22960_22977 = state_22955__$1;
(statearr_22960_22977[(1)] = (5));

} else {
var statearr_22961_22978 = state_22955__$1;
(statearr_22961_22978[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (6))){
var inst_22937 = (state_22955[(7)]);
var inst_22942 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_22937) : p.call(null,inst_22937));
var state_22955__$1 = state_22955;
if(cljs.core.truth_(inst_22942)){
var statearr_22962_22979 = state_22955__$1;
(statearr_22962_22979[(1)] = (8));

} else {
var statearr_22963_22980 = state_22955__$1;
(statearr_22963_22980[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (3))){
var inst_22953 = (state_22955[(2)]);
var state_22955__$1 = state_22955;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22955__$1,inst_22953);
} else {
if((state_val_22956 === (2))){
var state_22955__$1 = state_22955;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22955__$1,(4),ch);
} else {
if((state_val_22956 === (11))){
var inst_22945 = (state_22955[(2)]);
var state_22955__$1 = state_22955;
var statearr_22964_22981 = state_22955__$1;
(statearr_22964_22981[(2)] = inst_22945);

(statearr_22964_22981[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (9))){
var state_22955__$1 = state_22955;
var statearr_22965_22982 = state_22955__$1;
(statearr_22965_22982[(2)] = null);

(statearr_22965_22982[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (5))){
var inst_22940 = cljs.core.async.close_BANG_(out);
var state_22955__$1 = state_22955;
var statearr_22966_22983 = state_22955__$1;
(statearr_22966_22983[(2)] = inst_22940);

(statearr_22966_22983[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (10))){
var inst_22948 = (state_22955[(2)]);
var state_22955__$1 = (function (){var statearr_22967 = state_22955;
(statearr_22967[(8)] = inst_22948);

return statearr_22967;
})();
var statearr_22968_22984 = state_22955__$1;
(statearr_22968_22984[(2)] = null);

(statearr_22968_22984[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_22956 === (8))){
var inst_22937 = (state_22955[(7)]);
var state_22955__$1 = state_22955;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22955__$1,(11),out,inst_22937);
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
}
}
}
});})(c__21431__auto___22974,out))
;
return ((function (switch__21329__auto__,c__21431__auto___22974,out){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_22969 = [null,null,null,null,null,null,null,null,null];
(statearr_22969[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_22969[(1)] = (1));

return statearr_22969;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_22955){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_22955);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e22970){if((e22970 instanceof Object)){
var ex__21333__auto__ = e22970;
var statearr_22971_22985 = state_22955;
(statearr_22971_22985[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22955);

return cljs.core.cst$kw$recur;
} else {
throw e22970;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__22986 = state_22955;
state_22955 = G__22986;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_22955){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_22955);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___22974,out))
})();
var state__21433__auto__ = (function (){var statearr_22972 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_22972[(6)] = c__21431__auto___22974);

return statearr_22972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___22974,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22988 = arguments.length;
switch (G__22988) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__){
return (function (state_23051){
var state_val_23052 = (state_23051[(1)]);
if((state_val_23052 === (7))){
var inst_23047 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23053_23091 = state_23051__$1;
(statearr_23053_23091[(2)] = inst_23047);

(statearr_23053_23091[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (20))){
var inst_23017 = (state_23051[(7)]);
var inst_23028 = (state_23051[(2)]);
var inst_23029 = cljs.core.next(inst_23017);
var inst_23003 = inst_23029;
var inst_23004 = null;
var inst_23005 = (0);
var inst_23006 = (0);
var state_23051__$1 = (function (){var statearr_23054 = state_23051;
(statearr_23054[(8)] = inst_23004);

(statearr_23054[(9)] = inst_23005);

(statearr_23054[(10)] = inst_23006);

(statearr_23054[(11)] = inst_23028);

(statearr_23054[(12)] = inst_23003);

return statearr_23054;
})();
var statearr_23055_23092 = state_23051__$1;
(statearr_23055_23092[(2)] = null);

(statearr_23055_23092[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (1))){
var state_23051__$1 = state_23051;
var statearr_23056_23093 = state_23051__$1;
(statearr_23056_23093[(2)] = null);

(statearr_23056_23093[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (4))){
var inst_22992 = (state_23051[(13)]);
var inst_22992__$1 = (state_23051[(2)]);
var inst_22993 = (inst_22992__$1 == null);
var state_23051__$1 = (function (){var statearr_23057 = state_23051;
(statearr_23057[(13)] = inst_22992__$1);

return statearr_23057;
})();
if(cljs.core.truth_(inst_22993)){
var statearr_23058_23094 = state_23051__$1;
(statearr_23058_23094[(1)] = (5));

} else {
var statearr_23059_23095 = state_23051__$1;
(statearr_23059_23095[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (15))){
var state_23051__$1 = state_23051;
var statearr_23063_23096 = state_23051__$1;
(statearr_23063_23096[(2)] = null);

(statearr_23063_23096[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (21))){
var state_23051__$1 = state_23051;
var statearr_23064_23097 = state_23051__$1;
(statearr_23064_23097[(2)] = null);

(statearr_23064_23097[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (13))){
var inst_23004 = (state_23051[(8)]);
var inst_23005 = (state_23051[(9)]);
var inst_23006 = (state_23051[(10)]);
var inst_23003 = (state_23051[(12)]);
var inst_23013 = (state_23051[(2)]);
var inst_23014 = (inst_23006 + (1));
var tmp23060 = inst_23004;
var tmp23061 = inst_23005;
var tmp23062 = inst_23003;
var inst_23003__$1 = tmp23062;
var inst_23004__$1 = tmp23060;
var inst_23005__$1 = tmp23061;
var inst_23006__$1 = inst_23014;
var state_23051__$1 = (function (){var statearr_23065 = state_23051;
(statearr_23065[(8)] = inst_23004__$1);

(statearr_23065[(9)] = inst_23005__$1);

(statearr_23065[(10)] = inst_23006__$1);

(statearr_23065[(12)] = inst_23003__$1);

(statearr_23065[(14)] = inst_23013);

return statearr_23065;
})();
var statearr_23066_23098 = state_23051__$1;
(statearr_23066_23098[(2)] = null);

(statearr_23066_23098[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (22))){
var state_23051__$1 = state_23051;
var statearr_23067_23099 = state_23051__$1;
(statearr_23067_23099[(2)] = null);

(statearr_23067_23099[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (6))){
var inst_22992 = (state_23051[(13)]);
var inst_23001 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_22992) : f.call(null,inst_22992));
var inst_23002 = cljs.core.seq(inst_23001);
var inst_23003 = inst_23002;
var inst_23004 = null;
var inst_23005 = (0);
var inst_23006 = (0);
var state_23051__$1 = (function (){var statearr_23068 = state_23051;
(statearr_23068[(8)] = inst_23004);

(statearr_23068[(9)] = inst_23005);

(statearr_23068[(10)] = inst_23006);

(statearr_23068[(12)] = inst_23003);

return statearr_23068;
})();
var statearr_23069_23100 = state_23051__$1;
(statearr_23069_23100[(2)] = null);

(statearr_23069_23100[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (17))){
var inst_23017 = (state_23051[(7)]);
var inst_23021 = cljs.core.chunk_first(inst_23017);
var inst_23022 = cljs.core.chunk_rest(inst_23017);
var inst_23023 = cljs.core.count(inst_23021);
var inst_23003 = inst_23022;
var inst_23004 = inst_23021;
var inst_23005 = inst_23023;
var inst_23006 = (0);
var state_23051__$1 = (function (){var statearr_23070 = state_23051;
(statearr_23070[(8)] = inst_23004);

(statearr_23070[(9)] = inst_23005);

(statearr_23070[(10)] = inst_23006);

(statearr_23070[(12)] = inst_23003);

return statearr_23070;
})();
var statearr_23071_23101 = state_23051__$1;
(statearr_23071_23101[(2)] = null);

(statearr_23071_23101[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (3))){
var inst_23049 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23051__$1,inst_23049);
} else {
if((state_val_23052 === (12))){
var inst_23037 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23072_23102 = state_23051__$1;
(statearr_23072_23102[(2)] = inst_23037);

(statearr_23072_23102[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (2))){
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23051__$1,(4),in$);
} else {
if((state_val_23052 === (23))){
var inst_23045 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23073_23103 = state_23051__$1;
(statearr_23073_23103[(2)] = inst_23045);

(statearr_23073_23103[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (19))){
var inst_23032 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23074_23104 = state_23051__$1;
(statearr_23074_23104[(2)] = inst_23032);

(statearr_23074_23104[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (11))){
var inst_23017 = (state_23051[(7)]);
var inst_23003 = (state_23051[(12)]);
var inst_23017__$1 = cljs.core.seq(inst_23003);
var state_23051__$1 = (function (){var statearr_23075 = state_23051;
(statearr_23075[(7)] = inst_23017__$1);

return statearr_23075;
})();
if(inst_23017__$1){
var statearr_23076_23105 = state_23051__$1;
(statearr_23076_23105[(1)] = (14));

} else {
var statearr_23077_23106 = state_23051__$1;
(statearr_23077_23106[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (9))){
var inst_23039 = (state_23051[(2)]);
var inst_23040 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_23051__$1 = (function (){var statearr_23078 = state_23051;
(statearr_23078[(15)] = inst_23039);

return statearr_23078;
})();
if(cljs.core.truth_(inst_23040)){
var statearr_23079_23107 = state_23051__$1;
(statearr_23079_23107[(1)] = (21));

} else {
var statearr_23080_23108 = state_23051__$1;
(statearr_23080_23108[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (5))){
var inst_22995 = cljs.core.async.close_BANG_(out);
var state_23051__$1 = state_23051;
var statearr_23081_23109 = state_23051__$1;
(statearr_23081_23109[(2)] = inst_22995);

(statearr_23081_23109[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (14))){
var inst_23017 = (state_23051[(7)]);
var inst_23019 = cljs.core.chunked_seq_QMARK_(inst_23017);
var state_23051__$1 = state_23051;
if(inst_23019){
var statearr_23082_23110 = state_23051__$1;
(statearr_23082_23110[(1)] = (17));

} else {
var statearr_23083_23111 = state_23051__$1;
(statearr_23083_23111[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (16))){
var inst_23035 = (state_23051[(2)]);
var state_23051__$1 = state_23051;
var statearr_23084_23112 = state_23051__$1;
(statearr_23084_23112[(2)] = inst_23035);

(statearr_23084_23112[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23052 === (10))){
var inst_23004 = (state_23051[(8)]);
var inst_23006 = (state_23051[(10)]);
var inst_23011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23004,inst_23006);
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23051__$1,(13),out,inst_23011);
} else {
if((state_val_23052 === (18))){
var inst_23017 = (state_23051[(7)]);
var inst_23026 = cljs.core.first(inst_23017);
var state_23051__$1 = state_23051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23051__$1,(20),out,inst_23026);
} else {
if((state_val_23052 === (8))){
var inst_23005 = (state_23051[(9)]);
var inst_23006 = (state_23051[(10)]);
var inst_23008 = (inst_23006 < inst_23005);
var inst_23009 = inst_23008;
var state_23051__$1 = state_23051;
if(cljs.core.truth_(inst_23009)){
var statearr_23085_23113 = state_23051__$1;
(statearr_23085_23113[(1)] = (10));

} else {
var statearr_23086_23114 = state_23051__$1;
(statearr_23086_23114[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21431__auto__))
;
return ((function (switch__21329__auto__,c__21431__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21330__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21330__auto____0 = (function (){
var statearr_23087 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23087[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21330__auto__);

(statearr_23087[(1)] = (1));

return statearr_23087;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21330__auto____1 = (function (state_23051){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_23051);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e23088){if((e23088 instanceof Object)){
var ex__21333__auto__ = e23088;
var statearr_23089_23115 = state_23051;
(statearr_23089_23115[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23051);

return cljs.core.cst$kw$recur;
} else {
throw e23088;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__23116 = state_23051;
state_23051 = G__23116;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21330__auto__ = function(state_23051){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21330__auto____1.call(this,state_23051);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21330__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21330__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_23090 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_23090[(6)] = c__21431__auto__);

return statearr_23090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23118 = arguments.length;
switch (G__23118) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23121 = arguments.length;
switch (G__23121) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23124 = arguments.length;
switch (G__23124) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21431__auto___23171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___23171,out){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___23171,out){
return (function (state_23148){
var state_val_23149 = (state_23148[(1)]);
if((state_val_23149 === (7))){
var inst_23143 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23150_23172 = state_23148__$1;
(statearr_23150_23172[(2)] = inst_23143);

(statearr_23150_23172[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (1))){
var inst_23125 = null;
var state_23148__$1 = (function (){var statearr_23151 = state_23148;
(statearr_23151[(7)] = inst_23125);

return statearr_23151;
})();
var statearr_23152_23173 = state_23148__$1;
(statearr_23152_23173[(2)] = null);

(statearr_23152_23173[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (4))){
var inst_23128 = (state_23148[(8)]);
var inst_23128__$1 = (state_23148[(2)]);
var inst_23129 = (inst_23128__$1 == null);
var inst_23130 = cljs.core.not(inst_23129);
var state_23148__$1 = (function (){var statearr_23153 = state_23148;
(statearr_23153[(8)] = inst_23128__$1);

return statearr_23153;
})();
if(inst_23130){
var statearr_23154_23174 = state_23148__$1;
(statearr_23154_23174[(1)] = (5));

} else {
var statearr_23155_23175 = state_23148__$1;
(statearr_23155_23175[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (6))){
var state_23148__$1 = state_23148;
var statearr_23156_23176 = state_23148__$1;
(statearr_23156_23176[(2)] = null);

(statearr_23156_23176[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (3))){
var inst_23145 = (state_23148[(2)]);
var inst_23146 = cljs.core.async.close_BANG_(out);
var state_23148__$1 = (function (){var statearr_23157 = state_23148;
(statearr_23157[(9)] = inst_23145);

return statearr_23157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_23148__$1,inst_23146);
} else {
if((state_val_23149 === (2))){
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23148__$1,(4),ch);
} else {
if((state_val_23149 === (11))){
var inst_23128 = (state_23148[(8)]);
var inst_23137 = (state_23148[(2)]);
var inst_23125 = inst_23128;
var state_23148__$1 = (function (){var statearr_23158 = state_23148;
(statearr_23158[(7)] = inst_23125);

(statearr_23158[(10)] = inst_23137);

return statearr_23158;
})();
var statearr_23159_23177 = state_23148__$1;
(statearr_23159_23177[(2)] = null);

(statearr_23159_23177[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (9))){
var inst_23128 = (state_23148[(8)]);
var state_23148__$1 = state_23148;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23148__$1,(11),out,inst_23128);
} else {
if((state_val_23149 === (5))){
var inst_23125 = (state_23148[(7)]);
var inst_23128 = (state_23148[(8)]);
var inst_23132 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23128,inst_23125);
var state_23148__$1 = state_23148;
if(inst_23132){
var statearr_23161_23178 = state_23148__$1;
(statearr_23161_23178[(1)] = (8));

} else {
var statearr_23162_23179 = state_23148__$1;
(statearr_23162_23179[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (10))){
var inst_23140 = (state_23148[(2)]);
var state_23148__$1 = state_23148;
var statearr_23163_23180 = state_23148__$1;
(statearr_23163_23180[(2)] = inst_23140);

(statearr_23163_23180[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23149 === (8))){
var inst_23125 = (state_23148[(7)]);
var tmp23160 = inst_23125;
var inst_23125__$1 = tmp23160;
var state_23148__$1 = (function (){var statearr_23164 = state_23148;
(statearr_23164[(7)] = inst_23125__$1);

return statearr_23164;
})();
var statearr_23165_23181 = state_23148__$1;
(statearr_23165_23181[(2)] = null);

(statearr_23165_23181[(1)] = (2));


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
}
}
}
});})(c__21431__auto___23171,out))
;
return ((function (switch__21329__auto__,c__21431__auto___23171,out){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_23166 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23166[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_23166[(1)] = (1));

return statearr_23166;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_23148){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_23148);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e23167){if((e23167 instanceof Object)){
var ex__21333__auto__ = e23167;
var statearr_23168_23182 = state_23148;
(statearr_23168_23182[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23148);

return cljs.core.cst$kw$recur;
} else {
throw e23167;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__23183 = state_23148;
state_23148 = G__23183;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_23148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_23148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___23171,out))
})();
var state__21433__auto__ = (function (){var statearr_23169 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_23169[(6)] = c__21431__auto___23171);

return statearr_23169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___23171,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23185 = arguments.length;
switch (G__23185) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21431__auto___23251 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___23251,out){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___23251,out){
return (function (state_23223){
var state_val_23224 = (state_23223[(1)]);
if((state_val_23224 === (7))){
var inst_23219 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
var statearr_23225_23252 = state_23223__$1;
(statearr_23225_23252[(2)] = inst_23219);

(statearr_23225_23252[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (1))){
var inst_23186 = (new Array(n));
var inst_23187 = inst_23186;
var inst_23188 = (0);
var state_23223__$1 = (function (){var statearr_23226 = state_23223;
(statearr_23226[(7)] = inst_23187);

(statearr_23226[(8)] = inst_23188);

return statearr_23226;
})();
var statearr_23227_23253 = state_23223__$1;
(statearr_23227_23253[(2)] = null);

(statearr_23227_23253[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (4))){
var inst_23191 = (state_23223[(9)]);
var inst_23191__$1 = (state_23223[(2)]);
var inst_23192 = (inst_23191__$1 == null);
var inst_23193 = cljs.core.not(inst_23192);
var state_23223__$1 = (function (){var statearr_23228 = state_23223;
(statearr_23228[(9)] = inst_23191__$1);

return statearr_23228;
})();
if(inst_23193){
var statearr_23229_23254 = state_23223__$1;
(statearr_23229_23254[(1)] = (5));

} else {
var statearr_23230_23255 = state_23223__$1;
(statearr_23230_23255[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (15))){
var inst_23213 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
var statearr_23231_23256 = state_23223__$1;
(statearr_23231_23256[(2)] = inst_23213);

(statearr_23231_23256[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (13))){
var state_23223__$1 = state_23223;
var statearr_23232_23257 = state_23223__$1;
(statearr_23232_23257[(2)] = null);

(statearr_23232_23257[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (6))){
var inst_23188 = (state_23223[(8)]);
var inst_23209 = (inst_23188 > (0));
var state_23223__$1 = state_23223;
if(cljs.core.truth_(inst_23209)){
var statearr_23233_23258 = state_23223__$1;
(statearr_23233_23258[(1)] = (12));

} else {
var statearr_23234_23259 = state_23223__$1;
(statearr_23234_23259[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (3))){
var inst_23221 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23223__$1,inst_23221);
} else {
if((state_val_23224 === (12))){
var inst_23187 = (state_23223[(7)]);
var inst_23211 = cljs.core.vec(inst_23187);
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23223__$1,(15),out,inst_23211);
} else {
if((state_val_23224 === (2))){
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23223__$1,(4),ch);
} else {
if((state_val_23224 === (11))){
var inst_23203 = (state_23223[(2)]);
var inst_23204 = (new Array(n));
var inst_23187 = inst_23204;
var inst_23188 = (0);
var state_23223__$1 = (function (){var statearr_23235 = state_23223;
(statearr_23235[(7)] = inst_23187);

(statearr_23235[(10)] = inst_23203);

(statearr_23235[(8)] = inst_23188);

return statearr_23235;
})();
var statearr_23236_23260 = state_23223__$1;
(statearr_23236_23260[(2)] = null);

(statearr_23236_23260[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (9))){
var inst_23187 = (state_23223[(7)]);
var inst_23201 = cljs.core.vec(inst_23187);
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23223__$1,(11),out,inst_23201);
} else {
if((state_val_23224 === (5))){
var inst_23187 = (state_23223[(7)]);
var inst_23191 = (state_23223[(9)]);
var inst_23196 = (state_23223[(11)]);
var inst_23188 = (state_23223[(8)]);
var inst_23195 = (inst_23187[inst_23188] = inst_23191);
var inst_23196__$1 = (inst_23188 + (1));
var inst_23197 = (inst_23196__$1 < n);
var state_23223__$1 = (function (){var statearr_23237 = state_23223;
(statearr_23237[(12)] = inst_23195);

(statearr_23237[(11)] = inst_23196__$1);

return statearr_23237;
})();
if(cljs.core.truth_(inst_23197)){
var statearr_23238_23261 = state_23223__$1;
(statearr_23238_23261[(1)] = (8));

} else {
var statearr_23239_23262 = state_23223__$1;
(statearr_23239_23262[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (14))){
var inst_23216 = (state_23223[(2)]);
var inst_23217 = cljs.core.async.close_BANG_(out);
var state_23223__$1 = (function (){var statearr_23241 = state_23223;
(statearr_23241[(13)] = inst_23216);

return statearr_23241;
})();
var statearr_23242_23263 = state_23223__$1;
(statearr_23242_23263[(2)] = inst_23217);

(statearr_23242_23263[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (10))){
var inst_23207 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
var statearr_23243_23264 = state_23223__$1;
(statearr_23243_23264[(2)] = inst_23207);

(statearr_23243_23264[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23224 === (8))){
var inst_23187 = (state_23223[(7)]);
var inst_23196 = (state_23223[(11)]);
var tmp23240 = inst_23187;
var inst_23187__$1 = tmp23240;
var inst_23188 = inst_23196;
var state_23223__$1 = (function (){var statearr_23244 = state_23223;
(statearr_23244[(7)] = inst_23187__$1);

(statearr_23244[(8)] = inst_23188);

return statearr_23244;
})();
var statearr_23245_23265 = state_23223__$1;
(statearr_23245_23265[(2)] = null);

(statearr_23245_23265[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__21431__auto___23251,out))
;
return ((function (switch__21329__auto__,c__21431__auto___23251,out){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_23246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23246[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_23246[(1)] = (1));

return statearr_23246;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_23223){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_23223);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e23247){if((e23247 instanceof Object)){
var ex__21333__auto__ = e23247;
var statearr_23248_23266 = state_23223;
(statearr_23248_23266[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23223);

return cljs.core.cst$kw$recur;
} else {
throw e23247;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__23267 = state_23223;
state_23223 = G__23267;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_23223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_23223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___23251,out))
})();
var state__21433__auto__ = (function (){var statearr_23249 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_23249[(6)] = c__21431__auto___23251);

return statearr_23249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___23251,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23269 = arguments.length;
switch (G__23269) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__21431__auto___23339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___23339,out){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___23339,out){
return (function (state_23311){
var state_val_23312 = (state_23311[(1)]);
if((state_val_23312 === (7))){
var inst_23307 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
var statearr_23313_23340 = state_23311__$1;
(statearr_23313_23340[(2)] = inst_23307);

(statearr_23313_23340[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (1))){
var inst_23270 = [];
var inst_23271 = inst_23270;
var inst_23272 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_23311__$1 = (function (){var statearr_23314 = state_23311;
(statearr_23314[(7)] = inst_23272);

(statearr_23314[(8)] = inst_23271);

return statearr_23314;
})();
var statearr_23315_23341 = state_23311__$1;
(statearr_23315_23341[(2)] = null);

(statearr_23315_23341[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (4))){
var inst_23275 = (state_23311[(9)]);
var inst_23275__$1 = (state_23311[(2)]);
var inst_23276 = (inst_23275__$1 == null);
var inst_23277 = cljs.core.not(inst_23276);
var state_23311__$1 = (function (){var statearr_23316 = state_23311;
(statearr_23316[(9)] = inst_23275__$1);

return statearr_23316;
})();
if(inst_23277){
var statearr_23317_23342 = state_23311__$1;
(statearr_23317_23342[(1)] = (5));

} else {
var statearr_23318_23343 = state_23311__$1;
(statearr_23318_23343[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (15))){
var inst_23301 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
var statearr_23319_23344 = state_23311__$1;
(statearr_23319_23344[(2)] = inst_23301);

(statearr_23319_23344[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (13))){
var state_23311__$1 = state_23311;
var statearr_23320_23345 = state_23311__$1;
(statearr_23320_23345[(2)] = null);

(statearr_23320_23345[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (6))){
var inst_23271 = (state_23311[(8)]);
var inst_23296 = inst_23271.length;
var inst_23297 = (inst_23296 > (0));
var state_23311__$1 = state_23311;
if(cljs.core.truth_(inst_23297)){
var statearr_23321_23346 = state_23311__$1;
(statearr_23321_23346[(1)] = (12));

} else {
var statearr_23322_23347 = state_23311__$1;
(statearr_23322_23347[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (3))){
var inst_23309 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23311__$1,inst_23309);
} else {
if((state_val_23312 === (12))){
var inst_23271 = (state_23311[(8)]);
var inst_23299 = cljs.core.vec(inst_23271);
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23311__$1,(15),out,inst_23299);
} else {
if((state_val_23312 === (2))){
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23311__$1,(4),ch);
} else {
if((state_val_23312 === (11))){
var inst_23275 = (state_23311[(9)]);
var inst_23279 = (state_23311[(10)]);
var inst_23289 = (state_23311[(2)]);
var inst_23290 = [];
var inst_23291 = inst_23290.push(inst_23275);
var inst_23271 = inst_23290;
var inst_23272 = inst_23279;
var state_23311__$1 = (function (){var statearr_23323 = state_23311;
(statearr_23323[(11)] = inst_23289);

(statearr_23323[(12)] = inst_23291);

(statearr_23323[(7)] = inst_23272);

(statearr_23323[(8)] = inst_23271);

return statearr_23323;
})();
var statearr_23324_23348 = state_23311__$1;
(statearr_23324_23348[(2)] = null);

(statearr_23324_23348[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (9))){
var inst_23271 = (state_23311[(8)]);
var inst_23287 = cljs.core.vec(inst_23271);
var state_23311__$1 = state_23311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23311__$1,(11),out,inst_23287);
} else {
if((state_val_23312 === (5))){
var inst_23275 = (state_23311[(9)]);
var inst_23279 = (state_23311[(10)]);
var inst_23272 = (state_23311[(7)]);
var inst_23279__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_23275) : f.call(null,inst_23275));
var inst_23280 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23279__$1,inst_23272);
var inst_23281 = cljs.core.keyword_identical_QMARK_(inst_23272,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_23282 = (inst_23280) || (inst_23281);
var state_23311__$1 = (function (){var statearr_23325 = state_23311;
(statearr_23325[(10)] = inst_23279__$1);

return statearr_23325;
})();
if(cljs.core.truth_(inst_23282)){
var statearr_23326_23349 = state_23311__$1;
(statearr_23326_23349[(1)] = (8));

} else {
var statearr_23327_23350 = state_23311__$1;
(statearr_23327_23350[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (14))){
var inst_23304 = (state_23311[(2)]);
var inst_23305 = cljs.core.async.close_BANG_(out);
var state_23311__$1 = (function (){var statearr_23329 = state_23311;
(statearr_23329[(13)] = inst_23304);

return statearr_23329;
})();
var statearr_23330_23351 = state_23311__$1;
(statearr_23330_23351[(2)] = inst_23305);

(statearr_23330_23351[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (10))){
var inst_23294 = (state_23311[(2)]);
var state_23311__$1 = state_23311;
var statearr_23331_23352 = state_23311__$1;
(statearr_23331_23352[(2)] = inst_23294);

(statearr_23331_23352[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_23312 === (8))){
var inst_23275 = (state_23311[(9)]);
var inst_23279 = (state_23311[(10)]);
var inst_23271 = (state_23311[(8)]);
var inst_23284 = inst_23271.push(inst_23275);
var tmp23328 = inst_23271;
var inst_23271__$1 = tmp23328;
var inst_23272 = inst_23279;
var state_23311__$1 = (function (){var statearr_23332 = state_23311;
(statearr_23332[(14)] = inst_23284);

(statearr_23332[(7)] = inst_23272);

(statearr_23332[(8)] = inst_23271__$1);

return statearr_23332;
})();
var statearr_23333_23353 = state_23311__$1;
(statearr_23333_23353[(2)] = null);

(statearr_23333_23353[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__21431__auto___23339,out))
;
return ((function (switch__21329__auto__,c__21431__auto___23339,out){
return (function() {
var cljs$core$async$state_machine__21330__auto__ = null;
var cljs$core$async$state_machine__21330__auto____0 = (function (){
var statearr_23334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23334[(0)] = cljs$core$async$state_machine__21330__auto__);

(statearr_23334[(1)] = (1));

return statearr_23334;
});
var cljs$core$async$state_machine__21330__auto____1 = (function (state_23311){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_23311);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e23335){if((e23335 instanceof Object)){
var ex__21333__auto__ = e23335;
var statearr_23336_23354 = state_23311;
(statearr_23336_23354[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23311);

return cljs.core.cst$kw$recur;
} else {
throw e23335;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__23355 = state_23311;
state_23311 = G__23355;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
cljs$core$async$state_machine__21330__auto__ = function(state_23311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21330__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21330__auto____1.call(this,state_23311);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21330__auto____0;
cljs$core$async$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21330__auto____1;
return cljs$core$async$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___23339,out))
})();
var state__21433__auto__ = (function (){var statearr_23337 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_23337[(6)] = c__21431__auto___23339);

return statearr_23337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___23339,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

