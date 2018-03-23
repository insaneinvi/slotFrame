// create by wenjie

'use strict'

var ReelFramePool = require("ReelFramePool")

var RollingStatus = cc.Enum({
    setRollingConfig:0,
    stop:1,
    prepareRolling:2,
    rolling:3,
    prepareEaseOutIn:4,
    easeOutIn:5,
})

var ConfigSwitch = cc.Enum({
    OPPEN : 0,
    CLOSE : 1,//true easeInOut,  false actionInOut
});

var RollingConfig = {
    prepareDelta : 480,
    prepareParameter: 78,
    topSpeed:2000,
    easeOutParameter: 48000,
    easeInSpeed:20,
    easeInParmeter:3000,
}

var Reel = cc.Class({
    extends: cc.Component,
    
    properties: {

        symbolNumer:0,
        
        addtionalNum:0,

        symbolSize:{
            default:new cc.Vec2(0,0) 
        }, 

        isPrepareRolling:{
            type:ConfigSwitch,
            default:ConfigSwitch.OPPEN,
        },

        isEaseInOut:{
            type: ConfigSwitch,
            default: ConfigSwitch.OPPEN,
        },

        _isStopImmediately:false,

        stopAudio:{
            default:null,
            type:cc.AudioSource,
        },

        _cells:{
            default:[],
            type:[cc.Sprite],
        },

        _cellsAssignFrame:[],
        
        frames: {
            default: [],
            type: [cc.SpriteFrame]
        },
        
        _framePool:null,

        _rollingStatus:0,

        _topCellIndex:0,
        _bottomCellIndex:0,

        _cellHeight:0, 
        _halfCellHeight:0,
        _containerHeight:0,

        _rollingTopY:0,
        _rollingBottomPosY: 0,

        _firstAssignCellIndex:-1,
        _resetAssignZoderCount: 0,

        _tempRollingConfig : null,

        _rollingStartedCallBack : null,
        _rollingStopedCallBack : null,
    },
    
    onLoad () {
        
        this._rollingStatus = RollingStatus.stop;
        
        this._topCellIndex = 0;
        this._bottomCellIndex = this.symbolNumer + 1;
        
        this._cellHeight = this.symbolSize.y;
        this._halfCellHeight = this._cellHeight/2
        this._containerHeight = this.node.height;
        
        this._rollingBottomPosY = -this._halfCellHeight * (this.addtionalNum + 1);
        
        this._createSymbols();
    },

    _moveAllCells(delta){
        for(var i in this._cells){
            var node = this._cells[i].node;
            node.y = node.y + delta;
        }
    },
    
    _createSymbols(){
        let framePool = ReelFramePool.getInstance();
        framePool.setFrames(this.frames);
        var totalNumber = this.symbolNumer + this.addtionalNum * 2;
        var top_pos = (this.symbolNumer + this.addtionalNum) * this._cellHeight - this._halfCellHeight;
        for(var i = 0; i < totalNumber; ++i){
            var node = new cc.Node();
            node.x = 0,
            node.y = top_pos - i*this.symbolSize.y;
            node.parent = this.node;
            node.width = this.symbolSize.x;
            node.height = this.symbolSize.y;
            var sprite = node.addComponent(cc.Sprite);
            var frame = framePool.randomFrame();
            sprite.spriteFrame = frame;
            this._cells[i] = sprite;
        }
        this._rollingTopY = top_pos;

        this._framePool = framePool;
    },


    _callRollingStartedCallBack(){
        if (this._rollingStartedCallBack) {
            var func = this._rollingStartedCallBack.func;
            var context = this._rollingStartedCallBack.context;
            var param = this._rollingStartedCallBack.param;
            if (func) {
                func.call(context, param);
            }
            this._rollingStartedCallBack = null;
        }  
    },

    _callRollingStopedCallBack(){
        if (this._rollingStopedCallBack) {
            var func = this._rollingStopedCallBack.func;
            var context = this._rollingStopedCallBack.context;
            var param = this._rollingStopedCallBack.param;
            if (func) {
                func.call(context, param);
            }
            this._rollingStopedCallBack = null;
        }  
    },
    
    _cellSort(a,b){
       if(a.node.y < b.node.y){
           return -1;
       }else if (a.node.y>b.node.y){
           return 1;
       }else{
            return 0;
       }
    },

    _resetCellRandom(cell, cellIndex){
        cell.spriteFrame = this._framePool.randomFrame();
        cell.node.zIndex = 0;
    },

    
    _setRollingConfig(dt){
        var temp = {}
        temp.prepareDelta = RollingConfig.prepareDelta;
        temp.prepareParameter = RollingConfig.prepareParameter;
        temp.topSpeed = RollingConfig.topSpeed;
        temp.easeInSpeed = RollingConfig.easeInSpeed;
        temp.easeOutParameter = RollingConfig.easeOutParameter;
        temp.easeInParmeter = RollingConfig.easeInParmeter;
        this._tempRollingConfig = temp;
        this._rollingStatus = RollingStatus.prepareRolling;
        this._firstAssignCellIndex = -1
    },
    
    _moveUpCells(dt){
        if(this.isPrepareRolling == ConfigSwitch.CLOSE){
            this._rollingStatus = RollingStatus.rolling;
            return;            
        }
        var delta = this._tempRollingConfig.prepareDelta * dt;
        this._moveAllCells(delta);
        this._tempRollingConfig.prepareDelta -= this._tempRollingConfig.prepareParameter;
        var topNode = this._cells[this._topCellIndex].node;
        if (topNode.y <= this._rollingTopY){
            this._rollingStatus = RollingStatus.rolling;
        }
    },
    
    _prepareRolling(dt){
        this._moveUpCells(dt); 
        this._callRollingStartedCallBack();
        this._resetAssignZoderCount = this._cells.length;
    },

    _resetCellAssign(cell, cellIndex){
        if(this._firstAssignCellIndex == -1){
            this._firstAssignCellIndex = cellIndex;
        }
        cell.spriteFrame = this._framePool.randomFrame();
        cell.node.zIndex = this._resetAssignZoderCount--;
    },
    
    _rollingCells(dt){
        var resetIndexs = [];
        for (var index in this._cells) {
            var node = this._cells[index].node;
            if (node.y <= this._rollingBottomPosY) {
                resetIndexs[resetIndexs.length] = { node: node, index: index };
            } else {
                node.y = node.y - this._tempRollingConfig.topSpeed * dt;
            }
        }
        
        resetIndexs.sort(this._cellSort);
        
        return resetIndexs;
    },

    _rollingStopOrder(){
        this._rollingStatus = RollingStatus.stop;
        this._callRollingStopedCallBack();
    },

    _prepareEaseStopImmediately(dt){
        if(this._firstAssignCellIndex != - 1){
            var assignNode = this._cells[this._firstAssignCellIndex].node;
            var move_delta = this._tempRollingConfig.topSpeed * dt;
            if (assignNode.y - move_delta < this._rollingBottomPosY){
                move_delta  = assignNode.y - this._rollingBottomPosY;
                this._moveAllCells(-move_delta);
                this._rollingStopOrder();
                return [];
            }else{
                return this._rollingCells(dt);
            }
        }else{
            return this._rollingCells(dt);
        }
    },
    
    _prepareEase(dt){
        if (this._firstAssignCellIndex == this._bottomCellIndex ){
            var assignNode = this._cells[this._firstAssignCellIndex].node;
            if( assignNode.y <= this._rollingBottomPosY) {
                this._rollingStatus = RollingStatus.easeOutIn;
                this.stopAudio.play();
                return [];
            }else{
                return this._rollingCells(dt);
            }
        } else {
            return this._rollingCells(dt);
        } 
    },

    _actionCellIn(dt){
        var assignNode = this._cells[this._firstAssignCellIndex].node;
        var move_delta = this._tempRollingConfig.easeInSpeed * dt;
        var yp = assignNode.y + move_delta;
        if (yp >= this._rollingBottomPosY) {
            var delta = this._rollingBottomPosY - assignNode.y;
            move_delta = delta;
            this._rollingStopOrder();

        } 
        this._moveAllCells(move_delta);
        this._tempRollingConfig.easeInSpeed += this._tempRollingConfig.easeInParmeter * dt;
    },

    _easeCellIn(dt){
        var assignNode = this._cells[this._firstAssignCellIndex].node;
        var move_delta = this._tempRollingConfig.topSpeed * dt;
        var yp = assignNode.y - move_delta;
        
        if (yp >= this._rollingBottomPosY) {
            var delta = this._rollingBottomPosY - assignNode.y;
            move_delta = -delta;
            this._rollingStopOrder();

        }
        this._moveAllCells(-move_delta);
        this._tempRollingConfig.topSpeed -= this._tempRollingConfig.easeInParmeter * dt;
    },
    
    _easeCells(dt){
        if (this._tempRollingConfig.topSpeed <= 0){
            if(this.isEaseInOut == ConfigSwitch.OPPEN){
                this._easeCellIn(dt);
            }else{
                this._actionCellIn(dt);
            }
        }else{
            var move_delta = this._tempRollingConfig.topSpeed * dt;
            this._moveAllCells(-move_delta);
            this._tempRollingConfig.topSpeed -= this._tempRollingConfig.easeOutParameter * dt;
        }
    },
    
    _resetCells(dt, resetIndexs, resetFunc){
        if (resetIndexs.length != 0) {
            for (var k in resetIndexs) {
                var tb = resetIndexs[k];
                var resetIndex = tb.index;
                var cell = this._cells[resetIndex];
                resetFunc(cell, resetIndex);
                var topY = this._cells[this._topCellIndex].node.y;
                var resetY = topY + this._cellHeight;
                cell.node.y = resetY;
                this._topCellIndex = resetIndex;
                var tempIndex = resetIndex - 1;
                this._bottomCellIndex = tempIndex < 0 ? this._cells.length - 1 : tempIndex;
            }
        }
    },
    
    _reelRolling(dt){
        var resetIndexs = this._rollingCells(dt);
        this._resetCells(dt, resetIndexs, this._resetCellRandom.bind(this));
    },
    
    _prepareEaseStatus(dt){
        var resetIndexs 
        if(this._isStopImmediately){
            resetIndexs = this._prepareEaseStopImmediately(dt);
        }else{
            resetIndexs = this._prepareEase(dt);
        }
        this._resetCells(dt, resetIndexs, this._resetCellAssign.bind(this));
    },
    
    _rolling(dt){
        this._reelRolling(dt);
    },
    
    _prepareEaseOutIn(dt){
        this._prepareEaseStatus(dt);
    },
    
    _easeOutIn(dt){
        this._easeCells(dt);
    },  
    
    _switchRollingEngin(status){
        switch(status){
            case 'START':
                this._rollingStatus = RollingStatus.setRollingConfig;
                break;
            case 'STOP':
                this._rollingStatus = RollingStatus.prepareEaseOutIn;
                break;
        }
    },
    
    _rollingEngineRun(dt) {
        if (this._rollingStatus == RollingStatus.stop) {
            return;
        }
        switch (this._rollingStatus) {
            case RollingStatus.setRollingConfig:
                this._setRollingConfig();
                break;
            case RollingStatus.prepareRolling:
                this._prepareRolling(dt);
                break;
            case RollingStatus.rolling:
                this._rolling(dt);
                break;
            case RollingStatus.prepareEaseOutIn:
                this._prepareEaseOutIn(dt);
                break;
            case RollingStatus.easeOutIn:
                this._easeOutIn(dt);
                break;
        }
    },
    
    update (dt) {
        this._rollingEngineRun(dt);
    },

    /*
        startCallBack
        var startCallBack = {}
        startCallBack.func = callbackfunc,
        startCallBack.context = callbackfunc's context
        startCallBack.param = callfunc's param
        
        startCallBack only call once;
    */
   
    startRolling(startCallBack){
        this._rollingStartedCallBack = startCallBack;
        this._switchRollingEngin('START')
    },

    /*
        stopCallBack
        var stopCallBack = {}
        stopCallBack.func = callbackfunc,
        stopCallBack.context = callbackfunc's context
        stopCallBack.param = callfunc's param
        
        stopCallBack only call once;
    */
   
    stopRolling(stopCallBack,isImmediately){
        this._rollingStopedCallBack = stopCallBack;
        this._isStopImmediately = isImmediately;
        this._switchRollingEngin('STOP')
    }
    
});

Reel.RollingStatus = RollingStatus;

Reel.RollingConfig = RollingConfig;
