var FruitSocialService = cc.Class({
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
                    var clazz = pb.fruit.TextChatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(6, 0, request, response_cb);
        },

        emoticon_chat(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.EmoticonChatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(6, 1, request, response_cb);
        },

        throw_egg(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.ThrowEggResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(6, 2, request, response_cb);
        },

        throw_soap(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.ThrowSoapResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(6, 3, request, response_cb);
        },

        send_red_envelope(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.SendRedEnvelopeResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(6, 4, request, response_cb);
        },

        open_red_envelope(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.OpenRedEnvelopeResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(6, 5, request, response_cb);
        },

	});
