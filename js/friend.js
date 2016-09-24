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
		window.location.href="mymic.html"
	})
	$("#top").on("click","#toptb4",function(){
		$(this).css("color","#fff")
		$("#toptb2").css("color","#e28b89")
		$("#toptb3").css("color","#e28b89")
	})
	$("#top").on("click","#toptb5",function(){
		window.location.href="../html/search.html"
	})
  $("#box2 ul li").eq(0).addClass('active')
    var mySwiper = new Swiper('.swiper-container',{
  	 onSlideChangeStart: function(){

      $("#box2 ul li").eq(mySwiper.activeIndex).addClass('active').siblings().removeClass("active")  
    }
   
    });
 
    $("#box2 ul li").eq(0).click(function(){
    	$(".swiper-wrapper").css({"transform":"translate3d(0px, 0px, 0px)"})
    	$(this).addClass('active').siblings().removeClass("active") 
    })
     $("#box2 ul li").eq(1).click(function(){
    	$(".swiper-wrapper").css({"transform":"translate3d(-100%, 0px, 0px)"})
    	$(this).addClass('active').siblings().removeClass("active") 
    })
      $("#box2 ul li").eq(2).click(function(){
    	$(".swiper-wrapper").css({"transform":"translate3d(-200%, 0px, 0px)"})
    	$(this).addClass('active').siblings().removeClass("active") 
    })
      var myScroll
			ajax2()
			scrolls()
			function scrolls(){
				myScroll = new IScroll("#wrapper",{

				})
			}
			function ajax2(){
				$.ajax({
					url:"http://datainfo.duapp.com/shopdata/getGoods.php",
					async:true,
					dataType:"jsonp",
					data:{
						classID:3
					},
					success:function(data){
						$.each(data, function(index) {
							var oDiv = $("<div class='da'></div>")
							var loDiv = $("<div  class='opic'>图片加载中</div>")
							var pic = $('<img style="width: 100%; height: 100%; " src="'+data[index].goodsListImg+'" />')
							var fen=$('<a>cannddyys<span>分享单曲：</span></a>')
							var guanzhu=$("<img class='gua' src='../img/g.jpg'>")
							var name = $("<div class='ping'>我草我就便捷的离，开家阿里快点进垃，圾堆了！困！难！的发空间。</div>")
							var sale = $("<img class='n' src='../img/n1.jpg'>")
							var xiao=$('<img class="g" src="../img/g1.jpg"><span class="p">Levels-Radio Edit</span><p class="p2">Avicii</p><h1>——热门搜索</h1>')
							
							oDiv.append(loDiv)
							oDiv.append(fen)
							oDiv.append(guanzhu)
							oDiv.append(name)
							oDiv.append(sale)
							oDiv.append(xiao)
							
							pic.on("load",function(){
								myScroll.refresh()
								loDiv.html(pic)
							})
							
							$(".list").append(oDiv)
						});
					}
				});

			}
			$("#wrapper").on("touchend",function(){
				if(myScroll.y > 50){
				myScroll.refresh()
				}
				if(myScroll.y <myScroll.maxScrollY - 50){
					
					ajax2()
				}
			})
      




  
