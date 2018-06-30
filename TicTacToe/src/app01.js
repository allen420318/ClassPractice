var MainLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var title = new cc.LabelTTF("井字棋","",48);
        title.x = cc.winSize.width /2 ;
        title.y = cc.winSize.height *7 /8;
        this.addChild(title);

        return true;
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

