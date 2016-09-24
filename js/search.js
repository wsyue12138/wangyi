(function($){
	$(function(){
		iscrolls()
		function iscrolls(){
			myScroll = new IScroll(".search_box")
		}
		$(".searchtop_left").on("touchstart",function(){
			window.location.href="../home.html"
		})
		$(".searchtop_right").on("touchstart",function(){
			window.location.href="http://music.baidu.com/tag/%E6%B5%81%E8%A1%8C"
		})

	})
})(Zepto)
