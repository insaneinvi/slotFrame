var MD5 = require('md5');


var ErrorStauts = cc.Enum({
    DOWNLOAD_ERROR : 1,
    MD5_ERROR : 2,
    DECOMPRESS_ERROR:3,
});

var GameDownloader = cc.Class({
    
    statics:{
        downloadidentifier:1,
        _instance:null,
        getInstance(){
            if(GameDownloader._instance == null){
                GameDownloader._instance = new GameDownloader();
            }
            return GameDownloader._instance;
        }
    },

    properties:{
        _downloader: null,
        _resourcePath:null,
        _storagePath:null,
        _tempFileName:null,

        _identifierPool:null,

        _am:null,
    },

    ctor(){
        var resourceFolder = 'append-resource/';
        var themeResFolder = 'res/raw-assets/ThemeRes/'
        this._resourcePath = jsb.fileUtils.getWritablePath() + resourceFolder;
        this._storagePath = this._resourcePath + themeResFolder;
        this._downloader = new jsb.Downloader();
        this._downloader.setOnFileTaskSuccess(this._onSuccessed.bind(this));
        this._downloader.setOnTaskProgress(this._onProgress.bind(this));
        this._downloader.setOnTaskError(this._onError.bind(this));
        this._identifierPool = {};
        this.am = new jsb.AssetsManager('', this._storagePath);
    },

    _registerDownloadHandler(identifier ,completeHandler, progressHandler, errorHandler){
        var handlerGroup = {};
        handlerGroup._completeHandler = completeHandler;
        handlerGroup._progressHandler = progressHandler;
        handlerGroup._errorHandler = errorHandler;
        this._identifierPool[identifier] = handlerGroup;
        return handlerGroup;
    },

    _getDownloaderHandler(identifier){
        return this._identifierPool[identifier];
    },
    
    _checkFilesMd5(filePath, fileMd5){
        var fmd5 = jsb.CCCrypto.MD5FileJS(filePath);
        return fmd5 == fileMd5;
    },
    
    _decompressDownloader(info ,filePath){
        var status = this.am.decompress(filePath);
        if(status){
            if(info._completeHandler){
                info._completeHandler();
            }
            jsb.fileUtils.removeFile(filePath);
        }else{
            if(info._errorHandler){
                info._errorHandler(ErrorStauts.DECOMPRESS_ERROR);
            }
        }
    },

    _onSuccessed(task){
        var identifier = task.identifier;
        if (this._identifierPool[identifier] == undefined || this._identifierPool[identifier] == null) {
            return;
        }

        var info = this._identifierPool[identifier];
        this._identifierPool[identifier] = undefined;

        var filePath = this._getFileName(info.fileMd5);
        
        if (this._checkFilesMd5(filePath, info.fileMd5)){
            this._decompressDownloader(info, filePath);
        }else{
            if(info._errorHandler){
                info._errorHandler(ErrorStauts.MD5_ERROR);
            }
        }
    },

    _onProgress(task, bytesReceived, totalBytesReceived, totalBytesExpected){
        var identifier = task.identifier;
        if(this._identifierPool[identifier] == undefined || this._identifierPool[identifier] == null){
            return;
        }
        
        var info = this._identifierPool[identifier];

        var percentage = totalBytesReceived / totalBytesExpected * 100;
        percentage = Math.floor(percentage);
        if(percentage > 99){
            percentage = 99;
        }
        if(info._progressHandler){
            info._progressHandler(percentage);
        }
    },

    _onError(task, errorCode, errorCodeInternal, errorStr){
        var identifier = task.identifier;
        if (this._identifierPool[identifier] == undefined || this._identifierPool[identifier] == null) {
            return;
        }

        var info = this._identifierPool[identifier];
        this._identifierPool[identifier] = undefined;

        if(info._errorHandler){
            info._errorHandler();
        }
    },

    _getFileName(fileMd5){
        return this._storagePath + fileMd5 + '.zip';
    },

    _isFileDownload(fileMd5){
        for(var i in this._identifierPool){
            var info = this._identifierPool[i];
            if (info != undefined && info != null && info.fileMd5 == fileMd5){
                return true;
            }
        }
        return false;
    }, 

    getDownloadResourcePath(){
        return this._resourcePath;
    },
    
    getDownloadStoragePath(){
        return this._storagePath;
    },
    
    download(url, fileMd5, completeHandler, progressHandler, errorHandler)  {
        if(this._isFileDownload(fileMd5)){
            return;
        }
        var inited = jsb.fileUtils.createDirectory(this._storagePath);
        
        if(inited){
            var filePath = this._getFileName(fileMd5);
            this._downloader.createDownloadFileTask(url, filePath, GameDownloader.downloadidentifier);
            var info = this._registerDownloadHandler(GameDownloader.downloadidentifier, completeHandler, progressHandler, errorHandler);
            info.fileMd5 = fileMd5;
            for (var i in this._identifierPool) {
                var info = this._identifierPool[i];
                cc.log(info.fileMd5)
            }
            GameDownloader.downloadidentifier++;
        }
    },
});




GameDownloader.ErrorStauts  = ErrorStauts;