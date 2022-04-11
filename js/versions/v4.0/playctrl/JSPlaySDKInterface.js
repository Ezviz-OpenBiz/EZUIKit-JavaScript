/**
 * Created by wangweijie5 on 2016/12/2.
 */

// 错误码
const PLAYM4_PARA_OVER = 0; 	// 参数错误
const PLAYM4_OK = 1;             //正确
const PLAYM4_ORDER_ERROR = 2; 	// 调用接口顺序错误
const PLAYM4_TIMER_ERROR = 3; 	// 创建多媒体时钟错误
const PLAYM4_DEC_VIDEO_ERROR = 4; 	// 视频设备错误
const PLAYM4_DEC_AUDIO_ERROR = 5; 	// 音频设备错误
const PLAYM4_ALLOC_MEMORY_ERROR = 6; 	// 申请内存失败
const PLAYM4_OPEN_FILE_ERROR = 7; 	// 打开文件失败
const PLAYM4_BUF_OVER = 11; 	// 缓存溢出
const PLAYM4_CREATE_SOUND_ERROR = 12; 	// 创建音频设备失败
const PLAYM4_SET_VOLUME_ERROR = 13; 	// 设置音频音量失败
const PLAYM4_SUPPORT_FILE_ONLY = 14; 	// 只支持文件模式
const PLAYM4_SUPPORT_STREAM_ONLY = 15; 	// 只支持流模式
const PLAYM4_SYS_NOT_SUPPORT = 16; 	// 不支持
const PLAYM4_FILEHEADER_UNKNOWN = 17; 	// 无文件头信息
const PLAYM4_VERSION_INCORRECT = 18; 	// 解码库版本不对
const PLAYM4_INIT_DECODER_ERROR = 19; 	// 初始化解码库失败
const PLAYM4_CHECK_FILE_ERROR = 20; 	// 数据有误
const PLAYM4_INIT_TIMER_ERROR = 21; 	// 初始化多媒体时钟失败
const PLAYM4_BLT_ERROR = 22; 	// Blt失败
const PLAYM4_OPEN_FILE_ERROR_MULTI = 24; 	// 打开文件失败，码流是复合流
const PLAYM4_OPEN_FILE_ERROR_VIDEO = 25; 	// 打开文件失败，码流是纯视频
const PLAYM4_JPEG_COMPRESS_ERROR = 26; 	// Jpeg编码失败
const PLAYM4_EXTRACT_NOT_SUPPORT = 27; 	// 不支持该版本
const PLAYM4_EXTRACT_DATA_ERROR = 28; 	// 解析数据失败
const PLAYM4_SECRET_KEY_ERROR = 29; 	// 密钥错误
const PLAYM4_DECODE_KEYFRAME_ERROR = 30; 	// 解码关键帧失败
const PLAYM4_NEED_MORE_DATA = 31; 	// 需要更多数据才能解析
const PLAYM4_NOT_FIND = 33; 	// 未找到
const PLAYM4_NEED_LARGER_BUFFER = 34; 	// 需要更大的缓存
const PLAYM4_FAIL_UNKNOWN = 99; 	// 未知错误
const PLAYM4_INIT_RTPDEMUX_ERROR = 40;  // RTP解析库初始化错误
const PLAYM4_RTPDEMUX_CREATE_ERROR = 41;  // RTP解析句柄创建失败
const PLAYM4_RTPDEMUX_OUTBUF_LACK = 42;  // RTP解析输出数据不足
const PLAYM4_HANDLE_ERROR = 43;  // 句柄创建失败
const PLAYM4_DECODE_ERROR = 44; 	// 解码失败
const PLAYM4_NEW_ERROR = 45; 	// new失败
const PLAYM4_PRECONDITION_ERROR = 46;
const PLAYM4_DEMUX_ERROR = 47; 	// 解析错误
const PLAYM4_NOT_KEYFRAME = 48; 	// 非关键帧
const PLAYM4_WORKER_ERROR = 60; 	// WORKER错误
const PLAYM4_CREATE_RENDERER_ERROR = 61; 	// 创建渲染句柄失败
const PLAYM4_LOAD_UNFINISHED = 62; 	// js文件未加载完成
const PLAYM4_GET_VOLUME_ERROR = 63; 	// 获取音频音量失败


const PLAYM4_PARA_ENCODER_ERROR = 71;  //音频编码参数错误
const PLAYM4_PRECONDITION_ENCODER_ERROR = 72;  //不满足音频编码条件错误
const PLAYM4_ENCODER_ERROR = 73;  //音频编码失败
const PLAYM4_CREATE_ENCODER_ERROR = 74;  //创建音频编码器失败
const PLAYM4_NOSUPPORT_ENCODER_ERROR = 75;  //音频编码不支持
const PLAYM4_ALLOC_MEMORY_ENCODER_ERROR = 76;  //音频编码相关内存申请失败
const PLAYM4_BUF_OVER_ENCODER_ERROR = 77;  //音频编码相关buffer满
const PLAYM4_NEED_MORE_DATA_ENCODER_ERROR = 78;  //音频编码需要更多数据进行编码
const PLAYM4_CALL_ORDER_ENCODER_ERROR = 79;  //音频编码调用顺序错误

const PLAYM4_ITYPE_DECODE_ERROR = 100;   //定位后送进来的第一帧I帧解码失败
const PLAYM4_FIRST_FRAME_NOT_ICURRENT = 101;   //定位后送进来的第一帧不是定位帧所在的I帧（Ni>Mp）


//音频编码类型,当前只支持G系列(不包含G729和G722.1.c)
const AUDIO_TYPE_G711A = 0x01;
const AUDIO_TYPE_G711U = 0x02;
const AUDIO_TYPE_G722 = 0x03;  //G722.1
const AUDIO_TYPE_G726 = 0x04;
const AUDIO_TYPE_MPEG2  = 0x05;//V7.2.1.44暂不支持
const AUDIO_TYPE_AAC = 0x06;

//音频编码通道数
const AUDIO_ENCODE_CHANEL_MONO = 1;   //单通道
const AUDIO_ENCODE_CHANEL_STERO = 2;   //双通道

//音频编码位宽
const AUDIO_ENCODE_8BIT_WIDTH = 8;
const AUDIO_ENCODE_16BIT_WIDTH = 16;

//音频编码采样率
const AUDIO_ENCODE_SAMPLE_8RATE = 8000;
const AUDIO_ENCODE_SAMPLE_16RATE = 16000;
const AUDIO_ENCODE_SAMPLE_24RATE = 24000;
const AUDIO_ENCODE_SAMPLE_32RATE = 32000;
const AUDIO_ENCODE_SAMPLE_48RATE = 48000;
const AUDIO_ENCODE_SAMPLE_64RATE = 64000;

// 音频格式
const AUDIO_TYPE = {
    "AUDIO_G711_U": 0x7110,
    "AUDIO_G711_A": 0x7111,
    "AUDIO_G722_1": 0x7221,
    "AUDIO_G726_U": 0x7260,
    "AUDIO_G726_A": 0x7261,
    "AUDIO_G726_2": 0x7262,
    "AUDIO_AACLC": 0x2001,
    "AUDIO_MPEG": 0x2000,
    "AUDIO_ADPCM":0x1000,
    "AUDIO_NULL": 0x0000
};


// 加密类型
const SECRET_NONE = 0;   // 不加密
const SECRET_AES = 1;   // AES 加密

// 视频编码类型
const VIDEO_H264 = 0x1;           // 标准H.264和海康H.264都可以用这个定义
const VIDEO_AVC264 = 0x0100;

// G711系列音频
const AUDIO_G711_U = 0x7110;        // G.711-U
const AUDIO_G711_A = 0x7111;        // G.711-A

// 流模式
const STREAM_REALTIME = 0;         // 实时流
const STREAM_FILE = 1;             // 文件流

// 截图类型
const TYPE_BMP = 'BMP';            // bmp
const TYPE_JPEG = 'JPEG';          // jpeg

// 解码类型
const DECODE_ALL = 0;   // 全解
const DECODE_VIDEO_KEYFRAME = 1;   // 只解关键帧

// 缓存帧数
const BUFFER_MAXNUM_ONEBYONE = 15;   // 帧进上限缓存数
const BUFFER_MINNUM_ONEBYONE = 8;   // 帧进下限缓存数
const BUFFER_NUM_NORMAL = 1;   // 正常缓存数
const BUFFER_NUM_AUDIO = 50;   // 音频存储25帧播放一次
const BUFFER_MAXNUM_YUV = 5;   // YUV最大缓存帧数
const YUV_SKIP_NUM = 2;   // YUV跳帧间隔

// const BUFFER_NODE_NUM = 20;   // 输入缓存节点数
// const BUFFER_MAX_SIZE = 800*1024;   // 最大缓存
const BUFFER_MAX_SIZE = 5 * 1024 * 1024;   // 最大缓存
const BUFFER_MIN_SIZE = 100;//最小缓存
const BUFFER_INPUT_SIZE = 1024*20;   // 一次送入数据大小
// const BUFFER_FAST_INPUT_SIZE = 10000; // 快放一次送入数据大小

const WRITE_AUD_ENCODE_NUM = 200; //一次写编码音频帧总帧数
const WRITE_AUD_PCM_NUM = 100; //一次写PCM数据
const WRITE_VID_YUV_NUM = 20; //一次写YUV数据
const WRITE_VID_RAW_NUM = 100;//一次写裸数据
// 电子放大区域
const WRITE_RTP_NUM =200;    //写RTP数据
const SET_PLAY_POSITION_PAUSE = 1;//定位后暂停
const SET_PLAY_POSITION_PLAY = 0;//定位后继续播放
var HK_RECT = {
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
};

//解码回调帧信息
var DECODE_INFO_YUV = {
    "width": 0,
    "height": 0,
    "frameNum": 0,
    "yuvData": null
};
//显示回调帧信息
var DISPLAY_INFO_YUV = {
    "width": 0,
    "height": 0,
    "frameNum": 0,
    "yuvData": null
};

//音频PCM回调信息
var DECODE_INFO_PCM = {
    "sampleRate": 0,
    "channel": 0,
    "bitsPerSample": 0,
    "length": 0,
    "pcmData": null
};

// xx.js加载标识
var bAudioRenderLoad = false;
var bSuperRenderLoad = false;
//JS层log打印开关
var bJSPrintLog = false;
var audioEncNum=0;

// 回调函数参数对象
var CALLBACK_PARAMETER = {
    "id": null,
    "cmd": null,
    "data": null,
    "errorCode": 0,
    "status": null
};

