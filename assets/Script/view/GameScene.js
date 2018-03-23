// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

var GameThemeManager = require('GameThemeManager');

cc.Class({
    extends: cc.Component,

    properties: {
        infoLabel:{
            type:cc.Label,
            default:null,
        }
    },

    ctor(){
    },

    _completeHandler(){

    }, 

    _progressHandler(percentage){
        this.infoLabel.string = percentage + "%"
    }, 
    
    
    _errorHandler(){

    },

    start () {
    },

    onclickCleanRes(target, event){
        GameThemeManager.getInstance().removeTheme(event);
    },

    onclickCheckDownload(target, event){
        GameThemeManager.getInstance().enterTheme(event,()=>{
            cc.director.loadScene('Reel');
        }, this._completeHandler.bind(this), this._progressHandler.bind(this), this._errorHandler.bind(this));
    },

    onclickEnterScene(){
        cc.director.loadScene('Reel');
    }
});
