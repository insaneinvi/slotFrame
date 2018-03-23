var ErrorStatus = cc.Enum({
    REQUEST_ERROR:1,
});

var ThemeInfoGetter = cc.Class({
    properties:{
        httpGetter:null,
        requestQueen:null,
    },

    __ctor__(){
        this.httpGetter = new Http('http://192.168.0.169/slot/update_resource/');
        this.requestQuee = {};
    },

    requestThemeInfo(themeId, getSuccess, getFailed){
        if (this.requestQuee[themeId])
            return;
        var data = {};
        data.mode_id = themeId;
        data.app_version = 0.1;
        this.requestQuee[themeId] = true;
        this.httpGetter.Post('get_resource/', data,(status,data)=>{
            this.requestQuee[themeId] = false;
            getSuccess(data.resource_url, data.md5);
        },(error, status)=>{
            this.requestQuee[themeId] = false;
            getFailed();
        })
    }

})

ThemeInfoGetter.ErrorStatus = ErrorStatus;
