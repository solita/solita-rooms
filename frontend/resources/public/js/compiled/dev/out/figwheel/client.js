// Compiled by ClojureScript 1.9.946 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.15";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e36647){if((e36647 instanceof Error)){
var e = e36647;
return "Error: Unable to stringify";
} else {
throw e36647;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__36650 = arguments.length;
switch (G__36650) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__36648_SHARP_){
if(typeof p1__36648_SHARP_ === 'string'){
return p1__36648_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__36648_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31465__auto__ = [];
var len__31458__auto___36653 = arguments.length;
var i__31459__auto___36654 = (0);
while(true){
if((i__31459__auto___36654 < len__31458__auto___36653)){
args__31465__auto__.push((arguments[i__31459__auto___36654]));

var G__36655 = (i__31459__auto___36654 + (1));
i__31459__auto___36654 = G__36655;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36652){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36652));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31465__auto__ = [];
var len__31458__auto___36657 = arguments.length;
var i__31459__auto___36658 = (0);
while(true){
if((i__31459__auto___36658 < len__31458__auto___36657)){
args__31465__auto__.push((arguments[i__31459__auto___36658]));

var G__36659 = (i__31459__auto___36658 + (1));
i__31459__auto___36658 = G__36659;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36656){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36656));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36660){
var map__36661 = p__36660;
var map__36661__$1 = ((((!((map__36661 == null)))?((((map__36661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36661):map__36661);
var message = cljs.core.get.call(null,map__36661__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36661__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30179__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30179__auto__)){
return or__30179__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30167__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30167__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30167__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35187__auto___36740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35187__auto___36740,ch){
return (function (){
var f__35188__auto__ = (function (){var switch__35164__auto__ = ((function (c__35187__auto___36740,ch){
return (function (state_36712){
var state_val_36713 = (state_36712[(1)]);
if((state_val_36713 === (7))){
var inst_36708 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36714_36741 = state_36712__$1;
(statearr_36714_36741[(2)] = inst_36708);

(statearr_36714_36741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (1))){
var state_36712__$1 = state_36712;
var statearr_36715_36742 = state_36712__$1;
(statearr_36715_36742[(2)] = null);

(statearr_36715_36742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (4))){
var inst_36665 = (state_36712[(7)]);
var inst_36665__$1 = (state_36712[(2)]);
var state_36712__$1 = (function (){var statearr_36716 = state_36712;
(statearr_36716[(7)] = inst_36665__$1);

return statearr_36716;
})();
if(cljs.core.truth_(inst_36665__$1)){
var statearr_36717_36743 = state_36712__$1;
(statearr_36717_36743[(1)] = (5));

} else {
var statearr_36718_36744 = state_36712__$1;
(statearr_36718_36744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (15))){
var inst_36672 = (state_36712[(8)]);
var inst_36687 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36672);
var inst_36688 = cljs.core.first.call(null,inst_36687);
var inst_36689 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36688);
var inst_36690 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36689)].join('');
var inst_36691 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36690);
var state_36712__$1 = state_36712;
var statearr_36719_36745 = state_36712__$1;
(statearr_36719_36745[(2)] = inst_36691);

(statearr_36719_36745[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (13))){
var inst_36696 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36720_36746 = state_36712__$1;
(statearr_36720_36746[(2)] = inst_36696);

(statearr_36720_36746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (6))){
var state_36712__$1 = state_36712;
var statearr_36721_36747 = state_36712__$1;
(statearr_36721_36747[(2)] = null);

(statearr_36721_36747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (17))){
var inst_36694 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36722_36748 = state_36712__$1;
(statearr_36722_36748[(2)] = inst_36694);

(statearr_36722_36748[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (3))){
var inst_36710 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36712__$1,inst_36710);
} else {
if((state_val_36713 === (12))){
var inst_36671 = (state_36712[(9)]);
var inst_36685 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36671,opts);
var state_36712__$1 = state_36712;
if(cljs.core.truth_(inst_36685)){
var statearr_36723_36749 = state_36712__$1;
(statearr_36723_36749[(1)] = (15));

} else {
var statearr_36724_36750 = state_36712__$1;
(statearr_36724_36750[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (2))){
var state_36712__$1 = state_36712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36712__$1,(4),ch);
} else {
if((state_val_36713 === (11))){
var inst_36672 = (state_36712[(8)]);
var inst_36677 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36678 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36672);
var inst_36679 = cljs.core.async.timeout.call(null,(1000));
var inst_36680 = [inst_36678,inst_36679];
var inst_36681 = (new cljs.core.PersistentVector(null,2,(5),inst_36677,inst_36680,null));
var state_36712__$1 = state_36712;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36712__$1,(14),inst_36681);
} else {
if((state_val_36713 === (9))){
var inst_36672 = (state_36712[(8)]);
var inst_36698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36699 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36672);
var inst_36700 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36699);
var inst_36701 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36700)].join('');
var inst_36702 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36701);
var state_36712__$1 = (function (){var statearr_36725 = state_36712;
(statearr_36725[(10)] = inst_36698);

return statearr_36725;
})();
var statearr_36726_36751 = state_36712__$1;
(statearr_36726_36751[(2)] = inst_36702);

(statearr_36726_36751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (5))){
var inst_36665 = (state_36712[(7)]);
var inst_36667 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36668 = (new cljs.core.PersistentArrayMap(null,2,inst_36667,null));
var inst_36669 = (new cljs.core.PersistentHashSet(null,inst_36668,null));
var inst_36670 = figwheel.client.focus_msgs.call(null,inst_36669,inst_36665);
var inst_36671 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36670);
var inst_36672 = cljs.core.first.call(null,inst_36670);
var inst_36673 = figwheel.client.autoload_QMARK_.call(null);
var state_36712__$1 = (function (){var statearr_36727 = state_36712;
(statearr_36727[(9)] = inst_36671);

(statearr_36727[(8)] = inst_36672);

return statearr_36727;
})();
if(cljs.core.truth_(inst_36673)){
var statearr_36728_36752 = state_36712__$1;
(statearr_36728_36752[(1)] = (8));

} else {
var statearr_36729_36753 = state_36712__$1;
(statearr_36729_36753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (14))){
var inst_36683 = (state_36712[(2)]);
var state_36712__$1 = state_36712;
var statearr_36730_36754 = state_36712__$1;
(statearr_36730_36754[(2)] = inst_36683);

(statearr_36730_36754[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (16))){
var state_36712__$1 = state_36712;
var statearr_36731_36755 = state_36712__$1;
(statearr_36731_36755[(2)] = null);

(statearr_36731_36755[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (10))){
var inst_36704 = (state_36712[(2)]);
var state_36712__$1 = (function (){var statearr_36732 = state_36712;
(statearr_36732[(11)] = inst_36704);

return statearr_36732;
})();
var statearr_36733_36756 = state_36712__$1;
(statearr_36733_36756[(2)] = null);

(statearr_36733_36756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36713 === (8))){
var inst_36671 = (state_36712[(9)]);
var inst_36675 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36671,opts);
var state_36712__$1 = state_36712;
if(cljs.core.truth_(inst_36675)){
var statearr_36734_36757 = state_36712__$1;
(statearr_36734_36757[(1)] = (11));

} else {
var statearr_36735_36758 = state_36712__$1;
(statearr_36735_36758[(1)] = (12));

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
});})(c__35187__auto___36740,ch))
;
return ((function (switch__35164__auto__,c__35187__auto___36740,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35165__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35165__auto____0 = (function (){
var statearr_36736 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36736[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35165__auto__);

(statearr_36736[(1)] = (1));

return statearr_36736;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35165__auto____1 = (function (state_36712){
while(true){
var ret_value__35166__auto__ = (function (){try{while(true){
var result__35167__auto__ = switch__35164__auto__.call(null,state_36712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35167__auto__;
}
break;
}
}catch (e36737){if((e36737 instanceof Object)){
var ex__35168__auto__ = e36737;
var statearr_36738_36759 = state_36712;
(statearr_36738_36759[(5)] = ex__35168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36760 = state_36712;
state_36712 = G__36760;
continue;
} else {
return ret_value__35166__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35165__auto__ = function(state_36712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35165__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35165__auto____1.call(this,state_36712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35165__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35165__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35165__auto__;
})()
;})(switch__35164__auto__,c__35187__auto___36740,ch))
})();
var state__35189__auto__ = (function (){var statearr_36739 = f__35188__auto__.call(null);
(statearr_36739[(6)] = c__35187__auto___36740);

return statearr_36739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35189__auto__);
});})(c__35187__auto___36740,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36761_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36761_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_36765 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36765){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_36763 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_36764 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_36763,_STAR_print_fn_STAR_36764,sb,base_path_36765){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_36763,_STAR_print_fn_STAR_36764,sb,base_path_36765))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_36764;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_36763;
}}catch (e36762){if((e36762 instanceof Error)){
var e = e36762;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36765], null));
} else {
var e = e36762;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_36765))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36766){
var map__36767 = p__36766;
var map__36767__$1 = ((((!((map__36767 == null)))?((((map__36767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36767):map__36767);
var opts = map__36767__$1;
var build_id = cljs.core.get.call(null,map__36767__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36767,map__36767__$1,opts,build_id){
return (function (p__36769){
var vec__36770 = p__36769;
var seq__36771 = cljs.core.seq.call(null,vec__36770);
var first__36772 = cljs.core.first.call(null,seq__36771);
var seq__36771__$1 = cljs.core.next.call(null,seq__36771);
var map__36773 = first__36772;
var map__36773__$1 = ((((!((map__36773 == null)))?((((map__36773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36773):map__36773);
var msg = map__36773__$1;
var msg_name = cljs.core.get.call(null,map__36773__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36771__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36770,seq__36771,first__36772,seq__36771__$1,map__36773,map__36773__$1,msg,msg_name,_,map__36767,map__36767__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36770,seq__36771,first__36772,seq__36771__$1,map__36773,map__36773__$1,msg,msg_name,_,map__36767,map__36767__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36767,map__36767__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36775){
var vec__36776 = p__36775;
var seq__36777 = cljs.core.seq.call(null,vec__36776);
var first__36778 = cljs.core.first.call(null,seq__36777);
var seq__36777__$1 = cljs.core.next.call(null,seq__36777);
var map__36779 = first__36778;
var map__36779__$1 = ((((!((map__36779 == null)))?((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36779):map__36779);
var msg = map__36779__$1;
var msg_name = cljs.core.get.call(null,map__36779__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36777__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36781){
var map__36782 = p__36781;
var map__36782__$1 = ((((!((map__36782 == null)))?((((map__36782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36782):map__36782);
var on_compile_warning = cljs.core.get.call(null,map__36782__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36782__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36782,map__36782__$1,on_compile_warning,on_compile_fail){
return (function (p__36784){
var vec__36785 = p__36784;
var seq__36786 = cljs.core.seq.call(null,vec__36785);
var first__36787 = cljs.core.first.call(null,seq__36786);
var seq__36786__$1 = cljs.core.next.call(null,seq__36786);
var map__36788 = first__36787;
var map__36788__$1 = ((((!((map__36788 == null)))?((((map__36788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36788):map__36788);
var msg = map__36788__$1;
var msg_name = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36786__$1;
var pred__36790 = cljs.core._EQ_;
var expr__36791 = msg_name;
if(cljs.core.truth_(pred__36790.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36791))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36790.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36791))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36782,map__36782__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35187__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35188__auto__ = (function (){var switch__35164__auto__ = ((function (c__35187__auto__,msg_hist,msg_names,msg){
return (function (state_36880){
var state_val_36881 = (state_36880[(1)]);
if((state_val_36881 === (7))){
var inst_36800 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36800)){
var statearr_36882_36929 = state_36880__$1;
(statearr_36882_36929[(1)] = (8));

} else {
var statearr_36883_36930 = state_36880__$1;
(statearr_36883_36930[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (20))){
var inst_36874 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36884_36931 = state_36880__$1;
(statearr_36884_36931[(2)] = inst_36874);

(statearr_36884_36931[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (27))){
var inst_36870 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36885_36932 = state_36880__$1;
(statearr_36885_36932[(2)] = inst_36870);

(statearr_36885_36932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (1))){
var inst_36793 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36793)){
var statearr_36886_36933 = state_36880__$1;
(statearr_36886_36933[(1)] = (2));

} else {
var statearr_36887_36934 = state_36880__$1;
(statearr_36887_36934[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (24))){
var inst_36872 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36888_36935 = state_36880__$1;
(statearr_36888_36935[(2)] = inst_36872);

(statearr_36888_36935[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (4))){
var inst_36878 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36880__$1,inst_36878);
} else {
if((state_val_36881 === (15))){
var inst_36876 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36889_36936 = state_36880__$1;
(statearr_36889_36936[(2)] = inst_36876);

(statearr_36889_36936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (21))){
var inst_36829 = (state_36880[(2)]);
var inst_36830 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36831 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36830);
var state_36880__$1 = (function (){var statearr_36890 = state_36880;
(statearr_36890[(7)] = inst_36829);

return statearr_36890;
})();
var statearr_36891_36937 = state_36880__$1;
(statearr_36891_36937[(2)] = inst_36831);

(statearr_36891_36937[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (31))){
var inst_36859 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36859)){
var statearr_36892_36938 = state_36880__$1;
(statearr_36892_36938[(1)] = (34));

} else {
var statearr_36893_36939 = state_36880__$1;
(statearr_36893_36939[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (32))){
var inst_36868 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36894_36940 = state_36880__$1;
(statearr_36894_36940[(2)] = inst_36868);

(statearr_36894_36940[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (33))){
var inst_36855 = (state_36880[(2)]);
var inst_36856 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36857 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36856);
var state_36880__$1 = (function (){var statearr_36895 = state_36880;
(statearr_36895[(8)] = inst_36855);

return statearr_36895;
})();
var statearr_36896_36941 = state_36880__$1;
(statearr_36896_36941[(2)] = inst_36857);

(statearr_36896_36941[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (13))){
var inst_36814 = figwheel.client.heads_up.clear.call(null);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(16),inst_36814);
} else {
if((state_val_36881 === (22))){
var inst_36835 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36836 = figwheel.client.heads_up.append_warning_message.call(null,inst_36835);
var state_36880__$1 = state_36880;
var statearr_36897_36942 = state_36880__$1;
(statearr_36897_36942[(2)] = inst_36836);

(statearr_36897_36942[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (36))){
var inst_36866 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36898_36943 = state_36880__$1;
(statearr_36898_36943[(2)] = inst_36866);

(statearr_36898_36943[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (29))){
var inst_36846 = (state_36880[(2)]);
var inst_36847 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36848 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36847);
var state_36880__$1 = (function (){var statearr_36899 = state_36880;
(statearr_36899[(9)] = inst_36846);

return statearr_36899;
})();
var statearr_36900_36944 = state_36880__$1;
(statearr_36900_36944[(2)] = inst_36848);

(statearr_36900_36944[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (6))){
var inst_36795 = (state_36880[(10)]);
var state_36880__$1 = state_36880;
var statearr_36901_36945 = state_36880__$1;
(statearr_36901_36945[(2)] = inst_36795);

(statearr_36901_36945[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (28))){
var inst_36842 = (state_36880[(2)]);
var inst_36843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36844 = figwheel.client.heads_up.display_warning.call(null,inst_36843);
var state_36880__$1 = (function (){var statearr_36902 = state_36880;
(statearr_36902[(11)] = inst_36842);

return statearr_36902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(29),inst_36844);
} else {
if((state_val_36881 === (25))){
var inst_36840 = figwheel.client.heads_up.clear.call(null);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(28),inst_36840);
} else {
if((state_val_36881 === (34))){
var inst_36861 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(37),inst_36861);
} else {
if((state_val_36881 === (17))){
var inst_36820 = (state_36880[(2)]);
var inst_36821 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36822 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36821);
var state_36880__$1 = (function (){var statearr_36903 = state_36880;
(statearr_36903[(12)] = inst_36820);

return statearr_36903;
})();
var statearr_36904_36946 = state_36880__$1;
(statearr_36904_36946[(2)] = inst_36822);

(statearr_36904_36946[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (3))){
var inst_36812 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36812)){
var statearr_36905_36947 = state_36880__$1;
(statearr_36905_36947[(1)] = (13));

} else {
var statearr_36906_36948 = state_36880__$1;
(statearr_36906_36948[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (12))){
var inst_36808 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36907_36949 = state_36880__$1;
(statearr_36907_36949[(2)] = inst_36808);

(statearr_36907_36949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (2))){
var inst_36795 = (state_36880[(10)]);
var inst_36795__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36880__$1 = (function (){var statearr_36908 = state_36880;
(statearr_36908[(10)] = inst_36795__$1);

return statearr_36908;
})();
if(cljs.core.truth_(inst_36795__$1)){
var statearr_36909_36950 = state_36880__$1;
(statearr_36909_36950[(1)] = (5));

} else {
var statearr_36910_36951 = state_36880__$1;
(statearr_36910_36951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (23))){
var inst_36838 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36838)){
var statearr_36911_36952 = state_36880__$1;
(statearr_36911_36952[(1)] = (25));

} else {
var statearr_36912_36953 = state_36880__$1;
(statearr_36912_36953[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (35))){
var state_36880__$1 = state_36880;
var statearr_36913_36954 = state_36880__$1;
(statearr_36913_36954[(2)] = null);

(statearr_36913_36954[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (19))){
var inst_36833 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36833)){
var statearr_36914_36955 = state_36880__$1;
(statearr_36914_36955[(1)] = (22));

} else {
var statearr_36915_36956 = state_36880__$1;
(statearr_36915_36956[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (11))){
var inst_36804 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36916_36957 = state_36880__$1;
(statearr_36916_36957[(2)] = inst_36804);

(statearr_36916_36957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (9))){
var inst_36806 = figwheel.client.heads_up.clear.call(null);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(12),inst_36806);
} else {
if((state_val_36881 === (5))){
var inst_36797 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36880__$1 = state_36880;
var statearr_36917_36958 = state_36880__$1;
(statearr_36917_36958[(2)] = inst_36797);

(statearr_36917_36958[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (14))){
var inst_36824 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36824)){
var statearr_36918_36959 = state_36880__$1;
(statearr_36918_36959[(1)] = (18));

} else {
var statearr_36919_36960 = state_36880__$1;
(statearr_36919_36960[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (26))){
var inst_36850 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36880__$1 = state_36880;
if(cljs.core.truth_(inst_36850)){
var statearr_36920_36961 = state_36880__$1;
(statearr_36920_36961[(1)] = (30));

} else {
var statearr_36921_36962 = state_36880__$1;
(statearr_36921_36962[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (16))){
var inst_36816 = (state_36880[(2)]);
var inst_36817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36818 = figwheel.client.heads_up.display_exception.call(null,inst_36817);
var state_36880__$1 = (function (){var statearr_36922 = state_36880;
(statearr_36922[(13)] = inst_36816);

return statearr_36922;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(17),inst_36818);
} else {
if((state_val_36881 === (30))){
var inst_36852 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36853 = figwheel.client.heads_up.display_warning.call(null,inst_36852);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(33),inst_36853);
} else {
if((state_val_36881 === (10))){
var inst_36810 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36923_36963 = state_36880__$1;
(statearr_36923_36963[(2)] = inst_36810);

(statearr_36923_36963[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (18))){
var inst_36826 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36827 = figwheel.client.heads_up.display_exception.call(null,inst_36826);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(21),inst_36827);
} else {
if((state_val_36881 === (37))){
var inst_36863 = (state_36880[(2)]);
var state_36880__$1 = state_36880;
var statearr_36924_36964 = state_36880__$1;
(statearr_36924_36964[(2)] = inst_36863);

(statearr_36924_36964[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36881 === (8))){
var inst_36802 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36880__$1 = state_36880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36880__$1,(11),inst_36802);
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
});})(c__35187__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35164__auto__,c__35187__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto____0 = (function (){
var statearr_36925 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36925[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto__);

(statearr_36925[(1)] = (1));

return statearr_36925;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto____1 = (function (state_36880){
while(true){
var ret_value__35166__auto__ = (function (){try{while(true){
var result__35167__auto__ = switch__35164__auto__.call(null,state_36880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35167__auto__;
}
break;
}
}catch (e36926){if((e36926 instanceof Object)){
var ex__35168__auto__ = e36926;
var statearr_36927_36965 = state_36880;
(statearr_36927_36965[(5)] = ex__35168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36926;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36966 = state_36880;
state_36880 = G__36966;
continue;
} else {
return ret_value__35166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto__ = function(state_36880){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto____1.call(this,state_36880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35165__auto__;
})()
;})(switch__35164__auto__,c__35187__auto__,msg_hist,msg_names,msg))
})();
var state__35189__auto__ = (function (){var statearr_36928 = f__35188__auto__.call(null);
(statearr_36928[(6)] = c__35187__auto__);

return statearr_36928;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35189__auto__);
});})(c__35187__auto__,msg_hist,msg_names,msg))
);

return c__35187__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35187__auto___36995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35187__auto___36995,ch){
return (function (){
var f__35188__auto__ = (function (){var switch__35164__auto__ = ((function (c__35187__auto___36995,ch){
return (function (state_36981){
var state_val_36982 = (state_36981[(1)]);
if((state_val_36982 === (1))){
var state_36981__$1 = state_36981;
var statearr_36983_36996 = state_36981__$1;
(statearr_36983_36996[(2)] = null);

(statearr_36983_36996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (2))){
var state_36981__$1 = state_36981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36981__$1,(4),ch);
} else {
if((state_val_36982 === (3))){
var inst_36979 = (state_36981[(2)]);
var state_36981__$1 = state_36981;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36981__$1,inst_36979);
} else {
if((state_val_36982 === (4))){
var inst_36969 = (state_36981[(7)]);
var inst_36969__$1 = (state_36981[(2)]);
var state_36981__$1 = (function (){var statearr_36984 = state_36981;
(statearr_36984[(7)] = inst_36969__$1);

return statearr_36984;
})();
if(cljs.core.truth_(inst_36969__$1)){
var statearr_36985_36997 = state_36981__$1;
(statearr_36985_36997[(1)] = (5));

} else {
var statearr_36986_36998 = state_36981__$1;
(statearr_36986_36998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (5))){
var inst_36969 = (state_36981[(7)]);
var inst_36971 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36969);
var state_36981__$1 = state_36981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36981__$1,(8),inst_36971);
} else {
if((state_val_36982 === (6))){
var state_36981__$1 = state_36981;
var statearr_36987_36999 = state_36981__$1;
(statearr_36987_36999[(2)] = null);

(statearr_36987_36999[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (7))){
var inst_36977 = (state_36981[(2)]);
var state_36981__$1 = state_36981;
var statearr_36988_37000 = state_36981__$1;
(statearr_36988_37000[(2)] = inst_36977);

(statearr_36988_37000[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36982 === (8))){
var inst_36973 = (state_36981[(2)]);
var state_36981__$1 = (function (){var statearr_36989 = state_36981;
(statearr_36989[(8)] = inst_36973);

return statearr_36989;
})();
var statearr_36990_37001 = state_36981__$1;
(statearr_36990_37001[(2)] = null);

(statearr_36990_37001[(1)] = (2));


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
});})(c__35187__auto___36995,ch))
;
return ((function (switch__35164__auto__,c__35187__auto___36995,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35165__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35165__auto____0 = (function (){
var statearr_36991 = [null,null,null,null,null,null,null,null,null];
(statearr_36991[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35165__auto__);

(statearr_36991[(1)] = (1));

return statearr_36991;
});
var figwheel$client$heads_up_plugin_$_state_machine__35165__auto____1 = (function (state_36981){
while(true){
var ret_value__35166__auto__ = (function (){try{while(true){
var result__35167__auto__ = switch__35164__auto__.call(null,state_36981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35167__auto__;
}
break;
}
}catch (e36992){if((e36992 instanceof Object)){
var ex__35168__auto__ = e36992;
var statearr_36993_37002 = state_36981;
(statearr_36993_37002[(5)] = ex__35168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36992;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37003 = state_36981;
state_36981 = G__37003;
continue;
} else {
return ret_value__35166__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35165__auto__ = function(state_36981){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35165__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35165__auto____1.call(this,state_36981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35165__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35165__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35165__auto__;
})()
;})(switch__35164__auto__,c__35187__auto___36995,ch))
})();
var state__35189__auto__ = (function (){var statearr_36994 = f__35188__auto__.call(null);
(statearr_36994[(6)] = c__35187__auto___36995);

return statearr_36994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35189__auto__);
});})(c__35187__auto___36995,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35187__auto__){
return (function (){
var f__35188__auto__ = (function (){var switch__35164__auto__ = ((function (c__35187__auto__){
return (function (state_37009){
var state_val_37010 = (state_37009[(1)]);
if((state_val_37010 === (1))){
var inst_37004 = cljs.core.async.timeout.call(null,(3000));
var state_37009__$1 = state_37009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37009__$1,(2),inst_37004);
} else {
if((state_val_37010 === (2))){
var inst_37006 = (state_37009[(2)]);
var inst_37007 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37009__$1 = (function (){var statearr_37011 = state_37009;
(statearr_37011[(7)] = inst_37006);

return statearr_37011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37009__$1,inst_37007);
} else {
return null;
}
}
});})(c__35187__auto__))
;
return ((function (switch__35164__auto__,c__35187__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35165__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35165__auto____0 = (function (){
var statearr_37012 = [null,null,null,null,null,null,null,null];
(statearr_37012[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35165__auto__);

(statearr_37012[(1)] = (1));

return statearr_37012;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35165__auto____1 = (function (state_37009){
while(true){
var ret_value__35166__auto__ = (function (){try{while(true){
var result__35167__auto__ = switch__35164__auto__.call(null,state_37009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35167__auto__;
}
break;
}
}catch (e37013){if((e37013 instanceof Object)){
var ex__35168__auto__ = e37013;
var statearr_37014_37016 = state_37009;
(statearr_37014_37016[(5)] = ex__35168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37017 = state_37009;
state_37009 = G__37017;
continue;
} else {
return ret_value__35166__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35165__auto__ = function(state_37009){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35165__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35165__auto____1.call(this,state_37009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35165__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35165__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35165__auto__;
})()
;})(switch__35164__auto__,c__35187__auto__))
})();
var state__35189__auto__ = (function (){var statearr_37015 = f__35188__auto__.call(null);
(statearr_37015[(6)] = c__35187__auto__);

return statearr_37015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35189__auto__);
});})(c__35187__auto__))
);

return c__35187__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35187__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35187__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__35188__auto__ = (function (){var switch__35164__auto__ = ((function (c__35187__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37024){
var state_val_37025 = (state_37024[(1)]);
if((state_val_37025 === (1))){
var inst_37018 = cljs.core.async.timeout.call(null,(2000));
var state_37024__$1 = state_37024;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37024__$1,(2),inst_37018);
} else {
if((state_val_37025 === (2))){
var inst_37020 = (state_37024[(2)]);
var inst_37021 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37022 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37021);
var state_37024__$1 = (function (){var statearr_37026 = state_37024;
(statearr_37026[(7)] = inst_37020);

return statearr_37026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37024__$1,inst_37022);
} else {
return null;
}
}
});})(c__35187__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__35164__auto__,c__35187__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto____0 = (function (){
var statearr_37027 = [null,null,null,null,null,null,null,null];
(statearr_37027[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto__);

(statearr_37027[(1)] = (1));

return statearr_37027;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto____1 = (function (state_37024){
while(true){
var ret_value__35166__auto__ = (function (){try{while(true){
var result__35167__auto__ = switch__35164__auto__.call(null,state_37024);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35167__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35167__auto__;
}
break;
}
}catch (e37028){if((e37028 instanceof Object)){
var ex__35168__auto__ = e37028;
var statearr_37029_37031 = state_37024;
(statearr_37029_37031[(5)] = ex__35168__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35166__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37032 = state_37024;
state_37024 = G__37032;
continue;
} else {
return ret_value__35166__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto__ = function(state_37024){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto____1.call(this,state_37024);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35165__auto__;
})()
;})(switch__35164__auto__,c__35187__auto__,figwheel_version,temp__5457__auto__))
})();
var state__35189__auto__ = (function (){var statearr_37030 = f__35188__auto__.call(null);
(statearr_37030[(6)] = c__35187__auto__);

return statearr_37030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35189__auto__);
});})(c__35187__auto__,figwheel_version,temp__5457__auto__))
);

return c__35187__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37033){
var map__37034 = p__37033;
var map__37034__$1 = ((((!((map__37034 == null)))?((((map__37034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37034):map__37034);
var file = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37036 = "";
var G__37036__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37036),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37036);
var G__37036__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37036__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37036__$1);
if(cljs.core.truth_((function (){var and__30167__auto__ = line;
if(cljs.core.truth_(and__30167__auto__)){
return column;
} else {
return and__30167__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37036__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37036__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37037){
var map__37038 = p__37037;
var map__37038__$1 = ((((!((map__37038 == null)))?((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37038):map__37038);
var ed = map__37038__$1;
var formatted_exception = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37040_37044 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37041_37045 = null;
var count__37042_37046 = (0);
var i__37043_37047 = (0);
while(true){
if((i__37043_37047 < count__37042_37046)){
var msg_37048 = cljs.core._nth.call(null,chunk__37041_37045,i__37043_37047);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37048);

var G__37049 = seq__37040_37044;
var G__37050 = chunk__37041_37045;
var G__37051 = count__37042_37046;
var G__37052 = (i__37043_37047 + (1));
seq__37040_37044 = G__37049;
chunk__37041_37045 = G__37050;
count__37042_37046 = G__37051;
i__37043_37047 = G__37052;
continue;
} else {
var temp__5457__auto___37053 = cljs.core.seq.call(null,seq__37040_37044);
if(temp__5457__auto___37053){
var seq__37040_37054__$1 = temp__5457__auto___37053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37040_37054__$1)){
var c__31110__auto___37055 = cljs.core.chunk_first.call(null,seq__37040_37054__$1);
var G__37056 = cljs.core.chunk_rest.call(null,seq__37040_37054__$1);
var G__37057 = c__31110__auto___37055;
var G__37058 = cljs.core.count.call(null,c__31110__auto___37055);
var G__37059 = (0);
seq__37040_37044 = G__37056;
chunk__37041_37045 = G__37057;
count__37042_37046 = G__37058;
i__37043_37047 = G__37059;
continue;
} else {
var msg_37060 = cljs.core.first.call(null,seq__37040_37054__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37060);

var G__37061 = cljs.core.next.call(null,seq__37040_37054__$1);
var G__37062 = null;
var G__37063 = (0);
var G__37064 = (0);
seq__37040_37044 = G__37061;
chunk__37041_37045 = G__37062;
count__37042_37046 = G__37063;
i__37043_37047 = G__37064;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37065){
var map__37066 = p__37065;
var map__37066__$1 = ((((!((map__37066 == null)))?((((map__37066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37066.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37066):map__37066);
var w = map__37066__$1;
var message = cljs.core.get.call(null,map__37066__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/dev/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/dev/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30167__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30167__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30167__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__37068 = cljs.core.seq.call(null,plugins);
var chunk__37069 = null;
var count__37070 = (0);
var i__37071 = (0);
while(true){
if((i__37071 < count__37070)){
var vec__37072 = cljs.core._nth.call(null,chunk__37069,i__37071);
var k = cljs.core.nth.call(null,vec__37072,(0),null);
var plugin = cljs.core.nth.call(null,vec__37072,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37078 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37068,chunk__37069,count__37070,i__37071,pl_37078,vec__37072,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37078.call(null,msg_hist);
});})(seq__37068,chunk__37069,count__37070,i__37071,pl_37078,vec__37072,k,plugin))
);
} else {
}

var G__37079 = seq__37068;
var G__37080 = chunk__37069;
var G__37081 = count__37070;
var G__37082 = (i__37071 + (1));
seq__37068 = G__37079;
chunk__37069 = G__37080;
count__37070 = G__37081;
i__37071 = G__37082;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37068);
if(temp__5457__auto__){
var seq__37068__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37068__$1)){
var c__31110__auto__ = cljs.core.chunk_first.call(null,seq__37068__$1);
var G__37083 = cljs.core.chunk_rest.call(null,seq__37068__$1);
var G__37084 = c__31110__auto__;
var G__37085 = cljs.core.count.call(null,c__31110__auto__);
var G__37086 = (0);
seq__37068 = G__37083;
chunk__37069 = G__37084;
count__37070 = G__37085;
i__37071 = G__37086;
continue;
} else {
var vec__37075 = cljs.core.first.call(null,seq__37068__$1);
var k = cljs.core.nth.call(null,vec__37075,(0),null);
var plugin = cljs.core.nth.call(null,vec__37075,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37087 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37068,chunk__37069,count__37070,i__37071,pl_37087,vec__37075,k,plugin,seq__37068__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37087.call(null,msg_hist);
});})(seq__37068,chunk__37069,count__37070,i__37071,pl_37087,vec__37075,k,plugin,seq__37068__$1,temp__5457__auto__))
);
} else {
}

var G__37088 = cljs.core.next.call(null,seq__37068__$1);
var G__37089 = null;
var G__37090 = (0);
var G__37091 = (0);
seq__37068 = G__37088;
chunk__37069 = G__37089;
count__37070 = G__37090;
i__37071 = G__37091;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__37093 = arguments.length;
switch (G__37093) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__37094_37099 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37095_37100 = null;
var count__37096_37101 = (0);
var i__37097_37102 = (0);
while(true){
if((i__37097_37102 < count__37096_37101)){
var msg_37103 = cljs.core._nth.call(null,chunk__37095_37100,i__37097_37102);
figwheel.client.socket.handle_incoming_message.call(null,msg_37103);

var G__37104 = seq__37094_37099;
var G__37105 = chunk__37095_37100;
var G__37106 = count__37096_37101;
var G__37107 = (i__37097_37102 + (1));
seq__37094_37099 = G__37104;
chunk__37095_37100 = G__37105;
count__37096_37101 = G__37106;
i__37097_37102 = G__37107;
continue;
} else {
var temp__5457__auto___37108 = cljs.core.seq.call(null,seq__37094_37099);
if(temp__5457__auto___37108){
var seq__37094_37109__$1 = temp__5457__auto___37108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37094_37109__$1)){
var c__31110__auto___37110 = cljs.core.chunk_first.call(null,seq__37094_37109__$1);
var G__37111 = cljs.core.chunk_rest.call(null,seq__37094_37109__$1);
var G__37112 = c__31110__auto___37110;
var G__37113 = cljs.core.count.call(null,c__31110__auto___37110);
var G__37114 = (0);
seq__37094_37099 = G__37111;
chunk__37095_37100 = G__37112;
count__37096_37101 = G__37113;
i__37097_37102 = G__37114;
continue;
} else {
var msg_37115 = cljs.core.first.call(null,seq__37094_37109__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37115);

var G__37116 = cljs.core.next.call(null,seq__37094_37109__$1);
var G__37117 = null;
var G__37118 = (0);
var G__37119 = (0);
seq__37094_37099 = G__37116;
chunk__37095_37100 = G__37117;
count__37096_37101 = G__37118;
i__37097_37102 = G__37119;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31465__auto__ = [];
var len__31458__auto___37124 = arguments.length;
var i__31459__auto___37125 = (0);
while(true){
if((i__31459__auto___37125 < len__31458__auto___37124)){
args__31465__auto__.push((arguments[i__31459__auto___37125]));

var G__37126 = (i__31459__auto___37125 + (1));
i__31459__auto___37125 = G__37126;
continue;
} else {
}
break;
}

var argseq__31466__auto__ = ((((0) < args__31465__auto__.length))?(new cljs.core.IndexedSeq(args__31465__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31466__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37121){
var map__37122 = p__37121;
var map__37122__$1 = ((((!((map__37122 == null)))?((((map__37122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37122):map__37122);
var opts = map__37122__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37120){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37120));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37127){if((e37127 instanceof Error)){
var e = e37127;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37127;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__37128){
var map__37129 = p__37128;
var map__37129__$1 = ((((!((map__37129 == null)))?((((map__37129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37129.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37129):map__37129);
var msg_name = cljs.core.get.call(null,map__37129__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1523638714162
