var Item6Layer = cc.Layer.extend({
    brick:null,
    bullet:null,
    ctor:function () {
        this._super();

        this.brick = new cc.Sprite(res.brick_png);
        this.brick.x = cc.winSize.width/2;
        this.brick.y = cc.winSize.height/2;
        this.addChild(this.brick);

        this.bullet = new Bullet(this);
        this.bullet.x = 24;
        this.bullet.y = cc.winSize.height/2;
        this.addChild(this.bullet);

        // this.scheduleUpdate();

        return true;
    },

    update:function () {
        var rect = new cc.Rect(
            this.brick.x - this.brick.width/2,
            this.brick.y - this.brick.height/2,
            this.brick.width,
            this.brick.height
        );

        if(cc.rectContainsPoint(rect,new cc.Point(this.bullet.x,this.bullet.y))){
            // this.removeChild(this.bullet);
            this.removeChild(this.brick);
        }
    },
});

var Bullet = cc.Sprite.extend({
    counter:0,
    layer:null,
    ctor: function (layer) {
      this._super(res.bullet_png);

      this.layer = layer;
      this.scheduleUpdate();
    },
    
    update:function () {
        // cc.log("update:" + this.counter++)
        this.x += 10;

        var rect = new cc.Rect(
            this.layer.brick.x - this.layer.brick.width/2,
            this.layer.brick.y - this.layer.brick.height/2,
            this.layer.brick.width,
            this.layer.brick.height
        );

        if(cc.rectContainsPoint(rect,new cc.Point(this.x,this.y))){
            // this.removeChild(this.bullet);
            this.layer.removeChild(this.layer.brick);
            this.counter = 1;
        };

        if(this.counter>0){
            this.counter++;
            if (this.counter >= 20){
                this.unscheduleUpdate();
            }
        }
    }
});


var Item6Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item6Layer();
        this.addChild(layer);
    }
});

