// Compiled by ClojureScript 1.9.946 {}
goog.provide('rooms.ui.fonts');
goog.require('cljs.core');
goog.require('rooms.ui.colors');
goog.require('rooms.config');
goog.require('stylefy.core');
rooms.ui.fonts.font_medium = (function rooms$ui$fonts$font_medium(){
if(cljs.core.truth_(rooms.config.use_licensed_assets_QMARK_.call(null))){
return "'Sharp Sans Medium', Arial, sans-serif";
} else {
return "'Montserrat', Arial, sans-serif";
}
});
rooms.ui.fonts.font_bold = (function rooms$ui$fonts$font_bold(){
if(cljs.core.truth_(rooms.config.use_licensed_assets_QMARK_.call(null))){
return "'Sharp Sans Bold', Century Gothic Bold, Arial Bold, sans-serif";
} else {
return "'Montserrat Bold',  Century Gothic Bold, Arial Bold, sans-serif";
}
});
rooms.ui.fonts.font_semibold = (function rooms$ui$fonts$font_semibold(){
if(cljs.core.truth_(rooms.config.use_licensed_assets_QMARK_.call(null))){
return "'Sharp Sans Semibold', Century Gothic, Arial, sans-serif";
} else {
return "'Montserrat Semibold', Century Gothic, Arial, sans-serif";
}
});
rooms.ui.fonts.font_small = (function rooms$ui$fonts$font_small(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_medium.call(null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"0.875em",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.5], null);
});
rooms.ui.fonts.bold = (function rooms$ui$fonts$bold(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_bold.call(null)], null);
});
rooms.ui.fonts.init_stylefy_fonts = (function rooms$ui$fonts$init_stylefy_fonts(){
if(cljs.core.truth_(rooms.config.use_licensed_assets_QMARK_.call(null))){
stylefy.core.font_face.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Sharp Sans Medium'",new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/SharpSans-Medium.woff2') format('woff2'),\n                            url('/fonts/SharpSans-Medium.woff') format('woff')"], null));

stylefy.core.font_face.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Sharp Sans Bold'",new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/SharpSans-Bold.woff2') format('woff2'),\n                            url('/fonts/SharpSans-Bold.woff') format('woff')"], null));

stylefy.core.font_face.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Sharp Sans Semibold'",new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/SharpSans-Semibold.woff2') format('woff2'),\n                            url('/fonts/SharpSans-Semibold.woff') format('woff')"], null));
} else {
stylefy.core.font_face.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Montserrat Medium'",new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/free/Montserrat-Medium.ttf') format('truetype')"], null));

stylefy.core.font_face.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Montserrat Bold'",new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/free/Montserrat-Bold.ttf') format('truetype')"], null));

stylefy.core.font_face.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"'Montserrat Semibold'",new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/free/Montserrat-Semibold.ttf') format('truetype')"], null));
}

stylefy.core.tag.call(null,"body",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_medium.call(null),new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text], null));

stylefy.core.tag.call(null,"h1",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_bold.call(null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"2.5rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.25,new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text], null));

stylefy.core.tag.call(null,"h2",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_semibold.call(null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.75rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.25,new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text], null));

stylefy.core.tag.call(null,"h3",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_bold.call(null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.25,new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text], null));

stylefy.core.tag.call(null,"h4",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_semibold.call(null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.25rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.25,new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text], null));

return stylefy.core.tag.call(null,"h5",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),rooms.ui.fonts.font_bold.call(null),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.125rem",new cljs.core.Keyword(null,"line-height","line-height",1870784992),1.25,new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text], null));
});
rooms.ui.fonts.link = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.brand_red,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none",new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.brand_gray_80,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),rooms.ui.colors.text,new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)], null)], null);

//# sourceMappingURL=fonts.js.map?rel=1525170771471
