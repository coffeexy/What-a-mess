// JavaScript Document

/*弹出层-降价通知、点亮建模*/

function close_modal(options){
	$("#qd_mast").remove();
	$(options).css({"display":"none"})
}

function qdAlert(options){
	var qd_mast=$("<div id='qd_mast'></div>");
	$("body").append(qd_mast);
	return $(this).each(function(e){
			/*$("#qd_mast").click(function(){
				close_modal(options)
			});*/
			$(".closeButton").click(function(){
				close_modal(options)
			});

			var modal_height=$(options).outerHeight();
			var modal_width=$(options).outerWidth();
			$("#qd_mast").css({"display":"block",opacity:0.2});
			$("#qd_mast").fadeTo(200,0.2);
			$(options).css({"display":"block","position":"fixed","opacity":0,"z-index":11000,"left":50+"%","margin-left":-(modal_width/2)+"px","top":50+"%","margin-top":-(modal_height/2)+"px"});
			$(options).fadeTo(200,1);
			//e.stopPropagation();
	});
}
function qdMsg(str,type){//type=error,succeed,tip
		if ( arguments.length == 1) {
			type = "error";
		}
		var obj = $("#qdMsg");
		if( obj.length > 0 ){

			obj.find("p").html("<i style='background:url(/Tpl/default/images/"+type+".jpg);margin-right:10px;'></i>"+str);
			setTimeout( function(){$('.qdClose').click();}, 3000 );
		}else{

			var div = $("<div id='qdMsg' style='position:fixed;z-index:11111;left:50%;top:50%;margin-top:-60px;margin-left:-145px;background:#fff;border:5px solid #d1d1d1;height:120px;min-width:290px;'><b class='qdClose' style='position: absolute;display:block;width:19px;height:18px;right: 10px;top: 10px;cursor:pointer;background:url(/Tpl/default/images/close.png) 0 0'></b><p style='color:#595959;font-size:14px;font-weight:bold;margin:40px 50px 40px 40px;'><i style='background:url(/Tpl/default/images/"+type+".jpg) no-repeat;margin-right:10px;'></i>"+str+"</p></div>");
			$("body").append(div);
			setTimeout( function(){$('.qdClose').click();}, 3000 ); 
		}
}
$(".qdClose").live("click",function(){
		$(this).parent().remove();
});
//tab切换
function change(head, cnt){
	$( head+" li").each(function(i){
		$(this).click(function(){
			curr = i;
			$(cnt).eq(i).show().siblings(cnt).hide();
			$(this).siblings("li").removeClass("current").end().addClass("current");
			return false;
		});
	});
}

(function (){
	//控制文字行数，省略号截取
	$(".trunk1").trunk8();
    $('.trunk2').trunk8({lines: 2});
    $('.trunk3').trunk8({lines: 3});

	//tab商品详情评论/详细之类切换
	change("#tabTitle", ".tabCnt");
/*	$(".style").mouseenter(function(){
		$(this).find("p").animate({
			top: "236px"
		},100);
	});
	$(".style").mouseleave(function(){
		$(this).find("p").animate({
			top: "266px"
		},100);
	});*/
/*		$("#syjlink").click(function(){    
    var x0 = $(this).offset().top;
    var y0 = $(this).offset().left+59;
    //alert(x0);
    var add = '<span id="add" style="top:'+x0+'px;left:'+y0+'px"></span>';
    $("body").append(add);
    //alert(y0);
    var x = $(".pp").offset().top;
    var y = $(".pp").offset().left;
    $("#add").animate({
      opacity: '0.8',
      top:'-=70px'
    },'slow').animate({
      opacity:'1',
      left: y+8+'px',
      top: x+5+'px'
    },'slow',function(){
    	$("#add").remove();
    });
  });*/
})();



