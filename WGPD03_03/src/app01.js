var MainLayer = cc.Layer.extend({
    isDrag:false,
    ctor:function () {

        this._super();

        // cc.eventManager.addListener({
        //     event: cc.EventListener.MOUSE,
        //     onMouseDown: function (e) {
        //         // var ex = e.getLocationX();
        //         // var ey = e.getLocationY();
        //         // var what = e.getButton(); //左鍵:0 中間:1 右鍵:2
        //         //
        //         // cc.log(e == this.event);
        //         // cc.log("down"+ what);
        //
        //         // var a = [0,1,2,3,4];
        //         //
        //         // for (var i=0;i<a.length;i++){
        //         //     cc.log(a[i]);
        //         // }
        //         //
        //         // for (var i in a ) //for(__ in __) 尋訪陣列元素中擁有值的部分
        //         // cc.log(i);
        //
        //         // var ary = new Array(4);
        //         // ary[0] = 123;
        //         // ary[2] = 321;
        //         // // for (var v in ary ){           //陣列元素有值才顯示
        //         // //     cc.log(v+ ":" + ary[v]);
        //         // // }
        //         //
        //         // for (var i = 0;i<ary.length;i++){ //陣列每個元素顯示
        //         //     cc.log(ary[i]);
        //         // }
        //
        //         //     for (var v in e){
        //         //     cc.log(v)
        //         // }
        //
        //         var target = e.getCurrentTarget();
        //         for (var v in target){
        //             cc.log(v);
        //         }
        //         cc.log("-----")
        //
        //         var x1 = e.getLocationX();
        //             cc.log(x1);
        //
        //     },
        //     onMouseUp: function (event) {
        //         // cc.log("up");
        //     },
        //     onMouseMove: function (event) {
        //         // cc.log("move");
        //     },
        //     onMouseScroll: function (event) {
        //         // cc.log("scroll");
        //     },
        // },this);

        this.setupMouse();

        return true;
    },

    setupMouse: function () {
        cc.eventManager.addListener({
            event: cc.EventListener.MOUSE,
            onMouseDown: function (e) {
                var target = e.getCurrentTarget();
                target.isDrag = true;

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
                    cc.log(x,y);
                }
            },
            onMouseScroll: function (event) {
                // cc.log("scroll");
            },
        },this);
    }
});

var MainScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});

