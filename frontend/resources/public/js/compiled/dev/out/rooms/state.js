// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.state');
goog.require('cljs.core');
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
rooms.state.state = reagent.ratom.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"date","date",-1463434462),cljs_time.core.time_now.call(null),new cljs.core.Keyword(null,"locations","locations",-435476560),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"urgency?","urgency?",-697725455),false,new cljs.core.Keyword(null,"video?","video?",1029887787),false,new cljs.core.Keyword(null,"internal?","internal?",-383058705),false,new cljs.core.Keyword(null,"client?","client?",-1933413058),false,new cljs.core.Keyword(null,"capacity","capacity",72689734),(0)], null),new cljs.core.Keyword(null,"calendar-month","calendar-month",1157136365),cljs_time.core.time_now.call(null),new cljs.core.Keyword(null,"showing-bookings","showing-bookings",-1294727436),null,new cljs.core.Keyword(null,"rooms","rooms",1196158176),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"server-connection?","server-connection?",-1416673702),true,new cljs.core.Keyword(null,"fetching-rooms?","fetching-rooms?",-848495851),false], null));

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
rooms.state.SetFilters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.SetFilters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52354,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52358 = k52354;
var G__52358__$1 = (((G__52358 instanceof cljs.core.Keyword))?G__52358.fqn:null);
switch (G__52358__$1) {
case "filters":
return self__.filters;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52354,else__30870__auto__);

}
});

rooms.state.SetFilters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.SetFilters{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"filters","filters",974726919),self__.filters],null))], null),self__.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52353){
var self__ = this;
var G__52353__$1 = this;
return (new cljs.core.RecordIter((0),G__52353__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.SetFilters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.SetFilters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.SetFilters(self__.filters,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.SetFilters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (-946215963 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.SetFilters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52355,other52356){
var self__ = this;
var this52355__$1 = this;
return (!((other52356 == null))) && ((this52355__$1.constructor === other52356.constructor)) && (cljs.core._EQ_.call(null,this52355__$1.filters,other52356.filters)) && (cljs.core._EQ_.call(null,this52355__$1.__extmap,other52356.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filters","filters",974726919),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.SetFilters(self__.filters,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.SetFilters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52353){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52359 = cljs.core.keyword_identical_QMARK_;
var expr__52360 = k__30875__auto__;
if(cljs.core.truth_(pred__52359.call(null,new cljs.core.Keyword(null,"filters","filters",974726919),expr__52360))){
return (new rooms.state.SetFilters(G__52353,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.SetFilters(self__.filters,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52353),null));
}
});

rooms.state.SetFilters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"filters","filters",974726919),self__.filters],null))], null),self__.__extmap));
});

rooms.state.SetFilters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52353){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.SetFilters(self__.filters,G__52353,self__.__extmap,self__.__hash));
});

rooms.state.SetFilters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.SetFilters.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filters","filters",-1679708850,null)], null);
});

rooms.state.SetFilters.cljs$lang$type = true;

rooms.state.SetFilters.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/SetFilters");
});

rooms.state.SetFilters.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/SetFilters");
});

rooms.state.__GT_SetFilters = (function rooms$state$__GT_SetFilters(filters){
return (new rooms.state.SetFilters(filters,null,null,null));
});

rooms.state.map__GT_SetFilters = (function rooms$state$map__GT_SetFilters(G__52357){
return (new rooms.state.SetFilters(new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(G__52357),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52357,new cljs.core.Keyword(null,"filters","filters",974726919))),null));
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
rooms.state.FetchRooms.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.FetchRooms.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52364,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52368 = k52364;
var G__52368__$1 = (((G__52368 instanceof cljs.core.Keyword))?G__52368.fqn:null);
switch (G__52368__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52364,else__30870__auto__);

}
});

rooms.state.FetchRooms.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.FetchRooms{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52363){
var self__ = this;
var G__52363__$1 = this;
return (new cljs.core.RecordIter((0),G__52363__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.FetchRooms.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.FetchRooms.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.FetchRooms(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.FetchRooms.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (1546763119 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.FetchRooms.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52365,other52366){
var self__ = this;
var this52365__$1 = this;
return (!((other52366 == null))) && ((this52365__$1.constructor === other52366.constructor)) && (cljs.core._EQ_.call(null,this52365__$1.date,other52366.date)) && (cljs.core._EQ_.call(null,this52365__$1.__extmap,other52366.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.FetchRooms(self__.date,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.FetchRooms.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52363){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52369 = cljs.core.keyword_identical_QMARK_;
var expr__52370 = k__30875__auto__;
if(cljs.core.truth_(pred__52369.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),expr__52370))){
return (new rooms.state.FetchRooms(G__52363,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.FetchRooms(self__.date,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52363),null));
}
});

rooms.state.FetchRooms.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.FetchRooms.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52363){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.FetchRooms(self__.date,G__52363,self__.__extmap,self__.__hash));
});

rooms.state.FetchRooms.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.FetchRooms.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null)], null);
});

rooms.state.FetchRooms.cljs$lang$type = true;

rooms.state.FetchRooms.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/FetchRooms");
});

rooms.state.FetchRooms.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/FetchRooms");
});

