var GameGameService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        spin(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.GameResult;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(2, 0, request, response_cb);
        },

        echo(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.EchoTest;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(2, 1, request, response_cb);
        },

	});