function reduce(obj){
	var value = $(obj).attr("value");
	if ( parseInt(value)<= 1 ) {
		qdMsg("已达到最小购买量");
	}else{
		$(obj).attr("value", --value );
	}
	//alert( $(obj).attr("value") );	
}
function add(obj){
	var value = $(obj).attr("value");
	var max = $("#maxPro").attr("value");
	if ( parseInt(value) >= parseInt(max) ) {
		qdMsg("已达到最大库存");
	}else{
		$(obj).attr("value", ++value );
	}	
	//alert( $(obj).attr("value") );
}
$(window).bind("load", function() {
	var $footer = $(".footer");
			positionFooter();

			function positionFooter() {
				if ( $(document.body).height() < $(window).height()) {
					$footer.css({position: "absolute",bottom: "0"});
				} else {
					$footer.css({position: "static"});
				}
			}
	$(window).scroll(positionFooter).resize(positionFooter);
});

//翻页广告
  (function($){
    	$.fn.slideBox=function(options){
    		var defaults={
    			direction:'level',
    			duration:1,
    			easing:'swing',
    			delay:3.5,
    			//startIndex:1,
    			//hideClickBar:true,
    			//clickBarRadius:5,
    			//hideBottomBar:false,
    			width:null,
    			height:null
    		};
    		var settings = $.extend(defaults, options || {}),
            	$wrap = $(this),
            	pos, neg;

	        var currentSlide = $wrap.find('li:eq(1)'),
	            prevSlide = currentSlide.prev().size() ? currentSlide.prev() : $wrap.find('li:last-child');

	        var init = function(){
	            $wrap.css({width:settings.width, height:settings.height});
	            $wrap.data('timer', setTimeout(start, settings.delay*1000));
	            if(settings.direction === 'vertical'){
	            	pos = {top:settings.height};
	            	neg = {top:-settings.height};
	            	zero = {top:0};
	            }
	            else if(settings.direction === 'level'){
	            	pos = {left:settings.width};
	            	neg = {left:-settings.width};
	            	zero = {left:0};
	            }
	        };
	        var start = function(){
	          	var index = currentSlide.index();
	          	$wrap.find('#jsTrigger a').removeClass('now').eq(index).addClass('now');

	            currentSlide.css($.extend({visibility:'visible'}, pos))
	            			.stop(true,true).animate(zero, settings.duration*1000, settings.easing);
	          	prevSlide.stop(true,true).animate(neg, settings.duration*1000, settings.easing, function(){
	              $(this).css($.extend({visibility:'hidden'}, zero));
	            });
	         
	            prevSlide = currentSlide;
	            currentSlide = currentSlide.next().size() ? currentSlide.next() : $wrap.find('li:first-child');
	            $wrap.data('timer', setTimeout(start, settings.delay*1000));
	            if(settings.direction === 'vertical'){
	            	pos = {top:settings.height};
	            	neg = {top:-settings.height};
	            	zero = {top:0};
	            }
	            else if(settings.direction === 'level'){
	            	pos = {left:settings.width};
	            	neg = {left:-settings.width};
	            	zero = {left:0};
	            }
	        }

	        init();
	        $wrap.hover(function(){
	            	clearTimeout($wrap.data('timer'));
		        }, function(){
		        	clearTimeout($wrap.data('timer'));
		            $wrap.data('timer', setTimeout(start, settings.delay*1000));
		    });

	    	$('#jsTrigger a').on('click', function(){
	    		clearTimeout($wrap.data('timer'));
	    		var index = $(this).index();
	    		if(prevSlide.index() === index){
	    			return;
	    		}
	    		else if(prevSlide.index() > index){
	    			if(settings.direction === 'vertical'){
		            	pos = {top:-settings.height};
		            	neg = {top:settings.height};
		            	zero = {top:0};
		            }
		            else if(settings.direction === 'level'){
		            	pos = {left:-settings.width};
		            	neg = {left:settings.width};
		            	zero = {left:0}
		            }
	    		}
	    		currentSlide = $wrap.find('li:eq('+index+')');
	            start();
	            clearTimeout($wrap.data('timer'));
	    	})

	    };
  })(jQuery);