rooms.state.__GT_FetchRooms = (function rooms$state$__GT_FetchRooms(date){
return (new rooms.state.FetchRooms(date,null,null,null));
});

rooms.state.map__GT_FetchRooms = (function rooms$state$map__GT_FetchRooms(G__52367){
return (new rooms.state.FetchRooms(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__52367),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52367,new cljs.core.Keyword(null,"date","date",-1463434462))),null));
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
rooms.state.SelectDate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.SelectDate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52374,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52378 = k52374;
var G__52378__$1 = (((G__52378 instanceof cljs.core.Keyword))?G__52378.fqn:null);
switch (G__52378__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52374,else__30870__auto__);

}
});

rooms.state.SelectDate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.SelectDate{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52373){
var self__ = this;
var G__52373__$1 = this;
return (new cljs.core.RecordIter((0),G__52373__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.SelectDate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.SelectDate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.SelectDate(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.SelectDate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (-142882328 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.SelectDate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52375,other52376){
var self__ = this;
var this52375__$1 = this;
return (!((other52376 == null))) && ((this52375__$1.constructor === other52376.constructor)) && (cljs.core._EQ_.call(null,this52375__$1.date,other52376.date)) && (cljs.core._EQ_.call(null,this52375__$1.__extmap,other52376.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.SelectDate(self__.date,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.SelectDate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52373){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52379 = cljs.core.keyword_identical_QMARK_;
var expr__52380 = k__30875__auto__;
if(cljs.core.truth_(pred__52379.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),expr__52380))){
return (new rooms.state.SelectDate(G__52373,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.SelectDate(self__.date,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52373),null));
}
});

rooms.state.SelectDate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectDate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52373){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.SelectDate(self__.date,G__52373,self__.__extmap,self__.__hash));
});

rooms.state.SelectDate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.SelectDate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null)], null);
});

rooms.state.SelectDate.cljs$lang$type = true;

rooms.state.SelectDate.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/SelectDate");
});

rooms.state.SelectDate.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/SelectDate");
});

rooms.state.__GT_SelectDate = (function rooms$state$__GT_SelectDate(date){
return (new rooms.state.SelectDate(date,null,null,null));
});

rooms.state.map__GT_SelectDate = (function rooms$state$map__GT_SelectDate(G__52377){
return (new rooms.state.SelectDate(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__52377),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52377,new cljs.core.Keyword(null,"date","date",-1463434462))),null));
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
rooms.state.CheckFilterLocations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52384,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52388 = k52384;
var G__52388__$1 = (((G__52388 instanceof cljs.core.Keyword))?G__52388.fqn:null);
switch (G__52388__$1) {
case "location-id":
return self__.location_id;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52384,else__30870__auto__);

}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.CheckFilterLocations{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location-id","location-id",-1893267083),self__.location_id],null))], null),self__.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52383){
var self__ = this;
var G__52383__$1 = this;
return (new cljs.core.RecordIter((0),G__52383__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"location-id","location-id",-1893267083)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.CheckFilterLocations(self__.location_id,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (870121298 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52385,other52386){
var self__ = this;
var this52385__$1 = this;
return (!((other52386 == null))) && ((this52385__$1.constructor === other52386.constructor)) && (cljs.core._EQ_.call(null,this52385__$1.location_id,other52386.location_id)) && (cljs.core._EQ_.call(null,this52385__$1.__extmap,other52386.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"location-id","location-id",-1893267083),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.CheckFilterLocations(self__.location_id,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52383){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52389 = cljs.core.keyword_identical_QMARK_;
var expr__52390 = k__30875__auto__;
if(cljs.core.truth_(pred__52389.call(null,new cljs.core.Keyword(null,"location-id","location-id",-1893267083),expr__52390))){
return (new rooms.state.CheckFilterLocations(G__52383,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.CheckFilterLocations(self__.location_id,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52383),null));
}
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"location-id","location-id",-1893267083),self__.location_id],null))], null),self__.__extmap));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52383){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.CheckFilterLocations(self__.location_id,G__52383,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterLocations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.CheckFilterLocations.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"location-id","location-id",-252735556,null)], null);
});

rooms.state.CheckFilterLocations.cljs$lang$type = true;

rooms.state.CheckFilterLocations.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/CheckFilterLocations");
});

rooms.state.CheckFilterLocations.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/CheckFilterLocations");
});

rooms.state.__GT_CheckFilterLocations = (function rooms$state$__GT_CheckFilterLocations(location_id){
return (new rooms.state.CheckFilterLocations(location_id,null,null,null));
});

