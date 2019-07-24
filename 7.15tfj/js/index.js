$(function(){
	// 玩转攻略&&返现细则
	$(".ruleBox img").click(function(){
		var ruleBtn = $(this).data("rule");
		$(".dialogBox,#dialog_"+ruleBtn).fadeIn(200);
	})
	//back
	$(".backBtn").click(function(){
		var backBtn = $(this).data("back");
		if(backBtn == 2){
			$(".pageBox_3").hide();
		}else{
			$(".pageBox_2").hide();
		}
		$(".pageBox_1,.ruleBox").show();
		
	})
	// 参加游戏
	$(".gameBtn").click(function(){
		$(".pageBox_1").hide();
		$(".pageBox_3").show();
	})
	// closeBtn
	$(".closeBtn").click(function(){
		$(".dialogBox,.dialog").fadeOut(200)
	})
	//立即报名
	$(".joinBtn").click(function(){
		$(".dialogBox,#dialog_4").fadeIn(200);
	})
})
