var GameDownloader = require('GameDownloader');
var ThemeInfoGetter = require('ThemeInfoGetter');

var GameThemeEvent = cc.Enum({
    DOWNLOAD_PERCENTAGE:0,
});

var GameThemeManager = cc.Class({

    statics:{
        themePrefix:'theme',

        _instance:null,

        getInstance(){
            if (GameThemeManager._instance == null){
                GameThemeManager._instance = new GameThemeManager();
            }
            return GameThemeManager._instance;
        }
    },

    properties:{
        _gameDownloader:null,
        _themeInfoGetter:null,
        _themeDownloadStatus:null,
    },


    ctor(){
        this._gameDownloader = GameDownloader.getInstance();
        this._themeInfoGetter = new ThemeInfoGetter();
        this._themeDownloadStatus = {};
        this._init();

    },

    _init(){
        var themeIds = ThemeConfig.themes;
        for(var i in themeIds){
            var isExist = this._checkThemeDownload(themeIds[i]);
            this._setThemeExist(themeIds[i], isExist);
        }
        this._addResourceSearchPath();
    },

    _addResourceSearchPath(){
        if (window.cc && cc.sys.isNative) { 
            jsb.fileUtils.addSearchPath(this._gameDownloader.getDownloadResourcePath()); 
        }
    },

    // 仅检查主题的文件夹是否存在，不保证文件夹下内容是否完整。
    _checkThemeDownload(themeName){
        var storePath = this._gameDownloader.getDownloadStoragePath();
        return jsb.fileUtils.isDirectoryExist(storePath + themeName + '/');
    },

    _setThemeExist(themeId, isExist){
        var tn = GameThemeManager.themePrefix + themeId;
        this._themeDownloadStatus[tn] = isExist;
    },

    isThemeExist(themeId){
        var tn = GameThemeManager.themePrefix + themeId;
        return this._themeDownloadStatus[tn];        
    },

    removeTheme(themeId){
        if(this.isThemeExist(themeId)){
            var storePath = this._gameDownloader.getDownloadStoragePath();
            var status = jsb.fileUtils.removeDirectory(storePath + themeId + '/')
            this._setThemeExist(themeId, !status);
        }
    },

    enterTheme(themeId, enterHandler ,completeHandler, progressHandler, errorHandler) {
        if(this.isThemeExist(themeId)){
            if(enterHandler)
                enterHandler();
        }else{
            this._themeInfoGetter.requestThemeInfo(themeId, (resource_url, md5)=>{
                this._gameDownloader.download(resource_url, md5, ()=>{
                    this._setThemeExist(themeId, true);
                    if(completeHandler){
                        completeHandler()
                    }
                }, progressHandler, errorHandler);
            }, ()=>{
                if(errorHandler)
                    errorHandler()
            });
        }
    },


});