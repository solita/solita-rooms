// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('tuck.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('cljs.spec.alpha');
/**
 * Bound during process-event to the current UI send function.
 */
tuck.core._STAR_current_send_function_STAR_ = null;
/**
 * Bound to false when replaying events to disable side-effects.
 */
tuck.core._STAR_allow_actions_STAR_ = true;

/**
 * @interface
 */
tuck.core.Event = function(){};

/**
 * Process this event for the current app state. Must return new state.
 */
tuck.core.process_event = (function tuck$core$process_event(this$,app_state){
if((!((this$ == null))) && (!((this$.tuck$core$Event$process_event$arity$2 == null)))){
return this$.tuck$core$Event$process_event$arity$2(this$,app_state);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (tuck.core.process_event[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return (m__9650__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto__.cljs$core$IFn$_invoke$arity$2(this$,app_state) : m__9650__auto__.call(null,this$,app_state));
} else {
var m__9650__auto____$1 = (tuck.core.process_event["_"]);
if(!((m__9650__auto____$1 == null))){
return (m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9650__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,app_state) : m__9650__auto____$1.call(null,this$,app_state));
} else {
throw cljs.core.missing_protocol("Event.process-event",this$);
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
 * @implements {tuck.core.Event}
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
tuck.core.UpdateAt = (function (event,key_path,__meta,__extmap,__hash){
this.event = event;
this.key_path = key_path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
tuck.core.UpdateAt.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

tuck.core.UpdateAt.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k24699,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__24703 = k24699;
var G__24703__$1 = (((G__24703 instanceof cljs.core.Keyword))?G__24703.fqn:null);
switch (G__24703__$1) {
case "event":
return self__.event;

break;
case "key-path":
return self__.key_path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k24699,else__9607__auto__);

}
});

tuck.core.UpdateAt.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#tuck.core.UpdateAt{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$event,self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_path,self__.key_path],null))], null),self__.__extmap));
});

tuck.core.UpdateAt.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24698){
var self__ = this;
var G__24698__$1 = this;
return (new cljs.core.RecordIter((0),G__24698__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$event,cljs.core.cst$kw$key_DASH_path], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

tuck.core.UpdateAt.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

tuck.core.UpdateAt.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new tuck.core.UpdateAt(self__.event,self__.key_path,self__.__meta,self__.__extmap,self__.__hash));
});

tuck.core.UpdateAt.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

tuck.core.UpdateAt.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__24704 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (181669274 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__24704(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

tuck.core.UpdateAt.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24700,other24701){
var self__ = this;
var this24700__$1 = this;
return (!((other24701 == null))) && ((this24700__$1.constructor === other24701.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24700__$1.event,other24701.event)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24700__$1.key_path,other24701.key_path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this24700__$1.__extmap,other24701.__extmap));
});

tuck.core.UpdateAt.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

tuck.core.UpdateAt.prototype.tuck$core$Event$process_event$arity$2 = (function (_,app){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app,self__.key_path,((function (___$1){
return (function (p1__24697_SHARP_){
return tuck.core.process_event(self__.event,p1__24697_SHARP_);
});})(___$1))
);
});

tuck.core.UpdateAt.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$event,null,cljs.core.cst$kw$key_DASH_path,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new tuck.core.UpdateAt(self__.event,self__.key_path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

tuck.core.UpdateAt.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__24698){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__24705 = cljs.core.keyword_identical_QMARK_;
var expr__24706 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__24708 = cljs.core.cst$kw$event;
var G__24709 = expr__24706;
return (pred__24705.cljs$core$IFn$_invoke$arity$2 ? pred__24705.cljs$core$IFn$_invoke$arity$2(G__24708,G__24709) : pred__24705.call(null,G__24708,G__24709));
})())){
return (new tuck.core.UpdateAt(G__24698,self__.key_path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__24710 = cljs.core.cst$kw$key_DASH_path;
var G__24711 = expr__24706;
return (pred__24705.cljs$core$IFn$_invoke$arity$2 ? pred__24705.cljs$core$IFn$_invoke$arity$2(G__24710,G__24711) : pred__24705.call(null,G__24710,G__24711));
})())){
return (new tuck.core.UpdateAt(self__.event,G__24698,self__.__meta,self__.__extmap,null));
} else {
return (new tuck.core.UpdateAt(self__.event,self__.key_path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__24698),null));
}
}
});

