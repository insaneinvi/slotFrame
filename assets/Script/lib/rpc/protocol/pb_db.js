var extendsMethods = require('protocolMethodExtensions')

var db = cc.Class({

    statics:{
        _instance: null,

        getInstance:function(){
            if(db._instance == null){
                db._instance = new db();
            }
            return db._instance;
        }
    },

    _protocolMethodExtend(param){
        param.createBuffer = extendsMethods.createBuffer;
        param.decodeBuffer = extendsMethods.decodeBuffer;
        param.decodePacket = extendsMethods.decodePacket;
    },

    ctor(){
        var file_path = cc.url.raw("resources/db.proto");
        var protocolContent = jsb.fileUtils.getStringFromFile(file_path);
        this.buildPrototol(protocolContent)
    },

    properties: {
    		UnMuteRequest:null,
		LoginChatRequest:null,
		BriefRoomListResponse:null,
		IncrementDiamondRequest:null,
		FruitConcurrent:null,
		FriendshipResponse:null,
		GetItemCountRequest:null,
		AcceptFriendRequest:null,
		LoginResponse:null,
		CreatePrivateRoomRequest:null,
		DetailConcurrentResponse:null,
		RoundBeginRequest:null,
		Concurrent:null,
		PurchaseItemRequest:null,
		EnterGameResponse:null,
		DecrementDiamondRequest:null,
		AcceptFriendResponse:null,
		QueryPlayerInKnockoutRequest:null,
		MuteResponse:null,
		GiftResponse:null,
		SpecialItemID:null,
		RegisterChatRequest:null,
		LoginRequest:null,
		GameToken:null,
		UpdateTencentRequest:null,
		ChargeResponse:null,
		LeaveRoomResponse:null,
		UpdateAbnormalRequest:null,
		UpdateChannelRequest:null,
		DetailRoomListResponse:null,
		RoomCriteria:null,
		UpdateGameGlobal:null,
		UpdateProfileResponse:null,
		CostType:null,
		ConcurrentResponse:null,
		UpdateAbnormalResponse:null,
		SellItemResponse:null,
		MakeFriendResponse:null,
		ResetGamedTimeResponse:null,
		SendGiftResponse:null,
		SpecialItem:null,
		IncrementSpecialItemResponse:null,
		LeaveChatRequest:null,
		FriendshipRequest:null,
		ItemListResponse:null,
		PlayerProfileList:null,
		WinGameRequest:null,
		TextSpeakerRequest:null,
		ThrowFlyKissRequest:null,
		BriefRoom:null,
		LeaveRoomRequest:null,
		FindPrivateRoomRequest:null,
		LoseGameRequest:null,
		MuteRequest:null,
		PlayerInKnockoutResponse:null,
		BreakFriendRequest:null,
		UnMuteResponse:null,
		ThrowEggResponse:null,
		GiftRequest:null,
		IncrementSpecialItemRequest:null,
		IncrementItemRequest:null,
		UnregisterChatRequest:null,
		PrivateRoomResponse:null,
		LeaveChatResponse:null,
		UnregisterChatResponse:null,
		PurchaseItemResponse:null,
		GameConcurrent:null,
		SendCurrencyResponse:null,
		IncrementCurrencyRequest:null,
		SendGiftRequest:null,
		OperateRedEnvelopeResponse:null,
		OperateRedEnvelopeRequest:null,
		SellItemRequest:null,
		SpecialItemListResponse:null,
		EnterGameRequest:null,
		MakeFriendRequest:null,
		SetSavingPotRequest:null,
		GameListResponse:null,
		IncrementGiftRequest:null,
		IncrementItemResponse:null,
		BreakFriendResponse:null,
		SendCurrencyRequest:null,
		HundredConcurrent:null,
		EnterRoomRequest:null,
		OpenRedEnvelope:null,
		TextSpeakerResponse:null,
		EnterChatResponse:null,
		QuickGameRequest:null,
		UpdateProfileRequest:null,
		LeaveGameResponse:null,
		LeaveGameRequest:null,
		ChargeRequest:null,
		UpdateAppVersionRequest:null,
		SetSavingPotResponse:null,
		EnterChatRequest:null,
		RecordCardResponse:null,
		KickResponse:null,
		DecrementCurrencyRequest:null,
		DeclineFriendResponse:null,
		FollowGameRequest:null,
		ThrowFlyKissResponse:null,
		RegisterGameRequest:null,
		RegisterChatResponse:null,
		GameCriteria:null,
		RegisterGameResponse:null,
		IncrementGiftResponse:null,
		RequestRecordCard:null,
		SelectGameRequest:null,
		FriendCountResponse:null,
		UnregisterGameRequest:null,
		FixGameRequest:null,
		PlayerInKnockoutRequest:null,
		DetailRoom:null,
		EnterRoomResponse:null,
		Chat:null,
		UpdateMuteEndTimeRequest:null,
		Item:null,
		DeclineFriendRequest:null,
		ChatToken:null,
		StatusResponse:null,
		PrivateConcurrent:null,
		UpdateLoginIPRequest:null,
		Game:null,
		ThrowEggRequest:null,
		GameProfile:null,
		PlayerProfile:null,
	},


    buildPrototol(protocolContent){
            var pr = protobuf.parse(protocolContent)
        
            this.UnMuteRequest = pr.root.lookup("UnMuteRequest");
            this._protocolMethodExtend(this.UnMuteRequest);
        
            this.LoginChatRequest = pr.root.lookup("LoginChatRequest");
            this._protocolMethodExtend(this.LoginChatRequest);
        
            this.BriefRoomListResponse = pr.root.lookup("BriefRoomListResponse");
            this._protocolMethodExtend(this.BriefRoomListResponse);
        
            this.IncrementDiamondRequest = pr.root.lookup("IncrementDiamondRequest");
            this._protocolMethodExtend(this.IncrementDiamondRequest);
        
            this.FruitConcurrent = pr.root.lookup("FruitConcurrent");
            this._protocolMethodExtend(this.FruitConcurrent);
        
            this.FriendshipResponse = pr.root.lookup("FriendshipResponse");
            this._protocolMethodExtend(this.FriendshipResponse);
        
            this.GetItemCountRequest = pr.root.lookup("GetItemCountRequest");
            this._protocolMethodExtend(this.GetItemCountRequest);
        
            this.AcceptFriendRequest = pr.root.lookup("AcceptFriendRequest");
            this._protocolMethodExtend(this.AcceptFriendRequest);
        
            this.LoginResponse = pr.root.lookup("LoginResponse");
            this._protocolMethodExtend(this.LoginResponse);
        
            this.CreatePrivateRoomRequest = pr.root.lookup("CreatePrivateRoomRequest");
            this._protocolMethodExtend(this.CreatePrivateRoomRequest);
        
            this.DetailConcurrentResponse = pr.root.lookup("DetailConcurrentResponse");
            this._protocolMethodExtend(this.DetailConcurrentResponse);
        
            this.RoundBeginRequest = pr.root.lookup("RoundBeginRequest");
            this._protocolMethodExtend(this.RoundBeginRequest);
        
            this.Concurrent = pr.root.lookup("Concurrent");
            this._protocolMethodExtend(this.Concurrent);
        
            this.PurchaseItemRequest = pr.root.lookup("PurchaseItemRequest");
            this._protocolMethodExtend(this.PurchaseItemRequest);
        
            this.EnterGameResponse = pr.root.lookup("EnterGameResponse");
            this._protocolMethodExtend(this.EnterGameResponse);
        
            this.DecrementDiamondRequest = pr.root.lookup("DecrementDiamondRequest");
            this._protocolMethodExtend(this.DecrementDiamondRequest);
        
            this.AcceptFriendResponse = pr.root.lookup("AcceptFriendResponse");
            this._protocolMethodExtend(this.AcceptFriendResponse);
        
            this.QueryPlayerInKnockoutRequest = pr.root.lookup("QueryPlayerInKnockoutRequest");
            this._protocolMethodExtend(this.QueryPlayerInKnockoutRequest);
        
            this.MuteResponse = pr.root.lookup("MuteResponse");
            this._protocolMethodExtend(this.MuteResponse);
        
            this.GiftResponse = pr.root.lookup("GiftResponse");
            this._protocolMethodExtend(this.GiftResponse);
        
            this.SpecialItemID = pr.root.lookup("SpecialItemID");
            this._protocolMethodExtend(this.SpecialItemID);
        
            this.RegisterChatRequest = pr.root.lookup("RegisterChatRequest");
            this._protocolMethodExtend(this.RegisterChatRequest);
        
            this.LoginRequest = pr.root.lookup("LoginRequest");
            this._protocolMethodExtend(this.LoginRequest);
        
            this.GameToken = pr.root.lookup("GameToken");
            this._protocolMethodExtend(this.GameToken);
        
            this.UpdateTencentRequest = pr.root.lookup("UpdateTencentRequest");
            this._protocolMethodExtend(this.UpdateTencentRequest);
        
            this.ChargeResponse = pr.root.lookup("ChargeResponse");
            this._protocolMethodExtend(this.ChargeResponse);
        
            this.LeaveRoomResponse = pr.root.lookup("LeaveRoomResponse");
            this._protocolMethodExtend(this.LeaveRoomResponse);
        
            this.UpdateAbnormalRequest = pr.root.lookup("UpdateAbnormalRequest");
            this._protocolMethodExtend(this.UpdateAbnormalRequest);
        
            this.UpdateChannelRequest = pr.root.lookup("UpdateChannelRequest");
            this._protocolMethodExtend(this.UpdateChannelRequest);
        
            this.DetailRoomListResponse = pr.root.lookup("DetailRoomListResponse");
            this._protocolMethodExtend(this.DetailRoomListResponse);
        
            this.RoomCriteria = pr.root.lookup("RoomCriteria");
            this._protocolMethodExtend(this.RoomCriteria);
        
            this.UpdateGameGlobal = pr.root.lookup("UpdateGameGlobal");
            this._protocolMethodExtend(this.UpdateGameGlobal);
        
            this.UpdateProfileResponse = pr.root.lookup("UpdateProfileResponse");
            this._protocolMethodExtend(this.UpdateProfileResponse);
        
            this.CostType = pr.root.lookup("CostType");
            this._protocolMethodExtend(this.CostType);
        
            this.ConcurrentResponse = pr.root.lookup("ConcurrentResponse");
            this._protocolMethodExtend(this.ConcurrentResponse);
        
            this.UpdateAbnormalResponse = pr.root.lookup("UpdateAbnormalResponse");
            this._protocolMethodExtend(this.UpdateAbnormalResponse);
        
            this.SellItemResponse = pr.root.lookup("SellItemResponse");
            this._protocolMethodExtend(this.SellItemResponse);
        
            this.MakeFriendResponse = pr.root.lookup("MakeFriendResponse");
            this._protocolMethodExtend(this.MakeFriendResponse);
        
            this.ResetGamedTimeResponse = pr.root.lookup("ResetGamedTimeResponse");
            this._protocolMethodExtend(this.ResetGamedTimeResponse);
        
            this.SendGiftResponse = pr.root.lookup("SendGiftResponse");
            this._protocolMethodExtend(this.SendGiftResponse);
        
            this.SpecialItem = pr.root.lookup("SpecialItem");
            this._protocolMethodExtend(this.SpecialItem);
        
            this.IncrementSpecialItemResponse = pr.root.lookup("IncrementSpecialItemResponse");
            this._protocolMethodExtend(this.IncrementSpecialItemResponse);
        
            this.LeaveChatRequest = pr.root.lookup("LeaveChatRequest");
            this._protocolMethodExtend(this.LeaveChatRequest);
        
            this.FriendshipRequest = pr.root.lookup("FriendshipRequest");
            this._protocolMethodExtend(this.FriendshipRequest);
        
            this.ItemListResponse = pr.root.lookup("ItemListResponse");
            this._protocolMethodExtend(this.ItemListResponse);
        
            this.PlayerProfileList = pr.root.lookup("PlayerProfileList");
            this._protocolMethodExtend(this.PlayerProfileList);
        
            this.WinGameRequest = pr.root.lookup("WinGameRequest");
            this._protocolMethodExtend(this.WinGameRequest);
        
            this.TextSpeakerRequest = pr.root.lookup("TextSpeakerRequest");
            this._protocolMethodExtend(this.TextSpeakerRequest);
        
            this.ThrowFlyKissRequest = pr.root.lookup("ThrowFlyKissRequest");
            this._protocolMethodExtend(this.ThrowFlyKissRequest);
        
            this.BriefRoom = pr.root.lookup("BriefRoom");
            this._protocolMethodExtend(this.BriefRoom);
        
            this.LeaveRoomRequest = pr.root.lookup("LeaveRoomRequest");
            this._protocolMethodExtend(this.LeaveRoomRequest);
        
            this.FindPrivateRoomRequest = pr.root.lookup("FindPrivateRoomRequest");
            this._protocolMethodExtend(this.FindPrivateRoomRequest);
        
            this.LoseGameRequest = pr.root.lookup("LoseGameRequest");
            this._protocolMethodExtend(this.LoseGameRequest);
        
            this.MuteRequest = pr.root.lookup("MuteRequest");
            this._protocolMethodExtend(this.MuteRequest);
        
            this.PlayerInKnockoutResponse = pr.root.lookup("PlayerInKnockoutResponse");
            this._protocolMethodExtend(this.PlayerInKnockoutResponse);
        
            this.BreakFriendRequest = pr.root.lookup("BreakFriendRequest");
            this._protocolMethodExtend(this.BreakFriendRequest);
        
            this.UnMuteResponse = pr.root.lookup("UnMuteResponse");
            this._protocolMethodExtend(this.UnMuteResponse);
        
            this.ThrowEggResponse = pr.root.lookup("ThrowEggResponse");
            this._protocolMethodExtend(this.ThrowEggResponse);
        
            this.GiftRequest = pr.root.lookup("GiftRequest");
            this._protocolMethodExtend(this.GiftRequest);
        
            this.IncrementSpecialItemRequest = pr.root.lookup("IncrementSpecialItemRequest");
            this._protocolMethodExtend(this.IncrementSpecialItemRequest);
        
            this.IncrementItemRequest = pr.root.lookup("IncrementItemRequest");
            this._protocolMethodExtend(this.IncrementItemRequest);
        
            this.UnregisterChatRequest = pr.root.lookup("UnregisterChatRequest");
            this._protocolMethodExtend(this.UnregisterChatRequest);
        
            this.PrivateRoomResponse = pr.root.lookup("PrivateRoomResponse");
            this._protocolMethodExtend(this.PrivateRoomResponse);
        
            this.LeaveChatResponse = pr.root.lookup("LeaveChatResponse");
            this._protocolMethodExtend(this.LeaveChatResponse);
        
            this.UnregisterChatResponse = pr.root.lookup("UnregisterChatResponse");
            this._protocolMethodExtend(this.UnregisterChatResponse);
        
            this.PurchaseItemResponse = pr.root.lookup("PurchaseItemResponse");
            this._protocolMethodExtend(this.PurchaseItemResponse);
        
            this.GameConcurrent = pr.root.lookup("GameConcurrent");
            this._protocolMethodExtend(this.GameConcurrent);
        
            this.SendCurrencyResponse = pr.root.lookup("SendCurrencyResponse");
            this._protocolMethodExtend(this.SendCurrencyResponse);
        
            this.IncrementCurrencyRequest = pr.root.lookup("IncrementCurrencyRequest");
            this._protocolMethodExtend(this.IncrementCurrencyRequest);
        
            this.SendGiftRequest = pr.root.lookup("SendGiftRequest");
            this._protocolMethodExtend(this.SendGiftRequest);
        
            this.OperateRedEnvelopeResponse = pr.root.lookup("OperateRedEnvelopeResponse");
            this._protocolMethodExtend(this.OperateRedEnvelopeResponse);
        
            this.OperateRedEnvelopeRequest = pr.root.lookup("OperateRedEnvelopeRequest");
            this._protocolMethodExtend(this.OperateRedEnvelopeRequest);
        
            this.SellItemRequest = pr.root.lookup("SellItemRequest");
            this._protocolMethodExtend(this.SellItemRequest);
        
            this.SpecialItemListResponse = pr.root.lookup("SpecialItemListResponse");
            this._protocolMethodExtend(this.SpecialItemListResponse);
        
            this.EnterGameRequest = pr.root.lookup("EnterGameRequest");
            this._protocolMethodExtend(this.EnterGameRequest);
        
            this.MakeFriendRequest = pr.root.lookup("MakeFriendRequest");
            this._protocolMethodExtend(this.MakeFriendRequest);
        
            this.SetSavingPotRequest = pr.root.lookup("SetSavingPotRequest");
            this._protocolMethodExtend(this.SetSavingPotRequest);
        
            this.GameListResponse = pr.root.lookup("GameListResponse");
            this._protocolMethodExtend(this.GameListResponse);
        
            this.IncrementGiftRequest = pr.root.lookup("IncrementGiftRequest");
            this._protocolMethodExtend(this.IncrementGiftRequest);
        
            this.IncrementItemResponse = pr.root.lookup("IncrementItemResponse");
            this._protocolMethodExtend(this.IncrementItemResponse);
        
            this.BreakFriendResponse = pr.root.lookup("BreakFriendResponse");
            this._protocolMethodExtend(this.BreakFriendResponse);
        
            this.SendCurrencyRequest = pr.root.lookup("SendCurrencyRequest");
            this._protocolMethodExtend(this.SendCurrencyRequest);
        
            this.HundredConcurrent = pr.root.lookup("HundredConcurrent");
            this._protocolMethodExtend(this.HundredConcurrent);
        
            this.EnterRoomRequest = pr.root.lookup("EnterRoomRequest");
            this._protocolMethodExtend(this.EnterRoomRequest);
        
            this.OpenRedEnvelope = pr.root.lookup("OpenRedEnvelope");
            this._protocolMethodExtend(this.OpenRedEnvelope);
        
            this.TextSpeakerResponse = pr.root.lookup("TextSpeakerResponse");
            this._protocolMethodExtend(this.TextSpeakerResponse);
        
            this.EnterChatResponse = pr.root.lookup("EnterChatResponse");
            this._protocolMethodExtend(this.EnterChatResponse);
        
            this.QuickGameRequest = pr.root.lookup("QuickGameRequest");
            this._protocolMethodExtend(this.QuickGameRequest);
        
            this.UpdateProfileRequest = pr.root.lookup("UpdateProfileRequest");
            this._protocolMethodExtend(this.UpdateProfileRequest);
        
            this.LeaveGameResponse = pr.root.lookup("LeaveGameResponse");
            this._protocolMethodExtend(this.LeaveGameResponse);
        
            this.LeaveGameRequest = pr.root.lookup("LeaveGameRequest");
            this._protocolMethodExtend(this.LeaveGameRequest);
        
            this.ChargeRequest = pr.root.lookup("ChargeRequest");
            this._protocolMethodExtend(this.ChargeRequest);
        
            this.UpdateAppVersionRequest = pr.root.lookup("UpdateAppVersionRequest");
            this._protocolMethodExtend(this.UpdateAppVersionRequest);
        
            this.SetSavingPotResponse = pr.root.lookup("SetSavingPotResponse");
            this._protocolMethodExtend(this.SetSavingPotResponse);
        
            this.EnterChatRequest = pr.root.lookup("EnterChatRequest");
            this._protocolMethodExtend(this.EnterChatRequest);
        
            this.RecordCardResponse = pr.root.lookup("RecordCardResponse");
            this._protocolMethodExtend(this.RecordCardResponse);
        
            this.KickResponse = pr.root.lookup("KickResponse");
            this._protocolMethodExtend(this.KickResponse);
        
            this.DecrementCurrencyRequest = pr.root.lookup("DecrementCurrencyRequest");
            this._protocolMethodExtend(this.DecrementCurrencyRequest);
        
            this.DeclineFriendResponse = pr.root.lookup("DeclineFriendResponse");
            this._protocolMethodExtend(this.DeclineFriendResponse);
        
            this.FollowGameRequest = pr.root.lookup("FollowGameRequest");
            this._protocolMethodExtend(this.FollowGameRequest);
        
            this.ThrowFlyKissResponse = pr.root.lookup("ThrowFlyKissResponse");
            this._protocolMethodExtend(this.ThrowFlyKissResponse);
        
            this.RegisterGameRequest = pr.root.lookup("RegisterGameRequest");
            this._protocolMethodExtend(this.RegisterGameRequest);
        
            this.RegisterChatResponse = pr.root.lookup("RegisterChatResponse");
            this._protocolMethodExtend(this.RegisterChatResponse);
        
            this.GameCriteria = pr.root.lookup("GameCriteria");
            this._protocolMethodExtend(this.GameCriteria);
        
            this.RegisterGameResponse = pr.root.lookup("RegisterGameResponse");
            this._protocolMethodExtend(this.RegisterGameResponse);
        
            this.IncrementGiftResponse = pr.root.lookup("IncrementGiftResponse");
            this._protocolMethodExtend(this.IncrementGiftResponse);
        
            this.RequestRecordCard = pr.root.lookup("RequestRecordCard");
            this._protocolMethodExtend(this.RequestRecordCard);
        
            this.SelectGameRequest = pr.root.lookup("SelectGameRequest");
            this._protocolMethodExtend(this.SelectGameRequest);
        
            this.FriendCountResponse = pr.root.lookup("FriendCountResponse");
            this._protocolMethodExtend(this.FriendCountResponse);
        
            this.UnregisterGameRequest = pr.root.lookup("UnregisterGameRequest");
            this._protocolMethodExtend(this.UnregisterGameRequest);
        
            this.FixGameRequest = pr.root.lookup("FixGameRequest");
            this._protocolMethodExtend(this.FixGameRequest);
        
            this.PlayerInKnockoutRequest = pr.root.lookup("PlayerInKnockoutRequest");
            this._protocolMethodExtend(this.PlayerInKnockoutRequest);
        
            this.DetailRoom = pr.root.lookup("DetailRoom");
            this._protocolMethodExtend(this.DetailRoom);
        
            this.EnterRoomResponse = pr.root.lookup("EnterRoomResponse");
            this._protocolMethodExtend(this.EnterRoomResponse);
        
            this.Chat = pr.root.lookup("Chat");
            this._protocolMethodExtend(this.Chat);
        
            this.UpdateMuteEndTimeRequest = pr.root.lookup("UpdateMuteEndTimeRequest");
            this._protocolMethodExtend(this.UpdateMuteEndTimeRequest);
        
            this.Item = pr.root.lookup("Item");
            this._protocolMethodExtend(this.Item);
        
            this.DeclineFriendRequest = pr.root.lookup("DeclineFriendRequest");
            this._protocolMethodExtend(this.DeclineFriendRequest);
        
            this.ChatToken = pr.root.lookup("ChatToken");
            this._protocolMethodExtend(this.ChatToken);
        
            this.StatusResponse = pr.root.lookup("StatusResponse");
            this._protocolMethodExtend(this.StatusResponse);
        
            this.PrivateConcurrent = pr.root.lookup("PrivateConcurrent");
            this._protocolMethodExtend(this.PrivateConcurrent);
        
            this.UpdateLoginIPRequest = pr.root.lookup("UpdateLoginIPRequest");
            this._protocolMethodExtend(this.UpdateLoginIPRequest);
        
            this.Game = pr.root.lookup("Game");
            this._protocolMethodExtend(this.Game);
        
            this.ThrowEggRequest = pr.root.lookup("ThrowEggRequest");
            this._protocolMethodExtend(this.ThrowEggRequest);
        
            this.GameProfile = pr.root.lookup("GameProfile");
            this._protocolMethodExtend(this.GameProfile);
        
            this.PlayerProfile = pr.root.lookup("PlayerProfile");
            this._protocolMethodExtend(this.PlayerProfile);
        
	},

});
