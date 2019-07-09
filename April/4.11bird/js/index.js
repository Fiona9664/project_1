var myPage=1;
var pAnim = ["p1","p2","p3","p4"];
var treeA = ["treeA1","treeA2","treeA3"];
var stoneBox = ["stone1","stone2","stone3","stone4","stone5","stone6","stone7"];
var height = $(window).height();
// loading 加载
var resource = ["images/animal1_1.png","images/loadingBg.png","images/snow.png","images/sun0.png","images/text.png",
				"images/p0_3.png","images/p1_3.png","images/p2_3.png","images/p3_3.png","images/p3_4.png","images/p4_3.png","images/tree.png"];
for(var a=1;a<= 7;a++){ resource.push("images/bg"+a+".png"); resource.push("images/stone"+a+".png");}
for(var b=0;b<3;b++){ resource.push("images/bird"+b+".png");}
for(var c=0;c<7;c++){ 
	for(var j=0;j<2;j++){
		resource.push("images/plant"+c+"_"+j+".png");
	}
}
for(var d=0;d< 2;d++){
	resource.push("images/animal"+d+".png"); 
	resource.push("images/cloud"+d+".png");
	resource.push("images/round"+d+".png");
	resource.push("images/logo"+d+".png");
	resource.push("images/wing0_"+d+".png");
	resource.push("images/wing1_"+d+".png");
	resource.push("images/smoke"+d+".png");
}
for(var e=0;e<7;e++){ 
	for(var f=1;f<3;f++){
		resource.push("images/p"+e+"_"+f+".png");
	}
}
var H5 = {
    oDiv : null,
    init: function(){
        this.preloadimages(resource).done(function(images){
            $(".preload").hide();
            $(".swiper-container").show();
			var bg1_l = $('.bg1').find(".textBox").children("img").length;
			for(var i = 1; i <= bg1_l; i++){
				$('.bg1').find(".textBox").children("img:nth-child("+i+")").addClass(pAnim[i-1]);
			}
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
// 页面动画
function anims(a){
	var nowA = a - 1;
	var pLength = $('.bg' + a).find(".textBox").children("img").length;
	var pLength1 = $('.bg' + nowA).find(".textBox").children("img").length;
	var stoneL = $(".stoneBox").children("div").length;
	var treeL = $(".treeBox2").children("div").length;
	var music2 = document.getElementById("sound2");
	var music = document.getElementById("sound1");
	for(var i = 1; i <= pLength; i++){
		$(".swiper-slide").find(".textBox").children("img").removeClass(pAnim[i-1]);
		$('.bg' + a).find(".textBox").children("img:nth-child("+i+")").addClass(pAnim[i-1]);
	}
	if(a!=1){
		for(var i = 1; i <= pLength1; i++){
			$('.bg'+nowA).find(".textBox").children("img").removeClass(pAnim[i-1]);
		}
	}
	if(a!=3){
		for(var i = 1; i <= treeL; i++){
			$(".treeBox2").children("div").removeClass(treeA[i-1]);
		}
	}
	if(a!=2){
		$("#leafSnow").hide();
	}
	if(a!=4){
		$(".birdBox4").css({
			"right":"62px",
			"bottom":"197px"
		});
		$("#leafTree2").hide();
	}
	if(a!=5){
		for(var i = 1; i <= stoneL; i++){
			$(".stoneBox").children("div").removeClass(stoneBox[i-1]);
		}
	}
	// 台阶显示
	if(a==5){
		for(var i = 1; i <= stoneL; i++){
			$(".stoneBox").children("div").removeClass(stoneBox[i-1]);
			$(".stoneBox").children("div:nth-child("+i+")").addClass(stoneBox[i-1]);
		}
	}
	// 树林消失
	if(a==3){
		for(var i = 1; i <= treeL; i++){
			$(".treeBox2").children("div").removeClass(treeA[i-1]);
			$(".treeBox2").children("div:nth-child("+i+")").addClass(treeA[i-1]);
		}
	}
	//鸟飞
	if(a==4){
		$(".birdBox4").animate({
			"right":"121px",
			"bottom":"39px"
		},3000);
		init(a,"tree","leafTree2");
		$("#leafTree2").show();
	}
	 //显示雪花
	 if(a==2){
		init(a,"snow","leafSnow");
		$("#leafSnow").show();
	 }
	 // 音乐
	 if(a==7){
		music2.play();
		music.pause();
	 }
	  // 音乐
	 if(a!=7){
	 	music2.pause();
		music.play();
	 }
}
$(function(){
	// swiper
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'vertical', // 垂直切换选项
		height:window.innerHeight,
		 effect: "slide"
	})
	//获取当前显示的页
	mySwiper.on('slideChangeTransitionEnd', function () {
		myPage= $('.swiper-slide-active').data("page");
		switch(myPage){
			case 1:anims(myPage);
			case 2:anims(myPage);
			case 3:anims(myPage);
			case 4:anims(myPage);
			case 5:anims(myPage);
			case 6:anims(myPage);
			case 7:anims(myPage);
		}
	});
	$(".swiper-slide").height(height);
	$(".cloud img:nth-child(1)").addClass("anim7");
	$(".cloud img:nth-child(2)").addClass("anim8");
	$(".sunBox").append("<p class='light'></p>").find("img").css("position","absolute");
})

