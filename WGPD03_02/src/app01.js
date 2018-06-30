var MainLayer = cc.Layer.extend({
    p2:null,
    status:null,
    isOn: false,
    ctor:function () {

        this._super();

        this.p2 = new cc.Sprite("res/p2.jpg");
        this.p2.attr({
            x: cc.winSize.width / 8,
            y: cc.winSize.height *7 /8
        });
        this.addChild(this.p2);

        this.status = new cc.Sprite(this.isOn?res.status_on:res.status_off);
        this.status.attr({
            x: cc.winSize.width *7 /8,
            y: cc.winSize.height *7 /8
        });
        this.addChild(this.status);
        
        this.myMouseListener(this);
        
        return true;
    },
    
    myMouseListener: function (layer) {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown:function (event) {
                
            }
            
        },layer);
    },
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

