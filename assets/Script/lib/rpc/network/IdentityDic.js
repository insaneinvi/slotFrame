// create by wenjie 2018-03-02

var IdentityDic = cc.Class({

    properties:{
        mDictIdentity:[],
    },

    getCount(){
        var n = 0;
        for(var i in this.mDictIdentity){
            n++;
        }
        return n;
    },

    hasIdentity(identity){
        return this.mDictIdentity[identity] != undefined;
    },

    getRequestResponseAction(identity){
        if(this.hasIdentity(identity)){
            return this.mDictIdentity[identity];
        }
        return null;
    },

    pushRequestResponseAction(identity, request, callback ){
        var action = {};
        action.request = request;
        action.callback = callback;
        this.mDictIdentity[identity] = action;
    },

    popRequestResponseAction(identity){
        this.mDictIdentity[identity] = undefined;
    },

    freeIdentities(){
        this.mDictIdentity = {};
    },
});