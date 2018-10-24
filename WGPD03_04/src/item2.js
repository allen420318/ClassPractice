var Item2Layer = cc.Layer.extend({
    ctor:function (data) {

        this._super();

        var title = new cc.LabelTTF("Item2","",48);
        title.x = cc.winSize.width /2;
        title.y = cc.winSize.height *7 /8;
        this.addChild(title);

        cc.log("Item2Layer:" + data);
        cc.log("Item2Scene:var1 = " + var2);

        this.initMenu()

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
    },

});

var Item2Scene = cc.Scene.extend({
    mydata:null,
    // 傳遞參數
    ctor:function (data){
        this._super();
        this.mydata = data;
        cc.log("Item2Scene:ctor():" + data);
        var layer = new Item2Layer(data);
        this.addChild(layer);
    },

    // 不傳遞參數
    // onEnter:function () {
    //     this._super();
    //     cc.log("Item2Scene:onEnter():" + this.mydata);
    //     var layer = new Item2Layer();
    //     this.addChild(layer);
    // }
});

