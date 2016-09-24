$(function(){
	var mySwiper_diantai = new Swiper('.swiper-chajian_top');
		var myScroll_diantai;
		function diantai(){
			myScroll_diantai = new IScroll(".swiper-diantai_waikuang");
			
		}
		ajax();
		diantai();
		
		function ajax(){
			/*var str = "";*/
			$.ajax({
				type:"get",
				url:"Jason/diantai.json",
				async:false,
				success:function(mag){
					var data = mag.data;
					/*for(var i in data){
						str+="<dl><dt><img src='"+data[i].img+"'/></dt><dd>"+data[i].name+"</dd></dl>"
					}
					$(".json").append(str);
					diantai();*/
					$.each(data, function(index) {
						var odiv = $("<dl></dl>");
						var odivpic = $("<dt class='pic'>图片正在加载中</dt>")
						var pic = $("<img src='"+data[index].img+"'/>")
						var name = $("<dd>"+data[index].name+"</dd>")
						
						odiv.append(odivpic);
						odiv.append(name);
						pic.on("load",function(){
							Refresh();//这里要先刷新才能运行scroll函数
							odivpic.html(pic);//有“图片正在加载中”，所以要干掉
						})
						$(".json").append(odiv);//
					});
				}
			});
		}
		/*$("#box").on("touchmove",function(){
			if(myScroll.y>50){
				$(".shuaxin").show()
			}
		})*/
		$(".swiper-diantai_waikuang").on("touchend",function(){
			/*if(myScroll_diantai.y>50){
				Refresh()
			}*/
			if(myScroll_diantai.y<myScroll_diantai.maxScrollY-50){//当滑动到底部超过50px时，加载ajax的数据
				ajax();
				
			}
			
		})
		
		function Refresh(){
			myScroll_diantai.refresh()
		}
})