var Main03Layer = cc.Layer.extend({
    sprite:null,
    isDragging:false,
    Rect:null,
    ctor:function () {
        this._super();

        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: cc.winSize.width /2,
            y: cc.winSize.height /2,

        });
        this.addChild(this.sprite);

        this.Rect = cc.rect(
            this.sprite.x - this.sprite.width/2,
            this.sprite.y - this.sprite.height/2,
            this.sprite.width,
            this.sprite.height
            );


        this.setupMouse();

        return true;
    },

    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            dx:-1,
            dy:-1,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();

                var x = e.getLocationX();
                var y = e.getLocationY();
                var p = new cc.Point(x,y);
                dx = x - target.sprite.x;
                dy = y - target.sprite.y;
                if(cc.rectContainsPoint(target.Rect,p)){
                    cc.log("got it");
                    target.isDragging = true;
                }
            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDragging = false;
                target.Rect = cc.rect(
                    target.sprite.x - target.sprite.width/2,
                    target.sprite.y - target.sprite.height/2,
                    target.sprite.width,
                    target.sprite.height
                );
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if(target.isDragging){
                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    target.sprite.x = x - dx;
                    target.sprite.y = y - dy;
                }
            },

        },this);
    }

});

var Main03Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Main03Layer();
        this.addChild(layer);
    }
});