//定义类 JSPlayCtrl
export class JSPlayCtrl {
    constructor(path, callBack, winId) {

        // 路径
        if (path != null && path !== undefined && typeof (path) === "string") {
            this.szBasePath = path;
        } else {
            return PLAYM4_PARA_OVER;
        }

        // 加载回调
        if (callBack && typeof (callBack) === "function") {
            this.fnCallBack = callBack;
        } else {
            return PLAYM4_PARA_OVER;
        }

        // 解码 Worker
        this.decodeWorker = null;

        // 开启流类型
        this.streamOpenMode = null;
        this.bOpenStream = false;



        //精确定位
        this.iFrameNumOrTime = 0;
        this.bSetPlayPositionType = SET_PLAY_POSITION_PLAY;   //默认定位后继续播放

        // 音频渲染
        this.audioRenderer = null;
        this.aAudioBuffer = [];
        this.iAudioBufferSize = 0;

        //音频编码缓存及对应音频编码帧数
        this.bWriteAudEnc = false;
        this.iAudioEncBufferSize = 0;
        this.aAudioEncBuffer = [];

        // 视频渲染库
        this.oSuperRender = null;
        this.aVideoFrameBuffer = []; //YUV数据
        this.YUVBufferSize = BUFFER_NUM_NORMAL;
        this.szOSDTime = null;

        //下载YUV数据
        this.bWriteYUVData = false;
        this.iYUV10size = 0;//YUV帧数
        this.aVideoYUVBuffer = [];

        //下载PCM数据
        this.bWritePCMData = false;
        this.iAudioBuffer500Size = 0;
        this.aAudioPCMBuffer = [];

        //下载裸数据
        this.bWriteRawData = false;
        this.iRawDataSize = 0;
        this.aRawDataBuffer = [];

        //下载RTP数据
        this.bWriteRTPData = true;
        this.iRTPDataSize = 0;
        this.aRTPDataBuffer = [];
        this.downloadRTP =false;
        this.rtpNum=0;

        // 播放音视频标识
        this.bPlaySound = false;
        this.bPlay = false;
        this.bPause = false;
        this.bOnebyOne = false;
        this.bPlayRateChange = false;
        this.bAudioTypeSupport = true;
        this.audioNum = 0;
        this.videoNum = 0;
        //定位标志位
        this.SetPlayPositionFlag = false;

        //帧进步长
        this.FrameForwardLen = 1;

        //纯音频播放标识
        this.bOnlyPlaySound = false;

        // 回调函数
        this.dataCallBackFun = null;  // 截图回调函数
        this.YUVBufSizeCBFun = null;  // YUV缓存大小回调函数
        this.AudEncodeDataCBFun = null;  //音频编码一帧数据回调
        this.DecCallBackFun = null;//解码回调函数
        this.DisplayCallBackFun = null; //显示回调函数
        this.PCMCallBackFun = null;//PCM数据回调
        this.DecInfoYUV = DECODE_INFO_YUV;  //解码回调数据
        this.DisplayInfoYUV = DISPLAY_INFO_YUV; //显示回调数据
        this.DecInfoPCM = DECODE_INFO_PCM;//音频PCM回调数据


        // 图像宽高
        this.nWidth = 0;
        this.nHeight = 0;

        //图像的裁剪信息
        this.nSPSCropLeft=0;
        this.nSPSCropRight=0;
        this.nSPSCropTop=0;
        this.nSPSCropBottom=0;

        // 画布ID
        this.sCanvasId = null;

        // 显示图像数据缓存
        this.aDisplayBuf = null;

        // 页面是否激活
        this.bVisibility = true;

        // 解码类型
        this.nDecFrameType = DECODE_ALL;

        // 电子放大
        this.iCanvasWidth = 0;  // canvas宽
        this.iCanvasHeight = 0;  // canvas高
        this.iZoomNum = 0;  // 放大次数
        this.iRatio_x = 1;  // X方向比率
        this.iRatio_y = 1;  // Y方向比率
        this.stDisplayRect = {
            "top": 0,
            "left": 0,
            "right": 0,
            "bottom": 0
        };  // 上一次电子放大区域
        this.bDisRect = false;
        this.stYUVRect = {
            "top": 0,
            "left": 0,
            "right": 0,
            "bottom": 0
        };  // 映射到YUV上区域

        this.aInputDataLens = [];   // 送入缓存数据长度列表
        /***********性能不足解决方案************/
        this.aInputDataBuffer = [];   // 送入数据的缓存
        this.bIsGetYUV = false; // 获取YUV数据
        this.bIsFirstFrame = true; // 第一帧数据
        this.iInputMaxBufSize = BUFFER_MAX_SIZE; // 输入最大缓存大小
        this.bIsInput = false; // 输入数据
        this.bIsInputBufOver = false; // 输入缓存溢出
        this.iInputDataLen = BUFFER_INPUT_SIZE; // 输入数据长度

        var that = this;  // 保存this, 在onmessage回调中使用

        // 回调设置
        this.setCallBack = function (that, cmd, data, errorCode, status) {
            // 回调函数参数
            var callBackParameter = CALLBACK_PARAMETER;

            callBackParameter.id = winId;
            callBackParameter.cmd = cmd;
            callBackParameter.data = data;
            callBackParameter.errorCode = errorCode;
            callBackParameter.status = status;

            that.fnCallBack(callBackParameter);
        };

        // 加载音频渲染js文件
        if (!bAudioRenderLoad) {
            bAudioRenderLoad = true;
            var script_audio = document.createElement("script");
            script_audio.type = "text/javascript";
            script_audio.src = that.szBasePath + "AudioRenderer.js";
            var head_audio = document.getElementsByTagName('head')[0];
            head_audio.appendChild(script_audio);
            script_audio.onload = script_audio.onreadystatechange = function () {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                    if (bJSPrintLog) {
                        console.log(">>>JS AudioRenderer.js load finish!");
                    }
                }
            };
        }

        // 加载视频渲染js文件
        if (!bSuperRenderLoad) {
            bSuperRenderLoad = true;
            var script_vedio = document.createElement("script");
            script_vedio.type = "text/javascript";
            script_vedio.src = that.szBasePath + "SuperRender_10.js";
            var head_vedio = document.getElementsByTagName('head')[0];
            head_vedio.appendChild(script_vedio);
            script_vedio.onload = script_vedio.onreadystatechange = function () {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
                    if (bJSPrintLog) {
                        console.log(">>>JS SuperRender_10.js load finish!");
                    }
                }
            };

