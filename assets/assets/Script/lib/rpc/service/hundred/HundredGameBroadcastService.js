var HundredGameBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 5;
            this.init();
        },

        hundred_snapshot_closure(req){
            var clazz = pb.hundred.HundredSnapshot;
            var request = clazz.decodeBuffer(req);
            this.hundred_snapshot(request);
        },        
    
        round_begin_closure(req){
            var clazz = pb.hundred.RoundBeginSnapshot;
            var request = clazz.decodeBuffer(req);
            this.round_begin(request);
        },        
    
        round_end_closure(req){
            var clazz = pb.hundred.RoundResult;
            var request = clazz.decodeBuffer(req);
            this.round_end(request);
        },        
    
        peer_win_dealer_closure(req){
            var clazz = pb.hundred.PeerWinDealer;
            var request = clazz.decodeBuffer(req);
            this.peer_win_dealer(request);
        },        
    
        round_snapshot_closure(req){
            var clazz = pb.hundred.RoundSnapshot;
            var request = clazz.decodeBuffer(req);
            this.round_snapshot(request);
        },        
    
        init(){
            
            this.methods[0] = this.hundred_snapshot_closure;
        
            this.methods[1] = this.round_begin_closure;
        
            this.methods[2] = this.round_end_closure;
        
            this.methods[3] = this.peer_win_dealer_closure;
        
            this.methods[4] = this.round_snapshot_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        hundred_snapshot(request){
            cc.log("not implemented"); // not implemented
        },

        round_begin(request){
            cc.log("not implemented"); // not implemented
        },

        round_end(request){
            cc.log("not implemented"); // not implemented
        },

        peer_win_dealer(request){
            cc.log("not implemented"); // not implemented
        },

        round_snapshot(request){
            cc.log("not implemented"); // not implemented
        },

	});