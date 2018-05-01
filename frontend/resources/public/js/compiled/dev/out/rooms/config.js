// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.config');
goog.require('cljs.core');
goog.require('rooms.config_init');
goog.require('reagent.core');
rooms.config.config = reagent.core.atom.call(null,null);
rooms.config.init = (function rooms$config$init(){
return cljs.core.reset_BANG_.call(null,rooms.config.config,rooms.config_init.config);
});
rooms.config.use_licensed_assets_QMARK_ = (function rooms$config$use_licensed_assets_QMARK_(){
return new cljs.core.Keyword(null,"use-licensed-assets?","use-licensed-assets?",-2028829016).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.config.config));
});
rooms.config.url_images = (function rooms$config$url_images(){
if(cljs.core.truth_(rooms.config.use_licensed_assets_QMARK_.call(null))){
return "images/";
} else {
return "images/free/";
}
});
rooms.config.header_links = (function rooms$config$header_links(){
return new cljs.core.Keyword(null,"header-links","header-links",-163469985).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.config.config));
});
rooms.config.footer_links = (function rooms$config$footer_links(){
return new cljs.core.Keyword(null,"footer-links","footer-links",856640702).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.config.config));
});
rooms.config.languages = (function rooms$config$languages(){
return new cljs.core.Keyword(null,"languages","languages",1471910331).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.config.config));
});
rooms.config.start_hour = (function rooms$config$start_hour(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null));
});
rooms.config.end_hour = (function rooms$config$end_hour(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667)], null));
});
rooms.config.server_base_url = (function rooms$config$server_base_url(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetching","fetching",-1664990285),new cljs.core.Keyword(null,"base-url","base-url",9540398)], null));
});
rooms.config.fetch_defay = (function rooms$config$fetch_defay(){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetching","fetching",-1664990285),new cljs.core.Keyword(null,"automatic-fetch-delay-ms","automatic-fetch-delay-ms",31849456)], null));
});
rooms.config.locations = (function rooms$config$locations(){
return new cljs.core.Keyword(null,"locations","locations",-435476560).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rooms.config.config));
});
rooms.config.shift_timetable_right = (function rooms$config$shift_timetable_right(){
var start_hour = cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null));
var end_hour = cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667)], null));
if((end_hour < (23))){
return cljs.core.swap_BANG_.call(null,rooms.config.config,cljs.core.assoc,new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-hour","start-hour",380944413),(start_hour + (1)),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),(end_hour + (1))], null));
} else {
return null;
}
});
rooms.config.shift_timetable_left = (function rooms$config$shift_timetable_left(){
var start_hour = cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null));
var end_hour = cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667)], null));
if((start_hour > (0))){
return cljs.core.swap_BANG_.call(null,rooms.config.config,cljs.core.assoc,new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-hour","start-hour",380944413),(start_hour - (1)),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),(end_hour - (1))], null));
} else {
return null;
}
});
rooms.config.adjust_start_and_end = (function rooms$config$adjust_start_and_end(viewport_width,breakpoint_md,breakpoint_sm){
var new_size = (((viewport_width >= breakpoint_md))?(10):(((viewport_width >= breakpoint_sm))?(6):(3)
));
var new_time_window = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-hour","start-hour",380944413),cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null)),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),(cljs.core.get_in.call(null,cljs.core.deref.call(null,rooms.config.config),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.Keyword(null,"start-hour","start-hour",380944413)], null)) + new_size)], null);
var new_time_window__$1 = (((new cljs.core.Keyword(null,"end-hour","end-hour",-947387667).cljs$core$IFn$_invoke$arity$1(new_time_window) > (24)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-hour","start-hour",380944413),(new cljs.core.Keyword(null,"end-hour","end-hour",-947387667).cljs$core$IFn$_invoke$arity$1(new_time_window) - new_size),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),(24)], null):new_time_window);
return cljs.core.swap_BANG_.call(null,rooms.config.config,cljs.core.assoc,new cljs.core.Keyword(null,"timetable","timetable",-651277697),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start-hour","start-hour",380944413),new cljs.core.Keyword(null,"start-hour","start-hour",380944413).cljs$core$IFn$_invoke$arity$1(new_time_window__$1),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667),new cljs.core.Keyword(null,"end-hour","end-hour",-947387667).cljs$core$IFn$_invoke$arity$1(new_time_window__$1)], null));
});

//# sourceMappingURL=config.js.map?rel=1525170770905
