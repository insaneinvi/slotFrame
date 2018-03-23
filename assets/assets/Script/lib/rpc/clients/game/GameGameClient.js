
var RpcClient = require('RpcClient')
var ServiceRepository = require('ServiceRepository')
var ServiceRpcProxy = require('ServiceRpcProxy')
var GameGameBroadcastServiceImpl = require('GameGameBroadcastServiceImpl')
var GameGameService = require('GameGameService');

var GameGameClient = cc.Class({
    extends:RpcClient,

    properties:{
        serviceRepository:null,
        gameBroadserviceImpl:null,
        proxy:null,
        gameGameService:null,
        gameClientInfo:null
    },

    createNewConnection(){
        this.newConnection();

        this.serviceRepository = new ServiceRepository();
        this.gameBroadserviceImpl = new GameGameBroadcastServiceImpl();
        this.serviceRepository.registerService(this.gameBroadserviceImpl);
        this.proxy = new ServiceRpcProxy();
        this.proxy.registerConnAndRepos(this.connection, this.serviceRepository);
        this.gameGameService = new GameGameService(this.proxy);
    },

    connectGame(clientInfo,callBack){
        this.createNewConnection();
        this.gameClientInfo = clientInfo;
        this.connection.connect(clientInfo.ip,clientInfo.port, this.onConnectGame.bind(this));
    },

    onConnectGame(){
        cc.log("connect success");
    },

    echo(){
        // var it = pb.game.InnerTest;
        var inner = {
            num:1,
            str:'老司机啊老司机',
            bb:false,
        }
        var inner1 = {
            num: 2,
            str: '老司机啊老司机2',
            bb: false,
        }

        var inner2 = {
            num: 3,
            str: '老司机啊老司机3',
            bb: false,
        }

        var rep = [inner1, inner2];

        var clazz = pb.game.EchoTest;
        var request = clazz.createBuffer({
            num:4,
            str:'外层老 司机,asldjf;alfjhuiahdiubfhbfjkhaskdjhfkhj      !@#$%^&*(',
            bb:true,
            inner:inner,
            rep:rep
        });

        var done = function (request, response, error){
            for (var i in response){
                cc.log(i, '------------->', response[i]);
            }


            for (var i in response.rep){
                for (var j in response.rep[i]) {
                    cc.log(i, " : ", j, '------------->', response.rep[i][j])
                }
            }

            for (var i in response.inner) {
                cc.log(i, '------------->', response.inner[i])
            }
        }
        this.gameGameService.echo(request,done);
    }

})

/*
        // require('pb').createInstance();

        // var GameGameClient = require('GameGameClient');
        // var gameGameClient = new GameGameClient();
        // var clientInfo = {
        //     ip:'192.168.0.134',
        //     port:11011,
        // }
        // gameGameClient.connectGame(clientInfo)

        // this._gameClien = gameGameClient;
*/