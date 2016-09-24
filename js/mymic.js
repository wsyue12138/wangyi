$(function(){
	var i = true;
	$("#chuangjian").on("click","#zhuan",function(){
		if(i){
			$(this).addClass("move1")
			$(this).removeClass("move2")
			$(".menu1").css("display","none");
		}else{
			$(this).addClass("move2")
			$(this).removeClass("move1")
			$(".menu1").css("display","block");
		}
		i = !i;
	})
	$("#content").on("click","li",function(){
		//alert(1)
		window.location.href="bendiyinyue.html"
	})
	$("#top").on("click","#toptb2",function(){
		$(this).css("color","#fff")
		$("#toptb3").css("color","#e28b89")
		$("#toptb4").css("color","#e28b89")
		window.location.href = "../home.html"
	})
	$("#top").on("click","#toptb3",function(){
		$(this).css("color","#fff")
		$("#toptb2").css("color","#e28b89")
		$("#toptb4").css("color","#e28b89")
	})
	$("#top").on("click","#toptb4",function(){
		$(this).css("color","#fff")
		$("#toptb2").css("color","#e28b89")
		$("#toptb3").css("color","#e28b89")
		window.location.href = "friend.html"
	})
	$("#top").on("click","#toptb5",function(){
		window.location.href="../html/search.html"
	})
})