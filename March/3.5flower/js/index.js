var waterNum=2,flag=0,flag1=0;
//判断浇水动画停止
function animStop(num){
	document.getElementById("rain").addEventListener("animationend",function(){
		$("#num").html(num);
		$(".rainBox").removeClass("rain_anim");
		//浇水次数达到3次时，按钮变成红色
		if(num==3){
			$("#lotteryBtn").removeClass("lotteryColor");
		}
	})
}
$(function(){
	//抽奖按钮
$("#lotteryBtn").click(function(){
	//判断浇水次数等于3 可以抽奖
	if(waterNum==3){
		$(".page0").hide();
		$(".page1").show();
	}else{
		alert("浇水次数还未达到3次哦~");
	}
})
//查看规则
$(".ruleBtn").click(function(){$("#rulePage").fadeIn(200);});
//关闭规则
$(".closeBtn").click(function(){$("#rulePage").fadeOut(200);});

//阻止微信下拉弹性效果
    $("body").on("touchmove",function(ev){
        ev.preventDefault();
    })
    //阻止微信下拉弹性效果
    document.querySelector('body').addEventListener("touchmove",function(ev){
        ev.preventDefault();
    })
    //iphone阻止微信
    document.body.addEventListener('touchmove', function (e) {
        e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
    }, {passive: false});
    $("body").css("height",document.body.clientHeight+"px");
    
})

