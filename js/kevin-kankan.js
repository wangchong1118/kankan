$(function(){
	// 顶部警告区块关闭
		$("#top-clostBtn").click(function(){
			$(this).parents(".top").hide();
		})
	// 搜索框焦点
		$(".search-input").focus(function(){
			$(this).val("").css({
				"border":"1px solid #249FF1",
				"height":"32px",
				"widht":"290px",
				"border-radius":"3px"
			});
		})
		$(".search-input").blur(function(){
			$(this).val("搜一下，美女来了").css("border","none");
		})
		$(".nav-fixed-input").focus(function(){
			$(this).val("").parent().css({
				"border":"1px solid #249FF1",
				"border-radius":"6px"
			});
		})
		$(".nav-fixed-input").blur(function(){
			$(this).val("搜一下，美女来了").parent().css("border","none");
		})
	// 滚动一定高度后，隐藏导航栏固定到顶部
        $(window).scroll(function () {
            var scroH = $(this).scrollTop();
            if(scroH>420){
                $(".nav-fixed").slideDown().css("position","fixed");
                $(".fixzone").fadeIn();
            }else if(scroH<420){
                $(".nav-fixed").slideUp();
                $(".fixzone").fadeOut();
            }
        });
	// 会员操作隐藏盒子效果
		$(".user-drawer-box").hover(function(){
			$(this).css("height","46px")
				   .children(".user-drawer-hide").show().parent()
				   .children(".user-txt").find(".user-icon-arrow").removeClass("user-icon-arrow-down").addClass("user-icon-arrow-up");
		},function(){
			$(this).css("height","16px")
				   .children(".user-drawer-hide").hide().parent()
				   .children(".user-txt").find(".user-icon-arrow").removeClass("user-icon-arrow-up").addClass("user-icon-arrow-down");
		})
	// 电影收藏隐藏盒子中删除已收藏影片
		$(".collect-list").hover(function(){
			$(this).children(".collect-title").css("color","#249FF1").parent()
				   .children(".collect-mask").show().parent()
				   .children(".collect-colse-btn").show().click(function(){
				   		$(this).parents(".collect-list").remove();
				   });
		},function(){
			$(this).children(".collect-title").css("color","#333").parent()
				   .children(".collect-mask").hide().parent()
				   .children(".collect-colse-btn").hide().parent();
		})
	// 电影观看历史记录操作
		$(".looked-rec-list").hover(function(){
			$(this).css("background","#EBEBEB").children(".looked-clost-btn").show()
				   .click(function(){
				   		var listLen = $(this).parents(".looked-record").children(".looked-rec-list").length;
				   		if(listLen == 1){
				   			$(this).parents(".looked-day-list").find(".looked-date").remove();
				   		}
						$(this).parent(".looked-rec-list").remove();
				   })
		},function(){
			$(this).css("background","").children(".looked-clost-btn").hide()
		})
	// 导航栏电影院隐藏盒子
		$(".dianyingyuan").hover(function(){
			$(this).find(".dyy-hide").show();
		},function(){
			$(this).find(".dyy-hide").hide();
		})
	// 迅雷产品下载隐藏盒子
		$(".navlist-prodl").hover(function(){
			$(this).find(".prodl-arrow").removeClass("prodl-arrow-down").addClass("prodl-arrow-up");
			$(this).find(".prodl-hide").show();
		},function(){
			$(this).find(".prodl-arrow").removeClass("prodl-arrow-up").addClass("prodl-arrow-down");
			$(this).find(".prodl-hide").hide();
		})
	// 焦点轮播图轮播效果
		var preLen = $(".focus-pre > li").length; //焦点图图片个数（小图）
		var iNow = 0;
		var t = null;	
		// 鼠标移入停止轮播与移出开启轮播
		$(".focus").hover(function(){
			clearInterval(t);
		},function(){
			timeFocus();
		})
		// 鼠标移入小图切换大图及标题
		$(".focus-pre > li").hover(function(){
			iNow = $(this).index();
			for(var j=0;j<preLen;j++){
				$(".focus-bg > li").eq(j).hide();
				$(".focus-title > li").eq(j).hide();
				$(".focus-pre-link").eq(j).removeClass("focus-pre-link-hover");
			}
			$(".focus-bg > li").eq(iNow).show();
			$(".focus-title > li").eq(iNow).show();
			$(".focus-pre-link").eq(iNow).addClass("focus-pre-link-hover");
		},function(){
			return;
		})
		// 轮播切换定时器函数
		function timeFocus(){
			t=setInterval(function(){
				for(var j=0;j<preLen;j++){
					$(".focus-bg > li").eq(j).hide();
					$(".focus-title > li").eq(j).hide();
					$(".focus-pre-link").eq(j).removeClass("focus-pre-link-hover");
				}
				$(".focus-bg > li").eq(iNow).show();
				$(".focus-title > li").eq(iNow).show();
				$(".focus-pre-link").eq(iNow).addClass("focus-pre-link-hover");
				iNow++;
				if(iNow>preLen-1){
					iNow=0;
				}
			},2000)
		}
		timeFocus();// 默认自动运行轮播

	// 轮播区域右侧亮窗tab切换
	var lightTabLen = $(".light-tab > li").length;
	$(".light-tab > li").mouseover(function(){
		iNow = $(this).index();
		for(var i=0;i<lightTabLen;i++){
			$(".light-tab-list").eq(i).removeClass("light-tab-list-active");
			$(".light-cont > li").eq(i).hide();
		}
		$(this).addClass("light-tab-list-active");
		$(".light-cont > li").eq(iNow).show();
	})
	$(".light-top3-hide-box").hover(function(){
		$(this).css("top","66px");
	},function(){
		$(this).css("top","90px");
	})
	// 播放影片选中
	$(".box-link-pic").hover(function(){
		$(this).addClass("list-active");
	},function(){
		$(this).removeClass("list-active");
	})
	// 中间内容大栏目切换
	var menuLen = $(".tab-menu > li").length;
	$(".tab-menu > li").mouseover(function(){
		iNow = $(this).index();
		for(var i=0;i<menuLen;i++){
			$(this).find("a.title-tab").addClass("title-tab-hover").parent().siblings("li").find("a.title-tab").removeClass("title-tab-hover");
			$(this).parent().siblings(".cut-menu").children("li.cut-menu-list")
			   .eq(i).hide();
		}
		$(this).find("a.title-tab").addClass("title-tab-hover").parents(".tab-menu").siblings(".cut-menu").children("li.cut-menu-list")
			   .eq(iNow).show();
	})
	// 个人中心猜你喜欢点击切换
	var mlikeLen = $(".mlike > .mlike-listwrap").length;
	function mlikecut(index){
		for(var i=0;i<mlikeLen;i++){
			$(".mlike > .mlike-listwrap").eq(i).hide();
		}
		$(".mlike > .mlike-listwrap").eq(index).show();
	}
	var iLike = 0;
	$(".mlike-cutbtn-right").click(function(){
		iLike++;
		if(iLike > mlikeLen-1){
			iLike = 0;
		}
		if(iLike == mlikeLen-1){
			$(this).hide();
		}
		$(".mlike-cutbtn-left").show();
		mlikecut(iLike);
	})
	$(".mlike-cutbtn-left").click(function(){
		iLike--;
		if(iLike < -(mlikeLen-1)){
			iLike = 0;
		}
		if(iLike == 0){
			$(this).hide();
		}
		$(".mlike-cutbtn-right").show();
		mlikecut(iLike);
	})
	// 个人中心观看记录删除
	$(".box-link-pic").hover(function(){
		$(this).find("b,span").show();
		$(this).find("b.close-btnico").click(function(){
			$(this).parents("li.box-menu-one").remove();
		})
	},function(){
		$(this).find("span.player-txt,b.close-btnico,b.player-ico").hide();
	})
	// 综艺右侧每日更新切换
	var updateLen  = $(".update-tab > li").length;
	var curUpdate = 0;
	$(".update-tab > li").mouseover(function(){
		curUpdate = $(this).index();
		for(var i=0;i<updateLen;i++){
			$(".update-tab > li").eq(i).removeClass("update-tab-active");
			$(".update-cont > li").fadeOut();
		}
		$(this).addClass("update-tab-active")
			   .parents(".day-update").children(".update-cont").find("li.update-cont-list").eq(curUpdate).fadeIn();
	})
	// 深度视觉图片集定时切换
	var dpImgLen = 4;
	var dpImgArrLen = $(".deep-imgs-arry").length;

	function dpChange1(){
		var dpNow =0;
		dpTimer1 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry1").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry1").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange2(){
		var dpNow =0;
		dpTimer2 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry2").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry2").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange3(){
		var dpNow =0;
		dpTimer3 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry3").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry3").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange4(){
		var dpNow =0;
		dpTimer4 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry4").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry4").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange5(){
		var dpNow =0;
		dpTimer5 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry5").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry5").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange6(){
		var dpNow =0;
		dpTimer6 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry6").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry6").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange7(){
		var dpNow =0;
		dpTimer7 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry7").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry7").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange8(){
		var dpNow =0;
		dpTimer8 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry8").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry8").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange9(){
		var dpNow =0;
		dpTimer9 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry9").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry9").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}
	function dpChange10(){
		var dpNow =0;
		dpTimer10 = setInterval(function(){
			for(var i=0;i<dpImgLen;i++){
				$(".deep-imgs-arry10").children("li.deep-imgs-list").eq(i).fadeOut();
			}
			$(".deep-imgs-arry10").children("li.deep-imgs-list").eq(dpNow).fadeIn();
			dpNow++;
			if(dpNow > dpImgLen-1){
				dpNow = 0;
			}
		},3000)
	}

	dpChange1();
	dpChange2();
	dpChange3();
	dpChange4();
	dpChange5();
	dpChange6();
	dpChange7();
	dpChange8();
	dpChange9();
	dpChange10();

	$(".deep-imgs-arry1").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer1);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange1(".deep-imgs-arry1");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry2").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer2);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange2(".deep-imgs-arry2");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry3").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer3);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange3(".deep-imgs-arry3");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry4").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer4);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange4(".deep-imgs-arry4");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry5").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer5);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange5(".deep-imgs-arry5");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry6").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer6);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange6(".deep-imgs-arry6");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry7").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer7);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange7(".deep-imgs-arry7");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry8").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer8);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange8(".deep-imgs-arry8");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry9").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer9);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange9(".deep-imgs-arry9");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})
	$(".deep-imgs-arry10").find(".deep-imgs-link").hover(function(){
		clearInterval(dpTimer10);
		$(this).children(".deep-imgs-mask").show();
		$(this).children(".deep-imgs-title").show();
	},function(){
		dpChange10(".deep-imgs-arry10");
		$(this).children(".deep-imgs-mask").hide();
		$(this).children(".deep-imgs-title").hide();
	})

// 右下脚固定区域页面操作 
	$(".to-top").hover(function(){
		$(this).addClass("to-top-active");
	},function(){
		$(this).removeClass("to-top-active");
	}).click(function(){
		$("html,body").animate({scrollTop: 0},600);
	})

	$(".to-edit").hover(function(){
		$(this).addClass("to-edit-active");
	},function(){
		$(this).removeClass("to-edit-active");
	}).click(function(){
		alert("迅雷看看首页静态页仿写，王冲完成于2015年5月");
	})

	$(".to-app").hover(function(){
		$(this).addClass("to-app-active").find(".fixzone-appshow").fadeIn();
	},function(){
		$(this).removeClass("to-app-active").find(".fixzone-appshow").fadeOut();
	})
})