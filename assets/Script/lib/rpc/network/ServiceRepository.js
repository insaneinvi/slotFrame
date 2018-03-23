// create by wenjie 2018-03-02
var ServiceRepository = cc.Class({
    
    properties:{
        mDictService:[],
    },

    hasServiceIndex(index) {
        return this.mDictService[index] != undefined;
    },

    hasService(service){
        var index = this.getServiceIndex(service);
        return this.hasServiceIndex(index);
    },

    getServiceIndex(service){
        return service.serviceIndex;
    },

    getServiceByIndex(index){
        if (this.hasServiceIndex(index)){
            return this.mDictService[index];
        }
        return null;
    },

    registerService(service){
        if(this.hasService(service)){
            return false;
        }

        var index = this.getServiceIndex(service);
        this.mDictService[index] = service;
        return true;
    },

    unregisterService(service){
        if(!this.hasService(service)){
            return false;
        }
        var serviceIndex = this.getServiceIndex(service);
        this.mDictService[serviceIndex] = undefined;
        return true;
    }
});