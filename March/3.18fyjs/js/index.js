
    var cityName = [];
    var cityDetail = [
        { cityId : 0, city_name : 'nj', imgNum : '20',},
        { cityId : 1, city_name : 'lyg', imgNum : '2',},
        { cityId : 2, city_name : 'ha', imgNum : '14',},
        { cityId : 3, city_name : 'cz', imgNum : '7',},
        { cityId : 4, city_name : 'ly', imgNum : '1',},
        { cityId : 5, city_name : 'yc', imgNum : '13',},
        { cityId : 6, city_name : 'zj', imgNum : '2',},
        { cityId : 7, city_name : 'tz', imgNum : '2',},
        { cityId : 8, city_name : 'sq', imgNum : '6',},
        { cityId : 9, city_name : 'wx', imgNum : '5',},
        { cityId : 10, city_name : 'sz', imgNum : '2',},
        { cityId : 11, city_name : 'xz', imgNum : '4',},
        { cityId : 12, city_name : 'yz', imgNum : '1',},
        { cityId : 13, city_name : 'nt', imgNum : '2',},
    ];
    var imgText = [
        [
            { text:"月色明灯照溧水 上元佳节共点福", imgUrl : "http://www.js.xinhuanet.com/2019-02/21/c_1124138976.htm"},
            { text:"秦淮灯会 华彩照亮金陵城", imgUrl : "http://www.js.xinhuanet.com/2019-01/30/c_1124064504.htm"},
            { text:"500架无人机带你解锁2019青奥艺术灯会观灯新姿势", imgUrl : "http://www.js.xinhuanet.com/2019-01/30/c_1124060496.htm"},
            { text:"航拍T66/65次列车换装“绿巨人”上岗 ", imgUrl : "http://www.js.xinhuanet.com/2019-01/08/c_1123957400.htm"},
            { text:"航拍南京阅江楼 长江边上的“江南第一楼”", imgUrl : "http://www.js.xinhuanet.com/2018-12/26/c_1123896856.htm"},
            { text:"航拍南京玄武湖 一颗闪耀千年的“金陵明珠", imgUrl : "http://www.js.xinhuanet.com/2018-12/25/c_1123895334.htm"},
            { text:"悠悠漫时光 遇见不老村", imgUrl : "http://www.js.xinhuanet.com/2018-12/14/c_1123816905.htm"},
            { text:"江北新区智能制造产业园：创新布局 打造两千亿级 产业集群", imgUrl : "http://uav.xinhuanet.com/2018-07/10/c_129909725.htm"},
            { text:"航拍南京拉萨路小学：最有意义的六一儿童节礼物", imgUrl : "http://uav.xinhuanet.com/2018-06/01/c_129884493.htm"},
            { text:"航拍烟波浩渺金牛湖 六合山水景色美", imgUrl : "http://uav.xinhuanet.com/2018-05/30/c_129882996.htm"},
            { text:"航拍南京巴布洛生态谷 追寻紫色“普罗旺斯梦”", imgUrl : "http://uav.xinhuanet.com/2018-05/25/c_129880170.htm"},
            { text:"春意浓 航拍鸡鸣寺樱花绽放", imgUrl : "http://uav.xinhuanet.com/2018-03/29/c_129839222.htm"},
            { text:"航拍高淳国际慢城 让时间慢下来", imgUrl : "http://uav.xinhuanet.com/2018-03/19/c_129830118.htm"},
            { text:"航拍南京梅花山 初春着“粉装", imgUrl : "http://uav.xinhuanet.com/2018-03/06/c_129823715.htm"},
            { text:"航拍南京新城科技园", imgUrl : "http://uav.xinhuanet.com/2018-02/28/c_129819167.htm"},
            { text:"航拍南京工程学院 品味校园江南春天", imgUrl : "http://uav.xinhuanet.com/2018-04/25/c_129858641.htm"},
            { text:"航拍南京紫金山 色彩斑斓染紫金", imgUrl : "http://uav.xinhuanet.com/2017-12/28/c_129777513.htm"},
            { text:"跨越80年聚焦今天 铭记历史珍惜和平", imgUrl : "http://uav.xinhuanet.com/2017-12/13/c_129765159.htm"},
            { text:"扁舟斜阳石臼湖 爱上江苏的航拍在这儿", imgUrl : "http://uav.xinhuanet.com/2017-12/06/c_129757447.htm"},
            { text:"航拍：长江船来船往 南京龙潭港码头一派繁忙", imgUrl : "http://uav.xinhuanet.com/2017-10/25/c_129726539.htm"},
        ],
        [
            { text:"航拍雪后西双湖 水墨灰白别样美", imgUrl : "http://www.js.xinhuanet.com/2019-01/15/c_1123986729.htm"},
            { text:"航拍初秋时的连云港港口", imgUrl : "http://uav.xinhuanet.com/2018-09/21/c_129958382.htm"},
        ],
        [
            { text:"航拍淮安里运河文化长廊 体味人文与水景交织的古运河之美", imgUrl : "http://www.js.xinhuanet.com/2018-12/14/c_1123835687.htm"},
            { text:"航拍世界文化遗产淮安府署", imgUrl : "http://www.js.xinhuanet.com/2018-10/19/c_1123561848.htm"},
            { text:"航拍淮安水上立交枢纽工程 京杭大运河与淮河在这 里“握手”", imgUrl : "http://www.js.xinhuanet.com/2018-10/12/c_1123532914.htm"},
            { text:"航拍涟水五岛湖 享生态人文之美", imgUrl : "http://uav.xinhuanet.com/2018-06/28/c_129902222.htm"},
            { text:"航拍初夏白马湖 生机盎然", imgUrl : "http://uav.xinhuanet.com/2018-05/07/c_129865942.htm"},
            { text:"航拍淮安市高沟酒非遗保护区", imgUrl : "http://uav.xinhuanet.com/2018-04/03/c_129842609.htm"},
            { text:"航拍淮安烟花绽放 火树银花不夜城", imgUrl : "http://uav.xinhuanet.com/2018-02/28/c_129818946.htm"},
            { text:"航拍江苏涟漪湖 走近米芾洗墨地", imgUrl : "http://uav.xinhuanet.com/2018-02/01/c_129802707.htm"},
            { text:"航拍冬日天泉湖", imgUrl : "http://uav.xinhuanet.com/2017-12/07/c_129759475.htm"},
            { text:"江苏洪泽：初冬古堰景如画", imgUrl : "http://uav.xinhuanet.com/2017-11/28/c_129751351.htm"},
            { text:"航拍江苏淮安237位总督“办公地”", imgUrl : "http://uav.xinhuanet.com/2017-11/28/c_129751052.htm"},
            { text:"航拍大运河船来船往 水禽嬉戏", imgUrl : "http://uav.xinhuanet.com/2017-11/07/c_129734990.htm"},
            { text:"航拍大运河 古黄河等5河交汇 “U”型运河迷倒人", imgUrl : "http://uav.xinhuanet.com/2017-11/03/c_129732212.htm"},
            { text:"航拍全国首个绿色建筑示范园", imgUrl : "http://uav.xinhuanet.com/2017-09/20/c_129708676.htm"},
        ],
        [
            { text:"航拍常州紫荆公园 看月季盛放在东经120度", imgUrl : "http://www.js.xinhuanet.com/2018-12/07/c_1123790422.htm"},
            { text:"航拍常州查家湾 带你感受乡村的清新秀丽", imgUrl : "http://www.js.xinhuanet.com/2018-12/05/c_1123788102.htm"},
            { text:"航拍常州东坡公园 一方天地追寻文人气息", imgUrl : "http://www.js.xinhuanet.com/2018-12/05/c_1123788658.htm"},
            { text:"航拍常州翠竹公园 各色树木让深秋缤纷多姿", imgUrl : "http://www.js.xinhuanet.com/2018-12/05/c_1123786159.htm"},
            { text:"航拍常州红梅公园 感受闹市中静谧的美", imgUrl : "http://www.js.xinhuanet.com/2018-11/29/c_1123785218.htm"},
            { text:"航拍常州长荡湖 感受湖光山色的灵与秀", imgUrl : "http://www.js.xinhuanet.com/2018-11/22/c_1123742362.htm"},
            { text:"航拍常州查家湾 十里梨花白如雪", imgUrl : "http://uav.xinhuanet.com/2018-04/10/c_129846217.htm"},
        ],
        [
            { text:"航拍金色稻田 江苏“好味稻”飘更远", imgUrl : "http://www.js.xinhuanet.com/2018-11/19/c_1123682760.htm"},
        ],
        [
            { text:"航拍盐城盐都创业园菊花绽放", imgUrl : "http://www.js.xinhuanet.com/2018-11/15/c_1123678506.htm"},
            { text:"金秋清晨云蒸霞蔚 稻田深处虫草鸣", imgUrl : "http://www.js.xinhuanet.com/2018-11/01/c_1123642314.htm"},
            { text:"无人机带你飞阅盐城 瞰一城夜色璀璨", imgUrl : "http://www.js.xinhuanet.com/2018-07/19/c_1123143183.htm"},
            { text:"航拍江苏大丰麋鹿保护区 遥见麋鹿在汀洲", imgUrl : "http://uav.xinhuanet.com/2018-07/10/c_129909928.htm"},
            { text:"风景如画 航拍江苏盐城三官村", imgUrl : "http://uav.xinhuanet.com/2018-05/29/c_129882125.htm"},
            { text:"航拍江苏大丰滩涂：呦呦鹿鸣 食野之苹", imgUrl : "http://uav.xinhuanet.com/2018-06/20/c_129897283.htm"},
            { text:"航拍盐城大丰滩涂上的“大脚印”", imgUrl : "http://uav.xinhuanet.com/2018-05/09/c_129867271.htm"},
            { text:"航拍盐城郁金香花海 色彩斑斓的童话", imgUrl : "http://uav.xinhuanet.com/2018-04/16/c_129851095.htm"},
            { text:"航拍江苏盐城 丹顶鹤戏雪成舞", imgUrl : "http://uav.xinhuanet.com/2018-01/30/c_129800965.htm"},
            { text:"航拍雪后盐城盐渎公园红杉雪影", imgUrl : "http://uav.xinhuanet.com/2018-01/10/c_129786450.htm"},
            { text:"无人机之旅 | 航拍黄海森林公园 红杉环绕心形小池", imgUrl : "http://uav.xinhuanet.com/2017-12/11/c_129762279.htm"},
            { text:"无人机之旅 | 航拍都市夜童话 爱上盐城聚龙湖", imgUrl : "http://uav.xinhuanet.com/2017-10/30/c_129728878.htm"},
            { text:"与鹤齐飞 航拍中国首个滩涂保护区", imgUrl : "http://uav.xinhuanet.com/2017-09/18/c_129706498.htm"},
        ],
        [
            { text:"航拍镇江西津渡 感受千年古渡魅力", imgUrl : "http://uav.xinhuanet.com/2018-09/21/c_129958394.htm"},
            { text:"航拍镇江金山风景区 看楼台两岸水相连", imgUrl : "http://www.js.xinhuanet.com/2018-08/21/c_1123295952.htm"},
        ],
        [
            { text:"航拍沙沟古镇 湖荡环绕古韵浓郁", imgUrl : "http://www.js.xinhuanet.com/2018-08/30/c_1123322216.htm"},
            { text:"从“码头经济”走向“以港兴城”", imgUrl : "http://www.js.xinhuanet.com/2018-07/31/c_1123197567.htm"},
        ],
        [
            { text:"航拍耿车镇大众村：从“废品村”到“美丽乡村”", imgUrl : "http://uav.xinhuanet.com/2018-07/17/c_129914394.htm"},
            { text:"航拍宿迁三台山衲田花海", imgUrl : "http://uav.xinhuanet.com/2018-05/31/c_129884147.htm"},
            { text:"航拍骆马湖旅游度假区", imgUrl : "http://uav.xinhuanet.com/2018-05/22/c_129878036.htm"},
            { text:"春色满园 航拍宿迁黄河公园", imgUrl : "http://uav.xinhuanet.com/2018-04/11/c_129847506.htm"},
            { text:"航拍冬日洪泽湖湿地", imgUrl : "http://uav.xinhuanet.com/2017-12/04/c_129756247.htm"},
            { text:"航拍海纳供港蔬菜基地 赏现代农业的美丽画卷", imgUrl : "http://www.js.xinhuanet.com/2018-11/08/c_1123662984.htm"},
        ],
        [
            { text:"航拍无锡梁鸿湿地公园 探寻吴地历史", imgUrl : "http://uav.xinhuanet.com/2018-06/06/c_129887733.htm"},
            { text:"航拍无锡风电科技产业园 绿色区域经济的脊梁", imgUrl : "http://uav.xinhuanet.com/2017-09/29/c_129714538.htm"},
            { text:"航拍无锡拈花湾 享传世禅意之旅", imgUrl : "http://uav.xinhuanet.com/2017-09/27/c_129713000_2.htm"},
            { text:"航拍宜兴竹海：夏日当空 绿影铺地", imgUrl : "http://www.js.xinhuanet.com/2018-07/26/c_1123168597_2.htm"},
            { text:"航拍龙背山森林公园 领略城中森林的壮美风光", imgUrl : "http://www.js.xinhuanet.com/2018-07/24/c_1123162960.htm"},

        ],
        [
            { text:"航拍江南水乡 画舫听雨眠", imgUrl : "http://uav.xinhuanet.com/2018-04/04/c_129842653.htm"},
            { text:"航拍江苏“千人长跑” 雨中迎新年", imgUrl : "http://uav.xinhuanet.com/2018-01/03/c_129780973.htm"},
        ],
        [
            { text:"江苏睢宁： “土地治理”下的乡村振兴之路 ", imgUrl : "http://uav.xinhuanet.com/2018-03/21/c_129825914.htm"},
            { text:"航拍：睢水安宁 瑞雪添景 大美睢宁", imgUrl : "http://uav.xinhuanet.com/2018-01/26/c_129799840.htm"},
            { text:"航拍江苏睢宁房湾湿地 寒冰封存夏的记忆", imgUrl : "http://uav.xinhuanet.com/2018-01/12/c_129788767_2.htm"},
            { text:"航拍江苏省睢宁黄河故道", imgUrl : "http://uav.xinhuanet.com/2018-01/11/c_129787801.htm"},
        ],
        [
            { text:"航拍明清模样老街——扬州东关街", imgUrl : "http://uav.xinhuanet.com/2018-03/12/c_129827647.htm"},
        ],
        [
            { text:"无人机之旅 | 养鱼+发电+旅游 爱上滩涂的航拍在这儿", imgUrl : "http://uav.xinhuanet.com/2017-11/24/c_129748976.htm"},
            { text:"航拍金色滩涂——大自然的礼物", imgUrl : "http://uav.xinhuanet.com/2017-11/15/c_129740661_3.htm"},
        ],
    ];
    var cityImg = [];//存放显示的城市的图片
    for(var i=1;i<= 14;i++){ cityName.push("img/cityName/"+i+".png"); }
    function showCity(nums){
        var liNums = parseInt(nums) + 1;
        $(".barBox").show();
        $(".barUl li:nth-child("+liNums+")").css("cssText","color:#fff!important");
        $(window).scrollTop(0)
        cityImg.length = 0;//清除图片数组
        $(".cityView li").remove();//清除li的图片
        for(var j = 0; j< 14;j++){
            if(cityDetail[j].cityId == nums){
                for(var k=1;k<=cityDetail[j].imgNum;k++){
                    cityImg.push("img/"+cityDetail[j].city_name+"/img"+k+".png");
                }
                $("#cityBox").hide();
                $("#cityName").css("width","40%");
                $("#cityName img").attr('src',cityName[j]);
                for(var n = 0; n< cityImg.length;n++){
                    $(".cityView").append(" <li><a href='"+imgText[nums][n].imgUrl+"' target='_self' ><img src="+cityImg[n]+"><p>"+ imgText[nums][n].text+"</p></a></li>");
                }
                $("#cityDetail").show();

            }
        }
    }
