var extendsMethods = require('protocolMethodExtensions')

var game = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(game._instance == null){
                game._instance = new game();
            }
            return game._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/game.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    		UpdateCurrencyRequest:null,
		PeerTextChatMessage:null,
		KickSeatResponse:null,
		AcceptFriendRequest:null,
		ThrowFlyKissResponse:null,
		TextChatRequest:null,
		PlayerLogonElse:null,
		HitLine:null,
		PeerThrowEgg:null,
		FeatureResult:null,
		EnterGameRequest:null,
		MakeFriendRequest:null,
		VoiceChatResponse:null,
		EnterGameResponse:null,
		GameResult:null,
		InnerTest:null,
		ThrowFlyKissRequest:null,
		EchoTest:null,
		PeerSendGift:null,
		UpdateGamedTimeRequest:null,
		CellSymbol:null,
		DeclineFriendRequest:null,
		SpinRequest:null,
		PeerVoiceChatMessage:null,
		KickSeatRequest:null,
		EmoticonChatResponse:null,
		UpdateProfileRequest:null,
		EmoticonChatRequest:null,
		PeerThrowFlyKiss:null,
		TextChatResponse:null,
		SpinResult:null,
		ThrowEggRequest:null,
		ThrowEggResponse:null,
		LeaveGameResponse:null,
		PeerEmoticonChatMessage:null,
		ColSymbolResult:null,
		VoiceChatRequest:null,
		PeerKickSeat:null,
	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
            this.UpdateCurrencyRequest = pr.root.lookup("UpdateCurrencyRequest");
            this._protocolMethodExtend(this.UpdateCurrencyRequest);
        
            this.PeerTextChatMessage = pr.root.lookup("PeerTextChatMessage");
            this._protocolMethodExtend(this.PeerTextChatMessage);
        
            this.KickSeatResponse = pr.root.lookup("KickSeatResponse");
            this._protocolMethodExtend(this.KickSeatResponse);
        
            this.AcceptFriendRequest = pr.root.lookup("AcceptFriendRequest");
            this._protocolMethodExtend(this.AcceptFriendRequest);
        
            this.ThrowFlyKissResponse = pr.root.lookup("ThrowFlyKissResponse");
            this._protocolMethodExtend(this.ThrowFlyKissResponse);
        
            this.TextChatRequest = pr.root.lookup("TextChatRequest");
            this._protocolMethodExtend(this.TextChatRequest);
        
            this.PlayerLogonElse = pr.root.lookup("PlayerLogonElse");
            this._protocolMethodExtend(this.PlayerLogonElse);
        
            this.HitLine = pr.root.lookup("HitLine");
            this._protocolMethodExtend(this.HitLine);
        
            this.PeerThrowEgg = pr.root.lookup("PeerThrowEgg");
            this._protocolMethodExtend(this.PeerThrowEgg);
        
            this.FeatureResult = pr.root.lookup("FeatureResult");
            this._protocolMethodExtend(this.FeatureResult);
        
            this.EnterGameRequest = pr.root.lookup("EnterGameRequest");
            this._protocolMethodExtend(this.EnterGameRequest);
        
            this.MakeFriendRequest = pr.root.lookup("MakeFriendRequest");
            this._protocolMethodExtend(this.MakeFriendRequest);
        
            this.VoiceChatResponse = pr.root.lookup("VoiceChatResponse");
            this._protocolMethodExtend(this.VoiceChatResponse);
        
            this.EnterGameResponse = pr.root.lookup("EnterGameResponse");
            this._protocolMethodExtend(this.EnterGameResponse);
        
            this.GameResult = pr.root.lookup("GameResult");
            this._protocolMethodExtend(this.GameResult);
        
            this.InnerTest = pr.root.lookup("InnerTest");
            this._protocolMethodExtend(this.InnerTest);
        
            this.ThrowFlyKissRequest = pr.root.lookup("ThrowFlyKissRequest");
            this._protocolMethodExtend(this.ThrowFlyKissRequest);
        
            this.EchoTest = pr.root.lookup("EchoTest");
            this._protocolMethodExtend(this.EchoTest);
        
            this.PeerSendGift = pr.root.lookup("PeerSendGift");
            this._protocolMethodExtend(this.PeerSendGift);
        
            this.UpdateGamedTimeRequest = pr.root.lookup("UpdateGamedTimeRequest");
            this._protocolMethodExtend(this.UpdateGamedTimeRequest);
        
            this.CellSymbol = pr.root.lookup("CellSymbol");
            this._protocolMethodExtend(this.CellSymbol);
        
            this.DeclineFriendRequest = pr.root.lookup("DeclineFriendRequest");
            this._protocolMethodExtend(this.DeclineFriendRequest);
        
            this.SpinRequest = pr.root.lookup("SpinRequest");
            this._protocolMethodExtend(this.SpinRequest);
        
            this.PeerVoiceChatMessage = pr.root.lookup("PeerVoiceChatMessage");
            this._protocolMethodExtend(this.PeerVoiceChatMessage);
        
            this.KickSeatRequest = pr.root.lookup("KickSeatRequest");
            this._protocolMethodExtend(this.KickSeatRequest);
        
            this.EmoticonChatResponse = pr.root.lookup("EmoticonChatResponse");
            this._protocolMethodExtend(this.EmoticonChatResponse);
        
            this.UpdateProfileRequest = pr.root.lookup("UpdateProfileRequest");
            this._protocolMethodExtend(this.UpdateProfileRequest);
        
            this.EmoticonChatRequest = pr.root.lookup("EmoticonChatRequest");
            this._protocolMethodExtend(this.EmoticonChatRequest);
        
            this.PeerThrowFlyKiss = pr.root.lookup("PeerThrowFlyKiss");
            this._protocolMethodExtend(this.PeerThrowFlyKiss);
        
            this.TextChatResponse = pr.root.lookup("TextChatResponse");
            this._protocolMethodExtend(this.TextChatResponse);
        
            this.SpinResult = pr.root.lookup("SpinResult");
            this._protocolMethodExtend(this.SpinResult);
        
            this.ThrowEggRequest = pr.root.lookup("ThrowEggRequest");
            this._protocolMethodExtend(this.ThrowEggRequest);
        
            this.ThrowEggResponse = pr.root.lookup("ThrowEggResponse");
            this._protocolMethodExtend(this.ThrowEggResponse);
        
            this.LeaveGameResponse = pr.root.lookup("LeaveGameResponse");
            this._protocolMethodExtend(this.LeaveGameResponse);
        
            this.PeerEmoticonChatMessage = pr.root.lookup("PeerEmoticonChatMessage");
            this._protocolMethodExtend(this.PeerEmoticonChatMessage);
        
            this.ColSymbolResult = pr.root.lookup("ColSymbolResult");
            this._protocolMethodExtend(this.ColSymbolResult);
        
            this.VoiceChatRequest = pr.root.lookup("VoiceChatRequest");
            this._protocolMethodExtend(this.VoiceChatRequest);
        
            this.PeerKickSeat = pr.root.lookup("PeerKickSeat");
            this._protocolMethodExtend(this.PeerKickSeat);
        
	},

});
