$(function(){
	var	time = null;
	$("#nav li").click(function(){
		//alert(1)
		$("#nav li").css("border-color","#fff");
		$(this).css("border-color","#ce3d3a");
		$(this).css("color","#ce3d3a").siblings().css("color","#666");
		$("#content").css("opacity","0")
		clearInterval(time)
		var a =Number($("#content").css("opacity"))
		time = setInterval(function(){
			//var a =$("#content").css("opacity")
			a += 0.1;
			//console.log(a)
			$("#content").css("opacity",a)
			if(a >= 1){
				clearInterval(time)
			}
			
		},100)
		
	
	})
	$("#fanhui").click(function(){
		//alert(1)
		window.location.href="mymic.html"
	})
	$("#content").on("click","li",function(){
		localStorage.qumu = $(this).index();
		window.location.href = "audio.html";
	})
})