rooms.state.map__GT_CheckFilterLocations = (function rooms$state$map__GT_CheckFilterLocations(G__52387){
return (new rooms.state.CheckFilterLocations(new cljs.core.Keyword(null,"location-id","location-id",-1893267083).cljs$core$IFn$_invoke$arity$1(G__52387),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52387,new cljs.core.Keyword(null,"location-id","location-id",-1893267083))),null));
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
rooms.state.CheckFilterBoolean.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52394,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52398 = k52394;
var G__52398__$1 = (((G__52398 instanceof cljs.core.Keyword))?G__52398.fqn:null);
switch (G__52398__$1) {
case "name":
return self__.name;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52394,else__30870__auto__);

}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.CheckFilterBoolean{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52393){
var self__ = this;
var G__52393__$1 = this;
return (new cljs.core.RecordIter((0),G__52393__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (1503094837 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52395,other52396){
var self__ = this;
var this52395__$1 = this;
return (!((other52396 == null))) && ((this52395__$1.constructor === other52396.constructor)) && (cljs.core._EQ_.call(null,this52395__$1.name,other52396.name)) && (cljs.core._EQ_.call(null,this52395__$1.value,other52396.value)) && (cljs.core._EQ_.call(null,this52395__$1.__extmap,other52396.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52393){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52399 = cljs.core.keyword_identical_QMARK_;
var expr__52400 = k__30875__auto__;
if(cljs.core.truth_(pred__52399.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__52400))){
return (new rooms.state.CheckFilterBoolean(G__52393,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52399.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__52400))){
return (new rooms.state.CheckFilterBoolean(self__.name,G__52393,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52393),null));
}
}
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52393){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.CheckFilterBoolean(self__.name,self__.value,G__52393,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterBoolean.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.CheckFilterBoolean.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

rooms.state.CheckFilterBoolean.cljs$lang$type = true;

rooms.state.CheckFilterBoolean.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/CheckFilterBoolean");
});

rooms.state.CheckFilterBoolean.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/CheckFilterBoolean");
});

rooms.state.__GT_CheckFilterBoolean = (function rooms$state$__GT_CheckFilterBoolean(name,value){
return (new rooms.state.CheckFilterBoolean(name,value,null,null,null));
});

rooms.state.map__GT_CheckFilterBoolean = (function rooms$state$map__GT_CheckFilterBoolean(G__52397){
return (new rooms.state.CheckFilterBoolean(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__52397),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__52397),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52397,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217))),null));
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
rooms.state.CheckFilterCapacity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52404,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52408 = k52404;
var G__52408__$1 = (((G__52408 instanceof cljs.core.Keyword))?G__52408.fqn:null);
switch (G__52408__$1) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52404,else__30870__auto__);

}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.CheckFilterCapacity{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52403){
var self__ = this;
var G__52403__$1 = this;
return (new cljs.core.RecordIter((0),G__52403__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.CheckFilterCapacity(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (-1109727865 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52405,other52406){
var self__ = this;
var this52405__$1 = this;
return (!((other52406 == null))) && ((this52405__$1.constructor === other52406.constructor)) && (cljs.core._EQ_.call(null,this52405__$1.value,other52406.value)) && (cljs.core._EQ_.call(null,this52405__$1.__extmap,other52406.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.CheckFilterCapacity(self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52403){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52409 = cljs.core.keyword_identical_QMARK_;
var expr__52410 = k__30875__auto__;
if(cljs.core.truth_(pred__52409.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__52410))){
return (new rooms.state.CheckFilterCapacity(G__52403,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.CheckFilterCapacity(self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52403),null));
}
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52403){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.CheckFilterCapacity(self__.value,G__52403,self__.__extmap,self__.__hash));
});

rooms.state.CheckFilterCapacity.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.CheckFilterCapacity.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

rooms.state.CheckFilterCapacity.cljs$lang$type = true;

rooms.state.CheckFilterCapacity.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/CheckFilterCapacity");
});

rooms.state.CheckFilterCapacity.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/CheckFilterCapacity");
});

rooms.state.__GT_CheckFilterCapacity = (function rooms$state$__GT_CheckFilterCapacity(value){
return (new rooms.state.CheckFilterCapacity(value,null,null,null));
});

rooms.state.map__GT_CheckFilterCapacity = (function rooms$state$map__GT_CheckFilterCapacity(G__52407){
return (new rooms.state.CheckFilterCapacity(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__52407),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52407,new cljs.core.Keyword(null,"value","value",305978217))),null));
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
rooms.state.SelectCalendarMonth.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52414,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52418 = k52414;
var G__52418__$1 = (((G__52418 instanceof cljs.core.Keyword))?G__52418.fqn:null);
switch (G__52418__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52414,else__30870__auto__);

}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.SelectCalendarMonth{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52413){
var self__ = this;
var G__52413__$1 = this;
return (new cljs.core.RecordIter((0),G__52413__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.SelectCalendarMonth(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (1602594821 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52415,other52416){
var self__ = this;
var this52415__$1 = this;
return (!((other52416 == null))) && ((this52415__$1.constructor === other52416.constructor)) && (cljs.core._EQ_.call(null,this52415__$1.date,other52416.date)) && (cljs.core._EQ_.call(null,this52415__$1.__extmap,other52416.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.SelectCalendarMonth(self__.date,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52413){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52419 = cljs.core.keyword_identical_QMARK_;
var expr__52420 = k__30875__auto__;
if(cljs.core.truth_(pred__52419.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),expr__52420))){
return (new rooms.state.SelectCalendarMonth(G__52413,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.SelectCalendarMonth(self__.date,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52413),null));
}
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52413){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.SelectCalendarMonth(self__.date,G__52413,self__.__extmap,self__.__hash));
});

rooms.state.SelectCalendarMonth.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.SelectCalendarMonth.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null)], null);
});

