$(function(){
	$(".btn").on("click",function(){
		var name=$(".up input").eq(0).val()
		var pass=$(".middle input").eq(0).val()
		$.ajax({
			data:{
				status:"login",
				userID:name,
				password:pass
			},
			url:"http://datainfo.duapp.com/shopdata/userinfo.php",
			success:function(data){
				if(data==0){
					alert("您输入的用户名不存在!")
				}else if(data==2){
					alert("用户名与密码不一致!")
				}else{
					alert("登录成功!")
				window.location.href="../home.html"
				}
				
			}
		});
	})
	$("#head i").click(function(){
		window.location.href="zhuce.html"
	})

})