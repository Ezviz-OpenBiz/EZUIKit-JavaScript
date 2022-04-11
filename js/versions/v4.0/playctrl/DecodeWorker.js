/**
 * Created by wangweijie5 on 2016/12/5.
 */
(function (event) {
    const AUDIO_TYPE = 0;	// 音频
    const VIDEO_TYPE = 1;   // 视频
    const PRIVT_TYPE = 2;  // 私有帧

    const PLAYM4_AUDIO_FRAME = 100; // 音频帧
    const PLAYM4_VIDEO_FRAME = 101; // 视频帧

    const PLAYM4_OK = 1;
    const PLAYM4_DECODE_ERROR = 44 	// 解码失败
    const PLAYM4_NOT_KEYFRAME = 48; 	// 非关键帧
    const PLAYM4_NEED_MORE_DATA = 31;   // 需要更多数据才能解析
    const PLAYM4_SYS_NOT_SUPPORT = 16; 	// 不支持

    const PLAYM4_PARA_ENCODER_ERROR                     = 71;  //音频编码参数错误
    const PLAYM4_PRECONDITION_ENCODER_ERROR             = 72;  //不满足音频编码条件错误
    const PLAYM4_ENCODER_ERROR                          = 73;  //音频编码失败
    const PLAYM4_CREATE_ENCODER_ERROR                   = 74;  //创建音频编码器失败
    const PLAYM4_NOSUPPORT_ENCODER_ERROR                = 75;  //音频编码不支持
    const PLAYM4_ALLOC_MEMORY_ENCODER_ERROR	            = 76;  //音频编码相关内存申请失败
    const PLAYM4_BUF_OVER_ENCODER_ERROR                 = 77;  //音频编码相关buffer满
    const PLAYM4_NEED_MORE_DATA_ENCODER_ERROR           = 78;  //音频编码需要更多数据进行编码
    const PLAYM4_CALL_ORDER_ENCODER_ERROR               = 79;  //音频编码调用顺序错误

    const PLAYM4_ITYPE_DECODE_ERROR                     =100;   //定位后送进来的第一帧I帧解码失败
    const PLAYM4_FIRST_FRAME_NOT_ICURRENT               =101;   //定位后送进来的第一帧不是定位帧所在的I帧（Ni>Mp）


    importScripts('Decoder.js');
    Module.addOnPostRun(function () {
        postMessage({'function': "loaded"});
    });

    var iStreamMode = 0;  // 流模式

    var bOpenMode = false;
    var bOpenStream = false;
    
    var funGetFrameData = null;
    var funGetAudFrameData = null;
	
	var bWorkerPrintLog=false;//worker层log开关

    onmessage = function (event)
    {
        var eventData = event.data;
        var res = 0;
        switch (eventData.command)
        {
			case "printLog":
			    let downloadFlag=eventData.data;
			    if(downloadFlag===true)
                {
                    bWorkerPrintLog=true;
                    res = Module._SetPrintLogFlag(downloadFlag);
                }
			    else
                {
                    bWorkerPrintLog=false;
                    res = Module._SetPrintLogFlag(downloadFlag);
                }

				if (res !== PLAYM4_OK)
                {
					console.log("DecodeWorker.js: PlayerSDK print log failed,res"+res);
                    postMessage({'function': "printLog", 'errorCode': res});
                }
				break;
            case "SetPlayPosition":
                let nFrameNumOrTime=eventData.data;
                let enPosType=eventData.type;
                res = Module._SetPlayPosition(nFrameNumOrTime,enPosType);
                if (res !== PLAYM4_OK)
                {
                    postMessage({'function': "SetPlayPosition", 'errorCode': res});
                    return;
                }
                //有没有buffer需要清除

                break;
            case "SetStreamOpenMode":
                iStreamMode = eventData.data;
                res = Module._SetStreamOpenMode(iStreamMode);
                if (res !== PLAYM4_OK)
                {
                    postMessage({'function': "SetStreamOpenMode", 'errorCode': res});
                    return;
                }
                bOpenMode = true;
                break;

            case "OpenStream":
                // 接收到的数据
                var iHeadLen = eventData.dataSize;
                var pHead = Module._malloc(iHeadLen + 4);
                if (pHead === null)
                {
                    return;
                }
                var aHead = Module.HEAPU8.subarray(pHead, pHead + iHeadLen);
                aHead.set(eventData.data);
                res = Module._OpenStream(pHead, iHeadLen, eventData.bufPoolSize);
                postMessage({'function': "OpenStream", 'errorCode': res});
                if (res !== PLAYM4_OK)
                {
                    //释放内存
                    Module._free(pHead);
                    pHead = null;
                    return;
                }
                bOpenStream = true;

                // 加4字节长度信息
                var a32 = new Uint32Array([iHeadLen]);
                var a8 = new Uint8Array(a32.buffer);
                var tempBuf = new Uint8Array(iHeadLen + 4);
                tempBuf.set(a8, 0);
                tempBuf.set(eventData.data, 4);
                a32 = null;
                a8 = null;

                aHead = Module.HEAPU8.subarray(pHead, pHead + iHeadLen + 4);
                aHead.set(tempBuf);
                tempBuf = null;

                res = Module._InputData(pHead, iHeadLen + 4);
                if (res !== PLAYM4_OK)
                {
                    postMessage({'function': "InputData", 'errorCode': res});
                    Module._free(pHead);
                    pHead = null;
                    return;
                }

                // 释放内存
                Module._free(pHead);
                pHead = null;

                if (funGetFrameData === null) {
                    funGetFrameData = Module.cwrap('GetFrameData', 'number');
                }

                if (iStreamMode === 0) {
                    // Module._GetFrameData();
                    funGetFrameData();
                }
                break;

            case "InputData":
                // 接收到的数据
                var iLen = eventData.dataSize;
                if(bWorkerPrintLog)
                {
                    console.log("<<<Worker: DecodeWorker-InputData iLen:"+iLen);
                }
                
                if (iLen > 0)
                {
                    var pInputData = Module._malloc(iLen);
                    if (pInputData === null)
                    {
                        return;
                    }
                    var inputData = new Uint8Array(eventData.data);
                    // var aInputData = Module.HEAPU8.subarray(pInputData, pInputData + iLen);
                    // aInputData.set(inputData);
                    Module.writeArrayToMemory(inputData, pInputData);
                    inputData = null;
                    res = Module._InputData(pInputData, iLen);
                    //console.log("DecodeWorker-InputData-ret:%d", res);
					if(bWorkerPrintLog)
					{
						console.log("<<<Worker:InputData result:"+ +res);
					}
					
                    if (res !== PLAYM4_OK)
                    {
                        if (res === 98)
                        {
                            res = 1;
                        }
                        postMessage({'function': "InputData", 'errorCode': res});
                    }
                    Module._free(pInputData);
                    pInputData = null;
                }

                /////////////////////
                if (funGetFrameData === null)
                {
                    funGetFrameData = Module.cwrap('GetFrameData', 'number');
                }

                while (bOpenMode && bOpenStream)
                {
                    
                    var ret = getFrameData(funGetFrameData);
                    // 直到获取视频帧或数据不足为止
                    if (PLAYM4_VIDEO_FRAME === ret || PLAYM4_NEED_MORE_DATA === ret)
                    {
                        break;
                    }
                }
                break;

            case "SetSecretKey":
                var keyLen = eventData.nKeyLen;
                var pKeyData = Module._malloc(keyLen);
                if (pKeyData === null) {
                    return;
                }
                var nKeySize = eventData.data.length
                var bufData = stringToBytes (eventData.data);
                var aKeyData = Module.HEAPU8.subarray(pKeyData, pKeyData + keyLen);
                aKeyData.set(new Uint8Array(bufData));

                res = Module._SetSecretKey(eventData.nKeyType, pKeyData, keyLen, nKeySize);
                if (res !== PLAYM4_OK) {
                    postMessage({'function': "SetSecretKey", 'errorCode': res});
                    Module._free(pKeyData);
                    pKeyData = null;
                    return;
                }

                Module._free(pKeyData);
                pKeyData = null;
                break;

            case "GetBMP":
                var nBMPWidth = eventData.width;
                var nBMPHeight = eventData.height;
                var pYUVData = eventData.data;
                var nYUVSize = nBMPWidth * nBMPHeight * 3 / 2;
                var oBMPCropRect = eventData.rect;

                var pDataYUV = Module._malloc(nYUVSize);
                if (pDataYUV === null) {
                    return;
                }

                Module.writeArrayToMemory(new Uint8Array(pYUVData, 0, nYUVSize), pDataYUV);

                // 分配BMP空间
                var nBmpSize = nBMPWidth * nBMPHeight * 4 + 60;
                var pBmpData = Module._malloc(nBmpSize);
                var pBmpSize = Module._malloc(4);
                if (pBmpData === null || pBmpSize === null) {
                    Module._free(pDataYUV);
                    pDataYUV = null;

                    if (pBmpData != null) {
                        Module._free(pBmpData);
                        pBmpData = null;
                    }

                    if (pBmpSize != null) {
                        Module._free(pBmpSize);
                        pBmpSize = null;
                    }
                    return;
                }

               //Module._memset(pBmpSize, nBmpSize, 4); // 防止bmp截图出现输入数据过大的错误码
                Module.setValue(pBmpSize, nBmpSize, "i32"); 
                res = Module._GetBMP(pDataYUV, nYUVSize, pBmpData, pBmpSize,
                    oBMPCropRect.left, oBMPCropRect.top, oBMPCropRect.right, oBMPCropRect.bottom);
                if (res !== PLAYM4_OK) {
                    postMessage({'function': "GetBMP", 'errorCode': res});
                    Module._free(pDataYUV);
                    pDataYUV = null;
                    Module._free(pBmpData);
                    pBmpData = null;
                    Module._free(pBmpSize);
                    pBmpSize = null;
                    return;
                }

                // 获取BMP图片大小
                var nBmpDataSize = Module.getValue(pBmpSize, "i32");

                // 获取BMP图片数据
                var aBmpData = new Uint8Array(nBmpDataSize);
                aBmpData.set(Module.HEAPU8.subarray(pBmpData, pBmpData + nBmpDataSize));

                postMessage({'function': "GetBMP", 'data': aBmpData, 'errorCode': res}, [aBmpData.buffer]);
                aBmpData=null;
                if (pDataYUV != null) {
                    Module._free(pDataYUV);
                    pDataYUV = null;
                }
                if (pBmpData != null) {
                    Module._free(pBmpData);
                    pBmpData = null;
                }
                if (pBmpSize != null) {
                    Module._free(pBmpSize);
                    pBmpSize = null;
                }
                break;

            case "GetJPEG":
                var nJpegWidth = eventData.width;
                var nJpegHeight = eventData.height;
                var pYUVData1 = eventData.data;
                var nYUVSize1 = nJpegWidth * nJpegHeight * 3 / 2;
                var oJpegCropRect = eventData.rect;

                var pDataYUV1 = Module._malloc(nYUVSize1);
                if (pDataYUV1 === null) {
                    return;
                }

                Module.writeArrayToMemory(new Uint8Array(pYUVData1, 0, nYUVSize1), pDataYUV1);

                // 分配JPEG空间
                var pJpegData = Module._malloc(nYUVSize1);
                var pJpegSize = Module._malloc(4);
                if (pJpegData === null || pJpegSize === null) {
                    if (pJpegData != null) {
                        Module._free(pJpegData);
                        pJpegData = null;
                    }

                    if (pJpegSize != null) {
                        Module._free(pJpegSize);
                        pJpegSize = null;
                    }

                    if (pDataYUV1 != null) {
                        Module._free(pDataYUV1);
                        pDataYUV1 = null;
                    }
                    return;
                }

                Module.setValue(pJpegSize, nJpegWidth * nJpegHeight * 2, "i32");    // JPEG抓图，输入缓冲长度不小于当前帧YUV大小

                res = Module._GetJPEG(pDataYUV1, nYUVSize1, pJpegData, pJpegSize,
                    oJpegCropRect.left, oJpegCropRect.top, oJpegCropRect.right, oJpegCropRect.bottom);
                if (res !== PLAYM4_OK) {
                    postMessage({'function': "GetJPEG", 'errorCode': res});
                    if (pJpegData != null) {
                        Module._free(pJpegData);
                        pJpegData = null;
                    }

                    if (pJpegSize != null) {
                        Module._free(pJpegSize);
                        pJpegSize = null;
                    }

                    if (pDataYUV1 != null) {
                        Module._free(pDataYUV1);
                        pDataYUV1 = null;
                    }
                    return;
                }

                // 获取JPEG图片大小
                var nJpegSize = Module.getValue(pJpegSize, "i32");

                // 获取JPEG图片数据
                var aJpegData = new Uint8Array(nJpegSize);
                aJpegData.set(Module.HEAPU8.subarray(pJpegData, pJpegData + nJpegSize));

                postMessage({'function': "GetJPEG", 'data': aJpegData, 'errorCode': res}, [aJpegData.buffer]);

                nJpegSize = null;
                aJpegData = null;

                if (pDataYUV1 != null) {
                    Module._free(pDataYUV1);
                    pDataYUV1 = null;
                }
                if (pJpegData != null) {
                    Module._free(pJpegData);
                    pJpegData = null;
                }
                if (pJpegSize != null) {
                    Module._free(pJpegSize);
                    pJpegSize = null;
                }
                break;

            case "SetDecodeFrameType":
                var nFrameType = eventData.data;
                res = Module._SetDecodeFrameType(nFrameType);
                if (res !== PLAYM4_OK) {
                    postMessage({'function': "SetDecodeFrameType", 'errorCode': res});
                    return;
                }
                break;

            case "DisplayRegion":
                var nRegionNum = eventData.nRegionNum;
                var srcRect = eventData.srcRect;
                var hDestWnd = eventData.hDestWnd;
                var bEnable = eventData.bEnable;

                res = Module._SetDisplayRegion(nRegionNum, srcRect, hDestWnd, bEnable);
                if (res !== PLAYM4_OK) {
                    postMessage({'function': "DisplayRegion", 'errorCode': res});
                    return;
                }
                break;

            case "CloseStream":
                res = Module._CloseStream();
                if (res !== PLAYM4_OK) {
                    postMessage({'function': "CloseStream", 'errorCode': res});
                    return;
                }
                break;

            case "SetIFrameDecInterval":
                Module._SetIFrameDecInterval(eventData.data);
                break;
			case "SetLostFrameMode":
			    Module._SetLostFrameMode(eventData.data);
				break;
			
                /*******************************************worker音频编码相关接口实现**********************************************************/
            case "CreateAudEncode":
			
                res = Module._CreateAudEncode(eventData.encodertype);
                
                postMessage({'function':"CreateAudEncode",'errorCode':res});
                break;
            case "SetAudEncodeParam":
                
                res = Module._SetAudEncodeParam(eventData.samplerate, eventData.channel, eventData.bitrate, eventData.bitwidth);
			
                postMessage({'function':"SetAudEncodeParam",'errorCode':res});
                break;
            case "DestroyAudEncode":
               
                res = Module._DestroyAudEncode();
                
                postMessage({'function':"DestroyAudEncode",'errorCode':res});
                break;
            case "InputAudEncodeData":
			    if(bWorkerPrintLog)
				{
					console.log("<<<Worker: 20200113 DecodeWorker-InputAudEncodeData 1");
				}
                
                var iLen = eventData.dataSize;
                if(iLen > 0)
                {
                    
                    var pAudInputData = Module._malloc(iLen);
                    if (pAudInputData === null)
                    {
                        return;
                    }
                    var audinputData = new Uint8Array(eventData.data);
                    Module.writeArrayToMemory(audinputData, pAudInputData);
                    audinputData = null;
                    res = Module._InputAudEncodeData(pAudInputData, iLen);
					if(bWorkerPrintLog)
					{
						console.log("<<<Worker: 20200113 DecodeWorker-InputAudEncodeData 2 res:"+res);
					}
                    
                    if(res == PLAYM4_OK)  //接口返回成功，表明已编码好一帧音频数据
                    {
                        
                        if (funGetAudFrameData === null)
                        {
                            funGetAudFrameData = Module.cwrap('GetAudFrameData', 'number');
                        }
                        if(bWorkerPrintLog)
						{
							console.log("<<<Worker: 20200113 DecodeWorker-InputAudEncodeData 2-1 succ");
						}
                        //调用C++ GetAudFrameData
                        var ret = getAudFrameData(funGetAudFrameData);
                    }
                    Module._free(pAudInputData);
                    pAudInputData = null;
                }
                break;
            default:
                break;
        }
    };

    function getOSDTime(oFrameInfo) {
        var iYear = oFrameInfo.year;
        var iMonth = oFrameInfo.month;
        var iDay = oFrameInfo.day;
        var iHour = oFrameInfo.hour;
        var iMinute = oFrameInfo.minute;
        var iSecond = oFrameInfo.second;

        if (iMonth < 10) {
            iMonth = "0" + iMonth;
        }
        if (iDay < 10) {
            iDay = "0" + iDay;
        }
        if (iHour < 10) {
            iHour = "0" + iHour;
        }
        if (iMinute < 10) {
            iMinute = "0" + iMinute;
        }
        if (iSecond < 10) {
            iSecond = "0" + iSecond;
        }

        return iYear + "-" + iMonth + "-" + iDay + " " + iHour + ":" + iMinute + ":" + iSecond;
    }

    function getAudFrameData(fun)
    {
		if(bWorkerPrintLog)
		{
			console.log("<<<Worker: DecodeWorker-getAudFrameData 1");
		}
    
        var res = fun(); // 调用C++GetAudFrameData函数
        if(res === PLAYM4_OK)
        {
            var oFrameInfo = Module._GetAudFrameInfo();
            var iSize = oFrameInfo.frameSize;
            if (0 === iSize)
            {
                return null;
            }

            var pEncodeAud = Module._GetAudFrameBuffer();
            if(pEncodeAud == null)
            {
                return null;
            }
            var aEncodeAudData = new Uint8Array(iSize);
            aEncodeAudData.set(Module.HEAPU8.subarray(pEncodeAud, pEncodeAud + iSize));
			if(bWorkerPrintLog)
			{
				console.log("<<<Worker: DecodeWorker-getAudFrameData 2");
			}
            
            //获取到音频编码帧数据通过worker返回
            postMessage({'function':"GetAudEncodeData",'data':aEncodeAudData.buffer,'dataSize':iSize, 'errorCode': res});
        }
        else
        {
            postMessage({'function':"GetAudEncodeData",'data':null,'dataSize':-1, 'errorCode': res});
        }
        oFrameInfo=null;
        pEncodeAud=null;
        aEncodeAudData=null;
        return res;
    }

    // 获取帧数据
    function getFrameData(fun)
    {
    // function getFrameData() {
        // 获取帧数据
        // var res = Module._GetFrameData();
        var res = fun();
        if(bWorkerPrintLog)
        {
            console.log("<<<Worker: getFrameData Result:"+res);
        }

        if (res === PLAYM4_OK)
        {
            var oFrameInfo = Module._GetFrameInfo();
            switch (oFrameInfo.frameType)
            {
                case AUDIO_TYPE:
                    var iSize = oFrameInfo.frameSize;
                    if (0 === iSize)
                    {
                        return -1;
                    }
                    var pPCM = Module._GetFrameBuffer();
                    // var audioBuf = new ArrayBuffer(iSize);
                    var aPCMData = new Uint8Array(iSize);
                    aPCMData.set(Module.HEAPU8.subarray(pPCM, pPCM + iSize));
                    if(bWorkerPrintLog)
                    {
                        console.log("<<<Worker: audio media Info: nSise:"+ oFrameInfo.frameSize+",nSampleRate:"+oFrameInfo.samplesPerSec+',channel:'+oFrameInfo.channels+',bitsPerSample:'+oFrameInfo.bitsPerSample);
                    }
                    postMessage({
                        'function': "GetFrameData", 'type': "audioType", 'data': aPCMData.buffer,
                        'frameInfo': oFrameInfo, 'errorCode': res
                    }, [aPCMData.buffer]);

                    oFrameInfo = null;
                    pPCM = null;
                    aPCMData = null;
                    return PLAYM4_AUDIO_FRAME;

                case VIDEO_TYPE:
                    var szOSDTime = getOSDTime(oFrameInfo);

                    var iWidth = oFrameInfo.width;
                    var iHeight = oFrameInfo.height;

                    var iYUVSize = iWidth * iHeight * 3 / 2;
                    if (0 === iYUVSize)
                    {
                        return -1;
                    }

                    var pYUV = Module._GetFrameBuffer();

                    // 图像数据渲染后压回，若从主码流切到子码流，存在数组大小与图像大小不匹配现象
                    var aYUVData = new Uint8Array(iYUVSize);
                    aYUVData.set(Module.HEAPU8.subarray(pYUV, pYUV + iYUVSize));
                    if(bWorkerPrintLog)
                    {
                        console.log("<<<Worker: InputData-getFrameData Video: Width:"+ oFrameInfo.width+",Height:"+oFrameInfo.height+",timeStamp:"+oFrameInfo.timeStamp);
                    }

                    postMessage({
                      'function': "GetFrameData", 'type': "videoType", 'data': aYUVData.buffer,
                   'dataLen': aYUVData.length,'osd': szOSDTime, 'frameInfo': oFrameInfo, 'errorCode': res
                    }, [aYUVData.buffer]);

                    oFrameInfo = null;
                    pYUV = null;
                    aYUVData = null;
                    return PLAYM4_VIDEO_FRAME;

                case PRIVT_TYPE:
                    postMessage({
                        'function': "GetFrameData", 'type': "", 'data': null,
                        'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': PLAYM4_SYS_NOT_SUPPORT
                    });
                    return PLAYM4_SYS_NOT_SUPPORT;

                default:
                    postMessage({
                        'function': "GetFrameData", 'type': "", 'data': null,
                        'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': PLAYM4_SYS_NOT_SUPPORT
                    });
                    return PLAYM4_SYS_NOT_SUPPORT;
            }
        }
        else {
            //解码失败返回裸数据
            if(PLAYM4_DECODE_ERROR===res)
            {
                var rawInfo=Module._GetRawDataInfo();
                var pRawData = Module._GetRawDataBuffer();
                var aRawData = new Uint8Array(rawInfo.isize);
                aRawData.set(Module.HEAPU8.subarray(pRawData, pRawData + rawInfo.isize));
                postMessage({
                    'function': "GetRawData", 'type': "", 'data':aRawData.buffer,
                    'rawDataLen': rawInfo.isize, 'osd': 0, 'frameInfo': null, 'errorCode': res
                });
                rawInfo=null;
                pRawData=null;
                aRawData=null;
            }
            //定位返回的错误
            if(PLAYM4_FIRST_FRAME_NOT_ICURRENT===res|| PLAYM4_ITYPE_DECODE_ERROR===res)
            {
                postMessage({
                    'function': "GetFrameData", 'type': "", 'data': null,
                    'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': res
                });
            }
            //需要更多数据
            if (PLAYM4_NEED_MORE_DATA === res || PLAYM4_SYS_NOT_SUPPORT === res || PLAYM4_NOT_KEYFRAME === res){
                postMessage({
                    'function': "GetFrameData", 'type': "", 'data': null,
                    'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': res
                });
            }
            return res;
        }
    }

    // 开始计算时间
    function startTime() {
        return new Date().getTime();
    }

    // 结束计算时间
    function endTime() {
        return new Date().getTime();
    }

    // 字母字符串转byte数组
    function stringToBytes ( str ) {
        var ch, st, re = [];
        for (var i = 0; i < str.length; i++ ) {
            ch = str.charCodeAt(i);  // get char
            st = [];                 // set up "stack"
            do {
                st.push( ch & 0xFF );  // push byte to stack
                ch = ch >> 8;          // shift value down by 1 byte
            }
            while ( ch );
            // add stack contents to result
            // done because chars have "wrong" endianness
            re = re.concat( st.reverse() );
        }
        // return an array of bytes
        return re;
    }
})();