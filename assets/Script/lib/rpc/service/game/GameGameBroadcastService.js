var GameGameBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 3;
            this.init();
        },

        notify_test_closure(req){
            var clazz = pb.game.EchoTest;
            var request = clazz.decodeBuffer(req);
            this.notify_test(request);
        },        
    
        init(){
            
            this.methods[0] = this.notify_test_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        notify_test(request){
            cc.log("not implemented"); // not implemented
        },

	});