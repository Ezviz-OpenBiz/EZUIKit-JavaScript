# UIKit Javascript 使用说明  

### 简介
UIKit，是基于萤石开放平台OpenSDK封装的UI组件，使用过程中不必学习专业的业务概念，更不用调用繁琐的接口，能够以极简的嵌入方式，快速在您的应用中集成视频功能。

萤石开放平台官网 https://open.ys7.com


### 浏览器支持

- chrome
- ie9+
- 国产浏览器请使用急速模式(webkit内核)

- Android 4.4+
- Safari for iOS 9.3+


### 使用说明
页面引入js

```js
<script src="https://open.ys7.com/sdk/js/1.1/ezuikit.js"></script>
```
页面创建一个video标签 [若设置autoplay属性则默认自动播放]
```html
<video id="myPlayer" poster="[这里可以填入封面图片URL]" controls playsInline webkit-playsinline [autoplay]>
    <source src="[这里填入从开放平台官网获取到的RTMP协议URL]" type="" />
    <source src="[这里填入从开放平台官网获取到的HLS协议URL]" type="application/x-mpegURL" />
</video>
```
**注意：若要支持手机播放必须填入HLS协议地址**

初始化
```js
<script>
var player = new EZUIPlayer('myPlayer');
</script>
```


### 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
    <meta name="renderer" content="webkit">
    <title>测试页面</title>
    <style>
        body{margin:0;text-align: center;}
        video{max-width: 1200px;width: 100%;}
    </style>
</head>
<script>
</script>
<body>
<script src="https://open.ys7.com/sdk/js/1.1/ezuikit.js"></script>

<video id="myPlayer" poster="" controls playsInline webkit-playsinline autoplay>
    <source src="rtmp://rtmp.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b" type="" />
    <source src="http://hls.open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8" type="application/x-mpegURL" />

</video>

<script>
    var player = new EZUIPlayer('myPlayer');
    player.on('error', function(){
        console.log('error');
    });
    player.on('play', function(){
        console.log('play');
    });
    player.on('pause', function(){
        console.log('pause');
    });

</script>
</body>
</html>
```

完整示例地址 [https://open.ys7.com/sdk/js/1.1/demo.html](https://open.ys7.com/sdk/js/1.1/demo.html)

可使用手机扫码查看效果:

![](./js_demo.png)


## 方法与事件回调
### 播放
```
player.play();
```
### 停止
```
player.();
```
### 暂停
```
player.pause();
```
### 注册事件
```
// 注册错误事件回调
player.on('error', function(){
    console.log('error');
});
// 注册播放事件回调
player.on('play', function(){
    console.log('play');
});
// 注册暂停事件回调
player.on('pause', function(){
    console.log('pause');
});
```
