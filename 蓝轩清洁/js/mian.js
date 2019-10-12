
	function changeI () {
		var i = $(".navli").css("display")
		if( i == "none"){
			$(".navli").show();
			$(".glyphicon").removeClass("glyphicon-align-justify").addClass("glyphicon-remove");
		}else{
			$(".navli").hide();
			$(".glyphicon").addClass("glyphicon-align-justify");
		}
	}
	$(".navDiv>div:first-of-type li").bind("mouseover",function  () {
		$(".navDiv>div:first-of-type li").removeClass("on");
		$(this).addClass("on");
		var index = $(this).index();
		var data=[
			/*外墙高空*/
			[
				{imgSrc:"img/tab01.png",h4Text:"玖龙纸业外墙清洗"},
				{imgSrc:"img/tab02.png",h4Text:"福建解放军第180医院外墙清洗"},
				{imgSrc:"img/tab03.png",h4Text:"国美电器（重庆、广安）门头清洗"},
				{imgSrc:"img/tab04.png",h4Text:"北碚小学外墙清洗"},
				{imgSrc:"img/tab05.png",h4Text:"外墙高空"},
			],
			/*保洁托管*/
			[
				{imgSrc:"img/tab11.JPG",h4Text:"这是一份神圣而光荣的职责"},
				{imgSrc:"img/tab12.jpg",h4Text:"九龙坡区黄桷坪街道·道路清扫"},
				{imgSrc:"img/tab13.jpg",h4Text:"重庆农村商业银行南岸区所有分理处保洁托管  "},
				{imgSrc:"img/tab14.JPG",h4Text:"卓创国际  "},
				{imgSrc:"img/tab15.png",h4Text:"法冠-DS高标准旗舰店 "},
			],
			/*开荒清洁*/
			[
				{imgSrc:"img/tab21.JPG",h4Text:"这是一份神圣而光荣的职责"},
				{imgSrc:"img/tab22.jpg",h4Text:"九龙坡区黄桷坪街道·道路清扫"},
				{imgSrc:"img/tab23.jpg",h4Text:"重庆农村商业银行南岸区所有分理处保洁托管  "},
				{imgSrc:"img/tab24.JPG",h4Text:"卓创国际  "},
				{imgSrc:"img/tab22.jpg",h4Text:"法冠-DS高标准旗舰店 "},
			],
			/*居家清洗*/
			[
				{imgSrc:"img/tab31.jpg",h4Text:"沙坪坝家用地毯清理步骤和方法"},
				{imgSrc:"img/tab32.jpg",h4Text:"沙坪坝沙发清洗方法和保养技巧"},
				{imgSrc:"img/tab33.jpg",h4Text:"布艺沙发清洁作业流程"},
				{imgSrc:"img/tab34.jpg",h4Text:"真皮沙发的清洁"},
				{imgSrc:"img/tab35.jpg",h4Text:"重庆奥蓝酒店足疗椅子清洗"},
			],
			/*石材护理*/
			[
				{imgSrc:"img/tab41.jpg",h4Text:"关于大理石护理的石材护理方式 "},
				{imgSrc:"img/tab42.jpg",h4Text:"浅析关于地板打蜡石材的认识  "},
				{imgSrc:"img/tab43.jpg",h4Text:"沙坪坝石材护理与石材打蜡技术 "},
				{imgSrc:"img/tab44.jpg",h4Text:"酒店大理石地板打蜡"},
				{imgSrc:"img/tab45.jpg",h4Text:"交通银行石材护理  "},
			],
			/*家电清洗*/
			[
				{imgSrc:"img/tab51.JPG",h4Text:"重庆市沙坪坝区农业水利局  "},
				{imgSrc:"img/tab52.JPG",h4Text:"重庆三峰卡万塔环境产业有限公司油烟机清洗   "},
				{imgSrc:"img/tab53.JPG",h4Text:"中国人民解放军六九零五厂医院空调清洗  "},
				{imgSrc:"img/tab54.JPG",h4Text:"重庆安培瑞酒店油烟机、地毯清洗 "},
				{imgSrc:"img/tab55.JPG",h4Text:"申基索菲特大酒店油烟机清洗   "},
			],
			/*清掏疏通*/
			[
				{imgSrc:"img/tab61.jpg",h4Text:"沙坪坝清洁公司清掏服务"},
				{imgSrc:"img/tab62.jpg",h4Text:"专业清掏疏通下水道 "},
				{imgSrc:"img/tab63.jpg",h4Text:"沙坪坝区备战雨季提前清掏疏通部分下水道"},
				{imgSrc:"img/tab64.jpg",h4Text:"沙坪坝区清掏疏通工作"},
				{imgSrc:"img/tab65.jpg",h4Text:"金鹰女人街生化池清掏"},
			]
		]
		for(var j =0;j<data[index].length;j++){
			$(".clearfix li:nth-of-type("+(j+1)+") img").attr('src',data[index][j].imgSrc);
			$(".clearfix li:nth-of-type("+(j+1)+") h4").text(data[index][j].h4Text);
		}
	})
	function panduan (idName) {
		if($("#"+idName+"").val()==false&&idName=="name"){
			$("#"+idName+"+span").last().text("姓名不能为空！")
		}else if($("#"+idName+"").val()==false&&idName=="tel"){
			$("#"+idName+"+span").last().text("电话不能为空！")
		}
	}
	function yanz (idName) {
		if($("#"+idName+"").val()==false){
			$("#"+idName+"+span").last().text(" ")
		}
	}
			var btn = document.getElementById("btn");
			// 定义scrollTop  初始化    times 定时器的名字   target 滚动条的位置  到顶部的距离
			var scrollTop = 0,times =null,target=0;
			// 绑定事件 
			window.onscroll = function(){
				scrollTop = document.documentElement.scrollTop;
//				if(scrollTop > 0){
//					btn.style.display = "block";
//				}else{
//					btn.style.display = "";
//				}
				// 获取滑动的位置 
				target = scrollTop;
			}
			
			btn.onclick = function(){
				clearInterval(times);
				times=setInterval(function(){
					target = target-(target*0.2);
					window.scrollTo(0,target);
					if(target<=0 ){
					clearInterval(times);
					}
				},50)	
				return false;
			}	
