(function($){
	$(function(){
		
	
//	$.ajax({
//		url:"aljson/alimg.json",
//		success:function(data){
//			var datas = data.data
//			var str = ''
//			for(var i in datas){
//				str+='<dl>'
//				str+='<dt><img src="'+datas[i].src+'"/></dt>'
//				str+='<dd>'+datas[i].name+'</dd></dl>'
//			}
//			$(".alpic").html(str)
//		}
//	})
		var myScroll;
		ajaxs()
		iscrolls()
		
		function iscrolls(){
			myScroll = new IScroll(".almain")
		}
		function ajaxs(){
			$.ajax({
			url:"aljson/alimg.json",
			success:function(data){
				var datas= data.data
				$.each(datas,function(index){
					var odl=$("<dl></dl>")
					var odt = $("<dt id='alimg'>玩命加载中...</dt>")
					var img = $("<img src='"+datas[index].src+"'/>")
					var name = $("<dd>"+datas[index].name+"</dd>")
					odl.append(odt)
					odl.append(name)
					img.on("load",function(){
						myScroll.refresh()
						odt.html(img)
					})
					$(".alpic").append(odl)
				});
				clic()
			}	
		});
		}
		$(".almain").on("touchend",function(){
			if(myScroll.y>50){
				myScroll.refresh()
			}
			if(myScroll.y<myScroll.maxScrollY-50){
				ajaxs()
			}
		})
		function clic(){
			$(".alpic").on("touchstart","#alimg",function(){
				window.location.herf=""
			})
		}
		
	})
})(Zepto)
