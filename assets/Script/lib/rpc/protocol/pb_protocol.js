var extendsMethods = require('protocolMethodExtensions')

var protocol = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(protocol._instance == null){
                protocol._instance = new protocol();
            }
            return protocol._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/protocol.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    		Void:null,
		Request:null,
		Packet:null,
		Warning:null,
		Error:null,
		Heartbeat:null,
		PacketType:null,
		Response:null,
	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
            this.Void = pr.root.lookup("Void");
            this._protocolMethodExtend(this.Void);
        
            this.Request = pr.root.lookup("Request");
            this._protocolMethodExtend(this.Request);
        
            this.Packet = pr.root.lookup("Packet");
            this._protocolMethodExtend(this.Packet);
        
            this.Warning = pr.root.lookup("Warning");
            this._protocolMethodExtend(this.Warning);
        
            this.Error = pr.root.lookup("Error");
            this._protocolMethodExtend(this.Error);
        
            this.Heartbeat = pr.root.lookup("Heartbeat");
            this._protocolMethodExtend(this.Heartbeat);
        
            this.PacketType = pr.root.lookup("PacketType");
            this._protocolMethodExtend(this.PacketType);
        
            this.Response = pr.root.lookup("Response");
            this._protocolMethodExtend(this.Response);
        
	},

});
