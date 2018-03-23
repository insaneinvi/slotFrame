var ChatChatService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        enter_chat(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.chat.EnterChatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(1, 0, request, response_cb);
        },

        leave_chat(){
            var clazz = pb.protocol.Void;
            var req = clazz.createBuffer();
            this.serviceProxy.rpcRequest(1, 1, req, null);
        },

        text_speaker(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.chat.TextSpeakerResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(1, 2, request, response_cb);
        },

	});
