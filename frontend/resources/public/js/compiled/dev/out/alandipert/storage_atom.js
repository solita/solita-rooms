// Compiled by ClojureScript 1.9.946 {}
goog.provide('alandipert.storage_atom');
goog.require('cljs.core');
goog.require('tailrecursion.cljson');
goog.require('goog.Timer');

/**
 * Represents a storage resource.
 * @interface
 */
alandipert.storage_atom.IStorageBackend = function(){};

alandipert.storage_atom._get = (function alandipert$storage_atom$_get(this$,not_found){
if((!((this$ == null))) && (!((this$.alandipert$storage_atom$IStorageBackend$_get$arity$2 == null)))){
return this$.alandipert$storage_atom$IStorageBackend$_get$arity$2(this$,not_found);
} else {
var x__30912__auto__ = (((this$ == null))?null:this$);
var m__30913__auto__ = (alandipert.storage_atom._get[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,this$,not_found);
} else {
var m__30913__auto____$1 = (alandipert.storage_atom._get["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,this$,not_found);
} else {
throw cljs.core.missing_protocol.call(null,"IStorageBackend.-get",this$);
}
}
}
});

/**
 * Commit value to storage at location.
 */
alandipert.storage_atom._commit_BANG_ = (function alandipert$storage_atom$_commit_BANG_(this$,value){
if((!((this$ == null))) && (!((this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 == null)))){
return this$.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2(this$,value);
} else {
var x__30912__auto__ = (((this$ == null))?null:this$);
var m__30913__auto__ = (alandipert.storage_atom._commit_BANG_[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,this$,value);
} else {
var m__30913__auto____$1 = (alandipert.storage_atom._commit_BANG_["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,this$,value);
} else {
throw cljs.core.missing_protocol.call(null,"IStorageBackend.-commit!",this$);
}
}
}
});


/**
* @constructor
 * @implements {alandipert.storage_atom.IStorageBackend}
*/
alandipert.storage_atom.StorageBackend = (function (store,key){
this.store = store;
this.key = key;
});
alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$ = cljs.core.PROTOCOL_SENTINEL;

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_get$arity$2 = (function (this$,not_found){
var self__ = this;
var this$__$1 = this;
var temp__5455__auto__ = self__.store.getItem(tailrecursion.cljson.clj__GT_cljson.call(null,self__.key));
if(cljs.core.truth_(temp__5455__auto__)){
var existing = temp__5455__auto__;
return tailrecursion.cljson.cljson__GT_clj.call(null,existing);
} else {
return not_found;
}
});

alandipert.storage_atom.StorageBackend.prototype.alandipert$storage_atom$IStorageBackend$_commit_BANG_$arity$2 = (function (this$,value){
var self__ = this;
var this$__$1 = this;
return self__.store.setItem(tailrecursion.cljson.clj__GT_cljson.call(null,self__.key),tailrecursion.cljson.clj__GT_cljson.call(null,value));
});

alandipert.storage_atom.StorageBackend.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"store","store",-1142205747,null),new cljs.core.Symbol(null,"key","key",124488940,null)], null);
});

alandipert.storage_atom.StorageBackend.cljs$lang$type = true;

alandipert.storage_atom.StorageBackend.cljs$lang$ctorStr = "alandipert.storage-atom/StorageBackend";

alandipert.storage_atom.StorageBackend.cljs$lang$ctorPrWriter = (function (this__30850__auto__,writer__30851__auto__,opt__30852__auto__){
return cljs.core._write.call(null,writer__30851__auto__,"alandipert.storage-atom/StorageBackend");
});

alandipert.storage_atom.__GT_StorageBackend = (function alandipert$storage_atom$__GT_StorageBackend(store,key){
return (new alandipert.storage_atom.StorageBackend(store,key));
});

/**
 * Return a function that will always store a future call into the
 *   same atom. If recalled before the time is elapsed, the call is
 *   replaced without being executed.
 */
