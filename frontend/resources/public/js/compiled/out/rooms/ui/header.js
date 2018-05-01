// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.header');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.config');
goog.require('rooms.ui.colors');
goog.require('rooms.styles.header');
goog.require('stylefy.core');
goog.require('rooms.ui.dropdown');
goog.require('rooms.styles.content');
goog.require('rooms.language');
goog.require('rooms.styles.utils');
goog.require('rooms.state');
rooms.ui.header.logo = (function rooms$ui$header$logo(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"solita-rooms-logo.svg"].join('')], null)], null);
});
rooms.ui.header.links = (function rooms$ui$header$links(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.header.header_links),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.header.header_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://seat.solita.fi"], null)),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rooms_DASH_on_DASH_map)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.header.header_link_triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-right-white.svg"].join('')], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.header.header_link,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://intra.solita.fi/display/TOIM/Neuvotteluhuoneet"], null)),rooms.language.text.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$rooms_DASH_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(rooms.styles.header.header_link_triangle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rooms.config.url_images),"triangle-right-white.svg"].join('')], null))], null)], null)], null)], null);
});
rooms.ui.header.language_selection = (function rooms$ui$header$language_selection(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.dropdown.dropdown,cljs.core.deref(rooms.state.current_language),rooms.styles.header.header_link,rooms.state.switch_language,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$fi,cljs.core.cst$kw$name,"FI"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,cljs.core.cst$kw$en,cljs.core.cst$kw$name,"EN"], null)], null)], null);
});
rooms.ui.header.header = (function rooms$ui$header$header(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$header,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.header.header_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.content.content_wrapper),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(rooms.styles.header.header_content),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.logo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.links], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rooms.ui.header.language_selection], null)], null)], null)], null);
});
