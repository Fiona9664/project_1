$(document).ready(function(){
	/*调用wow.js*/
	new WOW().init();


	/*加载时间*/
	    var index=0;
        var fileList = [
            'img/button1.png',
            'img/button2.png',
            'img/maintopbg.png',
            'img/onehour.png',
            'img/qimg1.png',
            'img/qimg2.png',
            'img/qimg3.png',
            'img/qimg4.png',
            'img/adopt.png',
            'img/cuo.png', 
            'img/cuoimg.jpg',
            'img/eye.png',
            'img/hand.png',
            'img/house365.png',
            'img/hour324.png',
            'img/listbg.png',
            'img/lastHand.png',
            'img/next.png',
            'img/redbg.png',
            'img/return.png',
            'img/right1.jpg',
            'img/pingbancheng.png',
            'img/wancan.png',
            'img/yellowbg.jpg',
            'img/sing.png'

        ];

        function loadImage(imgIndex){
            var img = new Image();
            img.src = fileList[imgIndex];
            var percent = Math.round((imgIndex / fileList.length) * 100); //1.百分比是通过这个计算的
            $(".loading_percent").html(percent+"%");//2.在页面中显示 百分比
            img.onload = function () {
                imgIndex++;
                if(imgIndex < fileList.length){
                    loadImage(imgIndex);
                }else{
                    $(".loading_percent").html("100%");//3.图片加载完成之后 显示为100%
                    setTimeout(function(){
                        $("#pageload").hide();
                        $(".main1").show();
                    },800);
                    console.log(fileList.length);
                }
            }
        }
        window.onload = function () {
            loadImage(index);
        }



})
    	