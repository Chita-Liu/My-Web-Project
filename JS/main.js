;$(function(){
	'use strict';
	var sidebar = $('#sidebar'),//选择侧栏
		mask = $('.mask'),//选择mask（阴影）
		sidebar_trigger= $('#sidebar_trigger'),//选择返回菜单
		backBotton=$('.back_to_top');//选择侧栏触发器
	//侧边导航
	function showSidebar(){ //显示侧栏
		mask.fadeIn();//显示mask
		//sidebar.animate({'right',0});
		sidebar.css('right',0);
		/*第二种办法
		sidebar.css('transform','translate(0,0)');*/
		
	}
	function hideSidebar(){ //隐藏侧栏
		mask.fadeOut(); 
		sidebar.css('right',-sidebar.width());
		/*第二种办法
		sidebar.css('transform','translate('+sidebar.width()+'px,0)');*/
	}
	sidebar_trigger.on('click',showSidebar);//监听侧栏触发器点击事件
	mask.on('click',hideSidebar); //监听mask
	
	//返回顶部
	backBotton.on('click',function(){ //监听返回按钮
		$('html,body').animate({scrollTop:0},800);
	});
	$(window).on('scroll',function() 
	{//监听window的scroll事件，如果滚动的高度大于窗口的高度，显示返回按钮，否则，隐藏按钮
		if($(window).scrollTop() > $(window).height())
			{backBotton.fadeIn();}
		else
			{backBotton.fadeOut();}
	})
	//触发scroll事件
	$(window).trigger('scroll');
})