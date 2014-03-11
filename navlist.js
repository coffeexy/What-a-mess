//列表页左侧导航
	function listItem(url){
		var tmp = url.split("-");
		var type1 = tmp[0] || 1;//女1男2童3需要减一
		type1 = type1-1;
		$(".list-items:eq("+type1+")").removeClass("list-none");
		$(".list-top a:eq("+type1+")").addClass("hover");

		if( tmp.length >= 2){
			$(".list-items ul").each(function(){
				$(this).find("li").each(function(){
					var ahref=$(this).find("a").attr("href");
					if(ahref!=undefined){
						ahref=ahref.substring(ahref.lastIndexOf("/")+1);
						if(url==ahref){
							$(this).parent().find("b").addClass("b");
							$(this).parent().parent().removeClass("list-none");
							var lens=parseInt($(this).parent().find("li").length)*26+10;
							$(this).parent().css({"height":lens,"-webkit-transition":"all .4s ease-out","-moz-transition":"all .4s ease-out","-ms-transition":"all .4s ease-out","-o-transition":"all .4s ease-out","transition":"all .4s ease-out"});
							$(this).addClass("hover");
						}
					}
				})
			})

		}
		$(".list-items ul").on('click', 'li:first-child', function(){
			var prev = $(".list-items ul .b"),
				$ul = $(this).parent();
			if($(this).find("b").attr("class")=="b"){
				$(this).find("b").removeClass('b');
				$ul.css({"height":"36px","-webkit-transition":"all .4s ease-out","-moz-transition":"all .4s ease-out","-ms-transition":"all .4s ease-out","-o-transition":"all .4s ease-out","transition":"all .4s ease-out"});
			}else{
				$(this).find("b").addClass("b");
				var nums=parseInt($ul.find("li").length)*26+10;
				$ul.css({"height":nums,"-webkit-transition":"all .4s ease-out","-moz-transition":"all .4s ease-out","-ms-transition":"all .4s ease-out","-o-transition":"all .4s ease-out","transition":"all .4s ease-out"});
				if(prev){
					prev.removeClass('b');
					prev.parents('ul').css({"height":"36px","-webkit-transition":"all .4s ease-out","-moz-transition":"all .4s ease-out","-ms-transition":"all .4s ease-out","-o-transition":"all .4s ease-out","transition":"all .4s ease-out"});
				}
				prev = $(this).find("b");
			}
		})
	}