tuck.core.UpdateAt.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$event,self__.event],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$key_DASH_path,self__.key_path],null))], null),self__.__extmap));
});

tuck.core.UpdateAt.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__24698){
var self__ = this;
var this__9603__auto____$1 = this;
return (new tuck.core.UpdateAt(self__.event,self__.key_path,G__24698,self__.__extmap,self__.__hash));
});

tuck.core.UpdateAt.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

tuck.core.UpdateAt.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$event,cljs.core.cst$sym$key_DASH_path], null);
});

tuck.core.UpdateAt.cljs$lang$type = true;

tuck.core.UpdateAt.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"tuck.core/UpdateAt");
});

tuck.core.UpdateAt.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"tuck.core/UpdateAt");
});

tuck.core.__GT_UpdateAt = (function tuck$core$__GT_UpdateAt(event,key_path){
return (new tuck.core.UpdateAt(event,key_path,null,null,null));
});

tuck.core.map__GT_UpdateAt = (function tuck$core$map__GT_UpdateAt(G__24702){
return (new tuck.core.UpdateAt(cljs.core.cst$kw$event.cljs$core$IFn$_invoke$arity$1(G__24702),cljs.core.cst$kw$key_DASH_path.cljs$core$IFn$_invoke$arity$1(G__24702),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__24702,cljs.core.cst$kw$event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$key_DASH_path], 0))),null));
});

/**
 * Returns a UI event handler that sends the event's value
 *   to the UI message processing after calling constructor with it.
 */
tuck.core.send_value_BANG_ = (function tuck$core$send_value_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___24717 = arguments.length;
var i__10196__auto___24718 = (0);
while(true){
if((i__10196__auto___24718 < len__10195__auto___24717)){
args__10202__auto__.push((arguments[i__10196__auto___24718]));

var G__24719 = (i__10196__auto___24718 + (1));
i__10196__auto___24718 = G__24719;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return tuck.core.send_value_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

tuck.core.send_value_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e_BANG_,constructor$,args){
return (function (e){
e.stopPropagation();

var G__24716 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(constructor$,e.target.value,args);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__24716) : e_BANG_.call(null,G__24716));
});
});

tuck.core.send_value_BANG_.cljs$lang$maxFixedArity = (2);

tuck.core.send_value_BANG_.cljs$lang$applyTo = (function (seq24713){
var G__24714 = cljs.core.first(seq24713);
var seq24713__$1 = cljs.core.next(seq24713);
var G__24715 = cljs.core.first(seq24713__$1);
var seq24713__$2 = cljs.core.next(seq24713__$1);
return tuck.core.send_value_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24714,G__24715,seq24713__$2);
});

/**
 * Get the current send function. Must be called from within process-event.
 */
tuck.core.current_send_function = (function tuck$core$current_send_function(){
if(!((tuck.core._STAR_current_send_function_STAR_ == null))){
} else {
throw (new Error(["Assert failed: ","current-send-function called outside of process-event","\n","(not (nil? *current-send-function*))"].join('')));
}

return tuck.core._STAR_current_send_function_STAR_;
});
/**
 * Returns a callback which sends its argument to the UI after wrapping
 *   it with the given constructor. Must be called from within process-event.
 */
tuck.core.send_async_BANG_ = (function tuck$core$send_async_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___24723 = arguments.length;
var i__10196__auto___24724 = (0);
while(true){
if((i__10196__auto___24724 < len__10195__auto___24723)){
args__10202__auto__.push((arguments[i__10196__auto___24724]));

var G__24725 = (i__10196__auto___24724 + (1));
i__10196__auto___24724 = G__24725;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return tuck.core.send_async_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

tuck.core.send_async_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (constructor$,args){
if(!((tuck.core._STAR_current_send_function_STAR_ == null))){
} else {
throw (new Error(["Assert failed: ","send-async! called outside of process-event","\n","(not (nil? *current-send-function*))"].join('')));
}

var e_BANG_ = tuck.core._STAR_current_send_function_STAR_;
return ((function (e_BANG_){
return (function() { 
var G__24726__delegate = function (values){
var G__24722 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(constructor$,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(values,args));
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__24722) : e_BANG_.call(null,G__24722));
};
var G__24726 = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__24727__i = 0, G__24727__a = new Array(arguments.length -  0);
while (G__24727__i < G__24727__a.length) {G__24727__a[G__24727__i] = arguments[G__24727__i + 0]; ++G__24727__i;}
  values = new cljs.core.IndexedSeq(G__24727__a,0,null);
} 
return G__24726__delegate.call(this,values);};
G__24726.cljs$lang$maxFixedArity = 0;
G__24726.cljs$lang$applyTo = (function (arglist__24728){
var values = cljs.core.seq(arglist__24728);
return G__24726__delegate(values);
});
G__24726.cljs$core$IFn$_invoke$arity$variadic = G__24726__delegate;
return G__24726;
})()
;
;})(e_BANG_))
});

