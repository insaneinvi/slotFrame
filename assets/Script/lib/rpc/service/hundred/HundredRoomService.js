var HundredRoomService = cc.Class({
        properties:{
            serviceProxy:null,
        },  

        __ctor__(serviceProxy){
            this.serviceProxy = serviceProxy;
        },

        take_seat(request, done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.hundred.TakeSeatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            
            this.serviceProxy.rpcRequest(1, 0, request, response_cb);
        },

        leave_seat(done){
            var response_cb=function(request, resp, error){
                var response = null;
                if (error == null){
                    var clazz = pb.hundred.LeaveSeatResponse;
                    response = clazz.decodeBuffer(resp);
                }
                done(request, response, error);
            }
            var clazz = pb.protocol.Void;
            var req = clazz.createBuffer();
            this.serviceProxy.rpcRequest(1, 1, req, response_cb);
        },

	});
