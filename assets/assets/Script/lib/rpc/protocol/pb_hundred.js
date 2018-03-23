var extendsMethods = require('protocolMethodExtensions')

var hundred = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(hundred._instance == null){
                hundred._instance = new hundred();
            }
            return hundred._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/hundred.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
	},

});
