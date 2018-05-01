// Compiled by ClojureScript 1.9.946 {}
goog.provide('tailrecursion.cljson');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('goog.date.DateTime');
goog.require('clojure.string');


/**
 * Encode a cljs thing o as a JS tagged literal of the form {tag: value}, where
 *   value is composed of JS objects that can be encoded as JSON.
 * @interface
 */
tailrecursion.cljson.EncodeTagged = function(){};

tailrecursion.cljson._encode = (function tailrecursion$cljson$_encode(o){
if((!((o == null))) && (!((o.tailrecursion$cljson$EncodeTagged$_encode$arity$1 == null)))){
return o.tailrecursion$cljson$EncodeTagged$_encode$arity$1(o);
} else {
var x__30912__auto__ = (((o == null))?null:o);
var m__30913__auto__ = (tailrecursion.cljson._encode[goog.typeOf(x__30912__auto__)]);
if(!((m__30913__auto__ == null))){
return m__30913__auto__.call(null,o);
} else {
var m__30913__auto____$1 = (tailrecursion.cljson._encode["_"]);
if(!((m__30913__auto____$1 == null))){
return m__30913__auto____$1.call(null,o);
} else {
throw cljs.core.missing_protocol.call(null,"EncodeTagged.-encode",o);
}
}
}
});

/**
 * Convert clj data to JSON string.
 */
tailrecursion.cljson.clj__GT_cljson = (function tailrecursion$cljson$clj__GT_cljson(v){
return JSON.stringify(tailrecursion.cljson.encode.call(null,v));
});
/**
 * Convert JSON string to clj data.
 */
tailrecursion.cljson.cljson__GT_clj = (function tailrecursion$cljson$cljson__GT_clj(s){
return tailrecursion.cljson.decode.call(null,JSON.parse(s));
});
tailrecursion.cljson.enc_coll = (function tailrecursion$cljson$enc_coll(tag,val){
var len = cljs.core.count.call(null,val);
var out = [tag];
var i = (0);
var c = val;
while(true){
if((i < len)){
var i__$1 = (i + (1));
(out[i__$1] = cljs.core.first.call(null,c));

var G__59569 = i__$1;
var G__59570 = cljs.core.rest.call(null,c);
i = G__59569;
c = G__59570;
continue;
} else {
return out;
}
break;
}
});
Date.prototype.tailrecursion$cljson$EncodeTagged$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){
var o__$1 = this;
return ["inst",cljs.core.subs.call(null,cljs.core.pr_str.call(null,o__$1),(7),(36))];
});

cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){
var o__$1 = this;
return ["uuid",o__$1.uuid];
});
/**
 * Attempts to encode an object that does not satisfy EncodeTagged,
 *   but for which the printed representation contains a tag.
 */
