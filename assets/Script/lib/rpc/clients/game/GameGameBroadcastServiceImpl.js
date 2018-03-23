
var GameGameBroadcastService = require('GameGameBroadcastService')

var GameGameBroadcastServiceImpl = cc.Class({
    
    extends:GameGameBroadcastService,

    notify_test(request) {
        cc.log("implemented"); // not implemented
        var response = request;
            for (var i in response){
                cc.log(i, '+++++++++++++++++++++++>', response[i]);
            }
 

            for (var i in response.rep){
                for (var j in response.rep[i]) {
                    cc.log(i, " : ", j, '+++++++++++++++++++++++>', response.rep[i][j])
                }
            }

            for (var i in response.inner) {
                cc.log(i, '+++++++++++++++++++++++>', response.inner[i])
            }
        cc.log("implementes---------------------")
    },

})