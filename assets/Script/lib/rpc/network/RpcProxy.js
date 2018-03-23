// create by wenjie 2018-03-02

var RpcProxy = cc.Class({

    properties:{
        mConn:null,
    },

    registerConn(conn){
        this.mConn = conn;
        this.mConn.setRequestCallBack(this.rpcHandleRequestCB, this)
        this.mConn.setResponseCallBack(this.rpcHandleResponseCB, this)
        this.mConn.setErrorCallback(this.rpcHandleErrorCB, this)
    },

    
    sendRequest(serviceIndex, methodIndex, content){
        cc.log
        var clazz = pb.protocol.Request;
        var request = clazz.createBuffer({
            request:content,
            service:serviceIndex,
            method:methodIndex,
        });
        var identity = this.mConn.sendRequest(request);

        return identity;
    },

    sendResponse(identity, content){
        var clazz = pb.protocol.Response;
        var reponse = clazz.createBuffer({
            reponse:content
        });
        this.mConn.sendResponse(identity,response);
    },

    sendError(identity, error) {
        this.mConn.sendError(identity, error);
    },

    rpcHandleRequestCB(identity, request, contextProxy) {
        contextProxy.handlerRequest(identity, request);
    },

    rpcHandleResponseCB(identity, response, contextProxy) {
        contextProxy.handlerResponse(identity, response);
    },

    rpcHandleErrorCB(identity, error, contextProxy) {
        contextProxy.handlerError(identity, error);
    },

});