
var CookieManagement = cc.Class({
    statics:{
        _instance:null,
        getInstance(){
            if(CookieManagement._instance == null){
                CookieManagement._instance = new CookieManagement();
            }
            return CookieManagement._instance;
        }
    },

    ctor(){
        this._cookie_pool = {};
    },

    properties:{
        _cookie_pool:null,
    },

    _getRequestMainHost(req){
        var url = req.getRequestUrl();
        var su = url.split('/')
        var mainHost = su[2];
        return mainHost;
    },

    _getRequestCookie(mainHost){
        return this._cookie_pool[mainHost];
    },

    dumpCookies(){
        for(var i in this._cookie_pool){
            cc.log(i, " : ", this._cookie_pool[i]);
        }
    },

    manageCookie(req){ 
        var cookie = req.getResponseHeader(CookieManagement.COOKIE);
        var mainHost = this._getRequestMainHost(req);
        this._cookie_pool[mainHost] = cookie;
        this.dumpCookies();
    },

    setCookie(req){
        var url = req.getRequestUrl();
        var mainHost = this._getRequestMainHost(req);
        var cookie = this._getRequestCookie(mainHost);
        if(cookie != undefined && cookie != null){
            req.setRequestHeader(CookieManagement.COOKIE, cookie);
        }
    }
});

CookieManagement.COOKIE = 'cookie_session'