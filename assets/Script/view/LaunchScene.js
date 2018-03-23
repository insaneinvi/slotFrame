var pb = require('pb')
var Http = require('Http')
var ThemeConfig = require('ThemeConfig')

var LaunchScene = cc.Class({

    extends:cc.Component,

    properties:{

    },

    start(){
        pb.createInstance();
        Http.loadLib();
        cc.director.loadScene('GameScene')
    },

});