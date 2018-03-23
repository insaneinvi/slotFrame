var ChatChatBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 2;
            this.init();
        },

        notify_text_speaker_closure(req){
            var clazz = pb.chat.SpeakerMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_text_speaker(request);
        },        
    
        notify_send_gift_closure(req){
            var clazz = pb.chat.SendGiftMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_send_gift(request);
        },        
    
        notify_system_message_closure(req){
            var clazz = pb.chat.SystemMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_system_message(request);
        },        
    
        notify_purchase_vip_closure(req){
            var clazz = pb.chat.VipMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_purchase_vip(request);
        },        
    
        notify_score_wall_award_closure(req){
            var clazz = pb.chat.ScoreWallMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_score_wall_award(request);
        },        
    
        notify_urgent_message_closure(req){
            var clazz = pb.chat.UrgentMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_urgent_message(request);
        },        
    
        notify_store_charge_message_closure(req){
            var clazz = pb.chat.StoreChargeMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_store_charge_message(request);
        },        
    
        notify_saving_pot_closure(req){
            var clazz = pb.chat.AwardSavingPot;
            var request = clazz.decodeBuffer(req);
            this.notify_saving_pot(request);
        },        
    
        notify_hundred_pool_message_closure(req){
            var clazz = pb.chat.HundredPoolMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_hundred_pool_message(request);
        },        
    
        notify_hundred_message_closure(req){
            var clazz = pb.chat.HundredMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_hundred_message(request);
        },        
    
        notify_fortune_cat_award_closure(req){
            var clazz = pb.chat.FortuneCatMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_fortune_cat_award(request);
        },        
    
        notify_game_message_closure(req){
            var clazz = pb.chat.GameMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_game_message(request);
        },        
    
        notify_jackpot_charge_message_closure(req){
            var clazz = pb.chat.JackpotChargeMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_jackpot_charge_message(request);
        },        
    
        notify_special_item_message_closure(req){
            var clazz = pb.chat.SpecialItemMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_special_item_message(request);
        },        
    
        notify_turner_message_closure(req){
            var clazz = pb.chat.TurnerMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_turner_message(request);
        },        
    
        notify_fruit_message_closure(req){
            var clazz = pb.chat.FruitMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_fruit_message(request);
        },        
    
        notify_fruit_pool_message_closure(req){
            var clazz = pb.chat.FruitPoolMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_fruit_pool_message(request);
        },        
    
        notify_game_starting_message_closure(req){
            var clazz = pb.chat.GamePeriodMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_game_starting_message(request);
        },        
    
        notify_knockout_prize_closure(req){
            var clazz = pb.chat.KnockoutPrizeMessage;
            var request = clazz.decodeBuffer(req);
            this.notify_knockout_prize(request);
        },        
    
        init(){
            
            this.methods[0] = this.notify_text_speaker_closure;
        
            this.methods[1] = this.notify_send_gift_closure;
        
            this.methods[2] = this.notify_system_message_closure;
        
            this.methods[3] = this.notify_purchase_vip_closure;
        
            this.methods[4] = this.notify_score_wall_award_closure;
        
            this.methods[5] = this.notify_urgent_message_closure;
        
            this.methods[6] = this.notify_store_charge_message_closure;
        
            this.methods[7] = this.notify_saving_pot_closure;
        
            this.methods[8] = this.notify_hundred_pool_message_closure;
        
            this.methods[9] = this.notify_hundred_message_closure;
        
            this.methods[10] = this.notify_fortune_cat_award_closure;
        
            this.methods[11] = this.notify_game_message_closure;
        
            this.methods[12] = this.notify_jackpot_charge_message_closure;
        
            this.methods[13] = this.notify_special_item_message_closure;
        
            this.methods[14] = this.notify_turner_message_closure;
        
            this.methods[15] = this.notify_fruit_message_closure;
        
            this.methods[16] = this.notify_fruit_pool_message_closure;
        
            this.methods[17] = this.notify_game_starting_message_closure;
        
            this.methods[18] = this.notify_knockout_prize_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        notify_text_speaker(request){
            cc.log("not implemented"); // not implemented
        },

        notify_send_gift(request){
            cc.log("not implemented"); // not implemented
        },

        notify_system_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_purchase_vip(request){
            cc.log("not implemented"); // not implemented
        },

        notify_score_wall_award(request){
            cc.log("not implemented"); // not implemented
        },

        notify_urgent_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_store_charge_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_saving_pot(request){
            cc.log("not implemented"); // not implemented
        },

        notify_hundred_pool_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_hundred_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_fortune_cat_award(request){
            cc.log("not implemented"); // not implemented
        },

        notify_game_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_jackpot_charge_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_special_item_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_turner_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_fruit_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_fruit_pool_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_game_starting_message(request){
            cc.log("not implemented"); // not implemented
        },

        notify_knockout_prize(request){
            cc.log("not implemented"); // not implemented
        },

	});