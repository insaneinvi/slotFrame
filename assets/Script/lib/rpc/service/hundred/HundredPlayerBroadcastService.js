var HundredPlayerBroadcastService = cc.Class({
        properties:{
            serviceIndex:0,
            methods:[],
        },
        
        ctor(){
            this.serviceIndex = 3;
            this.init();
        },

        update_currency_closure(req){
            var clazz = pb.hundred.UpdateCurrencyRequest;
            var request = clazz.decodeBuffer(req);
            this.update_currency(request);
        },        
    
        logon_else_closure(req){
            var clazz = pb.hundred.PlayerLogonElse;
            var request = clazz.decodeBuffer(req);
            this.logon_else(request);
        },        
    
        update_vip_closure(req){
            var clazz = pb.hundred.UpdateVipRequest;
            var request = clazz.decodeBuffer(req);
            this.update_vip(request);
        },        
    
        update_property_closure(req){
            var clazz = pb.hundred.UpdatePropertyRequest;
            var request = clazz.decodeBuffer(req);
            this.update_property(request);
        },        
    
        admin_increment_pool_closure(req){
            var clazz = pb.hundred.IncrementPoolRequest;
            var request = clazz.decodeBuffer(req);
            this.admin_increment_pool(request);
        },        
    
        update_cat_weight_closure(req){
            var clazz = pb.hundred.UpdateCatWeightRequest;
            var request = clazz.decodeBuffer(req);
            this.update_cat_weight(request);
        },        
    
        init(){
            
            this.methods[0] = this.update_currency_closure;
        
            this.methods[1] = this.logon_else_closure;
        
            this.methods[2] = this.update_vip_closure;
        
            this.methods[3] = this.update_property_closure;
        
            this.methods[4] = this.admin_increment_pool_closure;
        
            this.methods[5] = this.update_cat_weight_closure;
        
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

        update_vip(request){
            cc.log("not implemented"); // not implemented
        },

        update_property(request){
            cc.log("not implemented"); // not implemented
        },

        admin_increment_pool(request){
            cc.log("not implemented"); // not implemented
        },

        update_cat_weight(request){
            cc.log("not implemented"); // not implemented
        },

	});