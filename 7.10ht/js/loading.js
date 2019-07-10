
// loading 加载
var resource = ["img/bg.jpg","img/bg2.png","img/logo.png","img/p1_0.png","img/p1_1.png","img/p2.png","img/p3_0.png","img/p3_1.png","img/music.png",
				"img/p3_2.png","img/p4_0.png","img/p4_1.png","img/p4_2.png","img/p4_3.png","img/p5_0.png","img/p5_1.png","img/p6_0.png","img/p6_1.png","img/bird.png"];

var H5 = {
    oDiv : null,
    init: function(){
        this.preloadimages(resource).done(function(images){
            $(".preload").hide();
            $(".imgBox").show();
        })
    },
    preloadimages : function(arr){
        var newimages=[], loadedimages=0;
        var postaction=function(){};
        var arr=(typeof arr!="object")? [arr] : arr
        function imageloadpost(){
            ++loadedimages;
            if (loadedimages==arr.length){
                postaction(newimages)
            }
            else{
                $(".pre_num").text(Math.floor(loadedimages / (resource.length - 1) * 100) + "%")
            }
        }
        for (var i=0; i<arr.length; i++){
            newimages[i]=new Image()
            newimages[i].src=arr[i]
            newimages[i].onload=function(){
                imageloadpost()
            }
            newimages[i].onerror=function(){
                imageloadpost()
            }
        }
        return {
            done:function(f){
                postaction=f || postaction
            }
        }
    }
};
H5.init();