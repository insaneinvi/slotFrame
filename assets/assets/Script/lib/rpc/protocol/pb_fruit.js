var extendsMethods = require('protocolMethodExtensions')

var fruit = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(fruit._instance == null){
                fruit._instance = new fruit();
            }
            return fruit._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/fruit.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
	},

});