tailrecursion.cljson.interpret = (function tailrecursion$cljson$interpret(x){
var temp__5457__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/#([^<].*)/,cljs.core.pr_str.call(null,x)));
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
var tag = cljs.reader.read_string.call(null,match);
var val = cljs.reader.read_string.call(null,cljs.core.subs.call(null,match,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('').length));
return [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),tailrecursion.cljson.encode.call(null,val)];
} else {
return null;
}
});
tailrecursion.cljson.encode = (function tailrecursion$cljson$encode(x){
var temp__5455__auto__ = (function (){var and__30167__auto__ = cljs.core._STAR_print_meta_STAR_;
if(and__30167__auto__){
return cljs.core.meta.call(null,x);
} else {
return and__30167__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return ["z",tailrecursion.cljson.encode.call(null,m),tailrecursion.cljson.encode.call(null,cljs.core.with_meta.call(null,x,null))];
} else {
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.tailrecursion$cljson$EncodeTagged$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,tailrecursion.cljson.EncodeTagged,x):false)):cljs.core.native_satisfies_QMARK_.call(null,tailrecursion.cljson.EncodeTagged,x))){
return tailrecursion.cljson._encode.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return ["k",cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),(1))];
} else {
if((x instanceof cljs.core.Symbol)){
return ["y",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')];
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return tailrecursion.cljson.enc_coll.call(null,"v",cljs.core.map.call(null,tailrecursion.cljson.encode,x));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return tailrecursion.cljson.enc_coll.call(null,"l",cljs.core.map.call(null,tailrecursion.cljson.encode,x));
} else {
if((cljs.core.map_QMARK_.call(null,x)) && (!(((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IRecord,x))))){
return tailrecursion.cljson.enc_coll.call(null,"m",cljs.core.map.call(null,tailrecursion.cljson.encode,cljs.core.apply.call(null,cljs.core.concat,x)));
} else {
if(cljs.core.set_QMARK_.call(null,x)){
return tailrecursion.cljson.enc_coll.call(null,"s",cljs.core.map.call(null,tailrecursion.cljson.encode,x));
} else {
if((typeof x === 'string') || (typeof x === 'number') || ((x == null)) || (cljs.core._EQ_.call(null,true,x)) || (cljs.core._EQ_.call(null,false,x))){
return x;
} else {
var or__30179__auto__ = tailrecursion.cljson.interpret.call(null,x);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
throw (new Error(["No cljson encoding for type '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),"'."].join('')));
}

}
}
}
}
}
}
}
}
}
});
tailrecursion.cljson.decode_tagged = (function tailrecursion$cljson$decode_tagged(o){
var tag = (o[(0)]);
var G__59574 = tag;
switch (G__59574) {
case "v":
var i = (1);
var len = o.length;
var out = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
if((i < len)){
var G__59576 = (i + (1));
var G__59577 = len;
var G__59578 = cljs.core.conj_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__59576;
len = G__59577;
out = G__59578;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "m":
var i = (1);
var len = o.length;
var out = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__59579 = (i + (2));
var G__59580 = len;
var G__59581 = cljs.core.assoc_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])),tailrecursion.cljson.decode.call(null,(o[(i + (1))])));
i = G__59579;
len = G__59580;
out = G__59581;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "l":
var i = (o.length - (1));
var out = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__59582 = (i - (1));
var G__59583 = cljs.core.conj.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__59582;
out = G__59583;
continue;
} else {
return out;
}
break;
}

break;
case "s":
var i = (1);
var len = o.length;
var out = cljs.core.transient$.call(null,cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__59584 = (i + (1));
var G__59585 = len;
var G__59586 = cljs.core.conj_BANG_.call(null,out,tailrecursion.cljson.decode.call(null,(o[i])));
i = G__59584;
len = G__59585;
out = G__59586;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,out);
}
break;
}

break;
case "k":
return cljs.core.keyword.call(null,(o[(1)]));

break;
case "y":
var val = (o[(1)]);
var idx = val.indexOf("/");
if((idx < (0))){
return cljs.core.symbol.call(null,val);
} else {
return cljs.core.symbol.call(null,val.slice((0),idx),val.slice((idx + (1))));
}

break;
case "z":
var m = tailrecursion.cljson.decode.call(null,(o[(1)]));
var v = tailrecursion.cljson.decode.call(null,(o[(2)]));
return cljs.core.with_meta.call(null,v,m);

break;
default:
var temp__5455__auto__ = (function (){var or__30179__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var reader = temp__5455__auto__;
return reader.call(null,tailrecursion.cljson.decode.call(null,(o[(1)])));
} else {
throw (new Error(["No reader function for tag '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"'."].join('')));
}

}
});
tailrecursion.cljson.decode = (function tailrecursion$cljson$decode(v){
if(cljs.core.array_QMARK_.call(null,v)){
return tailrecursion.cljson.decode_tagged.call(null,v);
} else {
return v;
}
});

//# sourceMappingURL=cljson.js.map?rel=1523638678958
