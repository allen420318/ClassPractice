var Main02Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

        return true;
    }
});

var Main02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Main02Layer();
        this.addChild(layer);
    }
});

