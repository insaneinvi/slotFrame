var pb_protocol = require('pb_protocol')
var pb_db = require('pb_db')
var pb_game = require('pb_game')
var pb_fruit = require('pb_fruit')
var pb_common = require('pb_common')
var pb_chat = require('pb_chat')
var pb_hundred = require('pb_hundred')

var pb = cc.Class({
    statics: {
        _instance: null,

        createInstance: function () {
            if (pb._instance == null) {
                pb._instance = new pb();
            }
            window.pb = pb._instance;
        }
    }, 

    properties:{
		protocol:null,
		db:null,
		game:null,
		fruit:null,
		common:null,
		chat:null,
		hundred:null,
	},

	ctor(){
		this.protocol = pb_protocol.getInstance();
		this.db = pb_db.getInstance();
		this.game = pb_game.getInstance();
		this.fruit = pb_fruit.getInstance();
		this.common = pb_common.getInstance();
		this.chat = pb_chat.getInstance();
		this.hundred = pb_hundred.getInstance();
	},
});
