var Item41Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

        cc.log("item41:ctor()");

        var bg = new cc.Sprite(res.bg_jpg);
        bg.x = cc.winSize.width /2;
        bg.y = cc.winSize.height / 2;
        this.addChild(bg);

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

        back.x = 0 - cc.winSize.width /2 + back.width/2;
        back.y = 0 - cc.winSize.height /2 + back.height/2;

        var menu = new cc.Menu(back);
        this.addChild(menu);
    },

    back: function () {
        cc.director.popScene();
    },

    onEnterTransitionDidFinish: function () {
        cc.log("item41:finish");
    },

});

var Item41Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item41Layer();
        this.addChild(layer);
    }
});

