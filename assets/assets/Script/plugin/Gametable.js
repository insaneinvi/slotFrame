//create by wenjie
var Reel = require('Reel')

var GameTableStatus = cc.Enum({
    Starting:0,
    Stoping:1,
    Wait:2
})

var GameTable = cc.Class({
    extends: cc.Component,

    properties: {
        reels :{
            default:[],
            type:[Reel],
        },

        commonSpriteFrame:{
            default:[],
            type:[cc.SpriteFrame],
        },

        _isReelsRolling:[],

        _isGameTabelStoping:false,
        _isGameTabelStarting:false,

        _gameTableStatus:null,

        _startReelIndex:0,
        _startInterval:0,

        _stopReelIndex:0,
        _stopInterval:0,

    },

    onLoad () {
        this._gameTableStatus = GameTableStatus.Stop;
        for(var i in this.reels){
            this.reels[i].frames = this.commonSpriteFrame;
        }
    },

    start () {

    },

    _isAllReelsStartedRolling(){
        return !this._isAllReelsStoped();
    },

    _resetReelsStatus(){
        for(var i in reels){
            this._isReelsRolling[i] = false;
        }
    },

    _reelsStartComplete(reelIndex){
        this._isReelsRolling[reelIndex] = true;
    },

    _createReelStartedCallBack(reelIndex){
        var cb = {}
        cb.func = this._reelsStartComplete;
        cb.context = this;
        cb.param = reelIndex;
        return cb;
    },

    _isAllReelsStoped(){
        for (var i in this._isReelsRolling){
            if(this._isReelsRolling[i]){
                return false;
            }
        }
        return true;
    },

    _reelsStopComplete(reelIndex){
        this._isReelsRolling[reelIndex] = false;
    },

    _createReelStopedCallBack(reelIndex) {
        var cb = {}
        cb.func = this._reelsStopComplete;
        cb.context = this;
        cb.param = reelIndex;
        return cb;
    },

    _gameStarted(){
        this._gameTableStatus = GameTableStatus.Wait;
        this._isGameTabelStarting = false;
    },
    
    _gameStarting(dt){
        this._isGameTabelStarting = true;
        for(var i in this.reels){
            var startCB = this._createReelStartedCallBack(i);
            this.reels[i].startRolling(startCB);
        }
        this._gameStarted();
    },

    _gameStoped(){
        this._gameTableStatus = GameTableStatus.Wait;
        this._stopReelIndex = 0;
        this._stopInterval = 0;
        this._isGameTabelStoping = false;
    },
    
    _gameStoping(dt){
        this._isGameTabelStoping = true;
        this._stopInterval += dt;
        if(this._stopInterval >= 0.28){
            var stopCB = this._createReelStopedCallBack(this._stopReelIndex);
            this.reels[this._stopReelIndex].stopRolling(stopCB);
            this._stopInterval = 0;
            this._stopReelIndex++;
        }
        if(this._stopReelIndex >= this.reels.length){
            this._gameStoped();
        }
    },
    
    update (dt) {
        if (this._gameTableStatus == GameTableStatus.Wait){
            return;
        }
        switch(this._gameTableStatus){
            case GameTableStatus.Starting:
            this._gameStarting(dt);
            break;
            case GameTableStatus.Stoping:
            this._gameStoping(dt);
            break;
        }
    },
    startGameRoll(){
        if(this._isAllReelsStoped() 
        && !this._isGameTabelStarting 
        && !this._isGameTabelStoping)
        {
            this._gameTableStatus = GameTableStatus.Starting;
            this.node.runAction(cc.sequence(
                cc.delayTime(1),
                cc.callFunc(()=>{
                    this.stopGameRoll();
                }),
            ))
        }
        // cc.game.restart();
        // cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
        //     for (var id in game._persistRootNodes) {
        //         game.removePersistRootNode(game._persistRootNodes[id]);
        //     }

        //     // Clear scene
        //     cc.director.getScene().destroy();
        //     cc.Object._deferredDestroy();

        //     cc.director.purgeDirector();

        //     // Clean up audio
        //     if (cc.audioEngine) {
        //         cc.audioEngine.uncacheAll();
        //     }

        //     cc.director.reset();
        //     // game.onStart();
        // });
    },

    stopGameRoll(){
        if(this._isAllReelsStartedRolling() 
        && !this._isGameTabelStoping 
        && !this._isGameTabelStarting)
        {
            this._gameTableStatus = GameTableStatus.Stoping;
        }
    },
    
});

GameTable.GameTableStatus = GameTableStatus;
