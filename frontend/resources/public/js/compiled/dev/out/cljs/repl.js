// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36359){
var map__36360 = p__36359;
var map__36360__$1 = ((((!((map__36360 == null)))?((((map__36360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36360.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36360):map__36360);
var m = map__36360__$1;
var n = cljs.core.get.call(null,map__36360__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36360__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36362_36384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36363_36385 = null;
var count__36364_36386 = (0);
var i__36365_36387 = (0);
while(true){
if((i__36365_36387 < count__36364_36386)){
var f_36388 = cljs.core._nth.call(null,chunk__36363_36385,i__36365_36387);
cljs.core.println.call(null,"  ",f_36388);

var G__36389 = seq__36362_36384;
var G__36390 = chunk__36363_36385;
var G__36391 = count__36364_36386;
var G__36392 = (i__36365_36387 + (1));
seq__36362_36384 = G__36389;
chunk__36363_36385 = G__36390;
count__36364_36386 = G__36391;
i__36365_36387 = G__36392;
continue;
} else {
var temp__5457__auto___36393 = cljs.core.seq.call(null,seq__36362_36384);
if(temp__5457__auto___36393){
var seq__36362_36394__$1 = temp__5457__auto___36393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36362_36394__$1)){
var c__31110__auto___36395 = cljs.core.chunk_first.call(null,seq__36362_36394__$1);
var G__36396 = cljs.core.chunk_rest.call(null,seq__36362_36394__$1);
var G__36397 = c__31110__auto___36395;
var G__36398 = cljs.core.count.call(null,c__31110__auto___36395);
var G__36399 = (0);
seq__36362_36384 = G__36396;
chunk__36363_36385 = G__36397;
count__36364_36386 = G__36398;
i__36365_36387 = G__36399;
continue;
} else {
var f_36400 = cljs.core.first.call(null,seq__36362_36394__$1);
cljs.core.println.call(null,"  ",f_36400);

var G__36401 = cljs.core.next.call(null,seq__36362_36394__$1);
var G__36402 = null;
var G__36403 = (0);
var G__36404 = (0);
seq__36362_36384 = G__36401;
chunk__36363_36385 = G__36402;
count__36364_36386 = G__36403;
i__36365_36387 = G__36404;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36405 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30179__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36405);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36405)))?cljs.core.second.call(null,arglists_36405):arglists_36405));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36366_36406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36367_36407 = null;
var count__36368_36408 = (0);
var i__36369_36409 = (0);
while(true){
if((i__36369_36409 < count__36368_36408)){
var vec__36370_36410 = cljs.core._nth.call(null,chunk__36367_36407,i__36369_36409);
var name_36411 = cljs.core.nth.call(null,vec__36370_36410,(0),null);
var map__36373_36412 = cljs.core.nth.call(null,vec__36370_36410,(1),null);
var map__36373_36413__$1 = ((((!((map__36373_36412 == null)))?((((map__36373_36412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36373_36412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36373_36412):map__36373_36412);
var doc_36414 = cljs.core.get.call(null,map__36373_36413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36415 = cljs.core.get.call(null,map__36373_36413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36411);

cljs.core.println.call(null," ",arglists_36415);

if(cljs.core.truth_(doc_36414)){
cljs.core.println.call(null," ",doc_36414);
} else {
}

var G__36416 = seq__36366_36406;
var G__36417 = chunk__36367_36407;
var G__36418 = count__36368_36408;
var G__36419 = (i__36369_36409 + (1));
seq__36366_36406 = G__36416;
chunk__36367_36407 = G__36417;
count__36368_36408 = G__36418;
i__36369_36409 = G__36419;
continue;
} else {
var temp__5457__auto___36420 = cljs.core.seq.call(null,seq__36366_36406);
if(temp__5457__auto___36420){
var seq__36366_36421__$1 = temp__5457__auto___36420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36366_36421__$1)){
var c__31110__auto___36422 = cljs.core.chunk_first.call(null,seq__36366_36421__$1);
var G__36423 = cljs.core.chunk_rest.call(null,seq__36366_36421__$1);
var G__36424 = c__31110__auto___36422;
var G__36425 = cljs.core.count.call(null,c__31110__auto___36422);
var G__36426 = (0);
seq__36366_36406 = G__36423;
chunk__36367_36407 = G__36424;
count__36368_36408 = G__36425;
i__36369_36409 = G__36426;
continue;
} else {
var vec__36375_36427 = cljs.core.first.call(null,seq__36366_36421__$1);
var name_36428 = cljs.core.nth.call(null,vec__36375_36427,(0),null);
var map__36378_36429 = cljs.core.nth.call(null,vec__36375_36427,(1),null);
var map__36378_36430__$1 = ((((!((map__36378_36429 == null)))?((((map__36378_36429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36378_36429.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36378_36429):map__36378_36429);
var doc_36431 = cljs.core.get.call(null,map__36378_36430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36432 = cljs.core.get.call(null,map__36378_36430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36428);

cljs.core.println.call(null," ",arglists_36432);

if(cljs.core.truth_(doc_36431)){
cljs.core.println.call(null," ",doc_36431);
} else {
}

var G__36433 = cljs.core.next.call(null,seq__36366_36421__$1);
var G__36434 = null;
var G__36435 = (0);
var G__36436 = (0);
seq__36366_36406 = G__36433;
chunk__36367_36407 = G__36434;
count__36368_36408 = G__36435;
i__36369_36409 = G__36436;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__36380 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36381 = null;
var count__36382 = (0);
var i__36383 = (0);
while(true){
if((i__36383 < count__36382)){
var role = cljs.core._nth.call(null,chunk__36381,i__36383);
var temp__5457__auto___36437__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36437__$1)){
var spec_36438 = temp__5457__auto___36437__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36438));
} else {
}

var G__36439 = seq__36380;
var G__36440 = chunk__36381;
var G__36441 = count__36382;
var G__36442 = (i__36383 + (1));
seq__36380 = G__36439;
chunk__36381 = G__36440;
count__36382 = G__36441;
i__36383 = G__36442;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36380);
if(temp__5457__auto____$1){
var seq__36380__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36380__$1)){
var c__31110__auto__ = cljs.core.chunk_first.call(null,seq__36380__$1);
var G__36443 = cljs.core.chunk_rest.call(null,seq__36380__$1);
var G__36444 = c__31110__auto__;
var G__36445 = cljs.core.count.call(null,c__31110__auto__);
var G__36446 = (0);
seq__36380 = G__36443;
chunk__36381 = G__36444;
count__36382 = G__36445;
i__36383 = G__36446;
continue;
} else {
var role = cljs.core.first.call(null,seq__36380__$1);
var temp__5457__auto___36447__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36447__$2)){
var spec_36448 = temp__5457__auto___36447__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36448));
} else {
}

var G__36449 = cljs.core.next.call(null,seq__36380__$1);
var G__36450 = null;
var G__36451 = (0);
var G__36452 = (0);
seq__36380 = G__36449;
chunk__36381 = G__36450;
count__36382 = G__36451;
i__36383 = G__36452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1523638713633