alandipert.storage_atom.debounce_factory = (function alandipert$storage_atom$debounce_factory(){
var f = cljs.core.atom.call(null,null);
return ((function (f){
return (function (func,ttime){
if(cljs.core.truth_(cljs.core.deref.call(null,f))){
goog.Timer.clear(cljs.core.deref.call(null,f));
} else {
}

return cljs.core.reset_BANG_.call(null,f,goog.Timer.callOnce(func,ttime));
});
;})(f))
});
/**
 * Delay in ms before a change is committed to the local storage. If a
 * new change occurs before the time is elapsed, the old change is
 * discarded an only the new one is committed.
 */
alandipert.storage_atom.storage_delay = cljs.core.atom.call(null,(10));
alandipert.storage_atom._STAR_storage_delay_STAR_ = null;
alandipert.storage_atom._STAR_watch_active_STAR_ = true;
alandipert.storage_atom.store = (function alandipert$storage_atom$store(atom,backend){
var existing = alandipert.storage_atom._get.call(null,backend,new cljs.core.Keyword("alandipert.storage-atom","none","alandipert.storage-atom/none",604942529));
var debounce = alandipert.storage_atom.debounce_factory.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("alandipert.storage-atom","none","alandipert.storage-atom/none",604942529),existing)){
alandipert.storage_atom._commit_BANG_.call(null,backend,cljs.core.deref.call(null,atom));
} else {
cljs.core.reset_BANG_.call(null,atom,existing);
}

var G__59593 = atom;
cljs.core.add_watch.call(null,G__59593,new cljs.core.Keyword("alandipert.storage-atom","storage-watch","alandipert.storage-atom/storage-watch",1159565749),((function (G__59593,existing,debounce){
return (function (p1__59591_SHARP_,p2__59592_SHARP_,p3__59589_SHARP_,p4__59590_SHARP_){
if((alandipert.storage_atom._STAR_watch_active_STAR_) && (cljs.core.not_EQ_.call(null,p3__59589_SHARP_,p4__59590_SHARP_))){
return debounce.call(null,((function (G__59593,existing,debounce){
return (function (){
return alandipert.storage_atom._commit_BANG_.call(null,backend,p4__59590_SHARP_);
});})(G__59593,existing,debounce))
,(function (){var or__30179__auto__ = alandipert.storage_atom._STAR_storage_delay_STAR_;
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.deref.call(null,alandipert.storage_atom.storage_delay);
}
})());
} else {
return null;
}
});})(G__59593,existing,debounce))
);

