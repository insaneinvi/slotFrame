var Connection = require('Connection');

var RpcClient = cc.Class({
    
    properties:{
        connection:null,
    },

    newConnection(){
        this.closeConnection();
        this.connection = new Connection();
        this.connection.addConnectStatusHandler(Connection.CONNECT_STATUS.OPEN, this._onConnectionOpen, this)
                        .addConnectStatusHandler(Connection.CONNECT_STATUS.CLOSE, this._onConnectionClose, this)
                        .addConnectStatusHandler(Connection.CONNECT_STATUS.ERROR, this._onConnectionError, this);
    },

    closeConnection(){
        if(this.connection){
            this.connection.closeConnection();
            this.connection = null;
        }
    },

    _onConnectionOpen(target){
        if(this.connection == target){
            this._onConnectionOpen()
        }
    },

    _onConnectionClose(target){
        if (this.connection == target) {
            this.onConnectionClose();
        }
    },

    _onConnectionError(target){
        if (this.connection == target) {
            this.onConnectionError()
        }
    },

    onConnectionOpen(){

    },

    onConnectionClose(){

    },

    onConnectionError(){

    },
});