$(function(){
	var aud = document.getElementById("audio");
	if(localStorage.cur){
		aud.currentTime = localStorage.cur;
	}
	if(localStorage.vol){
		aud.volume = localStorage.vol;
	}
	aud.addEventListener("timeupdate",function(){
		localStorage.cur = aud.currentTime;
	})
	if(window.localStorage.qumu){
		$("#splayer").css("display","block");
		var _index =  localStorage.qumu;
		showplayer();
		$("#splayer div.title").on("click",function(){
			window.location.href = "html/audio.html";
		})
	}else{
		$("#splayer").css("display","none");
	}
	function showplayer(){
		$("#splayer div.btn").on("click",function(){
			iPause();
		})
		iPause();
		function iPause(){//播放状态检测
			if(aud.paused){
				aud.play();
				$("#splayer div.btn i").html("&#xe619;");		
			}else{
				$("#splayer div.btn i").html("&#xe61a;");
				aud.pause();
			}
		}
		//下一曲
		ajaxsong();
		function ajaxsong(){
			$.ajax({
				url:"Jason/lrc.json",
				async:true,
				success:function(mag){
					var data = mag.data;
					loadsong(data);
					$("#splayer i.next").on("click",function(){
						_index++;
						localStorage.qumu = _index;
						_index = _index > data.length-1? 0: _index;
						loadsong(data);
						iPause();
					})
				}
			});
			function loadsong(data){
				for(var i in data){
					$("#audio source").attr("src","audio/"+data[_index].source+"");
					$("p.gm").html(data[_index].name);
					$("p.singer").html(data[_index].singer);
					$("#splayer div.pic img").attr("src","img/"+data[_index].img+"")
					aud.load();				
				}
			}
		}
	}
})
