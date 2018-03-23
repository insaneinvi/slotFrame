var FruitGameService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        stake_fruit(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.StakeFruitResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 0, request, response_cb);
        },

        stake_fruits(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.StakeFruitsResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 1, request, response_cb);
        },

        cancel_stake_fruit(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.CancelStakeFruitResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 2, request, response_cb);
        },

        stake_taisai(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.StakeTaisaiResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 3, request, response_cb);
        },

        cancel_stake_taisai(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.fruit.CancelStakeTaisaiResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(4, 4, request, response_cb);
        },

	});