tuck.core.send_async_BANG_.cljs$lang$maxFixedArity = (1);

tuck.core.send_async_BANG_.cljs$lang$applyTo = (function (seq24720){
var G__24721 = cljs.core.first(seq24720);
var seq24720__$1 = cljs.core.next(seq24720);
return tuck.core.send_async_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24721,seq24720__$1);
});

/**
 * Run an action function that may side-effect and schedule asynchronous actions.
 *   The first parameter of the action is the current send function. Actions only run
 *   when *allow-actions* is true.
 */
tuck.core.action_BANG_ = (function tuck$core$action_BANG_(var_args){
var args__10202__auto__ = [];
var len__10195__auto___24731 = arguments.length;
var i__10196__auto___24732 = (0);
while(true){
if((i__10196__auto___24732 < len__10195__auto___24731)){
args__10202__auto__.push((arguments[i__10196__auto___24732]));

var G__24733 = (i__10196__auto___24732 + (1));
i__10196__auto___24732 = G__24733;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return tuck.core.action_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

tuck.core.action_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (action_fn,args){
if(!((tuck.core._STAR_current_send_function_STAR_ == null))){
} else {
throw (new Error(["Assert failed: ","action! called outside of process-event","\n","(not (nil? *current-send-function*))"].join('')));
}

if(tuck.core._STAR_allow_actions_STAR_){
var e_BANG_ = tuck.core._STAR_current_send_function_STAR_;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(action_fn,e_BANG_,args);
} else {
return null;
}
});

tuck.core.action_BANG_.cljs$lang$maxFixedArity = (1);

tuck.core.action_BANG_.cljs$lang$applyTo = (function (seq24729){
var G__24730 = cljs.core.first(seq24729);
var seq24729__$1 = cljs.core.next(seq24729);
return tuck.core.action_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24730,seq24729__$1);
});

/**
 * Wrap the given UI send function with the given constructor
 *   and optional arguments. Returns a new UI send function where
 *   each event is mapped with the constructor before being sent.
 */
tuck.core.wrap = (function tuck$core$wrap(var_args){
var args__10202__auto__ = [];
var len__10195__auto___24740 = arguments.length;
var i__10196__auto___24741 = (0);
while(true){
if((i__10196__auto___24741 < len__10195__auto___24740)){
args__10202__auto__.push((arguments[i__10196__auto___24741]));

var G__24742 = (i__10196__auto___24741 + (1));
i__10196__auto___24741 = G__24742;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((2) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((2)),(0),null)):null);
return tuck.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10203__auto__);
});

tuck.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (e_BANG_,wrap_constructor,args){
return (function tuck$core$ui_send(event){
if(((!((event == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === event.tuck$core$Event$)))?true:(((!event.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(tuck.core.Event,event):false)):cljs.core.native_satisfies_QMARK_(tuck.core.Event,event))){
} else {
throw (new Error("Assert failed: (satisfies? Event event)"));
}

var _STAR_current_send_function_STAR_24738 = tuck.core._STAR_current_send_function_STAR_;
tuck.core._STAR_current_send_function_STAR_ = (function (){var or__8916__auto__ = tuck.core._STAR_current_send_function_STAR_;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return tuck$core$ui_send;
}
})();

try{var G__24739 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(wrap_constructor,event,args);
return (e_BANG_.cljs$core$IFn$_invoke$arity$1 ? e_BANG_.cljs$core$IFn$_invoke$arity$1(G__24739) : e_BANG_.call(null,G__24739));
}finally {tuck.core._STAR_current_send_function_STAR_ = _STAR_current_send_function_STAR_24738;
}});
});

