var resource = [];
for(var a=1;a<= 14;a++){ resource.push("img/cityName/"+a+".png"); resource.push("img/ha/img"+a+".png"); }
for(var b=1;b<= 20;b++){ resource.push("img/nj/img"+b+".png"); }
for(var c=1;c<= 2;c++){ resource.push("img/lyg/img"+c+".png"); resource.push("img/zj/img"+c+".png");  resource.push("img/tz/img"+c+".png"); resource.push("img/sz/img"+c+".png"); resource.push("img/nt/img"+c+".png"); }
for(var d=1;d<= 7;d++){ resource.push("img/cz/img"+d+".png"); }
for(var e=1;e<= 1;e++){ resource.push("img/ly/img"+e+".png"); resource.push("img/yz/img"+e+".png");}
for(var f=1;f<= 13;f++){ resource.push("img/yc/img"+f+".png"); }
for(var g=1;g<= 6;g++){ resource.push("img/sq/img"+g+".png"); }
for(var h=1;h<= 5;h++){ resource.push("img/wx/img"+h+".png"); }
for(var i=1;i<= 4;i++){ resource.push("img/xz/img"+i+".png"); }
var H5 = {
    oDiv : null,
    init: function(){
        this.preloadimages(resource).done(function(images){
            $(".preload").remove();
            $(".wrapper").show();
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
            else
            {
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