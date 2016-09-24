$(function(){
	var aud = document.getElementById("audio");
	iPause();
	$("i.open").on("touchend",function(){
		iPause();
	})
	function iPause(){//播放状态检测
		if(aud.paused){
			aud.play();
			$("i.open").html("&#xe619;");
			$(".bang img").addClass("opened").removeClass("close");
			$("div.pic").addClass("rotated");
		}else{
			aud.pause();
			$("i.open").html("&#xe61a;");
			$(".bang img").addClass("close").removeClass("opened");
			$("div.pic").removeClass("rotated");
		}
	}
	//回到主页
	$("div.title i.btn-back").on("click",function(){
		window.location.href ="../home.html";
		localStorage.vol = aud.volume;
	})
	//进度条
	var drag = document.getElementById("drag");
	var pro = document.getElementById("cur");
	var scroll = document.getElementById("pro");
	$(drag).on("mousedown",function(evt){
		var e = evt || window.event;
		e.preventDefault();
		e.stopPropagation();
		e.cancelBubble = true;
		var x = e.clientX - drag.offsetLeft;
		$(scroll).on("mousemove",function(evt){
			var e1 = evt || window.event;
			e1.preventDefault();
			e1.stopPropagation();
			e1.cancelBubble = true;
			var left = e1.clientX - x;
			if(left < 0){
				left = 0;
			}else if(left >　scroll.clientWidth - drag.clientWidth){
				left = scroll.clientWidth - drag.clientWidth;
			}
			drag.style.left = left + "px";
			pro.style.width = (10 + left) + "px";
			var per2 = left/(scroll.clientWidth - drag.clientWidth);
			aud.currentTime = per2 * aud.duration;
		})
	})
	//播放时间
	function time(num){
		num = parseInt(num);
		var h = zero(Math.floor(num / 3600));
		var m = zero(Math.floor(num % 3600 / 60));
		var s = zero(Math.floor(num % 60));
		return m + ":" + s;
	}
	function zero(times){
		if(times < 10){
			return "0" + times;
		}else{
			return times;
		}
	}
	aud.addEventListener("timeupdate",function(){
		var curtime = time(aud.currentTime);
		var alltime = time(aud.duration);
		var per = aud.currentTime/aud.duration;
		$("span.cur").html(curtime);
		$("span.all").html(alltime);
		drag.style.left = per * (scroll.clientWidth - drag.clientWidth) + "px";	
		pro.style.width = 10 + per * (scroll.clientWidth - drag.clientWidth) + "px";
	volDrag.style.left = volMax.clientWidth*(aud.volume) + "px";
	})
	//点击切换歌词
	$("div.pic img").on("touchstart",function(){
		$("div.cd1").addClass("close").removeClass("show");
		$("div.cd2").addClass("show").removeClass("close");
		$("div.cd2").css("z-index","1")
		$("div.cd1").css("z-index","0")
	})
	$("#lrc").on("touchstart",function(){
		$("div.cd1").addClass("show").removeClass("close")
		$("div.cd2").removeClass("show").addClass("close");
		$("div.cd2").css("z-index","0")
		$("div.cd1").css("z-index","1")
	})
	
	//音量调节
	var vol = document.getElementById("vcur");
	var volMax = document.getElementById("vpro");
	var volDrag = document.getElementById("vdrag");
	aud.volume = 0.5;
	$(volDrag).on("mousedown",function(evt){
		var e = evt || window.event;
		e.preventDefault();
		e.stopPropagation();
		e.cancelBubble = true;
		var x = e.clientX - volDrag.offsetLeft;
		$(volMax).on("mousemove",function(evt){
			var e1 = evt || window.event;
			e1.preventDefault();
			e1.stopPropagation();
			e1.cancelBubble = true;
			var left = e1.clientX - x;
			if(left < 0){
				left = 0;
			}else if(left >　volMax.clientWidth - volDrag.clientWidth){
				left = volMax.clientWidth - volDrag.clientWidth;
			}
			volDrag.style.left = left + "px";
			vol.style.width = (left+10) + "px";
			var per2 = left/(volMax.clientWidth - volDrag.clientWidth);
			aud.volume =per2 * 1;
		})
	})
	//歌词添加
	myLrc();
	function myLrc(){
		var lrc = document.getElementById("txt").value;
		var player = document.getElementById("lrc");
		var str = '';
		var arrLrc = lrc.split("[");
		for(var i = 1; i < arrLrc.length; i++){
			var listLrc = arrLrc[i].split("]");
			var timer = listLrc[0].split(".")[0].split(":");
			var times = timer[0]*60 + timer[1]*1;
			str += '<p id=n'+ times +'>' +listLrc[1] + '</p>';
		}
		player.innerHTML = str;
		aud.addEventListener("timeupdate",function(){
			var currtime=parseInt(aud.currentTime);
			localStorage.cur = aud.currentTime;
			var op = player.getElementsByTagName("p");
			if(document.getElementById("n"+currtime)){
				for(var i = 0; i < op.length ; i++ ){
					op[i].style.color="#000";
					op[i].style.fontSize="1rem";
					if(document.getElementById("n"+currtime) == op[i]){
						var weiyi =Number(i)-4;
						if(weiyi<=0){
							weiyi = 0;
						}
						player.style.marginTop = (weiyi)*(-1.7)+"rem";
					}
				}
				document.getElementById("n"+currtime).style.color = "#fff";
			}
		})
	}	
	//歌曲加载
	if(window.localStorage.qumu){
		var _index = localStorage.qumu;
	}else{
		var	_index = 0;	
		localStorage.qumu = _index;
	}
	if(localStorage.cur){
		aud.currentTime = localStorage.cur;	
	}
	$.ajax({
		url:"../Jason/lrc.json",
		async:true,
		dataType:"json",
		success:function(mag){
			var data = mag.data;
			$("i.prev").on("click",function(){
				_index--;
				localStorage.qumu = _index;
				_index = _index < 0?data.length-1:_index;
				next();
				iPause();
			})
			$("i.next").on("click",function(){
				_index++;
				localStorage.qumu = _index;
				_index = _index > data.length-1?0:_index;
				next();
				iPause();
			})
			next();
			function next(){
				for(var i in data){
					$("div.pic img").attr("src","../img/"+data[_index].img+"");
					$("img.blur").attr("src","../img/"+data[_index].img+"")
					$("#txt").html(data[_index].txt);
					$("span.gm").html(data[_index].name);
					$("span.name").html(data[_index].singer);
					$("#audio source").attr("src","../audio/"+data[_index].source+"")
					aud.load();
				}
				myLrc();
			}
		}
	});
})
