// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('tuck.core');
goog.require('reagent.ratom');
goog.require('cljs_time.core');
goog.require('cljs.core.async');
goog.require('rooms.communication');
goog.require('rooms.fmt');
goog.require('alandipert.storage_atom');
goog.require('rooms.cache');
goog.require('reagent.core');
goog.require('rooms.date');
rooms.state.filters_cache_key = "rooms2-filters";
rooms.state.state = reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$filters,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$date,cljs_time.core.time_now(),cljs.core.cst$kw$locations,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$urgency_QMARK_,false,cljs.core.cst$kw$video_QMARK_,false,cljs.core.cst$kw$internal_QMARK_,false,cljs.core.cst$kw$client_QMARK_,false,cljs.core.cst$kw$capacity,(0)], null),cljs.core.cst$kw$calendar_DASH_month,cljs_time.core.time_now(),cljs.core.cst$kw$showing_DASH_bookings,null,cljs.core.cst$kw$rooms,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$server_DASH_connection_QMARK_,true,cljs.core.cst$kw$fetching_DASH_rooms_QMARK_,false], null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.SetFilters = (function (filters,__meta,__extmap,__hash){
this.filters = filters;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.SetFilters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.SetFilters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25818,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25822 = k25818;
var G__25822__$1 = (((G__25822 instanceof cljs.core.Keyword))?G__25822.fqn:null);
switch (G__25822__$1) {
case "filters":
return self__.filters;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25818,else__9607__auto__);

}
});

rooms.state.SetFilters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.SetFilters{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$filters,self__.filters],null))], null),self__.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25817){
var self__ = this;
var G__25817__$1 = this;
return (new cljs.core.RecordIter((0),G__25817__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.SetFilters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.SetFilters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.SetFilters(self__.filters,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.SetFilters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25823 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-946215963 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25823(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.SetFilters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25819,other25820){
var self__ = this;
var this25819__$1 = this;
return (!((other25820 == null))) && ((this25819__$1.constructor === other25820.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25819__$1.filters,other25820.filters)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25819__$1.__extmap,other25820.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$filters,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.SetFilters(self__.filters,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.SetFilters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25817){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25824 = cljs.core.keyword_identical_QMARK_;
var expr__25825 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25827 = cljs.core.cst$kw$filters;
var G__25828 = expr__25825;
return (pred__25824.cljs$core$IFn$_invoke$arity$2 ? pred__25824.cljs$core$IFn$_invoke$arity$2(G__25827,G__25828) : pred__25824.call(null,G__25827,G__25828));
})())){
return (new rooms.state.SetFilters(G__25817,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.SetFilters(self__.filters,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25817),null));
}
});

rooms.state.SetFilters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$filters,self__.filters],null))], null),self__.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25817){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.SetFilters(self__.filters,G__25817,self__.__extmap,self__.__hash));
});

rooms.state.SetFilters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.SetFilters.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$filters], null);
});

rooms.state.SetFilters.cljs$lang$type = true;

rooms.state.SetFilters.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/SetFilters");
});

rooms.state.SetFilters.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/SetFilters");
});

rooms.state.__GT_SetFilters = (function rooms$state$__GT_SetFilters(filters){
return (new rooms.state.SetFilters(filters,null,null,null));
});

rooms.state.map__GT_SetFilters = (function rooms$state$map__GT_SetFilters(G__25821){
return (new rooms.state.SetFilters(cljs.core.cst$kw$filters.cljs$core$IFn$_invoke$arity$1(G__25821),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25821,cljs.core.cst$kw$filters)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.FetchRooms = (function (date,__meta,__extmap,__hash){
this.date = date;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.FetchRooms.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.FetchRooms.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25831,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25835 = k25831;
var G__25835__$1 = (((G__25835 instanceof cljs.core.Keyword))?G__25835.fqn:null);
switch (G__25835__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25831,else__9607__auto__);

}
});

rooms.state.FetchRooms.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.FetchRooms{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25830){
var self__ = this;
var G__25830__$1 = this;
return (new cljs.core.RecordIter((0),G__25830__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.FetchRooms.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.FetchRooms.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.FetchRooms(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.FetchRooms.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25836 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1546763119 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25836(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.FetchRooms.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25832,other25833){
var self__ = this;
var this25832__$1 = this;
return (!((other25833 == null))) && ((this25832__$1.constructor === other25833.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25832__$1.date,other25833.date)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25832__$1.__extmap,other25833.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.FetchRooms(self__.date,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.FetchRooms.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25830){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25837 = cljs.core.keyword_identical_QMARK_;
var expr__25838 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25840 = cljs.core.cst$kw$date;
var G__25841 = expr__25838;
return (pred__25837.cljs$core$IFn$_invoke$arity$2 ? pred__25837.cljs$core$IFn$_invoke$arity$2(G__25840,G__25841) : pred__25837.call(null,G__25840,G__25841));
})())){
return (new rooms.state.FetchRooms(G__25830,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.FetchRooms(self__.date,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25830),null));
}
});

rooms.state.FetchRooms.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25830){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.FetchRooms(self__.date,G__25830,self__.__extmap,self__.__hash));
});

rooms.state.FetchRooms.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.FetchRooms.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$date], null);
});

