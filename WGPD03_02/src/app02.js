var Main02Layer = cc.Layer.extend({
    sprite:null,
    sx:1,
    sy:1,
    players: new Array(new Array(13),new Array(13),new Array(13),new Array(13)),
    ctor:function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.poker_plist,res.poker_png);
        this.sprite = new cc.Sprite("#pokers_back.png");
        console.log(this.sprite.width + ":" + this.sprite.height);
        this.sx = (cc.winSize.width / 13) / (this.sprite.width+24);
        this.sy = (cc.winSize.height / 4) / (this.sprite.height+60);


        for (var j = 0; j<this.players.length; j++){

            for (var i = 0; i<this.players[j].length; i++){
                this.players[j][i] = new cc.Sprite("#pokers_back.png");
                this.players[j][i].x = cc.winSize.width *(i+1) / 14;
                this.players[j][i].y = cc.winSize.height * (j+1) /5;
                this.players[j][i].setScale(this.sx,this.sy);
                this.addChild(this.players[j][i]);
            }
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

function shuffle(a){
    var i,j,x;

    for (i=a.length; i; i--){
        j = parseInt(Math.random()*i);  // 0-9
        x = a[i-1];
        a[i-1] = a[j];
        a[j] = x;
    }
    return a;
}