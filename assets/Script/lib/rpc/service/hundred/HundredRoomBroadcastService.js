var HundredRoomBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 2;
            this.init();
        },

        peer_take_seat_closure(req){
            var clazz = pb.hundred.PeerPlayer;
            var request = clazz.decodeBuffer(req);
            this.peer_take_seat(request);
        },        
    
        peer_leave_seat_closure(req){
            var clazz = pb.hundred.PeerLeaveSeat;
            var request = clazz.decodeBuffer(req);
            this.peer_leave_seat(request);
        },        
    
        leave_room_closure(req){
            var clazz = pb.hundred.LeaveRoomRequest;
            var request = clazz.decodeBuffer(req);
            this.leave_room(request);
        },        
    
        peer_enter_room_closure(req){
            var clazz = pb.hundred.EnterRoomRequest;
            var request = clazz.decodeBuffer(req);
            this.peer_enter_room(request);
        },        
    
        init(){
            
            this.methods[0] = this.peer_take_seat_closure;
        
            this.methods[1] = this.peer_leave_seat_closure;
        
            this.methods[2] = this.leave_room_closure;
        
            this.methods[3] = this.peer_enter_room_closure;
        
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

        leave_room(request){
            cc.log("not implemented"); // not implemented
        },

        peer_enter_room(request){
            cc.log("not implemented"); // not implemented
        },

	});