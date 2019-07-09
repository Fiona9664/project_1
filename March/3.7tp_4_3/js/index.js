
var page = ["index.html","activePage.html","myWork.html"];
var timesCode = 3,timeStopCode=null,flag = true;//投票成功自动关闭时间
var voteTimes = 3;//投票次数
var newVoteNum;
var tops;

// 页面跳转
function showPage(pageNum){window.location.replace(page[pageNum]);}

// 右侧置顶按钮
function pageScroll() { $('body,html').animate( {scrollTop: 1}, 500);}

// 关闭弹窗倒计时
function mySetTimeOut(timeStopCode){
	clearInterval(timeStopCode);
	setTimeout(function () {
		timesCode = 3;
		$("#timeClose").html("倒计时"+timesCode+"s");
	},200);
	$("body,html").css("overflow","");
	$("body,html").scrollTop(tops);
}
// 验证码
function showCode(verifyCode,_this,num){
	document.getElementById("code_input").value="";
	var voteTimes = $("#voteTimes").text();
	if(voteTimes!=0){
		tops = $(window).scrollTop();
		$("body,html").css("overflow","hidden");
		// $('body,html').scrollTop(100);
		$(".mask,.dialog1").fadeIn(200);
		weui.loading().hide()

		var res = verifyCode.validate(document.getElementById("code_input").value);
	}else{
		weui.alert("今天已投完3次，请明天再投~")
	}
	// 验证码
	$("#reBtn").click(function(){// 看不清刷新
		var res = verifyCode.validate(document.getElementById("code_input").value);
	});
	//验证是否正确
	$("#codeSub").unbind("click").bind("click",function(e){// 判断验证码是否正确
		e.stopPropagation();
		flag=true;
		clearInterval(timeStopCode);
		var res = verifyCode.validate(document.getElementById("code_input").value);
		if(res){
			$(".dialog1").hide();
			$(".mask,.dialog2").show();
			voteTimes--;
			$("#voteTimes").text(voteTimes);
			timeStopCode = setInterval(function(){
				if(flag) {
					timesCode--;
					$("#timeClose").html("倒计时" + timesCode + "s");
				}
				if(timesCode==0){
					clearInterval(timeStopCode);
					flag = false;
					timesCode=3;
					$("#timeClose").html("倒计时" + timesCode + "s");
					$(".mask,.dialog2").fadeOut(200);
					$("body,html").css("overflow","");
					$("body,html").scrollTop(tops);
				}
			},1000);
			if(num==0){
				var voteNum = _this.prev(".allTicket").children(".voteNum").text();
				voteNum = parseInt(voteNum.replace(/,/g,''));
				voteNum = voteNum + 1;
				newVoteNum = voteNum.toLocaleString('en-US');
				_this.prev(".allTicket").children(".voteNum").text(newVoteNum);
			}else{
				var voteNum =_this.parent().prev().children().children(".voteNum").text();
				voteNum = parseInt(voteNum.replace(/,/g,''));
				voteNum = voteNum + 1;
				newVoteNum = voteNum.toLocaleString('en-US');
				_this.parent().prev().children().children(".voteNum").text(newVoteNum);
			}
		}else{
			weui.topTips("验证码错误，请重新输入",2000);
			document.getElementById("code_input").value="";
		}
	})
}
// 只可微信端打开
function userAgentWx() {
	var ua = navigator.userAgent.toLowerCase();
	var isWeixin = ua.indexOf('micromessenger') != -1;
	if (!isWeixin) {
		window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=888"
	}
}
$(function() {
	$("input").on("blur", function() {$(window).scrollTop($(window).scrollTop())})//键盘收回页面无法恢复原样
	// 只可微信端打开
	// userAgentWx();
	// 底部导航栏
	$(".bar li").click(function () {
		var liNum = $(".bar li").index(this);
		showPage(liNum);
	})
	// 查看作品详情
	$(".worksBox").on("click",".worksImg",function () {
		window.location.replace("worksDetail_photo.html");
	})
	// 参加比赛
	$(".joinBtn").click(function () {
		window.location.replace("upPhoto.html");
		// window.location.replace("upVideo.html");
	})
	// 表单验证
	$(".subBtn").click(function () {
		var subId = $(this).data("sub");
		var imgsNum = $("#photoList").children(".photos").length;
		if (!$("#name").val()) {
			weui.topTips("请输入姓名", 2000);
			return false;
		}
		if (!/^1\d{10}$/.test($("#tel").val())) {
			weui.topTips("请输入正确手机号", 2000);
			return false;
		}
		if (!$("#textArea").val()) {
			weui.topTips("请输入作品描述", 2000);
			return false;
		}
		if (subId == 0) {//上传照片
			if (!(imgsNum > 0 && imgsNum <= 8)) {
				weui.topTips("请上传图片", 2000);
				return false;
			}
		} else {//上传视频
			if (imgsNum == 0) {
				weui.topTips("请上传封面", 2000);
				return false;
			}
			if (!$("#myUrl").val()) {
				weui.topTips("请输入视频地址", 2000);
				return false;
			}
		}
		if (!$("#rule").is(':checked')) {
			weui.topTips("请仔细阅读报名协议", 2000);
			return false;
		}
		$(".page1_0").hide();
		$(".page1_1").show();
		$(".page1_1 .upPhoto").css("margin-top", "0");
		$("#myName").text($("#name").val());
		$("#myTel").text($("#tel").val());
		$(".textDetail p").text($("#textArea").val());
		// var loading = weui.loading("提交中...");
		$("#subBtn_2").click(function () {
			var loading = weui.loading("提交中...");
			$.ajax({
				type: "post",
				url: "",
				data: {
					username: $("#name").val(),
					userTel: $("#tel").val(),
					worksDetail: $("#textArea").val(),
					activeStyle: $(".subBtn").data("sub"),
					videoUrl: $("#myUrl").val()
				},
				dataType: "json",
				success: function (data) {
					loading.hide();

				},
				error: function (data) {
					weui.alert("上传失败");
					loading.hide();
				}
			});
		})
	})
	//返回修改
	$("#changeBtn").click(function () {
		$(".page1_0").show();
		$(".page1_1").hide();
	})
	// 查看报名协议
	$(".joinRule").click(function () {
		$(".mask,.dialog0").fadeIn(200);
		$("body,html").css("overflow", "hidden");
		$('body,html').scrollTop(0);
	})
	// 关闭弹窗
	$(".closeBtn").click(function () {
		mySetTimeOut(timeStopCode);
		$(".mask,.dialog").fadeOut(200);
		$("body,html").css("overflow", "");
	})
	//拉票--分享
	$(".shareBtn").click(function () {
		$(".shareDialog").fadeIn(200);
	})
	//右侧置顶
	var worksNum = $(".imgDetail").children("img").length;
	if (worksNum > 2) {
		$(".rightBtn_1").show();
	}
	//搜索
	$("#search").change(function () {
		$(".keyText").show();
		var searchText = $(this).val();//获取输入的搜索内容
		localStorage.setItem("searchText", searchText);
		$(".keyText a").text(searchText);
	})
	$(".weui-icon-search").click(function () {
		var searchId = $(this).data("search");
		var keyWord = localStorage.getItem("searchText");
		if (searchId == 0) {
			window.location.replace("searchPage.html");
		}
		var loading = weui.loading();
		$.ajax({
			type: "post",
			url: "",
			data: {keyWord: keyWord},
			dataType: "json",
			success: function (data) {
				loading.hide();

			},
			error: function (data) {
				$(".page6 .worksBox").hide();
				$("#noResult").show();
				loading.hide();
			}
		});
		$("searchText").change();
	})
	//当软键盘弹出，在这里面操作
	var width = $(window).width();
	var height = $(window).height();
	$(window).resize(function () {
		var thisHeight = $(this).height();
		if (height - thisHeight > 0) {
			$('.bottomBox').hide();
		} else {
			$(".bottomBox").show();
		}
	})
})

