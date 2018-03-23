var GameSocialService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        text_chat(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.TextChatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 0, request, response_cb);
        },

        emoticon_chat(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.EmoticonChatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 1, request, response_cb);
        },

        voice_chat(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.VoiceChatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 2, request, response_cb);
        },

	});
