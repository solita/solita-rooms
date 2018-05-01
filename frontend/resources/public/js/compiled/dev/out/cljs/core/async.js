// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__62188 = arguments.length;
switch (G__62188) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async62189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62189 = (function (f,blockable,meta62190){
this.f = f;
this.blockable = blockable;
this.meta62190 = meta62190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62191,meta62190__$1){
var self__ = this;
var _62191__$1 = this;
return (new cljs.core.async.t_cljs$core$async62189(self__.f,self__.blockable,meta62190__$1));
});

cljs.core.async.t_cljs$core$async62189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62191){
var self__ = this;
var _62191__$1 = this;
return self__.meta62190;
});

cljs.core.async.t_cljs$core$async62189.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async62189.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async62189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async62189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta62190","meta62190",-1116703867,null)], null);
});

cljs.core.async.t_cljs$core$async62189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62189";

cljs.core.async.t_cljs$core$async62189.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async62189");
});

cljs.core.async.__GT_t_cljs$core$async62189 = (function cljs$core$async$__GT_t_cljs$core$async62189(f__$1,blockable__$1,meta62190){
return (new cljs.core.async.t_cljs$core$async62189(f__$1,blockable__$1,meta62190));
});

}

return (new cljs.core.async.t_cljs$core$async62189(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__62195 = arguments.length;
switch (G__62195) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__62198 = arguments.length;
switch (G__62198) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__62201 = arguments.length;
switch (G__62201) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_62203 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_62203);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_62203,ret){
return (function (){
return fn1.call(null,val_62203);
});})(val_62203,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__62205 = arguments.length;
switch (G__62205) {
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
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
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
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31224__auto___62207 = n;
var x_62208 = (0);
while(true){
if((x_62208 < n__31224__auto___62207)){
(a[x_62208] = (0));

var G__62209 = (x_62208 + (1));
x_62208 = G__62209;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__62210 = (i + (1));
i = G__62210;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async62211 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62211 = (function (flag,meta62212){
this.flag = flag;
this.meta62212 = meta62212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_62213,meta62212__$1){
var self__ = this;
var _62213__$1 = this;
return (new cljs.core.async.t_cljs$core$async62211(self__.flag,meta62212__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async62211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_62213){
var self__ = this;
var _62213__$1 = this;
return self__.meta62212;
});})(flag))
;

cljs.core.async.t_cljs$core$async62211.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62211.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async62211.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async62211.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async62211.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62212","meta62212",1889742154,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async62211.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62211.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62211";

cljs.core.async.t_cljs$core$async62211.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async62211");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async62211 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62211(flag__$1,meta62212){
return (new cljs.core.async.t_cljs$core$async62211(flag__$1,meta62212));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async62211(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async62214 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62214 = (function (flag,cb,meta62215){
this.flag = flag;
this.cb = cb;
this.meta62215 = meta62215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62216,meta62215__$1){
var self__ = this;
var _62216__$1 = this;
return (new cljs.core.async.t_cljs$core$async62214(self__.flag,self__.cb,meta62215__$1));
});

cljs.core.async.t_cljs$core$async62214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62216){
var self__ = this;
var _62216__$1 = this;
return self__.meta62215;
});

cljs.core.async.t_cljs$core$async62214.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62214.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async62214.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async62214.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async62214.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62215","meta62215",927089554,null)], null);
});

cljs.core.async.t_cljs$core$async62214.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62214.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62214";

cljs.core.async.t_cljs$core$async62214.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async62214");
});

cljs.core.async.__GT_t_cljs$core$async62214 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62214(flag__$1,cb__$1,meta62215){
return (new cljs.core.async.t_cljs$core$async62214(flag__$1,cb__$1,meta62215));
});

}

