# 该仓库已停止维护，请升级到[EZUIKit-JavaScript-npm](https://github.com/Ezviz-OpenBiz/EZUIKit-JavaScript-npm)
# UIKit JavaScript使用文档
- [简介](#intro)
- [获取UIKit JavaScript](#get)
- [示例](#demo)
- [直播](#live)
- [预览、回放](#back)
- [播放地址获取及EZOPEN协议说明](#ezopen)

## <a name="intro"> 一、简介</a>
UIKit，是基于萤石开放平台OpenSDK封装的UI组件，使用过程中不必学习专业的业务概念，更不用调用繁琐的接口，能够以极简的嵌入方式，快速在您的应用中集成视频功能。

UIKit JavaScript是用于WEB端，移动H5端的JavaScript插件，使用UIKit JavaScript，您可以：
- 轻松实现视频直播功能，包含HLS，RTMP，FLV，WS格式流媒体实时播放。
- 轻松实现Web端预览，回放功能。
## <a name="get">二、获取UIKit JavaScript</a>
### 1.下载
最新版

`git clone   https://github.com/Hikvision-Ezviz/EZUIKit-JavaScript.git`

旧版本下载

> 请前往开放平台官网下载


### 2.引入
  **本地引入**

  `<script src="{{location path}}/ezuikit.js">/ezuikit.js</script>`

  **页面引入**

  `<script src="https://open.ys7.com/sdk/js/1.4/ezuikit.js"></script>`

   >*ps : 页面引入方式适用直播场景，预览和回放功能实现原理为本地解码，需要本地引入的方式加载本地解码库*
## <a name="demo">三、示例</a>
>环境准备：需确认本地80端口未被占用
- 运行webs.exe
- 浏览器输入http://localhost/index.html 即可体验
>注意：开发时需将包放到服务器上，不支持引用。
## <a name="live">四、直播</a>
  1.页面创建video标签

  ```
  <video
    id="myplayer"
    src="ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.live"
    width="400"
    height="300"
    poster="[这里可以填入封面图片URL]"
    [autoplay]
    controls
    playsInline
    webkit-playsinline
  >
  </video>
  ```
  **配置说明：**

  属性名|示例|默认值|说明
  ---|:--:|---|---:
  id| myPlayer| null|*必填，video标签id
  src | ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.live |null| 直播地址<br>支持ezopen协议格式（推荐）<br>支持HLS，RTMP，FLV，m3u8等任意格式直播地址
  autoplay|true|false|是否自动播放
  poster|图片url|null|封面图片地址|
  width|400|null|视频元素宽度
  height|400|null|视频元素高度


  2.初始化
  ```
  <script>
    var player = new EZUIPlayer('myPlayer');
  </script>
  ```
  3.方法集
  - 直播播放

    `player.play()`
  - 直播停止

    `player.stop()`

## <a name="back">五、预览，回放</a>

  1.页面创建div标签
  ```
    <div id="myPlayer"></div>

  ```
  2.初始化
  ```
   var player = new EZUIPlayer({
        id: 'myPlayer',
        url: url,
        autoplay: true,
        accessToken: "at.8o2k6dbpcvtr13reaa96hbnya6fee2wf-9gu6zcjmh2-1j4yrsb-imvlc5poc",
        decoderPath: '{{location path}}',
        width: 600,
        height: 400,
      });
  ```

  **配置说明：**
  
  属性名|示例|默认值|说明
  ---|:--:|---|---:
  id| myPlayer| null|*必填，元素标签id
  url | ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.live |null| 直播地址<br>支持ezopen协议格式（推荐）<br>支持ws, wss格式预览地址播放<br>多窗口模式请用英文逗号（,）分隔
  accessToken|"at.8o2k6dbpcvtr13reaa96hbnya6fee2wf-9gu6zcjmh2-1j4yrsb-imvlc5poc"|null|用户通过官网或者接口获取的accessToken
  decoderPath|解码器相对路径|null|*必填，预览需要本地加载解码器，请填写ezuikit所在相对路径|
  decoderVersion|解码器引擎版本|null|非必填，默认为最新版本,当前支持的版本 v2.6.4 v3.0 v3.4|
  width|400|null|视频元素宽度
  height|400|null|视频元素高度
  autoplay|true|true|是否自动播放
  splitBasis|1|1|多窗口设置窗口切割参数
  handleError|null|null|错误回调方法，用于捕获错误


  3.方法集
  - 预览，回放开始播放

    `player.play()`
  - 预览，回放停止

    `player.stop()` 
    
  - 截图

    `player.capturePicture(0,"picName")`  
    
    不下载图片方式 ：
    
    `player.capturePicture(0,"picName",(data)=>{console.log(data);true})`
    
  
  3.多窗口模式

  >支持 1\*1，2\*2，3\*3，4\*4 多窗口播放
  
  >### 实现多窗口仅需两步：
  - 设置窗口切割参数（1\*1，2\*2，3\*3，4\*4） splitBasis
  - 多窗口url通过逗号分隔
    ```
    var player = new EZUIPlayer({
        id: 'myPlayer',
        url: {url0},{url1},{url2},{url3}, // ezopen播放地址逗号分隔
        autoplay: true,
        accessToken: "at.8o2k6dbpcvtr13reaa96hbnya6*************c",
        decoderPath: '{{location path}}',
        width: 1200, // 宽度高度为容器规格，将按照窗口数均分
        height: 800,
        splitBasis: 2 //设置窗口切割参数
      });```
## 六、对讲模块

  - 初始化
    ``` 
    function onMessage(message) { 
      console.log("事件回调", message);
    }
    function onError(error) {
      console.log("错误事件回调",error);
    }
    var EZUITalk = new EZUITalk({
      accessToken: "at.8o2k6dbpcvtr13reaa96hbnya6c",
      url: {{url}},
      filePath: '{{**/ezuikit-talk.js}}',
      onMessage: onMessage,
      onError: onError,
    });
    ```

  - 开始对讲

    `EZUITalk.startTalk();`
  - 结束对讲

    `EZUITalk.startTalk();`
    ### 消息列表（onMessage返回值）

    消息码|消息内容|消息体
    -|-|-|
    |10200001	|对讲资源加载成功|```{code: 10200001, data: "插件加载成功"}```
    |10200200	|开始对讲成功|```{code: "10200200", data: "start talk success!"}```
    |10200400	|结束对讲|```{code: "10200400", data: "webrtc destroyed"}```

    ### 错误码（onError返回值）

    错误码|说明
    -|-|
    10220002| accessToken过期或异常/设备不存在
    10200035|	房间号不存在或房间已失效
    10200504|	设备不在线
    -1 | 调用麦克风失败，{code: -1, data: "getUserMedia not available"}


## 七、<a name="ezopen">播放地址获取及EZOPEN协议说明</a>

  你可以通过开放平台官网获取各种格式视频直播地址，包含HLS格式，RTMP格式，WS格式，FLV格式等，EZUIKit支持所有格式直播视频播放。你可以将以上格式直播地址配置在UIKIT中直接播放，但需要注意，并非所有浏览器支持任意格式直播地址，为方便开发者使用，开放平台通过EZOPEN协议可以通过你终端类型帮助你轻松适配最优播放地址格式：
  EZOPEN协议格式为 ：

   【直播】 ezopen://open.ys7.com/[uuid][.hd].live   
   >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.hd.live*
   
  【预览】 ezopen://open.ys7.com/[uuid][.hd].live
        或ezopen://open.ys7.com/序列号/通道号[.hd].live
  >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.hd.live*
   
  【回放】 ezopen://open.ys7.com/[uuid].rec?begin=yyyyMMddhhmmss&end=yyyyMMddhhmmss
         或ezopen://open.ys7.com/序列号/通道号.rec?begin=yyyyMMddhhmmss&end=yyyyMMddhhmmss
  >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.rec?begin=20180808000000&end=20180808235959*

  >*简写模式：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.rec?begin=20180808&end=20180808*

  > *将播放2018年8月8日0点0分0秒至2018年8月8日23点59分59秒回放*

