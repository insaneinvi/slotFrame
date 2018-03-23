var FruitRoomBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 2;
            this.init();
        },

        peer_take_seat_closure(req){
            var clazz = pb.fruit.PeerPlayer;
            var request = clazz.decodeBuffer(req);
            this.peer_take_seat(request);
        },        
    
        peer_leave_seat_closure(req){
            var clazz = pb.fruit.PeerLeaveSeat;
            var request = clazz.decodeBuffer(req);
            this.peer_leave_seat(request);
        },        
    
        init(){
            
            this.methods[0] = this.peer_take_seat_closure;
        
            this.methods[1] = this.peer_leave_seat_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        peer_take_seat(request){
            cc.log("not implemented"); // not implemented
        },

        peer_leave_seat(request){
            cc.log("not implemented"); // not implemented
        },

	});