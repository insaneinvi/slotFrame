var FruitAccountService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        enter_fruit(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.EnterFruitResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(0, 0, request, response_cb);
        },

        leave_fruit(done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.LeaveFruitResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            var clazz = pb.protocol.Void;
            var req = clazz.createBuffer();
            this.serviceProxy.rpcRequest(0, 1, req, response_cb);
        },

	});