return G__59593;
});
alandipert.storage_atom.maybe_update_backend = (function alandipert$storage_atom$maybe_update_backend(atom,storage,k,default$,e){
if((storage === e.storageArea)){
if(cljs.core.empty_QMARK_.call(null,e.key)){
var _STAR_watch_active_STAR_59594 = alandipert.storage_atom._STAR_watch_active_STAR_;
alandipert.storage_atom._STAR_watch_active_STAR_ = false;

try{return cljs.core.reset_BANG_.call(null,atom,default$);
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_59594;
}} else {
var temp__5457__auto__ = tailrecursion.cljson.cljson__GT_clj.call(null,e.key);
if(cljs.core.truth_(temp__5457__auto__)){
var sk = temp__5457__auto__;
if(cljs.core._EQ_.call(null,sk,k)){
var _STAR_watch_active_STAR_59595 = alandipert.storage_atom._STAR_watch_active_STAR_;
alandipert.storage_atom._STAR_watch_active_STAR_ = false;

try{return cljs.core.reset_BANG_.call(null,atom,(function (){var temp__5455__auto__ = e.newValue;
if(cljs.core.truth_(temp__5455__auto__)){
var value = temp__5455__auto__;
return tailrecursion.cljson.cljson__GT_clj.call(null,value);
} else {
return default$;
}
})());
}finally {alandipert.storage_atom._STAR_watch_active_STAR_ = _STAR_watch_active_STAR_59595;
}} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
});
alandipert.storage_atom.link_storage = (function alandipert$storage_atom$link_storage(atom,storage,k){
var default$ = cljs.core.deref.call(null,atom);
return window.addEventListener("storage",((function (default$){
return (function (p1__59596_SHARP_){
return alandipert.storage_atom.maybe_update_backend.call(null,atom,storage,k,default$,p1__59596_SHARP_);
});})(default$))
);
});
/**
 * Create and dispatch a synthetic StorageEvent. Expects key to be a string.
 *   An empty key indicates that all storage is being cleared.
 */
alandipert.storage_atom.dispatch_remove_event_BANG_ = (function alandipert$storage_atom$dispatch_remove_event_BANG_(storage,key){
var event = (new StorageEvent("storage"));
event.initStorageEvent("storage",false,false,key,null,null,window.location.href,storage);

window.dispatchEvent(event);

return null;
});
alandipert.storage_atom.load_html_storage = (function alandipert$storage_atom$load_html_storage(storage,k){
return alandipert.storage_atom._get.call(null,(new alandipert.storage_atom.StorageBackend(storage,k)),null);
});
alandipert.storage_atom.load_local_storage = (function alandipert$storage_atom$load_local_storage(k){
return alandipert.storage_atom.load_html_storage.call(null,localStorage,k);
});
alandipert.storage_atom.load_session_storage = (function alandipert$storage_atom$load_session_storage(k){
return alandipert.storage_atom.load_html_storage.call(null,sessionStorage,k);
});
alandipert.storage_atom.html_storage = (function alandipert$storage_atom$html_storage(atom,storage,k){
alandipert.storage_atom.link_storage.call(null,atom,storage,k);

return alandipert.storage_atom.store.call(null,atom,(new alandipert.storage_atom.StorageBackend(storage,k)));
});
alandipert.storage_atom.local_storage = (function alandipert$storage_atom$local_storage(atom,k){
return alandipert.storage_atom.html_storage.call(null,atom,localStorage,k);
});
alandipert.storage_atom.session_storage = (function alandipert$storage_atom$session_storage(atom,k){
return alandipert.storage_atom.html_storage.call(null,atom,sessionStorage,k);
});
/**
 * Clear storage and also trigger an event on the current window
 *   so its atoms will be cleared as well.
 */
alandipert.storage_atom.clear_html_storage_BANG_ = (function alandipert$storage_atom$clear_html_storage_BANG_(storage){
storage.clear();

return alandipert.storage_atom.dispatch_remove_event_BANG_.call(null,storage,"");
});
alandipert.storage_atom.clear_local_storage_BANG_ = (function alandipert$storage_atom$clear_local_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_.call(null,localStorage);
});
alandipert.storage_atom.clear_session_storage_BANG_ = (function alandipert$storage_atom$clear_session_storage_BANG_(){
return alandipert.storage_atom.clear_html_storage_BANG_.call(null,sessionStorage);
});
/**
 * Remove key from storage and also trigger an event on the current
 *   window so its atoms will be cleared as well.
 */
alandipert.storage_atom.remove_html_storage_BANG_ = (function alandipert$storage_atom$remove_html_storage_BANG_(storage,k){
var key = tailrecursion.cljson.clj__GT_cljson.call(null,k);
storage.removeItem(key);

return alandipert.storage_atom.dispatch_remove_event_BANG_.call(null,storage,key);
});
alandipert.storage_atom.remove_local_storage_BANG_ = (function alandipert$storage_atom$remove_local_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_.call(null,localStorage,k);
});
alandipert.storage_atom.remove_session_storage_BANG_ = (function alandipert$storage_atom$remove_session_storage_BANG_(k){
return alandipert.storage_atom.remove_html_storage_BANG_.call(null,sessionStorage,k);
});

//# sourceMappingURL=storage_atom.js.map?rel=1523638679020
