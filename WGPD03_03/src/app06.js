var Main06Layer = cc.Layer.extend({
    bg:null,
    man:null,
    manFrame: new Array(7),
    action:0,
    dx:10,
    dy:10,
    ang:0,
    isJumpend:false,
    ctor:function () {
        this._super();

        this.bg = new cc.Sprite(res.bg_png);
        this.bg.x = this.bg.width /2; //1664
        this.bg.y = cc.winSize.height /2;
        this.addChild(this.bg);

        var frameCache = cc.spriteFrameCache;
        frameCache.addSpriteFrames(res.man2_plist, res.man2_png);
        // var img37 = frameCache.getSpriteFrame("image37.png");
        // var img38 = frameCache.getSpriteFrame("image38.png");
        // var img39 = frameCache.getSpriteFrame("image39.png");
        // var img40 = frameCache.getSpriteFrame("image40.png");
        // this.manFrame = [img37,img38,img39,img40];
        var img74 = frameCache.getSpriteFrame("image74.png");
        var img78 = frameCache.getSpriteFrame("image78.png");
        var img79 = frameCache.getSpriteFrame("image79.png");
        var img80 = frameCache.getSpriteFrame("image80.png");
        var img81 = frameCache.getSpriteFrame("image81.png");
        var img82 = frameCache.getSpriteFrame("image82.png");
        var img86 = frameCache.getSpriteFrame("image86.png");
        this.manFrame = [img78,img79,img80,img81,img82,img74,img86];

        this.man = new cc.Sprite(this.manFrame[this.action]);
        this.man.x = cc.winSize.width /2;
        this.man.y = cc.winSize.height /2 + 44;
        this.addChild(this.man);
        this.man.runAction(cc.flipX(true));


        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed: function (keycode,event) {
                cc.log("press:" + keycode);
                var target = event.getCurrentTarget();
                switch(keycode){
                    case 40: //down

                    target.underArm();
                    break;

                    case 39: //right

                    target.goForward();
                    break;

                    case 37: //left

                    target.goBack();
                    break;
                    case 38: //Up

                    target.isJumpend = !target.isJumpend
                    if (target.isJumpend == true){target.Jump();};
                    break;
                }
            },
            onKeyReleased: function (keycode,event) {
                // cc.log("release:" + keycode);
                var target = event.getCurrentTarget();
                switch(keycode) {
                    case 40: //down

                    target.standUp();
                    break;
                }
            }
        },this);

        return true;
    },

    Jump:async function () {


        this.man.setSpriteFrame(this.manFrame[6]);

        this.man.runAction(cc.jumpTo(1,cc.p(this.man.x,this.man.y),150,1));
        this.man.runAction(cc.rotateBy(1,360));

        await sleep(1*1000);

        this.man.setSpriteFrame(this.manFrame[0]);

        this.isJumpend = !this.isJumpend;

    },

    underArm: function () {
        this.man.setSpriteFrame(this.manFrame[5]);
        this.man.y = cc.winSize.height /2 + 24;
    },

    standUp: function () {
        this.man.setSpriteFrame(this.manFrame[0]);
        this.man.y = cc.winSize.height /2 + 44;
    },

    goForward: function () {
        this.man.y = cc.winSize.height /2 + 44;
        this.man.runAction(cc.flipX(true));
        if(this.bg.x + this.bg.width/2 - this.dx >= cc.winSize.width){
            this.bg.x -= this.dx;

            this.action = this.action==4?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }else{
            this.man.x += this.dx;

            this.action = this.action==4?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);

            if(this.man.x + this.man.width/2 >= cc.winSize.width){
                this.man.x = cc.winSize.width - this.man.width/2;
            }
        }
    },


    goBack: function () {
        this.man.y = cc.winSize.height /2 + 44;
        this.man.runAction(cc.flipX(false));
        if(this.bg.x - this.bg.width/2 + this.dx <= 0) {
            this.bg.x += this.dx;

            this.action = this.action==4?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);
        }else{

            this.man.x -= this.dx;

            this.action = this.action==4?0:this.action+1;
            this.man.setSpriteFrame(this.manFrame[this.action]);

            if(this.man.x - this.man.width/2 <= 0){
                this.man.x = this.man.width/2;
            }
        }
    },

});

var Main06Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Main06Layer();
        this.addChild(layer);
    }
});

function sleep(ms) {
    return new Promise(a => setTimeout(a, ms));
}