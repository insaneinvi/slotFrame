// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html


var ReelFramePool =  cc.Class({

    properties: {
       _frames:{
           default:[],
           type:[cc.SpriteFrame]
       }
    },

    ctor(){
        
    },

    setFrames(frames){
        this._frames = frames;
    },

    getFrameByIndex:function(index){
        if (index < this._frames.length){
            return this._frames[index];
        }
        return null;
    },

    randomFrame:function(){
        var baseRandom = Math.random();
        var randomIndex = parseInt(baseRandom * this._frames.length);
        return this._frames[randomIndex];
    },

    statics:{

        _instance:null,

        getInstance:function(){
            if(ReelFramePool._instance == null){
                ReelFramePool._instance = new ReelFramePool();
            }
            return ReelFramePool._instance;
        }
    }

});
