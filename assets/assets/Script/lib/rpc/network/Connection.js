// create by wenjie 2018-03-02

var CONNECT_STATUS = cc.Enum({
    OPEN:0,
    CLOSE:1,
    ERROR:2,
});

var Connection = cc.Class({

    properties:{
        mSocket:null,

        nowId:0,
        mIP : "", 
        mPort : 0,
        mActive : false,

        mActionRequest:null,
        mRequestContext:null,

        mActionResponse:null,
        mResponseContext:null,

        mActionError:null,
        mErrorContext:null,

        lastHeartBeatTime:0,
        heartBeatSendTimes:[],

        connectCallback:null,
        connectStatusEventListener:[],
    },

    statics:{
        id:0,
        mIdentityCounter:0,
    },

    ctor(){
        this.nowId = Connection.id;
        Connection.id++;
        this.connectStatusEventListener[CONNECT_STATUS.OPEN] = {}
        this.connectStatusEventListener[CONNECT_STATUS.CLOSE] = {}
        this.connectStatusEventListener[CONNECT_STATUS.ERROR] = {}
    },

    connect(ip, port, connectCallback){
       this.mSocket = new WebSocket('ws://' + ip + ":" + port.toString());
       this.mSocket.onopen = this.onSocketOpen.bind(this);
       this.mSocket.onmessage =  this.onReceiveMessage.bind(this);
       this.mSocket.onerror = this.onSocketError.bind(this);
       this.mSocket.onclose = this.onSocketClose.bind(this);
       this.mIP = ip;
       this.mPort = port;
       this.connectCallback = connectCallback;
    },

    startHeartBeat(){
        cc.log("start Heart Beat")
        var scheduler = cc.director.getScheduler();
        scheduler.schedule(this.onHeartBeatTimer, this, 3, false);
    },

    stopHeartBeat(){
        var scheduler = cc.director.getScheduler();
        if(scheduler.isScheduled(this.onHeartBeatTimer,this))
            scheduler.unschedule(this.onHeartBeatTimer, this);  
    },

    onSocketOpen(event){
        this.heartBeatSendTimes = [];
        this.startHeartBeat();
        this.connectCallback();
        this.trigerConnectStatusHandler(CONNECT_STATUS.OPEN);
    },

    _getDataBuffer(data){
        var buffer = []
        var dv = new DataView(data);
        for(var i = 0; i < data.byteLength; i++){
            buffer[i] = dv.getUint8(i);
        }
        return buffer;
    },

    onReceiveMessage(event){
        var data = event.data;
        if (data.byteLength > 0){
            var buffer = this._getDataBuffer(data);
            var clazz = pb.protocol.Packet;
            var packet = clazz.decodePacket(buffer);
            switch(packet.type){
                case pb.protocol.PacketType.values.HEARTBEAT:
                    break;
                case pb.protocol.PacketType.values.ERROR:
                case pb.protocol.PacketType.values.WARNING:
                    var clazz = pb.protocol.Error;
                    var info = clazz.decodePacket(packet.serialized);
                    thia.mActionError(packet.identity, info, this.mErrorContext);
                    break;
                case pb.protocol.PacketType.values.REQUEST:
                    var clazz = pb.protocol.Request;
                    var request = clazz.decodePacket(packet.serialized);
                    this.mActionRequest(packet.identity, request, this.mRequestContext);
                    break;
                case pb.protocol.PacketType.values.RESPONSE:
                    var clazz = pb.protocol.Response;
                    var response = clazz.decodePacket(packet.serialized);
                    this.mActionResponse(packet.identity, response, this.mResponseContext);
                    break;
            }
        }else{
            cc.log("byte byteLength :", data.byteLength)
        }
    },

    onSocketError(event){
        cc.log("Connect Error");
        this.trigerConnectStatusHandler(CONNECT_STATUS.ERROR);
    },

    onSocketClose(event){
        cc.log('Connection close');
        this.closeConnection();
    },
    
    closeConnection(){
        this.stopHeartBeat();
        this.mSocket.close();
        this.trigerConnectStatusHandler(CONNECT_STATUS.CLOSE);
    },

    sendMessage(type, identity, req){
        var clazz = pb.protocol.Packet;
        var packet = clazz.createBuffer({
            identity:identity,
            type:type,
            version:1,
            serialized:req,
        });
        this.mSocket.send(packet);
    },

    onHeartBeatTimer(){
        var curTime = new Date().getTime();
        var lastTime = this.lastHeartBeatTime || curTime;
        this.lastHeartBeatTime = curTime;
        this.heartBeatSendTimes.push(curTime);
        if (this.mSocket.readyState == WebSocket.CLOSED || curTime - lastTime >= 25000){
            this.closeConnection();
        }else{
            var clazz = pb.protocol.Heartbeat;
            var heartbeat = clazz.createBuffer();
            this.sendMessage(pb.protocol.PacketType.values.HEARTBEAT, 0, heartbeat);
        }

    },

    sendRequest(request){
        var identity = ++Connection.mIdentityCounter;
        if(identity == 0){
            identity = Connection.mIdentityCounter = 1;
        }
        this.sendMessage(pb.protocol.PacketType.values.REQUEST, identity, request);
        return identity;
    },

    sendResponse(response){
        var identity = ++Connection.mIdentityCounter;
        if (identity == 0) {
            identity = Connection.mIdentityCounter = 1;
        }
        return this.sendMessage(pb.protocol.PacketType.values.RESPONSE, identity, response)
    },

    sendError(error){
        var identity = ++Connection.mIdentityCounter;
        if (identity == 0) {
            identity = Connection.mIdentityCounter = 1;
        }
        return this.sendMessage(pb.protocol.PacketType.values.ERROR, identity, response)
    },

    setRequestCallBack(ActionRequest, RequestContext){
        this.mActionRequest = ActionRequest,
        this.mRequestContext = RequestContext
    },

    setResponseCallBack(ActionResponse, ResponseContext){
        this.mActionResponse = ActionResponse;
        this.mResponseContext = ResponseContext;
    },

    setErrorCallback(ActionError, ErrorContext){
        this.mActionError = ActionError;
        this.mErrorContext = ErrorContext;
    },

    addConnectStatusHandler(status, func, target){
        this.connectStatusEventListener[status] = {func:func,target:target}
        return this;
    },

    trigerConnectStatusHandler(status){
        var funcInfo = this.connectStatusEventListener[status];
        var func = funcInfo.func;
        var target = funcInfo.target;
        if(func != null){
            func.call(target, this);
        }
    }
});

Connection.CONNECT_STATUS = CONNECT_STATUS;