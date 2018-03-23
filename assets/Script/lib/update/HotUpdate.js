


var HotUpdate = cc.Class({
    
    properties:{
        _am:null,
        _manifestUrl:null,
        _storagePath:null,

        _checkListener:null,
        _isChecking:false,
        _updateListener:null,
        _isUpdating:false,
    },
    
    __ctor__(manifestUrl){
        if(!cc.sys.isNative){
            return;
        }
        this._manifestUrl = manifestUrl;
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'remote-asset');
        cc.log(this._storagePath);
        this._am = new jsb.AssetsManager(this._manifestUrl, this._storagePath, this.versionComparehandler);
        if (cc.sys.os === cc.sys.OS_ANDROID) {
            this._am.setMaxConcurrentTask(2);
        }
    },

    versionComparehandler(versionA, versionB){

    },

    checkUpdateHandler(event){
        switch(event.getEventCode()){
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                break;
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                break;
            default:
                return;
        }

        cc.eventManager.removeListener(this._checkListener)
        this._checkListener = null;
        this._isChecking = false;
    },
    
    checkUpdate(){
        if (this._isChecking){
            return;
        }

        this._checkListener = new jsb.EventListenerAssetsManager(this._am, this.checkUpdateHandler.bind(this));
        cc.eventManager.addListener(this._checkListener, 1);

        this._am.checkUpdate();
        this._isChecking = true;
    },

    upgradeHandler(event){

        var failed = false;
        var upgradeFinish = false;

        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                break;
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                failed = true;
                break;
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                failed = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                needRestart = true;
                break;
            case jsb.EventAssetsManager.UPDATE_FAILED:
                this._updating = false;
                break;
            case jsb.EventAssetsManager.ERROR_UPDATING:
                break;
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
        }
        
        if (failed) {
            cc.eventManager.removeListener(this._updateListener);
            this._updateListener = null;
            this._updating = false;
        }

        if (upgradeFinish){
            
        }
    },

    upgrade(){
        if (this._am && !this._isUpdating){
            this._updateListener = new jsb.EventAssetsManager(this._am, this.upgradeHandler.bind(this));
            cc.eventManager.addListener(this._updateListener, 1);
            if(this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                this._am.loadLocalManifest(this._manifestUrl);
            }

            this._failCount = 0;
            this._am.update();
            this._isUpdating = true;
        }
    }
// cc.game.restart();
        // cc.director.once(cc.Director.EVENT_AFTER_DRAW, function () {
        //     for (var id in game._persistRootNodes) {
        //         game.removePersistRootNode(game._persistRootNodes[id]);
        //     }

        //     // Clear scene
        //     cc.director.getScene().destroy();
        //     cc.Object._deferredDestroy();

        //     cc.director.purgeDirector();

        //     // Clean up audio
        //     if (cc.audioEngine) {
        //         cc.audioEngine.uncacheAll();
        //     }

        //     cc.director.reset();
        //     // game.onStart();
        // });


})