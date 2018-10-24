var Main02Layer = cc.Layer.extend({
    isDrag:false,
    drawing:null,
    ctor:function () {
        this._super();

        this.drawing = new cc.DrawNode();
        // this.drawing.drawSegment(cc.p(0,0), cc.p(200,300),2,cc.color(255,0,0));
        this.addChild(this.drawing);


        this.setupMouse();

        return true;
    },

    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            lastx : 0,
            lasty : 0,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                target.isDrag = true;
                this.lastx = e.getLocationX();
                this.lasty = e.getLocationY();
            },
            onMouseUp: function (e) {
                var target = e.getCurrentTarget();
                target.isDrag = false;
            },
            onMouseMove: function (e) {
                var target = e.getCurrentTarget();
                if(target.isDrag){
                    var x = e.getLocationX();
                    var y = e.getLocationY();
                    target.drawing.drawSegment(cc.p(this.lastx,this.lasty),cc.p(x,y),2,cc.color(255,0,0));
                    this.lastx = x;
                    this.lasty = y;
                }
            },
            onMouseScroll: function (event) {
                // cc.log("scroll");
            },
        },this);
    }

});

var Main02Scene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new Main02Layer();
        this.addChild(layer);
    }
});

