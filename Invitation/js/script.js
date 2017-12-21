
    var swiper = new Swiper('.swiper-container', {
        
        on:{
      init: function(){
        swiperAnimateCache(this); //隐藏动画元素 
        swiperAnimate(this); //初始化完成开始动画
      }, 
      slideChangeTransitionEnd: function(){ 
        swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      } 
    },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      }
    })
    

//Initialize Swiper 
$(function(){
        //播放完毕
        $('#mp3Btn').on('ended', function() {
            console.log("音频已播放完成");
            $('.btn-audio').css({'background':'url(img/2.png) no-repeat center bottom','background-size':'cover'});
        })
        //播放器控制
        var audio = document.getElementById('mp3Btn');
        audio.volume = .3;
        $('.btn-audio').click(function() {
            event.stopPropagation();//防止冒泡
            if(audio.paused){ //如果当前是暂停状态
                $('.btn-audio').css({'background':'url(img/2.png) no-repeat center bottom','background-size':'cover'});
                audio.play(); //播放
                return;
            }else{//当前是播放状态
                $('.btn-audio').css({'background':'url(img/2.png) no-repeat center bottom','background-size':'cover'});
                audio.pause(); //暂停
            }
        });
    })


// 百度地图API功能
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.577695,38.082731);
	var marker = new BMap.Marker(point);
	map.addOverlay(marker); 
	enableMessage:true,//设置允许信息窗发送短息
	map.centerAndZoom(point,11);
	var opts = {
	  width : 200,     // 信息窗口宽度
	  height: 100,     // 信息窗口高度
	  title : "泊头师范欢迎您的到来" , // 信息窗口标题
	  enableMessage:true,//设置允许信息窗发送短息
	  message:"这里有你所要的人才"
	}
	
	function theLocation(){
		var city = document.getElementById("cityName").value;
		if(city != ""){
			map.centerAndZoom(city,11);      // 用城市名设置地图中心点
		}
	}
	marker.addEventListener("click", function(){          
		map.openInfoWindow(infoWindow,point); //开启信息窗口
	});