tuck.core.wrap.cljs$lang$maxFixedArity = (2);

tuck.core.wrap.cljs$lang$applyTo = (function (seq24734){
var G__24735 = cljs.core.first(seq24734);
var seq24734__$1 = cljs.core.next(seq24734);
var G__24736 = cljs.core.first(seq24734__$1);
var seq24734__$2 = cljs.core.next(seq24734__$1);
return tuck.core.wrap.cljs$core$IFn$_invoke$arity$variadic(G__24735,G__24736,seq24734__$2);
});

/**
 * Wrap the given UI send function with an UpdateAt event for
 *   the given key-path.
 */
tuck.core.wrap_path = (function tuck$core$wrap_path(var_args){
var args__10202__auto__ = [];
var len__10195__auto___24745 = arguments.length;
var i__10196__auto___24746 = (0);
while(true){
if((i__10196__auto___24746 < len__10195__auto___24745)){
args__10202__auto__.push((arguments[i__10196__auto___24746]));

var G__24747 = (i__10196__auto___24746 + (1));
i__10196__auto___24746 = G__24747;
continue;
} else {
}
break;
}

var argseq__10203__auto__ = ((((1) < args__10202__auto__.length))?(new cljs.core.IndexedSeq(args__10202__auto__.slice((1)),(0),null)):null);
return tuck.core.wrap_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10203__auto__);
});

tuck.core.wrap_path.cljs$core$IFn$_invoke$arity$variadic = (function (e_BANG_,key_path){
return tuck.core.wrap.cljs$core$IFn$_invoke$arity$variadic(e_BANG_,tuck.core.__GT_UpdateAt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vec(key_path)], 0));
});

tuck.core.wrap_path.cljs$lang$maxFixedArity = (1);

tuck.core.wrap_path.cljs$lang$applyTo = (function (seq24743){
var G__24744 = cljs.core.first(seq24743);
var seq24743__$1 = cljs.core.next(seq24743);
return tuck.core.wrap_path.cljs$core$IFn$_invoke$arity$variadic(G__24744,seq24743__$1);
});

