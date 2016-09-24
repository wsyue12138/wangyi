$(function(){

	$("#contact").on("touchstart",function(){	
		if($(this).children().css("display")=="none"){
			$(this).children().css("display","block");
			$("#close").css("display","block");
		}		
	})
	$("#close").on("click",function(){
		$("#contact li").css("display","none");
		$(this).css("display","none");
	})
	$("#contact").on("click","li",function(){
		console.log($(this).index())
		window.location.href="html/chengyuan_"+$(this).index()+".html"
	})
})