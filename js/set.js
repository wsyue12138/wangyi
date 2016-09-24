$(function(){
	var myscroll = null;
	/*控制整个页面显示隐藏*/
	$("body").css("display","block").stop().animate({"opacity":1,"top":0},500,function(){
		if($("#header").attr("class") == "header_on"){
			$("#header").removeClass("header_on");
			iscroll();
			myscroll.refresh();
			
			/*控制开关*/
			/*网络*/
			var off = true;
			
			$("#network .list_dl").on("touchstart",function(){
				if(off == true){
					$(this).attr("actived","1").addClass("active").siblings(".list_dl").attr("actived","0").addClass("disable");
					off = false;
				}else{
					if($(this).attr("actived") == 1){
						$(this).removeClass("active").siblings(".list_dl").removeClass("disable");
						off = true;
					}
				}
			})
			
			/*其他*/
			$(".list .list_dl").not(".network_list").each(function(){
				if($(this).attr("class").indexOf("active") != -1){
					$(this).attr("isoff","false");
				}else{
					$(this).attr("isoff","true");
				}
				$(this).on("touchstart",function(){
					if($(this).attr("isoff") == "false"){
						$(this).removeClass("active");
						$(this).attr("isoff","true");
					}else{
						$(this).addClass("active");
						$(this).attr("isoff","false");
					}
				})
			})
		}
	});
	
	/*控制页面隐藏*/
	
	$(".back").click(function(){
		window.location = "../home.html"
	})
	
	function activeHide(){
		if($("#header").attr("class") != "header_on"){
			$("#header").addClass("header_on");
		}
		$("body").stop().animate({"opacity":0,"top":"50px"},500,function(){
			$(this).css("display","none");
		});
	}
	
	function iscroll(){
		myscroll=new IScroll("#main");
	}
})






























