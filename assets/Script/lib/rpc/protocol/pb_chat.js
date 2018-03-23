var extendsMethods = require('protocolMethodExtensions')

var chat = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(chat._instance == null){
                chat._instance = new chat();
            }
            return chat._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/chat.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    		EnterChatRequest:null,
		SendGiftMessage:null,
		KnockoutPrizeMessage:null,
		FruitPoolMessage:null,
		UrgentMessage:null,
		UrgentEventsList:null,
		DelSystemEventRequest:null,
		GamePeriodMessage:null,
		TurnerMessage:null,
		SpecialItem:null,
		VipMessage:null,
		GameHighestAward:null,
		StoreChargeMessage:null,
		JackpotChargeMessage:null,
		SystemMessagePerPt:null,
		SystemEventsList:null,
		SystemMessage:null,
		OnlineTimeRequest:null,
		BulletinRequest:null,
		TextSpeakerRequest:null,
		DelUrgentEventRequest:null,
		GameMessage:null,
		SavingPotGetResponse:null,
		ScoreWallMessage:null,
		FruitMessage:null,
		FirstAward:null,
		SpecialItemID:null,
		FortuneCatMessage:null,
		HundredPoolMessage:null,
		TextSpeakerResponse:null,
		EnterChatResponse:null,
		UpdateProfileRequest:null,
		SavingPotInfoRequest:null,
		SavingPotInfoResponse:null,
		OnlineTimeResponse:null,
		SpeakerMessage:null,
		SavingPotGetRequest:null,
		ItemChange:null,
		AwardSavingPot:null,
		SpecialItemMessage:null,
		HundredMessage:null,
	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
            this.EnterChatRequest = pr.root.lookup("EnterChatRequest");
            this._protocolMethodExtend(this.EnterChatRequest);
        
            this.SendGiftMessage = pr.root.lookup("SendGiftMessage");
            this._protocolMethodExtend(this.SendGiftMessage);
        
            this.KnockoutPrizeMessage = pr.root.lookup("KnockoutPrizeMessage");
            this._protocolMethodExtend(this.KnockoutPrizeMessage);
        
            this.FruitPoolMessage = pr.root.lookup("FruitPoolMessage");
            this._protocolMethodExtend(this.FruitPoolMessage);
        
            this.UrgentMessage = pr.root.lookup("UrgentMessage");
            this._protocolMethodExtend(this.UrgentMessage);
        
            this.UrgentEventsList = pr.root.lookup("UrgentEventsList");
            this._protocolMethodExtend(this.UrgentEventsList);
        
            this.DelSystemEventRequest = pr.root.lookup("DelSystemEventRequest");
            this._protocolMethodExtend(this.DelSystemEventRequest);
        
            this.GamePeriodMessage = pr.root.lookup("GamePeriodMessage");
            this._protocolMethodExtend(this.GamePeriodMessage);
        
            this.TurnerMessage = pr.root.lookup("TurnerMessage");
            this._protocolMethodExtend(this.TurnerMessage);
        
            this.SpecialItem = pr.root.lookup("SpecialItem");
            this._protocolMethodExtend(this.SpecialItem);
        
            this.VipMessage = pr.root.lookup("VipMessage");
            this._protocolMethodExtend(this.VipMessage);
        
            this.GameHighestAward = pr.root.lookup("GameHighestAward");
            this._protocolMethodExtend(this.GameHighestAward);
        
            this.StoreChargeMessage = pr.root.lookup("StoreChargeMessage");
            this._protocolMethodExtend(this.StoreChargeMessage);
        
            this.JackpotChargeMessage = pr.root.lookup("JackpotChargeMessage");
            this._protocolMethodExtend(this.JackpotChargeMessage);
        
            this.SystemMessagePerPt = pr.root.lookup("SystemMessagePerPt");
            this._protocolMethodExtend(this.SystemMessagePerPt);
        
            this.SystemEventsList = pr.root.lookup("SystemEventsList");
            this._protocolMethodExtend(this.SystemEventsList);
        
            this.SystemMessage = pr.root.lookup("SystemMessage");
            this._protocolMethodExtend(this.SystemMessage);
        
            this.OnlineTimeRequest = pr.root.lookup("OnlineTimeRequest");
            this._protocolMethodExtend(this.OnlineTimeRequest);
        
            this.BulletinRequest = pr.root.lookup("BulletinRequest");
            this._protocolMethodExtend(this.BulletinRequest);
        
            this.TextSpeakerRequest = pr.root.lookup("TextSpeakerRequest");
            this._protocolMethodExtend(this.TextSpeakerRequest);
        
            this.DelUrgentEventRequest = pr.root.lookup("DelUrgentEventRequest");
            this._protocolMethodExtend(this.DelUrgentEventRequest);
        
            this.GameMessage = pr.root.lookup("GameMessage");
            this._protocolMethodExtend(this.GameMessage);
        
            this.SavingPotGetResponse = pr.root.lookup("SavingPotGetResponse");
            this._protocolMethodExtend(this.SavingPotGetResponse);
        
            this.ScoreWallMessage = pr.root.lookup("ScoreWallMessage");
            this._protocolMethodExtend(this.ScoreWallMessage);
        
            this.FruitMessage = pr.root.lookup("FruitMessage");
            this._protocolMethodExtend(this.FruitMessage);
        
            this.FirstAward = pr.root.lookup("FirstAward");
            this._protocolMethodExtend(this.FirstAward);
        
            this.SpecialItemID = pr.root.lookup("SpecialItemID");
            this._protocolMethodExtend(this.SpecialItemID);
        
            this.FortuneCatMessage = pr.root.lookup("FortuneCatMessage");
            this._protocolMethodExtend(this.FortuneCatMessage);
        
            this.HundredPoolMessage = pr.root.lookup("HundredPoolMessage");
            this._protocolMethodExtend(this.HundredPoolMessage);
        
            this.TextSpeakerResponse = pr.root.lookup("TextSpeakerResponse");
            this._protocolMethodExtend(this.TextSpeakerResponse);
        
            this.EnterChatResponse = pr.root.lookup("EnterChatResponse");
            this._protocolMethodExtend(this.EnterChatResponse);
        
            this.UpdateProfileRequest = pr.root.lookup("UpdateProfileRequest");
            this._protocolMethodExtend(this.UpdateProfileRequest);
        
            this.SavingPotInfoRequest = pr.root.lookup("SavingPotInfoRequest");
            this._protocolMethodExtend(this.SavingPotInfoRequest);
        
            this.SavingPotInfoResponse = pr.root.lookup("SavingPotInfoResponse");
            this._protocolMethodExtend(this.SavingPotInfoResponse);
        
            this.OnlineTimeResponse = pr.root.lookup("OnlineTimeResponse");
            this._protocolMethodExtend(this.OnlineTimeResponse);
        
            this.SpeakerMessage = pr.root.lookup("SpeakerMessage");
            this._protocolMethodExtend(this.SpeakerMessage);
        
            this.SavingPotGetRequest = pr.root.lookup("SavingPotGetRequest");
            this._protocolMethodExtend(this.SavingPotGetRequest);
        
            this.ItemChange = pr.root.lookup("ItemChange");
            this._protocolMethodExtend(this.ItemChange);
        
            this.AwardSavingPot = pr.root.lookup("AwardSavingPot");
            this._protocolMethodExtend(this.AwardSavingPot);
        
            this.SpecialItemMessage = pr.root.lookup("SpecialItemMessage");
            this._protocolMethodExtend(this.SpecialItemMessage);
        
            this.HundredMessage = pr.root.lookup("HundredMessage");
            this._protocolMethodExtend(this.HundredMessage);
        
	},

});
