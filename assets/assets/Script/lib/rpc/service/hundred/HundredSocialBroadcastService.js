var HundredSocialBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 7;
            this.init();
        },

        make_friend_closure(req){
            var clazz = pb.hundred.MakeFriendRequest;
            var request = clazz.decodeBuffer(req);
            this.make_friend(request);
        },        
    
        accept_friend_closure(req){
            var clazz = pb.hundred.AcceptFriendRequest;
            var request = clazz.decodeBuffer(req);
            this.accept_friend(request);
        },        
    
        decline_friend_closure(req){
            var clazz = pb.hundred.DeclineFriendRequest;
            var request = clazz.decodeBuffer(req);
            this.decline_friend(request);
        },        
    
        peer_send_gift_closure(req){
            var clazz = pb.hundred.PeerSendGift;
            var request = clazz.decodeBuffer(req);
            this.peer_send_gift(request);
        },        
    
        peer_text_chat_closure(req){
            var clazz = pb.hundred.PeerTextChatMessage;
            var request = clazz.decodeBuffer(req);
            this.peer_text_chat(request);
        },        
    
        peer_emoticon_chat_closure(req){
            var clazz = pb.hundred.PeerEmoticonChatMessage;
            var request = clazz.decodeBuffer(req);
            this.peer_emoticon_chat(request);
        },        
    
        peer_throw_egg_closure(req){
            var clazz = pb.hundred.PeerThrowEgg;
            var request = clazz.decodeBuffer(req);
            this.peer_throw_egg(request);
        },        
    
        peer_throw_fly_kiss_closure(req){
            var clazz = pb.hundred.PeerThrowFlyKiss;
            var request = clazz.decodeBuffer(req);
            this.peer_throw_fly_kiss(request);
        },        
    
        peer_send_red_envelope_closure(req){
            var clazz = pb.hundred.PeerSendRedEnvelope;
            var request = clazz.decodeBuffer(req);
            this.peer_send_red_envelope(request);
        },        
    
        peer_open_red_envelope_closure(req){
            var clazz = pb.hundred.PeerOpenRedEnvelope;
            var request = clazz.decodeBuffer(req);
            this.peer_open_red_envelope(request);
        },        
    
        red_envelope_end_closure(req){
            var clazz = pb.hundred.RedEnvelopeEnd;
            var request = clazz.decodeBuffer(req);
            this.red_envelope_end(request);
        },        
    
        init(){
            
            this.methods[0] = this.make_friend_closure;
        
            this.methods[1] = this.accept_friend_closure;
        
            this.methods[2] = this.decline_friend_closure;
        
            this.methods[3] = this.peer_send_gift_closure;
        
            this.methods[4] = this.peer_text_chat_closure;
        
            this.methods[5] = this.peer_emoticon_chat_closure;
        
            this.methods[6] = this.peer_throw_egg_closure;
        
            this.methods[7] = this.peer_throw_fly_kiss_closure;
        
            this.methods[8] = this.peer_send_red_envelope_closure;
        
            this.methods[9] = this.peer_open_red_envelope_closure;
        
            this.methods[10] = this.red_envelope_end_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        make_friend(request){
            cc.log("not implemented"); // not implemented
        },

        accept_friend(request){
            cc.log("not implemented"); // not implemented
        },

        decline_friend(request){
            cc.log("not implemented"); // not implemented
        },

        peer_send_gift(request){
            cc.log("not implemented"); // not implemented
        },

        peer_text_chat(request){
            cc.log("not implemented"); // not implemented
        },

        peer_emoticon_chat(request){
            cc.log("not implemented"); // not implemented
        },

        peer_throw_egg(request){
            cc.log("not implemented"); // not implemented
        },

        peer_throw_fly_kiss(request){
            cc.log("not implemented"); // not implemented
        },

        peer_send_red_envelope(request){
            cc.log("not implemented"); // not implemented
        },

        peer_open_red_envelope(request){
            cc.log("not implemented"); // not implemented
        },

        red_envelope_end(request){
            cc.log("not implemented"); // not implemented
        },

	});