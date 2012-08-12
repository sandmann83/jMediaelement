(function(a){a.webshims=a.webshims||{ready:function(a,f){f()},addReady:function(b){a(function(){b(document,a([]))})}};var i=a.webshims;if(!window.Modernizr||!("opacity"in Modernizr))a("html").addClass(a.support.opacity?"opacity":"no-opacity");if(!a.fn.callProp)a.fn.callProp=function(b,f){var c;f||(f=[]);this.each(function(){var d=a.prop(this,b);if(d&&d.apply&&(c=d.apply(this,f),void 0!==c))return!1});return void 0!==c?c:this};var n={},r={};a.jme={version:"2.0.0",classNS:"",options:{},plugins:{},data:function(b,
f,c){b=a(b).data(g+"jme")||a.data(b,g+"jme",{});if(void 0===c)return f?b[f]:b;b[f]=c},registerPlugin:function(a,f){this.plugins[a]=f;if(!f.nodeName)f.nodeName="";if(!f.className)f.className=a},defineMethod:function(a,f){r[a]=f},defineProp:function(b,f){if(!f.set)f.set=f.readonly?function(){throw b+" is readonly";}:a.noop;if(!f.get)f.get=function(f){return a.jme.data(f,b)};n[b]=f},prop:function(b,f,c){if(!n[f])return a.prop(b,f,c);if(void 0===c)return n[f].get(b);var d=n[f].set(b,c);void 0===d&&(d=
c);"noDataSet"!=d&&a.jme.data(b,f,d)},setText:function(b,f){var c=b;b&&f&&(c={},c[b]=f);a.each(c,function(b,f){if(a.jme.plugins[b])a.jme.plugins[b].text=f})}};var p=!0;try{a.access(a(document.documentElement),"t",void 0,!0,a.noop)}catch(s){p=!1}a.fn.jmeProp=p?function(b,f){return a.access(this,b,f,!0,a.jme.prop)}:function(b,f){return a.access(this,a.jme.prop,b,f,1<arguments.length)};a.fn.jmeFn=function(a){var f=Array.prototype.slice.call(arguments,1),c;this.each(function(){c=r[a].apply(this,f);if(void 0!==
c)return!1});return void 0!==c?c:this};var j,m=[],g="",c=function(){if(!j)g=a.jme.classNS,j="div."+g+"mediaplayer",a.each(a.jme.plugins,function(b,f){f.className=g+f.className;f.selector=f.nodeName+"."+f.className;m.push(f.selector);g&&f.pseudoClasses&&a.each(f.pseudoClasses,function(a,b){f.pseudoClasses[a]=g+b})}),m=m.join(",")},e={emptied:1,pause:1};a.jme.getDOMList=function(b){var f=[];b||(b=[]);"string"==typeof b&&(b=b.split(" "));a.each(b,function(a,b){b&&(b=document.getElementById(b))&&f.push(b)});
return f};"labels"in document.createElement("input")||i.ready("dom-support",function(){i.defineNodeNamesProperty&&i.defineNodeNamesProperty("button, input, keygen, meter, output, progress, select, textarea","labels",{prop:{get:function(){var b=[],f=this.id;f&&(b=a('label[for="'+f+'"]'));b[0]||(b=a(this).closest("label",this.form));return b[0]?b.get():null},writeable:!1}})});a.jme.getButtonText=function(b,f){var c=a("span.jme-text, +label span.jme-text",b),d=b.prop("labels");d&&(d=a(d));c[0]||(c=d||
b);var e=c.text().split("/"),h=b.prop("title").split("/"),q,l,g,o;2==e.length&&(e[0]=e[0].trim(),e[1]=e[1].trim(),l=!0);2==h.length&&(h[0]=h[0].trim(),h[1]=h[1].trim(),g=!0);b.is('[type="checkbox"], [type="radio"]')?(b.prop("checked",function(){return this.defaultChecked}),q=!0):b.is("a")&&b.bind("click",function(a){a.preventDefault()});return function(h){o!==h&&(o=h,l&&c.text(e[h||0]),g&&(b.prop("title",e[h||0]),d&&d.prop("title",e[h||0])),f&&b.removeClass(f[h?0:1]).addClass(f[h]),q&&(b.prop("checked",
!!h),(b.data("checkboxradio")||{refresh:a.noop}).refresh()))}};a.fn.jmePlayer=function(b){var f=["idle","playing","ended","waiting","mediaerror"].map(function(a){return g+"state-"+a}).join(" ");return this.each(function(){b&&a.jme.data(this,a.extend(!0,{},b));var c=a("audio, video",this).filter(":first"),d=a(this),k=a(m,d),h=a.jme.getDOMList(a.jme.data(this,"controls")),k=k.add(a(h)),h=a.jme.data(this),q=a.jme.data(c[0]),l,t,o,i;q.player=d;q.media=c;if(!h.media)t=!0,l=function(b){var b=b.type,c;if("ended"==
b||a.prop(this,"ended"))b="ended";"updateJMEState"==b&&(b=a.prop(this,"readyState"),c=a.prop(this,"paused"),b=!c&&3>b?"waiting":!c&&2<b?"playing":"idle");e[b]&&(b="idle");d.removeClass(f).addClass(g+"state-"+b)},h.media=c,h.player=d,c.bind("ended",function(){c.callProp("pause")}).bind("emptied waiting playing ended pause mediaerror",l).bind("volumechange updateJMEState",function(){d[a.prop(this,"muted")?"addClass":"removeClass"](g+"state-muted")}).bind("emptied updateJMEState play playing waiting",
function(b){var f;"emptied"==b.type?f="addClass":"play"==b.type||"waiting"==b.type||"playing"==b.type?f="removeClass":a.prop(this,"paused")&&(f="addClass");d[f](g+"state-initial")}),d.bind("useractive",function(){d.addClass(g+"useractive")}).bind("userinactive",{idletime:3500},function(){d.removeClass(g+"useractive")}).bind("focusin",function(){clearTimeout(o);d.addClass(g+"focusenter")}).bind("focusout",function(){clearTimeout(o);o=setTimeout(function(){d.removeClass(g+"focusenter")},1)}).bind("mouseenter focusin",
function(){clearTimeout(i);d.addClass(g+"fover")}).bind("mouseleave focusout",function(){clearTimeout(i);i=setTimeout(function(){d.removeClass(g+"fover")},1)});d.jmeFn("addControls",k);t&&(h.controlbar&&d.jmeProp("controlbar",!0),l&&c.bind("updateJMEState",l).triggerHandler("updateJMEState"))})};a.jme.defineProp("isPlaying",{get:function(b){return!a.prop(b,"ended")&&!a.prop(b,"paused")&&1<a.prop(b,"readyState")&&!a.data(b,"mediaerror")},readonly:!0});a.jme.defineProp("player",{get:function(){return a.jme.data(this,
"player")||null},readonly:!0});a.jme.defineProp("media",{get:function(){return a.jme.data(this,"media")||null},readonly:!0});a.jme.defineProp("srces",{get:function(b){var b=a.jme.data(b),f=b.media.prop("src"),c=[];return f?[{src:f}]:c=a.map(a("source",b.media).get(),function(b){var f={src:a.prop(b,"src")},c=a.attr(b,"media");if(c)f.media=c;if(c=a.attr(b,"type"))f.type=c;return f})},set:function(b,f){var c=a.jme.data(b),d=function(b,f){"string"==typeof f&&(f={src:f});a(document.createElement("source")).attr(f).appendTo(c.media)};
c.media.removeAttr("src").find("source").remove();a.isArray(f)?a.each(f,d):d(0,f);c.media.callProp("load");return"noDataSet"}});a.jme.defineMethod("togglePlay",function(){a(this).callProp(n.isPlaying.get(this)?"pause":"play")});a.jme.defineProp("controlbar",{set:function(b,f){var f=!!f,c=a.jme.data(b),d=a("div.jme-default-media-overlay, div.jme-default-control-bar",c.player),e=a.jme.plugins["media-controls"],h="";f&&!d[0]?c._controlbar?c._controlbar.appendTo(c.player):(c.media.prop("controls",!1),
a.each(e.pluginOrder,function(b,c){var f=a.jme.plugins[c];f&&f.structure?h+=f.structure.replace("{%class%}",g+c).replace("{%text%}",f.text||""):c&&-1!=c.indexOf("<")&&(h+=c)}),c._controlbar=a(e.barStructure),d=c._controlbar.find("div.jme-cb-box").addClass(g+"media-controls"),e=c._controlbar.filter("div.jme-default-media-overlay").addClass(g+"play-pause"),e=e.add(d),e=e.add(a(h).appendTo(d)),c._controlbar.appendTo(c.player),c.player.jmeFn("addControls",e)):f||d.detach();e=d=null;return f}});a.jme.defineMethod("addControls",
function(b){var c=a.jme.data(this)||{};c.media&&(b=a(b),a.each(a.jme.plugins,function(d,e){b.filter("."+e.className).add(b.find("."+e.className)).each(function(){var b=a(this),d=a.jme.data(this);d.player=c.player;d.media=c.media;if(!d.rendered)d.rendered=!0,e.options&&a.each(e.options,function(a,b){a in d||(d[a]=b)}),e._create(b,c.media,c.player,d),b=null})}),c.player.triggerHandler("controlsadded"))});a.jme.defineMethod("updateControlbar",function(){var b=a("."+a.jme.classNS+"time-slider",this);
if(b[0]&&"absolute"!==b.css("position")){var c=Math.floor(b.parent().width())-0.1,d=0;b.hide().siblings().each(function(){this!==b[0]&&"absolute"!==a.css(this,"position")&&(d+=Math.ceil(a(this).outerWidth(!0))+0.1)}).end().show();b.width(c-d-Math.ceil(b.outerWidth(!0)-b.width())-0.3)}});a.jme.registerPlugin("media-controls",{pluginOrder:'play-pause,<div class="media-bar">,currenttime-display,time-slider,duration-display,<div class="volume-controls">,mute-unmute,volume-slider,</div>,fullscreen,<div class="subtitle-controls">,captions,</div>,</div>'.split(","),
barStructure:'<div class="jme-default-media-overlay"></div><div class="jme-default-control-bar"><div class="jme-cb-box"></div></div>',_create:function(b,c,d){var e,k=function(){clearTimeout(e);b.jmeFn("updateControlbar");e=setTimeout(function(){b.jmeFn("updateControlbar")},9)};setTimeout(function(){c.bind("loadedmetadata volumechange play pause ended emptied",k);d.bind("updatetimeformat controlsadded playerdimensionchange",k);a(window).bind("resize emchange",k)},1);k()}});(function(){var b={add:function(b,
c,d){var e=a.data(b,"jmeuseractivity")||a.data(b,"jmeuseractivity",{idletime:2500,idle:!0,trigger:{}}),h=a(b),g=function(){if(!e.idle)e.idle=!0,e.trigger.userinactive&&h.trigger("userinactive")},l,i,b=function(a){if(a&&!("mousemove"===a.type&&a.pageX===l&&a.pageY===i)){if("mousemove"===a.type)l=a.pageX,i=a.pageY;e.idleTimer&&clearTimeout(e.idleTimer);e.idleTimer=setTimeout(g,e.idletime);if(e.idle)e.idle=!1,e.trigger.useractive&&h.trigger("useractive")}};e.idletime=(c||{}).idletime||e.idletime;if(c&&
"idle"in c)e.idle=c.idle;e.trigger[d]=!0;if(!e.bound)h.bind("mouseleave.jmeuseractivity",g).bind("mousemove.jmeuseractivity focusin.jmeuseractivity mouseenter.jmeuseractivity keydown.jmeuseractivity keyup.jmeuseractivity mousedown.jmeuseractivity",b),e.bound=!0;e.idle||b({type:"initunidled"})},remove:function(b,c){var d=a.data(b,"jmeuseractivity")||a.data(b,"jmeuseractivity",{idletime:2500,idle:!0,trigger:{}});d.trigger[c]=!1;if(!d.trigger.useractive&&!d.trigger.userinactive)a(b).unbind(".jmeuseractivity"),
d.bound=!1}};a.each(["useractive","userinactive"],function(c,d){a.event.special[d]={setup:function(a){b.add(this,a,d)},teardown:function(){b.remove(this,d)}}})})();var d=function(b,c){a("video, audio",b).add(c.filter("video, audio")).filter("[data-muted]").each(function(){a.prop(this,"muted",!0)}).end().filter("[data-volume]").each(function(){var b=a(this).data("volume");1>=b&&0<=b&&a.prop(this,"volume",b)});a(j,b).add(c.filter(j)).jmePlayer()};a(function(){c();d(document,a([]))});i.ready("mediaelement",
function(){i.addReady(function(a,c){a!==document&&d(a,c)})})})(jQuery);
(function(a){function i(a,e){var d,b,f;return{get:function(){return f?void 0:a.apply(this,arguments)},set:function(){clearTimeout(d);clearTimeout(b);var a=this,c=arguments;f=!0;d=setTimeout(function(){e.apply(a,c);b=setTimeout(function(){f=!1},30)},0)}}}var n={play:1,playing:1},r=a.browser.msie&&8>parseFloat(a.browser.version,10),p=function(){a.webshims.loader&&(a.webshims.loader.loadList(["jquery-ui"]),a.webshims.modules["input-widgets"].src&&a.webshims.loader.loadList(["input-widgets"]))};a.jme.registerPlugin("play-pause",
{pseudoClasses:{play:"state-paused",pause:"state-playing"},structure:'<button class="{%class%}"><span class="jme-icon"></span><span class="jme-text">{%text%}</span></button>',text:"play / pause",_create:function(c,e){var d=a.jme.getButtonText(c,[this.pseudoClasses.play,this.pseudoClasses.pause]);e.bind("play playing ended pause updateJMEState",function(a){a=a.type;a="updateJMEState"==a?e.jmeProp("isPlaying")?1:0:n[a]?1:0;d(a)}).triggerHandler("updateJMEState");c.bind(c.is("select")?"change":"click",
function(){e.jmeFn("togglePlay")})}});a.jme.registerPlugin("mute-unmute",{pseudoClasses:{mute:"state-mute",unmute:"state-unmute"},structure:'<button class="{%class%}"><span class="jme-icon"></span><span class="jme-text">{%text%}</span></button>',text:"mute / unmute",_create:function(c,e){var d=a.jme.getButtonText(c,[this.pseudoClasses.mute,this.pseudoClasses.unmute]);e.bind("volumechange updateJMEState",function(){d(e.prop("muted")?1:0)}).triggerHandler("updateJMEState");c.bind(c.is("select")?"change":
"click",function(){e.prop("muted",!e.prop("muted"))})}});var s=function(c){var e=function(){if(!a.fn._uiSlider)!a.mobile||!a.mobile.slider?a.fn._uiSlider=a.fn.slider:a.widget("jme._uiSlider",a.ui.slider.prototype);c()};a.webshims.ready("jquery-ui",function(){!a.ui||!a.ui.slider?a.webshims.ready("input-widgets",e):e()})};a.jme.registerPlugin("volume-slider",{structure:'<div  class="{%class%}"></div>',_create:function(a,e){p();var d=i(function(){var b=e.prop("volume");void 0!==b&&a._uiSlider("value",
b)},function(a){e.prop({muted:!1,volume:a})});s(function(){a._uiSlider({range:r?!1:"min",max:1,step:0.05,value:e.prop("volume"),slide:function(a,c){a.originalEvent&&d.set(c.value)}});e.bind("volumechange",d.get)})}});a.jme.registerPlugin("time-slider",{structure:'<div  class="{%class%}"></div>',options:{format:["mm","ss"]},_create:function(c,e,d){p();var b=i(function(){var a=e.prop("currentTime");isNaN(a)||c._uiSlider("value",a)},function(a){try{e.prop("currentTime",a)}catch(b){}});d.jmeFn("addControls",
a('<div class="'+a.jme.classNS+'buffer-progress" />').prependTo(c));s(function(){var a=e.prop("duration");c._uiSlider({range:"min",max:a||1,disabled:!a,step:0.1,value:e.prop("currentTime"),slide:function(a,c){a.originalEvent&&b.set(c.value)}});e.bind({timeupdate:b.get,emptied:function(){c._uiSlider("option","disabled",!0)},durationchange:function(){c._uiSlider("option","disabled",!1)._uiSlider("option","max",e.prop("duration"))}})})}});a.jme.defineMethod("concerningRange",function(c,e){var d={start:0,
end:0};c||(c="buffered");c=a.prop(this,c);null==e&&(e=a.prop(this,"currentTime"));if(!c||!("length"in c))return d;for(var b=0,f=c.length;b<f&&!(d.start=c.start(b),d.end=c.end(b),d.start<=e&&d.end>=e);b++);return d});a.jme.defineProp("progress",{get:function(c){c=a.jme.data(c);if(!c.media)return 0;c=100*(c.media.jmeFn("concerningRange").end/c.media.prop("duration"));99.4<c&&(c=100);return c||0},readonly:!0});a.jme.registerPlugin("buffer-progress",{_create:function(c,e,d,b){var f=a('<div class="'+a.jme.classNS+
'buffer-progress-indicator" />').appendTo(c),c=function(){var a=e.jmeProp("progress");if(b.progress!==a)b.progress=a,f.css("width",a+"%")};e.bind({progress:c,emptied:function(){f.css("width",0);b.progress=0},playing:c});c()}});var j={hh:6E4,mm:60,ss:1,ms:0.0010},m=function(c,e){var d;e||(e=["mm","ss"]);null==c&&(d=a.jme.data(this),c=a.prop(d.media,"duration"));c||(c=0);d=[];for(var b,f=0,g=e.length;f<g;f++)"ms"==e[f]&&f==g-1?b=Math.round(c/j[e[f]]/10):(b=parseInt(c/j[e[f]],10),c%=j[e[f]]),10>b&&(b=
"0"+b),d.push(b);return d.join(":")};a.jme.defineMethod("formatTime",m);a.jme.defineProp("format",{set:function(c,e){a.isArray(e)||(e=e.split(":"));var d=a.jme.data(c);d.format=e;a(c).triggerHandler("updatetimeformat");d.player.triggerHandler("updatetimeformat");return"noDataSet"}});a.jme.registerPlugin("duration-display",{structure:'<div  class="{%class%}"></div>',options:{format:"mm:ss"},_create:function(a,e,d,b){if("string"==typeof b.format)b.format=b.format.split(":");d=function(){a.html(m(e.prop("duration"),
b.format))};e.bind("durationchange emptied",d);a.bind("updatetimeformat",d).jmeProp("format",b.format)}});a.jme.defineProp("countdown",{set:function(c,e){var d=a.jme.data(c);d.countdown=!!e;a(c).triggerHandler("updatetimeformat");d.player.triggerHandler("updatetimeformat");return"noDataSet"}});a.jme.registerPlugin("currenttime-display",{structure:'<div  class="{%class%}"></div>',options:{format:"mm:ss",countdown:!1},_create:function(a,e,d,b){if("string"==typeof b.format)b.format=b.format.split(":");
d=function(){var d=e.prop("currentTime");b.countdown&&(d=(e.prop("duration")||0)-d,0.7>d&&(d=0));a.html(m(d,b.format))};e.bind("timeupdate emptied durationchange",d);a.bind("updatetimeformat",d).jmeProp("format",b.format)}});a.jme.fullscreen=function(){var c,e,d={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(b){c=[];a(b).parentsUntil("body").each(function(){var b=a.curCSS(this,"position"),d=this.scrollLeft,f=this.scrollTop,g;e={elemStyle:this.style,elem:this};
if("static"!==b)g=!0,e.pos=e.elemStyle.position,this.style.position="static";if(d)g=!0,e.left=d;if(f)g=!0,e.top=f;g&&c.push(e)});e=null},cancelFullScreen:function(){c&&a.each(c,function(a,b){if("pos"in b)b.elemStyle.position=b.pos;if(b.left)b.elem.scrollLeft=b.left;if(b.top)b.elem.scrollTop=b.top})},eventName:"fullscreenchange",prefix:""},b="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)d.supportsFullScreen=!0;else for(var f=0,g=b.length;f<g;f++)if(d.prefix=b[f],
"undefined"!=typeof document[d.prefix+"CancelFullScreen"]){d.supportsFullScreen=!0;break}if(d.supportsFullScreen)d.eventName=d.prefix+"fullscreenchange",d.isFullScreen=function(){switch(d.prefix){case "":return document.fullScreen;case "webkit":return document.webkitIsFullScreen;default:return document[d.prefix+"FullScreen"]}},d.requestFullScreen=function(a){return""===d.prefix?a.requestFullScreen():a[this.prefix+"RequestFullScreen"]()},d.cancelFullScreen=function(){return""===d.prefix?document.cancelFullScreen():
document[this.prefix+"CancelFullScreen"]()};return d}();a.jme.defineProp("fullscreen",{set:function(c,e){var d=a.jme.data(c);if(!d||!d.player)return"noDataSet";if(e){if(d.player.hasClass(a.jme.classNS+"player-fullscreen"))return"noDataSet";d.scrollPos={top:a(window).scrollTop(),left:a(window).scrollLeft()};a(document).unbind(".jmefullscreen").bind("keydown.jmefullscreen",function(a){if(27==a.keyCode)return d.player.jmeProp("fullscreen",!1),!1});try{a.jme.fullscreen.requestFullScreen(d.player[0])}catch(b){}a("html").addClass(a.jme.classNS+
"has-media-fullscreen");d.player.addClass(a.jme.classNS+"player-fullscreen");d.media.addClass(a.jme.classNS+"media-fullscreen");a.jme.fullscreen.supportsFullScreen&&a(document).bind(a.jme.fullscreen.eventName+".jmefullscreen",function(b){var e=a.jme.fullscreen.isFullScreen();e&&c==b.target?a(c).triggerHandler("playerdimensionchange",["fullscreen"]):e||d.player.jmeProp("fullscreen",!1)});d.player.triggerHandler("playerdimensionchange",["fullwindow"]);d.media.callProp("play")}else{if(!d.player.hasClass(a.jme.classNS+
"player-fullscreen"))return"noDataSet";a(document).unbind(".jmefullscreen");a("html").removeClass(a.jme.classNS+"has-media-fullscreen");d.player.removeClass(a.jme.classNS+"player-fullscreen");d.media.removeClass(a.jme.classNS+"media-fullscreen");try{a.jme.fullscreen.cancelFullScreen()}catch(f){}d.player.triggerHandler("playerdimensionchange");d.scrollPos&&(a(window).scrollTop(d.scrollPos.top),a(window).scrollLeft(d.scrollPos.left),delete d.scrollPos)}return"noDataSet"},get:function(c){if((c=a.jme.data(c))&&
c.player)return!c.player.hasClass(a.jme.classNS+"player-fullscreen")?!1:a.jme.fullscreen.isFullScreen()||"fullwindow"}});a.jme.registerPlugin("fullscreen",{pseudoClasses:{enter:"state-enterfullscreen",exit:"state-exitfullscreen"},structure:'<button class="{%class%}"><span class="jme-icon"></span><span class="jme-text">{%text%}</span></button>',text:"enter fullscreen / exit fullscreen",_create:function(c,e,d){var b=a.jme.getButtonText(c,[this.pseudoClasses.enter,this.pseudoClasses.exit]),e=function(){b(d.hasClass(a.jme.classNS+
"player-fullscreen")?1:0)};d.bind("playerdimensionchange",e);c.bind(c.is("select")?"change":"click",function(){d.jmeProp("fullscreen",!d.hasClass(a.jme.classNS+"player-fullscreen"))});e()}});a.jme.ButtonMenu=function(c,e,d){this.menu=a(e);this.button=a(c).attr({"aria-haspopup":"true"});this.buttons=a("button",this.menu);this.clickHandler=d;this.toggle=a.proxy(this,"toggle");this.keyIndex=a.proxy(this,"keyIndex");this._buttonClick=a.proxy(this,"_buttonClick");this.menu.insertAfter(this.button);this._closeFocusOut();
this.button.bind("click",this.toggle);this.menu.bind("keydown",this.keyIndex).delegate("button","click",this._buttonClick)};a.jme.ButtonMenu.prototype={_closeFocusOut:function(){var a=this,e,d=function(){clearTimeout(e);setTimeout(function(){clearTimeout(e)},9)};this.menu.parent().bind("focusin",d).bind("mousedown",d).bind("focusout",function(){e=setTimeout(function(){a.hide()},40)})},_buttonClick:function(a){this.clickHandler(this.buttons.index(a.currentTarget),a.currentTarget);this.hide()},keyIndex:function(a){var e=
40==a.keyCode?1:38==a.keyCode?-1:0;if(e){var d=this.buttons.not(":disabled"),b=d.filter(":focus"),b=d[d.index(b)+e]||d.filter(0<e?":first":":last");b.focus();a.preventDefault()}},show:function(){if(!this.isVisible){var a=this.buttons.not(":disabled");this.isVisible=!0;this.menu.addClass("visible-menu");try{this.activeElement=document.activeElement||this.button[0]}catch(e){this.activeElement=this.button[0]}setTimeout(function(){a.eq(0).focus()},60)}},toggle:function(){this[this.isVisible?"hide":"show"]()},
hide:function(){if(this.isVisible){this.isVisible=!1;this.menu.removeClass("visible-menu");if(this.activeElement)try{this.activeElement.focus()}catch(a){}this.activeElement=!1}}};var g=function(c){return"<div><ul>"+c.map(function(){var c="caption"==a.prop(this,"kind")?"caption-type":"subtitle-type",d=a.prop(this,"srclang");return'<li class="'+c+'" role="presentation"><button role="menuitem">'+a.prop(this,"label")+(d?' <span class="track-lang">'+d+"</span>":"")+"</button></li>"}).get().join("")+"</ul></div>"};
a.jme.registerPlugin("captions",{pseudoClasses:{enabled:"state-captionsenabled",disabled:"state-captionsdisabled",noTrack:"no-tracks",hasTrack:"has-track",menu:"subtitle-menu"},structure:'<button class="{%class%}"><span class="jme-icon"></span><span class="jme-text">{%text%}</span></button>',text:"subtitles on / subtitles off",_create:function(c,e,d){var b=this,f=e.find("track").filter('[kind="subtitles"], [kind="caption"], :not([kind])'),i,j,k,h;f.length?(d.addClass(b.pseudoClasses.hasTrack),a.webshims.ready("track",
function(){1<f.length?(k=new a.jme.ButtonMenu(c,'<div class="'+b.pseudoClasses.menu+'" >'+g(f)+"</div>",function(b){f.each(function(c){a.prop(this,"track").mode=c==b?2:0;j()})}),j=function(){a("button",k.menu).each(function(b){if(3==f.eq(b).prop("readyState"))a(this).prop("disabled",!0);else a(this)[2==f.eq(b).prop("track").mode?"addClass":"removeClass"]("active-track")})},h=a("span.jme-text, +label span.jme-text",c),h[0]||(h=c),h.html(b.text)):(i=a.jme.getButtonText(c,[b.pseudoClasses.enabled,b.pseudoClasses.disabled]),
j=function(){3==f.prop("readyState")?(c.prop("disabled",!0),i(1)):i(2==f.prop("track").mode?0:1)},c.bind("click",function(){var a=f.prop("track");a.mode=2>a.mode?2:0;j()}));f.bind("load error",j);d.bind("updatesubtitlestate",j);j()})):(c.prop("disabled",!0),d.addClass(b.pseudoClasses.noTrack))}});a.jme.registerPlugin("poster-display",{structure:"<div />",options:{},_create:function(c,e){var d=function(){var b=e.prop("poster");b?c.html('<span></span><img src="'+b+'" class="'+a.jme.classNS+'poster-image" />'):
c.empty()};e.bind("emptied",d);d()}})})(jQuery);