rooms.state.SelectCalendarMonth.cljs$lang$type = true;

rooms.state.SelectCalendarMonth.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/SelectCalendarMonth");
});

rooms.state.SelectCalendarMonth.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/SelectCalendarMonth");
});

rooms.state.__GT_SelectCalendarMonth = (function rooms$state$__GT_SelectCalendarMonth(date){
return (new rooms.state.SelectCalendarMonth(date,null,null,null));
});

rooms.state.map__GT_SelectCalendarMonth = (function rooms$state$map__GT_SelectCalendarMonth(G__52417){
return (new rooms.state.SelectCalendarMonth(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__52417),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52417,new cljs.core.Keyword(null,"date","date",-1463434462))),null));
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
rooms.state.ShowBookings.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.ShowBookings.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52424,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52428 = k52424;
var G__52428__$1 = (((G__52428 instanceof cljs.core.Keyword))?G__52428.fqn:null);
switch (G__52428__$1) {
case "date":
return self__.date;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52424,else__30870__auto__);

}
});

rooms.state.ShowBookings.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.ShowBookings{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52423){
var self__ = this;
var G__52423__$1 = this;
return (new cljs.core.RecordIter((0),G__52423__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.ShowBookings.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.ShowBookings.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.ShowBookings(self__.date,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.ShowBookings.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (939677492 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.ShowBookings.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52425,other52426){
var self__ = this;
var this52425__$1 = this;
return (!((other52426 == null))) && ((this52425__$1.constructor === other52426.constructor)) && (cljs.core._EQ_.call(null,this52425__$1.date,other52426.date)) && (cljs.core._EQ_.call(null,this52425__$1.__extmap,other52426.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"date","date",-1463434462),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.ShowBookings(self__.date,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.ShowBookings.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52423){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52429 = cljs.core.keyword_identical_QMARK_;
var expr__52430 = k__30875__auto__;
if(cljs.core.truth_(pred__52429.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),expr__52430))){
return (new rooms.state.ShowBookings(G__52423,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.ShowBookings(self__.date,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52423),null));
}
});

rooms.state.ShowBookings.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null))], null),self__.__extmap));
});

rooms.state.ShowBookings.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52423){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.ShowBookings(self__.date,G__52423,self__.__extmap,self__.__hash));
});

rooms.state.ShowBookings.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.ShowBookings.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null)], null);
});

rooms.state.ShowBookings.cljs$lang$type = true;

rooms.state.ShowBookings.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/ShowBookings");
});

rooms.state.ShowBookings.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/ShowBookings");
});

rooms.state.__GT_ShowBookings = (function rooms$state$__GT_ShowBookings(date){
return (new rooms.state.ShowBookings(date,null,null,null));
});

rooms.state.map__GT_ShowBookings = (function rooms$state$map__GT_ShowBookings(G__52427){
return (new rooms.state.ShowBookings(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__52427),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52427,new cljs.core.Keyword(null,"date","date",-1463434462))),null));
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
rooms.state.RoomsFetched.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.RoomsFetched.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52434,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52438 = k52434;
var G__52438__$1 = (((G__52438 instanceof cljs.core.Keyword))?G__52438.fqn:null);
switch (G__52438__$1) {
case "date":
return self__.date;

break;
case "rooms":
return self__.rooms;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52434,else__30870__auto__);

}
});

rooms.state.RoomsFetched.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.RoomsFetched{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rooms","rooms",1196158176),self__.rooms],null))], null),self__.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52433){
var self__ = this;
var G__52433__$1 = this;
return (new cljs.core.RecordIter((0),G__52433__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"rooms","rooms",1196158176)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.RoomsFetched.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.RoomsFetched.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.RoomsFetched.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (-238858410 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.RoomsFetched.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52435,other52436){
var self__ = this;
var this52435__$1 = this;
return (!((other52436 == null))) && ((this52435__$1.constructor === other52436.constructor)) && (cljs.core._EQ_.call(null,this52435__$1.date,other52436.date)) && (cljs.core._EQ_.call(null,this52435__$1.rooms,other52436.rooms)) && (cljs.core._EQ_.call(null,this52435__$1.__extmap,other52436.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),null,new cljs.core.Keyword(null,"date","date",-1463434462),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.RoomsFetched.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52433){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52439 = cljs.core.keyword_identical_QMARK_;
var expr__52440 = k__30875__auto__;
if(cljs.core.truth_(pred__52439.call(null,new cljs.core.Keyword(null,"date","date",-1463434462),expr__52440))){
return (new rooms.state.RoomsFetched(G__52433,self__.rooms,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52439.call(null,new cljs.core.Keyword(null,"rooms","rooms",1196158176),expr__52440))){
return (new rooms.state.RoomsFetched(self__.date,G__52433,self__.__meta,self__.__extmap,null));
} else {
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52433),null));
}
}
});

rooms.state.RoomsFetched.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"date","date",-1463434462),self__.date],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rooms","rooms",1196158176),self__.rooms],null))], null),self__.__extmap));
});

rooms.state.RoomsFetched.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52433){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.RoomsFetched(self__.date,self__.rooms,G__52433,self__.__extmap,self__.__hash));
});

