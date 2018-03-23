var GameAccountService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        enter_game(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.EnterGameResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(0, 0, request, response_cb);
        },

        leave_game(done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.game.LeaveGameResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            var clazz = pb.protocol.Void;
            var req = clazz.createBuffer();
            this.serviceProxy.rpcRequest(0, 1, req, response_cb);
        },

	});