tuck.core.validate = (function tuck$core$validate(previous_app_state,event,new_app_state,spec,on_invalid_state){
if(cljs.core.truth_((function (){var or__8916__auto__ = (spec == null);
if(or__8916__auto__){
return or__8916__auto__;
} else {
return cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(spec,new_app_state);
}
})())){
return new_app_state;
} else {
return (on_invalid_state.cljs$core$IFn$_invoke$arity$4 ? on_invalid_state.cljs$core$IFn$_invoke$arity$4(previous_app_state,event,new_app_state,spec) : on_invalid_state.call(null,previous_app_state,event,new_app_state,spec));
}
});
tuck.core.control = (function tuck$core$control(var_args){
var G__24749 = arguments.length;
switch (G__24749) {
case 1:
return tuck.core.control.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return tuck.core.control.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tuck.core.control.cljs$core$IFn$_invoke$arity$1 = (function (app){
return tuck.core.control.cljs$core$IFn$_invoke$arity$4(app,cljs.core.constantly(null),null,null);
});

tuck.core.control.cljs$core$IFn$_invoke$arity$4 = (function (app,path_fn,spec,on_invalid_state){
return (function tuck$core$ui_send(event){
if(((!((event == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === event.tuck$core$Event$)))?true:(((!event.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(tuck.core.Event,event):false)):cljs.core.native_satisfies_QMARK_(tuck.core.Event,event))){
} else {
throw (new Error("Assert failed: (satisfies? Event event)"));
}

var _STAR_current_send_function_STAR_24751 = tuck.core._STAR_current_send_function_STAR_;
tuck.core._STAR_current_send_function_STAR_ = (function (){var or__8916__auto__ = tuck.core._STAR_current_send_function_STAR_;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return tuck$core$ui_send;
}
})();

try{var path = (path_fn.cljs$core$IFn$_invoke$arity$1 ? path_fn.cljs$core$IFn$_invoke$arity$1(event) : path_fn.call(null,event));
if(cljs.core.truth_(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (path,_STAR_current_send_function_STAR_24751){
return (function (current_app_state){
var new_app_state = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(current_app_state,path,((function (path,_STAR_current_send_function_STAR_24751){
return (function (current_app_state_in_path){
return tuck.core.process_event(event,current_app_state_in_path);
});})(path,_STAR_current_send_function_STAR_24751))
);
return tuck.core.validate(current_app_state,event,new_app_state,spec,on_invalid_state);
});})(path,_STAR_current_send_function_STAR_24751))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app,((function (path,_STAR_current_send_function_STAR_24751){
return (function (current_app_state){
var new_app_state = tuck.core.process_event(event,current_app_state);
return tuck.core.validate(current_app_state,event,new_app_state,spec,on_invalid_state);
});})(path,_STAR_current_send_function_STAR_24751))
);
}
}finally {tuck.core._STAR_current_send_function_STAR_ = _STAR_current_send_function_STAR_24751;
}});
});

tuck.core.control.cljs$lang$maxFixedArity = 4;

tuck.core.control_with_paths = (function tuck$core$control_with_paths(app,path_fn){
return tuck.core.control.cljs$core$IFn$_invoke$arity$4(app,path_fn,null,null);
});
tuck.core.default_on_invalid_state = (function tuck$core$default_on_invalid_state(previous_state,event,new_state,spec){
console.warn("Discarding invalid state after event: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([event], 0)),"\n",cljs.spec.alpha.explain_str(spec,new_state));

return previous_state;
});
/**
 * Entrypoint for tuck. Takes in a reagent atom and a root component.
 *   The root component will be rendered with two parameters: a ui control
 *   function (for sending events to) and the current state of the app atom.
 * 
 *   The optional options map can have the following keys:
 *   :path-fn   If path-fn is provided, it is called to return a path (for update-in)
 *           for the event. If the path-fn returns nil for the event, the event is
 *           applied to the app root. Path-fn is an alternative to wrapping send
 *           functions for routing events to different parts of the state atom.
 *   :spec      If specified, the app state is validate against the spec after each
 *           event. If the new state is invalid the on-invalid-state handler is
 *           called to fix it.
 * 
 *   :on-invalid-state
 *           Handler to call when the app state after an event fails spec validation.
 *           Must return new (fixed) app state. Takes 4 arguments: the previous state,
 *           the event that caused the invalid state, the new invalid state and the
 *           spec it was validated against.
 *           Default implementation logs the event and clojure.spec explain output
 *           and returns the previous valid state.
 * 
 *   For backwards compatibility, if options is a function, it is interpreted to mean
 *   the path-fn.
 * 
 *   The options are evaluated once, when the component is created and changes to
 *   options don't take effect during the component's lifetime.
 */
tuck.core.tuck = (function tuck$core$tuck(var_args){
var G__24754 = arguments.length;
switch (G__24754) {
case 2:
return tuck.core.tuck.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tuck.core.tuck.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

tuck.core.tuck.cljs$core$IFn$_invoke$arity$2 = (function (app,root_component){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tuck.core.tuck,app,root_component,cljs.core.PersistentArrayMap.EMPTY], null);
});

tuck.core.tuck.cljs$core$IFn$_invoke$arity$3 = (function (app,root_component,options){
var options__$1 = ((cljs.core.fn_QMARK_(options))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path_DASH_fn,options], null):options);
var map__24755 = options__$1;
var map__24755__$1 = ((((!((map__24755 == null)))?((((map__24755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24755.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24755):map__24755);
var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,cljs.core.cst$kw$path_DASH_fn);
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,cljs.core.cst$kw$spec);
var on_invalid_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24755__$1,cljs.core.cst$kw$on_DASH_invalid_DASH_state);
var e_BANG_ = tuck.core.control.cljs$core$IFn$_invoke$arity$4(app,(function (){var or__8916__auto__ = path_fn;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.constantly(null);
}
})(),spec,(function (){var or__8916__auto__ = on_invalid_state;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return tuck.core.default_on_invalid_state;
}
})());
return ((function (options__$1,map__24755,map__24755__$1,path_fn,spec,on_invalid_state,e_BANG_){
return (function (app__$1,root_component__$1,_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_component__$1,e_BANG_,cljs.core.deref(app__$1)], null);
});
;})(options__$1,map__24755,map__24755__$1,path_fn,spec,on_invalid_state,e_BANG_))
});

tuck.core.tuck.cljs$lang$maxFixedArity = 3;