rooms.state.RoomsFetched.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.RoomsFetched.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"date","date",177097065,null),new cljs.core.Symbol(null,"rooms","rooms",-1458277593,null)], null);
});

rooms.state.RoomsFetched.cljs$lang$type = true;

rooms.state.RoomsFetched.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/RoomsFetched");
});

rooms.state.RoomsFetched.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/RoomsFetched");
});

rooms.state.__GT_RoomsFetched = (function rooms$state$__GT_RoomsFetched(date,rooms__$1){
return (new rooms.state.RoomsFetched(date,rooms__$1,null,null,null));
});

rooms.state.map__GT_RoomsFetched = (function rooms$state$map__GT_RoomsFetched(G__52437){
return (new rooms.state.RoomsFetched(new cljs.core.Keyword(null,"date","date",-1463434462).cljs$core$IFn$_invoke$arity$1(G__52437),new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(G__52437),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52437,new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"rooms","rooms",1196158176))),null));
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
rooms.state.RoomsNotFetched.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k52444,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__52448 = k52444;
switch (G__52448) {
default:
return cljs.core.get.call(null,self__.__extmap,k52444,else__30870__auto__);

}
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#rooms.state.RoomsNotFetched{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52443){
var self__ = this;
var G__52443__$1 = this;
return (new cljs.core.RecordIter((0),G__52443__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new rooms.state.RoomsNotFetched(self__.__meta,self__.__extmap,self__.__hash));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (0 + cljs.core.count.call(null,self__.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (565395132 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52445,other52446){
var self__ = this;
var this52445__$1 = this;
return (!((other52446 == null))) && ((this52445__$1.constructor === other52446.constructor)) && (cljs.core._EQ_.call(null,this52445__$1.__extmap,other52446.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new rooms.state.RoomsNotFetched(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__52443){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__52449 = cljs.core.keyword_identical_QMARK_;
var expr__52450 = k__30875__auto__;
return (new rooms.state.RoomsNotFetched(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__52443),null));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__52443){
var self__ = this;
var this__30866__auto____$1 = this;
return (new rooms.state.RoomsNotFetched(G__52443,self__.__extmap,self__.__hash));
});

rooms.state.RoomsNotFetched.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

rooms.state.RoomsNotFetched.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

rooms.state.RoomsNotFetched.cljs$lang$type = true;

rooms.state.RoomsNotFetched.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"rooms.state/RoomsNotFetched");
});

rooms.state.RoomsNotFetched.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"rooms.state/RoomsNotFetched");
});

rooms.state.__GT_RoomsNotFetched = (function rooms$state$__GT_RoomsNotFetched(){
return (new rooms.state.RoomsNotFetched(null,null,null));
});

rooms.state.map__GT_RoomsNotFetched = (function rooms$state$map__GT_RoomsNotFetched(G__52447){
return (new rooms.state.RoomsNotFetched(null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52447)),null));
});

