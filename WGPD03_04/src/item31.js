var Item31Layer = cc.Layer.extend({
    ctor:function () {

        this._super();

        var title = new cc.LabelTTF("Item31(指定場景層級回去)","",48);
        title.x = cc.winSize.width /2;
        title.y = cc.winSize.height *7 /8;
        this.addChild(title);

        this.initMenu();

        return true;
    },

    initMenu: function () {
        var home = new cc.MenuItemFont("Home(回場景1)",this.home,this);
        var item1 = new cc.MenuItemFont("Item1",this.item1,this);
        var back = new cc.MenuItemImage(
            res.back_normal_png,
            res.back_select_png,
            res.back_disselect_png,
            this.back,this
        );

        var menu = new cc.Menu(home,item1,back);
        menu.alignItemsVertically();
        this.addChild(menu);
    },

    back: function () {
        // cc.director.popScene();
        cc.director.popToSceneStackLevel(2);
    },

    home: function () {
        // cc.director.popToRootScene();
        cc.director.popToSceneStackLevel(1); //從1開始
    },

    item1: function () {
        cc.director.popToRootScene();
        cc.director.pushScene(new Item1Scene());
    },
});

var Item31Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item31Layer();
        this.addChild(layer);
    }
});

