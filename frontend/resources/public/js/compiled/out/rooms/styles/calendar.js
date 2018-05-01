// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.styles.calendar');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.utils');
goog.require('stylefy.core');
goog.require('rooms.ui.fonts');
rooms.styles.calendar.calendar_width = "320px";
rooms.styles.calendar.calendar = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,rooms.styles.calendar.calendar_width], null);
rooms.styles.calendar.cell = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"40px",cljs.core.cst$kw$height,"40px",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null);
rooms.styles.calendar.cell_clickable = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.utils.clickable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stylefy$core_SLASH_mode,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hover,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rooms.ui.colors.white,cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.brand_gray_80], null)], null)], null)], 0));
rooms.styles.calendar.cell_bold = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.calendar.cell,rooms.ui.fonts.bold], 0));
rooms.styles.calendar.cell_greyed = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.calendar.cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,rooms.ui.colors.brand_gray_180], null)], 0));
rooms.styles.calendar.cell_current_date = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.calendar.cell,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.colors.brand_gray_40)].join('')], null)], 0));
rooms.styles.calendar.cell_selected_date = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rooms.styles.calendar.cell,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rooms.ui.colors.white,cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.brand_red], null)], 0));
rooms.styles.calendar.calendar_header = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$display,cljs.core.cst$kw$flex,cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$link,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"30px",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null),rooms.styles.utils.clickable], 0)),cljs.core.cst$kw$heading,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$flex,(1),cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null),rooms.ui.fonts.bold], 0)),cljs.core.cst$kw$triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$height,"18px"], null)], null)], null);
