// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.styles.dropdown');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.ui.colors');
goog.require('stylefy.core');
goog.require('rooms.styles.utils');
rooms.styles.dropdown.container = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$relative], null);
rooms.styles.dropdown.dropdown = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,cljs.core.cst$kw$absolute,cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.white,cljs.core.cst$kw$border,["1px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.ui.colors.black)].join(''),cljs.core.cst$kw$padding,(0),cljs.core.cst$kw$list_DASH_style_DASH_type,cljs.core.cst$kw$none], null);
rooms.styles.dropdown.dropdown_triangle = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin_DASH_left,"5px",cljs.core.cst$kw$position,cljs.core.cst$kw$relative,cljs.core.cst$kw$top,"-2px",cljs.core.cst$kw$height,"15px"], null);
rooms.styles.dropdown.item = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$padding,"5px",cljs.core.cst$kw$margin,(0),cljs.core.cst$kw$stylefy$core_SLASH_mode,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hover,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,rooms.ui.colors.brand_gray_230], null)], null)], null),rooms.styles.utils.clickable], 0));
