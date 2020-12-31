/**
 * ezuikit-talk v0.0.1-beta
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
  var EZUITalk = function (params) {
    console.log("params",params);
    // this.opt = {
    //   apiDomain: 'https://test12open.ys7.com/api/lapp/live/talk/url'
    // }
    this.opt = {
      apiDomain: 'https://open.ys7.com/api/lapp/live/talk/url',
      filePath: '',
      accessToken: undefined,
      deviceSerial: undefined,
      channelNo: undefined,
      talkLink: '',
      rtcUrl: '',
      ttsUrl: '',
      stream: '',
    }
    if(params.accessToken){
      this.opt.accessToken = params.accessToken;
    }
    if(params.url){
      this.opt.deviceSerial = params.url.split("/")[3];
      this.opt.channelNo = params.url.split("/")[4].split(".")[0];
    }
    if(params.filePath){
      this.opt.filePath = params.filePath;
    }
    var _this = this;
    function apiSuccess(data){
      console.log("data",data);
      if(data.code == 200){
        var apiResult = data.data;
        if(apiResult){
          // 临时将https转换为websocket
          var rtcTrunk = apiResult.rtcUrl;
          if(rtcTrunk.indexOf("ws") === -1){
            rtcTrunk = rtcTrunk.replace("https","wss").replace("rtcgw","rtcgw-ws"); 
          }
          _this.opt.rtcUrl = rtcTrunk;
          _this.opt.ttsUrl = "tts://" + apiResult.ttsUrl;
          var talk = "talk://" + _this.opt.deviceSerial + ":0:" + _this.opt.channelNo + ":cas.ys7.com:6500";
          _this.opt.talkLink = _this.opt.ttsUrl + "/" + talk;
          _this.opt.stream = apiResult.stream;
          console.log("_this.opt",_this.opt)
          // 加载依赖
          // this.init();
          var adapeterJS =  _this.opt.filePath +  '/adapeter.js';
          var janusJS =  _this.opt.filePath +  '/janus.js';
          var ttsJS =  _this.opt.filePath +  '/tts.js';
            console.log("加载jquery.js");
            addJs(adapeterJS,function(){
              console.log("加载adapeter.js");
              addJs(janusJS,function(){
                console.log("加载janus.js");
                addJs(ttsJS,function(){
                  console.log("加载tts.js");
                  // 文件加载完毕;
  
                })
              })
            })
        }
        
      }
    }
    function apiError(err){
      if(params.handleError){
        params.handleError(err);
      }

    }
    request(
      this.opt.apiDomain,
      'POST',
      {
        accessToken: this.opt.accessToken,
        deviceSerial: this.opt.deviceSerial,
        channelNo: this.opt.channelNo
      }, 
      '',
       apiSuccess, 
       apiError
    );

    console.log("this.opt",this.opt)
  }
  // EZUITalk.prototype.init = function () {
  //   console.log();

  //   $.ajax({
  //     type: 'POST',
  //     url: 'https://test12open.ys7.com/api/lapp/live/talk/url',
  //     // contentType: "application/json;charset=utf-8",
  //     dataType: 'json',
  //     data: {
  //       accessToken: accessToken,
  //       deviceSerial: serial,
  //       channelNo: channelNo,
  //     },
  //     success: function (data) {
  //       log("对讲api调用成功" + JSON.stringify(data));
  //       if (data.code == 200) {
  //         var result = data.data;
  //         ttsUrl = result.ttsUrl,
  //           rtcUrl = "wss://test12.ys7.com/rtcgw-ws", //result.ttsUrl
  //           stream = result.stream;
  //         $('#tts_url').attr("value", matchTalkLink);
  //         $("#start").attr('disabled', false);
  //       } else {
  //       }
  //     },
  //     error: function (err) {
  //     },
  //   })
  // }

  // this.prototype.init = function(){
  //   var adapeterJS =  this.opt.filepath +  '/js/adapeter.js';
  //   addJs(adapeterJS,function(){
  //     console.log("加载adapeter.js")
  //   })
  // }
  EZUITalk.prototype.startTalk = function(){
    var _this = this;
    var apiSuccess = function(data) {
      if (data.code == 200) {
        var apiResult = data.data;
        if (apiResult) {
          // 临时将https转换为websocket
          _this.opt.stream = apiResult.stream;
          window.startTalk();
        }
      }
    }
    var apiError = function() {
      layer.msg("获取对讲token失败")
    }
    request(_this.opt.apiDomain, 'POST', {
      accessToken: _this.opt.accessToken,
      deviceSerial: _this.opt.deviceSerial,
      channelNo: _this.opt.channelNo
    }, '', apiSuccess, apiError);
  }
  EZUITalk.prototype.stopTalk = function(){
    window.stopTalk();
  }
  if (!noGlobal) {
    window.EZUITalk = EZUITalk;
  }
  return EZUITalk;
})