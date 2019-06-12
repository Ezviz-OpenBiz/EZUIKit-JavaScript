/**
 * jssdk 2.4
 */
(function (global, factory) {

  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ?
      factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error("EZUIPlayer requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global);
  }

  // Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

  /**
   * @preserve HTML5 Shiv 3.7.3 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
   */
  !function (a, b) { function c(a, b) { var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement; return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild) } function d() { var a = t.elements; return "string" == typeof a ? a.split(" ") : a } function e(a, b) { var c = t.elements; "string" != typeof c && (c = c.join(" ")), "string" != typeof a && (a = a.join(" ")), t.elements = c + " " + a, j(b) } function f(a) { var b = s[a[q]]; return b || (b = {}, r++ , a[q] = r, s[r] = b), b } function g(a, c, d) { if (c || (c = b), l) return c.createElement(a); d || (d = f(c)); var e; return e = d.cache[a] ? d.cache[a].cloneNode() : p.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !e.canHaveChildren || o.test(a) || e.tagUrn ? e : d.frag.appendChild(e) } function h(a, c) { if (a || (a = b), l) return a.createDocumentFragment(); c = c || f(a); for (var e = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++)e.createElement(h[g]); return e } function i(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) { return t.shivMethods ? g(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-:]+/g, function (a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(t, b.frag) } function j(a) { a || (a = b); var d = f(a); return !t.shivCSS || k || d.hasCSS || (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || i(a, d), a } var k, l, m = "3.7.3", n = a.html5 || {}, o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, q = "_html5shiv", r = 0, s = {}; !function () { try { var a = b.createElement("a"); a.innerHTML = "<xyz></xyz>", k = "hidden" in a, l = 1 == a.childNodes.length || function () { b.createElement("a"); var a = b.createDocumentFragment(); return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement }() } catch (c) { k = !0, l = !0 } }(); var t = { elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video", version: m, shivCSS: n.shivCSS !== !1, supportsUnknownElements: l, shivMethods: n.shivMethods !== !1, type: "default", shivDocument: j, createElement: g, createDocumentFragment: h, addElements: e }; a.html5 = t, j(b), "object" == typeof module && module.exports && (module.exports = t) }("undefined" != typeof window ? window : this, document);

  /*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
  if ("document" in self) { if (!("classList" in document.createElement("_"))) { (function (j) { "use strict"; if (!("Element" in j)) { return } var a = "classList", f = "prototype", m = j.Element[f], b = Object, k = String[f].trim || function () { return this.replace(/^\s+|\s+$/g, "") }, c = Array[f].indexOf || function (q) { var p = 0, o = this.length; for (; p < o; p++) { if (p in this && this[p] === q) { return p } } return -1 }, n = function (o, p) { this.name = o; this.code = DOMException[o]; this.message = p }, g = function (p, o) { if (o === "") { throw new n("SYNTAX_ERR", "An invalid or illegal string was specified") } if (/\s/.test(o)) { throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character") } return c.call(p, o) }, d = function (s) { var r = k.call(s.getAttribute("class") || ""), q = r ? r.split(/\s+/) : [], p = 0, o = q.length; for (; p < o; p++) { this.push(q[p]) } this._updateClassName = function () { s.setAttribute("class", this.toString()) } }, e = d[f] = [], i = function () { return new d(this) }; n[f] = Error[f]; e.item = function (o) { return this[o] || null }; e.contains = function (o) { o += ""; return g(this, o) !== -1 }; e.add = function () { var s = arguments, r = 0, p = s.length, q, o = false; do { q = s[r] + ""; if (g(this, q) === -1) { this.push(q); o = true } } while (++r < p); if (o) { this._updateClassName() } }; e.remove = function () { var t = arguments, s = 0, p = t.length, r, o = false, q; do { r = t[s] + ""; q = g(this, r); while (q !== -1) { this.splice(q, 1); o = true; q = g(this, r) } } while (++s < p); if (o) { this._updateClassName() } }; e.toggle = function (p, q) { p += ""; var o = this.contains(p), r = o ? q !== true && "remove" : q !== false && "add"; if (r) { this[r](p) } if (q === true || q === false) { return q } else { return !o } }; e.toString = function () { return this.join(" ") }; if (b.defineProperty) { var l = { get: i, enumerable: true, configurable: true }; try { b.defineProperty(m, a, l) } catch (h) { if (h.number === -2146823252) { l.enumerable = false; b.defineProperty(m, a, l) } } } else { if (b[f].__defineGetter__) { m.__defineGetter__(a, i) } } }(self)) } else { (function () { var b = document.createElement("_"); b.classList.add("c1", "c2"); if (!b.classList.contains("c2")) { var c = function (e) { var d = DOMTokenList.prototype[e]; DOMTokenList.prototype[e] = function (h) { var g, f = arguments.length; for (g = 0; g < f; g++) { h = arguments[g]; d.call(this, h) } } }; c("add"); c("remove") } b.classList.toggle("c3", false); if (b.classList.contains("c3")) { var a = DOMTokenList.prototype.toggle; DOMTokenList.prototype.toggle = function (d, e) { if (1 in arguments && !this.contains(d) === !e) { return e } else { return a.call(this, d) } } } b = null }()) } };


  Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  };


  var Domain = 'https://open.ys7.com';
  var logDomain = 'https://log.ys7.com/statistics.do';

  var jqueryJS = Domain + '/sdk/js/2.0/js/jquery.min.js';
  var ckplayerJS = Domain + '/sdk/js/2.0/js/ckplayer/ckplayer.js';
  var ckplayerSWF = Domain + '/sdk/js/2.0/js/ckplayer/ckplayer.swf';
  var m3u8SWF = Domain + '/sdk/js/2.0/js/ckplayer/m3u8.swf';
  var flv_js = Domain + '/sdk/js/2.0/js/flv.min.js';
  var hlsJS = Domain + '/sdk/js/2.0/js/hls.min.js';
  var mpegJS = Domain + '/sdk/js/2.0/js/jsmpeg.min.js';
  var wav = Domain + '/sdk/js/2.0/js/wav-audio-encoder.js';


  // 当前页面是否是https协议
  var isHttps = window.location.protocol === 'https:' ? true : false;
  // 是否为移动端
  var isMobile = !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|ios|SymbianOS)/i);
  var testVideo = document.createElement('video');
  // 是否支持video标签和addEventListener方法（主要为了区别ie8）
  var isModernBrowser = !!testVideo.canPlayType && !!window.addEventListener;
  // 是否能使用video原生播放hls，目前只有safari可以支持原生video播放。
  var isNativeSupportHls = isModernBrowser && testVideo.canPlayType('application/vnd.apple.mpegURL');
  // 是否能使用hls.js播放
  var isSupportHls = false;
  // 是否使用flash
  var useFlash = false;

  // 本地信息上报
  var LOCALINFO = 'open_netstream_localinfo';
  // 预览主表上报
  var PLAY_MAIN = 'open_netstream_play_main';

  function dclog(obj) {
    var domain = window.location.protocol + '//' + window.location.host;
    var logObj = {
      Ver: 'v.2.4.5',
      PlatAddr: domain,
      ExterVer: 'Ez.2.4.5',
      CltType: 102,
      StartTime: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),  // 每个日志包含当前的时间
      OS: navigator.platform
    }
    for (var i in obj) {
      logObj[i] = obj[i];
    }

    var tempArray = [];
    for (var j in logObj) {
      tempArray.push(j + '=' + logObj[j]);
    }
    var params = '?' + tempArray.join('&');
    // 上报一次本地统计信息
    var img = new Image();
    img.src = logDomain + params;
  }

  // 上报一次本地信息
  dclog({
    systemName: LOCALINFO
  });

  var RTMP_REG = /^rtmp/;
  var HLS_REG = /\.m3u8/;

  // 获取元素样式
  function getStyle(el) {
    return window.getComputedStyle
      ? window.getComputedStyle(el, null)
      : el.currentStyle;
  }

  // 加载js
  function addJs(filepath, callback) {
    var oJs = document.createElement("script");
    oJs.setAttribute("src", filepath);
    oJs.onload = callback;
    document.getElementsByTagName("head")[0].appendChild(oJs);
  }
  // 通用请求方法
  function request(url, method, params, header, success, error) {
    var _url = url;
    var http_request = new XMLHttpRequest();
    http_request.onreadystatechange = function () {
      if (http_request.readyState == 4) {
        if (http_request.status == 200) {
          var _data = JSON.parse(http_request.responseText);
          success(_data);
        }
      }
    };
    http_request.open(method, _url, true);
    // http_request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = new FormData();
    for (i in params) {
      data.append(i, params[i]);
    }
    http_request.send(data);
  };
  //获取url参数
  function getQueryString(name, url) {
    var r = new RegExp("(\\?|#|&)" + name + "=(.*?)(#|&|$)");
    var m = (url || location.href).match(r);
    return decodeURIComponent(m ? m[2] : '');
  }
  /**判断是否为promise对象 */
  function isPromise(obj) { return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'; }


  var EZUIPlayer = function (playParams) {
    if (!isModernBrowser) {
      throw new Error('不支持ie8等低版本浏览器');
      return;
    }
    /**定义播放配置项 */
    this.opt = {};
    this.opt.sources = [];
    this.handlers = {};

    // 修订 - 支持JS Decoder 允许非字符串配置项
    if (typeof playParams === 'object' && playParams.hasOwnProperty('decoderPath')) {
      /* 校验播放器配置参数合法性 */
      // 解码器路径
      if (typeof playParams.decoderPath !== 'string' || typeof playParams.decoderPath === 'undefined') {
        throw new Error('EZUIDecoder requires the path of decoder');
        return;
      }
      // Id
      if (typeof playParams.id !== 'string' || typeof playParams.id === 'undefined') {
        throw new Error('EZUIDecoder requires parameter id');
        return;
      }
      if (typeof playParams.url !== 'string' || typeof playParams.url === 'undefined') {
        throw new Error('EZUIDecoder requires parameter url');
        return;
      }
      // 将播放地址配置在实例 opt 属性中
      this.opt.sources.push(playParams.url);
      // JSDecoder  只有一个播放地址
      this.opt.currentSource = this.opt.sources[0];

      /* 获取解码器用户配置项 - 开始 */
      /** 
       * 调试模式配置
       * 可通过dev属性指定API服务域名
       */
      var domain = "https://open.ys7.com";
      if (playParams.env) {
        var environmentParams = playParams.env;
        domain = environmentParams.domain;
      }

      /** 创建jSPlugin 对象 */
      this.jSPlugin = {};
      var _this = this;
      /** 根据播放参数获取真实播放地址 */
      var getRealUrl = this.getRealUrl(playParams);
      /**是否自动播放 */
      if (isPromise(getRealUrl)) {
        getRealUrl.then(function (data) {
          var initDecoder = _this.initDecoder(playParams);
          if (isPromise(initDecoder) && (playParams.autoplay !== false)) {
            initDecoder.then(function (data) {
              _this.play({ handleError: playParams.handleError, handleSuccess: playParams.handleSuccess });
            })
          }
        })
          .catch(function (err) {
            var initDecoder = _this.initDecoder(playParams);
            if (isPromise(initDecoder) && (playParams.autoplay !== false)) {
              initDecoder.then(function () {
                // _this.play({ handleError: playParams.handleError });
              })
            }
          });
      }
    } else {
      var elementID = '';
      if (typeof playParams === 'string') {         //缩写模式 new EZUIPlayer('myplayer')
        elementID = playParams;
      } else if (typeof playParams === 'object') {  //标准模式 new EZUIPlayer({id: 'myplayer'})
        elementID = playParams.id;
      }
      this.videoId = elementID;
      this.video = document.getElementById(elementID);
      if (!this.video) {
        throw new Error('EZUIPlayer requires parameter videoId');
      }
      var sources = this.video.getElementsByTagName('source');
      // 转为数组对象，不受removeChild影响
      sources = Array.prototype.slice.call(sources, 0);

      if (this.video.src) {
        // 移动端删除rtmp地址
        if (isMobile && RTMP_REG.test(this.video.src)) {
          this.video.removeAttribute('src');
          this.video.load();
        } else {
          this.opt.sources.push(this.video.src);
        }
      }

      var l = sources.length;
      if (l > 0) {
        for (var i = 0; i < l; i++) {
          // 移动端删除rtmp地址
          if (isMobile && RTMP_REG.test(sources[i].src)) {
            this.video.removeChild(sources[i]);
          } else {
            this.opt.sources.push(sources[i].src);
          }
        }
      }
      if (this.opt.sources.length < 1) {
        throw new Error('no source found in video tag.');
      }
      this.opt.cur = 0;
      this.opt.poster = this.video.poster;
      var videoStyle = getStyle(this.video);
      var width = this.video.width;
      var height = this.video.height;
      if (width) {
        this.opt.width = width;
        if (height) {
          this.opt.height = height;
        } else {
          this.opt.height = 'auto';
        }
        this.log('video width:' + this.opt.width + ' height:' + this.opt.height);
      } else {
        this.opt.width = videoStyle.width;
        this.opt.height = videoStyle.height;
        this.log('videoStyle.width:' + videoStyle.width + ' wideoStyle.height:' + videoStyle.height);
      }
      this.opt.parentId = elementID;
      this.opt.autoplay = this.video.autoplay ? true : false;
      this.log('autoplay:' + this.video.autoplay);

      this.opt.currentSource = this.opt.sources[this.opt.cur];
      this.getRealUrl(playParams);
    }

    /* 创建播放，错误，停止事件钩子，上报用户行为 */
    this.handlers = {};
    this.initTime = (new Date()).getTime();
    this.on('play', function () {
      // 上报播放成功信息
      dclog({
        systemName: PLAY_MAIN,
        playurl: this.opt.currentSource,
        Time: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),
        Enc: 0,  // 0 不加密 1 加密
        PlTp: 1,  // 1 直播 2 回放
        Via: 2,  // 2 服务端取流
        ErrCd: 0,
        Cost: (new Date()).getTime() - this.initTime  // 毫秒数
      });
    });
    this.retry = 2;
    this.on('error', function () {
      dclog({
        systemName: PLAY_MAIN,
        playurl: this.opt.currentSource,
        cost: -1,
        ErrCd: -1
      });
    });
  };

  // 事件监听
  EZUIPlayer.prototype.on = function (eventName, callback) {
    if (typeof eventName !== 'string' || typeof callback !== 'function') {
      return;
    }
    if (typeof this.handlers[eventName] === 'undefined') {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  };

  // 事件触发
  EZUIPlayer.prototype.emit = function () {
    if (this.handlers[arguments[0]] instanceof Array) {
      var handlers = this.handlers[arguments[0]];
      var l = handlers.length;
      for (var i = 0; i < l; i++) {
        handlers[i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };
  // 日志
  EZUIPlayer.prototype.log = function (msg, className) {
    this.emit('log', msg, className);
  };

  EZUIPlayer.prototype.getRealUrl = function (playParams) {
    var _this = this;
    var apiDomain = 'https://open.ys7.com';
    if (playParams && playParams.env) {
      apiDomain = playParams.env.domain;
    }
    /** jsDecoder 获取真实地址 -- 开始 */
    if (playParams && playParams.hasOwnProperty('decoderPath')) {
      var getRealUrlPromise = function (resolve, reject, ezopenURL) {
        var realUrl = '';
        if (!/^ezopen:\/\//.test(ezopenURL)) { // JSDecoder ws协议播放
          resolve(ezopenURL);
        } else {
          var nodeUrl = apiDomain + "/jssdk/ezopen/getStreamToken?accessToken=" + playParams.accessToken + '&num=10&type=' + (playParams.url.indexOf('live') !== -1 ? 'live' : 'playback');
          var nodeSuccess = function (data) {
            if (data.retcode === 0) {
              realUrl = realUrl + data.data.params + '&ssn=' + data.data.tokens[0];
              // _this.opt.currentSource = realUrl;
              resolve(realUrl);
            } else {
              // 将错误信息捕获到用户自定义错误回调中
              if (playParams && playParams.handleError) {
                playParams.handleError(data);
              }
              reject(JSON.stringify(data));
              throw new Error('获取播放token失败');
            }
          }
          var nodeError = function (error) {
            // 将错误信息捕获到用户自定义错误回调中
            if (playParams && playParams.handleError) {
              playParams.handleError(error);
            }
            reject(JSON.stringify(error))
            throw new Error('获取播放token失败', 'error');
          }
          // 向API请求真实地址
          var apiUrl = apiDomain + "/api/lapp/live/url/ezopen";
          var apiSuccess = function (data) {
            if (data.code == 200 || data.retcode == 0) {
              realUrl += data.data;
              /**参数容错处理  start*/
              if (data.data.indexOf('playback') !== -1) { //回放
                // 兼容各种时间格式
                if (!getQueryString('begin', data.data)) {
                  var defaultDate = new Date();
                  realUrl = realUrl + '&begin=' + defaultDate.Format('yyyyMMdd') + 'T000000Z';
                } else {
                  realUrl = realUrl.replace('&begin=' + getQueryString('begin', data.data), '&begin=' + formatRecTime(getQueryString('begin', data.data), '000000'))
                }
                if (!getQueryString('end', data.data)) {
                  var defaultDate = new Date();
                  realUrl = realUrl + '&end=' + defaultDate.Format('yyyyMMdd') + 'T235959Z';
                } else {
                  realUrl = realUrl.replace('&end=' + getQueryString('end', data.data), '&end=' + formatRecTime(getQueryString('end', data.data), '235959'))
                }
                // api错误处理
                if (!getQueryString('stream', data.data)) {
                  realUrl = realUrl.replace('stream', '&stream');
                }
              }
              request(nodeUrl, 'GET', '', '', nodeSuccess, nodeError);
            } else {
              // 将错误信息捕获到用户自定义错误回调中
              if (playParams && playParams.handleError) {
                playParams.handleError(data);
              }
              reject(JSON.stringify(data), 'error')
              //throw new Error('获取播放设备信息失败');
            }
            /**参数容错处理  end*/
          }
          var apiError = function (error) {
            // 将错误信息捕获到用户自定义错误回调中
            if (playParams && playParams.handleError) {
              playParams.handleError(error);
            }
            reject(JSON.stringify(error))
            //throw new Error('获取播放设备信息失败');
          }
          var isHttp = 'false';
          if (playParams && playParams.env && playParams.env.domain) {
            isHttp = playParams.env.domain.indexOf('https') !== -1 ? 'false' : 'true';
          } else {
            isHttp = window.location.href.indexOf('https') !== -1 ? 'false' : 'true';
          }
          var apiParams = {
            ezopen: ezopenURL,
            userAgent: window.navigator.userAgent,
            isFlv: false,
            addressTypes: null,
            isHttp: isHttp,
            accessToken: playParams.accessToken,
          }
          request(apiUrl, 'POST', apiParams, '', apiSuccess, apiError);
        }
      }
      var urlList = playParams.url.split(',')
      var promiseTaskList = [];
      var promiseTaskFun = function(ezopenURL) {
        return new Promise(function(resolve, reject){return getRealUrlPromise(resolve, reject, ezopenURL)})
      };
      urlList.map(function (item, index) {
        promiseTaskList.push(promiseTaskFun(item));
      });
      var getRealUrlPromiseObj = Promise.all(promiseTaskList)
        .then(function (result) {
          // 获取真实地址成功后，赋值到opt属性中
          _this.opt.sources = result;
          _this.opt.currentSource = result[0];
        })
        .catch(function (err) {
          _this.log("获取真实地址错误" + JSON.stringify(err), 'error')
        })
      return getRealUrlPromiseObj;
    } else {
      if (!this.opt.currentSource) {
        this.log('未找到合适的播放URL', 'error');
        return;
      }
      var me = this;
      // 如果不是ezopen打头的，走原来的播放模式
      if (!/^ezopen:\/\//.test(this.opt.currentSource)) {
        this.tryPlay(this.opt.currentSource);
      } else {
        // 如果是ezopen协议地址，先校验一下地址的合法性
        if (!/^ezopen:\/\//.test(this.opt.currentSource)) {
          throw new Error('EZOPEN地址必须要以ezopen://开头');
          return;
        } else if (this.opt.currentSource.indexOf('.com/') === -1) {
          throw new Error('EZOPEN地址格式不正确');
          return;
        } else if (!/[a-z\d]{32}(\.hd)?\.live/.test(this.opt.currentSource)) {
          throw new Error('EZOPEN地址格式uuid格式不正确');
          return;
        } else if (/(.*.hls.*|.*.m3u8.*|.*.wss.*|.*.flv.*|.*.rtmp.*){2,}/.test(this.opt.currentSource)) {
          throw new Error('EZOPEN地址多于两个播放协议');
          return;
        } else if (this.opt.currentSource.search(/(.hls|.m3u8|.wss|.flv|.rtmp)/) !== -1 && !/.live(.hls|.m3u8|.wss|.flv|.rtmp)/.test(this.opt.currentSource)) {
          throw new Error('请指定正确的播放协议');
          return;
        } else if (this.opt.currentSource.search(/(.hls|.m3u8|.wss|.flv|.rtmp)/) === -1 && !/[a-z\d]{32}(\.hd)?\.live$/.test(this.opt.currentSource)) {
          throw new Error('EZOPEN地址结尾不正确');
          return;
        } else {
          /* 获取播放地址 - 开始 */
          var that = this;
          addJs(flv_js, function () {
            var para = {
              "ezopen": that.opt.currentSource,
              "userAgent": window.navigator.userAgent,
              "isFlv": flvjs && flvjs.isSupported() ? flvjs.isSupported() : false,
              "addressTypes": "HLS,RTMP,WS,FLV",
              "isHttp": window.location.protocol.indexOf('s') > 0 ? false : true,
            };

            dclog({
              "ezopen": that.opt.currentSource,
              "userAgent": window.navigator.userAgent,
              "isFlv": flvjs && flvjs.isSupported() ? flvjs.isSupported() : false,
              "addressTypes": "HLS,RTMP,WS,FLV",
              "isHttp": window.location.protocol.indexOf('s') > 0 ? false : true,
              'systemName': 'EZOPEN',
            });

            that.log('---------------------------------------');
            that.log('入参(ezopen)是：   ' + para.ezopen);
            that.log('---------------------------------------');
            that.log('入参(userAgent)是：   ' + para.userAgent);
            that.log('---------------------------------------');
            that.log('入参(isFlv)是：   ' + para.isFlv);
            that.log('---------------------------------------');
            that.log('入参(addressTypes)是：   ' + para.addressTypes);
            that.log('---------------------------------------');
            that.log('入参(isHttp)是：   ' + para.isHttp);
            that.log('---------------------------------------');

            var apiUrl = apiDomain + "/api/lapp/live/url/ezopen";
            var apiSuccess = function (data) {
              if (data.code == 200) {
                that.log('播放地址是：   ' + data.data);
                that.video.src = data.data;
                that.video.load();
                that.tryPlay(data.data);
              } else {
                that.log('data：   ' + JSON.stringify(data));
                throw new Error(data.msg);
                return;
              }
            }
            var apiError = function (error) {
              console.log("getdecoder url from api error", error);
            }
            request(apiUrl, 'POST', para, '', apiSuccess, apiError);
          });
        } /* 获取播放地址 - 结束 */
      }
    }
    // 格式化回放时间
    function formatRecTime(time, defaultTime) {
      // 用户格式 无需更改 => 20182626T000000Z
      // return time
      // 用户格式需要更改
      //用户时间长度为 14 20181226000000  =》 20181226000000
      // 用户长度为12     201812260000    =》 201812260000 + defaultTime后面2位
      // 用户长度为10     2018122600      =》 201812260000 + defaultTime后面4位
      // 用户长度为8     20181226         =》 201812260000 + defaultTime后面6位
      // 结果 20181226000000 14位
      // 插入 TZ
      var reg = /^[0-9]{8}T[0-9]{6}Z$/;
      if (reg.test(time)) { // 用户格式 无需更改 => 20182626T000000Z
        return time;
      } else if (/[0-9]{8,14}/.test(time)) {
        var start = 6 - (14 - time.length);
        var end = defaultTime.length;
        var standardTime = time + defaultTime.substring(start, end);
        return standardTime.slice(0, 8) + 'T' + standardTime.slice(8) + 'Z';
      } else {
        throw new Error('回放时间格式有误，请确认');
      }
    }
  };

  // 尝试播放
  EZUIPlayer.prototype.tryPlay = function (playParams) {
    this.log("开始尝试播放，播放配置参数为：");
    this.log(playParams);
    var _this = this;
    // JSDecoder 播放
    if (playParams && typeof playParams === 'object' && playParams.decoderPath) {
      /** 初始化Decoder */
      // this.initDecoder(playParams);
      // 自动播放
      // if(playParams.autoplay){
      //   console.log('配置了自动播放');
      //   setTimeout(function(){
      //     _this.play();
      //   },2000)   
      // }
    } else {
      this.opt.currentSource = playParams;
      var me = this;
      // 如果是HLS地址
      if (/\.m3u8/.test(playParams)) {
        // 如果是手机浏览器环境,或者原生支持HLS播放的,直接使用video标签播放
        // 否则尝试使用hls.js播放，
        // 最后使用flash
        if (isMobile || isNativeSupportHls) {
          this.log('使用原生video');
          this.video.style.heght = this.opt.height = Number(this.opt.width.replace(/px$/g, '')) * 9 / 16 + 'px';
          this.initVideoEvent();
        } else {
          var isPlayUrlHttps = playParams.indexOf('https') !== -1;
          if (isHttps && !isPlayUrlHttps) { //https网站，http视频源安全问题需要flash播放
            addJs(ckplayerJS, function () {
              me.initCKPlayer();
            });
          } else {
            addJs(hlsJS, function () {
              isSupportHls = Hls.isSupported();
              if (isSupportHls) {
                me.log('使用hls.js');
                me.initHLS(playParams);
              } else {
                useFlash = true;
                me.log('2 使用flash');
                addJs(ckplayerJS, function () {
                  me.initCKPlayer();
                });
              }
            });
          }
        }
      } else if (/^rtmp:/.test(playParams)) {
        if (isMobile) {
          this.opt.cur++;
          this.tryPlay(playParams);
          return;
        } else {
          addJs(ckplayerJS, function () {
            me.initCKPlayer(playParams);
          });
        }
      } else if (/^wss:|^ws:/.test(playParams)) {
        /*
        *   WS协议的JSMpeg的不支持IE11以下的版本
        *   开放平台官网不支持IE8打开，所以官网上面不兼容两个人版本IE9 ，和IE10
        *
        * */
        if (!ltIE11()) {
          addJs(mpegJS, function () {
            me.initJSmpeg(playParams);
          });
        } else {
          alert('WS协议不支持Ie11以下的浏览器！请使用IE11，或者更高版本的浏览器');
          return;
        }
      } else if (/\.flv/.test(this.opt.currentSource)) {
        addJs(flv_js, function () {
          me.log("使用flv.js播放");
          me.initflv();
        });
      }
    }
  };

  // 初始化hls.js
  EZUIPlayer.prototype.initHLS = function (hlsURL) {
    var me = this;
    var hls = new Hls({ defaultAudioCodec: 'mp4a.40.2' }); // 萤石设备默认使用 AAC LC 音频编码
    hls.loadSource(hlsURL);
    hls.attachMedia(this.video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      if (me.opt.autoplay) {
        me.video.play();
      }
      me.initVideoEvent();
    });
    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        switch (data.type) {
          case Hls.ErrorTypes.NETWORK_ERROR:
            // try to recover network error
            console.log("fatal network error encountered, try to recover");
            hls.startLoad();
            break;
          case Hls.ErrorTypes.MEDIA_ERROR:
            console.log("fatal media error encountered, try to recover");
            hls.recoverMediaError();
            break;
          default:
            // cannot recover
            hls.destroy();
            break;
        }
      }
    });

    this.hls = hls;
  };


  // 初始化ckplayer
  EZUIPlayer.prototype.initCKPlayer = function (url) {
    this.log('ckplayer初始化');
    var me = this;
    var events = {
      'play': function () { me.emit('play') },
      'pause': function () { me.emit('pause') },
      'error': function () { me.emit('error') }
    };
    window.ckplayer_status = function () {
      me.log(arguments);
      events[arguments[0]] && events[arguments[0]]();
    };

    // 新增相同id的div标签，然后删除video标签
    this.videoFlash = document.createElement('DIV');
    this.video.parentNode.replaceChild(this.videoFlash, this.video);
    this.video = this.videoFlash;
    this.videoFlash.id = this.opt.parentId;
    var flashvars = null;
    // 如果rtmp服务器环境设置了视频暂停则断开链接
    // 需要修改ckplayer.js  setup参数第30个值
    // 在播放暂停后点击播放是否采用重新链接的方式
    if (/^rtmp/.test(this.opt.currentSource)) {
      flashvars = {
        f: this.opt.currentSource,
        c: 0,
        p: this.opt.autoplay ? 1 : 0,
        i: this.opt.poster,
        lv: 1,
        loaded: 'loadHandler'
      };
    } else if (/\.m3u8/.test(this.opt.currentSource)) {
      flashvars = {
        s: 4,  // 4-使用swf视频流插件播放
        f: m3u8SWF,
        a: this.opt.currentSource,
        c: 0,  // 0-使用ckplayer.js的配置 1-使用ckplayer.xml的配置
        lv: 1, // 1-直播 0-普通方式
        p: this.opt.autoplay ? 1 : 0,   // 1-默认播放 0-默认暂停
        i: this.opt.poster,
        loaded: 'loadHandler'
      };
    } else {
      flashvars = {
        f: this.opt.currentSource,
        c: 0,
        p: 1,
        loaded: 'loadHandler'
      };
    }
    var params = { bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent' };
    this.flashId = this.opt.parentId + 'flashId';
    window.CKobject.embedSWF(ckplayerSWF, this.opt.parentId, this.flashId, this.opt.width, this.opt.height, flashvars, params);
  };

  EZUIPlayer.prototype.initVideoEvent = function () {
    var me = this;
    var EVENT = {
      'loadstart': function (e) {
        me.log('loadstart...当浏览器开始查找音频/视频时...');
        me.emit('loadstart', e);
      },
      'durationchange': function (e) {
        me.log('durationchange...当音频/视频的时长已更改时...');
        me.emit('durationchange', e);
      },
      'loadedmetadata': function (e) {
        me.log('loadedmetadata...当浏览器已加载音频/视频的元数据时...');
        me.emit('loadedmetadata', e);
      },
      'loadeddata': function (e) {
        me.log('loadeddata...当浏览器已加载音频/视频的当前帧时...');
        me.emit('loadeddata', e);
      },
      'progress': function (e) {
        me.log('progress...当浏览器正在下载音频/视频时...');
        me.emit('progress', e);
      },
      'canplay': function (e) {
        me.log('canplay...当浏览器可以播放音频/视频时...');
        me.emit('canplay', e);
      },
      'canplaythrough': function (e) {
        me.log('canplaythrough...当浏览器可在不因缓冲而停顿的情况下进行播放时...');
        me.emit('canplaythrough', e);
      },
      'abort': function (e) {
        me.log('abort...当音频/视频的加载已放弃时...');
        me.emit('abort', e);
      },
      'emptied': function (e) {
        me.log('emptied...当目前的播放列表为空时...');
        me.emit('emptied', e);
      },
      'ended': function (e) {
        me.log('ended...当目前的播放列表已结束时...');
        me.emit('ended', e);
      },
      'pause': function (e) {
        me.log('pause...当音频/视频已暂停时...');
        me.emit('pause', e);
      },
      'play': function (e) {
        me.log('play...当音频/视频已开始或不再暂停时...');
        me.emit('play', e);
      },
      'playing': function (e) {
        me.log('playing...当音频/视频在已因缓冲而暂停或停止后已就绪时...');
        me.emit('playing', e);
      },
      'ratechange': function (e) {
        me.log('ratechange...当音频/视频的播放速度已更改时...');
        me.emit('ratechange', e);
      },
      'seeked': function (e) {
        me.log('seeked...当用户已移动/跳跃到音频/视频中的新位置时...');
        me.emit('seeked', e);
      },
      'seeking': function (e) {
        me.log('seeking...当用户开始移动/跳跃到音频/视频中的新位置时...');
        me.emit('seeking', e);
      },
      'stalled': function (e) {
        me.log('stalled...当浏览器尝试获取媒体数据，但数据不可用时...');
        me.emit('stalled', e);
      },
      'suspend': function (e) {
        me.log('suspend...当浏览器刻意不获取媒体数据时...');
        me.emit('suspend', e);
        if (me.opt.autoplay) {
          me.video.play();
        }
      },
      'timeupdate': function (e) {
        //me.log('timeupdate...当目前的播放位置已更改时...');
        me.emit('timeupdate', e);
      },
      'volumechange': function (e) {
        me.log('volumechange...当音量已更改时...');
        me.emit('volumechange', e);
      },
      'waiting': function (e) {
        me.log('waiting...当视频由于需要缓冲下一帧而停止...');
        me.emit('waiting', e);
      },
      'error': function (e) {
        me.log('error...当在音频/视频加载期间发生错误时...');
        me.emit('error', e);
      }

    };
    for (var i in EVENT) {
      this.video.addEventListener(i, EVENT[i], false);
    }

    ios11Hack(this.video);

  };

  EZUIPlayer.prototype.initJSmpeg = function (jsmpegUrl) {
    this.canvasEle = document.createElement('canvas');
    this.canvasEle.style.width = this.opt.width;
    this.canvasEle.style.height = this.opt.height;
    this.video.parentNode.replaceChild(this.canvasEle, this.video);
    this.canvasEle.id = this.opt.parentId;
    var player;
    if (player && player.destroy) {
      player.destroy();
    }
    player = new JSMpeg.Player(jsmpegUrl, { canvas: this.canvasEle });
    this.JSmpeg = player;
  };

  EZUIPlayer.prototype.initflv = function () {
    if (flvjs.isSupported()) {
      var player = this.video;
      var hasControls = player.getAttribute('controls');
      if (!hasControls) {
        player.setAttribute('controls', true);
      }
      var flvPlayer = flvjs.createPlayer({
        type: 'flv',
        url: this.opt.currentSource,
        isLive: true,
      }, {
          enableStashBuffer: true,
          stashInitialSize: 128,
          enableWorker: true
        });

      flvPlayer.attachMediaElement(player);
      flvPlayer.load();
      flvPlayer.play();
    } else {
      this.log("浏览器不支持flv播放");
      throw new Error('浏览器不支持flv播放');
      return;
    }
    this.flv = flvPlayer;
  };


  EZUIPlayer.prototype.play = function (params) {
    //var index = params.index;
   
    if (!!window['CKobject']) {
      this.opt.autoplay = true;
      this.initCKPlayer();
    } else if (!!this.video) { // video播放 包含flv, hls
      if (!!this.hls) { // hls开始播放依赖 this.hls
        this.opt.autoplay = true;
        this.hls.startLoad();
        this.video.play();
      } else if (!!this.JSmpeg) {
        this.JSmpeg.play();
      } else {       // 其他开始播放使用原生video
        this.opt.autoplay = true;
        this.video.play();
      }
    } else if (!!this.jSPlugin) {
      var _this = this;
      function getPlayParams(url) {
        var websocketConnectUrl = url.split('?')[0].replace('/live', '').replace('/playback', '');
        var websocketStreamingParam = (url.indexOf('/live') === -1 ? '/playback?' : '/live?') + url.split('?')[1];
        return { websocketConnectUrl: websocketConnectUrl, websocketStreamingParam: websocketStreamingParam }
      }
      if (!params || typeof params.index === 'undefined') {
        _this.opt.sources.forEach(function (item, index) {
          _this.log("开始播放, 第" + (index+1)+ '路，' + '地址：' + item);
          // 设置秘钥 - 如果地址中包含秘钥参数，播放前配置到JSPlugin对应实例中
          var validateCode = getQueryString('checkCode', item);
          if (validateCode) {
            _this.log('设置秘钥，视频路数：' + (index + 1) + '验证码：' + validateCode)
            _this.jSPlugin.JS_SetSecretKey(index, validateCode);
          }
          _this.jSPlugin.JS_Play(getPlayParams(item).websocketConnectUrl, { playURL: getPlayParams(item).websocketStreamingParam }, index).then(function () {
            _this.log('播放成功，当前播放第' + (index + 1) + '路');
            // 默认开启声音
            // 默认开启第一路声音
            if (index === 0) {
              _this.log("默认开启第1路声音");
              setTimeout(function(){
                _this.jSPlugin.JS_OpenSound(0);
              }, 100)
            }
            // 播放成功回调
            if (params && params.handleSuccess) {
              params.handleSuccess();
            }
            // 播放成功日志上报
            dclog({
              systemName: PLAY_MAIN,
              playurl: encodeURIComponent(item),
              Time: (new Date()).Format('yyyy-MM-dd hh:mm:ss.S'),
              Enc: 0,  // 0 不加密 1 加密
              PlTp: 1,  // 1 直播 2 回放
              Via: 2,  // 2 服务端取流
              ErrCd: 0,
              Cost: (new Date()).getTime() - _this.initTime,  // 毫秒数
              Serial: getQueryString('dev',item),
              Channel: getQueryString('chn',item),
            });
          }, function (err) {
            _this.log('播放失败' + JSON.stringify(err), 'error');
            dclog({
              systemName: PLAY_MAIN,
              playurl: encodeURIComponent(item),
              cost: -1,
              ErrCd: -1,
              Serial: getQueryString('dev',item),
              Channel: getQueryString('chn',item),
            });
            if (params && params.handleError) {
              var errorInfo = JSON.parse(_this.errorCode).find(function (item) { return item.detailCode.substr(-4) == err.oError.errorCode })
              params.handleError({ retcode: err.oError.errorCode, msg: errorInfo ? errorInfo.description : '其他错误' });
            }
          })
        })
      } else {
        params.index.forEach(function (item, index) {
          _this.jSPlugin.JS_Play(getPlayParams(_this.opt.sources[item]).websocketConnectUrl, { playURL: getPlayParams(_this.opt.sources[item]).websocketStreamingParam }, item).then(function () {
            _this.log('播放成功，当前播放第' + (index + 1) + '路')
            // 默认开启第一路声音
            if (index === 0) {
              _this.log("默认开启第一路声音");
              setTimeout(function(){
                _this.jSPlugin.JS_OpenSound(0);
              }, 100)
            }
            if (params && params.handleSuccess) {
              params.handleSuccess();
            }
          }, function (err) {
            _this.log('播放失败' + JSON.stringify(err), 'error');
            if (params && params.handleError) {
              var errInfo = err.oError;// 包装错误码
              params.handleError(errInfo);
            }
          })
        })
      }
    }

  };
  EZUIPlayer.prototype.initDecoder = function (playParams) {
    this.opt.id = playParams.id;
    this.log("初始化解码器---开始");
    var _this = this;
    // DOM id
    function initDecoder(resolve, reject) {
      var jsPluginPath = playParams.decoderPath + '/js/jsPlugin-1.2.0_test.js';

      /** 初始化解码器 */
      addJs(jsPluginPath, function () {
        _this.log("下载解码器完成，开始初始化");
        /* decoder 属性配置 */
        _this.jSPlugin = new JSPlugin({
          szId: playParams.id,
          iType: 1,
          iWidth: playParams.width || 600,
          iHeight: playParams.height || 400,
          iMaxSplit: Math.ceil(Math.sqrt(playParams.url.split(",").length)),
          iCurrentSplit: playParams.splitBasis || Math.ceil(Math.sqrt(playParams.url.split(",").length)),
          szBasePath: playParams.decoderPath + '/js',
        });
        // 注册全屏事件
        window.onresize = function () {
          _this.jSPlugin.JS_Resize(playParams.width || 600, playParams.height || 400);
        }
        _this.log("初始化解码器----完成");
        resolve('200 OK')
      });
      /** 
       * 加载错误码
       * 错误码维护平台 - omm管理系统
       */
      function success(data) {
        if (data.code == 200) {
          if (!window.localStorage) {
            return false;
          } else {
            var storage = window.localStorage;
            //写入a字段
            storage["errorCode"] = JSON.stringify(data.data);
            _this.errorCode = storage['errorCode'];
          }
        }
      }
      if (!window.localStorage) {
        request(
          playParams.decoderPath + "/js/errorCode.json",
          "get",
          {
            language: 1,
            time: new Date().getTime(),
            appKey: '26810f3acd794862b608b6cfbc32a6b8',
          },
          '',
          success
        );
      } else {
        var storage = window.localStorage;
        var errorCode = storage.errorCode;
        if (!errorCode) {
          request(
            playParams.decoderPath + "/js/errorCode.json",
            "get",
            {
              language: 1,
              time: new Date().getTime(),
              appKey: '26810f3acd794862b608b6cfbc32a6b8',
            },
            '',
            success
          );
        } else {
          _this.errorCode = storage['errorCode'];
        }
      }


    }
    var initDecoderPromise = new Promise(initDecoder);

    return initDecoderPromise;
  }
  EZUIPlayer.prototype.stop = function (i) {
    // 执行停止
    this.log("停止播放" + this.opt.currentSource);
    this.opt.autoplay = false;
    if (!!window['CKobject']) {
      //CKobject.getObjectById(this.flashId).destroy();
      this.video.src = ""
      // this.video.remove();
    } else if (!!this.video) {
      if (!!this.hls) {   // hls停止依赖this.hls
        // 通过暂停停止播放
        this.video.pause();
        this.video.src = ""
        // 停止取流
        this.hls.stopLoad();
      } else if (!!this.flv) {
        this.flv.pause();
        this.flv.unload();
        this.flv.detachMediaElement();
        this.flv.destroy();
        this.flv = null;
      } else if (!!this.JSmpeg) {
        this.JSmpeg.stop();
        // this.JSmpeg.destroy();
      }
    } else if (!!this.jSPlugin) {
      var _this = this;
      if (typeof i === "undefined") {
        var length = this.opt.sources.length;
        for (index = 0; index < length; index++) {
          this.jSPlugin.JS_Stop(index).then(function () {
            _this.log("停止播放成功" + _this.opt.currentSource);
            console.log("stop success");
          }, function () {
            _this.log("停止播放失败" + _this.opt.currentSource);
            console.log("stop failed");
          });
          // 额外销毁worker
          //this.jSPlugin.JS_DestroyWorker();
          removeChild(index);
        }
      } else {
        this.jSPlugin.JS_Stop(i).then(function () {
          _this.log("停止播放成功" + _this.opt.currentSource);
          console.log("stop success");
        }, function () {
          _this.log("停止播放失败" + _this.opt.currentSource);
          console.log("stop failed");
        });
        // 额外销毁worker
        //this.jSPlugin.JS_DestroyWorker();
        removeChild(i);
      }
      function removeChild(index) {
        var windDOM = document.getElementById(_this.opt.id).childNodes[0].childNodes[index];
        var childs = windDOM.childNodes;
        for (var i = childs.length - 1; i >= 0; i--) {
          windDOM.removeChild(childs[i]);
        }
      }
    }
  };
  // 获取OSD时间
  EZUIPlayer.prototype.getOSDTime = function (callback, iWind) {
    if (!!this.jSPlugin) {
      this.jSPlugin.JS_GetOSDTime(iWind || 0).then(function (iTime) {
        callback(iTime * 1000);
      }, function (err) {
        console.log("get OSD Time error", err);
      });
    } else {
      throw new Error("Method  not support");
    }
  }
  // 开启声音
  EZUIPlayer.prototype.openSound = function (iWind) {
    if (!!this.jSPlugin) {
      this.jSPlugin.JS_OpenSound(iWind || 0)
    } else {
      throw new Error("Method  not support");
    }
  }
  // 视频截图
  EZUIPlayer.prototype.capturePicture = function (iWind, pictureName) {
    if (!!this.jSPlugin) {
      this.jSPlugin.JS_CapturePicture(iWind, pictureName)
    } else {
      throw new Error("Method  not support");
    }
  }
  // 开始录像
  EZUIPlayer.prototype.startSave = function (iWind, fileName) {
    if (!!this.jSPlugin) {
      this.log("开始录制录像");
      this.jSPlugin.JS_StartSave(iWind, fileName)
    } else {
      throw new Error("Method  not support");
    }
  }
  // 结束录像
  EZUIPlayer.prototype.stopSave = function (iWind) {
    if (!!this.jSPlugin) {
      this.jSPlugin.JS_StopSave(iWind);
      this.log("结束录制录像");
    } else {
      throw new Error("Method  not support");
    }
  }
  EZUIPlayer.prototype.pause = function () {
    this.opt.autoplay = false;
    if (!!window['CKobject']) {
      CKobject.getObjectById(this.flashId).videoPause();
    } else if (!!this.video) {
      if (!!this.JSmpeg) {
        this.JSmpeg.pause();
      } else {
        this.video.pause();
      }
    } else if (!!this.jSPlugin) {
      this.jSPlugin.JS_Pause(0).then(function () {
      }, function () {
      });
    }
  };

  EZUIPlayer.prototype.load = function () {
    if (!!window['CKobject']) {
      // flash load
    } else if (!!this.video) {
      this.video.load();
    }
  };


  // iOS11手机HLS直播在m3u8响应时间过长后不继续请求的hack
  function ios11Hack(video) {
    var isloadeddata = false;
    var isPlaying = false;
    var stalledCount = 0;
    video.addEventListener('loadeddata', function () {
      isloadeddata = true;
    }, false);
    video.addEventListener('stalled', function () {
      stalledCount++;
      if (!isPlaying) {
        if (stalledCount >= 2 && !isloadeddata) {
          video.load();
          video.play();
          isloadeddata = false;
          isPlaying = false;
          stalledCount = 0;
        }
      }
    }, false);
    video.addEventListener('playing', function () {
      isPlaying = true;
    });
  }

  function ltIE11() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    if (isIE) {
      return true;
    } else {
      return false;
    }
  }

  // 判断浏览器终端类型
  function browserTerminal() {
    var u = window.navigator.userAgent;
    var browserClass = {
      trident: u.indexOf('Trident') > -1, //IE内核
      presto: u.indexOf('Presto') > -1, //opera内核
      webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') === -1, //火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
      iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, //是否iPad
      webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
      weixin: u.indexOf('MicroMessenger') > -1, //是否微信
      qq: u.match(/\sQQ/i) == " qq", //是否QQ
      ie: u.indexOf('Trident') > -1 || u.indexOf('MSIE') > -1 || u.indexOf('compatible') > -1,
    };
    return browserClass;
  }


  //公共方法
  var Util = {
    //初始化
    init: function () {
      navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia;

      window.AudioContext = window.AudioContext ||
        window.webkitAudioContext;
    },
    //日志
    log: function (str) {
      console.log.apply(console, arguments);
    }
  };


  var EZUITalk = function (bizParams) {
    if (bizParams && typeof bizParams !== 'object') {
      throw new Error("EZUITalk requires parameter it doesn't right");
      return;
    }
    var audioId = bizParams.id;
    var Token = bizParams.token;
    var uuid = bizParams.uuid;
    if (typeof audioId !== 'string' || typeof audioId === 'undefined') {
      throw new Error('EZUITalk requires parameter audioId');
      return;
    }
    this.audio = document.getElementById(audioId);
    if (!this.audio) {
      throw new Error('EZUITalk requires parameter audioElement');
      return;
    }
    if (!Token) {
      throw new Error('EZUITalk requires parameter accessToken');
      return
    }
    if (!uuid) {
      throw new Error('EZUITalk requires parameter uuid');
      return;
    }
    Util.init();
    if (!navigator.getUserMedia) {
      throw new Error('当前浏览器不支持录音功能');
      return;
    }
    var browserC = browserTerminal();
    if (!browserC.mobile) {
      throw new Error('对讲功能仅在手机中支持进行对讲');
      return;
    }

    // 事件存储
    this.handlers = {};
    var _this = this;
    this.BUFFER = [];
    this.encoder = undefined;


    this.isEnded = true;
    this.LENGTH = 20;
    this.audio.addEventListener('ended', function () {
      _this.isEnded = true;
    });

    // 对讲的播放功能
    this.audioPlay = function () {
      if (this.isEnded) {
        this.isEnded = false;
        if (this.BUFFER.length > this.LENGTH) {
          this.BUFFER = this.BUFFER.slice(0, this.LENGTH)
        }
        this.encoder = new WavAudioEncoder(16000, 1);
        var buf = this.BUFFER.shift();
        while (buf) {
          this.encoder.encode(buf);
          buf = this.BUFFER.shift();
        }
        this.audio.src = URL.createObjectURL(this.encoder.finish());
      }
    };

    // 按钮触发对讲功能
    this.start = function () {
      this.wsUrl = 'wss://test2.ys7.com:20007/opentalk/' + uuid;
      this.socket = new WebSocket(this.wsUrl);
      this.talk();
    };

    this.talk = function () {
      addJs(wav, function () {
        _this.socket.onopen = function () {
          _this.log('websocket已连接');
          var sendData = {
            'accessToken': Token,
            'uuid': uuid,
          };
          var messageJson = JSON.stringify(sendData);
          _this.socket.send(messageJson);
          _this.log('websocket 发送文本数据');
          _this.startRecord();
        };
        _this.socket.onclose = function () {
          _this.log('websocket已关闭');
        };
        _this.socket.onerror = function (e) {
          _this.log('websocket出错->' + JSON.stringify(e));
        };
        _this.socket.onmessage = function (e) {
          _this.log('websocket 接收数据');
          _this.BUFFER.push(e.data);
          _this.audioPlay();
        };

        _this.audio.setAttribute('autoplay', true);
        _this.audio.play();

      });
    };

    // 对讲中的说话功能
    this.startRecord = function () {
      navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function (stream) {
          var context = new AudioContext(),
            microphone = context.createMediaStreamSource(stream), //媒体流音频源
            processor = context.createScriptProcessor(16384, 1, 1); //js音频处理器

          _this.log('当前浏览器采样率为： ' + context.sampleRate);

          processor.onaudioprocess = function (event) {
            //监听音频录制过程
            var array = event.inputBuffer.getChannelData(0);
            // _this.log('监听声音录制');
            realTimeWorker.postMessage({ cmd: 'encode', buf: array });
          };

          var realTimeWorker = new Worker('../js/worker.js'); //开启后台线程

          realTimeWorker.onmessage = function (e) {
            //主线程监听后台线程，实时通信
            switch (e.data.cmd) {
              case 'pcm':
                _this.socket.send(e.data.buf);
                console.log(e.data.buf);
                _this.log('websocket 发送数据');
                break;
              default:
                _this.log('未知信息：' + e.data);
            }
          };

          //开始对讲
          if (processor && microphone) {
            microphone.connect(processor);
            processor.connect(context.destination);
          }
          _this.log('开始对讲');

          //结束对讲
          _this.stop = function () {
            if (processor && microphone) {
              microphone.disconnect();
              processor.disconnect();
            }
            _this.socket.close();
            _this.log('结束对讲');
          };

        }).catch(function (error) {
          var msg;
          switch (error.code || error.name) {
            case 'PermissionDeniedError':
            case 'PERMISSION_DENIED':
            case 'NotAllowedError':
              msg = '用户拒绝访问麦克风';
              break;
            case 'NOT_SUPPORTED_ERROR':
            case 'NotSupportedError':
              msg = '浏览器不支持麦克风';
              break;
            case 'MANDATORY_UNSATISFIED_ERROR':
            case 'MandatoryUnsatisfiedError':
              msg = '找不到麦克风设备';
              break;
            default:
              msg = '无法打开麦克风，异常信息:' + (error.code || error.name);
              break;
          }
          _this.log(msg);
          alert(msg);
        })
    }
  };

  // 事件监听
  EZUITalk.prototype.on = function (eventName, callback) {
    if (typeof eventName !== 'string' || typeof callback !== 'function') {
      return;
    }
    if (typeof this.handlers[eventName] === 'undefined') {
      this.handlers[eventName] = [];
    }
    this.handlers[eventName].push(callback);
  };

  // 事件触发
  EZUITalk.prototype.emit = function () {
    if (this.handlers[arguments[0]] instanceof Array) {
      var handlers = this.handlers[arguments[0]];
      var l = handlers.length;
      for (var i = 0; i < l; i++) {
        handlers[i].apply(this, Array.prototype.slice.call(arguments, 1));
      }
    }
  };

  EZUITalk.prototype.log = function (msg) {
    this.emit('log', msg);
  };

  var EZUIKit = {
    'EZUIPlayer': EZUIPlayer,
    'EZUITalk': EZUITalk,
  };
  // 兼容1.4 以下旧版本
  // var EZUIPlayer = EZuikit.EZUIPlayer;

  if (!noGlobal) {
    window.EZUIKit = EZUIKit;
    // 兼容1.4 以下旧版本
    window.EZUIPlayer = EZUIPlayer;
  }
  return EZUIKit;
});
