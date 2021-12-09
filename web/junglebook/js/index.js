$(function(){
	$("body,html").stop().animate({"scrollTop":0},1500,"swing");
	
	$(window).scroll(function(){
		var scroll=$(this).scrollTop();
		
		for(var i=0; i<7; i++){
			$("section>article").eq(i).css({"transform":"translateZ("+parseInt((-5000*i)+scroll)+"px)"});
		};
		
		for(var i=0; i<7; i++){
			if(scroll>=i*5000&&scroll<(i+1)*5000){
				$(".scrollNavi li").removeClass();
				$(".scrollNavi li").eq(i).addClass("on");
				$("article").removeClass();
				$("article").eq(i).addClass("on");
			};
		};
	});
	
	$(".scrollNavi li").on("click",function(){
		var a=$(this).index();
		$("body,html").stop().animate({"scrollTop":5000*a},1500,"swing");
		
		
		$(this).find("em").delay(1500).css({color:"#daa520"});
		   $(this).siblings().find("em").delay(1500).css({"color":"#fff"});
	   
		
		
	});
	
	$("body").on("mousemove",function(e){
		var posX=e.pageX/100;
		var posY=e.pageY/150;
		
		$(".obj11").css({"left":0-posX,"bottom":-130-posY});
		$(".obj12").css({"right":-370+posX,"top":-150-posY});
		$(".obj13").css({"left":550+posX,"bottom":0+posY});
		
		
		
		$(".obj21").css({"left":30+posX,"bottom":-130-posY});
		$(".obj22").css({"right":-370+posX,"top":-200+posY});
		
		
		
		$(".obj31").css({"left":0+posX,"top":200-posY});
		$(".obj32").css({"left":-370-posX,"top":-200+posY});
		
		
		
		$(".obj41").css({"left":-100+posX,"top":-220-posY});
		$(".obj42").css({"right":-370+posX,"top":-200-posY});
	    $(".obj43").css({"right":-100+posX,"bottom":-220+posY});
		
		
		$(".obj51").css({"left":800+posX,"bottom":90-posY});
		$(".obj52").css({"left":-370-posX,"bottom":-220+posY});
		
		
		$(".obj61").css({"left":-180-posX,"bottom":90-posY});
		$(".obj62").css({"left":150+posX,"bottom":50-posY});
		
		
		$(".obj71").css({"left":-0-posX,"bottom":90-posY});
		$(".obj72").css({"left":150+posX,"bottom":50-posY});
	});
	
	
	 /*  $(".scrollNavi li em").click(function(){
		$(this).css({color:"#daa520"});
		   $(this).parent().siblings().find("em").css({"color":"#fff"});
	    });*/
});