rooms.state.FetchRooms.cljs$lang$type = true;

rooms.state.FetchRooms.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/FetchRooms");
});

rooms.state.FetchRooms.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/FetchRooms");
});

rooms.state.__GT_FetchRooms = (function rooms$state$__GT_FetchRooms(date){
return (new rooms.state.FetchRooms(date,null,null,null));
});

rooms.state.map__GT_FetchRooms = (function rooms$state$map__GT_FetchRooms(G__25834){
return (new rooms.state.FetchRooms(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(G__25834),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25834,cljs.core.cst$kw$date)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.SelectDate = (function (date,__meta,__extmap,__hash){
this.date = date;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.SelectDate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.SelectDate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25844,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25848 = k25844;
var G__25848__$1 = (((G__25848 instanceof cljs.core.Keyword))?G__25848.fqn:null);
switch (G__25848__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25844,else__9607__auto__);

}
});

rooms.state.SelectDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.SelectDate{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25843){
var self__ = this;
var G__25843__$1 = this;
return (new cljs.core.RecordIter((0),G__25843__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.SelectDate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.SelectDate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.SelectDate(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.SelectDate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25849 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-142882328 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25849(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.SelectDate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25845,other25846){
var self__ = this;
var this25845__$1 = this;
return (!((other25846 == null))) && ((this25845__$1.constructor === other25846.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25845__$1.date,other25846.date)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25845__$1.__extmap,other25846.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.SelectDate(self__.date,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.SelectDate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25843){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25850 = cljs.core.keyword_identical_QMARK_;
var expr__25851 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25853 = cljs.core.cst$kw$date;
var G__25854 = expr__25851;
return (pred__25850.cljs$core$IFn$_invoke$arity$2 ? pred__25850.cljs$core$IFn$_invoke$arity$2(G__25853,G__25854) : pred__25850.call(null,G__25853,G__25854));
})())){
return (new rooms.state.SelectDate(G__25843,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.SelectDate(self__.date,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25843),null));
}
});

rooms.state.SelectDate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25843){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.SelectDate(self__.date,G__25843,self__.__extmap,self__.__hash));
});

rooms.state.SelectDate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.SelectDate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$date], null);
});

rooms.state.SelectDate.cljs$lang$type = true;

rooms.state.SelectDate.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/SelectDate");
});

rooms.state.SelectDate.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/SelectDate");
});

rooms.state.__GT_SelectDate = (function rooms$state$__GT_SelectDate(date){
return (new rooms.state.SelectDate(date,null,null,null));
});

rooms.state.map__GT_SelectDate = (function rooms$state$map__GT_SelectDate(G__25847){
return (new rooms.state.SelectDate(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(G__25847),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25847,cljs.core.cst$kw$date)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.CheckFilterLocations = (function (location_id,__meta,__extmap,__hash){
this.location_id = location_id;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.CheckFilterLocations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25857,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25861 = k25857;
var G__25861__$1 = (((G__25861 instanceof cljs.core.Keyword))?G__25861.fqn:null);
switch (G__25861__$1) {
case "location-id":
return self__.location_id;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25857,else__9607__auto__);

}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.CheckFilterLocations{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$location_DASH_id,self__.location_id],null))], null),self__.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25856){
var self__ = this;
var G__25856__$1 = this;
return (new cljs.core.RecordIter((0),G__25856__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$location_DASH_id], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.CheckFilterLocations(self__.location_id,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25862 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (870121298 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25862(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25858,other25859){
var self__ = this;
var this25858__$1 = this;
return (!((other25859 == null))) && ((this25858__$1.constructor === other25859.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25858__$1.location_id,other25859.location_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25858__$1.__extmap,other25859.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$location_DASH_id,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.CheckFilterLocations(self__.location_id,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25856){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25863 = cljs.core.keyword_identical_QMARK_;
var expr__25864 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25866 = cljs.core.cst$kw$location_DASH_id;
var G__25867 = expr__25864;
return (pred__25863.cljs$core$IFn$_invoke$arity$2 ? pred__25863.cljs$core$IFn$_invoke$arity$2(G__25866,G__25867) : pred__25863.call(null,G__25866,G__25867));
})())){
return (new rooms.state.CheckFilterLocations(G__25856,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.CheckFilterLocations(self__.location_id,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25856),null));
}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$location_DASH_id,self__.location_id],null))], null),self__.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25856){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.CheckFilterLocations(self__.location_id,G__25856,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.CheckFilterLocations.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$location_DASH_id], null);
});

rooms.state.CheckFilterLocations.cljs$lang$type = true;

rooms.state.CheckFilterLocations.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/CheckFilterLocations");
});

rooms.state.CheckFilterLocations.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/CheckFilterLocations");
});

rooms.state.__GT_CheckFilterLocations = (function rooms$state$__GT_CheckFilterLocations(location_id){
return (new rooms.state.CheckFilterLocations(location_id,null,null,null));
});

