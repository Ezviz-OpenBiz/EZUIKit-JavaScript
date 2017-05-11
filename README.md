# EZUIKit-JavaScript
Ezviz UI组件，可以快速实现视频应用

## 使用说明
1 页面引入js

```js
<script src="https://open.ys7.com/sdk/js/1.0/ezuikit.js"></script>
```
2 创建一个video标签 [若设置autoplay属性则默认自动播放]
```html
<video id="myPlayer" poster="[这里可以填入封面图片URL]" controls playsInline webkit-playsinline [autoplay]>
    <source src="[这里填入从开放平台官网获取到的HLS协议URL]" type="application/x-mpegURL" />
</video>
```
初始化
```js
<script>
var player = new EZUIPlayer('myPlayer');
</script>
```


## 完整示例

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
    <meta name="renderer" content="webkit">
    <title>测试页面</title>
    <style>
        html,body{margin:0; padding: 0;text-align: center;}
        video{max-width: 1200px;width: 100%;}
    </style>
    <script src="https://open.ys7.com/sdk/js/1.0/ezuikit.js"></script>
</head>
<script>
</script>
<body>

<video id="myPlayer" poster="" controls playsInline webkit-playsinline autoplay>
    <source src="http://open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.m3u8" type="application/x-mpegURL" />
</video>

<script>
    var player = new EZUIPlayer('myPlayer');
</script>
</body>
</html>
```

完整示例地址 [https://open.ys7.com/sdk/js/1.0/demo.html](https://open.ys7.com/sdk/js/1.0/demo.html)

可使用手机扫码查看效果:

![](./js_demo.png)


## 浏览器兼容性

- chrome(MSE or flash)
- ie9+(MSE or flash)
- 国产浏览器请使用急速模式(webkit内核)

- Android 4.4+
- Safari for iOS 9.3+
