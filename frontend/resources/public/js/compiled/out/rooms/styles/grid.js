// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.styles.grid');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.ui.colors');
goog.require('stylefy.core');
rooms.styles.grid.breakpoint_lg = (1200);
rooms.styles.grid.breakpoint_md = (992);
rooms.styles.grid.breakpoint_sm = (768);
rooms.styles.grid.col_size_4 = "33.33%";
rooms.styles.grid.col_size_6 = "50%";
rooms.styles.grid.col_size_12 = "100%";
rooms.styles.grid.media_lg = (function rooms$styles$grid$media_lg(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_lg),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null)]);
});
rooms.styles.grid.media_md = (function rooms$styles$grid$media_md(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_md),"px"].join(''),cljs.core.cst$kw$max_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_lg),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null)]);
});
rooms.styles.grid.media_sm = (function rooms$styles$grid$media_sm(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$min_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_sm),"px"].join(''),cljs.core.cst$kw$max_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_md),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null)]);
});
rooms.styles.grid.media_xs = (function rooms$styles$grid$media_xs(width){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$max_DASH_width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.styles.grid.breakpoint_sm),"px"].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,width], null)]);
});
rooms.styles.grid.medias = (function rooms$styles$grid$medias(lg,md,sm,xs){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stylefy$core_SLASH_media,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.grid.media_lg(lg),rooms.styles.grid.media_md(md),rooms.styles.grid.media_sm(sm),rooms.styles.grid.media_xs(xs)], 0))], null);
});
rooms.styles.grid.grid = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$flex_DASH_flow,cljs.core.cst$kw$row,cljs.core.cst$kw$flex_DASH_wrap,cljs.core.cst$kw$wrap], null);
rooms.styles.grid.column_padding = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"10px"], null);
rooms.styles.grid.column = (function rooms$styles$grid$column(lg,md,sm,xs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.grid.column_padding,rooms.styles.grid.medias(lg,md,sm,xs)], 0));
});
