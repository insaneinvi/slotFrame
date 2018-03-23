var CookieManagement = require('CookieManagement')

var NetErrorCode = cc.Enum({
    REQUEST_FAILED: -1,
    REQUEST_NOT_COMPLETE : -2,
});

var Http = cc.Class({
    
    statics:{
        loadLib(){
            window.Http = Http;
        }
    },

    properties:{
        _url:null,
        _requestUri:null,
        _xhr:null,
    },

    __ctor__(url){
        this._url = url;
    },

    _serializeData(data){
        var str = '';
        for(var key in data){
            str += key + '=' + data[key] + '&';
        }
        str = str.substr(0, str.length - 1);
        return str;
    },

    _httpAction(method, uri, data, successFunc, failedFunc){
        method = method || 'GET';

        var xhr = cc.loader.getXMLHttpRequest();
        this._xhr = xhr;

        var scb = null;
        var fcb = null;

        var havaData = true;

        if (typeof (data) == "function") {
            havaData = false;
            scb = data;
            fcb = successFunc;
        } else {
            if (data == null)
                havaData = false;
            scb = successFunc;
            fcb = failedFunc;
        }

        xhr.onreadystatechange =  ()=>{
            cc.log(xhr.readyState, xhr.status);
            if(xhr.readyState != 4){
                if (fcb)
                    fcb(NetErrorCode.REQUEST_NOT_COMPLETE, xhr.readyState);
                return;
            }

            var status = (xhr.status == 1223) ? 204 : xhr.status;

            if(status < 100 || status > 599){
                if(fcb){
                    fcb(NetErrorCode.REQUEST_FAILED, status)
                }
            }

            CookieManagement.getInstance().manageCookie(this);

            var body = 'response' in xhr ? xhr.response : xhr.responseText;
            if (scb){
                var data = JSON.parse(body)
                scb(status, data);
            }
        }

        this._requestUri = uri;

        xhr.open(method, this._url + uri, true);
        CookieManagement.getInstance().setCookie(this);

        if(havaData){
            var sendData = "";
            sendData = this._serializeData(data);
            xhr.send(sendData);
        }else{
            xhr.send();
        }


    },

    getResponseHeader(key){
        return this._xhr.getResponseHeader(key);
    },

    getRequestUrl(){
        return this._url + this._requestUri;
    },
    
    setRequestHeader(key, value){
        this._xhr.setRequestHeader(key,value)
    },

    Get(uri, data, successFunc, failedFunc){
        this._httpAction("GET", uri, data, successFunc, failedFunc);
    },

    Post(uri, data, successFunc, failedFunc){
        this._httpAction("POST", uri, data, successFunc, failedFunc);
    },

})