rooms.state.map__GT_CheckFilterLocations = (function rooms$state$map__GT_CheckFilterLocations(G__25860){
return (new rooms.state.CheckFilterLocations(cljs.core.cst$kw$location_DASH_id.cljs$core$IFn$_invoke$arity$1(G__25860),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25860,cljs.core.cst$kw$location_DASH_id)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.CheckFilterBoolean = (function (name,value,__meta,__extmap,__hash){
this.name = name;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.CheckFilterBoolean.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25870,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25874 = k25870;
var G__25874__$1 = (((G__25874 instanceof cljs.core.Keyword))?G__25874.fqn:null);
switch (G__25874__$1) {
case "name":
return self__.name;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25870,else__9607__auto__);

}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.CheckFilterBoolean{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25869){
var self__ = this;
var G__25869__$1 = this;
return (new cljs.core.RecordIter((0),G__25869__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25875 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1503094837 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25875(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25871,other25872){
var self__ = this;
var this25871__$1 = this;
return (!((other25872 == null))) && ((this25871__$1.constructor === other25872.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25871__$1.name,other25872.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25871__$1.value,other25872.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25871__$1.__extmap,other25872.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$value,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25869){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25876 = cljs.core.keyword_identical_QMARK_;
var expr__25877 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25879 = cljs.core.cst$kw$name;
var G__25880 = expr__25877;
return (pred__25876.cljs$core$IFn$_invoke$arity$2 ? pred__25876.cljs$core$IFn$_invoke$arity$2(G__25879,G__25880) : pred__25876.call(null,G__25879,G__25880));
})())){
return (new rooms.state.CheckFilterBoolean(G__25869,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25881 = cljs.core.cst$kw$value;
var G__25882 = expr__25877;
return (pred__25876.cljs$core$IFn$_invoke$arity$2 ? pred__25876.cljs$core$IFn$_invoke$arity$2(G__25881,G__25882) : pred__25876.call(null,G__25881,G__25882));
})())){
return (new rooms.state.CheckFilterBoolean(self__.name,G__25869,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25869),null));
}
}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25869){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,G__25869,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.CheckFilterBoolean.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$value], null);
});

rooms.state.CheckFilterBoolean.cljs$lang$type = true;

rooms.state.CheckFilterBoolean.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/CheckFilterBoolean");
});

rooms.state.CheckFilterBoolean.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/CheckFilterBoolean");
});

rooms.state.__GT_CheckFilterBoolean = (function rooms$state$__GT_CheckFilterBoolean(name,value){
return (new rooms.state.CheckFilterBoolean(name,value,null,null,null));
});

rooms.state.map__GT_CheckFilterBoolean = (function rooms$state$map__GT_CheckFilterBoolean(G__25873){
return (new rooms.state.CheckFilterBoolean(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__25873),cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__25873),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25873,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$value], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.CheckFilterCapacity = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.CheckFilterCapacity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25885,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25889 = k25885;
var G__25889__$1 = (((G__25889 instanceof cljs.core.Keyword))?G__25889.fqn:null);
switch (G__25889__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25885,else__9607__auto__);

}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.CheckFilterCapacity{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25884){
var self__ = this;
var G__25884__$1 = this;
return (new cljs.core.RecordIter((0),G__25884__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$value], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.CheckFilterCapacity(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25890 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1109727865 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25890(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25886,other25887){
var self__ = this;
var this25886__$1 = this;
return (!((other25887 == null))) && ((this25886__$1.constructor === other25887.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25886__$1.value,other25887.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25886__$1.__extmap,other25887.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.CheckFilterCapacity(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25884){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25891 = cljs.core.keyword_identical_QMARK_;
var expr__25892 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25894 = cljs.core.cst$kw$value;
var G__25895 = expr__25892;
return (pred__25891.cljs$core$IFn$_invoke$arity$2 ? pred__25891.cljs$core$IFn$_invoke$arity$2(G__25894,G__25895) : pred__25891.call(null,G__25894,G__25895));
})())){
return (new rooms.state.CheckFilterCapacity(G__25884,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.CheckFilterCapacity(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25884),null));
}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$value,self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25884){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.CheckFilterCapacity(self__.value,G__25884,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.CheckFilterCapacity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value], null);
});

rooms.state.CheckFilterCapacity.cljs$lang$type = true;

rooms.state.CheckFilterCapacity.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/CheckFilterCapacity");
});

rooms.state.CheckFilterCapacity.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/CheckFilterCapacity");
});

rooms.state.__GT_CheckFilterCapacity = (function rooms$state$__GT_CheckFilterCapacity(value){
return (new rooms.state.CheckFilterCapacity(value,null,null,null));
});

