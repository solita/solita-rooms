// Compiled by ClojureScript 1.9.946 {}
goog.provide('garden.types');
goog.require('cljs.core');

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
garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k60135,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__60139 = k60135;
var G__60139__$1 = (((G__60139 instanceof cljs.core.Keyword))?G__60139.fqn:null);
switch (G__60139__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k60135,else__30870__auto__);

}
});

garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#garden.types.CSSUnit{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60134){
var self__ = this;
var G__60134__$1 = this;
return (new cljs.core.RecordIter((0),G__60134__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (70281654 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60136,other60137){
var self__ = this;
var this60136__$1 = this;
return (!((other60137 == null))) && ((this60136__$1.constructor === other60137.constructor)) && (cljs.core._EQ_.call(null,this60136__$1.unit,other60137.unit)) && (cljs.core._EQ_.call(null,this60136__$1.magnitude,other60137.magnitude)) && (cljs.core._EQ_.call(null,this60136__$1.__extmap,other60137.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__60134){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__60140 = cljs.core.keyword_identical_QMARK_;
var expr__60141 = k__30875__auto__;
if(cljs.core.truth_(pred__60140.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__60141))){
return (new garden.types.CSSUnit(G__60134,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60140.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__60141))){
return (new garden.types.CSSUnit(self__.unit,G__60134,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__60134),null));
}
}
});

garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
});

garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__60134){
var self__ = this;
var this__30866__auto____$1 = this;
return (new garden.types.CSSUnit(self__.unit,self__.magnitude,G__60134,self__.__extmap,self__.__hash));
});

garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
});

garden.types.CSSUnit.cljs$lang$type = true;

garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSUnit");
});

garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"garden.types/CSSUnit");
});

garden.types.__GT_CSSUnit = (function garden$types$__GT_CSSUnit(unit,magnitude){
return (new garden.types.CSSUnit(unit,magnitude,null,null,null));
});

garden.types.map__GT_CSSUnit = (function garden$types$map__GT_CSSUnit(G__60138){
return (new garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__60138),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__60138),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__60138,new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222))),null));
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
garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k60145,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__60149 = k60145;
var G__60149__$1 = (((G__60149 instanceof cljs.core.Keyword))?G__60149.fqn:null);
switch (G__60149__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k60145,else__30870__auto__);

}
});

garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#garden.types.CSSFunction{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60144){
var self__ = this;
var G__60144__$1 = this;
return (new cljs.core.RecordIter((0),G__60144__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (1910311650 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60146,other60147){
var self__ = this;
var this60146__$1 = this;
return (!((other60147 == null))) && ((this60146__$1.constructor === other60147.constructor)) && (cljs.core._EQ_.call(null,this60146__$1.f,other60147.f)) && (cljs.core._EQ_.call(null,this60146__$1.args,other60147.args)) && (cljs.core._EQ_.call(null,this60146__$1.__extmap,other60147.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__60144){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__60150 = cljs.core.keyword_identical_QMARK_;
var expr__60151 = k__30875__auto__;
if(cljs.core.truth_(pred__60150.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__60151))){
return (new garden.types.CSSFunction(G__60144,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60150.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__60151))){
return (new garden.types.CSSFunction(self__.f,G__60144,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__60144),null));
}
}
});

garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__60144){
var self__ = this;
var this__30866__auto____$1 = this;
return (new garden.types.CSSFunction(self__.f,self__.args,G__60144,self__.__extmap,self__.__hash));
});

garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

garden.types.CSSFunction.cljs$lang$type = true;

garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSFunction");
});

garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"garden.types/CSSFunction");
});

garden.types.__GT_CSSFunction = (function garden$types$__GT_CSSFunction(f,args){
return (new garden.types.CSSFunction(f,args,null,null,null));
});

garden.types.map__GT_CSSFunction = (function garden$types$map__GT_CSSFunction(G__60148){
return (new garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__60148),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__60148),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__60148,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576))),null));
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
garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__30867__auto__,k__30868__auto__){
var self__ = this;
var this__30867__auto____$1 = this;
return this__30867__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__30868__auto__,null);
});

garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__30869__auto__,k60155,else__30870__auto__){
var self__ = this;
var this__30869__auto____$1 = this;
var G__60159 = k60155;
var G__60159__$1 = (((G__60159 instanceof cljs.core.Keyword))?G__60159.fqn:null);
switch (G__60159__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k60155,else__30870__auto__);

}
});

garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__30881__auto__,writer__30882__auto__,opts__30883__auto__){
var self__ = this;
var this__30881__auto____$1 = this;
var pr_pair__30884__auto__ = ((function (this__30881__auto____$1){
return (function (keyval__30885__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,cljs.core.pr_writer,""," ","",opts__30883__auto__,keyval__30885__auto__);
});})(this__30881__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__30882__auto__,pr_pair__30884__auto__,"#garden.types.CSSAtRule{",", ","}",opts__30883__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__60154){
var self__ = this;
var G__60154__$1 = this;
return (new cljs.core.RecordIter((0),G__60154__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__30865__auto__){
var self__ = this;
var this__30865__auto____$1 = this;
return self__.__meta;
});

garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__30862__auto__){
var self__ = this;
var this__30862__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__30871__auto__){
var self__ = this;
var this__30871__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__30863__auto__){
var self__ = this;
var this__30863__auto____$1 = this;
var h__30635__auto__ = self__.__hash;
if(!((h__30635__auto__ == null))){
return h__30635__auto__;
} else {
var h__30635__auto____$1 = ((function (h__30635__auto__,this__30863__auto____$1){
return (function (coll__30864__auto__){
return (-1632374092 ^ cljs.core.hash_unordered_coll.call(null,coll__30864__auto__));
});})(h__30635__auto__,this__30863__auto____$1))
.call(null,this__30863__auto____$1);
self__.__hash = h__30635__auto____$1;

return h__30635__auto____$1;
}
});

garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this60156,other60157){
var self__ = this;
var this60156__$1 = this;
return (!((other60157 == null))) && ((this60156__$1.constructor === other60157.constructor)) && (cljs.core._EQ_.call(null,this60156__$1.identifier,other60157.identifier)) && (cljs.core._EQ_.call(null,this60156__$1.value,other60157.value)) && (cljs.core._EQ_.call(null,this60156__$1.__extmap,other60157.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__30876__auto__,k__30877__auto__){
var self__ = this;
var this__30876__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__30877__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__30876__auto____$1),self__.__meta),k__30877__auto__);
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__30877__auto__)),null));
}
});

garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__30874__auto__,k__30875__auto__,G__60154){
var self__ = this;
var this__30874__auto____$1 = this;
var pred__60160 = cljs.core.keyword_identical_QMARK_;
var expr__60161 = k__30875__auto__;
if(cljs.core.truth_(pred__60160.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__60161))){
return (new garden.types.CSSAtRule(G__60154,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__60160.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__60161))){
return (new garden.types.CSSAtRule(self__.identifier,G__60154,self__.__meta,self__.__extmap,null));
} else {
return (new garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__30875__auto__,G__60154),null));
}
}
});

garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__30879__auto__){
var self__ = this;
var this__30879__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
});

garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__30866__auto__,G__60154){
var self__ = this;
var this__30866__auto____$1 = this;
return (new garden.types.CSSAtRule(self__.identifier,self__.value,G__60154,self__.__extmap,self__.__hash));
});

garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__30872__auto__,entry__30873__auto__){
var self__ = this;
var this__30872__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__30873__auto__)){
return this__30872__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__30873__auto__,(0)),cljs.core._nth.call(null,entry__30873__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__30872__auto____$1,entry__30873__auto__);
}
});

garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

garden.types.CSSAtRule.cljs$lang$type = true;

garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__30905__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"garden.types/CSSAtRule");
});

garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__30905__auto__,writer__30906__auto__){
return cljs.core._write.call(null,writer__30906__auto__,"garden.types/CSSAtRule");
});

garden.types.__GT_CSSAtRule = (function garden$types$__GT_CSSAtRule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});

garden.types.map__GT_CSSAtRule = (function garden$types$map__GT_CSSAtRule(G__60158){
return (new garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__60158),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__60158),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__60158,new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217))),null));
});


//# sourceMappingURL=types.js.map?rel=1523638680027
