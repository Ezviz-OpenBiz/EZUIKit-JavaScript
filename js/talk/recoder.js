var audio_context;
var recorder;

function startUserMedia(stream) {
    var input = audio_context.createMediaStreamSource(stream);
    recorder = new Recorder(input);
}
function startRecording(button) {
    recorder && recorder.record();
    // button.disabled = true;
    // button.nextElementSibling.disabled = false;
}

function stopRecording(button) {
    recorder && recorder.stop();
    // button.disabled = true;
    // button.previousElementSibling.disabled = false;
    createAudioDom();

    recorder.clear();
}
function voiceInit() {
    console.log("run init")
    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;
      window.URL = window.URL || window.webkitURL;

      audio_context = new AudioContext;
     console.log('Audio context set up.');
     console.log('navigator.getUserMedia ' + (navigator.getUserMedia ? 'available.' : 'not present!'));
    } catch (e) {
        console.log("err",e)
      // layer.msg('No web audio support in this browser!');
    }

    navigator.getUserMedia({ audio: true }, startUserMedia, function (e) {
     console.log('No live audio input: ' + e);
    //  layer.msg('浏览器未找到麦克风');
    });
  };
  function createAudioDom(){
    // recorder && recorder.exportWAV(function (blob) {
    //     var url = URL.createObjectURL(blob);
    //     var au = document.createElement('audio');

    //     au.controls = true;
    //     au.src = url;
    //     document.body.appendChild(au);
    // });
  }

  function wavUpload() {
    try{
    recorder && recorder.stop();
    createAudioDom();

    recorder &&recorder.exportWAV(function (wav_file) {
      console.log("wav_file",wav_file);
      if(wav_file.size < 1000){
        layer.msg("录音失败，请重试");
        recodeTime = 0;
        return false;
      }
      var formdata = new FormData(); // form 表单 {key:value}
      formdata.append("voiceFile", wav_file); // form input type="file"
      formdata.append("accessToken", accessToken);
      formdata.append("deviceSerial", deviceSerial);
      formdata.append("channelNo", channelNo);
      padding = true;

      $.ajax({
        url: "/api/lapp/voice/sendonce",
        type: 'post',
        processData: false,
        contentType: false,
        data: formdata,
        dataType: 'json',
        success: function (data) {
          console.log(data);
          if(data.code == '200'){
          countTime('sub', recodeTime + 2); // 延时
          }else if(data.code == "111001"){
            return false;
          } else {
            if(recodeTime !== 0){ // 仅需提示过短外其他错误
              layer.msg(data.msg || '发送失败，请稍后再试')
            }
          }
          //ocument.getElementById("player").src = "/get_audio/" + data.filename;
          padding = false;
          recodeTime = 0;
        },
        error: function(err){
          console.log("err",err);
          padding = false;
          recodeTime = 0;
          layer.msg("网络异常，请稍后再试");
        }
      })
    });
    recorder && recorder.clear();
  }catch(err){
    console.log(err);
  }
  }
