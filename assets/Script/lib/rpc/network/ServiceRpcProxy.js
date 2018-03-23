// create by wenjie 2018-03-02

var RpcProxy = require('RpcProxy')
var IdentityDic = require('IdentityDic')
var ServiceRpcProxy = cc.Class({

    extends:RpcProxy, 

    properties:{
        mActiveIdentityDic: null,
        mServiceRepository: null,
    },

    ctor(){
        this.mActiveIdentityDic = new IdentityDic();
    },

    registerConnAndRepos(conn, serviceRepository){
        this.registerConn(conn);
        this.registerServiceRepositoty(serviceRepository);
    },

    registerServiceRepositoty(serviceRepository){
        this.mServiceRepository = serviceRepository;
    },


    rpcRequest(serviceIndex, methodIndex, request, callback){
        var identity = this.sendRequest(serviceIndex, methodIndex, request);
        if(callback != null)
            this.mActiveIdentityDic.pushRequestResponseAction(identity, request, callback);
    },

    rpcResponse(identity, response){
        this.sendResponse(identity, response);
    },

    handlerRequest(identity, rpcRequest){
        var service = this.mServiceRepository.getServiceByIndex(rpcRequest.service);
        if(service == null)
            return;

        service.CallMethod(rpcRequest.method,rpcRequest.request);
    },

    handlerResponse(identity, rpcResponse){
        var action = this.mActiveIdentityDic.getRequestResponseAction(identity);
        this.mActiveIdentityDic.popRequestResponseAction(identity);
        if (action == null) {
            return;
        }
        var callback = action.callback;
        var request = action.request;

        callback(request, rpcResponse.response, null);
    },

    handlerError(identity, rpcError){
        var action = this.mActiveIdentityDic.getRequestResponseAction(identity);
        this.mActiveIdentityDic.popRequestResponseAction(identity);
        if (action == null) {
            return;
        }

        var callback = action.callback;
        var request = action.request;

        if (callback != null && rpcError != null) {
            callback(request, null, rpcError);
        }
    }
});