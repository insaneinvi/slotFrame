var GameSocialBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 5;
            this.init();
        },

        make_friend_closure(req){
            var clazz = pb.game.MakeFriendRequest;
            var request = clazz.decodeBuffer(req);
            this.make_friend(request);
        },        
    
        accept_friend_closure(req){
            var clazz = pb.game.AcceptFriendRequest;
            var request = clazz.decodeBuffer(req);
            this.accept_friend(request);
        },        
    
        decline_friend_closure(req){
            var clazz = pb.game.DeclineFriendRequest;
            var request = clazz.decodeBuffer(req);
            this.decline_friend(request);
        },        
    
        peer_send_gift_closure(req){
            var clazz = pb.game.PeerSendGift;
            var request = clazz.decodeBuffer(req);
            this.peer_send_gift(request);
        },        
    
        peer_text_chat_closure(req){
            var clazz = pb.game.PeerTextChatMessage;
            var request = clazz.decodeBuffer(req);
            this.peer_text_chat(request);
        },        
    
        peer_voice_chat_closure(req){
            var clazz = pb.game.PeerVoiceChatMessage;
            var request = clazz.decodeBuffer(req);
            this.peer_voice_chat(request);
        },        
    
        peer_emoticon_chat_closure(req){
            var clazz = pb.game.PeerEmoticonChatMessage;
            var request = clazz.decodeBuffer(req);
            this.peer_emoticon_chat(request);
        },        
    
        init(){
            
            this.methods[0] = this.make_friend_closure;
        
            this.methods[1] = this.accept_friend_closure;
        
            this.methods[2] = this.decline_friend_closure;
        
            this.methods[3] = this.peer_send_gift_closure;
        
            this.methods[4] = this.peer_text_chat_closure;
        
            this.methods[5] = this.peer_voice_chat_closure;
        
            this.methods[6] = this.peer_emoticon_chat_closure;
        
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

        peer_voice_chat(request){
            cc.log("not implemented"); // not implemented
        },

        peer_emoticon_chat(request){
            cc.log("not implemented"); // not implemented
        },

	});