            //渲染同事建议10版本，20不是普适
            /*var script_vedio2 = document.createElement("script");
            script_vedio2.type = "text/javascript";
            script_vedio2.src = that.szBasePath + "SuperRender_20.js";
            var head_vedio2 = document.getElementsByTagName('head')[0];
            head_vedio2.appendChild(script_vedio2);
            script_vedio2.onload = script_vedio2.onreadystatechange = function () {
                if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete'
                ) {
                    //console.log(">>> SuperRender_20.js load finish!");
                }
            };*/
        }

        this.convertErrorCode = function (nErrorCode) {
            switch (nErrorCode) {
                case 1:
                    return PLAYM4_OK;

                case 98:
                    return PLAYM4_PARA_OVER;

                default:
                    return nErrorCode;
            }
        };

        // ArrayBuffer复制
        this.arrayBufferCopy = function (srcArrayBuf) {
            var length = srcArrayBuf.byteLength;
            var destBuf = new Uint8Array(length);
            var srcBuf = new Uint8Array(srcArrayBuf);

            var i = 0;
            for (i = 0; i < length; i++) {
                destBuf[i] = srcBuf[i];
            }

            return destBuf;
        };

        // 送入数据
        this.inputDataFun = function () {
            var aReadBuf;
            var aSendBuf;
            var iSize = 0;
            that.bIsGetYUV = false;
            // 如果解析解码缓存溢出，则停止送入数据，直到缓存空闲后继续送入
            if (that.bIsInputBufOver) {
                if (bJSPrintLog) {
                    console.log(">>>JS inputDataFun over!");
                }

                aReadBuf = new Uint8Array(1);
                aSendBuf = new Uint8Array(aReadBuf);
                var message = {'command': "InputData", 'data': aSendBuf.buffer, 'dataSize': 0};
                that.decodeWorker.postMessage(message, [message.data]);
            } else {
                if ((that.bPlay && (!that.bPause || that.bOnebyOne)) || this.bOnlyPlaySound) {
                    //播放或单帧前进时，往worker送流
                    while (that.aInputDataLens.length > 0) {
                        iSize += that.aInputDataLens.shift();
                        if (iSize > that.iInputDataLen) {
                            break;
                        }
                    }
                    if (bJSPrintLog) {
                        console.log(">>>JS inputDataFun-len:%d,totalSize:%d", iSize,that.aInputDataBuffer.length);
                    }
                    aReadBuf = that.aInputDataBuffer.splice(0, iSize);
                    
                    aSendBuf = new Uint8Array(aReadBuf);
                    var message = {'command': "InputData", 'data': aSendBuf.buffer, 'dataSize': iSize};
                    that.decodeWorker.postMessage(message, [message.data]);
                }
            }
            aReadBuf = null;
            aSendBuf = null;
        };

        this.getPic = function (callBack, command) {
            if (this.decodeWorker == null || this.oSuperRender == null) {
                return PLAYM4_ORDER_ERROR;
            }

            if (!this.bPlay) {
                return PLAYM4_ORDER_ERROR;
            }

            if (callBack && typeof (callBack) === "function") {
                this.dataCallBackFun = callBack;
            } else {
                return PLAYM4_PARA_OVER;
            }

            // 映射到原图位置信息
            if (0 === this.iZoomNum) {
                this.stYUVRect.left = 0;
                this.stYUVRect.top = 0;
                this.stYUVRect.right = 0;
                this.stYUVRect.bottom = 0;
            } else {
                if (0 === this.iCanvasWidth || 0 === this.iCanvasHeight) {
                    this.stYUVRect.left = 0;
                    this.stYUVRect.top = 0;
                    this.stYUVRect.right = 0;
                    this.stYUVRect.bottom = 0;
                } else {
                    var ratio_x = this.nWidth / this.iCanvasWidth;
                    var ratio_y = this.nHeight / this.iCanvasHeight;
                    this.stYUVRect.left = Math.round(this.stDisplayRect.left * ratio_x);
                    this.stYUVRect.top = Math.round(this.stDisplayRect.top * ratio_y);
                    this.stYUVRect.right = Math.round(this.stDisplayRect.right * ratio_x);
                    this.stYUVRect.bottom = Math.round(this.stDisplayRect.bottom * ratio_y);
                }

                // 宽高必须大于32
                if ((this.stYUVRect.right - this.stYUVRect.left) < 32 || (this.stYUVRect.bottom - this.stYUVRect.top) < 32) {
                    return PLAYM4_PARA_OVER;
                }
            }

            // 数据转换
            if (this.aDisplayBuf == null) {
                return PLAYM4_ORDER_ERROR;
            }
            var buf = this.arrayBufferCopy(this.aDisplayBuf);

            // 往 Worker 送数据
            var message = {
                'command': command, 'data': buf.buffer, 'width': this.nWidth, 'height': this.nHeight,
                'rect': this.stYUVRect
            };
            if (bJSPrintLog) {
                console.log(">>>JS capture nWidth = %d,nWidth = %d", this.nWidth, this.nHeight);
            }
            this.decodeWorker.postMessage(message, [message.data]);

            return PLAYM4_OK;
        };

        this.createWorker = function (self) {
            // 加载Worker
            if (window.Worker) { // 判断浏览器是否支持 Worker
                if (this.decodeWorker == null) {
                    // 创建解码 Worker
                    this.decodeWorker = new Worker(that.szBasePath + "DecodeWorker.js");
                    if (bJSPrintLog)
                    {
                        console.log(">>>JS  createWorker success!!!!!!!!!!!!!!!!!!!!!!!!!");
                    }
                    if (this.decodeWorker == null) {
                        return PLAYM4_WORKER_ERROR;
                    }
                }

                // 接收 message
                this.decodeWorker.onmessage = function (evt) {
                    var typeName = null;
                    var eventData = evt.data;
                    switch (eventData.function) {
                        case "printLog":
                            console.log("print JSPlayerSDK log failed");
                            break;

                        case "loaded":
                            typeName = "loaded";

                            self.setCallBack(self, "loaded", 0, 0, true);
                            break;

                        case "SetStreamOpenMode":
                            typeName = "SetStreamOpenMode";
                            break;

                        case "OpenStream":
                            typeName = "OpenStream";
                            if (1 === eventData.errorCode) {
                                that.bOpenStream = true;
                                return;
                            }
                            break;

                        case "InputData":
                            typeName = "InputData";

                            //　解析解码缓存溢出
                            if (eventData.errorCode === PLAYM4_BUF_OVER) {
                                that.bIsInputBufOver = true;
                                that.inputDataFun();
                                if (bJSPrintLog) {
                                    console.log(">>>JS InputData PLAYM4_BUF_OVER");
                                }
                            }

                            // 解析解码缓存空闲
                            if (eventData.errorCode === PLAYM4_NEED_MORE_DATA) {
                                that.bIsInputBufOver = false;
                                // that.inputDataFun();
                                if (bJSPrintLog) {
                                    console.log(">>>JS InputData PLAYM4_NEED_MORE_DATA");
                                }
                            }
                            break;

                        case "GetFrameData":
                            typeName = "GetFrameData";
                            if (!that.bOnlyPlaySound) {
                                if (bJSPrintLog) {
                                    console.log(">>>JS mainthread display GetFrameData 1-1");
                                }
                                if (eventData.data != null && eventData.frameInfo != null) {
                                    // 获取图像宽高
                                    var width = eventData.frameInfo.width;
                                    var height = eventData.frameInfo.height;
                                }

                                if (!that.bPlay) {
                                    return;
                                }

                                // that.bIsInputBufOver = !(eventData.errorCode === PLAYM4_NEED_MORE_DATA);

                                if (!that.bIsFirstFrame && eventData.errorCode === PLAYM4_NEED_MORE_DATA) {
                                    // 数据不足时立刻送入数据
                                    that.bIsInputBufOver = false;
                                    // if (that.aInputDataLens.length > 0) {
                                    //     that.inputDataFun();
                                    // } else {
                                    //     that.bIsGetYUV = true;
                                    // }

                                    setTimeout(that.inputDataFun(), 5);
                                    break;
                                } else if (that.bIsInputBufOver) {
                                    // 解析缓存溢出
                                    that.inputDataFun();
                                } else {
                                    if (eventData.type === "videoType") {
                                        if (that.aInputDataLens.length > 0 && that.bIsInput) {
                                            that.inputDataFun();
                                            that.bIsInput = false;
                                        } else {
                                            that.bIsGetYUV = true;
                                        }

                                        that.bIsFirstFrame = false;
                                    }
                                }
                            }

                            if (bJSPrintLog) {
                                console.log(">>>JS mainthread display GetFrameData bVisibility:" + that.bVisibility);
                            }
                            // web页面激活时才缓存音视频数据
                            if (that.bVisibility) {
                                if (PLAYM4_OK === eventData.errorCode) {
                                    switch (eventData.type) {
                                        case "videoType":
                                            if (bJSPrintLog) {
                                                console.log(">>>JS mainthread display GetFrameData type:" + eventData.type);
                                            }
                                            if (eventData.data == null || eventData.frameInfo == null) {
                                                return PLAYM4_PARA_OVER;
                                            }
                                            //显示回调
                                            if (that.DecCallBackFun != null) {
                                                if (bJSPrintLog) {
                                                    console.log(">>>JS MainThread-GetYUVData");
                                                }
                                                that.DecInfoYUV.height = eventData.frameInfo.height;
                                                that.DecInfoYUV.width = eventData.frameInfo.width;
                                                that.DecInfoYUV.frameNum = eventData.frameInfo.frameNum;
                                                that.DecInfoYUV.yuvData = new Uint8Array(eventData.data);
                                                that.DecCallBackFun(that.DecInfoYUV)
                                            }
                                            that.bIsFirstFrame = false;

                                            //处理视频数据
                                            self.nWidth = eventData.frameInfo.width;
                                            self.nHeight = eventData.frameInfo.height;
                                            self.nSPSCropLeft=eventData.frameInfo.cropLeft;
                                            self.nSPSCropRight=eventData.frameInfo.cropRight;
                                            self.nSPSCropTop=eventData.frameInfo.cropTop;
                                            self.nSPSCropBottom=eventData.frameInfo.cropBottom;

                                            var oVideoFrameInfo = new Object();
                                            oVideoFrameInfo.data = eventData.data;
                                            oVideoFrameInfo.osdTime = eventData.osd;
                                            oVideoFrameInfo.nWidth = eventData.frameInfo.width;
                                            oVideoFrameInfo.nHeight = eventData.frameInfo.height;
                                            oVideoFrameInfo.frameNum = eventData.frameInfo.frameNum;
                                            oVideoFrameInfo.timeStamp = eventData.frameInfo.timeStamp;

                                            //打印10帧YUV视频
                                            if (self.bWriteYUVData) {
                                                var bufferPackage = new Uint8Array(eventData.data);
                                                var iIndexBuffer = self.aVideoYUVBuffer.length;
                                                for (var i = 0, iLen = bufferPackage.length; i < iLen; i++) {
                                                    self.aVideoYUVBuffer[iIndexBuffer + i] = bufferPackage[i];
                                                }
                                                self.iYUV10size++;
                                                bufferPackage = null;
                                            }
                                            if (self.bWriteYUVData && self.iYUV10size >= WRITE_VID_YUV_NUM) {
                                                var YUVbuffer = new Uint8Array(self.aVideoYUVBuffer);
                                                self.downloadFile(YUVbuffer, "videoYUV.data");
                                                self.aVideoYUVBuffer.splice(0, self.aVideoYUVBuffer.length);//清空PCM缓存
                                                self.bWriteYUVData = false;
                                                self.iYUV10size = 0;
                                                YUVbuffer = null;
                                            }
                                            /*******打印结束*****/

                                            if (bJSPrintLog) {
                                                console.log(">>>JS mainthread getVideoInfo Width:" + oVideoFrameInfo.nWidth + ",height:" + oVideoFrameInfo.nHeight + ",frameNum:" + oVideoFrameInfo.frameNum);
                                            }
                                            self.aVideoFrameBuffer.push(oVideoFrameInfo);
                                            oVideoFrameInfo = null;

                                            // 如果YUV缓存大于阈值时进行抽帧显示，防止内存快速增长导致浏览器崩溃
                                            var iYUVNum = self.aVideoFrameBuffer.length;
                                            if (iYUVNum > BUFFER_MAXNUM_YUV) {
                                                if (bJSPrintLog) {
                                                    console.log(">>>JS render loose frame iYUVNum:%d", iYUVNum);
                                                }
                                                // 非单帧模式下进行该处理
                                                // YUV缓存超过BUFFER_MAXNUM_YUV个节点后隔YUV_SKIP_NUM个帧播一帧
                                                if (!self.bOnebyOne) {
                                                    self.aVideoFrameBuffer.splice(0, YUV_SKIP_NUM);
                                                }
                                            }
                                            //定位
                                            if (self.SetPlayPositionFlag && self.bSetPlayPositionType === SET_PLAY_POSITION_PAUSE && (eventData.frameInfo.frameNum === self.iFrameNumOrTime || eventData.frameInfo.timeStamp === self.iFrameNumOrTime)) {
                                                //通知上层停止送流
                                                self.setCallBack(self, "SetFrameNum", 0, 0, false);
                                                // 下次直接从缓存读取数据
                                                self.bIsFirstFrame = true;
                                                break;
                                            }
                                            // 单帧
                                            if (self.bOnebyOne) {
                                                // 缓存满，通知上层停止送流
                                                if (self.aVideoFrameBuffer.length >= BUFFER_MAXNUM_ONEBYONE) {
                                                    self.setCallBack(self, "OnebyOne", 0, 0, false);

                                                    // 下次直接从缓存读取数据
                                                    self.bIsFirstFrame = true;
                                                    break;
                                                }
                                            }
                                            break;

                                        case "audioType":
                                           // console.log(">>>JS audioType");
                                            if (bJSPrintLog) {
                                                console.log(">>>JS mainthread display GetFrameData 2-3 type:" + eventData.type +",bPlaySound:"+self.bPlaySound+",!bPlayRateChange:" +!self.bPlayRateChange+",bOnlyPlaySound:" + that.bOnlyPlaySound);
                                            }

                                            if ((self.bPlaySound && !self.bPlayRateChange) || that.bOnlyPlaySound) {
                                                if (bJSPrintLog) {
                                                    console.log(">>>JS mainthread display GetFrameData 2-4 type" + eventData.type + "bOnlyPlaySound:" + that.bOnlyPlaySound);
                                                }
                                                //音频PCM回调
                                                if (that.PCMCallBackFun != null) {
                                                    if (bJSPrintLog) {
                                                        console.log(">>>JS MainThread-GetYUVData");
                                                    }
                                                    that.DecInfoPCM.sampleRate = eventData.frameInfo.samplesPerSec;
                                                    that.DecInfoPCM.channel = eventData.frameInfo.channels;
                                                    that.DecInfoPCM.bitsPerSample = eventData.frameInfo.bitsPerSample;
                                                    that.DecInfoPCM.pcmData = new Uint8Array(eventData.data);
                                                    that.DecInfoPCM.length = that.DecInfoPCM.pcmData.length;
                                                    that.PCMCallBackFun(that.DecInfoPCM)
                                                }

                                                //处理音频数据
                                                var bufferPackage = new Uint8Array(eventData.data);
                                                var iIndexBuffer = self.aAudioBuffer.length;
                                                for (var i = 0, iLen = bufferPackage.length; i < iLen; i++) {
                                                    self.aAudioBuffer[iIndexBuffer + i] = bufferPackage[i];
                                                }
                                                self.iAudioBufferSize++;
                                                bufferPackage = null;
                                                if (bJSPrintLog) {
                                                    console.log(">>>JS play sound 1 iAudioBufferNum:%d, BufferLen:%d", self.iAudioBufferSize, self.aAudioBuffer.length);
                                                }

                                                //打印10帧PCM音频
                                                if (self.bWritePCMData) {
                                                    var bufferPackage = new Uint8Array(eventData.data);
                                                    var iIndexBuffer = self.aAudioPCMBuffer.length;
                                                    for (var i = 0, iLen = bufferPackage.length; i < iLen; i++) {
                                                        self.aAudioPCMBuffer[iIndexBuffer + i] = bufferPackage[i];
                                                    }
                                                    console.log("audio_type num:"+self.iAudioBuffer500Size+", len:"+bufferPackage.length);
                                                    self.iAudioBuffer500Size++;
                                                    bufferPackage = null;
                                                }

                                                if (self.bWritePCMData && self.iAudioBuffer500Size >= WRITE_AUD_PCM_NUM) {
                                                    var PCMbuffer = new Uint8Array(self.aAudioPCMBuffer);
                                                    self.downloadFile(PCMbuffer, "audioPCM.data");
                                                    self.aAudioPCMBuffer.splice(0, self.aAudioPCMBuffer.length);//清空PCM缓存
                                                    self.bWritePCMData = false;
                                                    self.iAudioBuffer500Size = 0;
                                                    PCMbuffer = null;
                                                }
                                                /********打印结束*****/

                                                // 储存25帧播放一次
                                                if (self.iAudioBufferSize >= BUFFER_NUM_AUDIO) {
                                                    // 播放
                                                    if (bJSPrintLog) {
                                                        console.log(">>>JS play sound 2 iAudioBufferNum:%d, BufferLen:%d", self.iAudioBufferSize, self.aAudioBuffer.length);
                                                    }
                                                    self.audioRenderer.Play(self.aAudioBuffer, self.aAudioBuffer.length, eventData.frameInfo);
                                                    if (bJSPrintLog) {
                                                        console.log(">>>JS mainthread display Audio push 3 sysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
                                                    }
                                                    self.aAudioBuffer.splice(0, self.aAudioBuffer.length);
                                                    self.aAudioBuffer.length = 0;
                                                    self.iAudioBufferSize = 0;
                                                }
                                            }
                                            break;

                                        case "privateType":
                                            if (bJSPrintLog) {
                                                console.log(">>>JS mainthread display GetFrameData 2-5 type" + eventData.type + "bOnlyPlaySound:" + that.bOnlyPlaySound);
                                            }
                                            break;

                                        default:

                                            if (bJSPrintLog) {
                                                console.log(">>>JS mainthread display GetFrameData 2-6 type:" + eventData.type + ",bOnlyPlaySound:" + that.bOnlyPlaySound);
                                            }
                                            break;
                                    }
                                } else {
                                    if (bJSPrintLog) {
                                        console.log(">>>JS mainthread GetFrameData is not Ok,errorCode:" + eventData.errorCode);
                                    }
                                }

                            }
                            break;
                        case "GetRawData":
                            typeName = "GetRawData";
                            /********打印10帧裸数据*****/
                            if (self.bWriteRawData) {
                                var bufferRawPackage = new Uint8Array(eventData.data);
                                var iIndexRawBuffer = self.aRawDataBuffer.length;
                                for (var i = 0, iLen = bufferRawPackage.length; i < iLen; i++) {
                                    self.aRawDataBuffer[iIndexRawBuffer + i] = bufferRawPackage[i];
                                }
                                self.iRawDataSize++;
                                bufferRawPackage = null;
                            }

                            if (self.bWriteRawData && self.iRawDataSize >= WRITE_VID_RAW_NUM) {
                                var RAWbuffer = new Uint8Array(self.aRawDataBuffer);
                                self.downloadFile(RAWbuffer, "rawBuffer.data");
                                self.aRawDataBuffer.splice(0, self.aRawDataBuffer.length);//清空PCM缓存
                                self.bWriteRawData = false;
                                self.iRawDataSize = 0;
                                RAWbuffer = null;
                            }
                            /********打印结束*****/
                            break;

                        case "PlaySound":
                            typeName = "PlaySound";
                            break;
                        case "SetPlayPosition":
                            console.log(">>>JS mainthread SetPlayPosition error,errorCode:" + eventData.errorCode);
                            break;

                        case "GetJPEG":
                            typeName = "GetJPEG";

                            // 获取图像宽高
                            var pJpegData = eventData.data;

                            self.dataCallBackFun(pJpegData);
                            break;

                        case "GetBMP":
                            typeName = "GetBMP";

                            // 获取图像宽高
                            var pBmpData = eventData.data;

                            self.dataCallBackFun(pBmpData);
                            break;
                        /******************************************将worker返回的编码音频数据写到aAudioEncBuffer*****************************/
                        case "GetAudEncodeData":
                            if (bJSPrintLog) {
                                console.log(">>>JS MainThread-GetAudEncodeData 1");
                            }

                            typeName = "GetAudEncodeData";
                            if (PLAYM4_OK === eventData.errorCode) {
                                if (that.AudEncodeDataCBFun != null) {
                                    if (bJSPrintLog) {
                                      console.log(">>>JS  GetAudEncodeData 1 dataSize"+eventData.dataSize+ ", nSysTime:" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
                                    }
                                    that.AudEncodeDataCBFun(new Uint8Array(eventData.data));
                                    if (bJSPrintLog) {
                                        console.log(">>>JS  GetAudEncodeData 2 dataSize"+eventData.dataSize+ ", nSysTime:" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
                                    }
                                }
                               // audioEncNum++;
                                /********打印500帧编码后的音频*****/
                                //console.log("JSPlaySDKInterface WRITE_AUD_ENCODE_NUM:"+WRITE_AUD_ENCODE_NUM+", bWriteAudEnc:"+self.bWriteAudEnc+", audioEncNum:"+audioEncNum);
                                if (self.bWriteAudEnc) {
                                    var bufferPackage = new Uint8Array(eventData.data);
                                    var iIndexBuffer = self.aAudioEncBuffer.length;
                                    for (var i = 0, iLen = bufferPackage.length; i < iLen; i++) {
                                        self.aAudioEncBuffer[iIndexBuffer + i] = bufferPackage[i];
                                    }
                                    self.iAudioEncBufferSize++;
                                    bufferPackage = null;
                                }

                                if (self.bWriteAudEnc && self.iAudioEncBufferSize >= WRITE_AUD_ENCODE_NUM) {
                                    var audioEncbuffer = new Uint8Array(self.aAudioEncBuffer);
                                    self.downloadFile(audioEncbuffer, "Enc.AAC");
                                    self.aAudioEncBuffer.splice(0, self.aAudioEncBuffer.length);//清空PCM缓存
                                    self.bWriteAudEnc = false;
                                    self.iAudioEncBufferSize = 0;
                                    audioEncbuffer=null;
                                }
                                /********结束打印*****/
                            } else {
                                if (bJSPrintLog) {
                                    console.log(">>>JS MainThread-GetAudEncodeData 2 err");
                                }

                                //donoting
                            }
                            break;
                        default:
                            break;
                    }
                    //如果返回错误码该如何处理

                    // 回调方式返回错误码
                    if ("GetFrameData" !== typeName || "GetAudEncodeData" !== typeName) {
                        self.setCallBack(self, typeName, 0, self.convertErrorCode(eventData.errorCode), true);
                    } else {
                        if (PLAYM4_SYS_NOT_SUPPORT === eventData.errorCode || PLAYM4_FIRST_FRAME_NOT_ICURRENT === eventData.errorCode || PLAYM4_ITYPE_DECODE_ERROR === eventData.errorCode || PLAYM4_NOT_KEYFRAME === eventData.errorCode) {
                            self.setCallBack(self, typeName, 0, self.convertErrorCode(eventData.errorCode), true);
                        }
                    }
                };
            }
        };

        this.createWorker(that);

        // 视频渲染
        this.draw = function () {
            if (that.bPlay) {
                if (!that.bPause || that.bOnebyOne) {
                    // that.bPause:true 暂停
                    requestAnimationFrame(that.draw);

                    var iYUVNum = that.aVideoFrameBuffer.length;
                    if (that.YUVBufSizeCBFun != null) {
                        that.YUVBufSizeCBFun(iYUVNum);
                    }
                    if (that.bOnebyOne) {
                        // 缓存不够，通知上层开始送流
                        if (iYUVNum <= BUFFER_MINNUM_ONEBYONE) {
                            that.setCallBack(that, "OnebyOne", 0, PLAYM4_NEED_MORE_DATA, true);
                        }
                        if (iYUVNum <= that.FrameForwardLen + 1) {
                            that.setCallBack(that, "OnebyOne", 0, PLAYM4_NEED_MORE_DATA, true);
                            return;
                        } else {
                            var frameForwardLen = that.FrameForwardLen;
                            while (frameForwardLen > 1) {
                                var framevuffer = that.aVideoFrameBuffer.shift();
                                frameForwardLen--;
                            }
                        }
                        that.bOnebyOne = false;
                    }

                    if (bJSPrintLog) {
                        console.log(">>>JS Draw aVideoFrameBuffer.length == " + iYUVNum);
                    }

                    if (iYUVNum > that.YUVBufferSize) {
                        var oVideoFrameInfo = that.aVideoFrameBuffer.shift();
                        //判断是否为精确定位状态
                        if (that.SetPlayPositionFlag) {
                            if (bJSPrintLog) {
                                console.log(">>>JS SetPlayPositionFlag frameNumOrTime:" + that.iFrameNumOrTime + ",currentFrameNum:" + oVideoFrameInfo.frameNum);
                            }
                            if (oVideoFrameInfo.frameNum != that.iFrameNumOrTime) {
                                if (bJSPrintLog) {
                                    console.log(">>>JS frameNum!= frameNumOrTime:" + oVideoFrameInfo.frameNum);
                                }
                                return;
                            }
                            //定位后是否暂停
                            if (that.bSetPlayPositionType === SET_PLAY_POSITION_PAUSE) {
                                that.bPause = true;
                            }
                            that.SetPlayPositionFlag = false;
                        }
                        if (bJSPrintLog) {
                            console.log(">>>after display frameNum:" + oVideoFrameInfo.frameNum);
                        }
                        that.aDisplayBuf = oVideoFrameInfo.data;
                        var displayBuf = new Uint8Array(that.aDisplayBuf);
                       //  // //通过电子放大的方式，规避具有裁剪信息的码流的问题
                       //  if((that.nSPSCropLeft !== 0 || that.nSPSCropRight !== 0 )  && !that.bDisRect  )
                       //  {
                       //      var oRect = document.getElementById(that.sCanvasId).getBoundingClientRect();
                       //      var iCavWidth = 0;
                       //      var iCavHeight = 0;
						// 	iCavWidth = Math.floor(oRect.width * (that.nWidth-that.nSPSCropLeft-that.nSPSCropRight) /that.nWidth);
                       //      iCavHeight=oRect.height;
                       //      that.stDisRect =
                       //          {
                       //              "top": 0,
                       //              "left": 0,
                       //              "right": iCavWidth,
                       //              "bottom": iCavHeight
                       //          };
                       //      // 开启电子放大
                       //      that.oSuperRender.SR_SetDisplayRect(that.stDisRect);
                       //  }
                       //
                        if (bJSPrintLog) {
                            console.log(">>>JS SR_DisplayFrameData 1 nWidth:%d, nHeight:%d, nWidth1:%d, nHeight1:%d", oVideoFrameInfo.nWidth, oVideoFrameInfo.nHeight, that.nWidth, that.nHeight);
                        }
                        that.oSuperRender.SR_DisplayFrameData(oVideoFrameInfo.nWidth, oVideoFrameInfo.nHeight, displayBuf,oVideoFrameInfo.nWidth- that.nSPSCropLeft - that.nSPSCropRight,oVideoFrameInfo.nHeight- that.nSPSCropTop - that.nSPSCropBottom);

                        if (that.DisplayCallBackFun != null) {
                            if (bJSPrintLog) {
                                console.log(">>>JS MainThread-DisplayCallBackFun");
                            }
                            that.DisplayInfoYUV.height = oVideoFrameInfo.nHeight;
                            that.DisplayInfoYUV.width = oVideoFrameInfo.nWidth;
                            that.DisplayInfoYUV.frameNum = oVideoFrameInfo.frameNum;
                            that.DisplayInfoYUV.yuvData = new Uint8Array(displayBuf);
                            that.DisplayCallBackFun(that.DisplayInfoYUV)
                        }
                        if (bJSPrintLog && that.bOnebyOne) 
                        {
                            console.log("OneByOne frameNum:" + oVideoFrameInfo.frameNum);
                        }
                        if (bJSPrintLog) {
                            console.log(">>>JS SR_DisplayFrameData 2 nWidth:%d, nHeight:%d, nWidth1:%d, nHeight1:%d", oVideoFrameInfo.nWidth, oVideoFrameInfo.nHeight, that.nWidth, that.nHeight);
                        }
                        displayBuf = null;
                        // 当前OSD时间
                        that.szOSDTime = oVideoFrameInfo.osdTime;
                        oVideoFrameInfo = null;
                    } else {
                        that.setCallBack(that, "Play", 0, PLAYM4_NEED_MORE_DATA, true);
                    }
                }
            } else {
                if (!that.bPlay) {
                    if (bJSPrintLog) {
                        console.log(">>>JS mainThread stop play jsplaySDKInterface");
                    }

                    // 停止播放清空视频帧和音频帧数据缓存
                    that.aVideoFrameBuffer.splice(0, that.aVideoFrameBuffer.length);
                    that.aAudioBuffer.splice(0, that.aAudioBuffer.length);
                }
            }
        };

        // 判断码流音频格式是否支持
        this.checkAudioType = function (data) {
            // 4字节arrayBuffer数组中取整型数值
            var bytesToInt = function (src, offset) {
                var value = ((src[offset] & 0xFF)
                    | ((src[offset + 1] & 0xFF) << 8)
                    | ((src[offset + 2] & 0xFF) << 16)
                    | ((src[offset + 3] & 0xFF) << 24));
                return value;
            };

            var typeArray = [data[12], data[13], 0, 0];
            var nType = bytesToInt(typeArray, 0);

            switch (nType) {
                case AUDIO_TYPE.AUDIO_G711_A:
                case AUDIO_TYPE.AUDIO_G711_U:
                case AUDIO_TYPE.AUDIO_G722_1:
                case AUDIO_TYPE.AUDIO_G726_2:
                case AUDIO_TYPE.AUDIO_G726_A:
                case AUDIO_TYPE.AUDIO_G726_U:
                case AUDIO_TYPE.AUDIO_AACLC:
                case AUDIO_TYPE.AUDIO_MPEG:
                case AUDIO_TYPE.AUDIO_ADPCM:
                    return PLAYM4_OK;

                default:
                    return PLAYM4_SYS_NOT_SUPPORT;
            }
        };
    }

    /**
     * @synopsis 根据帧号进行精确定位
     * @param nFrameNum [IN] 定位帧号
     * @param playType [IN] 定位后是否继续播放。true为继续播放，false为暂停播放
     */
    PlayM4_SetCurrentFrameNum(nFrameNum, playType) {
        if (this.decodeWorker == null || this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }
        if (!this.bPlay) {
            return PLAYM4_ORDER_ERROR;
        }
        if (nFrameNum < 0) {
            return PLAYM4_PARA_OVER;
        }
        if (playType !== 0 && playType !== 1) {
            return PLAYM4_PARA_OVER;
        }
        return this.PlayM4_SetPlayPosition(0, nFrameNum, playType);
    }

    /**
     * @synopsis 精确定位
     * @param type [IN] 定位类型，0为帧号定位，1为时间戳定位
     * @param nFrameNumOrTime [IN] 帧号或时间戳
     * @param playType 1定位后暂停，0定位后继续播放
     * @returns 返回错误码
     */
    PlayM4_SetPlayPosition(type, nFrameNumOrTime, playType) {
        if (this.decodeWorker == null || this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }
        if (!this.bPlay) {
            return PLAYM4_ORDER_ERROR;
        }
        if (type !== 0 && type !== 1) {
            return PLAYM4_PARA_OVER;
        }
        if (nFrameNumOrTime < 0) {
            return PLAYM4_PARA_OVER;
        }
        if (playType !== 0 && playType !== 1) {
            return PLAYM4_PARA_OVER;
        }
        this.SetPlayPositionFlag = true;
        //通知worker线程
        this.iFrameNumOrTime = nFrameNumOrTime;
        this.bSetPlayPositionType = playType;
        this.decodeWorker.postMessage({'command': "SetPlayPosition", 'data': this.iFrameNumOrTime, 'type': type});
        // 清空缓存
        this.aAudioBuffer.splice(0, this.aAudioBuffer.length);//PCM buffer
        this.iAudioBufferSize = 0; //PCM Size
        this.aVideoFrameBuffer.splice(0, this.aVideoFrameBuffer.length);  //YUV所有信息
        this.aInputDataBuffer.splice(0, this.aInputDataBuffer.length); //输入数据buffer
        this.aInputDataLens.splice(0, this.aInputDataLens.length);//输入数据长度
        this.bIsFirstFrame = true;
        this.bIsInputBufOver = false;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 播放库打印日志开关
     * @param downloadFlag [IN] true为打开日志，false为关闭日志
     * @returns 返回错误码
     */
    PlayM4_OpenPlayerSDKPrintLog(downloadFlag) {
        if (downloadFlag === true) {
            bJSPrintLog = true;
            this.decodeWorker.postMessage({'command': "printLog", 'data': downloadFlag});
        } else {
            bJSPrintLog = false;
            this.decodeWorker.postMessage({'command': "printLog", 'data': downloadFlag});
        }
        return PLAYM4_OK;

    }

    /**
     * @synopsis 下载YUV数据开关
     */
    PlayM4_DownloadYUVdata() {
        this.bWriteYUVData = true;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 下载PCM数据开关
     */
    PlayM4_DownloadPCMdata() {
        this.bWritePCMData = true;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 设置解码回调
     * @param DecCBFun [IN] 解码回调函数
     * @returns 返回错误码
     */
    PlayM4_SetDecCallBack(DecCBFun) {
        if (bJSPrintLog) {
            console.log(">>>JS MainThread-PlayM4_SetDecCallBack");
        }

        if (DecCBFun && typeof (DecCBFun) === "function") {
            this.DecCallBackFun = DecCBFun;
            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 设置显示回调
     * @param DecCBFun [IN] 显示回调函数
     * @returns 返回错误码
     */
    PlayM4_SetDisplayCallBack(DisplayCBFun) {
        if (bJSPrintLog) {
            console.log(">>>JS MainThread-PlayM4_SetDisplayCallBack");
        }

        if (DisplayCBFun && typeof (DisplayCBFun) === "function") {
            this.DisplayCallBackFun = DisplayCBFun;
            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 设置音频PCM数据回调
     * @param DecCBFun [IN] 音频回调函数
     * @returns 返回错误码
     */
    PlayM4_SetPCMCallBack(PCMCBFun) {
        if (bJSPrintLog) {
            console.log(">>>JS MainThread-PlayM4_SetDisplayCallBack");
        }

        if (PCMCBFun && typeof (PCMCBFun) === "function") {
            this.PCMCallBackFun = PCMCBFun;
            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 设置开启流播放模式
     *
     * @param nMode [IN] 打开方式
     *
     * @returns 状态码
     */
    PlayM4_SetStreamOpenMode(nMode) {
        if (nMode == null || nMode === undefined) {
            return PLAYM4_PARA_OVER;
        }

        if (nMode !== STREAM_REALTIME && nMode !== STREAM_FILE) {
            return PLAYM4_PARA_OVER;
        }

        this.streamOpenMode = nMode;

        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_SetStreamOpenMode nMode:" + nMode);
        }
        return PLAYM4_OK;
    }
    PlayM4_DownloadRTPData(downloadFlag)
    {
        this.downloadRTP=downloadFlag;
    }
    /**
     * @synopsis 实时流、回放流时字节头开流
     *
     * @param pFileHeadBuf 文件头缓存数据
     * @param nSize 文件头缓存大小
     * @param nBufPoolSize 流缓存大小
     *
     * @returns 状态码
     */
    PlayM4_OpenStream(pFileHeadBuf, nSize, nBufPoolSize) {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_OpenStream 1 nSysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if(this.downloadRTP)
        {
            var apRTPHeadData = new Uint8Array(pFileHeadBuf.buffer);
            this.DownloadRTPData(apRTPHeadData);
            console.log("write 40 hik head");
        }

        if (pFileHeadBuf == null || nSize <= 0 || nBufPoolSize <= 0) {
            return PLAYM4_PARA_OVER;
        }

        // 单帧后恢复回放，清除状态值
        this.bPlay = false;
        this.bPause = false;
        this.bOnebyOne = false;
        this.bIsFirstFrame = true;
        this.bIsGetYUV = false;
        this.bIsInput = false;

        var nRet = this.checkAudioType(pFileHeadBuf);
        if (PLAYM4_OK !== nRet) {
            this.bAudioTypeSupport = false;
        } else {
            this.bAudioTypeSupport = true;
        }

        // 往 Worker 送数据
        this.decodeWorker.postMessage({'command': "SetStreamOpenMode", 'data': this.streamOpenMode});
        //this.decodeWorker.postMessage({'command':"OpenStream",'data':pFileHeadBuf,'dataSize':nSize,"bufferSize":nBufPoolSize});

        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_OpenStream 2 nSysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }

        // 往 Worker 送数据
        this.decodeWorker.postMessage({
            'command': "OpenStream",
            'data': pFileHeadBuf,
            'dataSize': nSize,
            'bufPoolSize': nBufPoolSize
        });

        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_OpenStream 3 nSysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }

        this.bOpenStream = true;
        return PLAYM4_OK;
    }
	

    /**
     * @synopsis 关闭流
     *
     * @returns 状态码
     */
    PlayM4_CloseStream() {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_CloseStream 1 nSysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }
        if (this.decodeWorker === null || this.bOpenStream === false) {
            return PLAYM4_ORDER_ERROR;
        }

        this.bOnlyPlaySound = false;

        this.PlayM4_Stop();

        // 往 Worker 送数据
        this.decodeWorker.postMessage({'command': "CloseStream"});

        if (this.oSuperRender !== null) {
            // 释放渲染资源
            this.oSuperRender.SR_Destroy();
            this.oSuperRender = null;
        }

        if (this.audioRenderer !== null) {
            // 释放渲染资源
            this.audioRenderer.Stop();
            this.audioRenderer = null;
        }

        // 清空缓存
        this.aAudioBuffer.splice(0, this.aAudioBuffer.length);
        this.aVideoFrameBuffer.splice(0, this.aVideoFrameBuffer.length);
        this.aInputDataBuffer.splice(0, this.aInputDataBuffer.length);
        this.aInputDataLens.splice(0, this.aInputDataLens.length);
        this.aAudioEncBuffer.splice(0, this.aAudioEncBuffer.length);
        this.aVideoYUVBuffer.splice(0, this.aVideoYUVBuffer.length);
        this.aAudioPCMBuffer.splice(0, this.aAudioPCMBuffer.length);
        this.aRawDataBuffer.splice(0, this.aRawDataBuffer.length);

        this.bOpenStream = false;
        this.iAudioBufferSize = 0;
        this.szOSDTime = null;

        return PLAYM4_OK;
    }

    /**
     * @synopsis 销毁，关闭worker
     *
     * @returns 状态码
     */
    PlayM4_Destroy() {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_Destroy 1 nSysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }

        if (this.decodeWorker === null) {
            return PLAYM4_OK;
        }

        this.PlayM4_CloseStream();


        this.decodeWorker.terminate();  // 停止 Worker 工作
        this.decodeWorker = null;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 实时流、回放流送数据
     *
     * @param dataBuf  [IN] 输入数据缓存
     * @param nSize [IN] 输入数据大小
     *
     * @returns 状态码
     */
    PlayM4_InputData(dataBuf, nSize) {
        //if (this.decodeWorker === null || this.bOpenStream === false) {
        //    return PLAYM4_ORDER_ERROR;
       // }
        var iInputBufLen = this.aInputDataBuffer.length;

        // 结束送流标识位[0x01, 0x02, 0x03, 0x04]
        if (nSize === 4) {
            var aBuf = new Uint8Array(dataBuf.buffer);
            if (aBuf[0] === 0x01 && aBuf[1] === 0x02 && aBuf[2] === 0x03 && aBuf[3] === 0x04) {
                if (bJSPrintLog) {
                    console.log(">>>JS PlaySDKInterface PlayM4_InputData:intput end");
                }


                if (this.bIsFirstFrame) {
                    if (bJSPrintLog) {
                        console.log(">>>JS inputData FirstTime");
                    }
                    // 直接往 Worker 送数据
                    this.inputDataFun();
                } else {
                    if (this.bIsGetYUV) {
                        this.inputDataFun();
                    } else {
                        this.bIsInput = true;
                    }
                }

                aBuf = null;
                return PLAYM4_OK;
            }
        }
        // 超出设置的缓存阈值，返回错误码（缓存溢出）
        if (iInputBufLen + nSize > this.iInputMaxBufSize) {
            console.log("input over");
            this.inputDataFun();
            return PLAYM4_BUF_OVER;
        }

        // 写入缓存，添加4字节头
        var tempBuf = null;
        var iDataLen = nSize;
        switch (this.streamOpenMode) {
            case STREAM_FILE:
                tempBuf = new Uint8Array(dataBuf.buffer);
                if(this.downloadRTP)
                {
                    this.DownloadRTPData(tempBuf);
                    this.rtpNum++;
                    console.log("STREAM_FILE psNUm:"+this.rtpNum);
                }
                this.aInputDataLens.push(nSize);
                break;

            case STREAM_REALTIME:
                // 加4字节长度信息
                iDataLen = nSize + 4;
                var a32 = new Uint32Array([nSize]);
                var a8 = new Uint8Array(a32.buffer);
                tempBuf = new Uint8Array(iDataLen);
                tempBuf.set(a8, 0);
                tempBuf.set(dataBuf, 4);
                if(this.downloadRTP)
                {
                    this.DownloadRTPData(tempBuf);
                    this.rtpNum++;
                    console.log("STREAM_REALTIME rtpNUm:"+this.rtpNum);
                }
                a32 = null;
                a8 = null;

                this.aInputDataLens.push(nSize + 4);
                break;

            default:
                return PLAYM4_SYS_NOT_SUPPORT;
        }

        for (var i = 0; i < iDataLen; i++) {
            this.aInputDataBuffer[iInputBufLen + i] = tempBuf[i];
        }
        if(!this.bPlay || this.decodeWorker === null || this.bOpenStream === false)
        {
            //console.log("inputdata this.bPlay:"+this.bPlay);
            return PLAYM4_OK;
        }
        tempBuf = null;
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_InputData 1： nSize:%d, iInputBufLen:%d, iInputMaxBufSize;%d", nSize, this.aInputDataBuffer.length, this.iInputMaxBufSize);
        }
        if (this.bOnlyPlaySound) {
            //直接送音频帧，一个RTP包一个音频帧
            if (bJSPrintLog) {
                console.log(">>>JS PlayM4_InputData: OnlyPlaySound");
            }
            this.inputDataFun();
        } else {

            if (this.bIsFirstFrame) {
                // 首帧直接往 Worker 送数据
                if (bJSPrintLog) {
                    console.log(">>>JS PlayM4_InputData is firstFrame");
                }
                this.inputDataFun();
            } else {
                if (this.bIsGetYUV) {
                    if (bJSPrintLog) {
                        console.log(">>>JS PlayM4_InputData is GetYUV");
                    }
                    this.inputDataFun();
                } else {
                    if (bJSPrintLog) {
                        console.log(">>>JS PlayM4_InputData 1-3 sysTime:" + (new Date().getMonth() + 1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
                    }
                    this.bIsInput = true;
                }
            }
        }

        return PLAYM4_OK;
    }

    DownloadRTPData(rtpData)
    {
        if (this.bWriteRTPData) {

            var bufferPackage = new Uint8Array(rtpData);
            var iIndexBuffer = this.aRTPDataBuffer.length;
            for (var i = 0, iLen = bufferPackage.length; i < iLen; i++) {
                this.aRTPDataBuffer[iIndexBuffer + i] = bufferPackage[i];
            }
            this.iRTPDataSize++;
            bufferPackage = null;
        }
        if (this.bWriteRTPData && this.iRTPDataSize >= WRITE_RTP_NUM) {
            console.log("download"+WRITE_RTP_NUM+"RTPdata");
            var RTPbuffer = new Uint8Array(this.aRTPDataBuffer);
            this.downloadFile(RTPbuffer, "RTP.data");
            this.aRTPDataBuffer.splice(0, this.aRTPDataBuffer.length);//清空YUV缓存
            this.bWriteRTPData = false;
            this.iRTPDataSize = 0;
            this.rtpNum=0;
            this.downloadRTP=false;
            RTPbuffer = null;
        }
    }
    /**
     * @synopsis 开启播放
     *
     * @param canvasID  [IN] 窗口id
     *
     * @returns 状态码
     */
    PlayM4_Play(canvasID) {

        if (this.decodeWorker === null) {
            return PLAYM4_ORDER_ERROR;
        }
        //canvasID传入为null，则表示只送入纯音频js播放库进行播放
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_Play canvasID: " + canvasID);
        }
        if (canvasID === null) {
            //console.log(">>>>>>>>> PlayM4_Play 2-1 nSysTime:" + (new Date().getMonth()+1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
            this.bOnlyPlaySound = true;
            //console.log("fzj---------------------------------true");
            this.sCanvasId = null;
        } else {
            if (typeof (canvasID) !== "string") {
                return PLAYM4_PARA_OVER;
            }

            if (this.bOnebyOne) {
                this.bPlayRateChange = false;
                this.bOnebyOne = false;
                this.bPause = false;
                this.draw();
            }
            
            if (this.bPlay) {
                return PLAYM4_OK;
            }

            // 创建视频渲染句柄
            if (this.oSuperRender == null) {
                this.oSuperRender = new SuperRender(canvasID, this.szBasePath);
                if (this.oSuperRender == null) {
                    return PLAYM4_CREATE_RENDERER_ERROR;
                }
            }

            this.sCanvasId = canvasID;

            // 初始化
            this.bPlay = true;
            this.bPause = false;
            this.bOnebyOne = false;

            // 关闭声音
            this.bPlaySound = false;
            this.bPlayRateChange = false;
            this.bOnlyPlaySound = false;
            this.draw();
            //console.log(">>>>>>>>> PlayM4_Play 2-2 nSysTime:" + (new Date().getMonth()+1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }

        // 创建音频渲染句柄
        if (this.audioRenderer == null) {
            this.audioRenderer = new AudioRenderer();
            if (this.audioRenderer == null) {
                return PLAYM4_CREATE_RENDERER_ERROR;
            }
        }
        //console.log(">>>>>>>>> PlayM4_Play 3 nSysTime:" + (new Date().getMonth()+1) + "-" + new Date().getDate() + " " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        return PLAYM4_OK;
    }

    /**
     * @synopsis 停止播放
     *
     * @returns 状态码
     */
    PlayM4_Stop() {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_Stop 1");
        }

        if (this.decodeWorker == null || this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (!this.bPlay) {
            return PLAYM4_ORDER_ERROR;
        }

        // 关闭声音
        if (this.bPlaySound) {
            this.PlayM4_StopSound();
            this.bPlaySound = true;
        }

        this.bPlay = false;
        this.bOnebyOne = false;
        this.bPause = false;

        // 关闭电子放大
        this.oSuperRender.SR_SetDisplayRect(null);
        this.iZoomNum = 0;
        this.bDisRect = false;

        // 画布置黑
        this.oSuperRender.SR_DisplayFrameData(this.nWidth, this.nHeight, null);
        return PLAYM4_OK;
    }

    /**
     * @synopsis 播放速率
     *
     * @param nPlayRate [IN] 倍率
     *
     * @returns 状态码
     */
    PlayM4_PlayRate(nPlayRate) {
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (nPlayRate === 1) {
            this.bPlayRateChange = false;
        } else {
            this.bPlayRateChange = true;
        }

        if (nPlayRate < 1) {
            nPlayRate = 1;
        }
        this.iInputDataLen = nPlayRate * BUFFER_INPUT_SIZE;

        return PLAYM4_OK;
    }

    /**
     * @synopsis 暂停播放
     *
     * @param pause [IN] 暂停/恢复标识
     *
     * @returns 状态码
     */
    PlayM4_Pause(pause) {
        if (this.decodeWorker == null || this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (!this.bPlay) {
            return PLAYM4_ORDER_ERROR;
        }

        if (this.bOnebyOne) {
            return PLAYM4_ORDER_ERROR;
        }

        if (typeof (pause) !== "boolean") {
            return PLAYM4_PARA_OVER;
        }

        this.bPause = pause;
        // this.bOnebyOne = false;
        // 下次直接从缓存读取数据
        this.bIsFirstFrame = true;
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_Pause:"+pause);
        }


        if (pause) {
            if (this.bPlaySound) {
                this.PlayM4_StopSound();
                this.bPlaySound = true;
            }
        } else {
            if (this.bPlaySound) {
                this.PlayM4_PlaySound();
            }

            this.draw();
        }
        return PLAYM4_OK;
    }

    /**
     * @synopsis 帧进
     *
     * @returns 状态码
     */
    PlayM4_OneByOne(stepLength) {
        if (this.decodeWorker == null || this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (!this.bPlay) {
            return PLAYM4_ORDER_ERROR;
        }
        if (stepLength > 10 || stepLength <= 0) {
            return PLAYM4_PARA_OVER;
        }
        if (!stepLength) {
            stepLength = 1;
        }
        this.iInputDataLen = BUFFER_INPUT_SIZE;
        this.FrameForwardLen = stepLength;
        this.bPause = true;
        this.bOnebyOne = true;
        //this.bPlaySound = false;  // 单帧模式下关闭声音
        //this.bPlayRateChange = true;
        this.bIsFirstFrame = true;
        this.draw();
        return PLAYM4_OK;
    }

    /**
     * @synopsis 开启声音
     *
     *  @param iWndNum [IN] 窗口号
     *
     * @returns 状态码
     */
    PlayM4_PlaySound(iWndNum) {
        if (this.decodeWorker === null || this.bOpenStream === false) {
            return PLAYM4_ORDER_ERROR;
        }

        // 判断音频格式是否支持，如果不支持返回状态码
        if (!this.bAudioTypeSupport) {
            return PLAYM4_SYS_NOT_SUPPORT;
        }

        // 最大支持16路
        if (iWndNum < 0 || iWndNum > 16) {
            return PLAYM4_PARA_OVER;
        }

        // 创建音频渲染句柄
        if (this.audioRenderer == null) {
            this.audioRenderer = new AudioRenderer();
            if (this.audioRenderer == null) {
                return PLAYM4_CREATE_RENDERER_ERROR;
            }
        }

        // 设置当前窗口号
        this.audioRenderer.SetWndNum(iWndNum);
        this.audioRenderer.oAudioContext.resume();
        this.bPlaySound = true;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 关闭声音
     *
     * @returns
     */
    PlayM4_StopSound() {
        if (this.decodeWorker == null || this.audioRenderer == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (!this.bPlaySound) {
            return PLAYM4_ORDER_ERROR;
        }

        this.bPlaySound = false;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 设置解码后缓存
     *
     * @param nNum [IN] 显示缓存节点数
     *
     * @returns 状态码
     */
    PlayM4_SetDisplayBuf(nNum) {
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (nNum <= 0) {
            return PLAYM4_PARA_OVER;
        }

        this.YUVBufferSize = nNum;
        return PLAYM4_OK;
    }

    /**
     * @synopsis 设置解密秘钥
     *
     * @param nKeyType [IN] 密钥类型
     * @param pSecretKey [IN] 密钥缓存
     * @param nKeyLen [IN] 密钥缓存大小
     *
     * @returns 状态码
     */
    PlayM4_SetSecretKey(nKeyType, pSecretKey, nKeyLen) {
        if (this.decodeWorker == null || this.bOpenStream === false) {
            return PLAYM4_ORDER_ERROR;
        }

        if (pSecretKey == null) {
            return PLAYM4_PARA_OVER;
        }

        if (SECRET_AES === nKeyType) {
            if (128 === nKeyLen) {
                if (pSecretKey == null || pSecretKey === undefined) {
                    return PLAYM4_PARA_OVER;
                }
            } else {
                return PLAYM4_PARA_OVER;
            }
        } else if (SECRET_NONE === nKeyType) {
        } else {
            return PLAYM4_PARA_OVER;
        }

        // 往 Worker 送数据
        this.decodeWorker.postMessage({
            'command': "SetSecretKey",
            'data': pSecretKey,
            'nKeyType': nKeyType,
            'nKeyLen': nKeyLen
        });

        return PLAYM4_OK;
    }

    /**
     * @synopsis 设置要解码的帧类型.默认正常解码，当前只支持全解和只解码I帧
     *
     * @param nFrameType [IN] 帧类型
     *
     * @returns 状态码
     */
    PlayM4_SetDecodeFrameType(nFrameType) {
        if (this.decodeWorker == null || this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (nFrameType !== DECODE_ALL && nFrameType !== DECODE_VIDEO_KEYFRAME) {
            return PLAYM4_PARA_OVER;
        }

        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_SetDecodeFrameType");
            console.log(nFrameType);
        }

        this.nDecFrameType = nFrameType;

        // 往 Worker 送数据
        this.decodeWorker.postMessage({'command': "SetDecodeFrameType", 'data': nFrameType});

        return PLAYM4_OK;
    }

    /**
     * @synopsis 设置跳I帧间隔(调用前需要设置 setDecodeFrameType(1)只解关键帧，否则返回错误码 2)
     *
     * @param nInterval [IN] 跳I帧间隔
     *
     * @returns 状态码
     */
    PlayM4_SetIFrameDecInterval(nInterval) {
        if (this.nDecFrameType !== DECODE_VIDEO_KEYFRAME) {
            return PLAYM4_ORDER_ERROR;
        }

        if (nInterval < 0) {
            return PLAYM4_PARA_OVER;
        }

        // 往 Worker 送数据
        this.decodeWorker.postMessage({'command': "SetIFrameDecInterval", 'data': nInterval});

        return PLAYM4_OK;
    }
	/**
     * @synopsis 设置跳帧模式
     *
     * @param nInterval [IN] 跳帧模式
     *
     * @returns 状态码
     */
    PlayM4_SetLostFrameMode(nLostMode) {

        if (nLostMode < 0 || nLostMode > 1) {
            return PLAYM4_PARA_OVER;
        }

        // 往 Worker 送数据
        this.decodeWorker.postMessage({'command': "SetLostFrameMode", 'data': nLostMode});

        return PLAYM4_OK;
    }
    /**
     * @synopsis 电子放大
     *
     * @param diplayRect [IN] 显示区域
     * @param bEnable [IN] 是否显示
     *
     * @returns 状态码
     */
    PlayM4_SetDisplayRegion(diplayRect, bEnable) {
        if (bJSPrintLog) {
            console.log("PlayM4_SetDisplayRegion ");
        }
        if (this.decodeWorker === null || this.bPlay === false || this.oSuperRender === null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (this.canvasId === null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (bEnable === true) {
            if (diplayRect === null || diplayRect === undefined) {
                if (bJSPrintLog) {
                    console.log("PlayM4_SetDisplayRegion: dipalyRect is null");
                }
                return PLAYM4_PARA_OVER;
            }

            // 判断放大区域参数
            if (typeof diplayRect.left === "number" &&
                typeof diplayRect.top === "number" &&
                typeof diplayRect.right === "number" &&
                typeof diplayRect.bottom === "number") {

                if (diplayRect.right < 0 ||
                    diplayRect.left < 0 ||
                    diplayRect.top < 0 ||
                    diplayRect.bottom < 0) {
                    if (bJSPrintLog) {
                        console.log("PlayM4_SetDisplayRegion: dipalyRect rectParameter is wrong");
                    }
                    return PLAYM4_PARA_OVER;
                }

                var iLeft = diplayRect.left;
                var iRight = diplayRect.right;
                var iTop = diplayRect.top;
                var iBottom = diplayRect.bottom;

                // 获取画布大小
                var oRect = document.getElementById(this.sCanvasId).getBoundingClientRect();
                this.iCanvasWidth = oRect.width;
                this.iCanvasHeight = oRect.height;

                /*区域宽高必须不小于16且不大于图像宽高*/
                /*modify.2018.7.6经过测试区域宽高可以大于分辨率*/
                if (iRight - iLeft < 16 || iBottom - iTop < 16 ||
                    iRight - iLeft > this.iCanvasWidth || iBottom - iTop > this.iCanvasHeight) {
                    return PLAYM4_PARA_OVER;
                }

                // 获取画布大小
                /*var oRect = document.getElementById(this.sCanvasId).getBoundingClientRect();
                this.iCanvasWidth = oRect.width;
                this.iCanvasHeight = oRect.height;*/

                if (this.iZoomNum !== 0) {
                    iLeft = Math.round(iLeft / this.iRatio_x) + this.stDisplayRect.left;
                    iTop = Math.round(iTop / this.iRatio_y) + this.stDisplayRect.top;
                    iRight = Math.round(iRight / this.iRatio_x) + this.stDisplayRect.left;
                    iBottom = Math.round(iBottom / this.iRatio_y) + this.stDisplayRect.top;
                }

                // 电子放大
                this.stDisplayRect = {
                    "top": iTop,
                    "left": iLeft,
                    "right": iRight,
                    "bottom": iBottom
                };

                // 开启电子放大
                this.oSuperRender.SR_SetDisplayRect(this.stDisplayRect);
                this.bDisRect = true;

                // 电子放大选择区域大小
                var nCropWidth = iRight - iLeft;
                var nCropHeight = iBottom - iTop;

                // 计算放大比率
                this.iRatio_x = this.iCanvasWidth / nCropWidth;
                this.iRatio_y = this.iCanvasHeight / nCropHeight;

                this.iZoomNum++;
            } else {
                return PLAYM4_PARA_OVER;
            }
        } else {
            // 关闭电子放大
            this.oSuperRender.SR_SetDisplayRect(null);
            this.iZoomNum = 0;
            this.bDisRect = false;
        }

        // 如果暂停、单帧、快慢放情况，电子放大后需要刷新一帧
        if (this.bPause || this.bOnebyOne || this.bPlayRateChange) {
            this.oSuperRender.SR_DisplayFrameData(this.nWidth, this.nHeight,
                (new Uint8Array(this.aDisplayBuf)));
        }

        return PLAYM4_OK;
    }

    /**
     * @synopsis 抓取BMP图
     *
     * @param callBack [IN] 数据回调函数
     *
     * @returns 状态码
     */
    PlayM4_GetBMP(callBack) {
        return this.getPic(callBack, "GetBMP");
    }

    /**
     * @synopsis 抓取JPEG图
     *
     * @param callBack [IN] 数据回调函数
     *
     * @returns 状态码
     */
    PlayM4_GetJPEG(callBack) {
        return this.getPic(callBack, "GetJPEG");
    }

    /**
     * @synopsis 设置音量
     *
     * @param volume [IN] 音量
     *
     * @returns 状态码
     */
    PlayM4_SetVolume(volume) {
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (this.audioRenderer == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (volume < 0 || volume > 100) {
            return PLAYM4_PARA_OVER;
        }

        this.audioRenderer.SetVolume(volume / 100);

        return PLAYM4_OK;
    }

    /**
     * @synopsis 获取音量
     *
     * @param callBack [IN] 音量回调函数
     *
     * @returns 状态码
     */
    PlayM4_GetVolume(callBack) {
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (this.audioRenderer == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (callBack && typeof (callBack) === "function") {
            var volume = this.audioRenderer.GetVolume();
            if (volume === null) {
                return PLAYM4_GET_VOLUME_ERROR;
            } else {
                callBack(Math.round(volume * 10) * 10);

                return PLAYM4_OK;
            }
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 获取OSD时间信息
     *
     * @param callBack [IN] 获取OSD时间信息回调函数
     *
     * @returns 状态码
     */
    PlayM4_GetOSDTime(callBack) {
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (!this.bPlay) {
            return PLAYM4_ORDER_ERROR;
        }

        if (callBack && typeof (callBack) === "function") {
            callBack(this.szOSDTime);

            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 当前页面状态
     *
     * @param visibility [IN] 页面状态
     *
     * @returns 状态码
     */
    PlayM4_IsVisible(visibility) {
        this.bVisibility = visibility;

        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_IsVisible visibility:" + visibility);
        }
        return PLAYM4_OK;
    }

    /**
     * @synopsis 获取SDK版本信息
     *
     * @returns 状态码
     */
    PlayM4_GetSdkVersion() {
        return "07020146";
    }

    /**
     * @synopsis 获取build日期
     *
     * @returns 状态码
     */
    PlayM4_GetBuildDate() {
        return "20211104";
    }

    /**
     * @synopsis 获取输入缓存大小
     *
     * @returns 返回输入缓存大小
     */
    PlayM4_GetInputBufSize() {
        return this.aInputDataBuffer.length;
    }

    /**
     * @synopsis 设置输入缓存大小
     *
     * @returns 设置输入缓存大小
     */
    PlayM4_SetInputBufSize(iInputBufSize) {
        if (iInputBufSize > 0) {
            this.iInputMaxBufSize = iInputBufSize;
            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 获取YUV缓存大小
     *
     * @returns 返回YUV缓存大小
     */
    PlayM4_GetYUVBufSize() {
        return this.aVideoFrameBuffer.length;
    }

    /**
     * @synopsis 获取一帧图像分辨率
     *
     * @param callBack [IN] 获取一帧图像分辨率回调函数
     *
     * @returns 状态码
     */
    PlayM4_GetFrameResolution(callBack) {
        if (this.decodeWorker == null) {
            return PLAYM4_ORDER_ERROR;
        }

        if (callBack && typeof (callBack) === "function") {
            callBack(this.nWidth, this.nHeight);

            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }


    /**
     * @synopsis 获取YUV缓存大小
     *
     * @returns 返回YUV缓存大小
     */
    PlayM4_RegisterYUVBufSizeCB(callback) {
        if (callback && typeof (callback) === "function") {
            this.YUVBufSizeCBFun = callback;
            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 注销YUV缓存大小回调
     *
     * @returns
     */
    PlayM4_UnRegisterYUVBufSizeCB() {
        if (this.YUVBufSizeCBFun != null) {
            this.YUVBufSizeCBFun = null;
        }

        return PLAYM4_OK;
    }

    /**
     * @synopsis 画布置透明
     *
     * @returns 状态码
     */
    PlayM4_ClearCanvas() {
        if (this.oSuperRender == null) {
            return PLAYM4_ORDER_ERROR;
        }

        // 画布置黑
        this.oSuperRender.SR_DisplayFrameData(this.nWidth, this.nHeight, null);

        return PLAYM4_OK;
    }

    /**
     * @synopsis 释放输入码流缓存
     *
     * @returns 状态码
     */
    PlayM4_ReleaseInputBuffer() {
        if (this.aInputDataBuffer === null) {
            return PLAYM4_ORDER_ERROR;
        }

        // 释放缓存
        this.aInputDataBuffer.splice(0, this.aInputDataBuffer.length);
        this.aInputDataLens.splice(0, this.aInputDataLens.length);

        return PLAYM4_OK;
    }

    /**
     * @synopsis 获取解码帧类型
     *
     * @returns 返回解码帧类型
     */
    PlayM4_GetDecodeFrameType() {
        return this.nDecFrameType;
    }

    /****************************************************JS播放库音频编码对外接口**************************************************************************/
    /**
     * @synopsis 根据传入类型,创建对应音频编码器
     *
     * @param nEncoderType [IN] 音频编码类型,当前只支持G系列(不包含G729和G722.1.c)
     *
     * @returns 错误码
     */
    PlayM4_CreateAudEncode(nEncoderType) {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_CreateAudEncode 1 nEncoderType:"+nEncoderType);
        }
        if (this.decodeWorker == null) {

            return PLAYM4_CALL_ORDER_ENCODER_ERROR;
        }

        if (nEncoderType < AUDIO_TYPE_G711A || nEncoderType > AUDIO_TYPE_AAC || nEncoderType===AUDIO_TYPE_MPEG2) {

            return PLAYM4_PARA_ENCODER_ERROR;
        }

        // 往 Worker 送数据
        this.decodeWorker.postMessage({'command': "CreateAudEncode", 'encodertype': nEncoderType});

        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_CreateAudEncode 2 nEncoderType:"+nEncoderType);
        }

        return PLAYM4_OK;
    }

    /**
     * @synopsis 设置音频编码参数
     *
     * @param1  nSampleRate [IN] 采样率 G711A/U 采样率固定位8K   G722.1采样率固定位16K(后续可扩展至24K、48K)  G726固定采样率为8K AAC固定采样率16K
     * @param2  nChannel    [IN] 通道数据固定位单通道1
     * @param3  nBitRate    [IN] 码率 G711A/U 固定64K  G722.1固定16K  G726固定16K AAC固定32K
     * @param4  nBitWidth   [IN] 位宽统一为16
     *
     * @returns 错误码
     */
    PlayM4_SetAudEncodeParam(nSampleRate, nChannel, nBitRate, nBitWidth) {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_SetAudEncodeParam 1 nSampleRate:"+nSampleRate+",nChannel:"+ nChannel+" ,nBitRate:"+nBitRate+" ,nBitWidth:"+ nBitWidth);
        }

        if (this.decodeWorker == null) {
            return PLAYM4_CALL_ORDER_ENCODER_ERROR;
        }

        if (nChannel != AUDIO_ENCODE_CHANEL_MONO || nBitWidth != AUDIO_ENCODE_16BIT_WIDTH) {
            return PLAYM4_PARA_ENCODER_ERROR;
        }

        this.decodeWorker.postMessage({
            'command': "SetAudEncodeParam",
            'samplerate': nSampleRate,
            'channel': nChannel,
            'bitrate': nBitRate,
            'bitwidth': nBitWidth
        });
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_SetAudEncodeParam 2 nSampleRate:"+nSampleRate+",nChannel:"+ nChannel+" ,nBitRate:"+nBitRate+" ,nBitWidth:"+ nBitWidth);
        }
        return PLAYM4_OK;
    }

    /**
     * @synopsis 输入待编码的音频PCM数据
     *
     * @param1  [IN] dataBuf    待编码的音频PCM数据
     * @param2  [IN] dataSize   待编码的音频PCM数据大小
     *
     * @returns
     */
    PlayM4_InputAudEncodeData(pAudDataBuf, nAudDataSize) {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_InputAudEncodeData 1 dataSize:"+nAudDataSize);
        }
        if (this.decodeWorker == null) {
            return PLAYM4_CALL_ORDER_ENCODER_ERROR;
        }
        if (bJSPrintLog)
        {
            console.log(">>>JS  PlayM4_InputAudEncodeData 2 dataSize:"+nAudDataSize+ ", nSysTime:" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds());
        }
        this.decodeWorker.postMessage({'command': "InputAudEncodeData", 'data': pAudDataBuf, 'dataSize': nAudDataSize});


        return PLAYM4_OK;
    }

    /**
     * @synopsis 销毁音频编码器
     *
     * @param  无
     *
     * @returns
     */
    PlayM4_DestroyAudEncode() {
        if (bJSPrintLog) {
            console.log(">>>JS MainThread-PlayM4_DestroyAudEncode 1 ");
        }

        if (this.decodeWorker == null) {
            return PLAYM4_CALL_ORDER_ENCODER_ERROR;
        }

        this.aAudioEncBuffer.splice(0, this.aAudioEncBuffer.length);
        this.iAudioEncBufferSize = 0;

        this.decodeWorker.postMessage({'command': "DestroyAudEncode"});

        return PLAYM4_OK;
    }

    /**
     * @synopsis 返回编码好的音频帧数据buffer
     *
     * @returns 返回编码好的音频帧数据buffer
     */
    PlayM4_GetAudioEmcBuf() {
        return this.aAudioEncBuffer;
    }

    /**
     * @synopsis 注册音频编码回调
     *
     * @returns 返回错误码
     */
    PlayM4_RegisterAudEncodeCB(callback) {
        if (bJSPrintLog) {
            console.log(">>>JS PlayM4_RegisterAudEncodeCB 1 callback:"+callback);
        }

        if (callback && typeof (callback) === "function") {
            this.AudEncodeDataCBFun = callback;
            if (bJSPrintLog) {
                console.log(">>>JS PlayM4_RegisterAudEncodeCB 2 callback:"+callback);
            }
            return PLAYM4_OK;
        } else {
            return PLAYM4_PARA_OVER;
        }
    }

    /**
     * @synopsis 下载文件
     *
     * @param {object} oData 数据 File对象或者Blob对象或者ArrayBuffer对象
     * @param {string} szName 下载文件名
     * @returns {none} 无返回
     */
    downloadFile(oData, szName) {
        let oBlob = oData;
        if (!(oData instanceof Blob || oData instanceof File)) {
            oBlob = new Blob([oData]);
        }
        var szFileUrl = window.URL.createObjectURL(oBlob);
        var oLink = window.document.createElement("a");
        oLink.href = szFileUrl;
        oLink.download = szName;

        var oClick = document.createEvent("MouseEvents");
        oClick.initEvent("click", true, true);
        oLink.dispatchEvent(oClick);
    }
}