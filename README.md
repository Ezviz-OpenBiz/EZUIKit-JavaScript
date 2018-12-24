# UIKit JavaScript使用文档
- [简介](#intro)
- [获取UIKit JavaScript](#get)
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
## <a name="live">三、直播</a>
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

## <a name="back">四、预览，回放</a>
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
  url | ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.live |null| 直播地址<br>支持ezopen协议格式（推荐）<br>支持ws, wss格式预览地址播放
  accessToken|"at.8o2k6dbpcvtr13reaa96hbnya6fee2wf-9gu6zcjmh2-1j4yrsb-imvlc5poc"|null|用户通过官网或者接口获取的accessToken
  decoderPath|解码器相对路径|null|*必填，预览需要本地加载解码器，请填写ezuikit所在相对路径|
  width|400|null|视频元素宽度
  height|400|null|视频元素高度
  autoplay|true|false|是否自动播放


  3.方法集
  - 预览，回放开始播放

    `player.play()`
  - 预览，回放停止

    `player.stop()`
## 五、<a name="ezopen">播放地址获取及EZOPEN协议说明</a>

  你可以通过开放平台官网获取各种格式视频直播地址，包含HLS格式，RTMP格式，WS格式，FLV格式等，EZUIKit支持所有格式直播视频播放。你可以将以上格式直播地址配置在UIKIT中直接播放，但需要注意，并非所有浏览器支持任意格式直播地址，为方便开发者使用，开放平台通过EZOPEN协议可以通过你终端类型帮助你轻松适配最优播放地址格式：
  EZOPEN协议格式为 ：

   【直播】 ezopen://open.ys7.com/[uuid][.hd].live   
   >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.hd.live*
   
  【预览】 ezopen://open.ys7.com/[uuid][.hd].live
  >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.hd.live*
   
  【回放】 ezopen://open.ys7.com/[uuid].rec?begin={{yyyyMMdd}}T{{hhssmm}}Z&end={{yyyyMMdd}}T{{hhssmm}}Z
  >*示例：ezopen://open.ys7.com/f01018a141094b7fa138b9d0b856507b.rec?begin=T20180808000000Z&begin=T20180808235959Z*

  > *将播放2018年8月8日0点0分0秒至2018年8月8日23点59分59秒回放*

