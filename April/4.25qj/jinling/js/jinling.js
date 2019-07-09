(function(){
	
	//创建场景
	var anta = new C3D.Stage({
					el: $("#three")[0]
				});
	anta.size(window.innerWidth, window.innerHeight).update();
	//容器
	var spMain = new C3D.Sprite();
	spMain.position(0, 0, -600).update();
	anta.addChild(spMain);

	//loading列表
	var basePath = "images/"
	var loader = new window.PxLoader();
	//声明资源文件列表
	var fileList = [
				'bg2/1.png',
				'bg2/2.png',
				'bg2/3.png',
				'bg2/4.png',
				'bg2/5.png',
				'bg2/6.png',
				'bg2/7.png',
				'bg2/8.png',
				'bg2/9.png',
				'bg2/10.png',
				'bg2/11.png',
				'bg2/12.png',
				'bg2/13.png',
				'bg2/14.png',
				'bg2/15.png',
				'bg2/16.png',
				'bg2/17.png',
				'bg2/18.png',
				'bg2/19.png',
				'bg2/20.png',
				
				'pano/p0_1.png',
				'pano/p0_2.png',
				'pano/p0_3.png',
				'pano/p0_4.png',
				'pano/p0_5.png',
				'pano/p1_1.png',
				'pano/p1_2.png',
				'pano/p1_3.png',
				'pano/p2_1.png',
				'pano/p2_2.png',
				'pano/p2_3.png',
				'pano/p2_4.png',
				'pano/p2_5.png',
				'pano/p2_6.png',
				'pano/p3_1.png',
				'pano/p3_2.png',
				'pano/p3_3.png',
				'pano/p3_4.png',
				
				'btn/btn_cz.png',
				'btn/btn_ha.png',
				'btn/btn_lyg.png',
				'btn/btn_nj.png',
				'btn/btn_nt.png',
				'btn/btn_sq.png',
				'btn/btn_sz.png',
				'btn/btn_tz.png',
				'btn/btn_wx.png',
				'btn/btn_xz.png',
                'btn/btn_yc.png',
                'btn/btn_yz.png',
                'btn/btn_zj.png',
                
				'layer/btn_close.png',
				'layer/layer_s1_bg.png',
				'layer/layer_s1_top.png',
				'music_pause.png',
				'bg.jpg',
				'preload/logo1.png',
				'music.mp3',
				
				'city/1.jpg',
				'city/2.jpg',
				'city/3.jpg',
				'city/4.jpg',
				'city/5.jpg',
				'city/6.jpg',
				'city/7.jpg',
				'city/8.jpg',
				'city/9.jpg',
				'city/10.jpg',
				'city/11.jpg',
				'city/12.jpg',
				'city/13.jpg'
				
			];

	for (var i = 0; i < fileList.length; i++) {
		loader.addImage(basePath + fileList[i]);
	}
	loader.addProgressListener(function (e) {
		var percent = Math.round((e.completedCount / e.totalCount) * 100);
		$("#loading_text").html("已加载 " + percent + " %");
		
	});
	loader.addCompletionListener(function () {
		$("#loading_bg").remove();
		ready();
		tl2.play();
		$(".music").show();
		
	});
	//logo1.png的动画
	JT.fromTo($(".loading-anm"), 1.5, {rotationY: 0}, {
			rotationY: 360, yoyo: false,
						repeat: -1
		});
	var getRandom = function(t, i) {
			return t + Math.floor(Math.random() * (i - t) * 100) / 100
		}

	var scene1 = new C3D.Sprite();
		scene1.position(0, 0, 0).update();
		for (var i = 0; i < 8; i++) {
			var _p = new C3D.Plane();
			_p.size(90, 102).rotation(getRandom(-180, 180), getRandom(-180, 180), getRandom(-180, 180)).scale(0.01).material({
				image: imglist.proload_8_png //base64的图片/proload_8_png.png
			}).update();
			scene1.addChild(_p);
		}

		// 花瓣
		var scene3 = new C3D.Sprite();//新建场景scene3，加入碎片的图片
		scene3.position(0, 0, 0).scale(0.01).update();
		var other = [
			{w: 65, h: 55, url: imglist.proload_0_png},//base64的图片/proload_0_png.png
			{w: 93, h: 71, url: imglist.proload_1_png},//base64的图片/proload_1_png.png
			{w: 20, h: 58, url: imglist.proload_2_png},//base64的图片/proload_2_png.png
			{w: 29, h: 43, url: imglist.proload_3_png},//base64的图片/proload_3_png.png
			{w: 31, h: 22, url: imglist.proload_4_png},//base64的图片/proload_4_png.png
			{w: 29, h: 20, url: imglist.proload_5_png},//base64的图片/proload_5_png.png
			{w: 34, h: 92, url: imglist.proload_6_png},//base64的图片/proload_6_png.png
			{w: 203, h: 90, url: imglist.proload_7_png}//base64的图片/proload_7_png.png
		];

		for (var i = 0; i < 15; i++) {
			var _id = i < 5 ? i % 3 : (i - 3) % 3 + 3;
			var _p = new C3D.Plane();
			_p.size(other[_id].w, other[_id].h).scale(0.5).material({
				image: other[_id].url,
			}).update();
			scene3.addChild(_p);
		}

		var cloud = [
			{w: 283, h: 125, url: imglist.proload_cloud1_png},//base64的图片/proload_cloud1_png.png
			{w: 283, h: 125, url: imglist.proload_cloud2_png},//base64的图片/proload_cloud2_png.png
			{w: 283, h: 125, url: imglist.proload_cloud3_png}//base64的图片/proload_cloud3_png.png
		];
		var scene4 = new C3D.Sprite();//新建场景scene4，加入云的图片
		scene4.position(0, 0, 0).scale(0.01).update();
		for (var i = 0; i < 9; i++) {
			var _id = i % 3;
			var _p = new C3D.Plane();
			_p.size(cloud[_id].w, cloud[_id].h).scale(0.5).material({
				image: cloud[_id].url,
			}).update();
			scene4.addChild(_p);
		}
		// logo
		var logo1 = C3D.create({
			type: 'sprite', scale: [0.1], children: [
				{
					type: 'plane',
					size: [300,156],
					material: [{image: imglist.proload_logo1_png}]
				}
			]
		});
		var logo2 = C3D.create({
			type: 'sprite', scale: [0.1], children: [
				{
					type: 'plane',
					size: [300, 156],
					material: [{image: imglist.proload_logo2_png}]
				}
			]
		});
		var logo3 = C3D.create({
			type: 'sprite', scale: [0.1], children: [
				{
					type: 'plane',
					size: [300, 90],
					material: [{image: imglist.proload_logo3_png}]
				}
			]
		});
		var logo4 = C3D.create({
			type: 'sprite', scale: [0.1], children: [
				{
					type: 'plane',
					size: [300, 125],
					material: [{image: imglist.proload_logo4_png}]
				}
			]
		});
		//-----------------------------------------------------------------------------------------------------------------------------------------------timeline
		

		function shock(obj, handler) {
			JT.to({n: 0}, 1, {
				n: 3600,
				ease: JT.Quad.In,
				onUpdate: function () {
					obj.x = Math.floor(Math.sin(this.curVars.n.num / 180 * Math.PI) * this.curVars.n.num / 1800 * 100) / 100;
					obj.y = Math.floor(Math.sin(this.curVars.n.num / 180 * Math.PI / 2) * this.curVars.n.num / 1800 * 100) / 100;
					obj.updateT();
				}, onEnd: function () {
					if (handler) handler();
				}
			});
		}
	
		function anim3(n) {
			JT.kill(scene3);
			var _len = scene3.children.length;
			for (var i = 0; i < _len; i++) {
				var _l = i < 6 ? getRandom(50, 150) * n : getRandom(150, 250) * n;
				var _r1 = getRandom(0, 360);
				var _a1 = _r1 / 180 * Math.PI;
				var _r2 = n == 1 ? getRandom(-10, 10) : getRandom(-80, 80);
				var _a2 = _r2 / 180 * Math.PI;
				var _n1 = Math.sin(_a2) * _l;
				var _n2 = Math.abs(Math.cos(_a2) * _l);
				scene3.children[i].position(Math.cos(_a1) * _n2, _n1, Math.sin(_a1) * _n2).updateT();
			}
			JT.to(scene3, 1, {
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
				ease: JT.Quad.Out,
				onUpdate: function () {
					this.target.updateT();
				}, onEnd: function () {
					JT.to(this.target, 1, {
						scaleX: 0,
						scaleY: 0,
						scaleZ: 0,
						ease: JT.Quad.In,
						onUpdate: function () {
							this.target.updateT();
						}
					});
				}
			});
			JT.fromTo(scene3, 2, {rotationY: 0}, {
				rotationY: 360, onUpdate: function () {
					this.target.updateT();
				}
			});
			JT.fromTo(scene3.children, 2, {rotationY: 0}, {
				rotationY: -360, onUpdate: function () {
					this.target.updateT();
				}
			});
		}

		function anim4() {
			JT.kill(scene1);
			var _len = scene1.children.length;
			var count = 0;
			for (var i = 0; i < _len; i++) {
				var _r = getRandom(0, 1.5);
				var _l = getRandom(400, 600);
				var _r1 = getRandom(0, 360);
				var _a1 = _r1 / 180 * Math.PI;
				var _r2 = getRandom(-80, 80);
				var _a2 = _r2 / 180 * Math.PI;
				var _n1 = Math.sin(_a2) * _l;
				var _n2 = Math.abs(Math.cos(_a2) * _l);
				JT.to(scene1.children[i], 0.7, {
					scaleX: _r,
					scaleY: 1.5 - _r,
					x: Math.cos(_a1) * _n2,
					y: _n1,
					z: Math.sin(_a1) * _n2,
					ease: JT.Quad.Out,
					onUpdate: function () {
						this.target.updateT();
					}, onEnd: function () {
						JT.to(this.target, 1.5, {
							scaleX: 0,
							scaleY: 0,
							x: 0,
							y: 0,
							z: 0,
							ease: JT.Quad.In,
							onUpdate: function () {
								this.target.updateT();
							}, onEnd: function () {
								count++;
								if (count >= _len) {
									shock(scene1);
								}
							}
						});
					}
				});
			}

			JT.fromTo(scene1, 3, {rotationY: 0}, {
				rotationY: 540, onUpdate: function () {
					this.target.updateT();
				}
			});
			anim3(2);
		}

		function anim5(obj) {
			spMain.addChild(obj);
			JT.to(obj, 0.2, {
				scaleX: 1,
				scaleY: 1,
				ease: JT.Quad.Out,
				onUpdate: function () {
					this.target.updateT();
				}, onEnd: function () {
					JT.to(this.target, 2, {
						scaleX: 0.2,
						scaleY: 0.2,
						ease: JT.Quad.In,
						onUpdate: function () {
							this.target.updateT();
						}
					});
				}
			});
			JT.fromTo(obj, 4.4, {rotationY: -90}, {
				rotationY: 920, onUpdate: function () {
					this.target.updateT();
				}
			});

		}
		function anim5_1(obj) {
			spMain.addChild(obj);
			JT.to(obj, 0.2, {
				scaleX: 1,
				scaleY: 1,
				ease: JT.Quad.Out,
				onUpdate: function () {
					this.target.updateT();
				}, onEnd: function () {
					JT.to(this.target, 2.3, {
						scaleX: 0,
						scaleY: 0,
						ease: JT.Quad.In,
						onUpdate: function () {
							this.target.updateT();
						},onEnd:function(){
							logo4.remove();
							scene1.remove();
							scene3.remove();
							anim6();
							gotoIndex();
						}
					});
				}
			});

		}
		function anim6() {
			JT.kill(scene4);
			var _len = scene4.children.length;
			for (var i = 0; i < _len; i++) {
				var _l = getRandom(200, 800);
				var _r1 = getRandom(0, 360);
				var _a1 = _r1 / 180 * Math.PI;
				var _r2 = getRandom(-25, 25);
				var _a2 = _r2 / 180 * Math.PI;
				var _n1 = Math.sin(_a2) * _l;
				var _n2 = Math.abs(Math.cos(_a2) * _l);
				scene4.children[i].position(Math.cos(_a1) * _n2, _n1, Math.sin(_a1) * _n2).scale(1.5).updateT();
			}
			JT.to(scene4, 0.8, {
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
				ease: JT.Quad.Out,
				onUpdate: function () {
					// this.target.updateT();
				}, onEnd: function () {
					JT.to(this.target, 1, {
						scaleX: 1.5,
						scaleY: 1.5,
						scaleZ: 1.5,
						ease: JT.Quad.In,
						onUpdate: function () {
							// this.target.updateT();
						}
					});
				}
			});
			JT.fromTo(scene4, 2, {rotationY: 0}, {
				rotationY: 360, onUpdate: function () {
					this.target.updateT();
				}, onEnd: function () {
					this.target.remove();
				}
			});
			JT.fromTo(scene4.children, 2, {rotationY: 0}, {
				rotationY: -360, onUpdate: function () {
					this.target.updateT();
				}
			});
			JT.to($("#bg"), 1, {
				opacity: 1
			});

		}


		spMain.addChild(scene1);
		spMain.addChild(scene3);
		spMain.addChild(scene4);


		var tl2 = JTL.create();
		tl2.add('l1', 0.5);

		tl2.add(function () {
			//anim4();
			anim5(logo2);
		}, 'l1');
		tl2.add(function () {
			logo2.remove();
			//anim4();
			anim5(logo3);
		}, 'l1+=3');
		tl2.add(function () {
			logo3.remove();
			anim4();
			anim5_1(logo4);
		}, 'l1+=6');
		//创建背景场景
		
		var bg_num = 20;
		var o = {
			w: 2580,
			h: 1170
		},
		M = o.w / bg_num,
		h = 406,
		Y = [{
			url: "1.png"
		}, {
			url: "2.png"
		}, {
			url: "3.png"
		}, {
			url: "4.png"
		}, {
			url: "5.png"
		}, {
			url: "6.png"
		}, {
			url: "7.png"
		}, {
			url: "8.png"
		}, {
			url: "9.png"
		}, {
			url: "10.png"
		}, {
			url: "11.png"
		}, {
			url: "12.png"
		}, {
			url: "13.png"
		}, {
			url: "14.png"
		}, {
			url: "15.png"
		}, {
			url: "16.png"
		}, {
			url: "17.png"
		}, {
			url: "18.png"
		}, {
			url: "19.png"
		}, {
			url: "20.png"
		}];
	    
		var panoBg = new C3D.Sprite();
		var d = {
			lat: 0,
			lon: 0
		},
		f = {
			lon: 0,
			lat: 0
		};
		var c = {
			lon: 25,
			lat: 0
		};		
		var p =true;
		function createPanoBg(){
			panoBg.name("panoBg").position(0, 0, 0).update();
			spMain.addChild(panoBg);
			
			for (var R = 0; R < bg_num; R++) {
				var F = new C3D.Plane,
					H = -360 / bg_num * R,
					J = H / 180 * Math.PI,
					U = h;
				F.size(M, o.h).position(Math.sin(J) * U, 0, Math.cos(J) * U).rotation(0, H + 180, 0).visibility({
					alpha: 0
				}).material({
					image:  "images/bg2/"+Y[R].url+"?6",
					bothsides: !1
				}).update();
				panoBg.addChild(F);
			}
			
		}
		createPanoBg()
		//漂浮的物件
		var panoItemsImg = [{
				x: 280,
				y: 85,
				w: 645,
				h: 534,
				url: "images/pano/p0.png",//金山寺
				imgs: ["images/pano/p0_1.png","images/pano/p0_2.png","images/pano/p0_3.png","images/pano/p0_4.png","images/pano/p0_5.png"],
				l: 10
			}, {
				x:1600,
				y: 22,
				w: 387,
				h: 224,
				url: "images/pano/p1.png",//无人机
				imgs: ["images/pano/p1_1.png","images/pano/p1_2.png","images/pano/p1_3.png"],
				l: 10
			}, {
				x: 1030,
				y: 400,
				w: 774,
				h: 492,
				url: "images/pano/p2.png",//清江浦楼
				imgs: ["images/pano/p2_1.png","images/pano/p2_2.png","images/pano/p2_3.png","images/pano/p2_4.png","images/pano/p2_5.png","images/pano/p2_6.png"],
				l: 30 //层级
			}, {
				x: 650,
				y: 160,
				w: 516,
				h: 511,
				url: "images/pano/p4.png",//回族楼
				imgs: ["images/pano/p3_1.png","images/pano/p3_2.png","images/pano/p3_3.png","images/pano/p3_4.png"],
				l: 5
			},],
		panoItems = new C3D.Sprite;
		panoItems.name("panoItems").position(0, 0, 0).update(), 
		$.each(panoItemsImg, function(A, B) {
			var g = B,
				E = Math.floor(g.x / M),
				Q = Math.floor((g.x + g.w) / M),
				I = (g.x % M, new C3D.Sprite);
			I.visibility({
				alpha: 0
			}).updateV();
				//console.log("E="+E+"   Q="+Q); Q-E=每个浮层的小图片数量
			for (var w = E;w <Q; w++) { //w<Q 和 w<=Q有区别，<= 会多出一张undifined的div
				var D = new C3D.Plane,
					Y = -360 / bg_num * w,
					i = Y / 180 * Math.PI,
					R = h;
				D.size(M, g.h).position((Math.sin(i) * R).toFixed(5), g.y + g.h / 2 - o.h / 2, (Math.cos(i) * R).toFixed(5)).rotation(0, Y + 180, 0).material({
					image: g.imgs[w - E],
					bothsides: !1
				}).update(), I.addChild(D)
			}
			var F = -360 / bg_num * (Q + E) / 2 + 180,
				H = F / 180 * Math.PI,
				J = g.l;
			I.position(Math.sin(H) * J, 0, Math.cos(H) * J).updateT(), 
			panoItems.addChild(I)
		});
		spMain.addChild(panoItems);
		
		var dots1 = "images/btn/btn_aminate_icon.png";
		//点击
		/*
		 */
		var c_dots = [
				{
					name: "btn_zj",//镇江
					animateType: "2",
					x: 195,
					y: 280,
					w: 150,
					h: 49,
					label: "images/btn/btn_zj.png",
					imgs: "images/city/1.jpg",
					title1: "飞阅镇江",
					title2: "飞阅金山风景区 看楼台两岸水相连",
					contents:"航拍金山寺全貌金山，位于镇江市区西北部，原是扬子江中的唯一岛屿，“万川东注，一岛中立”，有江心一朵“芙蓉”之美称。宋朝沈括的“楼台两岸水相连，江南江北镜里天”的诗句，就是对当年金山的写照。金山寺布局依山就势，使金山与寺融为一体，建筑风格独特，殿字厅堂，亭台楼阁，椽木栋接，相比相衔，丹辉碧映，加上慈寿塔耸立于金山之巅，拔地而起，突兀云天，使整个金山仿佛就是一座宏伟壮丽的寺庙。"
				}, 
				{
					name: "btn_tz",//泰州
					animateType: "2",
					x: 540,
					y: 810,
					w: 150,
					h: 49,
					label: "images/btn/btn_tz.png",
					imgs: "images/city/2.jpg",
					title1: "飞阅泰州",
					title2: "河有万湾多碧水 田无一垛不黄花",
					contents:"飞阅兴化油菜花海四月里，大江南北的油菜花肆意开放，江苏兴化的油菜花海尤为壮观。空中俯瞰这里的油菜田像是八卦阵，以千岛样式形成的垛田景观，吸引了全国各地的游客组团观赏。"
				}, 
				{
					name: "btn_cz",//常州
					animateType: "2",
					x: 700,
					y: 515,
					w: 150,
					h: 49,
					label: "images/btn/btn_cz.png",
					imgs: "images/city/3.jpg",
					title1: "飞阅常州",
					title2: "感受回民村风情 ",
					contents:"飞阅常州回民村 感受回族风情回民村地处常州武进雪堰镇城湾山区，全村均在太湖湾旅游渡假开发区的规划范围内，是一个春之韵、夏之华、秋之游、冬之养的难得一见的旅游好去处。春暖花开，万朵梨花，美如云锦。雪堰的桃子、梨、茶叶是这里观光农业、特色农业、生态农业的佼佼者。雪堰回民村是都市生活的世外桃源。"
				}, 
				{
					name: "btn_yc", //盐城
					animateType: "2",
					x: 1045,
					y: 752,
					w: 150,
					h: 49,
					label: "images/btn/btn_yc.png",
					imgs: "images/city/4.jpg",
					title1: "飞阅盐城",
					title2: "国家级珍禽保护区动物间爱的故事",
					contents:"一对儿疣鼻天鹅爱心对视春暖花开，万物复苏，在江苏盐城国家级珍禽自然保护区内，动物们享受着这一年之中最美好的时光，爱情的种子也悄悄地萌芽，爱，浸润着生活在此的动物们。"
					
				}, 
				{
					name: "btn_ha", //淮安
					animateType: "2",
					x: 1071,
					y: 525,
					w: 150,
					h: 49,
					label: "images/btn/btn_ha.png",
					imgs: "images/city/5.jpg",
					title1: "飞阅淮安里运河",
					title2: "淮安地标建筑之一——清江浦楼",
					contents:"飞阅淮安里运河 古文明和现代文明的交融贯穿淮安市清江浦区的里运河，有着悠久的历史，沿岸文物古迹甚多。春季的里运河，覆盖了一层明媚的春色，犹如一条精致的绿色“丝带”，碧水清波串联起一片景色，更显生机。到了夜晚，运河岸边华灯齐放，更是别有一番风情。（贾玥 文  席航飞 摄）"
				}, 
				{
					name: "btn_sz", //苏州
					animateType: "2",
					x: 1227,
					y: 338,
					w: 150,
					h: 49,
					label: "images/btn/btn_sz.png",
					imgs: "images/city/6.jpg",
					title1: "飞阅苏州",
					title2: "太湖湖心岛、芦荡和渔船",
					contents:"飞阅苏州西山岛“醉美”太湖日出 在苏州古城西南40公里的太湖之中，有座面积约90平方公里的岛屿——西山岛。它是太湖第一大岛，也是我国淡水湖泊中最大的岛屿。清晨，站在西山岛观日出，平静的湖面被初升的红日染成了金色。湖边，有人拍照，有人摆造型，与朝阳争辉比美。远处，东山如黛。近前，芦荡丛中停泊着一艘艘古老的渔船。（应小兰 摄）"
				}, 
				{
					name: "btn_yz", //扬州
					animateType: "2",
					x: 1267,
					y: 180,
					w: 150,
					h: 49,
					label: "images/btn/btn_yz.png",
					imgs: "images/city/7.jpg",
					title1: "飞阅扬州",
					title2: "俯瞰瘦西湖，青翠溢满湖",
					contents:"俯瞰扬州瘦西湖:青翠溢满湖盛夏的瘦西湖，满眼郁郁葱葱,满园的树木丛林，像是瘦西湖上巨大的阳伞，抵御住了似火的骄阳。俯瞰瘦西湖，五亭桥、白塔、钓鱼台、徐园、熙春台、二十四桥等等,各处亭台楼阁就像是这一片青翠之中的巧妙点缀。傍晚，夕阳西下，华灯初上，落霞洒在湖面上，青翠的瘦西湖一下子变得艳丽多彩。"
				}, 
				{
					name: "btn_lyg", //连云港
					animateType: "2",
					x: 1615,
					y: 530,
					w: 170,
					h: 49,
					label: "images/btn/btn_lyg.png",
					imgs: "images/city/8.jpg",
					title1: "飞阅连云港",
					title2: "飞初秋时的连云港港口",
					contents:"连云港港口出行的货轮连云港港口地处中国沿海中部的海州湾西南岸，位于长江三角洲最北端。连云港港口北倚东西连岛天然屏障，南靠巍峨的云台山，海峡有两公里宽，气候等自然条件优越，是一个终年不冻良港，也是我国八大海港之一。同时也是横贯中国东西的铁路大动脉——陇海、兰新铁路的东部终点港，是中国中西部地区最便捷、最经济的出海口，为连接太平洋和大西洋，加强国际间的政治、经济、文化交流提供了便利的条件。"
				}, 
				{
					name: "btn_nt", //南通
					animateType: "2",
					x: 1640,
					y: 680,
					w: 150,
					h: 49,
					label: "images/btn/btn_nt.png",
					imgs: "images/city/9.jpg",
					title1: "飞阅南通",
					title2: "金色滩涂——大自然的礼物",
					contents:"南通外向型农业综合开发区金色广袤的滩涂江苏如东拥有106公里海岸线、104万亩金色滩涂、丰富的海产品，迷人的滨海风光，如大自然所赐的珍贵礼物。。"
				}, 
				{
					name: "btn_sq", //宿迁
					animateType: "2",
					x: 1790,
					y: 855,
					w: 150,
					h: 49,
					label: "images/btn/btn_sq.png",
					imgs: "images/city/10.jpg",
					title1: "飞阅宿迁",
					title2: "春色满园，飞阅宿迁黄河公园",
					contents:"春到古黄河，飞阅宿迁黄河公园宿迁宿城古黄河水利风景区是国家级水利风景区，宿迁地处洪泽湖和骆马湖之间，京杭大运河穿城而过。春色满园，双塔矗立，碧水蓝天、郁郁葱葱。"
				}, 
				{
					name: "btn_nj", //南京
					animateType: "2",
					x: 1890,
					y: 197,
					w: 150,
					h: 49,
					label: "images/btn/btn_nj.png",
					imgs: "images/city/11.jpg",
					title1: "飞阅南京",
					title2: "飞阅南京紫金山，色彩斑斓染紫金",
					contents:"中山陵美龄宫金色大项链冬季，但金陵秋色依在，空中俯瞰紫金山、明孝陵、中山陵、灵谷寺、美龄宫……漫山遍野，层林尽染。浓郁秋冬色使紫金山染上了紫金色，变成了真正的紫金图。"
				}, 
				{
					name: "btn_wx",//无锡
					animateType: "2",
					x: 2152,
					y: 690,
					w: 150,
					h: 49,
					label: "images/btn/btn_wx.png",
					imgs: "images/city/12.jpg",
					title1: "飞阅无锡",
					title2: "飞阅无锡拈花湾，享传世禅意之旅",
					contents:"水中莲——五灯湖灵山小镇·拈花湾位于无锡市滨湖区马山国家风景名胜区的山水之间。这里向来有“净空、净土、净水”之称，生态秀美，环境优越。而拈花湾靠山面湖，更与驰名中外的灵山大佛依山为邻，拈花湾的名字源于佛经中“佛祖拈花，伽叶微笑”的典故。小镇整体建筑风格参考了日本奈良的风格，又融入了中国江南小镇特有的水系，打造出了一种独有的建筑风格。"
				}, 
				{
					name: "btn_xz",//徐州
					animateType: "2",
					x: 2240,
					y: 495,
					w: 150,
					h: 49,
					label: "images/btn/btn_xz.png",
					imgs: "images/city/13.jpg",
					title1: "飞阅徐州",
					title2: "航拍徐州潘安湖 青砖黛瓦清水留影",
					contents:"俯瞰潘安水镇，青砖黛瓦碧水徐州潘安湖湿地公园整个景区南北兼容，自然和谐，是苏北独特田园风光的中国最美乡村湿地。空中俯瞰潘安湖在其西北侧有一片明清风格的古建筑群，在氤氲的水汽中若隐若现，宛若蓬莱仙境。这，就是潘安水镇。潘安水镇如同一幅古香古色的历史画卷，思晋桥、古戏台依次铺陈开来。游走其间，仿佛“穿越”回千年。"
				},
			],
					panoDots = new C3D.Sprite;
				panoDots.name("panoDots").visibility({
					alpha: 0
				}).position(0, 0, 0).update();
				var s33 = [12, 13, 0, 2, 3, 1, 4, 5, 6, 7, 8, 9, 10, 11];
				$.each(c_dots, function(A, B) {
					var g = B,
						Q = -360 * (g.x - 80) / o.w,
						G = 90 * (g.y - o.h / 2) / o.h,
						M = Q / 180 * Math.PI,
						Y = h - 80,
						i = C3D.create({
							type: "sprite",
							name: g.name,
							scale: [.6],
							children: [{
								type: "plane",
								name: "dot",
								size: [120, 120],
								position: [0, 2, 2],
								rotation: [G, 0, 0],
								material: [{
									image: g.dot
								}],
								bothsides: !1
							}, {
								type: "plane",
								name: "label",
								size: [0, g.h],
								rotation: [G, 0, 0],
								origin: [-18, 33],
								material: [{
									image: g.label
								}],
								bothsides: !1
							}]
						});
					i.position(Math.sin(M) * Y, .9 * (g.y - o.h / 2), Math.cos(M) * Y).rotation(0, Q + 180 - 5, 0).updateT(), 
					i.on("touchend", function() {
						Dialog.showDiv(g.name,g.animateType,g.imgs,g.title1,g.title2,g.contents);
					}), 
					i.r0 = Q, 
					i.w0 = g.w, 
					JT.to(i.dot, .4, {
						scaleX: 1.1,
						scaleY: 1.1,
						yoyo: !0,
						repeat: -1,
						ease: JT.Quad.InOut,
						onUpdate: function() {
							this.target.updateT()
						}
					}), panoDots.addChild(i)
				});
				
		spMain.addChild(panoDots);
		
		var originTouchPos = {
					x: 0,
					y: 0
				},
				oldTouchPos = {
					x: 0,
					y: 0
				},
				newTouchPos = {
					x: 0,
					y: 0
				},
				firstDir= "",
				originTime= 0,
				oldTime= 0,
				newTime= 0,
				dx= 0,
				dy= 0,
				ax= 0,
				ay= 0,
				time= 0;
		var onTouchStart = function(t) {
			firstDir = "", 
			t = t.changedTouches[0];
			
			originTouchPos.x = oldTouchPos.x = newTouchPos.x = t.clientX ;
			originTouchPos.y = oldTouchPos.y = newTouchPos.y = t.clientY ;
			originTime = oldTime = newTime = Date.now();
			dx = dy = ax = ay = 0, 
			anta.on("touchmove", onTouchMove), 
			anta.on("touchend", onTouchEnd)
		};
		anta.on("touchstart", onTouchStart);
	    var onTouchMove = function(t) {
			return t = t.changedTouches[0], 
			newTouchPos.x = t.clientX, 
			newTouchPos.y = t.clientY, 
			newTime = Date.now(), 
			checkGesture(), 
			oldTouchPos.x = newTouchPos.x, 
			oldTouchPos.y = newTouchPos.y, 
			oldTime = newTime, !1
		};
		var onTouchEnd = function() {
			newTime = Date.now();
			var t = (newTime - oldTime) / 1e3;

			anta.off("touchmove", onTouchMove), 
			anta.off("touchend", onTouchEnd)
		}

		function checkGesture(){
			dx = fixed2(newTouchPos.x - originTouchPos.x), 
			dy = fixed2(newTouchPos.y - originTouchPos.y), 
			ax = fixed2(newTouchPos.x - oldTouchPos.x), 
			ay = fixed2(newTouchPos.y - oldTouchPos.y), 
			time = (newTime - oldTime) / 1e3, 
			"" == firstDir && (Math.abs(ax) > Math.abs(ay) ? firstDir = "x" : Math.abs(ax) < Math.abs(ay) && (firstDir = "y"));
			
			if(!p){
				c.lon = (c.lon - .2 * ax) % 360,
				c.lat = Math.max(-90, Math.min(90, c.lat + .2 * ay))
			}
					
			
		}
		function fixed2(t) {
			return Math.floor(100 * t) / 100
		}
		requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
		function (callback) {
			setTimeout(callback, 1000 / 60);
		};
		
		//执行move动画
		function actiondh() {
			var t = (d.lon + f.lon + c.lon) % 360,
				i = .35 * (d.lat + f.lat + c.lat);
			t - panoBg.rotationY > 180 && (panoBg.rotationY += 360),
			t - panoBg.rotationY < -180 && (panoBg.rotationY -= 360);
			var n = t - panoBg.rotationY,
				a = i - panoBg.rotationX;
			Math.abs(n) < .1 ? panoBg.rotationY = t : panoBg.rotationY += .3 * n, 
			Math.abs(a) < .1 ? panoBg.rotationX = i : panoBg.rotationX += .15 * a, 
			panoBg.updateT();
			panoDots.rotationY = panoBg.rotationY, 
			panoDots.rotationX = panoBg.rotationX, 
			panoDots.updateT(), 
			t - panoItems.rotationY > 180 && (panoItems.rotationY += 360),
			t - panoItems.rotationY < -180 && (panoItems.rotationY -= 360);
			var o = t - panoItems.rotationY,
				r = i - panoItems.rotationX;
			Math.abs(o) < .1 ? panoItems.rotationY = t : panoItems.rotationY += .25 * o, Math.abs(r) < .1 ? panoItems.rotationX = i : panoItems.rotationX += .15 * r, panoItems.updateT();
								
								
			var s12 = -150 - 20 * Math.abs(n);
			spMain.z += .1 * (s12 - spMain.z), 
			spMain.updateT(),
			panoDots_show(panoDots.rotationY),
			A = requestAnimationFrame(actiondh);
		}
		function  panoDots_show(t) {
			var i = (-180 - t) % 360;
			i = i > 0 ? i - 360 : i;
			for (var e = 0, a = panoDots.children.length; a > e; e++) {
				var o = panoDots.children[e];
				o.r0 > i - 5 && o.r0 < i + 25 ? 0 == o.label.width && (JT.kill(o.label), JT.to(o.label, .3, {
					width: o.w0,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateS()
					}
				})) : o.label.width == o.w0 && (JT.kill(o.label), JT.to(o.label, .3, {
					width: 0,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateS()
					}
				}))
			}
		}
		// window.ontouchmove = function(e) {e.preventDefault(); };

		//重力感应
		var o2 = new Orienter();
		o2.handler = function (t) {
			d.lon = -t.lon,
			d.lat = t.lat
			if(p){
				f.lat = -d.lat, 
				f.lon = -d.lon
			}
		};
		o2.init();
		//执行主场景入场动画
		function gotoIndex(){
			JT.fromTo(spMain, 4, {
				z: -2200
			}, {
				z: -150,
				ease: JT.Quad.Out,
				onUpdate: function() {
					this.target.updateT().updateV()
				},onEnd:function(){
					p = false
					actiondh();
					/*JT.to($("#bg"), 1, {
							opacity: 1
						});*/
					//$(".govr").show(); vr按钮显示
				}
			});
			JT.fromTo(panoBg, 4, {
				rotationY: -720
			}, {
				rotationY: 25, //控制 过渡动画结束后停止的位置
				ease: JT.Quad.Out,
				onUpdate: function() {
					this.target.updateT().updateV()
				},onEnd:function(){
				
				}
			});
			for (var A = 0, B = panoBg.children.length; B > A; A++){
				JT.from(panoBg.children[A], 0.5, {
					x: 0,
					z: 0,
					scaleX: 0,
					scaleY: 0,
					delay: .05 * A,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT()
					},
					onStart: function() {
						this.target.visibility({
							alpha: 1
						}).updateV()
					}
					
				});
			} 
			for (var g = 0, C = panoItems.children.length; C > g; g++){
				JT.from(panoItems.children[g], 2, {
					x: 0,
					z: 0,
					scaleX: .01,
					scaleY: .01,
					scaleZ: .01,
					delay: Math.random() + 2,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT()
					},
					onStart: function() {
						this.target.visibility({
							alpha: 1
						}).updateV()
					}
				});
			}
				JT.fromTo(panoItems, 4, {
					rotationY: -720
				}, {
					rotationY: 25,
					ease: JT.Quad.Out,
					onUpdate: function() {
						this.target.updateT().updateV()
					}
				})
				 JT.fromTo(panoDots, 2, {
								rotationY: -360,
								alpha: 0
							}, {
								rotationY: 25,
								alpha: 1,
								delay: 2,
								ease: JT.Quad.Out,
								onUpdate: function() {
									this.target.updateT().updateV()
								},
								onStart: function() {
									this.target.visibility({
										alpha: 1
									}).updateV()
								}
							})
		
		}
		var resize =function() {
			setTimeout(function() {
				anta.size(window.innerWidth, window.innerHeight).update()
			}, 500)
		}
		$(window).on("resize",function(){resize()})
		var Dialog={
			isAnimate : true,
			showDiv:function(Dsobj,type,imgs,title1,title2,contents){
				Dialog.isAnimate = true;
				Dialog.showMask();
				$(".layerbox").hide();
				$(".layer_s1").addClass("layerbox").attr("id",Dsobj);
				console.log(title1)
				$Dsobj=$("#"+Dsobj);
				$Dsobj.addClass("layerbox");
				$Dsobj.show();
				if(type=="2"){
					$("#"+Dsobj+" .box").height("0");
					$("#"+Dsobj+" .text_head img").attr("src",imgs);
					$("#"+Dsobj+" .title1").html(title1);
					$("#"+Dsobj+" .title2").html(title2);
					$("#"+Dsobj+" .text_cont").html(contents)
					JT.fromTo("#"+Dsobj+" .box", 0.3, {
						scaleX:0,
						scaleY:0
					},{
						scaleX: 1,
						scaleY: 1,
						ease: JT.Quad.Out,
						onEnd: function () {
							JT.fromTo("#"+Dsobj+" .box", 0.4, {
								height: "0rem"
							}, {
								height: "8rem",//弹窗的高度
								ease: JT.Quad.Out,
								onEnd:function(){
									$('.btn_close').show();
									Dialog.isAnimate = false;
								}
							});
						}
					});
				}
				//$('.btn_close').unbind();
				$('.btn_close').bind('click', function(){Dialog.close();})
// 				$('.youhui_btn').bind('click', function(){Dialog.close();Dialog.formShow();}) // 点击 优惠 按钮
// 				$('.lingqu').bind('click', function(){Dialog.formHide();})// 点击 确认领取按钮
				return false;
			},
			showMask : function(){
				var height = $(window).height();
				$("body").append("<div style='background:#000; display:none; filter:alpha(opacity=90);opacity: 0.5; z-index:99;  width:100%;  position:absolute; left:0; top:0;'  id='bgdiv'></div>");
				$("#bgdiv").css("height",height);
				$("#bgdiv").show();
			},
			close : function(){
				$(".layerbox").hide()
				$("#bgdiv").hide(function(){$("#bgdiv").remove();});
			},
			formShow:function(){
				$(".login_wrap_mask").show();
			},
			formHide:function(){
				$(".login_wrap_mask").hide();
			}
		}
		
	var audioEl = document.getElementById('bgm');
	function ready(){
		if(isWeiXin()){
			forceSafariPlayAudio();
		}
	}
	audioEl.addEventListener('play', function() {
		$('.music').removeClass("pause");
	}, false);
	
	function forceSafariPlayAudio() {
		audioEl.load(); 
		audioEl.play(); 
	}
	
