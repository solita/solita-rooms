// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.styles.grid');
goog.require('cljs.core');
goog.require('rooms.ui.colors');
goog.require('stylefy.core');
rooms.styles.grid.breakpoint_lg = (1200);
rooms.styles.grid.breakpoint_md = (992);
rooms.styles.grid.breakpoint_sm = (768);
rooms.styles.grid.col_size_4 = "33.33%";
rooms.styles.grid.col_size_6 = "50%";
rooms.styles.grid.col_size_12 = "100%";
rooms.styles.grid.media_lg = (function rooms$styles$grid$media_lg(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_lg),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)]);
});
rooms.styles.grid.media_md = (function rooms$styles$grid$media_md(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_md),"px"].join(''),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_lg),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)]);
});
rooms.styles.grid.media_sm = (function rooms$styles$grid$media_sm(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_sm),"px"].join(''),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_md),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)]);
});
rooms.styles.grid.media_xs = (function rooms$styles$grid$media_xs(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_sm),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)]);
});
rooms.styles.grid.medias = (function rooms$styles$grid$medias(lg,md,sm,xs){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834),cljs.core.merge.call(null,rooms.styles.grid.media_lg.call(null,lg),rooms.styles.grid.media_md.call(null,md),rooms.styles.grid.media_sm.call(null,sm),rooms.styles.grid.media_xs.call(null,xs))], null);
});
rooms.styles.grid.grid = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-flow","flex-flow",544537375),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"wrap","wrap",851669987)], null);
rooms.styles.grid.column_padding = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null);
rooms.styles.grid.column = (function rooms$styles$grid$column(lg,md,sm,xs){
return cljs.core.merge.call(null,rooms.styles.grid.column_padding,rooms.styles.grid.medias.call(null,lg,md,sm,xs));
});

//# sourceMappingURL=grid.js.map?rel=1523973190059
