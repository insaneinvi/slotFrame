var extendsMethods = require('protocolMethodExtensions')

var common = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(common._instance == null){
                common._instance = new common();
            }
            return common._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/common.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    		TencentProfile:null,
		LogoutRequest:null,
		PlayerSeat:null,
		GameId:null,
		RoomIdList:null,
		Room:null,
		Item:null,
		RoomLevel:null,
		RoomId:null,
		PlayerInfo:null,
		RedEnvelopeOperation:null,
		CardRank:null,
		CardSuit:null,
		HandCardType:null,
		DiamondResponse:null,
		Gender:null,
		CurrencyResponse:null,
		PlayerIdList:null,
		SeatId:null,
		PlayerId:null,
		PokerCard:null,
	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
            this.TencentProfile = pr.root.lookup("TencentProfile");
            this._protocolMethodExtend(this.TencentProfile);
        
            this.LogoutRequest = pr.root.lookup("LogoutRequest");
            this._protocolMethodExtend(this.LogoutRequest);
        
            this.PlayerSeat = pr.root.lookup("PlayerSeat");
            this._protocolMethodExtend(this.PlayerSeat);
        
            this.GameId = pr.root.lookup("GameId");
            this._protocolMethodExtend(this.GameId);
        
            this.RoomIdList = pr.root.lookup("RoomIdList");
            this._protocolMethodExtend(this.RoomIdList);
        
            this.Room = pr.root.lookup("Room");
            this._protocolMethodExtend(this.Room);
        
            this.Item = pr.root.lookup("Item");
            this._protocolMethodExtend(this.Item);
        
            this.RoomLevel = pr.root.lookup("RoomLevel");
            this._protocolMethodExtend(this.RoomLevel);
        
            this.RoomId = pr.root.lookup("RoomId");
            this._protocolMethodExtend(this.RoomId);
        
            this.PlayerInfo = pr.root.lookup("PlayerInfo");
            this._protocolMethodExtend(this.PlayerInfo);
        
            this.RedEnvelopeOperation = pr.root.lookup("RedEnvelopeOperation");
            this._protocolMethodExtend(this.RedEnvelopeOperation);
        
            this.CardRank = pr.root.lookup("CardRank");
            this._protocolMethodExtend(this.CardRank);
        
            this.CardSuit = pr.root.lookup("CardSuit");
            this._protocolMethodExtend(this.CardSuit);
        
            this.HandCardType = pr.root.lookup("HandCardType");
            this._protocolMethodExtend(this.HandCardType);
        
            this.DiamondResponse = pr.root.lookup("DiamondResponse");
            this._protocolMethodExtend(this.DiamondResponse);
        
            this.Gender = pr.root.lookup("Gender");
            this._protocolMethodExtend(this.Gender);
        
            this.CurrencyResponse = pr.root.lookup("CurrencyResponse");
            this._protocolMethodExtend(this.CurrencyResponse);
        
            this.PlayerIdList = pr.root.lookup("PlayerIdList");
            this._protocolMethodExtend(this.PlayerIdList);
        
            this.SeatId = pr.root.lookup("SeatId");
            this._protocolMethodExtend(this.SeatId);
        
            this.PlayerId = pr.root.lookup("PlayerId");
            this._protocolMethodExtend(this.PlayerId);
        
            this.PokerCard = pr.root.lookup("PokerCard");
            this._protocolMethodExtend(this.PokerCard);
        
	},

});