// 	simpScroller(document.querySelector(".vertical_rqly"));	
// 	simpScroller(document.querySelector(".vertical_zgl"));		

	var browser = {
		versions: function () {
			var u = navigator.userAgent, app = navigator.appVersion;
			return {         //移动终端浏览器版本信息
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
			};
		}(),
		language: (navigator.browserLanguage || navigator.language).toLowerCase()
	}
	//gotoIndex();
	loader.start();
	
	var ispay = true;
	//tvc视频按钮点击
    $('.btn_showVideo').click(function(){
		if(Dialog.isAnimate){return;}
        $("#qp_video").show();
        videoPlayer($(this).attr("data-vid"),'100%','100%','mod_player','n', '1');
		$("#bgm")[0].pause();
		$('.music').addClass("pause");
		
    });
	$('#qp_video .close').click(function(){
        $("#qp_video").hide();
		$("#mod_player").html("");
		if(ispay){
			$("#bgm")[0].play();
			$('.music').removeClass("pause");
		}
	});
	
	$('.music').click(function(){
		if($('.music').attr("class")=="music"){
			$("#bgm")[0].pause();
			$('.music').addClass("pause");
			ispay = false;
		}else{
			$("#bgm")[0].play();
			$('.music').removeClass("pause");
			ispay = true;
		}
	});
})();