return (new cljs.core.async.t_cljs$core$async62214(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62217_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62217_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62218_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62218_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30179__auto__ = wport;
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return port;
}
})()], null));
} else {
var G__62219 = (i + (1));
i = G__62219;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30179__auto__ = ret;
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30167__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30167__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30167__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__31465__auto__ = [];
var len__31458__auto___62225 = arguments.length;
var i__31459__auto___62226 = (0);
while(true){
if((i__31459__auto___62226 < len__31458__auto___62225)){
args__31465__auto__.push((arguments[i__31459__auto___62226]));

var G__62227 = (i__31459__auto___62226 + (1));
i__31459__auto___62226 = G__62227;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((1) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31466__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62222){
var map__62223 = p__62222;
var map__62223__$1 = ((((!((map__62223 == null)))?((((map__62223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__62223.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62223):map__62223);
var opts = map__62223__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62220){
var G__62221 = cljs.core.first.call(null,seq62220);
var seq62220__$1 = cljs.core.next.call(null,seq62220);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62221,seq62220__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__62229 = arguments.length;
switch (G__62229) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35408__auto___62275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___62275){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___62275){
return (function (state_62253){
var state_val_62254 = (state_62253[(1)]);
if((state_val_62254 === (7))){
var inst_62249 = (state_62253[(2)]);
var state_62253__$1 = state_62253;
var statearr_62255_62276 = state_62253__$1;
(statearr_62255_62276[(2)] = inst_62249);

(statearr_62255_62276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (1))){
var state_62253__$1 = state_62253;
var statearr_62256_62277 = state_62253__$1;
(statearr_62256_62277[(2)] = null);

(statearr_62256_62277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (4))){
var inst_62232 = (state_62253[(7)]);
var inst_62232__$1 = (state_62253[(2)]);
var inst_62233 = (inst_62232__$1 == null);
var state_62253__$1 = (function (){var statearr_62257 = state_62253;
(statearr_62257[(7)] = inst_62232__$1);

return statearr_62257;
})();
if(cljs.core.truth_(inst_62233)){
var statearr_62258_62278 = state_62253__$1;
(statearr_62258_62278[(1)] = (5));

} else {
var statearr_62259_62279 = state_62253__$1;
(statearr_62259_62279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (13))){
var state_62253__$1 = state_62253;
var statearr_62260_62280 = state_62253__$1;
(statearr_62260_62280[(2)] = null);

(statearr_62260_62280[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (6))){
var inst_62232 = (state_62253[(7)]);
var state_62253__$1 = state_62253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62253__$1,(11),to,inst_62232);
} else {
if((state_val_62254 === (3))){
var inst_62251 = (state_62253[(2)]);
var state_62253__$1 = state_62253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62253__$1,inst_62251);
} else {
if((state_val_62254 === (12))){
var state_62253__$1 = state_62253;
var statearr_62261_62281 = state_62253__$1;
(statearr_62261_62281[(2)] = null);

(statearr_62261_62281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (2))){
var state_62253__$1 = state_62253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62253__$1,(4),from);
} else {
if((state_val_62254 === (11))){
var inst_62242 = (state_62253[(2)]);
var state_62253__$1 = state_62253;
if(cljs.core.truth_(inst_62242)){
var statearr_62262_62282 = state_62253__$1;
(statearr_62262_62282[(1)] = (12));

} else {
var statearr_62263_62283 = state_62253__$1;
(statearr_62263_62283[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (9))){
var state_62253__$1 = state_62253;
var statearr_62264_62284 = state_62253__$1;
(statearr_62264_62284[(2)] = null);

(statearr_62264_62284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (5))){
var state_62253__$1 = state_62253;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62265_62285 = state_62253__$1;
(statearr_62265_62285[(1)] = (8));

} else {
var statearr_62266_62286 = state_62253__$1;
(statearr_62266_62286[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (14))){
var inst_62247 = (state_62253[(2)]);
var state_62253__$1 = state_62253;
var statearr_62267_62287 = state_62253__$1;
(statearr_62267_62287[(2)] = inst_62247);

(statearr_62267_62287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (10))){
var inst_62239 = (state_62253[(2)]);
var state_62253__$1 = state_62253;
var statearr_62268_62288 = state_62253__$1;
(statearr_62268_62288[(2)] = inst_62239);

(statearr_62268_62288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62254 === (8))){
var inst_62236 = cljs.core.async.close_BANG_.call(null,to);
var state_62253__$1 = state_62253;
var statearr_62269_62289 = state_62253__$1;
(statearr_62269_62289[(2)] = inst_62236);

(statearr_62269_62289[(1)] = (10));


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
}
}
}
}
}
}
});})(c__35408__auto___62275))
;
return ((function (switch__35318__auto__,c__35408__auto___62275){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_62270 = [null,null,null,null,null,null,null,null];
(statearr_62270[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_62270[(1)] = (1));

return statearr_62270;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_62253){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62271){if((e62271 instanceof Object)){
var ex__35322__auto__ = e62271;
var statearr_62272_62290 = state_62253;
(statearr_62272_62290[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62291 = state_62253;
state_62253 = G__62291;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_62253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_62253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___62275))
})();
var state__35410__auto__ = (function (){var statearr_62273 = f__35409__auto__.call(null);
(statearr_62273[(6)] = c__35408__auto___62275);

return statearr_62273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___62275))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__62292){
var vec__62293 = p__62292;
var v = cljs.core.nth.call(null,vec__62293,(0),null);
var p = cljs.core.nth.call(null,vec__62293,(1),null);
var job = vec__62293;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35408__auto___62464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___62464,res,vec__62293,v,p,job,jobs,results){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___62464,res,vec__62293,v,p,job,jobs,results){
return (function (state_62300){
var state_val_62301 = (state_62300[(1)]);
if((state_val_62301 === (1))){
var state_62300__$1 = state_62300;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62300__$1,(2),res,v);
} else {
if((state_val_62301 === (2))){
var inst_62297 = (state_62300[(2)]);
var inst_62298 = cljs.core.async.close_BANG_.call(null,res);
var state_62300__$1 = (function (){var statearr_62302 = state_62300;
(statearr_62302[(7)] = inst_62297);

return statearr_62302;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62300__$1,inst_62298);
} else {
return null;
}
}
});})(c__35408__auto___62464,res,vec__62293,v,p,job,jobs,results))
;
return ((function (switch__35318__auto__,c__35408__auto___62464,res,vec__62293,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0 = (function (){
var statearr_62303 = [null,null,null,null,null,null,null,null];
(statearr_62303[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__);

(statearr_62303[(1)] = (1));

return statearr_62303;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1 = (function (state_62300){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62300);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62304){if((e62304 instanceof Object)){
var ex__35322__auto__ = e62304;
var statearr_62305_62465 = state_62300;
(statearr_62305_62465[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62466 = state_62300;
state_62300 = G__62466;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = function(state_62300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1.call(this,state_62300);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___62464,res,vec__62293,v,p,job,jobs,results))
})();
var state__35410__auto__ = (function (){var statearr_62306 = f__35409__auto__.call(null);
(statearr_62306[(6)] = c__35408__auto___62464);

return statearr_62306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___62464,res,vec__62293,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__62307){
var vec__62308 = p__62307;
var v = cljs.core.nth.call(null,vec__62308,(0),null);
var p = cljs.core.nth.call(null,vec__62308,(1),null);
var job = vec__62308;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__31224__auto___62467 = n;
var __62468 = (0);
while(true){
if((__62468 < n__31224__auto___62467)){
var G__62311_62469 = type;
var G__62311_62470__$1 = (((G__62311_62469 instanceof cljs.core.Keyword))?G__62311_62469.fqn:null);
switch (G__62311_62470__$1) {
case "compute":
var c__35408__auto___62472 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62468,c__35408__auto___62472,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (__62468,c__35408__auto___62472,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async){
return (function (state_62324){
var state_val_62325 = (state_62324[(1)]);
if((state_val_62325 === (1))){
var state_62324__$1 = state_62324;
var statearr_62326_62473 = state_62324__$1;
(statearr_62326_62473[(2)] = null);

(statearr_62326_62473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62325 === (2))){
var state_62324__$1 = state_62324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62324__$1,(4),jobs);
} else {
if((state_val_62325 === (3))){
var inst_62322 = (state_62324[(2)]);
var state_62324__$1 = state_62324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62324__$1,inst_62322);
} else {
if((state_val_62325 === (4))){
var inst_62314 = (state_62324[(2)]);
var inst_62315 = process__$1.call(null,inst_62314);
var state_62324__$1 = state_62324;
if(cljs.core.truth_(inst_62315)){
var statearr_62327_62474 = state_62324__$1;
(statearr_62327_62474[(1)] = (5));

} else {
var statearr_62328_62475 = state_62324__$1;
(statearr_62328_62475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62325 === (5))){
var state_62324__$1 = state_62324;
var statearr_62329_62476 = state_62324__$1;
(statearr_62329_62476[(2)] = null);

(statearr_62329_62476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62325 === (6))){
var state_62324__$1 = state_62324;
var statearr_62330_62477 = state_62324__$1;
(statearr_62330_62477[(2)] = null);

(statearr_62330_62477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62325 === (7))){
var inst_62320 = (state_62324[(2)]);
var state_62324__$1 = state_62324;
var statearr_62331_62478 = state_62324__$1;
(statearr_62331_62478[(2)] = inst_62320);

(statearr_62331_62478[(1)] = (3));


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
});})(__62468,c__35408__auto___62472,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async))
;
return ((function (__62468,switch__35318__auto__,c__35408__auto___62472,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0 = (function (){
var statearr_62332 = [null,null,null,null,null,null,null];
(statearr_62332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__);

(statearr_62332[(1)] = (1));

return statearr_62332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1 = (function (state_62324){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62333){if((e62333 instanceof Object)){
var ex__35322__auto__ = e62333;
var statearr_62334_62479 = state_62324;
(statearr_62334_62479[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62480 = state_62324;
state_62324 = G__62480;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = function(state_62324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1.call(this,state_62324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__;
})()
;})(__62468,switch__35318__auto__,c__35408__auto___62472,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async))
})();
var state__35410__auto__ = (function (){var statearr_62335 = f__35409__auto__.call(null);
(statearr_62335[(6)] = c__35408__auto___62472);

return statearr_62335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(__62468,c__35408__auto___62472,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async))
);


break;
case "async":
var c__35408__auto___62481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62468,c__35408__auto___62481,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (__62468,c__35408__auto___62481,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async){
return (function (state_62348){
var state_val_62349 = (state_62348[(1)]);
if((state_val_62349 === (1))){
var state_62348__$1 = state_62348;
var statearr_62350_62482 = state_62348__$1;
(statearr_62350_62482[(2)] = null);

(statearr_62350_62482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (2))){
var state_62348__$1 = state_62348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62348__$1,(4),jobs);
} else {
if((state_val_62349 === (3))){
var inst_62346 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62348__$1,inst_62346);
} else {
if((state_val_62349 === (4))){
var inst_62338 = (state_62348[(2)]);
var inst_62339 = async.call(null,inst_62338);
var state_62348__$1 = state_62348;
if(cljs.core.truth_(inst_62339)){
var statearr_62351_62483 = state_62348__$1;
(statearr_62351_62483[(1)] = (5));

} else {
var statearr_62352_62484 = state_62348__$1;
(statearr_62352_62484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (5))){
var state_62348__$1 = state_62348;
var statearr_62353_62485 = state_62348__$1;
(statearr_62353_62485[(2)] = null);

(statearr_62353_62485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (6))){
var state_62348__$1 = state_62348;
var statearr_62354_62486 = state_62348__$1;
(statearr_62354_62486[(2)] = null);

(statearr_62354_62486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62349 === (7))){
var inst_62344 = (state_62348[(2)]);
var state_62348__$1 = state_62348;
var statearr_62355_62487 = state_62348__$1;
(statearr_62355_62487[(2)] = inst_62344);

(statearr_62355_62487[(1)] = (3));


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
});})(__62468,c__35408__auto___62481,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async))
;
return ((function (__62468,switch__35318__auto__,c__35408__auto___62481,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0 = (function (){
var statearr_62356 = [null,null,null,null,null,null,null];
(statearr_62356[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__);

(statearr_62356[(1)] = (1));

return statearr_62356;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1 = (function (state_62348){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62357){if((e62357 instanceof Object)){
var ex__35322__auto__ = e62357;
var statearr_62358_62488 = state_62348;
(statearr_62358_62488[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62489 = state_62348;
state_62348 = G__62489;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = function(state_62348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1.call(this,state_62348);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__;
})()
;})(__62468,switch__35318__auto__,c__35408__auto___62481,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async))
})();
var state__35410__auto__ = (function (){var statearr_62359 = f__35409__auto__.call(null);
(statearr_62359[(6)] = c__35408__auto___62481);

return statearr_62359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(__62468,c__35408__auto___62481,G__62311_62469,G__62311_62470__$1,n__31224__auto___62467,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62311_62470__$1)].join('')));

}

var G__62490 = (__62468 + (1));
__62468 = G__62490;
continue;
} else {
}
break;
}

var c__35408__auto___62491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___62491,jobs,results,process__$1,async){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___62491,jobs,results,process__$1,async){
return (function (state_62381){
var state_val_62382 = (state_62381[(1)]);
if((state_val_62382 === (1))){
var state_62381__$1 = state_62381;
var statearr_62383_62492 = state_62381__$1;
(statearr_62383_62492[(2)] = null);

(statearr_62383_62492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62382 === (2))){
var state_62381__$1 = state_62381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62381__$1,(4),from);
} else {
if((state_val_62382 === (3))){
var inst_62379 = (state_62381[(2)]);
var state_62381__$1 = state_62381;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62381__$1,inst_62379);
} else {
if((state_val_62382 === (4))){
var inst_62362 = (state_62381[(7)]);
var inst_62362__$1 = (state_62381[(2)]);
var inst_62363 = (inst_62362__$1 == null);
var state_62381__$1 = (function (){var statearr_62384 = state_62381;
(statearr_62384[(7)] = inst_62362__$1);

return statearr_62384;
})();
if(cljs.core.truth_(inst_62363)){
var statearr_62385_62493 = state_62381__$1;
(statearr_62385_62493[(1)] = (5));

} else {
var statearr_62386_62494 = state_62381__$1;
(statearr_62386_62494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62382 === (5))){
var inst_62365 = cljs.core.async.close_BANG_.call(null,jobs);
var state_62381__$1 = state_62381;
var statearr_62387_62495 = state_62381__$1;
(statearr_62387_62495[(2)] = inst_62365);

(statearr_62387_62495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62382 === (6))){
var inst_62362 = (state_62381[(7)]);
var inst_62367 = (state_62381[(8)]);
var inst_62367__$1 = cljs.core.async.chan.call(null,(1));
var inst_62368 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62369 = [inst_62362,inst_62367__$1];
var inst_62370 = (new cljs.core.PersistentVector(null,2,(5),inst_62368,inst_62369,null));
var state_62381__$1 = (function (){var statearr_62388 = state_62381;
(statearr_62388[(8)] = inst_62367__$1);

return statearr_62388;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62381__$1,(8),jobs,inst_62370);
} else {
if((state_val_62382 === (7))){
var inst_62377 = (state_62381[(2)]);
var state_62381__$1 = state_62381;
var statearr_62389_62496 = state_62381__$1;
(statearr_62389_62496[(2)] = inst_62377);

(statearr_62389_62496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62382 === (8))){
var inst_62367 = (state_62381[(8)]);
var inst_62372 = (state_62381[(2)]);
var state_62381__$1 = (function (){var statearr_62390 = state_62381;
(statearr_62390[(9)] = inst_62372);

return statearr_62390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62381__$1,(9),results,inst_62367);
} else {
if((state_val_62382 === (9))){
var inst_62374 = (state_62381[(2)]);
var state_62381__$1 = (function (){var statearr_62391 = state_62381;
(statearr_62391[(10)] = inst_62374);

return statearr_62391;
})();
var statearr_62392_62497 = state_62381__$1;
(statearr_62392_62497[(2)] = null);

(statearr_62392_62497[(1)] = (2));


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
}
});})(c__35408__auto___62491,jobs,results,process__$1,async))
;
return ((function (switch__35318__auto__,c__35408__auto___62491,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0 = (function (){
var statearr_62393 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62393[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__);

(statearr_62393[(1)] = (1));

return statearr_62393;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1 = (function (state_62381){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62394){if((e62394 instanceof Object)){
var ex__35322__auto__ = e62394;
var statearr_62395_62498 = state_62381;
(statearr_62395_62498[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62499 = state_62381;
state_62381 = G__62499;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = function(state_62381){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1.call(this,state_62381);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___62491,jobs,results,process__$1,async))
})();
var state__35410__auto__ = (function (){var statearr_62396 = f__35409__auto__.call(null);
(statearr_62396[(6)] = c__35408__auto___62491);

return statearr_62396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___62491,jobs,results,process__$1,async))
);


var c__35408__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto__,jobs,results,process__$1,async){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto__,jobs,results,process__$1,async){
return (function (state_62434){
var state_val_62435 = (state_62434[(1)]);
if((state_val_62435 === (7))){
var inst_62430 = (state_62434[(2)]);
var state_62434__$1 = state_62434;
var statearr_62436_62500 = state_62434__$1;
(statearr_62436_62500[(2)] = inst_62430);

(statearr_62436_62500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (20))){
var state_62434__$1 = state_62434;
var statearr_62437_62501 = state_62434__$1;
(statearr_62437_62501[(2)] = null);

(statearr_62437_62501[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (1))){
var state_62434__$1 = state_62434;
var statearr_62438_62502 = state_62434__$1;
(statearr_62438_62502[(2)] = null);

(statearr_62438_62502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (4))){
var inst_62399 = (state_62434[(7)]);
var inst_62399__$1 = (state_62434[(2)]);
var inst_62400 = (inst_62399__$1 == null);
var state_62434__$1 = (function (){var statearr_62439 = state_62434;
(statearr_62439[(7)] = inst_62399__$1);

return statearr_62439;
})();
if(cljs.core.truth_(inst_62400)){
var statearr_62440_62503 = state_62434__$1;
(statearr_62440_62503[(1)] = (5));

} else {
var statearr_62441_62504 = state_62434__$1;
(statearr_62441_62504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (15))){
var inst_62412 = (state_62434[(8)]);
var state_62434__$1 = state_62434;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62434__$1,(18),to,inst_62412);
} else {
if((state_val_62435 === (21))){
var inst_62425 = (state_62434[(2)]);
var state_62434__$1 = state_62434;
var statearr_62442_62505 = state_62434__$1;
(statearr_62442_62505[(2)] = inst_62425);

(statearr_62442_62505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (13))){
var inst_62427 = (state_62434[(2)]);
var state_62434__$1 = (function (){var statearr_62443 = state_62434;
(statearr_62443[(9)] = inst_62427);

return statearr_62443;
})();
var statearr_62444_62506 = state_62434__$1;
(statearr_62444_62506[(2)] = null);

(statearr_62444_62506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (6))){
var inst_62399 = (state_62434[(7)]);
var state_62434__$1 = state_62434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62434__$1,(11),inst_62399);
} else {
if((state_val_62435 === (17))){
var inst_62420 = (state_62434[(2)]);
var state_62434__$1 = state_62434;
if(cljs.core.truth_(inst_62420)){
var statearr_62445_62507 = state_62434__$1;
(statearr_62445_62507[(1)] = (19));

} else {
var statearr_62446_62508 = state_62434__$1;
(statearr_62446_62508[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (3))){
var inst_62432 = (state_62434[(2)]);
var state_62434__$1 = state_62434;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62434__$1,inst_62432);
} else {
if((state_val_62435 === (12))){
var inst_62409 = (state_62434[(10)]);
var state_62434__$1 = state_62434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62434__$1,(14),inst_62409);
} else {
if((state_val_62435 === (2))){
var state_62434__$1 = state_62434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62434__$1,(4),results);
} else {
if((state_val_62435 === (19))){
var state_62434__$1 = state_62434;
var statearr_62447_62509 = state_62434__$1;
(statearr_62447_62509[(2)] = null);

(statearr_62447_62509[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (11))){
var inst_62409 = (state_62434[(2)]);
var state_62434__$1 = (function (){var statearr_62448 = state_62434;
(statearr_62448[(10)] = inst_62409);

return statearr_62448;
})();
var statearr_62449_62510 = state_62434__$1;
(statearr_62449_62510[(2)] = null);

(statearr_62449_62510[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (9))){
var state_62434__$1 = state_62434;
var statearr_62450_62511 = state_62434__$1;
(statearr_62450_62511[(2)] = null);

(statearr_62450_62511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (5))){
var state_62434__$1 = state_62434;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62451_62512 = state_62434__$1;
(statearr_62451_62512[(1)] = (8));

} else {
var statearr_62452_62513 = state_62434__$1;
(statearr_62452_62513[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (14))){
var inst_62414 = (state_62434[(11)]);
var inst_62412 = (state_62434[(8)]);
var inst_62412__$1 = (state_62434[(2)]);
var inst_62413 = (inst_62412__$1 == null);
var inst_62414__$1 = cljs.core.not.call(null,inst_62413);
var state_62434__$1 = (function (){var statearr_62453 = state_62434;
(statearr_62453[(11)] = inst_62414__$1);

(statearr_62453[(8)] = inst_62412__$1);

return statearr_62453;
})();
if(inst_62414__$1){
var statearr_62454_62514 = state_62434__$1;
(statearr_62454_62514[(1)] = (15));

} else {
var statearr_62455_62515 = state_62434__$1;
(statearr_62455_62515[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (16))){
var inst_62414 = (state_62434[(11)]);
var state_62434__$1 = state_62434;
var statearr_62456_62516 = state_62434__$1;
(statearr_62456_62516[(2)] = inst_62414);

(statearr_62456_62516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (10))){
var inst_62406 = (state_62434[(2)]);
var state_62434__$1 = state_62434;
var statearr_62457_62517 = state_62434__$1;
(statearr_62457_62517[(2)] = inst_62406);

(statearr_62457_62517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (18))){
var inst_62417 = (state_62434[(2)]);
var state_62434__$1 = state_62434;
var statearr_62458_62518 = state_62434__$1;
(statearr_62458_62518[(2)] = inst_62417);

(statearr_62458_62518[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62435 === (8))){
var inst_62403 = cljs.core.async.close_BANG_.call(null,to);
var state_62434__$1 = state_62434;
var statearr_62459_62519 = state_62434__$1;
(statearr_62459_62519[(2)] = inst_62403);

(statearr_62459_62519[(1)] = (10));


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
});})(c__35408__auto__,jobs,results,process__$1,async))
;
return ((function (switch__35318__auto__,c__35408__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0 = (function (){
var statearr_62460 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__);

(statearr_62460[(1)] = (1));

return statearr_62460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1 = (function (state_62434){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62461){if((e62461 instanceof Object)){
var ex__35322__auto__ = e62461;
var statearr_62462_62520 = state_62434;
(statearr_62462_62520[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62521 = state_62434;
state_62434 = G__62521;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__ = function(state_62434){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1.call(this,state_62434);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto__,jobs,results,process__$1,async))
})();
var state__35410__auto__ = (function (){var statearr_62463 = f__35409__auto__.call(null);
(statearr_62463[(6)] = c__35408__auto__);

return statearr_62463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto__,jobs,results,process__$1,async))
);

return c__35408__auto__;
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
var G__62523 = arguments.length;
switch (G__62523) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__62526 = arguments.length;
switch (G__62526) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__62529 = arguments.length;
switch (G__62529) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35408__auto___62578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___62578,tc,fc){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___62578,tc,fc){
return (function (state_62555){
var state_val_62556 = (state_62555[(1)]);
if((state_val_62556 === (7))){
var inst_62551 = (state_62555[(2)]);
var state_62555__$1 = state_62555;
var statearr_62557_62579 = state_62555__$1;
(statearr_62557_62579[(2)] = inst_62551);

(statearr_62557_62579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (1))){
var state_62555__$1 = state_62555;
var statearr_62558_62580 = state_62555__$1;
(statearr_62558_62580[(2)] = null);

(statearr_62558_62580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (4))){
var inst_62532 = (state_62555[(7)]);
var inst_62532__$1 = (state_62555[(2)]);
var inst_62533 = (inst_62532__$1 == null);
var state_62555__$1 = (function (){var statearr_62559 = state_62555;
(statearr_62559[(7)] = inst_62532__$1);

return statearr_62559;
})();
if(cljs.core.truth_(inst_62533)){
var statearr_62560_62581 = state_62555__$1;
(statearr_62560_62581[(1)] = (5));

} else {
var statearr_62561_62582 = state_62555__$1;
(statearr_62561_62582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (13))){
var state_62555__$1 = state_62555;
var statearr_62562_62583 = state_62555__$1;
(statearr_62562_62583[(2)] = null);

(statearr_62562_62583[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (6))){
var inst_62532 = (state_62555[(7)]);
var inst_62538 = p.call(null,inst_62532);
var state_62555__$1 = state_62555;
if(cljs.core.truth_(inst_62538)){
var statearr_62563_62584 = state_62555__$1;
(statearr_62563_62584[(1)] = (9));

} else {
var statearr_62564_62585 = state_62555__$1;
(statearr_62564_62585[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (3))){
var inst_62553 = (state_62555[(2)]);
var state_62555__$1 = state_62555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62555__$1,inst_62553);
} else {
if((state_val_62556 === (12))){
var state_62555__$1 = state_62555;
var statearr_62565_62586 = state_62555__$1;
(statearr_62565_62586[(2)] = null);

(statearr_62565_62586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (2))){
var state_62555__$1 = state_62555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62555__$1,(4),ch);
} else {
if((state_val_62556 === (11))){
var inst_62532 = (state_62555[(7)]);
var inst_62542 = (state_62555[(2)]);
var state_62555__$1 = state_62555;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62555__$1,(8),inst_62542,inst_62532);
} else {
if((state_val_62556 === (9))){
var state_62555__$1 = state_62555;
var statearr_62566_62587 = state_62555__$1;
(statearr_62566_62587[(2)] = tc);

(statearr_62566_62587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (5))){
var inst_62535 = cljs.core.async.close_BANG_.call(null,tc);
var inst_62536 = cljs.core.async.close_BANG_.call(null,fc);
var state_62555__$1 = (function (){var statearr_62567 = state_62555;
(statearr_62567[(8)] = inst_62535);

return statearr_62567;
})();
var statearr_62568_62588 = state_62555__$1;
(statearr_62568_62588[(2)] = inst_62536);

(statearr_62568_62588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (14))){
var inst_62549 = (state_62555[(2)]);
var state_62555__$1 = state_62555;
var statearr_62569_62589 = state_62555__$1;
(statearr_62569_62589[(2)] = inst_62549);

(statearr_62569_62589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (10))){
var state_62555__$1 = state_62555;
var statearr_62570_62590 = state_62555__$1;
(statearr_62570_62590[(2)] = fc);

(statearr_62570_62590[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62556 === (8))){
var inst_62544 = (state_62555[(2)]);
var state_62555__$1 = state_62555;
if(cljs.core.truth_(inst_62544)){
var statearr_62571_62591 = state_62555__$1;
(statearr_62571_62591[(1)] = (12));

} else {
var statearr_62572_62592 = state_62555__$1;
(statearr_62572_62592[(1)] = (13));

}

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
}
}
}
}
}
}
});})(c__35408__auto___62578,tc,fc))
;
return ((function (switch__35318__auto__,c__35408__auto___62578,tc,fc){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_62573 = [null,null,null,null,null,null,null,null,null];
(statearr_62573[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_62573[(1)] = (1));

return statearr_62573;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_62555){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62574){if((e62574 instanceof Object)){
var ex__35322__auto__ = e62574;
var statearr_62575_62593 = state_62555;
(statearr_62575_62593[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62594 = state_62555;
state_62555 = G__62594;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_62555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_62555);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___62578,tc,fc))
})();
var state__35410__auto__ = (function (){var statearr_62576 = f__35409__auto__.call(null);
(statearr_62576[(6)] = c__35408__auto___62578);

return statearr_62576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___62578,tc,fc))
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
var c__35408__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto__){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto__){
return (function (state_62615){
var state_val_62616 = (state_62615[(1)]);
if((state_val_62616 === (7))){
var inst_62611 = (state_62615[(2)]);
var state_62615__$1 = state_62615;
var statearr_62617_62635 = state_62615__$1;
(statearr_62617_62635[(2)] = inst_62611);

(statearr_62617_62635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (1))){
var inst_62595 = init;
var state_62615__$1 = (function (){var statearr_62618 = state_62615;
(statearr_62618[(7)] = inst_62595);

return statearr_62618;
})();
var statearr_62619_62636 = state_62615__$1;
(statearr_62619_62636[(2)] = null);

(statearr_62619_62636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (4))){
var inst_62598 = (state_62615[(8)]);
var inst_62598__$1 = (state_62615[(2)]);
var inst_62599 = (inst_62598__$1 == null);
var state_62615__$1 = (function (){var statearr_62620 = state_62615;
(statearr_62620[(8)] = inst_62598__$1);

return statearr_62620;
})();
if(cljs.core.truth_(inst_62599)){
var statearr_62621_62637 = state_62615__$1;
(statearr_62621_62637[(1)] = (5));

} else {
var statearr_62622_62638 = state_62615__$1;
(statearr_62622_62638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (6))){
var inst_62595 = (state_62615[(7)]);
var inst_62598 = (state_62615[(8)]);
var inst_62602 = (state_62615[(9)]);
var inst_62602__$1 = f.call(null,inst_62595,inst_62598);
var inst_62603 = cljs.core.reduced_QMARK_.call(null,inst_62602__$1);
var state_62615__$1 = (function (){var statearr_62623 = state_62615;
(statearr_62623[(9)] = inst_62602__$1);

return statearr_62623;
})();
if(inst_62603){
var statearr_62624_62639 = state_62615__$1;
(statearr_62624_62639[(1)] = (8));

} else {
var statearr_62625_62640 = state_62615__$1;
(statearr_62625_62640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (3))){
var inst_62613 = (state_62615[(2)]);
var state_62615__$1 = state_62615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62615__$1,inst_62613);
} else {
if((state_val_62616 === (2))){
var state_62615__$1 = state_62615;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62615__$1,(4),ch);
} else {
if((state_val_62616 === (9))){
var inst_62602 = (state_62615[(9)]);
var inst_62595 = inst_62602;
var state_62615__$1 = (function (){var statearr_62626 = state_62615;
(statearr_62626[(7)] = inst_62595);

return statearr_62626;
})();
var statearr_62627_62641 = state_62615__$1;
(statearr_62627_62641[(2)] = null);

(statearr_62627_62641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (5))){
var inst_62595 = (state_62615[(7)]);
var state_62615__$1 = state_62615;
var statearr_62628_62642 = state_62615__$1;
(statearr_62628_62642[(2)] = inst_62595);

(statearr_62628_62642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (10))){
var inst_62609 = (state_62615[(2)]);
var state_62615__$1 = state_62615;
var statearr_62629_62643 = state_62615__$1;
(statearr_62629_62643[(2)] = inst_62609);

(statearr_62629_62643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62616 === (8))){
var inst_62602 = (state_62615[(9)]);
var inst_62605 = cljs.core.deref.call(null,inst_62602);
var state_62615__$1 = state_62615;
var statearr_62630_62644 = state_62615__$1;
(statearr_62630_62644[(2)] = inst_62605);

(statearr_62630_62644[(1)] = (10));


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
}
}
});})(c__35408__auto__))
;
return ((function (switch__35318__auto__,c__35408__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35319__auto____0 = (function (){
var statearr_62631 = [null,null,null,null,null,null,null,null,null,null];
(statearr_62631[(0)] = cljs$core$async$reduce_$_state_machine__35319__auto__);

(statearr_62631[(1)] = (1));

return statearr_62631;
});
var cljs$core$async$reduce_$_state_machine__35319__auto____1 = (function (state_62615){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62632){if((e62632 instanceof Object)){
var ex__35322__auto__ = e62632;
var statearr_62633_62645 = state_62615;
(statearr_62633_62645[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62646 = state_62615;
state_62615 = G__62646;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35319__auto__ = function(state_62615){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35319__auto____1.call(this,state_62615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35319__auto____0;
cljs$core$async$reduce_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35319__auto____1;
return cljs$core$async$reduce_$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto__))
})();
var state__35410__auto__ = (function (){var statearr_62634 = f__35409__auto__.call(null);
(statearr_62634[(6)] = c__35408__auto__);

return statearr_62634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto__))
);

return c__35408__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35408__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto__,f__$1){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto__,f__$1){
return (function (state_62652){
var state_val_62653 = (state_62652[(1)]);
if((state_val_62653 === (1))){
var inst_62647 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_62652__$1 = state_62652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62652__$1,(2),inst_62647);
} else {
if((state_val_62653 === (2))){
var inst_62649 = (state_62652[(2)]);
var inst_62650 = f__$1.call(null,inst_62649);
var state_62652__$1 = state_62652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62652__$1,inst_62650);
} else {
return null;
}
}
});})(c__35408__auto__,f__$1))
;
return ((function (switch__35318__auto__,c__35408__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35319__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35319__auto____0 = (function (){
var statearr_62654 = [null,null,null,null,null,null,null];
(statearr_62654[(0)] = cljs$core$async$transduce_$_state_machine__35319__auto__);

(statearr_62654[(1)] = (1));

return statearr_62654;
});
var cljs$core$async$transduce_$_state_machine__35319__auto____1 = (function (state_62652){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62655){if((e62655 instanceof Object)){
var ex__35322__auto__ = e62655;
var statearr_62656_62658 = state_62652;
(statearr_62656_62658[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62659 = state_62652;
state_62652 = G__62659;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35319__auto__ = function(state_62652){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35319__auto____1.call(this,state_62652);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35319__auto____0;
cljs$core$async$transduce_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35319__auto____1;
return cljs$core$async$transduce_$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto__,f__$1))
})();
var state__35410__auto__ = (function (){var statearr_62657 = f__35409__auto__.call(null);
(statearr_62657[(6)] = c__35408__auto__);

return statearr_62657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto__,f__$1))
);

return c__35408__auto__;
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
var G__62661 = arguments.length;
switch (G__62661) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35408__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto__){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto__){
return (function (state_62686){
var state_val_62687 = (state_62686[(1)]);
if((state_val_62687 === (7))){
var inst_62668 = (state_62686[(2)]);
var state_62686__$1 = state_62686;
var statearr_62688_62709 = state_62686__$1;
(statearr_62688_62709[(2)] = inst_62668);

(statearr_62688_62709[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (1))){
var inst_62662 = cljs.core.seq.call(null,coll);
var inst_62663 = inst_62662;
var state_62686__$1 = (function (){var statearr_62689 = state_62686;
(statearr_62689[(7)] = inst_62663);

return statearr_62689;
})();
var statearr_62690_62710 = state_62686__$1;
(statearr_62690_62710[(2)] = null);

(statearr_62690_62710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (4))){
var inst_62663 = (state_62686[(7)]);
var inst_62666 = cljs.core.first.call(null,inst_62663);
var state_62686__$1 = state_62686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62686__$1,(7),ch,inst_62666);
} else {
if((state_val_62687 === (13))){
var inst_62680 = (state_62686[(2)]);
var state_62686__$1 = state_62686;
var statearr_62691_62711 = state_62686__$1;
(statearr_62691_62711[(2)] = inst_62680);

(statearr_62691_62711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (6))){
var inst_62671 = (state_62686[(2)]);
var state_62686__$1 = state_62686;
if(cljs.core.truth_(inst_62671)){
var statearr_62692_62712 = state_62686__$1;
(statearr_62692_62712[(1)] = (8));

} else {
var statearr_62693_62713 = state_62686__$1;
(statearr_62693_62713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (3))){
var inst_62684 = (state_62686[(2)]);
var state_62686__$1 = state_62686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62686__$1,inst_62684);
} else {
if((state_val_62687 === (12))){
var state_62686__$1 = state_62686;
var statearr_62694_62714 = state_62686__$1;
(statearr_62694_62714[(2)] = null);

(statearr_62694_62714[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (2))){
var inst_62663 = (state_62686[(7)]);
var state_62686__$1 = state_62686;
if(cljs.core.truth_(inst_62663)){
var statearr_62695_62715 = state_62686__$1;
(statearr_62695_62715[(1)] = (4));

} else {
var statearr_62696_62716 = state_62686__$1;
(statearr_62696_62716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (11))){
var inst_62677 = cljs.core.async.close_BANG_.call(null,ch);
var state_62686__$1 = state_62686;
var statearr_62697_62717 = state_62686__$1;
(statearr_62697_62717[(2)] = inst_62677);

(statearr_62697_62717[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (9))){
var state_62686__$1 = state_62686;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62698_62718 = state_62686__$1;
(statearr_62698_62718[(1)] = (11));

} else {
var statearr_62699_62719 = state_62686__$1;
(statearr_62699_62719[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (5))){
var inst_62663 = (state_62686[(7)]);
var state_62686__$1 = state_62686;
var statearr_62700_62720 = state_62686__$1;
(statearr_62700_62720[(2)] = inst_62663);

(statearr_62700_62720[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (10))){
var inst_62682 = (state_62686[(2)]);
var state_62686__$1 = state_62686;
var statearr_62701_62721 = state_62686__$1;
(statearr_62701_62721[(2)] = inst_62682);

(statearr_62701_62721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62687 === (8))){
var inst_62663 = (state_62686[(7)]);
var inst_62673 = cljs.core.next.call(null,inst_62663);
var inst_62663__$1 = inst_62673;
var state_62686__$1 = (function (){var statearr_62702 = state_62686;
(statearr_62702[(7)] = inst_62663__$1);

return statearr_62702;
})();
var statearr_62703_62722 = state_62686__$1;
(statearr_62703_62722[(2)] = null);

(statearr_62703_62722[(1)] = (2));


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
}
}
}
}
}
});})(c__35408__auto__))
;
return ((function (switch__35318__auto__,c__35408__auto__){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_62704 = [null,null,null,null,null,null,null,null];
(statearr_62704[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_62704[(1)] = (1));

return statearr_62704;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_62686){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62705){if((e62705 instanceof Object)){
var ex__35322__auto__ = e62705;
var statearr_62706_62723 = state_62686;
(statearr_62706_62723[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62724 = state_62686;
state_62686 = G__62724;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_62686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_62686);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto__))
})();
var state__35410__auto__ = (function (){var statearr_62707 = f__35409__auto__.call(null);
(statearr_62707[(6)] = c__35408__auto__);

return statearr_62707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto__))
);

return c__35408__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

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
var x__30912__auto__ = (((_ == null))?null:_);
var m__30913__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,_);
} else {
var m__30913__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
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
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30913__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m);
} else {
var m__30913__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async62725 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62725 = (function (ch,cs,meta62726){
this.ch = ch;
this.cs = cs;
this.meta62726 = meta62726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_62727,meta62726__$1){
var self__ = this;
var _62727__$1 = this;
return (new cljs.core.async.t_cljs$core$async62725(self__.ch,self__.cs,meta62726__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_62727){
var self__ = this;
var _62727__$1 = this;
return self__.meta62726;
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta62726","meta62726",-1067031495,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async62725.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62725";

cljs.core.async.t_cljs$core$async62725.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async62725");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async62725 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async62725(ch__$1,cs__$1,meta62726){
return (new cljs.core.async.t_cljs$core$async62725(ch__$1,cs__$1,meta62726));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async62725(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35408__auto___62947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___62947,cs,m,dchan,dctr,done){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___62947,cs,m,dchan,dctr,done){
return (function (state_62862){
var state_val_62863 = (state_62862[(1)]);
if((state_val_62863 === (7))){
var inst_62858 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62864_62948 = state_62862__$1;
(statearr_62864_62948[(2)] = inst_62858);

(statearr_62864_62948[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (20))){
var inst_62761 = (state_62862[(7)]);
var inst_62773 = cljs.core.first.call(null,inst_62761);
var inst_62774 = cljs.core.nth.call(null,inst_62773,(0),null);
var inst_62775 = cljs.core.nth.call(null,inst_62773,(1),null);
var state_62862__$1 = (function (){var statearr_62865 = state_62862;
(statearr_62865[(8)] = inst_62774);

return statearr_62865;
})();
if(cljs.core.truth_(inst_62775)){
var statearr_62866_62949 = state_62862__$1;
(statearr_62866_62949[(1)] = (22));

} else {
var statearr_62867_62950 = state_62862__$1;
(statearr_62867_62950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (27))){
var inst_62810 = (state_62862[(9)]);
var inst_62805 = (state_62862[(10)]);
var inst_62730 = (state_62862[(11)]);
var inst_62803 = (state_62862[(12)]);
var inst_62810__$1 = cljs.core._nth.call(null,inst_62803,inst_62805);
var inst_62811 = cljs.core.async.put_BANG_.call(null,inst_62810__$1,inst_62730,done);
var state_62862__$1 = (function (){var statearr_62868 = state_62862;
(statearr_62868[(9)] = inst_62810__$1);

return statearr_62868;
})();
if(cljs.core.truth_(inst_62811)){
var statearr_62869_62951 = state_62862__$1;
(statearr_62869_62951[(1)] = (30));

} else {
var statearr_62870_62952 = state_62862__$1;
(statearr_62870_62952[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (1))){
var state_62862__$1 = state_62862;
var statearr_62871_62953 = state_62862__$1;
(statearr_62871_62953[(2)] = null);

(statearr_62871_62953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (24))){
var inst_62761 = (state_62862[(7)]);
var inst_62780 = (state_62862[(2)]);
var inst_62781 = cljs.core.next.call(null,inst_62761);
var inst_62739 = inst_62781;
var inst_62740 = null;
var inst_62741 = (0);
var inst_62742 = (0);
var state_62862__$1 = (function (){var statearr_62872 = state_62862;
(statearr_62872[(13)] = inst_62742);

(statearr_62872[(14)] = inst_62739);

(statearr_62872[(15)] = inst_62780);

(statearr_62872[(16)] = inst_62741);

(statearr_62872[(17)] = inst_62740);

return statearr_62872;
})();
var statearr_62873_62954 = state_62862__$1;
(statearr_62873_62954[(2)] = null);

(statearr_62873_62954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (39))){
var state_62862__$1 = state_62862;
var statearr_62877_62955 = state_62862__$1;
(statearr_62877_62955[(2)] = null);

(statearr_62877_62955[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (4))){
var inst_62730 = (state_62862[(11)]);
var inst_62730__$1 = (state_62862[(2)]);
var inst_62731 = (inst_62730__$1 == null);
var state_62862__$1 = (function (){var statearr_62878 = state_62862;
(statearr_62878[(11)] = inst_62730__$1);

return statearr_62878;
})();
if(cljs.core.truth_(inst_62731)){
var statearr_62879_62956 = state_62862__$1;
(statearr_62879_62956[(1)] = (5));

} else {
var statearr_62880_62957 = state_62862__$1;
(statearr_62880_62957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (15))){
var inst_62742 = (state_62862[(13)]);
var inst_62739 = (state_62862[(14)]);
var inst_62741 = (state_62862[(16)]);
var inst_62740 = (state_62862[(17)]);
var inst_62757 = (state_62862[(2)]);
var inst_62758 = (inst_62742 + (1));
var tmp62874 = inst_62739;
var tmp62875 = inst_62741;
var tmp62876 = inst_62740;
var inst_62739__$1 = tmp62874;
var inst_62740__$1 = tmp62876;
var inst_62741__$1 = tmp62875;
var inst_62742__$1 = inst_62758;
var state_62862__$1 = (function (){var statearr_62881 = state_62862;
(statearr_62881[(13)] = inst_62742__$1);

(statearr_62881[(18)] = inst_62757);

(statearr_62881[(14)] = inst_62739__$1);

(statearr_62881[(16)] = inst_62741__$1);

(statearr_62881[(17)] = inst_62740__$1);

return statearr_62881;
})();
var statearr_62882_62958 = state_62862__$1;
(statearr_62882_62958[(2)] = null);

(statearr_62882_62958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (21))){
var inst_62784 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62886_62959 = state_62862__$1;
(statearr_62886_62959[(2)] = inst_62784);

(statearr_62886_62959[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (31))){
var inst_62810 = (state_62862[(9)]);
var inst_62814 = done.call(null,null);
var inst_62815 = cljs.core.async.untap_STAR_.call(null,m,inst_62810);
var state_62862__$1 = (function (){var statearr_62887 = state_62862;
(statearr_62887[(19)] = inst_62814);

return statearr_62887;
})();
var statearr_62888_62960 = state_62862__$1;
(statearr_62888_62960[(2)] = inst_62815);

(statearr_62888_62960[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (32))){
var inst_62805 = (state_62862[(10)]);
var inst_62802 = (state_62862[(20)]);
var inst_62803 = (state_62862[(12)]);
var inst_62804 = (state_62862[(21)]);
var inst_62817 = (state_62862[(2)]);
var inst_62818 = (inst_62805 + (1));
var tmp62883 = inst_62802;
var tmp62884 = inst_62803;
var tmp62885 = inst_62804;
var inst_62802__$1 = tmp62883;
var inst_62803__$1 = tmp62884;
var inst_62804__$1 = tmp62885;
var inst_62805__$1 = inst_62818;
var state_62862__$1 = (function (){var statearr_62889 = state_62862;
(statearr_62889[(10)] = inst_62805__$1);

(statearr_62889[(20)] = inst_62802__$1);

(statearr_62889[(12)] = inst_62803__$1);

(statearr_62889[(22)] = inst_62817);

(statearr_62889[(21)] = inst_62804__$1);

return statearr_62889;
})();
var statearr_62890_62961 = state_62862__$1;
(statearr_62890_62961[(2)] = null);

(statearr_62890_62961[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (40))){
var inst_62830 = (state_62862[(23)]);
var inst_62834 = done.call(null,null);
var inst_62835 = cljs.core.async.untap_STAR_.call(null,m,inst_62830);
var state_62862__$1 = (function (){var statearr_62891 = state_62862;
(statearr_62891[(24)] = inst_62834);

return statearr_62891;
})();
var statearr_62892_62962 = state_62862__$1;
(statearr_62892_62962[(2)] = inst_62835);

(statearr_62892_62962[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (33))){
var inst_62821 = (state_62862[(25)]);
var inst_62823 = cljs.core.chunked_seq_QMARK_.call(null,inst_62821);
var state_62862__$1 = state_62862;
if(inst_62823){
var statearr_62893_62963 = state_62862__$1;
(statearr_62893_62963[(1)] = (36));

} else {
var statearr_62894_62964 = state_62862__$1;
(statearr_62894_62964[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (13))){
var inst_62751 = (state_62862[(26)]);
var inst_62754 = cljs.core.async.close_BANG_.call(null,inst_62751);
var state_62862__$1 = state_62862;
var statearr_62895_62965 = state_62862__$1;
(statearr_62895_62965[(2)] = inst_62754);

(statearr_62895_62965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (22))){
var inst_62774 = (state_62862[(8)]);
var inst_62777 = cljs.core.async.close_BANG_.call(null,inst_62774);
var state_62862__$1 = state_62862;
var statearr_62896_62966 = state_62862__$1;
(statearr_62896_62966[(2)] = inst_62777);

(statearr_62896_62966[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (36))){
var inst_62821 = (state_62862[(25)]);
var inst_62825 = cljs.core.chunk_first.call(null,inst_62821);
var inst_62826 = cljs.core.chunk_rest.call(null,inst_62821);
var inst_62827 = cljs.core.count.call(null,inst_62825);
var inst_62802 = inst_62826;
var inst_62803 = inst_62825;
var inst_62804 = inst_62827;
var inst_62805 = (0);
var state_62862__$1 = (function (){var statearr_62897 = state_62862;
(statearr_62897[(10)] = inst_62805);

(statearr_62897[(20)] = inst_62802);

(statearr_62897[(12)] = inst_62803);

(statearr_62897[(21)] = inst_62804);

return statearr_62897;
})();
var statearr_62898_62967 = state_62862__$1;
(statearr_62898_62967[(2)] = null);

(statearr_62898_62967[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (41))){
var inst_62821 = (state_62862[(25)]);
var inst_62837 = (state_62862[(2)]);
var inst_62838 = cljs.core.next.call(null,inst_62821);
var inst_62802 = inst_62838;
var inst_62803 = null;
var inst_62804 = (0);
var inst_62805 = (0);
var state_62862__$1 = (function (){var statearr_62899 = state_62862;
(statearr_62899[(27)] = inst_62837);

(statearr_62899[(10)] = inst_62805);

(statearr_62899[(20)] = inst_62802);

(statearr_62899[(12)] = inst_62803);

(statearr_62899[(21)] = inst_62804);

return statearr_62899;
})();
var statearr_62900_62968 = state_62862__$1;
(statearr_62900_62968[(2)] = null);

(statearr_62900_62968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (43))){
var state_62862__$1 = state_62862;
var statearr_62901_62969 = state_62862__$1;
(statearr_62901_62969[(2)] = null);

(statearr_62901_62969[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (29))){
var inst_62846 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62902_62970 = state_62862__$1;
(statearr_62902_62970[(2)] = inst_62846);

(statearr_62902_62970[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (44))){
var inst_62855 = (state_62862[(2)]);
var state_62862__$1 = (function (){var statearr_62903 = state_62862;
(statearr_62903[(28)] = inst_62855);

return statearr_62903;
})();
var statearr_62904_62971 = state_62862__$1;
(statearr_62904_62971[(2)] = null);

(statearr_62904_62971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (6))){
var inst_62794 = (state_62862[(29)]);
var inst_62793 = cljs.core.deref.call(null,cs);
var inst_62794__$1 = cljs.core.keys.call(null,inst_62793);
var inst_62795 = cljs.core.count.call(null,inst_62794__$1);
var inst_62796 = cljs.core.reset_BANG_.call(null,dctr,inst_62795);
var inst_62801 = cljs.core.seq.call(null,inst_62794__$1);
var inst_62802 = inst_62801;
var inst_62803 = null;
var inst_62804 = (0);
var inst_62805 = (0);
var state_62862__$1 = (function (){var statearr_62905 = state_62862;
(statearr_62905[(10)] = inst_62805);

(statearr_62905[(20)] = inst_62802);

(statearr_62905[(12)] = inst_62803);

(statearr_62905[(30)] = inst_62796);

(statearr_62905[(21)] = inst_62804);

(statearr_62905[(29)] = inst_62794__$1);

return statearr_62905;
})();
var statearr_62906_62972 = state_62862__$1;
(statearr_62906_62972[(2)] = null);

(statearr_62906_62972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (28))){
var inst_62821 = (state_62862[(25)]);
var inst_62802 = (state_62862[(20)]);
var inst_62821__$1 = cljs.core.seq.call(null,inst_62802);
var state_62862__$1 = (function (){var statearr_62907 = state_62862;
(statearr_62907[(25)] = inst_62821__$1);

return statearr_62907;
})();
if(inst_62821__$1){
var statearr_62908_62973 = state_62862__$1;
(statearr_62908_62973[(1)] = (33));

} else {
var statearr_62909_62974 = state_62862__$1;
(statearr_62909_62974[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (25))){
var inst_62805 = (state_62862[(10)]);
var inst_62804 = (state_62862[(21)]);
var inst_62807 = (inst_62805 < inst_62804);
var inst_62808 = inst_62807;
var state_62862__$1 = state_62862;
if(cljs.core.truth_(inst_62808)){
var statearr_62910_62975 = state_62862__$1;
(statearr_62910_62975[(1)] = (27));

} else {
var statearr_62911_62976 = state_62862__$1;
(statearr_62911_62976[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (34))){
var state_62862__$1 = state_62862;
var statearr_62912_62977 = state_62862__$1;
(statearr_62912_62977[(2)] = null);

(statearr_62912_62977[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (17))){
var state_62862__$1 = state_62862;
var statearr_62913_62978 = state_62862__$1;
(statearr_62913_62978[(2)] = null);

(statearr_62913_62978[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (3))){
var inst_62860 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62862__$1,inst_62860);
} else {
if((state_val_62863 === (12))){
var inst_62789 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62914_62979 = state_62862__$1;
(statearr_62914_62979[(2)] = inst_62789);

(statearr_62914_62979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (2))){
var state_62862__$1 = state_62862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62862__$1,(4),ch);
} else {
if((state_val_62863 === (23))){
var state_62862__$1 = state_62862;
var statearr_62915_62980 = state_62862__$1;
(statearr_62915_62980[(2)] = null);

(statearr_62915_62980[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (35))){
var inst_62844 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62916_62981 = state_62862__$1;
(statearr_62916_62981[(2)] = inst_62844);

(statearr_62916_62981[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (19))){
var inst_62761 = (state_62862[(7)]);
var inst_62765 = cljs.core.chunk_first.call(null,inst_62761);
var inst_62766 = cljs.core.chunk_rest.call(null,inst_62761);
var inst_62767 = cljs.core.count.call(null,inst_62765);
var inst_62739 = inst_62766;
var inst_62740 = inst_62765;
var inst_62741 = inst_62767;
var inst_62742 = (0);
var state_62862__$1 = (function (){var statearr_62917 = state_62862;
(statearr_62917[(13)] = inst_62742);

(statearr_62917[(14)] = inst_62739);

(statearr_62917[(16)] = inst_62741);

(statearr_62917[(17)] = inst_62740);

return statearr_62917;
})();
var statearr_62918_62982 = state_62862__$1;
(statearr_62918_62982[(2)] = null);

(statearr_62918_62982[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (11))){
var inst_62761 = (state_62862[(7)]);
var inst_62739 = (state_62862[(14)]);
var inst_62761__$1 = cljs.core.seq.call(null,inst_62739);
var state_62862__$1 = (function (){var statearr_62919 = state_62862;
(statearr_62919[(7)] = inst_62761__$1);

return statearr_62919;
})();
if(inst_62761__$1){
var statearr_62920_62983 = state_62862__$1;
(statearr_62920_62983[(1)] = (16));

} else {
var statearr_62921_62984 = state_62862__$1;
(statearr_62921_62984[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (9))){
var inst_62791 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62922_62985 = state_62862__$1;
(statearr_62922_62985[(2)] = inst_62791);

(statearr_62922_62985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (5))){
var inst_62737 = cljs.core.deref.call(null,cs);
var inst_62738 = cljs.core.seq.call(null,inst_62737);
var inst_62739 = inst_62738;
var inst_62740 = null;
var inst_62741 = (0);
var inst_62742 = (0);
var state_62862__$1 = (function (){var statearr_62923 = state_62862;
(statearr_62923[(13)] = inst_62742);

(statearr_62923[(14)] = inst_62739);

(statearr_62923[(16)] = inst_62741);

(statearr_62923[(17)] = inst_62740);

return statearr_62923;
})();
var statearr_62924_62986 = state_62862__$1;
(statearr_62924_62986[(2)] = null);

(statearr_62924_62986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (14))){
var state_62862__$1 = state_62862;
var statearr_62925_62987 = state_62862__$1;
(statearr_62925_62987[(2)] = null);

(statearr_62925_62987[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (45))){
var inst_62852 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62926_62988 = state_62862__$1;
(statearr_62926_62988[(2)] = inst_62852);

(statearr_62926_62988[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (26))){
var inst_62794 = (state_62862[(29)]);
var inst_62848 = (state_62862[(2)]);
var inst_62849 = cljs.core.seq.call(null,inst_62794);
var state_62862__$1 = (function (){var statearr_62927 = state_62862;
(statearr_62927[(31)] = inst_62848);

return statearr_62927;
})();
if(inst_62849){
var statearr_62928_62989 = state_62862__$1;
(statearr_62928_62989[(1)] = (42));

} else {
var statearr_62929_62990 = state_62862__$1;
(statearr_62929_62990[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (16))){
var inst_62761 = (state_62862[(7)]);
var inst_62763 = cljs.core.chunked_seq_QMARK_.call(null,inst_62761);
var state_62862__$1 = state_62862;
if(inst_62763){
var statearr_62930_62991 = state_62862__$1;
(statearr_62930_62991[(1)] = (19));

} else {
var statearr_62931_62992 = state_62862__$1;
(statearr_62931_62992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (38))){
var inst_62841 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62932_62993 = state_62862__$1;
(statearr_62932_62993[(2)] = inst_62841);

(statearr_62932_62993[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (30))){
var state_62862__$1 = state_62862;
var statearr_62933_62994 = state_62862__$1;
(statearr_62933_62994[(2)] = null);

(statearr_62933_62994[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (10))){
var inst_62742 = (state_62862[(13)]);
var inst_62740 = (state_62862[(17)]);
var inst_62750 = cljs.core._nth.call(null,inst_62740,inst_62742);
var inst_62751 = cljs.core.nth.call(null,inst_62750,(0),null);
var inst_62752 = cljs.core.nth.call(null,inst_62750,(1),null);
var state_62862__$1 = (function (){var statearr_62934 = state_62862;
(statearr_62934[(26)] = inst_62751);

return statearr_62934;
})();
if(cljs.core.truth_(inst_62752)){
var statearr_62935_62995 = state_62862__$1;
(statearr_62935_62995[(1)] = (13));

} else {
var statearr_62936_62996 = state_62862__$1;
(statearr_62936_62996[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (18))){
var inst_62787 = (state_62862[(2)]);
var state_62862__$1 = state_62862;
var statearr_62937_62997 = state_62862__$1;
(statearr_62937_62997[(2)] = inst_62787);

(statearr_62937_62997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (42))){
var state_62862__$1 = state_62862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62862__$1,(45),dchan);
} else {
if((state_val_62863 === (37))){
var inst_62821 = (state_62862[(25)]);
var inst_62730 = (state_62862[(11)]);
var inst_62830 = (state_62862[(23)]);
var inst_62830__$1 = cljs.core.first.call(null,inst_62821);
var inst_62831 = cljs.core.async.put_BANG_.call(null,inst_62830__$1,inst_62730,done);
var state_62862__$1 = (function (){var statearr_62938 = state_62862;
(statearr_62938[(23)] = inst_62830__$1);

return statearr_62938;
})();
if(cljs.core.truth_(inst_62831)){
var statearr_62939_62998 = state_62862__$1;
(statearr_62939_62998[(1)] = (39));

} else {
var statearr_62940_62999 = state_62862__$1;
(statearr_62940_62999[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62863 === (8))){
var inst_62742 = (state_62862[(13)]);
var inst_62741 = (state_62862[(16)]);
var inst_62744 = (inst_62742 < inst_62741);
var inst_62745 = inst_62744;
var state_62862__$1 = state_62862;
if(cljs.core.truth_(inst_62745)){
var statearr_62941_63000 = state_62862__$1;
(statearr_62941_63000[(1)] = (10));

} else {
var statearr_62942_63001 = state_62862__$1;
(statearr_62942_63001[(1)] = (11));

}

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
});})(c__35408__auto___62947,cs,m,dchan,dctr,done))
;
return ((function (switch__35318__auto__,c__35408__auto___62947,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35319__auto__ = null;
var cljs$core$async$mult_$_state_machine__35319__auto____0 = (function (){
var statearr_62943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62943[(0)] = cljs$core$async$mult_$_state_machine__35319__auto__);

(statearr_62943[(1)] = (1));

return statearr_62943;
});
var cljs$core$async$mult_$_state_machine__35319__auto____1 = (function (state_62862){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_62862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e62944){if((e62944 instanceof Object)){
var ex__35322__auto__ = e62944;
var statearr_62945_63002 = state_62862;
(statearr_62945_63002[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62944;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63003 = state_62862;
state_62862 = G__63003;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35319__auto__ = function(state_62862){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35319__auto____1.call(this,state_62862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35319__auto____0;
cljs$core$async$mult_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35319__auto____1;
return cljs$core$async$mult_$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___62947,cs,m,dchan,dctr,done))
})();
var state__35410__auto__ = (function (){var statearr_62946 = f__35409__auto__.call(null);
(statearr_62946[(6)] = c__35408__auto___62947);

return statearr_62946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___62947,cs,m,dchan,dctr,done))
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
var G__63005 = arguments.length;
switch (G__63005) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m);
} else {
var m__30913__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,state_map);
} else {
var m__30913__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30912__auto__ = (((m == null))?null:m);
var m__30913__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,m,mode);
} else {
var m__30913__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31465__auto__ = [];
var len__31458__auto___63017 = arguments.length;
var i__31459__auto___63018 = (0);
while(true){
if((i__31459__auto___63018 < len__31458__auto___63017)){
args__31465__auto__.push((arguments[i__31459__auto___63018]));

var G__63019 = (i__31459__auto___63018 + (1));
i__31459__auto___63018 = G__63019;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((3) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31466__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63011){
var map__63012 = p__63011;
var map__63012__$1 = ((((!((map__63012 == null)))?((((map__63012.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__63012.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63012):map__63012);
var opts = map__63012__$1;
var statearr_63014_63020 = state;
(statearr_63014_63020[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__63012,map__63012__$1,opts){
return (function (val){
var statearr_63015_63021 = state;
(statearr_63015_63021[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__63012,map__63012__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_63016_63022 = state;
(statearr_63016_63022[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63007){
var G__63008 = cljs.core.first.call(null,seq63007);
var seq63007__$1 = cljs.core.next.call(null,seq63007);
var G__63009 = cljs.core.first.call(null,seq63007__$1);
var seq63007__$2 = cljs.core.next.call(null,seq63007__$1);
var G__63010 = cljs.core.first.call(null,seq63007__$2);
var seq63007__$3 = cljs.core.next.call(null,seq63007__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63008,G__63009,G__63010,seq63007__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async63023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63023 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta63024){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta63024 = meta63024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63025,meta63024__$1){
var self__ = this;
var _63025__$1 = this;
return (new cljs.core.async.t_cljs$core$async63023(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta63024__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63025){
var self__ = this;
var _63025__$1 = this;
return self__.meta63024;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta63024","meta63024",-263788557,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63023";

cljs.core.async.t_cljs$core$async63023.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async63023");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async63023 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async63023(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta63024){
return (new cljs.core.async.t_cljs$core$async63023(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta63024));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async63023(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35408__auto___63187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_63127){
var state_val_63128 = (state_63127[(1)]);
if((state_val_63128 === (7))){
var inst_63042 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
var statearr_63129_63188 = state_63127__$1;
(statearr_63129_63188[(2)] = inst_63042);

(statearr_63129_63188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (20))){
var inst_63054 = (state_63127[(7)]);
var state_63127__$1 = state_63127;
var statearr_63130_63189 = state_63127__$1;
(statearr_63130_63189[(2)] = inst_63054);

(statearr_63130_63189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (27))){
var state_63127__$1 = state_63127;
var statearr_63131_63190 = state_63127__$1;
(statearr_63131_63190[(2)] = null);

(statearr_63131_63190[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (1))){
var inst_63029 = (state_63127[(8)]);
var inst_63029__$1 = calc_state.call(null);
var inst_63031 = (inst_63029__$1 == null);
var inst_63032 = cljs.core.not.call(null,inst_63031);
var state_63127__$1 = (function (){var statearr_63132 = state_63127;
(statearr_63132[(8)] = inst_63029__$1);

return statearr_63132;
})();
if(inst_63032){
var statearr_63133_63191 = state_63127__$1;
(statearr_63133_63191[(1)] = (2));

} else {
var statearr_63134_63192 = state_63127__$1;
(statearr_63134_63192[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (24))){
var inst_63078 = (state_63127[(9)]);
var inst_63101 = (state_63127[(10)]);
var inst_63087 = (state_63127[(11)]);
var inst_63101__$1 = inst_63078.call(null,inst_63087);
var state_63127__$1 = (function (){var statearr_63135 = state_63127;
(statearr_63135[(10)] = inst_63101__$1);

return statearr_63135;
})();
if(cljs.core.truth_(inst_63101__$1)){
var statearr_63136_63193 = state_63127__$1;
(statearr_63136_63193[(1)] = (29));

} else {
var statearr_63137_63194 = state_63127__$1;
(statearr_63137_63194[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (4))){
var inst_63045 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63045)){
var statearr_63138_63195 = state_63127__$1;
(statearr_63138_63195[(1)] = (8));

} else {
var statearr_63139_63196 = state_63127__$1;
(statearr_63139_63196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (15))){
var inst_63072 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63072)){
var statearr_63140_63197 = state_63127__$1;
(statearr_63140_63197[(1)] = (19));

} else {
var statearr_63141_63198 = state_63127__$1;
(statearr_63141_63198[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (21))){
var inst_63077 = (state_63127[(12)]);
var inst_63077__$1 = (state_63127[(2)]);
var inst_63078 = cljs.core.get.call(null,inst_63077__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63079 = cljs.core.get.call(null,inst_63077__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63080 = cljs.core.get.call(null,inst_63077__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63127__$1 = (function (){var statearr_63142 = state_63127;
(statearr_63142[(9)] = inst_63078);

(statearr_63142[(13)] = inst_63079);

(statearr_63142[(12)] = inst_63077__$1);

return statearr_63142;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_63127__$1,(22),inst_63080);
} else {
if((state_val_63128 === (31))){
var inst_63109 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63109)){
var statearr_63143_63199 = state_63127__$1;
(statearr_63143_63199[(1)] = (32));

} else {
var statearr_63144_63200 = state_63127__$1;
(statearr_63144_63200[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (32))){
var inst_63086 = (state_63127[(14)]);
var state_63127__$1 = state_63127;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63127__$1,(35),out,inst_63086);
} else {
if((state_val_63128 === (33))){
var inst_63077 = (state_63127[(12)]);
var inst_63054 = inst_63077;
var state_63127__$1 = (function (){var statearr_63145 = state_63127;
(statearr_63145[(7)] = inst_63054);

return statearr_63145;
})();
var statearr_63146_63201 = state_63127__$1;
(statearr_63146_63201[(2)] = null);

(statearr_63146_63201[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (13))){
var inst_63054 = (state_63127[(7)]);
var inst_63061 = inst_63054.cljs$lang$protocol_mask$partition0$;
var inst_63062 = (inst_63061 & (64));
var inst_63063 = inst_63054.cljs$core$ISeq$;
var inst_63064 = (cljs.core.PROTOCOL_SENTINEL === inst_63063);
var inst_63065 = (inst_63062) || (inst_63064);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63065)){
var statearr_63147_63202 = state_63127__$1;
(statearr_63147_63202[(1)] = (16));

} else {
var statearr_63148_63203 = state_63127__$1;
(statearr_63148_63203[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (22))){
var inst_63087 = (state_63127[(11)]);
var inst_63086 = (state_63127[(14)]);
var inst_63085 = (state_63127[(2)]);
var inst_63086__$1 = cljs.core.nth.call(null,inst_63085,(0),null);
var inst_63087__$1 = cljs.core.nth.call(null,inst_63085,(1),null);
var inst_63088 = (inst_63086__$1 == null);
var inst_63089 = cljs.core._EQ_.call(null,inst_63087__$1,change);
var inst_63090 = (inst_63088) || (inst_63089);
var state_63127__$1 = (function (){var statearr_63149 = state_63127;
(statearr_63149[(11)] = inst_63087__$1);

(statearr_63149[(14)] = inst_63086__$1);

return statearr_63149;
})();
if(cljs.core.truth_(inst_63090)){
var statearr_63150_63204 = state_63127__$1;
(statearr_63150_63204[(1)] = (23));

} else {
var statearr_63151_63205 = state_63127__$1;
(statearr_63151_63205[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (36))){
var inst_63077 = (state_63127[(12)]);
var inst_63054 = inst_63077;
var state_63127__$1 = (function (){var statearr_63152 = state_63127;
(statearr_63152[(7)] = inst_63054);

return statearr_63152;
})();
var statearr_63153_63206 = state_63127__$1;
(statearr_63153_63206[(2)] = null);

(statearr_63153_63206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (29))){
var inst_63101 = (state_63127[(10)]);
var state_63127__$1 = state_63127;
var statearr_63154_63207 = state_63127__$1;
(statearr_63154_63207[(2)] = inst_63101);

(statearr_63154_63207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (6))){
var state_63127__$1 = state_63127;
var statearr_63155_63208 = state_63127__$1;
(statearr_63155_63208[(2)] = false);

(statearr_63155_63208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (28))){
var inst_63097 = (state_63127[(2)]);
var inst_63098 = calc_state.call(null);
var inst_63054 = inst_63098;
var state_63127__$1 = (function (){var statearr_63156 = state_63127;
(statearr_63156[(7)] = inst_63054);

(statearr_63156[(15)] = inst_63097);

return statearr_63156;
})();
var statearr_63157_63209 = state_63127__$1;
(statearr_63157_63209[(2)] = null);

(statearr_63157_63209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (25))){
var inst_63123 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
var statearr_63158_63210 = state_63127__$1;
(statearr_63158_63210[(2)] = inst_63123);

(statearr_63158_63210[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (34))){
var inst_63121 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
var statearr_63159_63211 = state_63127__$1;
(statearr_63159_63211[(2)] = inst_63121);

(statearr_63159_63211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (17))){
var state_63127__$1 = state_63127;
var statearr_63160_63212 = state_63127__$1;
(statearr_63160_63212[(2)] = false);

(statearr_63160_63212[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (3))){
var state_63127__$1 = state_63127;
var statearr_63161_63213 = state_63127__$1;
(statearr_63161_63213[(2)] = false);

(statearr_63161_63213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (12))){
var inst_63125 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63127__$1,inst_63125);
} else {
if((state_val_63128 === (2))){
var inst_63029 = (state_63127[(8)]);
var inst_63034 = inst_63029.cljs$lang$protocol_mask$partition0$;
var inst_63035 = (inst_63034 & (64));
var inst_63036 = inst_63029.cljs$core$ISeq$;
var inst_63037 = (cljs.core.PROTOCOL_SENTINEL === inst_63036);
var inst_63038 = (inst_63035) || (inst_63037);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63038)){
var statearr_63162_63214 = state_63127__$1;
(statearr_63162_63214[(1)] = (5));

} else {
var statearr_63163_63215 = state_63127__$1;
(statearr_63163_63215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (23))){
var inst_63086 = (state_63127[(14)]);
var inst_63092 = (inst_63086 == null);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63092)){
var statearr_63164_63216 = state_63127__$1;
(statearr_63164_63216[(1)] = (26));

} else {
var statearr_63165_63217 = state_63127__$1;
(statearr_63165_63217[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (35))){
var inst_63112 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
if(cljs.core.truth_(inst_63112)){
var statearr_63166_63218 = state_63127__$1;
(statearr_63166_63218[(1)] = (36));

} else {
var statearr_63167_63219 = state_63127__$1;
(statearr_63167_63219[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (19))){
var inst_63054 = (state_63127[(7)]);
var inst_63074 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63054);
var state_63127__$1 = state_63127;
var statearr_63168_63220 = state_63127__$1;
(statearr_63168_63220[(2)] = inst_63074);

(statearr_63168_63220[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (11))){
var inst_63054 = (state_63127[(7)]);
var inst_63058 = (inst_63054 == null);
var inst_63059 = cljs.core.not.call(null,inst_63058);
var state_63127__$1 = state_63127;
if(inst_63059){
var statearr_63169_63221 = state_63127__$1;
(statearr_63169_63221[(1)] = (13));

} else {
var statearr_63170_63222 = state_63127__$1;
(statearr_63170_63222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (9))){
var inst_63029 = (state_63127[(8)]);
var state_63127__$1 = state_63127;
var statearr_63171_63223 = state_63127__$1;
(statearr_63171_63223[(2)] = inst_63029);

(statearr_63171_63223[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (5))){
var state_63127__$1 = state_63127;
var statearr_63172_63224 = state_63127__$1;
(statearr_63172_63224[(2)] = true);

(statearr_63172_63224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (14))){
var state_63127__$1 = state_63127;
var statearr_63173_63225 = state_63127__$1;
(statearr_63173_63225[(2)] = false);

(statearr_63173_63225[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (26))){
var inst_63087 = (state_63127[(11)]);
var inst_63094 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_63087);
var state_63127__$1 = state_63127;
var statearr_63174_63226 = state_63127__$1;
(statearr_63174_63226[(2)] = inst_63094);

(statearr_63174_63226[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (16))){
var state_63127__$1 = state_63127;
var statearr_63175_63227 = state_63127__$1;
(statearr_63175_63227[(2)] = true);

(statearr_63175_63227[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (38))){
var inst_63117 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
var statearr_63176_63228 = state_63127__$1;
(statearr_63176_63228[(2)] = inst_63117);

(statearr_63176_63228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (30))){
var inst_63078 = (state_63127[(9)]);
var inst_63079 = (state_63127[(13)]);
var inst_63087 = (state_63127[(11)]);
var inst_63104 = cljs.core.empty_QMARK_.call(null,inst_63078);
var inst_63105 = inst_63079.call(null,inst_63087);
var inst_63106 = cljs.core.not.call(null,inst_63105);
var inst_63107 = (inst_63104) && (inst_63106);
var state_63127__$1 = state_63127;
var statearr_63177_63229 = state_63127__$1;
(statearr_63177_63229[(2)] = inst_63107);

(statearr_63177_63229[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (10))){
var inst_63029 = (state_63127[(8)]);
var inst_63050 = (state_63127[(2)]);
var inst_63051 = cljs.core.get.call(null,inst_63050,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63052 = cljs.core.get.call(null,inst_63050,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63053 = cljs.core.get.call(null,inst_63050,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63054 = inst_63029;
var state_63127__$1 = (function (){var statearr_63178 = state_63127;
(statearr_63178[(7)] = inst_63054);

(statearr_63178[(16)] = inst_63053);

(statearr_63178[(17)] = inst_63051);

(statearr_63178[(18)] = inst_63052);

return statearr_63178;
})();
var statearr_63179_63230 = state_63127__$1;
(statearr_63179_63230[(2)] = null);

(statearr_63179_63230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (18))){
var inst_63069 = (state_63127[(2)]);
var state_63127__$1 = state_63127;
var statearr_63180_63231 = state_63127__$1;
(statearr_63180_63231[(2)] = inst_63069);

(statearr_63180_63231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (37))){
var state_63127__$1 = state_63127;
var statearr_63181_63232 = state_63127__$1;
(statearr_63181_63232[(2)] = null);

(statearr_63181_63232[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63128 === (8))){
var inst_63029 = (state_63127[(8)]);
var inst_63047 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63029);
var state_63127__$1 = state_63127;
var statearr_63182_63233 = state_63127__$1;
(statearr_63182_63233[(2)] = inst_63047);

(statearr_63182_63233[(1)] = (10));


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
});})(c__35408__auto___63187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35318__auto__,c__35408__auto___63187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35319__auto__ = null;
var cljs$core$async$mix_$_state_machine__35319__auto____0 = (function (){
var statearr_63183 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63183[(0)] = cljs$core$async$mix_$_state_machine__35319__auto__);

(statearr_63183[(1)] = (1));

return statearr_63183;
});
var cljs$core$async$mix_$_state_machine__35319__auto____1 = (function (state_63127){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63127);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63184){if((e63184 instanceof Object)){
var ex__35322__auto__ = e63184;
var statearr_63185_63234 = state_63127;
(statearr_63185_63234[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63127);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63235 = state_63127;
state_63127 = G__63235;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35319__auto__ = function(state_63127){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35319__auto____1.call(this,state_63127);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35319__auto____0;
cljs$core$async$mix_$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35319__auto____1;
return cljs$core$async$mix_$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35410__auto__ = (function (){var statearr_63186 = f__35409__auto__.call(null);
(statearr_63186[(6)] = c__35408__auto___63187);

return statearr_63186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63187,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30913__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p,v,ch);
} else {
var m__30913__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__63237 = arguments.length;
switch (G__63237) {
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
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p);
} else {
var m__30913__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30912__auto__ = (((p == null))?null:p);
var m__30913__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,p,v);
} else {
var m__30913__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__63241 = arguments.length;
switch (G__63241) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30179__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30179__auto__,mults){
return (function (p1__63239_SHARP_){
if(cljs.core.truth_(p1__63239_SHARP_.call(null,topic))){
return p1__63239_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__63239_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30179__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async63242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63242 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63243){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63243 = meta63243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_63244,meta63243__$1){
var self__ = this;
var _63244__$1 = this;
return (new cljs.core.async.t_cljs$core$async63242(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63243__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_63244){
var self__ = this;
var _63244__$1 = this;
return self__.meta63243;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63243","meta63243",1563603381,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63242";

cljs.core.async.t_cljs$core$async63242.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async63242");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async63242 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async63242(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63243){
return (new cljs.core.async.t_cljs$core$async63242(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63243));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async63242(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35408__auto___63362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63362,mults,ensure_mult,p){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63362,mults,ensure_mult,p){
return (function (state_63316){
var state_val_63317 = (state_63316[(1)]);
if((state_val_63317 === (7))){
var inst_63312 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
var statearr_63318_63363 = state_63316__$1;
(statearr_63318_63363[(2)] = inst_63312);

(statearr_63318_63363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (20))){
var state_63316__$1 = state_63316;
var statearr_63319_63364 = state_63316__$1;
(statearr_63319_63364[(2)] = null);

(statearr_63319_63364[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (1))){
var state_63316__$1 = state_63316;
var statearr_63320_63365 = state_63316__$1;
(statearr_63320_63365[(2)] = null);

(statearr_63320_63365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (24))){
var inst_63295 = (state_63316[(7)]);
var inst_63304 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_63295);
var state_63316__$1 = state_63316;
var statearr_63321_63366 = state_63316__$1;
(statearr_63321_63366[(2)] = inst_63304);

(statearr_63321_63366[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (4))){
var inst_63247 = (state_63316[(8)]);
var inst_63247__$1 = (state_63316[(2)]);
var inst_63248 = (inst_63247__$1 == null);
var state_63316__$1 = (function (){var statearr_63322 = state_63316;
(statearr_63322[(8)] = inst_63247__$1);

return statearr_63322;
})();
if(cljs.core.truth_(inst_63248)){
var statearr_63323_63367 = state_63316__$1;
(statearr_63323_63367[(1)] = (5));

} else {
var statearr_63324_63368 = state_63316__$1;
(statearr_63324_63368[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (15))){
var inst_63289 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
var statearr_63325_63369 = state_63316__$1;
(statearr_63325_63369[(2)] = inst_63289);

(statearr_63325_63369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (21))){
var inst_63309 = (state_63316[(2)]);
var state_63316__$1 = (function (){var statearr_63326 = state_63316;
(statearr_63326[(9)] = inst_63309);

return statearr_63326;
})();
var statearr_63327_63370 = state_63316__$1;
(statearr_63327_63370[(2)] = null);

(statearr_63327_63370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (13))){
var inst_63271 = (state_63316[(10)]);
var inst_63273 = cljs.core.chunked_seq_QMARK_.call(null,inst_63271);
var state_63316__$1 = state_63316;
if(inst_63273){
var statearr_63328_63371 = state_63316__$1;
(statearr_63328_63371[(1)] = (16));

} else {
var statearr_63329_63372 = state_63316__$1;
(statearr_63329_63372[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (22))){
var inst_63301 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
if(cljs.core.truth_(inst_63301)){
var statearr_63330_63373 = state_63316__$1;
(statearr_63330_63373[(1)] = (23));

} else {
var statearr_63331_63374 = state_63316__$1;
(statearr_63331_63374[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (6))){
var inst_63297 = (state_63316[(11)]);
var inst_63247 = (state_63316[(8)]);
var inst_63295 = (state_63316[(7)]);
var inst_63295__$1 = topic_fn.call(null,inst_63247);
var inst_63296 = cljs.core.deref.call(null,mults);
var inst_63297__$1 = cljs.core.get.call(null,inst_63296,inst_63295__$1);
var state_63316__$1 = (function (){var statearr_63332 = state_63316;
(statearr_63332[(11)] = inst_63297__$1);

(statearr_63332[(7)] = inst_63295__$1);

return statearr_63332;
})();
if(cljs.core.truth_(inst_63297__$1)){
var statearr_63333_63375 = state_63316__$1;
(statearr_63333_63375[(1)] = (19));

} else {
var statearr_63334_63376 = state_63316__$1;
(statearr_63334_63376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (25))){
var inst_63306 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
var statearr_63335_63377 = state_63316__$1;
(statearr_63335_63377[(2)] = inst_63306);

(statearr_63335_63377[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (17))){
var inst_63271 = (state_63316[(10)]);
var inst_63280 = cljs.core.first.call(null,inst_63271);
var inst_63281 = cljs.core.async.muxch_STAR_.call(null,inst_63280);
var inst_63282 = cljs.core.async.close_BANG_.call(null,inst_63281);
var inst_63283 = cljs.core.next.call(null,inst_63271);
var inst_63257 = inst_63283;
var inst_63258 = null;
var inst_63259 = (0);
var inst_63260 = (0);
var state_63316__$1 = (function (){var statearr_63336 = state_63316;
(statearr_63336[(12)] = inst_63257);

(statearr_63336[(13)] = inst_63260);

(statearr_63336[(14)] = inst_63282);

(statearr_63336[(15)] = inst_63259);

(statearr_63336[(16)] = inst_63258);

return statearr_63336;
})();
var statearr_63337_63378 = state_63316__$1;
(statearr_63337_63378[(2)] = null);

(statearr_63337_63378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (3))){
var inst_63314 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63316__$1,inst_63314);
} else {
if((state_val_63317 === (12))){
var inst_63291 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
var statearr_63338_63379 = state_63316__$1;
(statearr_63338_63379[(2)] = inst_63291);

(statearr_63338_63379[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (2))){
var state_63316__$1 = state_63316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63316__$1,(4),ch);
} else {
if((state_val_63317 === (23))){
var state_63316__$1 = state_63316;
var statearr_63339_63380 = state_63316__$1;
(statearr_63339_63380[(2)] = null);

(statearr_63339_63380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (19))){
var inst_63297 = (state_63316[(11)]);
var inst_63247 = (state_63316[(8)]);
var inst_63299 = cljs.core.async.muxch_STAR_.call(null,inst_63297);
var state_63316__$1 = state_63316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63316__$1,(22),inst_63299,inst_63247);
} else {
if((state_val_63317 === (11))){
var inst_63257 = (state_63316[(12)]);
var inst_63271 = (state_63316[(10)]);
var inst_63271__$1 = cljs.core.seq.call(null,inst_63257);
var state_63316__$1 = (function (){var statearr_63340 = state_63316;
(statearr_63340[(10)] = inst_63271__$1);

return statearr_63340;
})();
if(inst_63271__$1){
var statearr_63341_63381 = state_63316__$1;
(statearr_63341_63381[(1)] = (13));

} else {
var statearr_63342_63382 = state_63316__$1;
(statearr_63342_63382[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (9))){
var inst_63293 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
var statearr_63343_63383 = state_63316__$1;
(statearr_63343_63383[(2)] = inst_63293);

(statearr_63343_63383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (5))){
var inst_63254 = cljs.core.deref.call(null,mults);
var inst_63255 = cljs.core.vals.call(null,inst_63254);
var inst_63256 = cljs.core.seq.call(null,inst_63255);
var inst_63257 = inst_63256;
var inst_63258 = null;
var inst_63259 = (0);
var inst_63260 = (0);
var state_63316__$1 = (function (){var statearr_63344 = state_63316;
(statearr_63344[(12)] = inst_63257);

(statearr_63344[(13)] = inst_63260);

(statearr_63344[(15)] = inst_63259);

(statearr_63344[(16)] = inst_63258);

return statearr_63344;
})();
var statearr_63345_63384 = state_63316__$1;
(statearr_63345_63384[(2)] = null);

(statearr_63345_63384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (14))){
var state_63316__$1 = state_63316;
var statearr_63349_63385 = state_63316__$1;
(statearr_63349_63385[(2)] = null);

(statearr_63349_63385[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (16))){
var inst_63271 = (state_63316[(10)]);
var inst_63275 = cljs.core.chunk_first.call(null,inst_63271);
var inst_63276 = cljs.core.chunk_rest.call(null,inst_63271);
var inst_63277 = cljs.core.count.call(null,inst_63275);
var inst_63257 = inst_63276;
var inst_63258 = inst_63275;
var inst_63259 = inst_63277;
var inst_63260 = (0);
var state_63316__$1 = (function (){var statearr_63350 = state_63316;
(statearr_63350[(12)] = inst_63257);

(statearr_63350[(13)] = inst_63260);

(statearr_63350[(15)] = inst_63259);

(statearr_63350[(16)] = inst_63258);

return statearr_63350;
})();
var statearr_63351_63386 = state_63316__$1;
(statearr_63351_63386[(2)] = null);

(statearr_63351_63386[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (10))){
var inst_63257 = (state_63316[(12)]);
var inst_63260 = (state_63316[(13)]);
var inst_63259 = (state_63316[(15)]);
var inst_63258 = (state_63316[(16)]);
var inst_63265 = cljs.core._nth.call(null,inst_63258,inst_63260);
var inst_63266 = cljs.core.async.muxch_STAR_.call(null,inst_63265);
var inst_63267 = cljs.core.async.close_BANG_.call(null,inst_63266);
var inst_63268 = (inst_63260 + (1));
var tmp63346 = inst_63257;
var tmp63347 = inst_63259;
var tmp63348 = inst_63258;
var inst_63257__$1 = tmp63346;
var inst_63258__$1 = tmp63348;
var inst_63259__$1 = tmp63347;
var inst_63260__$1 = inst_63268;
var state_63316__$1 = (function (){var statearr_63352 = state_63316;
(statearr_63352[(12)] = inst_63257__$1);

(statearr_63352[(13)] = inst_63260__$1);

(statearr_63352[(15)] = inst_63259__$1);

(statearr_63352[(17)] = inst_63267);

(statearr_63352[(16)] = inst_63258__$1);

return statearr_63352;
})();
var statearr_63353_63387 = state_63316__$1;
(statearr_63353_63387[(2)] = null);

(statearr_63353_63387[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (18))){
var inst_63286 = (state_63316[(2)]);
var state_63316__$1 = state_63316;
var statearr_63354_63388 = state_63316__$1;
(statearr_63354_63388[(2)] = inst_63286);

(statearr_63354_63388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63317 === (8))){
var inst_63260 = (state_63316[(13)]);
var inst_63259 = (state_63316[(15)]);
var inst_63262 = (inst_63260 < inst_63259);
var inst_63263 = inst_63262;
var state_63316__$1 = state_63316;
if(cljs.core.truth_(inst_63263)){
var statearr_63355_63389 = state_63316__$1;
(statearr_63355_63389[(1)] = (10));

} else {
var statearr_63356_63390 = state_63316__$1;
(statearr_63356_63390[(1)] = (11));

}

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
});})(c__35408__auto___63362,mults,ensure_mult,p))
;
return ((function (switch__35318__auto__,c__35408__auto___63362,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63357 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63357[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63357[(1)] = (1));

return statearr_63357;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63316){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63358){if((e63358 instanceof Object)){
var ex__35322__auto__ = e63358;
var statearr_63359_63391 = state_63316;
(statearr_63359_63391[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63358;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63392 = state_63316;
state_63316 = G__63392;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63362,mults,ensure_mult,p))
})();
var state__35410__auto__ = (function (){var statearr_63360 = f__35409__auto__.call(null);
(statearr_63360[(6)] = c__35408__auto___63362);

return statearr_63360;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63362,mults,ensure_mult,p))
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
var G__63394 = arguments.length;
switch (G__63394) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__63397 = arguments.length;
switch (G__63397) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__63400 = arguments.length;
switch (G__63400) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35408__auto___63467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63467,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63467,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_63439){
var state_val_63440 = (state_63439[(1)]);
if((state_val_63440 === (7))){
var state_63439__$1 = state_63439;
var statearr_63441_63468 = state_63439__$1;
(statearr_63441_63468[(2)] = null);

(statearr_63441_63468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (1))){
var state_63439__$1 = state_63439;
var statearr_63442_63469 = state_63439__$1;
(statearr_63442_63469[(2)] = null);

(statearr_63442_63469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (4))){
var inst_63403 = (state_63439[(7)]);
var inst_63405 = (inst_63403 < cnt);
var state_63439__$1 = state_63439;
if(cljs.core.truth_(inst_63405)){
var statearr_63443_63470 = state_63439__$1;
(statearr_63443_63470[(1)] = (6));

} else {
var statearr_63444_63471 = state_63439__$1;
(statearr_63444_63471[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (15))){
var inst_63435 = (state_63439[(2)]);
var state_63439__$1 = state_63439;
var statearr_63445_63472 = state_63439__$1;
(statearr_63445_63472[(2)] = inst_63435);

(statearr_63445_63472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (13))){
var inst_63428 = cljs.core.async.close_BANG_.call(null,out);
var state_63439__$1 = state_63439;
var statearr_63446_63473 = state_63439__$1;
(statearr_63446_63473[(2)] = inst_63428);

(statearr_63446_63473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (6))){
var state_63439__$1 = state_63439;
var statearr_63447_63474 = state_63439__$1;
(statearr_63447_63474[(2)] = null);

(statearr_63447_63474[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (3))){
var inst_63437 = (state_63439[(2)]);
var state_63439__$1 = state_63439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63439__$1,inst_63437);
} else {
if((state_val_63440 === (12))){
var inst_63425 = (state_63439[(8)]);
var inst_63425__$1 = (state_63439[(2)]);
var inst_63426 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_63425__$1);
var state_63439__$1 = (function (){var statearr_63448 = state_63439;
(statearr_63448[(8)] = inst_63425__$1);

return statearr_63448;
})();
if(cljs.core.truth_(inst_63426)){
var statearr_63449_63475 = state_63439__$1;
(statearr_63449_63475[(1)] = (13));

} else {
var statearr_63450_63476 = state_63439__$1;
(statearr_63450_63476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (2))){
var inst_63402 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_63403 = (0);
var state_63439__$1 = (function (){var statearr_63451 = state_63439;
(statearr_63451[(9)] = inst_63402);

(statearr_63451[(7)] = inst_63403);

return statearr_63451;
})();
var statearr_63452_63477 = state_63439__$1;
(statearr_63452_63477[(2)] = null);

(statearr_63452_63477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (11))){
var inst_63403 = (state_63439[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63439,(10),Object,null,(9));
var inst_63412 = chs__$1.call(null,inst_63403);
var inst_63413 = done.call(null,inst_63403);
var inst_63414 = cljs.core.async.take_BANG_.call(null,inst_63412,inst_63413);
var state_63439__$1 = state_63439;
var statearr_63453_63478 = state_63439__$1;
(statearr_63453_63478[(2)] = inst_63414);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (9))){
var inst_63403 = (state_63439[(7)]);
var inst_63416 = (state_63439[(2)]);
var inst_63417 = (inst_63403 + (1));
var inst_63403__$1 = inst_63417;
var state_63439__$1 = (function (){var statearr_63454 = state_63439;
(statearr_63454[(10)] = inst_63416);

(statearr_63454[(7)] = inst_63403__$1);

return statearr_63454;
})();
var statearr_63455_63479 = state_63439__$1;
(statearr_63455_63479[(2)] = null);

(statearr_63455_63479[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (5))){
var inst_63423 = (state_63439[(2)]);
var state_63439__$1 = (function (){var statearr_63456 = state_63439;
(statearr_63456[(11)] = inst_63423);

return statearr_63456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63439__$1,(12),dchan);
} else {
if((state_val_63440 === (14))){
var inst_63425 = (state_63439[(8)]);
var inst_63430 = cljs.core.apply.call(null,f,inst_63425);
var state_63439__$1 = state_63439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63439__$1,(16),out,inst_63430);
} else {
if((state_val_63440 === (16))){
var inst_63432 = (state_63439[(2)]);
var state_63439__$1 = (function (){var statearr_63457 = state_63439;
(statearr_63457[(12)] = inst_63432);

return statearr_63457;
})();
var statearr_63458_63480 = state_63439__$1;
(statearr_63458_63480[(2)] = null);

(statearr_63458_63480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (10))){
var inst_63407 = (state_63439[(2)]);
var inst_63408 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_63439__$1 = (function (){var statearr_63459 = state_63439;
(statearr_63459[(13)] = inst_63407);

return statearr_63459;
})();
var statearr_63460_63481 = state_63439__$1;
(statearr_63460_63481[(2)] = inst_63408);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63439__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63440 === (8))){
var inst_63421 = (state_63439[(2)]);
var state_63439__$1 = state_63439;
var statearr_63461_63482 = state_63439__$1;
(statearr_63461_63482[(2)] = inst_63421);

(statearr_63461_63482[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__35408__auto___63467,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35318__auto__,c__35408__auto___63467,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63462[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63462[(1)] = (1));

return statearr_63462;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63439){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63463){if((e63463 instanceof Object)){
var ex__35322__auto__ = e63463;
var statearr_63464_63483 = state_63439;
(statearr_63464_63483[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63484 = state_63439;
state_63439 = G__63484;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63467,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35410__auto__ = (function (){var statearr_63465 = f__35409__auto__.call(null);
(statearr_63465[(6)] = c__35408__auto___63467);

return statearr_63465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63467,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__63487 = arguments.length;
switch (G__63487) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35408__auto___63541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63541,out){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63541,out){
return (function (state_63519){
var state_val_63520 = (state_63519[(1)]);
if((state_val_63520 === (7))){
var inst_63498 = (state_63519[(7)]);
var inst_63499 = (state_63519[(8)]);
var inst_63498__$1 = (state_63519[(2)]);
var inst_63499__$1 = cljs.core.nth.call(null,inst_63498__$1,(0),null);
var inst_63500 = cljs.core.nth.call(null,inst_63498__$1,(1),null);
var inst_63501 = (inst_63499__$1 == null);
var state_63519__$1 = (function (){var statearr_63521 = state_63519;
(statearr_63521[(7)] = inst_63498__$1);

(statearr_63521[(9)] = inst_63500);

(statearr_63521[(8)] = inst_63499__$1);

return statearr_63521;
})();
if(cljs.core.truth_(inst_63501)){
var statearr_63522_63542 = state_63519__$1;
(statearr_63522_63542[(1)] = (8));

} else {
var statearr_63523_63543 = state_63519__$1;
(statearr_63523_63543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (1))){
var inst_63488 = cljs.core.vec.call(null,chs);
var inst_63489 = inst_63488;
var state_63519__$1 = (function (){var statearr_63524 = state_63519;
(statearr_63524[(10)] = inst_63489);

return statearr_63524;
})();
var statearr_63525_63544 = state_63519__$1;
(statearr_63525_63544[(2)] = null);

(statearr_63525_63544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (4))){
var inst_63489 = (state_63519[(10)]);
var state_63519__$1 = state_63519;
return cljs.core.async.ioc_alts_BANG_.call(null,state_63519__$1,(7),inst_63489);
} else {
if((state_val_63520 === (6))){
var inst_63515 = (state_63519[(2)]);
var state_63519__$1 = state_63519;
var statearr_63526_63545 = state_63519__$1;
(statearr_63526_63545[(2)] = inst_63515);

(statearr_63526_63545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (3))){
var inst_63517 = (state_63519[(2)]);
var state_63519__$1 = state_63519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63519__$1,inst_63517);
} else {
if((state_val_63520 === (2))){
var inst_63489 = (state_63519[(10)]);
var inst_63491 = cljs.core.count.call(null,inst_63489);
var inst_63492 = (inst_63491 > (0));
var state_63519__$1 = state_63519;
if(cljs.core.truth_(inst_63492)){
var statearr_63528_63546 = state_63519__$1;
(statearr_63528_63546[(1)] = (4));

} else {
var statearr_63529_63547 = state_63519__$1;
(statearr_63529_63547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (11))){
var inst_63489 = (state_63519[(10)]);
var inst_63508 = (state_63519[(2)]);
var tmp63527 = inst_63489;
var inst_63489__$1 = tmp63527;
var state_63519__$1 = (function (){var statearr_63530 = state_63519;
(statearr_63530[(11)] = inst_63508);

(statearr_63530[(10)] = inst_63489__$1);

return statearr_63530;
})();
var statearr_63531_63548 = state_63519__$1;
(statearr_63531_63548[(2)] = null);

(statearr_63531_63548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (9))){
var inst_63499 = (state_63519[(8)]);
var state_63519__$1 = state_63519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63519__$1,(11),out,inst_63499);
} else {
if((state_val_63520 === (5))){
var inst_63513 = cljs.core.async.close_BANG_.call(null,out);
var state_63519__$1 = state_63519;
var statearr_63532_63549 = state_63519__$1;
(statearr_63532_63549[(2)] = inst_63513);

(statearr_63532_63549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (10))){
var inst_63511 = (state_63519[(2)]);
var state_63519__$1 = state_63519;
var statearr_63533_63550 = state_63519__$1;
(statearr_63533_63550[(2)] = inst_63511);

(statearr_63533_63550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63520 === (8))){
var inst_63498 = (state_63519[(7)]);
var inst_63489 = (state_63519[(10)]);
var inst_63500 = (state_63519[(9)]);
var inst_63499 = (state_63519[(8)]);
var inst_63503 = (function (){var cs = inst_63489;
var vec__63494 = inst_63498;
var v = inst_63499;
var c = inst_63500;
return ((function (cs,vec__63494,v,c,inst_63498,inst_63489,inst_63500,inst_63499,state_val_63520,c__35408__auto___63541,out){
return (function (p1__63485_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__63485_SHARP_);
});
;})(cs,vec__63494,v,c,inst_63498,inst_63489,inst_63500,inst_63499,state_val_63520,c__35408__auto___63541,out))
})();
var inst_63504 = cljs.core.filterv.call(null,inst_63503,inst_63489);
var inst_63489__$1 = inst_63504;
var state_63519__$1 = (function (){var statearr_63534 = state_63519;
(statearr_63534[(10)] = inst_63489__$1);

return statearr_63534;
})();
var statearr_63535_63551 = state_63519__$1;
(statearr_63535_63551[(2)] = null);

(statearr_63535_63551[(1)] = (2));


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
}
}
}
});})(c__35408__auto___63541,out))
;
return ((function (switch__35318__auto__,c__35408__auto___63541,out){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63536 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63536[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63536[(1)] = (1));

return statearr_63536;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63519){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63537){if((e63537 instanceof Object)){
var ex__35322__auto__ = e63537;
var statearr_63538_63552 = state_63519;
(statearr_63538_63552[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63553 = state_63519;
state_63519 = G__63553;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63519);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63541,out))
})();
var state__35410__auto__ = (function (){var statearr_63539 = f__35409__auto__.call(null);
(statearr_63539[(6)] = c__35408__auto___63541);

return statearr_63539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63541,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__63555 = arguments.length;
switch (G__63555) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35408__auto___63600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63600,out){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63600,out){
return (function (state_63579){
var state_val_63580 = (state_63579[(1)]);
if((state_val_63580 === (7))){
var inst_63561 = (state_63579[(7)]);
var inst_63561__$1 = (state_63579[(2)]);
var inst_63562 = (inst_63561__$1 == null);
var inst_63563 = cljs.core.not.call(null,inst_63562);
var state_63579__$1 = (function (){var statearr_63581 = state_63579;
(statearr_63581[(7)] = inst_63561__$1);

return statearr_63581;
})();
if(inst_63563){
var statearr_63582_63601 = state_63579__$1;
(statearr_63582_63601[(1)] = (8));

} else {
var statearr_63583_63602 = state_63579__$1;
(statearr_63583_63602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (1))){
var inst_63556 = (0);
var state_63579__$1 = (function (){var statearr_63584 = state_63579;
(statearr_63584[(8)] = inst_63556);

return statearr_63584;
})();
var statearr_63585_63603 = state_63579__$1;
(statearr_63585_63603[(2)] = null);

(statearr_63585_63603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (4))){
var state_63579__$1 = state_63579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63579__$1,(7),ch);
} else {
if((state_val_63580 === (6))){
var inst_63574 = (state_63579[(2)]);
var state_63579__$1 = state_63579;
var statearr_63586_63604 = state_63579__$1;
(statearr_63586_63604[(2)] = inst_63574);

(statearr_63586_63604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (3))){
var inst_63576 = (state_63579[(2)]);
var inst_63577 = cljs.core.async.close_BANG_.call(null,out);
var state_63579__$1 = (function (){var statearr_63587 = state_63579;
(statearr_63587[(9)] = inst_63576);

return statearr_63587;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63579__$1,inst_63577);
} else {
if((state_val_63580 === (2))){
var inst_63556 = (state_63579[(8)]);
var inst_63558 = (inst_63556 < n);
var state_63579__$1 = state_63579;
if(cljs.core.truth_(inst_63558)){
var statearr_63588_63605 = state_63579__$1;
(statearr_63588_63605[(1)] = (4));

} else {
var statearr_63589_63606 = state_63579__$1;
(statearr_63589_63606[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (11))){
var inst_63556 = (state_63579[(8)]);
var inst_63566 = (state_63579[(2)]);
var inst_63567 = (inst_63556 + (1));
var inst_63556__$1 = inst_63567;
var state_63579__$1 = (function (){var statearr_63590 = state_63579;
(statearr_63590[(8)] = inst_63556__$1);

(statearr_63590[(10)] = inst_63566);

return statearr_63590;
})();
var statearr_63591_63607 = state_63579__$1;
(statearr_63591_63607[(2)] = null);

(statearr_63591_63607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (9))){
var state_63579__$1 = state_63579;
var statearr_63592_63608 = state_63579__$1;
(statearr_63592_63608[(2)] = null);

(statearr_63592_63608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (5))){
var state_63579__$1 = state_63579;
var statearr_63593_63609 = state_63579__$1;
(statearr_63593_63609[(2)] = null);

(statearr_63593_63609[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (10))){
var inst_63571 = (state_63579[(2)]);
var state_63579__$1 = state_63579;
var statearr_63594_63610 = state_63579__$1;
(statearr_63594_63610[(2)] = inst_63571);

(statearr_63594_63610[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63580 === (8))){
var inst_63561 = (state_63579[(7)]);
var state_63579__$1 = state_63579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63579__$1,(11),out,inst_63561);
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
});})(c__35408__auto___63600,out))
;
return ((function (switch__35318__auto__,c__35408__auto___63600,out){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63595 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63595[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63595[(1)] = (1));

return statearr_63595;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63579){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63596){if((e63596 instanceof Object)){
var ex__35322__auto__ = e63596;
var statearr_63597_63611 = state_63579;
(statearr_63597_63611[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63612 = state_63579;
state_63579 = G__63612;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63600,out))
})();
var state__35410__auto__ = (function (){var statearr_63598 = f__35409__auto__.call(null);
(statearr_63598[(6)] = c__35408__auto___63600);

return statearr_63598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63600,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async63614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63614 = (function (f,ch,meta63615){
this.f = f;
this.ch = ch;
this.meta63615 = meta63615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63616,meta63615__$1){
var self__ = this;
var _63616__$1 = this;
return (new cljs.core.async.t_cljs$core$async63614(self__.f,self__.ch,meta63615__$1));
});

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63616){
var self__ = this;
var _63616__$1 = this;
return self__.meta63615;
});

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async63617 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63617 = (function (f,ch,meta63615,_,fn1,meta63618){
this.f = f;
this.ch = ch;
this.meta63615 = meta63615;
this._ = _;
this.fn1 = fn1;
this.meta63618 = meta63618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_63619,meta63618__$1){
var self__ = this;
var _63619__$1 = this;
return (new cljs.core.async.t_cljs$core$async63617(self__.f,self__.ch,self__.meta63615,self__._,self__.fn1,meta63618__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async63617.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_63619){
var self__ = this;
var _63619__$1 = this;
return self__.meta63618;
});})(___$1))
;

cljs.core.async.t_cljs$core$async63617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async63617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async63617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__63613_SHARP_){
return f1.call(null,(((p1__63613_SHARP_ == null))?null:self__.f.call(null,p1__63613_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async63617.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63615","meta63615",-271277387,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async63614","cljs.core.async/t_cljs$core$async63614",1809953242,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta63618","meta63618",-287466983,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async63617.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63617";

cljs.core.async.t_cljs$core$async63617.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async63617");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async63617 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63617(f__$1,ch__$1,meta63615__$1,___$2,fn1__$1,meta63618){
return (new cljs.core.async.t_cljs$core$async63617(f__$1,ch__$1,meta63615__$1,___$2,fn1__$1,meta63618));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async63617(self__.f,self__.ch,self__.meta63615,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30167__auto__ = ret;
if(cljs.core.truth_(and__30167__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30167__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63614.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async63614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63615","meta63615",-271277387,null)], null);
});

cljs.core.async.t_cljs$core$async63614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63614";

cljs.core.async.t_cljs$core$async63614.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async63614");
});

cljs.core.async.__GT_t_cljs$core$async63614 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async63614(f__$1,ch__$1,meta63615){
return (new cljs.core.async.t_cljs$core$async63614(f__$1,ch__$1,meta63615));
});

}

return (new cljs.core.async.t_cljs$core$async63614(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async63620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63620 = (function (f,ch,meta63621){
this.f = f;
this.ch = ch;
this.meta63621 = meta63621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63622,meta63621__$1){
var self__ = this;
var _63622__$1 = this;
return (new cljs.core.async.t_cljs$core$async63620(self__.f,self__.ch,meta63621__$1));
});

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63622){
var self__ = this;
var _63622__$1 = this;
return self__.meta63621;
});

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async63620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63621","meta63621",2033582776,null)], null);
});

cljs.core.async.t_cljs$core$async63620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63620";

cljs.core.async.t_cljs$core$async63620.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async63620");
});

cljs.core.async.__GT_t_cljs$core$async63620 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async63620(f__$1,ch__$1,meta63621){
return (new cljs.core.async.t_cljs$core$async63620(f__$1,ch__$1,meta63621));
});

}

return (new cljs.core.async.t_cljs$core$async63620(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async63623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63623 = (function (p,ch,meta63624){
this.p = p;
this.ch = ch;
this.meta63624 = meta63624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_63625,meta63624__$1){
var self__ = this;
var _63625__$1 = this;
return (new cljs.core.async.t_cljs$core$async63623(self__.p,self__.ch,meta63624__$1));
});

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_63625){
var self__ = this;
var _63625__$1 = this;
return self__.meta63624;
});

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async63623.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async63623.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta63624","meta63624",-1893101873,null)], null);
});

cljs.core.async.t_cljs$core$async63623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63623";

cljs.core.async.t_cljs$core$async63623.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"cljs.core.async/t_cljs$core$async63623");
});

cljs.core.async.__GT_t_cljs$core$async63623 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async63623(p__$1,ch__$1,meta63624){
return (new cljs.core.async.t_cljs$core$async63623(p__$1,ch__$1,meta63624));
});

}

return (new cljs.core.async.t_cljs$core$async63623(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__63627 = arguments.length;
switch (G__63627) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35408__auto___63667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63667,out){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63667,out){
return (function (state_63648){
var state_val_63649 = (state_63648[(1)]);
if((state_val_63649 === (7))){
var inst_63644 = (state_63648[(2)]);
var state_63648__$1 = state_63648;
var statearr_63650_63668 = state_63648__$1;
(statearr_63650_63668[(2)] = inst_63644);

(statearr_63650_63668[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (1))){
var state_63648__$1 = state_63648;
var statearr_63651_63669 = state_63648__$1;
(statearr_63651_63669[(2)] = null);

(statearr_63651_63669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (4))){
var inst_63630 = (state_63648[(7)]);
var inst_63630__$1 = (state_63648[(2)]);
var inst_63631 = (inst_63630__$1 == null);
var state_63648__$1 = (function (){var statearr_63652 = state_63648;
(statearr_63652[(7)] = inst_63630__$1);

return statearr_63652;
})();
if(cljs.core.truth_(inst_63631)){
var statearr_63653_63670 = state_63648__$1;
(statearr_63653_63670[(1)] = (5));

} else {
var statearr_63654_63671 = state_63648__$1;
(statearr_63654_63671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (6))){
var inst_63630 = (state_63648[(7)]);
var inst_63635 = p.call(null,inst_63630);
var state_63648__$1 = state_63648;
if(cljs.core.truth_(inst_63635)){
var statearr_63655_63672 = state_63648__$1;
(statearr_63655_63672[(1)] = (8));

} else {
var statearr_63656_63673 = state_63648__$1;
(statearr_63656_63673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (3))){
var inst_63646 = (state_63648[(2)]);
var state_63648__$1 = state_63648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63648__$1,inst_63646);
} else {
if((state_val_63649 === (2))){
var state_63648__$1 = state_63648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63648__$1,(4),ch);
} else {
if((state_val_63649 === (11))){
var inst_63638 = (state_63648[(2)]);
var state_63648__$1 = state_63648;
var statearr_63657_63674 = state_63648__$1;
(statearr_63657_63674[(2)] = inst_63638);

(statearr_63657_63674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (9))){
var state_63648__$1 = state_63648;
var statearr_63658_63675 = state_63648__$1;
(statearr_63658_63675[(2)] = null);

(statearr_63658_63675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (5))){
var inst_63633 = cljs.core.async.close_BANG_.call(null,out);
var state_63648__$1 = state_63648;
var statearr_63659_63676 = state_63648__$1;
(statearr_63659_63676[(2)] = inst_63633);

(statearr_63659_63676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (10))){
var inst_63641 = (state_63648[(2)]);
var state_63648__$1 = (function (){var statearr_63660 = state_63648;
(statearr_63660[(8)] = inst_63641);

return statearr_63660;
})();
var statearr_63661_63677 = state_63648__$1;
(statearr_63661_63677[(2)] = null);

(statearr_63661_63677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63649 === (8))){
var inst_63630 = (state_63648[(7)]);
var state_63648__$1 = state_63648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63648__$1,(11),out,inst_63630);
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
});})(c__35408__auto___63667,out))
;
return ((function (switch__35318__auto__,c__35408__auto___63667,out){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63662 = [null,null,null,null,null,null,null,null,null];
(statearr_63662[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63662[(1)] = (1));

return statearr_63662;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63648){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63663){if((e63663 instanceof Object)){
var ex__35322__auto__ = e63663;
var statearr_63664_63678 = state_63648;
(statearr_63664_63678[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63679 = state_63648;
state_63648 = G__63679;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63648);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63667,out))
})();
var state__35410__auto__ = (function (){var statearr_63665 = f__35409__auto__.call(null);
(statearr_63665[(6)] = c__35408__auto___63667);

return statearr_63665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63667,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__63681 = arguments.length;
switch (G__63681) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35408__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto__){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto__){
return (function (state_63744){
var state_val_63745 = (state_63744[(1)]);
if((state_val_63745 === (7))){
var inst_63740 = (state_63744[(2)]);
var state_63744__$1 = state_63744;
var statearr_63746_63784 = state_63744__$1;
(statearr_63746_63784[(2)] = inst_63740);

(statearr_63746_63784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (20))){
var inst_63710 = (state_63744[(7)]);
var inst_63721 = (state_63744[(2)]);
var inst_63722 = cljs.core.next.call(null,inst_63710);
var inst_63696 = inst_63722;
var inst_63697 = null;
var inst_63698 = (0);
var inst_63699 = (0);
var state_63744__$1 = (function (){var statearr_63747 = state_63744;
(statearr_63747[(8)] = inst_63698);

(statearr_63747[(9)] = inst_63696);

(statearr_63747[(10)] = inst_63721);

(statearr_63747[(11)] = inst_63697);

(statearr_63747[(12)] = inst_63699);

return statearr_63747;
})();
var statearr_63748_63785 = state_63744__$1;
(statearr_63748_63785[(2)] = null);

(statearr_63748_63785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (1))){
var state_63744__$1 = state_63744;
var statearr_63749_63786 = state_63744__$1;
(statearr_63749_63786[(2)] = null);

(statearr_63749_63786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (4))){
var inst_63685 = (state_63744[(13)]);
var inst_63685__$1 = (state_63744[(2)]);
var inst_63686 = (inst_63685__$1 == null);
var state_63744__$1 = (function (){var statearr_63750 = state_63744;
(statearr_63750[(13)] = inst_63685__$1);

return statearr_63750;
})();
if(cljs.core.truth_(inst_63686)){
var statearr_63751_63787 = state_63744__$1;
(statearr_63751_63787[(1)] = (5));

} else {
var statearr_63752_63788 = state_63744__$1;
(statearr_63752_63788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (15))){
var state_63744__$1 = state_63744;
var statearr_63756_63789 = state_63744__$1;
(statearr_63756_63789[(2)] = null);

(statearr_63756_63789[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (21))){
var state_63744__$1 = state_63744;
var statearr_63757_63790 = state_63744__$1;
(statearr_63757_63790[(2)] = null);

(statearr_63757_63790[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (13))){
var inst_63698 = (state_63744[(8)]);
var inst_63696 = (state_63744[(9)]);
var inst_63697 = (state_63744[(11)]);
var inst_63699 = (state_63744[(12)]);
var inst_63706 = (state_63744[(2)]);
var inst_63707 = (inst_63699 + (1));
var tmp63753 = inst_63698;
var tmp63754 = inst_63696;
var tmp63755 = inst_63697;
var inst_63696__$1 = tmp63754;
var inst_63697__$1 = tmp63755;
var inst_63698__$1 = tmp63753;
var inst_63699__$1 = inst_63707;
var state_63744__$1 = (function (){var statearr_63758 = state_63744;
(statearr_63758[(8)] = inst_63698__$1);

(statearr_63758[(9)] = inst_63696__$1);

(statearr_63758[(11)] = inst_63697__$1);

(statearr_63758[(12)] = inst_63699__$1);

(statearr_63758[(14)] = inst_63706);

return statearr_63758;
})();
var statearr_63759_63791 = state_63744__$1;
(statearr_63759_63791[(2)] = null);

(statearr_63759_63791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (22))){
var state_63744__$1 = state_63744;
var statearr_63760_63792 = state_63744__$1;
(statearr_63760_63792[(2)] = null);

(statearr_63760_63792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (6))){
var inst_63685 = (state_63744[(13)]);
var inst_63694 = f.call(null,inst_63685);
var inst_63695 = cljs.core.seq.call(null,inst_63694);
var inst_63696 = inst_63695;
var inst_63697 = null;
var inst_63698 = (0);
var inst_63699 = (0);
var state_63744__$1 = (function (){var statearr_63761 = state_63744;
(statearr_63761[(8)] = inst_63698);

(statearr_63761[(9)] = inst_63696);

(statearr_63761[(11)] = inst_63697);

(statearr_63761[(12)] = inst_63699);

return statearr_63761;
})();
var statearr_63762_63793 = state_63744__$1;
(statearr_63762_63793[(2)] = null);

(statearr_63762_63793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (17))){
var inst_63710 = (state_63744[(7)]);
var inst_63714 = cljs.core.chunk_first.call(null,inst_63710);
var inst_63715 = cljs.core.chunk_rest.call(null,inst_63710);
var inst_63716 = cljs.core.count.call(null,inst_63714);
var inst_63696 = inst_63715;
var inst_63697 = inst_63714;
var inst_63698 = inst_63716;
var inst_63699 = (0);
var state_63744__$1 = (function (){var statearr_63763 = state_63744;
(statearr_63763[(8)] = inst_63698);

(statearr_63763[(9)] = inst_63696);

(statearr_63763[(11)] = inst_63697);

(statearr_63763[(12)] = inst_63699);

return statearr_63763;
})();
var statearr_63764_63794 = state_63744__$1;
(statearr_63764_63794[(2)] = null);

(statearr_63764_63794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (3))){
var inst_63742 = (state_63744[(2)]);
var state_63744__$1 = state_63744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63744__$1,inst_63742);
} else {
if((state_val_63745 === (12))){
var inst_63730 = (state_63744[(2)]);
var state_63744__$1 = state_63744;
var statearr_63765_63795 = state_63744__$1;
(statearr_63765_63795[(2)] = inst_63730);

(statearr_63765_63795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (2))){
var state_63744__$1 = state_63744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63744__$1,(4),in$);
} else {
if((state_val_63745 === (23))){
var inst_63738 = (state_63744[(2)]);
var state_63744__$1 = state_63744;
var statearr_63766_63796 = state_63744__$1;
(statearr_63766_63796[(2)] = inst_63738);

(statearr_63766_63796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (19))){
var inst_63725 = (state_63744[(2)]);
var state_63744__$1 = state_63744;
var statearr_63767_63797 = state_63744__$1;
(statearr_63767_63797[(2)] = inst_63725);

(statearr_63767_63797[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (11))){
var inst_63696 = (state_63744[(9)]);
var inst_63710 = (state_63744[(7)]);
var inst_63710__$1 = cljs.core.seq.call(null,inst_63696);
var state_63744__$1 = (function (){var statearr_63768 = state_63744;
(statearr_63768[(7)] = inst_63710__$1);

return statearr_63768;
})();
if(inst_63710__$1){
var statearr_63769_63798 = state_63744__$1;
(statearr_63769_63798[(1)] = (14));

} else {
var statearr_63770_63799 = state_63744__$1;
(statearr_63770_63799[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (9))){
var inst_63732 = (state_63744[(2)]);
var inst_63733 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_63744__$1 = (function (){var statearr_63771 = state_63744;
(statearr_63771[(15)] = inst_63732);

return statearr_63771;
})();
if(cljs.core.truth_(inst_63733)){
var statearr_63772_63800 = state_63744__$1;
(statearr_63772_63800[(1)] = (21));

} else {
var statearr_63773_63801 = state_63744__$1;
(statearr_63773_63801[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (5))){
var inst_63688 = cljs.core.async.close_BANG_.call(null,out);
var state_63744__$1 = state_63744;
var statearr_63774_63802 = state_63744__$1;
(statearr_63774_63802[(2)] = inst_63688);

(statearr_63774_63802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (14))){
var inst_63710 = (state_63744[(7)]);
var inst_63712 = cljs.core.chunked_seq_QMARK_.call(null,inst_63710);
var state_63744__$1 = state_63744;
if(inst_63712){
var statearr_63775_63803 = state_63744__$1;
(statearr_63775_63803[(1)] = (17));

} else {
var statearr_63776_63804 = state_63744__$1;
(statearr_63776_63804[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (16))){
var inst_63728 = (state_63744[(2)]);
var state_63744__$1 = state_63744;
var statearr_63777_63805 = state_63744__$1;
(statearr_63777_63805[(2)] = inst_63728);

(statearr_63777_63805[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63745 === (10))){
var inst_63697 = (state_63744[(11)]);
var inst_63699 = (state_63744[(12)]);
var inst_63704 = cljs.core._nth.call(null,inst_63697,inst_63699);
var state_63744__$1 = state_63744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63744__$1,(13),out,inst_63704);
} else {
if((state_val_63745 === (18))){
var inst_63710 = (state_63744[(7)]);
var inst_63719 = cljs.core.first.call(null,inst_63710);
var state_63744__$1 = state_63744;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63744__$1,(20),out,inst_63719);
} else {
if((state_val_63745 === (8))){
var inst_63698 = (state_63744[(8)]);
var inst_63699 = (state_63744[(12)]);
var inst_63701 = (inst_63699 < inst_63698);
var inst_63702 = inst_63701;
var state_63744__$1 = state_63744;
if(cljs.core.truth_(inst_63702)){
var statearr_63778_63806 = state_63744__$1;
(statearr_63778_63806[(1)] = (10));

} else {
var statearr_63779_63807 = state_63744__$1;
(statearr_63779_63807[(1)] = (11));

}

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
});})(c__35408__auto__))
;
return ((function (switch__35318__auto__,c__35408__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35319__auto____0 = (function (){
var statearr_63780 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63780[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35319__auto__);

(statearr_63780[(1)] = (1));

return statearr_63780;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35319__auto____1 = (function (state_63744){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63781){if((e63781 instanceof Object)){
var ex__35322__auto__ = e63781;
var statearr_63782_63808 = state_63744;
(statearr_63782_63808[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63781;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63809 = state_63744;
state_63744 = G__63809;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35319__auto__ = function(state_63744){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35319__auto____1.call(this,state_63744);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto__))
})();
var state__35410__auto__ = (function (){var statearr_63783 = f__35409__auto__.call(null);
(statearr_63783[(6)] = c__35408__auto__);

return statearr_63783;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto__))
);

return c__35408__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__63811 = arguments.length;
switch (G__63811) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__63814 = arguments.length;
switch (G__63814) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__63817 = arguments.length;
switch (G__63817) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35408__auto___63864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63864,out){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63864,out){
return (function (state_63841){
var state_val_63842 = (state_63841[(1)]);
if((state_val_63842 === (7))){
var inst_63836 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63843_63865 = state_63841__$1;
(statearr_63843_63865[(2)] = inst_63836);

(statearr_63843_63865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (1))){
var inst_63818 = null;
var state_63841__$1 = (function (){var statearr_63844 = state_63841;
(statearr_63844[(7)] = inst_63818);

return statearr_63844;
})();
var statearr_63845_63866 = state_63841__$1;
(statearr_63845_63866[(2)] = null);

(statearr_63845_63866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (4))){
var inst_63821 = (state_63841[(8)]);
var inst_63821__$1 = (state_63841[(2)]);
var inst_63822 = (inst_63821__$1 == null);
var inst_63823 = cljs.core.not.call(null,inst_63822);
var state_63841__$1 = (function (){var statearr_63846 = state_63841;
(statearr_63846[(8)] = inst_63821__$1);

return statearr_63846;
})();
if(inst_63823){
var statearr_63847_63867 = state_63841__$1;
(statearr_63847_63867[(1)] = (5));

} else {
var statearr_63848_63868 = state_63841__$1;
(statearr_63848_63868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (6))){
var state_63841__$1 = state_63841;
var statearr_63849_63869 = state_63841__$1;
(statearr_63849_63869[(2)] = null);

(statearr_63849_63869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (3))){
var inst_63838 = (state_63841[(2)]);
var inst_63839 = cljs.core.async.close_BANG_.call(null,out);
var state_63841__$1 = (function (){var statearr_63850 = state_63841;
(statearr_63850[(9)] = inst_63838);

return statearr_63850;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63841__$1,inst_63839);
} else {
if((state_val_63842 === (2))){
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63841__$1,(4),ch);
} else {
if((state_val_63842 === (11))){
var inst_63821 = (state_63841[(8)]);
var inst_63830 = (state_63841[(2)]);
var inst_63818 = inst_63821;
var state_63841__$1 = (function (){var statearr_63851 = state_63841;
(statearr_63851[(10)] = inst_63830);

(statearr_63851[(7)] = inst_63818);

return statearr_63851;
})();
var statearr_63852_63870 = state_63841__$1;
(statearr_63852_63870[(2)] = null);

(statearr_63852_63870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (9))){
var inst_63821 = (state_63841[(8)]);
var state_63841__$1 = state_63841;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63841__$1,(11),out,inst_63821);
} else {
if((state_val_63842 === (5))){
var inst_63821 = (state_63841[(8)]);
var inst_63818 = (state_63841[(7)]);
var inst_63825 = cljs.core._EQ_.call(null,inst_63821,inst_63818);
var state_63841__$1 = state_63841;
if(inst_63825){
var statearr_63854_63871 = state_63841__$1;
(statearr_63854_63871[(1)] = (8));

} else {
var statearr_63855_63872 = state_63841__$1;
(statearr_63855_63872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (10))){
var inst_63833 = (state_63841[(2)]);
var state_63841__$1 = state_63841;
var statearr_63856_63873 = state_63841__$1;
(statearr_63856_63873[(2)] = inst_63833);

(statearr_63856_63873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63842 === (8))){
var inst_63818 = (state_63841[(7)]);
var tmp63853 = inst_63818;
var inst_63818__$1 = tmp63853;
var state_63841__$1 = (function (){var statearr_63857 = state_63841;
(statearr_63857[(7)] = inst_63818__$1);

return statearr_63857;
})();
var statearr_63858_63874 = state_63841__$1;
(statearr_63858_63874[(2)] = null);

(statearr_63858_63874[(1)] = (2));


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
}
}
}
});})(c__35408__auto___63864,out))
;
return ((function (switch__35318__auto__,c__35408__auto___63864,out){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63859 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_63859[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63859[(1)] = (1));

return statearr_63859;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63841){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63841);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63860){if((e63860 instanceof Object)){
var ex__35322__auto__ = e63860;
var statearr_63861_63875 = state_63841;
(statearr_63861_63875[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63841);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63860;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63876 = state_63841;
state_63841 = G__63876;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63841){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63841);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63864,out))
})();
var state__35410__auto__ = (function (){var statearr_63862 = f__35409__auto__.call(null);
(statearr_63862[(6)] = c__35408__auto___63864);

return statearr_63862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63864,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__63878 = arguments.length;
switch (G__63878) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35408__auto___63944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___63944,out){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___63944,out){
return (function (state_63916){
var state_val_63917 = (state_63916[(1)]);
if((state_val_63917 === (7))){
var inst_63912 = (state_63916[(2)]);
var state_63916__$1 = state_63916;
var statearr_63918_63945 = state_63916__$1;
(statearr_63918_63945[(2)] = inst_63912);

(statearr_63918_63945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (1))){
var inst_63879 = (new Array(n));
var inst_63880 = inst_63879;
var inst_63881 = (0);
var state_63916__$1 = (function (){var statearr_63919 = state_63916;
(statearr_63919[(7)] = inst_63881);

(statearr_63919[(8)] = inst_63880);

return statearr_63919;
})();
var statearr_63920_63946 = state_63916__$1;
(statearr_63920_63946[(2)] = null);

(statearr_63920_63946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (4))){
var inst_63884 = (state_63916[(9)]);
var inst_63884__$1 = (state_63916[(2)]);
var inst_63885 = (inst_63884__$1 == null);
var inst_63886 = cljs.core.not.call(null,inst_63885);
var state_63916__$1 = (function (){var statearr_63921 = state_63916;
(statearr_63921[(9)] = inst_63884__$1);

return statearr_63921;
})();
if(inst_63886){
var statearr_63922_63947 = state_63916__$1;
(statearr_63922_63947[(1)] = (5));

} else {
var statearr_63923_63948 = state_63916__$1;
(statearr_63923_63948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (15))){
var inst_63906 = (state_63916[(2)]);
var state_63916__$1 = state_63916;
var statearr_63924_63949 = state_63916__$1;
(statearr_63924_63949[(2)] = inst_63906);

(statearr_63924_63949[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (13))){
var state_63916__$1 = state_63916;
var statearr_63925_63950 = state_63916__$1;
(statearr_63925_63950[(2)] = null);

(statearr_63925_63950[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (6))){
var inst_63881 = (state_63916[(7)]);
var inst_63902 = (inst_63881 > (0));
var state_63916__$1 = state_63916;
if(cljs.core.truth_(inst_63902)){
var statearr_63926_63951 = state_63916__$1;
(statearr_63926_63951[(1)] = (12));

} else {
var statearr_63927_63952 = state_63916__$1;
(statearr_63927_63952[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (3))){
var inst_63914 = (state_63916[(2)]);
var state_63916__$1 = state_63916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63916__$1,inst_63914);
} else {
if((state_val_63917 === (12))){
var inst_63880 = (state_63916[(8)]);
var inst_63904 = cljs.core.vec.call(null,inst_63880);
var state_63916__$1 = state_63916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63916__$1,(15),out,inst_63904);
} else {
if((state_val_63917 === (2))){
var state_63916__$1 = state_63916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63916__$1,(4),ch);
} else {
if((state_val_63917 === (11))){
var inst_63896 = (state_63916[(2)]);
var inst_63897 = (new Array(n));
var inst_63880 = inst_63897;
var inst_63881 = (0);
var state_63916__$1 = (function (){var statearr_63928 = state_63916;
(statearr_63928[(10)] = inst_63896);

(statearr_63928[(7)] = inst_63881);

(statearr_63928[(8)] = inst_63880);

return statearr_63928;
})();
var statearr_63929_63953 = state_63916__$1;
(statearr_63929_63953[(2)] = null);

(statearr_63929_63953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (9))){
var inst_63880 = (state_63916[(8)]);
var inst_63894 = cljs.core.vec.call(null,inst_63880);
var state_63916__$1 = state_63916;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63916__$1,(11),out,inst_63894);
} else {
if((state_val_63917 === (5))){
var inst_63884 = (state_63916[(9)]);
var inst_63881 = (state_63916[(7)]);
var inst_63880 = (state_63916[(8)]);
var inst_63889 = (state_63916[(11)]);
var inst_63888 = (inst_63880[inst_63881] = inst_63884);
var inst_63889__$1 = (inst_63881 + (1));
var inst_63890 = (inst_63889__$1 < n);
var state_63916__$1 = (function (){var statearr_63930 = state_63916;
(statearr_63930[(12)] = inst_63888);

(statearr_63930[(11)] = inst_63889__$1);

return statearr_63930;
})();
if(cljs.core.truth_(inst_63890)){
var statearr_63931_63954 = state_63916__$1;
(statearr_63931_63954[(1)] = (8));

} else {
var statearr_63932_63955 = state_63916__$1;
(statearr_63932_63955[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (14))){
var inst_63909 = (state_63916[(2)]);
var inst_63910 = cljs.core.async.close_BANG_.call(null,out);
var state_63916__$1 = (function (){var statearr_63934 = state_63916;
(statearr_63934[(13)] = inst_63909);

return statearr_63934;
})();
var statearr_63935_63956 = state_63916__$1;
(statearr_63935_63956[(2)] = inst_63910);

(statearr_63935_63956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (10))){
var inst_63900 = (state_63916[(2)]);
var state_63916__$1 = state_63916;
var statearr_63936_63957 = state_63916__$1;
(statearr_63936_63957[(2)] = inst_63900);

(statearr_63936_63957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63917 === (8))){
var inst_63880 = (state_63916[(8)]);
var inst_63889 = (state_63916[(11)]);
var tmp63933 = inst_63880;
var inst_63880__$1 = tmp63933;
var inst_63881 = inst_63889;
var state_63916__$1 = (function (){var statearr_63937 = state_63916;
(statearr_63937[(7)] = inst_63881);

(statearr_63937[(8)] = inst_63880__$1);

return statearr_63937;
})();
var statearr_63938_63958 = state_63916__$1;
(statearr_63938_63958[(2)] = null);

(statearr_63938_63958[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__35408__auto___63944,out))
;
return ((function (switch__35318__auto__,c__35408__auto___63944,out){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_63939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63939[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_63939[(1)] = (1));

return statearr_63939;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_63916){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_63916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e63940){if((e63940 instanceof Object)){
var ex__35322__auto__ = e63940;
var statearr_63941_63959 = state_63916;
(statearr_63941_63959[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63960 = state_63916;
state_63916 = G__63960;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_63916){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_63916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___63944,out))
})();
var state__35410__auto__ = (function (){var statearr_63942 = f__35409__auto__.call(null);
(statearr_63942[(6)] = c__35408__auto___63944);

return statearr_63942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___63944,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__63962 = arguments.length;
switch (G__63962) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35408__auto___64032 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35408__auto___64032,out){
return (function (){
var f__35409__auto__ = (function (){var switch__35318__auto__ = ((function (c__35408__auto___64032,out){
return (function (state_64004){
var state_val_64005 = (state_64004[(1)]);
if((state_val_64005 === (7))){
var inst_64000 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
var statearr_64006_64033 = state_64004__$1;
(statearr_64006_64033[(2)] = inst_64000);

(statearr_64006_64033[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (1))){
var inst_63963 = [];
var inst_63964 = inst_63963;
var inst_63965 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64004__$1 = (function (){var statearr_64007 = state_64004;
(statearr_64007[(7)] = inst_63965);

(statearr_64007[(8)] = inst_63964);

return statearr_64007;
})();
var statearr_64008_64034 = state_64004__$1;
(statearr_64008_64034[(2)] = null);

(statearr_64008_64034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (4))){
var inst_63968 = (state_64004[(9)]);
var inst_63968__$1 = (state_64004[(2)]);
var inst_63969 = (inst_63968__$1 == null);
var inst_63970 = cljs.core.not.call(null,inst_63969);
var state_64004__$1 = (function (){var statearr_64009 = state_64004;
(statearr_64009[(9)] = inst_63968__$1);

return statearr_64009;
})();
if(inst_63970){
var statearr_64010_64035 = state_64004__$1;
(statearr_64010_64035[(1)] = (5));

} else {
var statearr_64011_64036 = state_64004__$1;
(statearr_64011_64036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (15))){
var inst_63994 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
var statearr_64012_64037 = state_64004__$1;
(statearr_64012_64037[(2)] = inst_63994);

(statearr_64012_64037[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (13))){
var state_64004__$1 = state_64004;
var statearr_64013_64038 = state_64004__$1;
(statearr_64013_64038[(2)] = null);

(statearr_64013_64038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (6))){
var inst_63964 = (state_64004[(8)]);
var inst_63989 = inst_63964.length;
var inst_63990 = (inst_63989 > (0));
var state_64004__$1 = state_64004;
if(cljs.core.truth_(inst_63990)){
var statearr_64014_64039 = state_64004__$1;
(statearr_64014_64039[(1)] = (12));

} else {
var statearr_64015_64040 = state_64004__$1;
(statearr_64015_64040[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (3))){
var inst_64002 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64004__$1,inst_64002);
} else {
if((state_val_64005 === (12))){
var inst_63964 = (state_64004[(8)]);
var inst_63992 = cljs.core.vec.call(null,inst_63964);
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64004__$1,(15),out,inst_63992);
} else {
if((state_val_64005 === (2))){
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64004__$1,(4),ch);
} else {
if((state_val_64005 === (11))){
var inst_63972 = (state_64004[(10)]);
var inst_63968 = (state_64004[(9)]);
var inst_63982 = (state_64004[(2)]);
var inst_63983 = [];
var inst_63984 = inst_63983.push(inst_63968);
var inst_63964 = inst_63983;
var inst_63965 = inst_63972;
var state_64004__$1 = (function (){var statearr_64016 = state_64004;
(statearr_64016[(7)] = inst_63965);

(statearr_64016[(11)] = inst_63982);

(statearr_64016[(8)] = inst_63964);

(statearr_64016[(12)] = inst_63984);

return statearr_64016;
})();
var statearr_64017_64041 = state_64004__$1;
(statearr_64017_64041[(2)] = null);

(statearr_64017_64041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (9))){
var inst_63964 = (state_64004[(8)]);
var inst_63980 = cljs.core.vec.call(null,inst_63964);
var state_64004__$1 = state_64004;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64004__$1,(11),out,inst_63980);
} else {
if((state_val_64005 === (5))){
var inst_63965 = (state_64004[(7)]);
var inst_63972 = (state_64004[(10)]);
var inst_63968 = (state_64004[(9)]);
var inst_63972__$1 = f.call(null,inst_63968);
var inst_63973 = cljs.core._EQ_.call(null,inst_63972__$1,inst_63965);
var inst_63974 = cljs.core.keyword_identical_QMARK_.call(null,inst_63965,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_63975 = (inst_63973) || (inst_63974);
var state_64004__$1 = (function (){var statearr_64018 = state_64004;
(statearr_64018[(10)] = inst_63972__$1);

return statearr_64018;
})();
if(cljs.core.truth_(inst_63975)){
var statearr_64019_64042 = state_64004__$1;
(statearr_64019_64042[(1)] = (8));

} else {
var statearr_64020_64043 = state_64004__$1;
(statearr_64020_64043[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (14))){
var inst_63997 = (state_64004[(2)]);
var inst_63998 = cljs.core.async.close_BANG_.call(null,out);
var state_64004__$1 = (function (){var statearr_64022 = state_64004;
(statearr_64022[(13)] = inst_63997);

return statearr_64022;
})();
var statearr_64023_64044 = state_64004__$1;
(statearr_64023_64044[(2)] = inst_63998);

(statearr_64023_64044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (10))){
var inst_63987 = (state_64004[(2)]);
var state_64004__$1 = state_64004;
var statearr_64024_64045 = state_64004__$1;
(statearr_64024_64045[(2)] = inst_63987);

(statearr_64024_64045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64005 === (8))){
var inst_63972 = (state_64004[(10)]);
var inst_63964 = (state_64004[(8)]);
var inst_63968 = (state_64004[(9)]);
var inst_63977 = inst_63964.push(inst_63968);
var tmp64021 = inst_63964;
var inst_63964__$1 = tmp64021;
var inst_63965 = inst_63972;
var state_64004__$1 = (function (){var statearr_64025 = state_64004;
(statearr_64025[(7)] = inst_63965);

(statearr_64025[(8)] = inst_63964__$1);

(statearr_64025[(14)] = inst_63977);

return statearr_64025;
})();
var statearr_64026_64046 = state_64004__$1;
(statearr_64026_64046[(2)] = null);

(statearr_64026_64046[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__35408__auto___64032,out))
;
return ((function (switch__35318__auto__,c__35408__auto___64032,out){
return (function() {
var cljs$core$async$state_machine__35319__auto__ = null;
var cljs$core$async$state_machine__35319__auto____0 = (function (){
var statearr_64027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64027[(0)] = cljs$core$async$state_machine__35319__auto__);

(statearr_64027[(1)] = (1));

return statearr_64027;
});
var cljs$core$async$state_machine__35319__auto____1 = (function (state_64004){
while(true){
var ret_value__35320__auto__ = (function (){try{while(true){
var result__35321__auto__ = switch__35318__auto__.call(null,state_64004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35321__auto__;
}
break;
}
}catch (e64028){if((e64028 instanceof Object)){
var ex__35322__auto__ = e64028;
var statearr_64029_64047 = state_64004;
(statearr_64029_64047[(5)] = ex__35322__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64048 = state_64004;
state_64004 = G__64048;
continue;
} else {
return ret_value__35320__auto__;
}
break;
}
});
cljs$core$async$state_machine__35319__auto__ = function(state_64004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35319__auto____1.call(this,state_64004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35319__auto____0;
cljs$core$async$state_machine__35319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35319__auto____1;
return cljs$core$async$state_machine__35319__auto__;
})()
;})(switch__35318__auto__,c__35408__auto___64032,out))
})();
var state__35410__auto__ = (function (){var statearr_64030 = f__35409__auto__.call(null);
(statearr_64030[(6)] = c__35408__auto___64032);

return statearr_64030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35410__auto__);
});})(c__35408__auto___64032,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1523638683999
