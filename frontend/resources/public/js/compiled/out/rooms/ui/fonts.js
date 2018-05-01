// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('rooms.ui.fonts');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('rooms.ui.colors');
goog.require('stylefy.core');
rooms.ui.fonts.font_sharp_sans_medium = "'Sharp Sans Medium', Arial, sans-serif";
rooms.ui.fonts.font_sharp_sans_bold = "'Sharp Sans Bold', Century Gothic Bold, Arial Bold, sans-serif";
rooms.ui.fonts.font_sharp_sans_semibold = "'Sharp Sans Semibold', Century Gothic, Arial, sans-serif";
rooms.ui.fonts.font_small = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_medium,cljs.core.cst$kw$font_DASH_size,"0.875em",cljs.core.cst$kw$line_DASH_height,1.5], null);
rooms.ui.fonts.bold = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_bold], null);
rooms.ui.fonts.init_stylefy_fonts = (function rooms$ui$fonts$init_stylefy_fonts(){
stylefy.core.font_face(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_family,"'Sharp Sans Medium'",cljs.core.cst$kw$src,"url('/fonts/SharpSans-Medium.woff2') format('woff2'),\n                            url('/fonts/SharpSans-Medium.woff') format('woff')"], null));

stylefy.core.font_face(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_family,"'Sharp Sans Bold'",cljs.core.cst$kw$src,"url('/fonts/SharpSans-Bold.woff2') format('woff2'),\n                            url('/fonts/SharpSans-Bold.woff') format('woff')"], null));

stylefy.core.font_face(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_family,"'Sharp Sans Semibold'",cljs.core.cst$kw$src,"url('/fonts/SharpSans-Semibold.woff2') format('woff2'),\n                            url('/fonts/SharpSans-Semibold.woff') format('woff')"], null));

stylefy.core.tag("body",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_medium,cljs.core.cst$kw$color,rooms.ui.colors.text], null));

stylefy.core.tag("h1",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_bold,cljs.core.cst$kw$font_DASH_size,"2.5rem",cljs.core.cst$kw$line_DASH_height,1.25,cljs.core.cst$kw$color,rooms.ui.colors.text], null));

stylefy.core.tag("h2",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_semibold,cljs.core.cst$kw$font_DASH_size,"1.75rem",cljs.core.cst$kw$line_DASH_height,1.25,cljs.core.cst$kw$color,rooms.ui.colors.text], null));

stylefy.core.tag("h3",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_bold,cljs.core.cst$kw$font_DASH_size,"1.5rem",cljs.core.cst$kw$line_DASH_height,1.25,cljs.core.cst$kw$color,rooms.ui.colors.text], null));

stylefy.core.tag("h4",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_semibold,cljs.core.cst$kw$font_DASH_size,"1.25rem",cljs.core.cst$kw$line_DASH_height,1.25,cljs.core.cst$kw$color,rooms.ui.colors.text], null));

return stylefy.core.tag("h5",new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$font_DASH_family,rooms.ui.fonts.font_sharp_sans_bold,cljs.core.cst$kw$font_DASH_size,"1.125rem",cljs.core.cst$kw$line_DASH_height,1.25,cljs.core.cst$kw$color,rooms.ui.colors.text], null));
});
rooms.ui.fonts.link = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,rooms.ui.colors.brand_red,cljs.core.cst$kw$text_DASH_decoration,"none",cljs.core.cst$kw$stylefy$core_SLASH_mode,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$hover,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rooms.ui.colors.brand_gray_80,cljs.core.cst$kw$text_DASH_decoration,"underline"], null),cljs.core.cst$kw$active,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,rooms.ui.colors.text,cljs.core.cst$kw$text_DASH_decoration,"underline"], null)], null)], null);
