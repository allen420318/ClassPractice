var Item8Layer = cc.Layer.extend({
    hello:null,
    sprite:null,
    isFlipY:true,
    counter:0,
    a1:null,
    a2:null,
    isBig:false,
    isFadeIn:false,
    ctor: async function () {
        this._super();

        var item1 = new cc.MenuItemFont("test1",this.item1,this);
        var item2 = new cc.MenuItemFont("test2",this.item2,this);
        var item3 = new cc.MenuItemFont("test3",this.item3,this);
        var item4 = new cc.MenuItemFont("test4",this.item4,this);
        var item5 = new cc.MenuItemFont("test5",this.item5,this);
        var item6 = new cc.MenuItemFont("test6",this.item6,this);
        var item7 = new cc.MenuItemFont("test7",this.item7,this);
        item1.attr({x:-400,y:200});
        item2.attr({x:-320,y:200});
        item3.attr({x:-240,y:200});
        item4.attr({x:-160,y:200});
        item5.attr({x:-80,y:200});
        item6.attr({x:0,y:200});
        item7.attr({x:80,y:200});
        var menu = new cc.Menu(item1,item2,item3,item4,item5,item6,item7);

        this.hello = new cc.Sprite(res.bg_jpg);
        this.hello.attr({x:cc.winSize.width/2,y:cc.winSize.height/2});
        this.addChild(this.hello);
        this.hello.scaleX =3;
        this.hello.scaleY =3;


        this.addChild(menu);

        this.sprite = new cc.Sprite(res.s1_0025_png);
        this.sprite.attr({x:cc.winSize.width/2,y:cc.winSize.height/2});
        this.addChild(this.sprite);

        this.hello.runAction(cc.follow(this.sprite));

        cc.spriteFrameCache.addSpriteFrames(res.s1_plist,res.s1_png);
        var animFrames = [];
        for (var i=1;i<=25;i++){
            var str = "s1_00" + (i>=10?"":"0") + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            animFrames.push(frame);
        }

        var anim = new cc.Animation(animFrames,1/15,1);
        var anims = new cc.Animate(anim); //Action

        await sleep(1*1000); //延遲執行

        this.a1 = cc.moveTo(3,100,100); //moveTo:絕對座標;moveBy:相對座標
        this.a2 = cc.repeatForever(anims);
        this.sprite.runAction(this.a1);
        this.sprite.runAction(this.a2);

        this.scheduleUpdate();

        return true;
    },

    item1:function () {
        this.sprite.stopAllActions();
    },

    item2:function () {
        this.sprite.stopAction(this.a1);
        // this.sprite.stopAction(this.a2);
    },

    item3:function () {
        var moveLeftTop = cc.moveTo(0.5,this.sprite.width/2,cc.winSize.height-this.sprite.height/2);
        var moveRightTop = cc.moveTo(0.5,cc.winSize.width-this.sprite.width/2,
            cc.winSize.height-this.sprite.height/2);
        var moveRightBottom = cc.moveTo(0.5,cc.winSize.width-this.sprite.width/2,
            this.sprite.height/2);
        var moveLeftBottom = cc.moveTo(0.5,this.sprite.width/2,
            this.sprite.height/2);
        var moveCenter = cc.moveTo(0.5,cc.winSize.width/2,cc.winSize.height/2);
        var moves = [moveLeftTop,moveRightTop,moveRightBottom,moveLeftBottom,moveCenter];
        var acts = new cc.Sequence(moves);

        this.sprite.runAction(acts);

    },

    item4:function () {
        var moveLeftTop = cc.moveTo(0.5,this.sprite.width/2,cc.winSize.height-this.sprite.height/2);
        var i1 = new cc.CallFunc(this.f1,this,"1");
        var moveRightTop = cc.moveTo(0.5,cc.winSize.width-this.sprite.width/2,
            cc.winSize.height-this.sprite.height/2);
        var i2 = new cc.CallFunc(this.f1,this,"2");
        var dd = new cc.DelayTime(2);
        var moveRightBottom = cc.moveTo(0.5,cc.winSize.width-this.sprite.width/2,
            this.sprite.height/2);
        var i3 = new cc.CallFunc(this.f1,this,"3");
        var moveLeftBottom = cc.moveTo(0.5,this.sprite.width/2,
            this.sprite.height/2);
        var i4 = new cc.CallFunc(this.f1,this,"4");
        var moveCenter = cc.moveTo(0.5,cc.winSize.width/2,cc.winSize.height/2);
        var moves = [moveLeftTop,i1,moveRightTop,i2,dd,moveRightBottom,i3,moveLeftBottom,i4,moveCenter];
        var acts = new cc.Sequence(moves); // return => Action //循序

        this.sprite.runAction(acts);

    },

    item5:function () {
        this.isBig = !this.isBig;
        var ab = new cc.ScaleBy(0.5,2,2)
        var as = new cc.ScaleBy(0.5,0.5,0.5)
        this.sprite.runAction(this.isBig?ab:as);

    },

    item6:function () {
        this.isFadeIn = !this.isFadeIn;
        var iin = new cc.FadeIn(0.5);
        var out = new cc.FadeOut(0.5);
        this.sprite.runAction(this.isFadeIn?out:iin);
    },

    item7:function () {
        // //閃爍
        // this.sprite.runAction(new cc.Blink(1,10));

        // //加速度
        // var a3 = cc.moveBy(2,300,300);
        // var a4 = new cc.EaseIn(a3,10);
        // var a5 = new cc.Speed(a3,10);
        // this.sprite.runAction(a5);

        // //跳躍
        // this.sprite.runAction(cc.jumpTo(1,cc.p(this.sprite.x,this.sprite.y),150,2));
        //
        // //插入音效
        // cc.audioEngine.playMusic(res.win_wav, false);

        //進度條
        var a6 = new cc.ProgressTo(10,100);
        var timer = new cc.ProgressTimer(this.sprite);
        timer.setType(cc.ProgressTimer.TYPE_RADIAL);
        timer.setPosition(cc.p(150,cc.winSize.height/2));
        this.addChild(timer);
        timer.runAction(a6);

    },

    f1:function (target,mesg) {
        //target is a action node => sprite
        cc.log("f1:"+ mesg);
        if (mesg == "2"){
            target.stopAction(target.getParent().a2);
            // this.sprite.stopAction(this.a2);
        }

    },

    update:function () {
        // if (this.counter % 10 == 0){
        //     this.isFlipX = !this.isFlipX;
        //     this.sprite.runAction(cc.flipX(this.isFlipX));
        //     cc.log(this.sprite.x + "," + this.sprite.y);
        // }
        // this.counter++
        //
        // if (this.counter ==10){
        //     this.counter = 0;
        // }


    },

});

var Item8Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Item8Layer();
        this.addChild(layer);
    }
});

//程序延遲執行
function sleep(ms) {
    return new Promise(a => setTimeout(a, ms));
}