rooms.state.cache_filters = (function rooms$state$cache_filters(app){
return rooms.cache.cache_value.call(null,rooms.state.filters_cache_key,cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"date","date",-1463434462)));
});
rooms.state.load_filters_from_cache = (function rooms$state$load_filters_from_cache(){
var temp__5457__auto__ = rooms.cache.read_cache_value.call(null,rooms.state.filters_cache_key);
if(cljs.core.truth_(temp__5457__auto__)){
var cached_filters = temp__5457__auto__;
return cljs.core.reset_BANG_.call(null,rooms.state.state,cljs.core.assoc.call(null,cljs.core.deref.call(null,rooms.state.state),new cljs.core.Keyword(null,"filters","filters",974726919),cljs.core.merge.call(null,new cljs.core.Keyword(null,"filters","filters",974726919).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.state.state)),cached_filters)));
} else {
return null;
}
});
rooms.state.now_local = reagent.core.atom.call(null,cljs_time.core.time_now.call(null));
rooms.state.start_updating_local_now = (function rooms$state$start_updating_local_now(){
document.addEventListener("visibilitychange",(function (){
return cljs.core.reset_BANG_.call(null,rooms.state.now_local,cljs_time.core.time_now.call(null));
}));

var c__33437__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33437__auto__){
return (function (){
var f__33438__auto__ = (function (){var switch__33414__auto__ = ((function (c__33437__auto__){
return (function (state_52464){
var state_val_52465 = (state_52464[(1)]);
if((state_val_52465 === (1))){
var state_52464__$1 = state_52464;
var statearr_52466_52473 = state_52464__$1;
(statearr_52466_52473[(2)] = null);

(statearr_52466_52473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52465 === (2))){
var inst_52454 = ((1000) * (60));
var inst_52455 = cljs.core.async.timeout.call(null,inst_52454);
var state_52464__$1 = state_52464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52464__$1,(4),inst_52455);
} else {
if((state_val_52465 === (3))){
var inst_52462 = (state_52464[(2)]);
var state_52464__$1 = state_52464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52464__$1,inst_52462);
} else {
if((state_val_52465 === (4))){
var inst_52457 = (state_52464[(2)]);
var inst_52458 = cljs_time.core.time_now.call(null);
var inst_52459 = cljs.core.reset_BANG_.call(null,rooms.state.now_local,inst_52458);
var state_52464__$1 = (function (){var statearr_52467 = state_52464;
(statearr_52467[(7)] = inst_52459);

(statearr_52467[(8)] = inst_52457);

return statearr_52467;
})();
var statearr_52468_52474 = state_52464__$1;
(statearr_52468_52474[(2)] = null);

(statearr_52468_52474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__33437__auto__))
;
return ((function (switch__33414__auto__,c__33437__auto__){
return (function() {
var rooms$state$start_updating_local_now_$_state_machine__33415__auto__ = null;
var rooms$state$start_updating_local_now_$_state_machine__33415__auto____0 = (function (){
var statearr_52469 = [null,null,null,null,null,null,null,null,null];
(statearr_52469[(0)] = rooms$state$start_updating_local_now_$_state_machine__33415__auto__);

(statearr_52469[(1)] = (1));

return statearr_52469;
});
var rooms$state$start_updating_local_now_$_state_machine__33415__auto____1 = (function (state_52464){
while(true){
var ret_value__33416__auto__ = (function (){try{while(true){
var result__33417__auto__ = switch__33414__auto__.call(null,state_52464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33417__auto__;
}
break;
}
}catch (e52470){if((e52470 instanceof Object)){
var ex__33418__auto__ = e52470;
var statearr_52471_52475 = state_52464;
(statearr_52471_52475[(5)] = ex__33418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52470;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52476 = state_52464;
state_52464 = G__52476;
continue;
} else {
return ret_value__33416__auto__;
}
break;
}
});
rooms$state$start_updating_local_now_$_state_machine__33415__auto__ = function(state_52464){
switch(arguments.length){
case 0:
return rooms$state$start_updating_local_now_$_state_machine__33415__auto____0.call(this);
case 1:
return rooms$state$start_updating_local_now_$_state_machine__33415__auto____1.call(this,state_52464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$state$start_updating_local_now_$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$state$start_updating_local_now_$_state_machine__33415__auto____0;
rooms$state$start_updating_local_now_$_state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$state$start_updating_local_now_$_state_machine__33415__auto____1;
return rooms$state$start_updating_local_now_$_state_machine__33415__auto__;
})()
;})(switch__33414__auto__,c__33437__auto__))
})();
var state__33439__auto__ = (function (){var statearr_52472 = f__33438__auto__.call(null);
(statearr_52472[(6)] = c__33437__auto__);

return statearr_52472;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33439__auto__);
});})(c__33437__auto__))
);

return c__33437__auto__;
});
rooms.state.current_language = alandipert.storage_atom.local_storage.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"en","en",88457073),new cljs.core.Keyword(null,"name","name",1843675177),"EN"], null)),new cljs.core.Keyword(null,"rooms2-language","rooms2-language",1383446935));
rooms.state.switch_language = (function rooms$state$switch_language(new_language){
return cljs.core.reset_BANG_.call(null,rooms.state.current_language,new_language);
});
rooms.state.CheckFilterCapacity.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.CheckFilterCapacity.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52477,app){
var map__52478 = p__52477;
var map__52478__$1 = ((((!((map__52478 == null)))?((((map__52478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52478.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52478):map__52478);
var value = cljs.core.get.call(null,map__52478__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__52480 = this;
var map__52480__$1 = ((((!((map__52480 == null)))?((((map__52480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52480):map__52480);
var value__$1 = cljs.core.get.call(null,map__52480__$1,new cljs.core.Keyword(null,"value","value",305978217));
var new_state = cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"capacity","capacity",72689734)], null),value__$1);
rooms.state.cache_filters.call(null,new_state);

return new_state;
});

rooms.state.SelectDate.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.SelectDate.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52482,app){
var map__52483 = p__52482;
var map__52483__$1 = ((((!((map__52483 == null)))?((((map__52483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52483):map__52483);
var date = cljs.core.get.call(null,map__52483__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var map__52485 = this;
var map__52485__$1 = ((((!((map__52485 == null)))?((((map__52485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52485.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52485):map__52485);
var date__$1 = cljs.core.get.call(null,map__52485__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)], null),date__$1);
});

rooms.state.CheckFilterLocations.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.CheckFilterLocations.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52487,app){
var map__52488 = p__52487;
var map__52488__$1 = ((((!((map__52488 == null)))?((((map__52488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52488.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52488):map__52488);
var location_id = cljs.core.get.call(null,map__52488__$1,new cljs.core.Keyword(null,"location-id","location-id",-1893267083));
var map__52490 = this;
var map__52490__$1 = ((((!((map__52490 == null)))?((((map__52490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52490):map__52490);
var location_id__$1 = cljs.core.get.call(null,map__52490__$1,new cljs.core.Keyword(null,"location-id","location-id",-1893267083));
var current_locations = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"locations","locations",-435476560)], null));
var checked_QMARK_ = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"locations","locations",-435476560)], null)).call(null,location_id__$1);
var new_state = (cljs.core.truth_(checked_QMARK_)?cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"locations","locations",-435476560)], null),cljs.core.disj.call(null,current_locations,location_id__$1)):cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"locations","locations",-435476560)], null),cljs.core.conj.call(null,current_locations,location_id__$1)));
rooms.state.cache_filters.call(null,new_state);

return new_state;
});

rooms.state.SelectCalendarMonth.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.SelectCalendarMonth.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52492,app){
var map__52493 = p__52492;
var map__52493__$1 = ((((!((map__52493 == null)))?((((map__52493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52493.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52493):map__52493);
var date = cljs.core.get.call(null,map__52493__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var map__52495 = this;
var map__52495__$1 = ((((!((map__52495 == null)))?((((map__52495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52495):map__52495);
var date__$1 = cljs.core.get.call(null,map__52495__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"calendar-month","calendar-month",1157136365),date__$1);
});

rooms.state.FetchRooms.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.FetchRooms.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52497,app){
var map__52498 = p__52497;
var map__52498__$1 = ((((!((map__52498 == null)))?((((map__52498.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52498.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52498):map__52498);
var date = cljs.core.get.call(null,map__52498__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var map__52500 = this;
var map__52500__$1 = ((((!((map__52500 == null)))?((((map__52500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52500):map__52500);
var date__$1 = cljs.core.get.call(null,map__52500__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var rooms_fetched = tuck.core.send_async_BANG_.call(null,rooms.state.__GT_RoomsFetched);
var rooms_not_fetched = tuck.core.send_async_BANG_.call(null,rooms.state.__GT_RoomsNotFetched);
var c__33437__auto___52543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date){
return (function (){
var f__33438__auto__ = (function (){var switch__33414__auto__ = ((function (c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date){
return (function (state_52517){
var state_val_52518 = (state_52517[(1)]);
if((state_val_52518 === (1))){
var inst_52502 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52503 = [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)];
var inst_52504 = (new cljs.core.PersistentVector(null,2,(5),inst_52502,inst_52503,null));
var inst_52505 = cljs.core.get_in.call(null,app,inst_52504);
var inst_52506 = rooms.fmt.date__GT_iso_8601.call(null,inst_52505);
var inst_52507 = [new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_52508 = (function (){return ((function (inst_52502,inst_52503,inst_52504,inst_52505,inst_52506,inst_52507,state_val_52518,c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date){
return (function (response){
return rooms_fetched.call(null,date__$1,response);
});
;})(inst_52502,inst_52503,inst_52504,inst_52505,inst_52506,inst_52507,state_val_52518,c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date))
})();
var inst_52509 = (function (){return ((function (inst_52502,inst_52503,inst_52504,inst_52505,inst_52506,inst_52507,inst_52508,state_val_52518,c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date){
return (function (response){
return rooms_not_fetched.call(null);
});
;})(inst_52502,inst_52503,inst_52504,inst_52505,inst_52506,inst_52507,inst_52508,state_val_52518,c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date))
})();
var inst_52510 = [inst_52508,inst_52509];
var inst_52511 = cljs.core.PersistentHashMap.fromArrays(inst_52507,inst_52510);
var inst_52512 = [new cljs.core.Keyword(null,"use-cache?","use-cache?",-81331778)];
var inst_52513 = [true];
var inst_52514 = cljs.core.PersistentHashMap.fromArrays(inst_52512,inst_52513);
var inst_52515 = rooms.communication.fetch_rooms.call(null,inst_52506,inst_52511,inst_52514);
var state_52517__$1 = state_52517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52517__$1,inst_52515);
} else {
return null;
}
});})(c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date))
;
return ((function (switch__33414__auto__,c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date){
return (function() {
var rooms$state$state_machine__33415__auto__ = null;
var rooms$state$state_machine__33415__auto____0 = (function (){
var statearr_52519 = [null,null,null,null,null,null,null];
(statearr_52519[(0)] = rooms$state$state_machine__33415__auto__);

(statearr_52519[(1)] = (1));

return statearr_52519;
});
var rooms$state$state_machine__33415__auto____1 = (function (state_52517){
while(true){
var ret_value__33416__auto__ = (function (){try{while(true){
var result__33417__auto__ = switch__33414__auto__.call(null,state_52517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33417__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33417__auto__;
}
break;
}
}catch (e52520){if((e52520 instanceof Object)){
var ex__33418__auto__ = e52520;
var statearr_52521_52544 = state_52517;
(statearr_52521_52544[(5)] = ex__33418__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52545 = state_52517;
state_52517 = G__52545;
continue;
} else {
return ret_value__33416__auto__;
}
break;
}
});
rooms$state$state_machine__33415__auto__ = function(state_52517){
switch(arguments.length){
case 0:
return rooms$state$state_machine__33415__auto____0.call(this);
case 1:
return rooms$state$state_machine__33415__auto____1.call(this,state_52517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
rooms$state$state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$0 = rooms$state$state_machine__33415__auto____0;
rooms$state$state_machine__33415__auto__.cljs$core$IFn$_invoke$arity$1 = rooms$state$state_machine__33415__auto____1;
return rooms$state$state_machine__33415__auto__;
})()
;})(switch__33414__auto__,c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date))
})();
var state__33439__auto__ = (function (){var statearr_52522 = f__33438__auto__.call(null);
(statearr_52522[(6)] = c__33437__auto___52543);

return statearr_52522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33439__auto__);
});})(c__33437__auto___52543,rooms_fetched,rooms_not_fetched,map__52500,map__52500__$1,date__$1,map__52498,map__52498__$1,date))
);


return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"fetching-rooms?","fetching-rooms?",-848495851),true);
});

rooms.state.ShowBookings.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.ShowBookings.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52523,app){
var map__52524 = p__52523;
var map__52524__$1 = ((((!((map__52524 == null)))?((((map__52524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52524):map__52524);
var date = cljs.core.get.call(null,map__52524__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var map__52526 = this;
var map__52526__$1 = ((((!((map__52526 == null)))?((((map__52526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52526):map__52526);
var date__$1 = cljs.core.get.call(null,map__52526__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var temp__5455__auto__ = cljs.core.get_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),rooms.fmt.date__GT_iso_8601.call(null,date__$1)], null));
if(cljs.core.truth_(temp__5455__auto__)){
var rooms__$1 = temp__5455__auto__;
var saved_timestamp = new cljs.core.Keyword(null,"saved","saved",288760660).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rooms__$1));
var max_age_in_seconds = (30);
var result_too_old_QMARK_ = (cljs_time.core.in_seconds.call(null,cljs_time.core.interval.call(null,saved_timestamp,cljs_time.core.time_now.call(null))) > max_age_in_seconds);
if(result_too_old_QMARK_){
return app;
} else {
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"showing-bookings","showing-bookings",-1294727436),date__$1);
}
} else {
return app;
}
});

rooms.state.RoomsNotFetched.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.RoomsNotFetched.prototype.tuck$core$Event$process_event$arity$2 = (function (_,app){
var ___$1 = this;
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"fetching-rooms?","fetching-rooms?",-848495851),false,new cljs.core.Keyword(null,"server-connection?","server-connection?",-1416673702),false);
});

rooms.state.CheckFilterBoolean.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.CheckFilterBoolean.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52528,app){
var map__52529 = p__52528;
var map__52529__$1 = ((((!((map__52529 == null)))?((((map__52529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52529):map__52529);
var name = cljs.core.get.call(null,map__52529__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__52529__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__52531 = this;
var map__52531__$1 = ((((!((map__52531 == null)))?((((map__52531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52531):map__52531);
var name__$1 = cljs.core.get.call(null,map__52531__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value__$1 = cljs.core.get.call(null,map__52531__$1,new cljs.core.Keyword(null,"value","value",305978217));
var new_state = cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),name__$1], null),value__$1);
rooms.state.cache_filters.call(null,new_state);

return new_state;
});

rooms.state.RoomsFetched.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.RoomsFetched.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52533,app){
var map__52534 = p__52533;
var map__52534__$1 = ((((!((map__52534 == null)))?((((map__52534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52534.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52534):map__52534);
var rooms__$1 = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var date = cljs.core.get.call(null,map__52534__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var map__52536 = this;
var map__52536__$1 = ((((!((map__52536 == null)))?((((map__52536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52536):map__52536);
var rooms__$2 = cljs.core.get.call(null,map__52536__$1,new cljs.core.Keyword(null,"rooms","rooms",1196158176));
var date__$1 = cljs.core.get.call(null,map__52536__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
return cljs.core.merge.call(null,app,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rooms","rooms",1196158176),cljs.core.merge.call(null,new cljs.core.Keyword(null,"rooms","rooms",1196158176).cljs$core$IFn$_invoke$arity$1(app),cljs.core.PersistentArrayMap.createAsIfByAssoc([rooms.fmt.date__GT_iso_8601.call(null,date__$1),cljs.core.with_meta.call(null,rooms__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"saved","saved",288760660),cljs_time.core.time_now.call(null)], null))])),new cljs.core.Keyword(null,"server-connection?","server-connection?",-1416673702),true], null),(function (){var current_date = cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.state.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filters","filters",974726919),new cljs.core.Keyword(null,"date","date",-1463434462)], null));
if(cljs.core.truth_(rooms.date.same_date_QMARK_.call(null,date__$1,current_date))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showing-bookings","showing-bookings",-1294727436),current_date,new cljs.core.Keyword(null,"fetching-rooms?","fetching-rooms?",-848495851),false], null);
} else {
return null;
}
})());
});

rooms.state.SetFilters.prototype.tuck$core$Event$ = cljs.core.PROTOCOL_SENTINEL;

rooms.state.SetFilters.prototype.tuck$core$Event$process_event$arity$2 = (function (p__52538,app){
var map__52539 = p__52538;
var map__52539__$1 = ((((!((map__52539 == null)))?((((map__52539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52539.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52539):map__52539);
var filters = cljs.core.get.call(null,map__52539__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
var map__52541 = this;
var map__52541__$1 = ((((!((map__52541 == null)))?((((map__52541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52541):map__52541);
var filters__$1 = cljs.core.get.call(null,map__52541__$1,new cljs.core.Keyword(null,"filters","filters",974726919));
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"filters","filters",974726919),filters__$1);
});

//# sourceMappingURL=state.js.map?rel=1525170771314
