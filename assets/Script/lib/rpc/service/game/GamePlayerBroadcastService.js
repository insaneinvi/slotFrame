var GamePlayerBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 1;
            this.init();
        },

        update_currency_closure(req){
            var clazz = pb.game.UpdateCurrencyRequest;
            var request = clazz.decodeBuffer(req);
            this.update_currency(request);
        },        
    
        logon_else_closure(req){
            var clazz = pb.game.PlayerLogonElse;
            var request = clazz.decodeBuffer(req);
            this.logon_else(request);
        },        
    
        init(){
            
            this.methods[0] = this.update_currency_closure;
        
            this.methods[1] = this.logon_else_closure;
        
        },
        
        CallMethod(method, request){
            var func = this.methods[method];
            if (func != null){
                func.call(this,request);
            }
        },
        
        update_currency(request){
            cc.log("not implemented"); // not implemented
        },

        logon_else(request){
            cc.log("not implemented"); // not implemented
        },

	});