(function($){
	$(function(){
		$(".self_content_top_li1_btn").click(function(){
			window.location.href = "zhuce.html"
		})
		$("#toptb1").on("touchend",function(){	/*点击显示个人信息框*/
			(function($){
				$("#self").css("display","block").stop().animate({"left":0},500,function(){});
				var myScroll = new IScroll(".self_content_top");
			})(jQuery)
		})
		$("#self").on("touchend",".self_mask",function(){	/*点击消失个人信息框*/
			(function($){
				$("#self").stop().animate({"left":"-100%"},500,function(){
					$("#self").css("display","none")
				});
			})(jQuery)
		})
		var self_onOff = true;
		var self_timeout = null;
		$(".self_content_top_li8_btnbox_up").on("touchend",function(){/*点击切换背景*/
			clearTimeout(self_timeout);
			if(self_onOff){
				$(this).css("backgroundColor","red")
				self_timeout = setTimeout(function(){
					(function($){
						$(".self_content_top_li8_btnbox_up").stop().animate({"left":"0.45rem"},14,function(){
							$(".self_content_top_li8_btnbox_up").css("backgroundColor","#fff");
							$(".self_mask").css("backgroundColor","#000");
							$(".self_content_top").css("backgroundColor","#000");
							$(".self_content_bottom").css("backgroundColor","#ccc");
							$("#self").css("color","#ccc");
							$("#self .self_content_top_ul li i").addClass("cg")
							
						})
					})(jQuery)
					
				},300)
				self_onOff = false;
			}else{
				$(this).css("backgroundColor","#ccc")
				self_timeout = setTimeout(function(){
					(function($){
						$(".self_content_top_li8_btnbox_up").stop().animate({"left":"-0.2rem"},14,function(){
							$(".self_content_top_li8_btnbox_up").css("backgroundColor","#fff");
							$(".self_mask").css("backgroundColor","#616262");
							$(".self_content_top").css("backgroundColor","#edeff0");
							$(".self_content_bottom").css("backgroundColor","#fff");
							$("#self").css("color","#000");
							$("#self .self_content_top_ul li i").removeClass("cg")
							
						})
					})(jQuery)					
				},300)
				self_onOff = true;
			}
		})
	})
})(Zepto)