rooms.state.map__GT_CheckFilterCapacity = (function rooms$state$map__GT_CheckFilterCapacity(G__25888){
return (new rooms.state.CheckFilterCapacity(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(G__25888),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25888,cljs.core.cst$kw$value)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.SelectCalendarMonth = (function (date,__meta,__extmap,__hash){
this.date = date;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.SelectCalendarMonth.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25898,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25902 = k25898;
var G__25902__$1 = (((G__25902 instanceof cljs.core.Keyword))?G__25902.fqn:null);
switch (G__25902__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25898,else__9607__auto__);

}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.SelectCalendarMonth{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25897){
var self__ = this;
var G__25897__$1 = this;
return (new cljs.core.RecordIter((0),G__25897__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.SelectCalendarMonth(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25903 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1602594821 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25903(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25899,other25900){
var self__ = this;
var this25899__$1 = this;
return (!((other25900 == null))) && ((this25899__$1.constructor === other25900.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25899__$1.date,other25900.date)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25899__$1.__extmap,other25900.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.SelectCalendarMonth(self__.date,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25897){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25904 = cljs.core.keyword_identical_QMARK_;
var expr__25905 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25907 = cljs.core.cst$kw$date;
var G__25908 = expr__25905;
return (pred__25904.cljs$core$IFn$_invoke$arity$2 ? pred__25904.cljs$core$IFn$_invoke$arity$2(G__25907,G__25908) : pred__25904.call(null,G__25907,G__25908));
})())){
return (new rooms.state.SelectCalendarMonth(G__25897,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.SelectCalendarMonth(self__.date,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25897),null));
}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25897){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.SelectCalendarMonth(self__.date,G__25897,self__.__extmap,self__.__hash));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.SelectCalendarMonth.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$date], null);
});

rooms.state.SelectCalendarMonth.cljs$lang$type = true;

rooms.state.SelectCalendarMonth.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/SelectCalendarMonth");
});

rooms.state.SelectCalendarMonth.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/SelectCalendarMonth");
});

rooms.state.__GT_SelectCalendarMonth = (function rooms$state$__GT_SelectCalendarMonth(date){
return (new rooms.state.SelectCalendarMonth(date,null,null,null));
});

rooms.state.map__GT_SelectCalendarMonth = (function rooms$state$map__GT_SelectCalendarMonth(G__25901){
return (new rooms.state.SelectCalendarMonth(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(G__25901),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25901,cljs.core.cst$kw$date)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.ShowBookings = (function (date,__meta,__extmap,__hash){
this.date = date;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.ShowBookings.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.ShowBookings.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25911,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25915 = k25911;
var G__25915__$1 = (((G__25915 instanceof cljs.core.Keyword))?G__25915.fqn:null);
switch (G__25915__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25911,else__9607__auto__);

}
});

rooms.state.ShowBookings.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.ShowBookings{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25910){
var self__ = this;
var G__25910__$1 = this;
return (new cljs.core.RecordIter((0),G__25910__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.ShowBookings.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.ShowBookings.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.ShowBookings(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.ShowBookings.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25916 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (939677492 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25916(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.ShowBookings.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25912,other25913){
var self__ = this;
var this25912__$1 = this;
return (!((other25913 == null))) && ((this25912__$1.constructor === other25913.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25912__$1.date,other25913.date)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25912__$1.__extmap,other25913.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$date,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.ShowBookings(self__.date,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.ShowBookings.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25910){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25917 = cljs.core.keyword_identical_QMARK_;
var expr__25918 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25920 = cljs.core.cst$kw$date;
var G__25921 = expr__25918;
return (pred__25917.cljs$core$IFn$_invoke$arity$2 ? pred__25917.cljs$core$IFn$_invoke$arity$2(G__25920,G__25921) : pred__25917.call(null,G__25920,G__25921));
})())){
return (new rooms.state.ShowBookings(G__25910,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.ShowBookings(self__.date,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25910),null));
}
});

rooms.state.ShowBookings.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null))], null),self__.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25910){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.ShowBookings(self__.date,G__25910,self__.__extmap,self__.__hash));
});

rooms.state.ShowBookings.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.ShowBookings.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$date], null);
});

rooms.state.ShowBookings.cljs$lang$type = true;

rooms.state.ShowBookings.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/ShowBookings");
});

rooms.state.ShowBookings.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/ShowBookings");
});

rooms.state.__GT_ShowBookings = (function rooms$state$__GT_ShowBookings(date){
return (new rooms.state.ShowBookings(date,null,null,null));
});

rooms.state.map__GT_ShowBookings = (function rooms$state$map__GT_ShowBookings(G__25914){
return (new rooms.state.ShowBookings(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(G__25914),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25914,cljs.core.cst$kw$date)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.RoomsFetched = (function (date,rooms,__meta,__extmap,__hash){
this.date = date;
this.rooms = rooms;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.RoomsFetched.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.RoomsFetched.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25924,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25928 = k25924;
var G__25928__$1 = (((G__25928 instanceof cljs.core.Keyword))?G__25928.fqn:null);
switch (G__25928__$1) {
case "date":
return self__.date;

break;
case "rooms":
return self__.rooms;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25924,else__9607__auto__);

}
});

rooms.state.RoomsFetched.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.RoomsFetched{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rooms,self__.rooms],null))], null),self__.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25923){
var self__ = this;
var G__25923__$1 = this;
return (new cljs.core.RecordIter((0),G__25923__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$date,cljs.core.cst$kw$rooms], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.RoomsFetched.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.RoomsFetched.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.RoomsFetched.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25929 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-238858410 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25929(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.RoomsFetched.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25925,other25926){
var self__ = this;
var this25925__$1 = this;
return (!((other25926 == null))) && ((this25925__$1.constructor === other25926.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25925__$1.date,other25926.date)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25925__$1.rooms,other25926.rooms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25925__$1.__extmap,other25926.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rooms,null,cljs.core.cst$kw$date,null], null), null),k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.RoomsFetched.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25923){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25930 = cljs.core.keyword_identical_QMARK_;
var expr__25931 = k__9612__auto__;
if(cljs.core.truth_((function (){var G__25933 = cljs.core.cst$kw$date;
var G__25934 = expr__25931;
return (pred__25930.cljs$core$IFn$_invoke$arity$2 ? pred__25930.cljs$core$IFn$_invoke$arity$2(G__25933,G__25934) : pred__25930.call(null,G__25933,G__25934));
})())){
return (new rooms.state.RoomsFetched(G__25923,self__.rooms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__25935 = cljs.core.cst$kw$rooms;
var G__25936 = expr__25931;
return (pred__25930.cljs$core$IFn$_invoke$arity$2 ? pred__25930.cljs$core$IFn$_invoke$arity$2(G__25935,G__25936) : pred__25930.call(null,G__25935,G__25936));
})())){
return (new rooms.state.RoomsFetched(self__.date,G__25923,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25923),null));
}
}
});

