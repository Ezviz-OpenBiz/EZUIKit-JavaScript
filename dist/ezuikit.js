/**
 * ezui 1.0
 */
( function( global, factory ) {

    "use strict";

    if ( typeof module === "object" && typeof module.exports === "object" ) {
        module.exports = global.document ?
            factory( global, true ) :
            function( w ) {
                if ( !w.document ) {
                    throw new Error( "EZUIPlayer requires a window with a document" );
                }
                return factory( w );
            };
    } else {
        factory( global );
    }

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ){

    /**
     * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    !function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=t.elements;return"string"==typeof a?a.split(" "):a}function e(a,b){var c=t.elements;"string"!=typeof c&&(c=c.join(" ")),"string"!=typeof a&&(a=a.join(" ")),t.elements=c+" "+a,j(b)}function f(a){var b=s[a[q]];return b||(b={},r++,a[q]=r,s[r]=b),b}function g(a,c,d){if(c||(c=b),l)return c.createElement(a);d||(d=f(c));var e;return e=d.cache[a]?d.cache[a].cloneNode():p.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!e.canHaveChildren||o.test(a)||e.tagUrn?e:d.frag.appendChild(e)}function h(a,c){if(a||(a=b),l)return a.createDocumentFragment();c=c||f(a);for(var e=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)e.createElement(h[g]);return e}function i(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return t.shivMethods?g(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-:]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(t,b.frag)}function j(a){a||(a=b);var d=f(a);return!t.shivCSS||k||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||i(a,d),a}var k,l,m="3.7.3",n=a.html5||{},o=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,q="_html5shiv",r=0,s={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",k="hidden"in a,l=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){k=!0,l=!0}}();var t={elements:n.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:m,shivCSS:n.shivCSS!==!1,supportsUnknownElements:l,shivMethods:n.shivMethods!==!1,type:"default",shivDocument:j,createElement:g,createDocumentFragment:h,addElements:e};a.html5=t,j(b),"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:this,document);

    /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
    if("document" in self){if(!("classList" in document.createElement("_"))){(function(j){"use strict";if(!("Element" in j)){return}var a="classList",f="prototype",m=j.Element[f],b=Object,k=String[f].trim||function(){return this.replace(/^\s+|\s+$/g,"")},c=Array[f].indexOf||function(q){var p=0,o=this.length;for(;p<o;p++){if(p in this&&this[p]===q){return p}}return -1},n=function(o,p){this.name=o;this.code=DOMException[o];this.message=p},g=function(p,o){if(o===""){throw new n("SYNTAX_ERR","An invalid or illegal string was specified")}if(/\s/.test(o)){throw new n("INVALID_CHARACTER_ERR","String contains an invalid character")}return c.call(p,o)},d=function(s){var r=k.call(s.getAttribute("class")||""),q=r?r.split(/\s+/):[],p=0,o=q.length;for(;p<o;p++){this.push(q[p])}this._updateClassName=function(){s.setAttribute("class",this.toString())}},e=d[f]=[],i=function(){return new d(this)};n[f]=Error[f];e.item=function(o){return this[o]||null};e.contains=function(o){o+="";return g(this,o)!==-1};e.add=function(){var s=arguments,r=0,p=s.length,q,o=false;do{q=s[r]+"";if(g(this,q)===-1){this.push(q);o=true}}while(++r<p);if(o){this._updateClassName()}};e.remove=function(){var t=arguments,s=0,p=t.length,r,o=false,q;do{r=t[s]+"";q=g(this,r);while(q!==-1){this.splice(q,1);o=true;q=g(this,r)}}while(++s<p);if(o){this._updateClassName()}};e.toggle=function(p,q){p+="";var o=this.contains(p),r=o?q!==true&&"remove":q!==false&&"add";if(r){this[r](p)}if(q===true||q===false){return q}else{return !o}};e.toString=function(){return this.join(" ")};if(b.defineProperty){var l={get:i,enumerable:true,configurable:true};try{b.defineProperty(m,a,l)}catch(h){if(h.number===-2146823252){l.enumerable=false;b.defineProperty(m,a,l)}}}else{if(b[f].__defineGetter__){m.__defineGetter__(a,i)}}}(self))}else{(function(){var b=document.createElement("_");b.classList.add("c1","c2");if(!b.classList.contains("c2")){var c=function(e){var d=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(h){var g,f=arguments.length;for(g=0;g<f;g++){h=arguments[g];d.call(this,h)}}};c("add");c("remove")}b.classList.toggle("c3",false);if(b.classList.contains("c3")){var a=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(d,e){if(1 in arguments&&!this.contains(d)===!e){return e}else{return a.call(this,d)}}}b=null}())}};

    var Domain = 'https://open.ys7.com';
    var logDomain = 'https://log.ys7.com/statistics.do';

    var ckplayerJS = Domain + '/sdk/js/1.0/ckplayer/ckplayer.js';
    var ckplayerSWF = Domain + '/sdk/js/1.0/ckplayer/ckplayer.swf';
    var m3u8SWF = Domain + '/sdk/js/1.0/ckplayer/m3u8.swf';
    var hlsJS = Domain + '/sdk/js/1.0/hls.light.min.js';


    // 当前页面是否是https协议
    var isHttps = location.protocol === 'https:' ? true : false;
    // 是否为移动端
    var isMobile = !!navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i);
    var testVideo = document.createElement('video');
    // 是否支持video标签和addEventListener方法（主要为了区别ie8）
    var isModernBrowser = !!testVideo.canPlayType && !!window.addEventListener;
    // 是否能使用video原生播放hls
    var isNativeSupportHls = isModernBrowser && testVideo.canPlayType('application/vnd.apple.mpegURL');
    // 是否能使用hls.js播放
    var isSupportHls = false;
    // 是否使用flash
    var useFlash = false;


    var PARAMS = {
        Ver: '1.0',
        PlatAddr: 'open.ys7.com',
        ExterVer: 'Ez.1.0',
        CltType: 102,
        systemName: 'open_netstream_localinfo',
        OS: navigator.platform
    };

    var tempArray = [];
    for(var i in PARAMS){
        tempArray.push(i + '=' + PARAMS[i]);
    }
    var params = '?' + tempArray.join('&');

    // 上报一次统计信息
    var img = new Image();
    img.src = logDomain + params;



    // 日志打印
    function log(msg){
        window.console && console.log(msg);
    }

    // 获取元素样式
    function getStyle(el){
        return window.getComputedStyle
            ? window.getComputedStyle(el, null)
            : el.currentStyle;
    }

    // 加载js
    function addJs(filename, callback){
        var oJs = document.createElement("script");
        oJs.setAttribute("src", filename);
        oJs.onload = callback;
        document.getElementsByTagName("head")[0].appendChild(oJs);
    }


    var EZUIPlayer = function(videoId){
        if(!isModernBrowser){
            log('不支持ie8等低版本浏览器');
            return;
        }
        if(typeof videoId !== 'string'){
            throw new Error('EZUIPlayer requires parameter videoId');
        }
        this.videoId = videoId;
        this.video = document.getElementById(videoId);
        if(!this.video){
            throw new Error('EZUIPlayer requires parameter videoId');
        }
        this.opt = {};
        this.opt.source = this.video.src || this.video.children[0].src;

        // 数据上报
        params += '&HLSURL=' + this.opt.source;
        var img = new Image();
        img.src = logDomain + params;


        this.opt.poster = this.video.poster;
        var videoStyle = getStyle(this.video);
        var width = this.video.width;
        var height = this.video.height;
        if(width){
            this.opt.width = width;
            if(height){
                this.opt.height = height;
            }else{
                this.opt.height = 'auto';
            }
            this.log('video width:' + this.opt.width + ' height:' + this.opt.height);
        }else{
            this.opt.width = videoStyle.width;
            this.opt.height = videoStyle.height;
            this.log('videoStyle.width:' + videoStyle.width + ' wideoStyle.height:' + videoStyle.height);
        }
        this.opt.parentId = videoId;
        this.opt.autoplay = this.video.autoplay ? true : false;
        this.log('autoplay:' + this.video.autoplay);

        var me = this;
        // 如果是手机浏览器环境,或者原生支持HLS播放的,直接使用video标签播放
        // 否则尝试使用hls.js播放，
        // 最后使用flash
        if(isMobile || isNativeSupportHls){
            this.log('使用原生video');
            this.video.style.heght = Number(this.opt.width.replace(/[^\d]/g, '')) * 9 / 16 + 'px';
        }else{
            if(isHttps){
                addJs(ckplayerJS, function(){
                    me.initCKPlayer();
                });
            }else{
                addJs(hlsJS, function(){
                    isSupportHls = Hls.isSupported();
                    if(isSupportHls){
                        log('使用hls.js');
                        me.initHLS();
                    }else{
                        useFlash = true;
                        log('2 使用flash');
                        addJs(ckplayerJS, function(){
                            me.initCKPlayer();
                        });
                    }
                });
            }
        }

        //this.log('isModernBrowser:' + isModernBrowser + ' isNativeSupportHls:' + isNativeSupportHls + ' isSupportHls:' + isSupportHls + ' isMobile:' + isMobile);

    };

    // 初始化hls.js
    EZUIPlayer.prototype.initHLS = function(){
        var me = this;
        if(!this.opt.source){
            throw new Error('no source found in video');
        }
        var hls = new Hls();
        hls.loadSource(this.opt.source);
        hls.attachMedia(this.video);
        hls.on(Hls.Events.MANIFEST_PARSED, function(){
            if(me.opt.autoplay){
                me.video.play();
            }
        })
    };

    // 日志
    EZUIPlayer.prototype.log = function(msg){
        window.console && console.log(msg);
    };

    // 初始化ckplayer
    EZUIPlayer.prototype.initCKPlayer = function(){
        log('ckplayer初始化');
        // 新增相同id的div标签，然后删除video标签
        this.videoFlash = document.createElement('DIV');
        this.video.parentNode.replaceChild(this.videoFlash, this.video);
        this.videoFlash.id = this.opt.parentId;
        this.log(this.videoFlash.id);
        var flashvars = null;
        // 如果rtmp服务器环境设置了视频暂停则断开链接
        // 需要修改ckplayer.js  setup参数第30个值
        // 在播放暂停后点击播放是否采用重新链接的方式
        if(/^rtmp/.test(this.opt.source)){
            flashvars = {
                f: this.opt.source,
                c: 0,
                p: this.opt.autoplay ? 1 : 0,
                lv: 1,
                loaded: 'loadHandler'
            };
        }else if(/\.m3u8/.test(this.opt.source)){
            flashvars = {
                s:4,  // 4-使用swf视频流插件播放
                f:m3u8SWF,
                a: this.opt.source,
                c: 0,  // 0-使用ckplayer.js的配置 1-使用ckplayer.xml的配置
                lv:1, // 1-直播 0-普通方式
                p: this.opt.autoplay ? 1 : 0,   // 1-默认播放 0-默认暂停
                i: this.opt.poster,
                loaded: 'loadHandler'
            };
        }else{
            flashvars = {
                f: this.opt.source,
                c: 0,
                p: 1,
                loaded: 'loadHandler'
            };
        }
        var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};
        this.flashId = this.opt.parentId + 'flashId';
        CKobject.embedSWF(ckplayerSWF,this.opt.parentId,this.flashId,this.opt.width,this.opt.height,flashvars,params);
    };


    if ( !noGlobal ) {
        window.EZUIPlayer = EZUIPlayer;
    }
    return EZUIPlayer;
});
