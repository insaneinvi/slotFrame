var FruitGameBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 5;
            this.init();
        },

        fruit_snapshot_closure(req){
            var clazz = pb.fruit.FruitSnapshot;
            var request = clazz.decodeBuffer(req);
            this.fruit_snapshot(request);
        },        
    
        round_begin_closure(req){
            var clazz = pb.fruit.RoundBeginSnapshot;
            var request = clazz.decodeBuffer(req);
            this.round_begin(request);
        },        
    
        fruit_end_closure(req){
            var clazz = pb.fruit.FruitResult;
            var request = clazz.decodeBuffer(req);
            this.fruit_end(request);
        },        
    
        taisai_begin_closure(req){
            var clazz = pb.fruit.TaisaiBeginSnapshot;
            var request = clazz.decodeBuffer(req);
            this.taisai_begin(request);
        },        
    
        taisai_end_closure(req){
            var clazz = pb.fruit.TaisaiResult;
            var request = clazz.decodeBuffer(req);
            this.taisai_end(request);
        },        
    
        round_snapshot_closure(req){
            var clazz = pb.fruit.RoundSnapshot;
            var request = clazz.decodeBuffer(req);
            this.round_snapshot(request);
        },        
    
        init(){
            
            this.methods[0] = this.fruit_snapshot_closure;
        
            this.methods[1] = this.round_begin_closure;
        
            this.methods[2] = this.fruit_end_closure;
        
            this.methods[3] = this.taisai_begin_closure;
        
            this.methods[4] = this.taisai_end_closure;
        
            this.methods[5] = this.round_snapshot_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        fruit_snapshot(request){
            cc.log("not implemented"); // not implemented
        },

        round_begin(request){
            cc.log("not implemented"); // not implemented
        },

        fruit_end(request){
            cc.log("not implemented"); // not implemented
        },

        taisai_begin(request){
            cc.log("not implemented"); // not implemented
        },

        taisai_end(request){
            cc.log("not implemented"); // not implemented
        },

        round_snapshot(request){
            cc.log("not implemented"); // not implemented
        },

	});