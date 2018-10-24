var Item1Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var title = new cc.LabelTTF("Item1","",48);
        title.x = cc.winSize.width /2;
        title.y = cc.winSize.height *7 /8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu: function () {
        var back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_select_png,
            res.back_disselect_png,
            this.back,this
        );

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    }
});

var Item1Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item1Layer();
        this.addChild(layer);
    }
});