rooms.state.RoomsFetched.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$date,self__.date],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$rooms,self__.rooms],null))], null),self__.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25923){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,G__25923,self__.__extmap,self__.__hash));
});

rooms.state.RoomsFetched.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.RoomsFetched.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$date,cljs.core.cst$sym$rooms], null);
});

rooms.state.RoomsFetched.cljs$lang$type = true;

rooms.state.RoomsFetched.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/RoomsFetched");
});

rooms.state.RoomsFetched.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/RoomsFetched");
});

rooms.state.__GT_RoomsFetched = (function rooms$state$__GT_RoomsFetched(date,rooms__$1){
return (new rooms.state.RoomsFetched(date,rooms__$1,null,null,null));
});

rooms.state.map__GT_RoomsFetched = (function rooms$state$map__GT_RoomsFetched(G__25927){
return (new rooms.state.RoomsFetched(cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(G__25927),cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(G__25927),null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__25927,cljs.core.cst$kw$date,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rooms], 0))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
rooms.state.RoomsNotFetched = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
rooms.state.RoomsNotFetched.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25939,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25943 = k25939;
switch (G__25943) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25939,else__9607__auto__);

}
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer(writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__9619__auto__,pr_pair__9621__auto__,"#rooms.state.RoomsNotFetched{",", ","}",opts__9620__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25938){
var self__ = this;
var G__25938__$1 = this;
return (new cljs.core.RecordIter((0),G__25938__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new rooms.state.RoomsNotFetched(self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = (function (){var fexpr__25944 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (565395132 ^ cljs.core.hash_unordered_coll(coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
;
return fexpr__25944(this__9600__auto____$1);
})();
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25940,other25941){
var self__ = this;
var this25940__$1 = this;
return (!((other25941 == null))) && ((this25940__$1.constructor === other25941.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this25940__$1.__extmap,other25941.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__9614__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new rooms.state.RoomsNotFetched(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__9614__auto__)),null));
}
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25938){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25945 = cljs.core.keyword_identical_QMARK_;
var expr__25946 = k__9612__auto__;
return (new rooms.state.RoomsNotFetched(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__9612__auto__,G__25938),null));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25938){
var self__ = this;
var this__9603__auto____$1 = this;
return (new rooms.state.RoomsNotFetched(G__25938,self__.__extmap,self__.__hash));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

rooms.state.RoomsNotFetched.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

rooms.state.RoomsNotFetched.cljs$lang$type = true;

rooms.state.RoomsNotFetched.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"rooms.state/RoomsNotFetched");
});

rooms.state.RoomsNotFetched.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write(writer__9643__auto__,"rooms.state/RoomsNotFetched");
});

rooms.state.__GT_RoomsNotFetched = (function rooms$state$__GT_RoomsNotFetched(){
return (new rooms.state.RoomsNotFetched(null,null,null));
});

rooms.state.map__GT_RoomsNotFetched = (function rooms$state$map__GT_RoomsNotFetched(G__25942){
return (new rooms.state.RoomsNotFetched(null,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__25942)),null));
});

