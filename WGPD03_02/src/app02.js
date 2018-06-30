var Main02Layer = cc.Layer.extend({
    sprite:null,
    sx:1,
    sy:1,
    player1: new Array(13),
    ctor:function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.poker_plist,res.poker_png);
        this.sprite = new cc.Sprite("#pokers_back.png");
        console.log(this.sprite.width + ":" + this.sprite.height);
        this.sx = (cc.winSize.width / 13) / (this.sprite.width+24);
        this.sy = (cc.winSize.height / 4) / (this.sprite.height+48);

        for (var i = 0; i<this.player1.length; i++){
            this.player1[i] = new cc.Sprite("#pokers_back.png");
            this.player1[i].x = cc.winSize.width *(i+1) / 14;
            this.player1[i].y = cc.winSize.height * 4/5;
            this.player1[i].setScale(this.sx,this.sy);
            this.addChild(this.player1[i]);
        }

        this.sprite.x = cc.winSize.width *1 /14;
        this.sprite.y = cc.winSize.height *4 /5;
        this.sprite.setScale(this.sx,this.sy);
        this.addChild(this.sprite);

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

