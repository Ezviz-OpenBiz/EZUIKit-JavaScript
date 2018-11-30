(function(){
    'use strict';

    var  samplesMono;

    var floatTo16BitPCM = function(input, output){
        for(var i = 0; i < input.length; i++){
            var s = Math.max(-1, Math.min(1, input[i]));
            output[i] = (s < 0 ? s * 0x8000 : s * 0x7FFF);
        }
    };

    var convertBuffer = function(arrayBuffer){
        var data = new Float32Array(arrayBuffer);
        var out = new Int16Array(arrayBuffer.length);
        floatTo16BitPCM(data, out);
        return out;
    };

    var encode = function(arrayBuffer){
        samplesMono = convertBuffer(arrayBuffer);
        self.postMessage({
            cmd: 'pcm',
            buf: samplesMono
        });
    };

  self.onmessage = function(e){
    switch(e.data.cmd){
      case 'encode':
        encode(e.data.buf);
        break;
    }
  };
})();