rooms.state.cache_filters = (function rooms$state$cache_filters(app){
return rooms.cache.cache_value(rooms.state.filters_cache_key,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$filters.cljs$core$IFn$_invoke$arity$1(app),cljs.core.cst$kw$date));
});
rooms.state.load_filters_from_cache = (function rooms$state$load_filters_from_cache(){
var temp__5457__auto__ = rooms.cache.read_cache_value(rooms.state.filters_cache_key);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_filters = temp__5457__auto__;
return cljs.core.reset_BANG_(rooms.state.state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(rooms.state.state),cljs.core.cst$kw$filters,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$filters.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(rooms.state.state)),cached_filters], 0))));
} else {
return null;
}
});
rooms.state.now_local = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs_time.core.time_now());
rooms.state.start_updating_local_now = (function rooms$state$start_updating_local_now(){
document.addEventListener("visibilitychange",(function (){
return cljs.core.reset_BANG_(rooms.state.now_local,cljs_time.core.time_now());
}));

var c__21431__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto__){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto__){
return (function (state_25960){
var state_val_25961 = (state_25960[(1)]);
if((state_val_25961 === (1))){
var state_25960__$1 = state_25960;
var statearr_25962_25969 = state_25960__$1;
(statearr_25962_25969[(2)] = null);

(statearr_25962_25969[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_25961 === (2))){
var inst_25950 = ((1000) * (60));
var inst_25951 = cljs.core.async.timeout(inst_25950);
var state_25960__$1 = state_25960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_25960__$1,(4),inst_25951);
} else {
if((state_val_25961 === (3))){
var inst_25958 = (state_25960[(2)]);
var state_25960__$1 = state_25960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_25960__$1,inst_25958);
} else {
if((state_val_25961 === (4))){
var inst_25953 = (state_25960[(2)]);
var inst_25954 = cljs_time.core.time_now();
var inst_25955 = cljs.core.reset_BANG_(rooms.state.now_local,inst_25954);
var state_25960__$1 = (function (){var statearr_25963 = state_25960;
(statearr_25963[(7)] = inst_25953);

(statearr_25963[(8)] = inst_25955);

return statearr_25963;
})();
var statearr_25964_25970 = state_25960__$1;
(statearr_25964_25970[(2)] = null);

(statearr_25964_25970[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
});})(c__21431__auto__))
;
return ((function (switch__21329__auto__,c__21431__auto__){
return (function() {
var rooms$state$start_updating_local_now_$_state_machine__21330__auto__ = null;
var rooms$state$start_updating_local_now_$_state_machine__21330__auto____0 = (function (){
var statearr_25965 = [null,null,null,null,null,null,null,null,null];
(statearr_25965[(0)] = rooms$state$start_updating_local_now_$_state_machine__21330__auto__);

(statearr_25965[(1)] = (1));

return statearr_25965;
});
var rooms$state$start_updating_local_now_$_state_machine__21330__auto____1 = (function (state_25960){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_25960);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e25966){if((e25966 instanceof Object)){
var ex__21333__auto__ = e25966;
var statearr_25967_25971 = state_25960;
(statearr_25967_25971[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_25960);

return cljs.core.cst$kw$recur;
} else {
throw e25966;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__25972 = state_25960;
state_25960 = G__25972;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
rooms$state$start_updating_local_now_$_state_machine__21330__auto__ = function(state_25960){
switch(arguments.length){
case 0:
return rooms$state$start_updating_local_now_$_state_machine__21330__auto____0.call(this);
case 1:
return rooms$state$start_updating_local_now_$_state_machine__21330__auto____1.call(this,state_25960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$state$start_updating_local_now_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$state$start_updating_local_now_$_state_machine__21330__auto____0;
rooms$state$start_updating_local_now_$_state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$state$start_updating_local_now_$_state_machine__21330__auto____1;
return rooms$state$start_updating_local_now_$_state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto__))
})();
var state__21433__auto__ = (function (){var statearr_25968 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_25968[(6)] = c__21431__auto__);

return statearr_25968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto__))
);

return c__21431__auto__;
});
rooms.state.current_language = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$en,cljs.core.cst$kw$name,"EN"], null)),cljs.core.cst$kw$rooms2_DASH_language);
rooms.state.switch_language = (function rooms$state$switch_language(new_language){
return cljs.core.reset_BANG_(rooms.state.current_language,new_language);
});
rooms.state.CheckFilterCapacity.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.CheckFilterCapacity.prototype.tuck$core$Event$process_event$arity$2 = (function (p__25973,app){
var map__25974 = p__25973;
var map__25974__$1 = ((((!((map__25974 == null)))?((((map__25974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25974):map__25974);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25974__$1,cljs.core.cst$kw$value);
var map__25976 = this;
var map__25976__$1 = ((((!((map__25976 == null)))?((((map__25976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25976):map__25976);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25976__$1,cljs.core.cst$kw$value);
var new_state = cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$capacity], null),value__$1);
rooms.state.cache_filters(new_state);

return new_state;
});

rooms.state.SelectDate.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.SelectDate.prototype.tuck$core$Event$process_event$arity$2 = (function (p__25978,app){
var map__25979 = p__25978;
var map__25979__$1 = ((((!((map__25979 == null)))?((((map__25979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25979):map__25979);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25979__$1,cljs.core.cst$kw$date);
var map__25981 = this;
var map__25981__$1 = ((((!((map__25981 == null)))?((((map__25981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25981.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25981):map__25981);
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25981__$1,cljs.core.cst$kw$date);
return cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$date], null),date__$1);
});

rooms.state.CheckFilterLocations.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.CheckFilterLocations.prototype.tuck$core$Event$process_event$arity$2 = (function (p__25983,app){
var map__25984 = p__25983;
var map__25984__$1 = ((((!((map__25984 == null)))?((((map__25984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25984):map__25984);
var location_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25984__$1,cljs.core.cst$kw$location_DASH_id);
var map__25986 = this;
var map__25986__$1 = ((((!((map__25986 == null)))?((((map__25986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25986):map__25986);
var location_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25986__$1,cljs.core.cst$kw$location_DASH_id);
var current_locations = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$locations], null));
var checked_QMARK_ = (function (){var fexpr__25988 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$locations], null));
return (fexpr__25988.cljs$core$IFn$_invoke$arity$1 ? fexpr__25988.cljs$core$IFn$_invoke$arity$1(location_id__$1) : fexpr__25988.call(null,location_id__$1));
})();
var new_state = (cljs.core.truth_(checked_QMARK_)?cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$locations], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(current_locations,location_id__$1)):cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$locations], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_locations,location_id__$1)));
rooms.state.cache_filters(new_state);

return new_state;
});

rooms.state.SelectCalendarMonth.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.SelectCalendarMonth.prototype.tuck$core$Event$process_event$arity$2 = (function (p__25989,app){
var map__25990 = p__25989;
var map__25990__$1 = ((((!((map__25990 == null)))?((((map__25990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25990):map__25990);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25990__$1,cljs.core.cst$kw$date);
var map__25992 = this;
var map__25992__$1 = ((((!((map__25992 == null)))?((((map__25992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25992):map__25992);
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25992__$1,cljs.core.cst$kw$date);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$calendar_DASH_month,date__$1);
});

rooms.state.FetchRooms.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.FetchRooms.prototype.tuck$core$Event$process_event$arity$2 = (function (p__25994,app){
var map__25995 = p__25994;
var map__25995__$1 = ((((!((map__25995 == null)))?((((map__25995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25995.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25995):map__25995);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25995__$1,cljs.core.cst$kw$date);
var map__25997 = this;
var map__25997__$1 = ((((!((map__25997 == null)))?((((map__25997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25997.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25997):map__25997);
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25997__$1,cljs.core.cst$kw$date);
var rooms_fetched = tuck.core.send_async_BANG_(rooms.state.__GT_RoomsFetched);
var rooms_not_fetched = tuck.core.send_async_BANG_(rooms.state.__GT_RoomsNotFetched);
var c__21431__auto___26040 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date){
return (function (){
var f__21432__auto__ = (function (){var switch__21329__auto__ = ((function (c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date){
return (function (state_26014){
var state_val_26015 = (state_26014[(1)]);
if((state_val_26015 === (1))){
var inst_25999 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26000 = [cljs.core.cst$kw$filters,cljs.core.cst$kw$date];
var inst_26001 = (new cljs.core.PersistentVector(null,2,(5),inst_25999,inst_26000,null));
var inst_26002 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,inst_26001);
var inst_26003 = rooms.fmt.date__GT_iso_8601(inst_26002);
var inst_26004 = [cljs.core.cst$kw$success,cljs.core.cst$kw$error];
var inst_26005 = (function (){return ((function (inst_25999,inst_26000,inst_26001,inst_26002,inst_26003,inst_26004,state_val_26015,c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date){
return (function (response){
return (rooms_fetched.cljs$core$IFn$_invoke$arity$2 ? rooms_fetched.cljs$core$IFn$_invoke$arity$2(date__$1,response) : rooms_fetched.call(null,date__$1,response));
});
;})(inst_25999,inst_26000,inst_26001,inst_26002,inst_26003,inst_26004,state_val_26015,c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date))
})();
var inst_26006 = (function (){return ((function (inst_25999,inst_26000,inst_26001,inst_26002,inst_26003,inst_26004,inst_26005,state_val_26015,c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date){
return (function (response){
return (rooms_not_fetched.cljs$core$IFn$_invoke$arity$0 ? rooms_not_fetched.cljs$core$IFn$_invoke$arity$0() : rooms_not_fetched.call(null));
});
;})(inst_25999,inst_26000,inst_26001,inst_26002,inst_26003,inst_26004,inst_26005,state_val_26015,c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date))
})();
var inst_26007 = [inst_26005,inst_26006];
var inst_26008 = cljs.core.PersistentHashMap.fromArrays(inst_26004,inst_26007);
var inst_26009 = [cljs.core.cst$kw$use_DASH_cache_QMARK_];
var inst_26010 = [true];
var inst_26011 = cljs.core.PersistentHashMap.fromArrays(inst_26009,inst_26010);
var inst_26012 = rooms.communication.fetch_rooms(inst_26003,inst_26008,inst_26011);
var state_26014__$1 = state_26014;
return cljs.core.async.impl.ioc_helpers.return_chan(state_26014__$1,inst_26012);
} else {
return null;
}
});})(c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date))
;
return ((function (switch__21329__auto__,c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date){
return (function() {
var rooms$state$state_machine__21330__auto__ = null;
var rooms$state$state_machine__21330__auto____0 = (function (){
var statearr_26016 = [null,null,null,null,null,null,null];
(statearr_26016[(0)] = rooms$state$state_machine__21330__auto__);

(statearr_26016[(1)] = (1));

return statearr_26016;
});
var rooms$state$state_machine__21330__auto____1 = (function (state_26014){
while(true){
var ret_value__21331__auto__ = (function (){try{while(true){
var result__21332__auto__ = switch__21329__auto__(state_26014);
if(cljs.core.keyword_identical_QMARK_(result__21332__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__21332__auto__;
}
break;
}
}catch (e26017){if((e26017 instanceof Object)){
var ex__21333__auto__ = e26017;
var statearr_26018_26041 = state_26014;
(statearr_26018_26041[(5)] = ex__21333__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_26014);

return cljs.core.cst$kw$recur;
} else {
throw e26017;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__21331__auto__,cljs.core.cst$kw$recur)){
var G__26042 = state_26014;
state_26014 = G__26042;
continue;
} else {
return ret_value__21331__auto__;
}
break;
}
});
rooms$state$state_machine__21330__auto__ = function(state_26014){
switch(arguments.length){
case 0:
return rooms$state$state_machine__21330__auto____0.call(this);
case 1:
return rooms$state$state_machine__21330__auto____1.call(this,state_26014);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$state$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$state$state_machine__21330__auto____0;
rooms$state$state_machine__21330__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$state$state_machine__21330__auto____1;
return rooms$state$state_machine__21330__auto__;
})()
;})(switch__21329__auto__,c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date))
})();
var state__21433__auto__ = (function (){var statearr_26019 = (f__21432__auto__.cljs$core$IFn$_invoke$arity$0 ? f__21432__auto__.cljs$core$IFn$_invoke$arity$0() : f__21432__auto__.call(null));
(statearr_26019[(6)] = c__21431__auto___26040);

return statearr_26019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__21433__auto__);
});})(c__21431__auto___26040,rooms_fetched,rooms_not_fetched,map__25997,map__25997__$1,date__$1,map__25995,map__25995__$1,date))
);


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$fetching_DASH_rooms_QMARK_,true);
});

rooms.state.ShowBookings.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.ShowBookings.prototype.tuck$core$Event$process_event$arity$2 = (function (p__26020,app){
var map__26021 = p__26020;
var map__26021__$1 = ((((!((map__26021 == null)))?((((map__26021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26021):map__26021);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26021__$1,cljs.core.cst$kw$date);
var map__26023 = this;
var map__26023__$1 = ((((!((map__26023 == null)))?((((map__26023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26023.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26023):map__26023);
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26023__$1,cljs.core.cst$kw$date);
var temp__5455__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rooms,rooms.fmt.date__GT_iso_8601(date__$1)], null));
if(cljs.core.truth_(temp__5455__auto__)){
var rooms__$1 = temp__5455__auto__;
var saved_timestamp = cljs.core.cst$kw$saved.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rooms__$1));
var max_age_in_seconds = (30);
var result_too_old_QMARK_ = (cljs_time.core.in_seconds(cljs_time.core.interval(saved_timestamp,cljs_time.core.time_now())) > max_age_in_seconds);
if(result_too_old_QMARK_){
return app;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$showing_DASH_bookings,date__$1);
}
} else {
return app;
}
});

rooms.state.RoomsNotFetched.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.RoomsNotFetched.prototype.tuck$core$Event$process_event$arity$2 = (function (_,app){
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app,cljs.core.cst$kw$fetching_DASH_rooms_QMARK_,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$server_DASH_connection_QMARK_,false], 0));
});

rooms.state.CheckFilterBoolean.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.CheckFilterBoolean.prototype.tuck$core$Event$process_event$arity$2 = (function (p__26025,app){
var map__26026 = p__26025;
var map__26026__$1 = ((((!((map__26026 == null)))?((((map__26026.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26026.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26026):map__26026);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,cljs.core.cst$kw$name);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26026__$1,cljs.core.cst$kw$value);
var map__26028 = this;
var map__26028__$1 = ((((!((map__26028 == null)))?((((map__26028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26028):map__26028);
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,cljs.core.cst$kw$name);
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26028__$1,cljs.core.cst$kw$value);
var new_state = cljs.core.assoc_in(app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,name__$1], null),value__$1);
rooms.state.cache_filters(new_state);

return new_state;
});

rooms.state.RoomsFetched.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.RoomsFetched.prototype.tuck$core$Event$process_event$arity$2 = (function (p__26030,app){
var map__26031 = p__26030;
var map__26031__$1 = ((((!((map__26031 == null)))?((((map__26031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26031):map__26031);
var rooms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26031__$1,cljs.core.cst$kw$rooms);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26031__$1,cljs.core.cst$kw$date);
var map__26033 = this;
var map__26033__$1 = ((((!((map__26033 == null)))?((((map__26033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26033.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26033):map__26033);
var rooms__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26033__$1,cljs.core.cst$kw$rooms);
var date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26033__$1,cljs.core.cst$kw$date);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rooms,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$rooms.cljs$core$IFn$_invoke$arity$1(app),cljs.core.PersistentArrayMap.createAsIfByAssoc([rooms.fmt.date__GT_iso_8601(date__$1),cljs.core.with_meta(rooms__$2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$saved,cljs_time.core.time_now()], null))])], 0)),cljs.core.cst$kw$server_DASH_connection_QMARK_,true], null),(function (){var current_date = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$filters,cljs.core.cst$kw$date], null));
if(cljs.core.truth_(rooms.date.same_date_QMARK_(date__$1,current_date))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$showing_DASH_bookings,current_date,cljs.core.cst$kw$fetching_DASH_rooms_QMARK_,false], null);
} else {
return null;
}
})()], 0));
});

rooms.state.SetFilters.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.SetFilters.prototype.tuck$core$Event$process_event$arity$2 = (function (p__26035,app){
var map__26036 = p__26035;
var map__26036__$1 = ((((!((map__26036 == null)))?((((map__26036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26036.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26036):map__26036);
var filters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26036__$1,cljs.core.cst$kw$filters);
var map__26038 = this;
var map__26038__$1 = ((((!((map__26038 == null)))?((((map__26038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26038):map__26038);
var filters__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26038__$1,cljs.core.cst$kw$filters);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app,cljs.core.cst$kw$filters,filters__$1);
});
