(function(){
	var myScroll;
	$("#top").on("click","#toptb2",function(){
		$(this).css("color","#fff")
		$("#toptb3").css("color","#e28b89")
		$("#toptb4").css("color","#e28b89")
	})
	$("#top").on("click","#toptb3",function(){
		$(this).css("color","#fff")
		$("#toptb2").css("color","#e28b89")
		$("#toptb4").css("color","#e28b89")
		window.location.href = "html/mymic.html"
	})
	$("#top").on("click","#toptb4",function(){
		$(this).css("color","#fff")
		$("#toptb2").css("color","#e28b89")
		$("#toptb3").css("color","#e28b89")
		window.location.href = "html/friend.html"
	})
	$("#top").on("click","#toptb5",function(){
		window.location.href="html/search.html"
	})

	

	
	
    $.ajax({//ajax添加轮播图图片
		url:"Jason/indexjason.json",
		success:function(mag){
			var oImg = mag.data.img
			var str ='';
			for(var i in oImg){
				//console.log(oImg[i])
				str+='<div class="swiper-slide l">'
				str+='<img src="'+oImg[i]+'" />'
				str+='</div>'
			}
								
			$("#banner .swiper-wrapper").html(str)
			Shuffling ()
		}
	});
	
	
	function Shuffling (){//轮播图滑动函数
		var mySwiper = new Swiper('#banner .swiper-container',{
  			direction : 'horizontal',
   			autoplay:2000,
   			autoplayDisableOnInteraction : false,
  		});
	}
	/*begin
	 */
	var mySwiper2 = new Swiper('#swiper-container2',{
			watchSlidesProgress : true,
			watchSlidesVisibility : true,
			slidesPerView : 4,
			onTap: function(){
						mySwiper3.slideTo( mySwiper2.clickedIndex)
					}
			})
			var mySwiper3 = new Swiper('.swiper-container_all',{
			
			onSlideChangeStart: function(){
						updateNavPosition()
					}
			
			})
			
			function updateNavPosition(){
					$('#swiper-container2 .active-nav').removeClass('active-nav')
					var activeNav = $('#swiper-container2 .swiper-slide').eq(mySwiper3.activeIndex).addClass('active-nav');
			
			
					if (!activeNav.hasClass('swiper-slide-visible')) {
			console.log(1);
						if (activeNav.index()>mySwiper2.activeIndex) {
			console.log(2);
							var thumbsPerNav = Math.floor(mySwiper2.width/activeNav.width())-1
							mySwiper2.slideTo(activeNav.index()-thumbsPerNav)
						}
						else {
			console.log(3);
							mySwiper2.slideTo(activeNav.index())
						}	
					}
				}

/*end*/
	

			$.ajax({//加载ajax,
		
			url:"Jason/indexjason2.json",
			success:function(mag){
				console.log()
				var str_tjgd ='';//推荐歌单题目
				var stt_tjgd = '';//推荐歌单DL
				var str_djfs='';//独家放送题目
				var stt_djfs='';//独家放送DL
				var str_zxyy='';//最新音乐题目
				var stt_zxyy='';//最新音乐DL
				var str_tjmv='';//推荐MV题目
				var stt_tjmv='';//推荐MVDL
				var str_zbdt='';//主播电台题目
				var stt_zbdt='';//主播电台DL
				var tjgd=$('<div class="tjgd_1"></div>')
				var djfs = $('<div class="djfs_1"></div>')
				var zxyy = $('<div class="zxyy_1"></div>')
				var tjmv = $('<div class="tjmv_1"></div>')
				var zbdt = $('<div class="zbdt_1"></div>')
				//推荐歌单题目
				stt_tjgd += '<div class="recommended">'
				stt_tjgd += '<img class="l" src="'+mag.data.logo_tjgd+'"/>'				
				stt_tjgd += '<p class="l">'+mag.data.value_tjgd+'</p>'					
				stt_tjgd += '<p class="r">更多&gt;</p>'					
				stt_tjgd += '</div>'
				//独家放送题目
				stt_djfs += '<div class="recommended">'
				stt_djfs += '<img class="l" src="'+mag.data.logo_djfs+'"/>'				
				stt_djfs += '<p class="l">'+mag.data.value_djfs+'</p>'					
				stt_djfs += '<p class="r">更多&gt;</p>'					
				stt_djfs += '</div>'				
				//最新音乐题目
				stt_zxyy += '<div class="recommended">'
				stt_zxyy += '<img class="l" src="'+mag.data.logo_zxyy+'"/>'				
				stt_zxyy += '<p class="l">'+mag.data.value_zxyy+'</p>'					
				stt_zxyy += '<p class="r">更多&gt;</p>'					
				stt_zxyy += '</div>'				
				//推荐MV题目
				stt_tjmv += '<div class="recommended">'
				stt_tjmv += '<img class="l" src="'+mag.data.logo_tjmv+'"/>'				
				stt_tjmv += '<p class="l">'+mag.data.value_tjmv+'</p>'					
				stt_tjmv += '<p class="r">更多&gt;</p>'					
				stt_tjmv += '</div>'				
				//主播电台题目
				stt_zbdt += '<div class="recommended">'
				stt_zbdt += '<img class="l" src="'+mag.data.logo_zbdt+'"/>'				
				stt_zbdt += '<p class="l">'+mag.data.value_zbdt+'</p>'					
				stt_zbdt += '<p class="r">更多&gt;</p>'					
				stt_zbdt += '</div>'				
	
				for(var i in mag.data.img_tjgd){
					//推荐歌单DL
					str_tjgd+='<dl class="tjgd_dl l">'
					str_tjgd+='<dt>'
					str_tjgd+='<img src="'+mag.data.img_tjgd[i] +'"/>'						
					str_tjgd+='</dt>'					
					str_tjgd+='<dd>'+mag.data.name_tjgd[i]+'</dd>'					
					str_tjgd+='</dl>'
					//最新音乐DL
					str_zxyy+='<dl class="tjgd_dl l">'
					str_zxyy+='<dt>'
					str_zxyy+='<img src="'+mag.data.img_zxyy[i] +'"/>'						
					str_zxyy+='</dt>'					
					str_zxyy+='<dd>'+mag.data.name_zxyy[i]+'</dd>'					
					str_zxyy+='</dl>'
					//主播电台DL
					str_zbdt+='<dl class="tjgd_dl l">'
					str_zbdt+='<dt>'
					str_zbdt+='<img src="'+mag.data.img_zbdt[i] +'"/>'						
					str_zbdt+='</dt>'					
					str_zbdt+='<dd>'+mag.data.name_zbdt[i]+'</dd>'					
					str_zbdt+='</dl>'
				}
				tjgd.append(str_tjgd)
				zxyy.append(str_zxyy)
				zbdt.append(str_zbdt)
				for(var j in mag.data.img_djfs){
					//独家放送DL
					str_djfs+='<dl class="djfs_dl l">'
					str_djfs+='<dt>'
					str_djfs+='<img src="'+mag.data.img_djfs[j] +'"/>'						
					str_djfs+='</dt>'					
					str_djfs+='<dd>'+mag.data.name_djfs[j]+'</dd>'					
					str_djfs+='</dl>'
					
	
				}
				djfs.append(str_djfs)
				for(var k in mag.data.img_tjmv){
					//推荐MVDL
					str_tjmv+='<dl class="tjmv_dl l">'
					str_tjmv+='<dt>'
					str_tjmv+='<img src="'+mag.data.img_tjmv[k] +'"/>'						
					str_tjmv+='</dt>'					
					str_tjmv+='<dd>'+mag.data.name_tjmv[k]+'</dd>'					
					str_tjmv+='</dl>'
					
	
				}
				tjmv.append(str_tjmv)
				$("#content .gxtj_list #bottom").append(stt_tjgd)//推荐歌单题目
				$("#content .gxtj_list #bottom").append(tjgd)//推荐歌单DL
				$("#content .gxtj_list #bottom").append(stt_djfs)//独家放送题目
				$("#content .gxtj_list #bottom").append(djfs)//独家放送DL
				$("#content .gxtj_list #bottom").append(stt_zxyy)//最新音乐题目
				$("#content .gxtj_list #bottom").append(zxyy)//最新音乐DL
				$("#content .gxtj_list #bottom").append(stt_tjmv)//推荐MV题目
				$("#content .gxtj_list #bottom").append(tjmv)//推荐MVDL
				$("#content .gxtj_list #bottom").append(stt_zbdt)//推荐MV题目
				$("#content .gxtj_list #bottom").append(zbdt)//推荐MVDL
				scrolls()
			}
		
		});

	
	
	ajax2()
	
	function scrolls(){
		myScroll = new IScroll(".gxtj_wrapper",{
				
		})
		
	}
	function ajax2(){

	}
})()
