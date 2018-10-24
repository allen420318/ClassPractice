var Main04Layer = cc.Layer.extend({
    sprite1:null,
    sprite2:null,
    isTouch1:false,
    ctor:function () {
        this._super();



        this.sprite2 = new cc.Sprite(res.HelloWorld_png);
        this.sprite2.attr({
            x: cc.winSize.width *1 /2 + 40,
            y: cc.winSize.height /2 - 20,

        });
        this.addChild(this.sprite2);

        this.sprite1 = new cc.Sprite(res.HelloWorld_png);
        this.sprite1.attr({
            x: cc.winSize.width *1 /2 - 40,
            y: cc.winSize.height /2 + 20,

        });
        this.addChild(this.sprite1);

        // 方法一
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                var parent = target.getParent();

                var targetRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );
                var point = new cc.Point(e.getLocationX(),e.getLocationY());
                if (cc.rectContainsPoint(targetRect,point)){
                    cc.log("touch 1");
                    parent.isTouch1 = true;
                }
            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                var parent = target.getParent();
                parent.isTouch1 = false;
            }
        },this.sprite1);

        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                var parent = target.getParent();

                var targetRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );
                var point = new cc.Point(e.getLocationX(),e.getLocationY());
                if (cc.rectContainsPoint(targetRect,point) && !parent.isTouch1){
                    cc.log("touch 2");
                }
            },
        },this.sprite2);

        // 方法二
        // this.setupMouse1(this);
        // this.setupMouse2(this);

        return true;
    },

    setupMouse1: function(layer){
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                var targeRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );
                var point = new cc.Point(e.getLocationX(),e.getLocationY());
                if (cc.rectContainsPoint(targeRect,point)){
                    cc.log("touch 1");
                    layer.isTouch1 = true;
                }
            },
            onMouseUp: function () {
                layer.isTouch1 = false;
            }

        },layer.sprite1);
    },

    setupMouse2: function(layer){
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                var targeRect = cc.rect(
                    target.x - target.width/2,
                    target.y - target.height/2,
                    target.width,
                    target.height
                );
                var point = new cc.Point(e.getLocationX(),e.getLocationY());
                if (cc.rectContainsPoint(targeRect,point) && !layer.isTouch1){
                    cc.log("touch 2");
                }

            },
        },layer.sprite2);
    },

    // setupMouse: function () {
    //     cc.eventManager.addListener({
    //         event: cc.EventListener.MOUSE,
    //         onMouseDown: function (e) {
    //             var target = e.getCurrentTarget();
    //
    //             var x = e.getLocationX();
    //             var y = e.getLocationY();
    //             var p = new cc.Point(x,y);
    //             dx = x - target.sprite.x;
    //             dy = y - target.sprite.y;
    //             if(cc.rectContainsPoint(target.Rect,p)){
    //                 cc.log("got it");
    //                 target.isDragging = true;
    //             }
    //         },
    //         onMouseUp: function (e) {
    //             var target = e.getCurrentTarget();
    //             target.isDragging = false;
    //             target.Rect = cc.rect(
    //                 target.sprite.x - target.sprite.width/2,
    //                 target.sprite.y - target.sprite.height/2,
    //                 target.sprite.width,
    //                 target.sprite.height
    //             );
    //         },
    //         onMouseMove: function (e) {
    //             var target = e.getCurrentTarget();
    //             if(target.isDragging){
    //                 var x = e.getLocationX();
    //                 var y = e.getLocationY();
    //                 target.sprite.x = x - dx;
    //                 target.sprite.y = y - dy;
    //             }
    //         },
    //
    //     },this);
    // }

});

var Main04Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Main04Layer();
        this.addChild(layer);
    }
});

