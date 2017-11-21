//		点击导航显示下拉导航
	$("#Classify .classify_navbox ul li").on("click",function()
	{
		var Or_show=$("#Classify .classify_nav_showbox").eq($(this).index()).css("display");
		if(Or_show=="block")
		{
			$("#Classify .classify_nav_showbox").eq($(this).index()).hide();
			$(this).removeClass("big_classify_active");
		}else{
			$("#Classify .classify_nav_showbox").eq($(this).index()).show().siblings("#Classify .classify_nav_showbox").hide();
			$(this).addClass("big_classify_active").siblings().removeClass("big_classify_active");
		}
	})
	$("#Classify .classify_navbox ul li").eq(0).on("click",function()
	{
		$("#Classify .classify_navlist_box .second_classify").show();
	})
	$("#Classify .classify_navlist_box .second_classify ul li").on("click",function(){
		$("#Classify .classify_navlist_box .third_classify").eq($(this).index()).show().siblings("#Classify .classify_navlist_box .third_classify").hide();
		$(this).addClass("second_active").siblings().removeClass("second_active");
	})
	//筛选按钮点击不显示选中效果
	$("#Classify .classify_navbox ul li").eq(3).on("click",function()
	{
			$("#Classify .classify_select").animate({right:"0px"});
			$(this).removeClass("big_classify_active");
	})
	//智能筛选点击效果
	$("#Classify .classify_navlist_box .second_classify_all li").on("click",function(){
		$(this).addClass("second_classify_all_selected").siblings().removeClass("second_classify_all_selected");
		$("#Classify .classify_nav_showbox").eq(1).hide();
		$("#Classify .classify_navbox ul li").eq(1).removeClass("big_classify_active");
	})
$("#Classify .classify_navlist_box .third_classify ul li").on("click",function(){
	$(this).addClass("third_active").siblings().removeClass("third_active");
	$("#Classify .classify_nav_showbox").eq(0).hide();
	$("#Classify .classify_navbox ul li").eq(0).addClass("third_active").removeClass("big_classify_active");
	alert($(this).html());
	$("#Classify .classify_navbox ul li").eq(0).html($(this).html());
	
})
//	筛选点击空白处div隐藏
	$("#Classify .classify_selectbox").on("click",function(){
		$(this).parent().fadeOut("slow");
		$("#Classify .classify_select").animate({right:"-80%"});
	})
	$("#Classify .classify_select").on("click",function(){
		$("#Classify .classify_selectbox").parent().show();
	})
	$("#Classify .classify_select").click(function(e)
	{
		if (e && e.stopPropagation) {//非IE浏览器
		　　e.stopPropagation();
		}
		else {//非IE浏览器
		window.event.cancelBubble = true;
		} 
	})
	var mybody = document.getElementsByTagName('body')[0];
    var mybody = document.getElementsByTagName('body')[0];
    var h = document.documentElement.clientHeight;
    mybody.style.height = h + 'px';
    //滑动处理
    var startX, startY, moveEndX, moveEndY, X, Y;   
    mybody.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startX = e.touches[0].pageX;
        startY = e.touches[0].pageY;
    }, false);
    mybody.addEventListener('touchmove', function(e) {
        e.preventDefault();
        moveEndX = e.changedTouches[0].pageX;
        moveEndY = e.changedTouches[0].pageY;
        X = moveEndX - startX;
        Y = moveEndY - startY;   
        if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
            $("#Classify .classify_selectbox").parent().fadeOut();
        }
    });
    //筛选内容按钮点击效果
    	$(".select_box_listbox_nav ul li").on("click",function(){
    		$(this).addClass("select_box_listbox_nav_active").siblings().removeClass("select_box_listbox_nav_active");
    	})
    	$(".select_box_listbox_navprice ul li").on("click",function(){
    		$(this).addClass("select_box_listbox_nav_active").siblings().removeClass("select_box_listbox_nav_active");
    	})
    	//重置按钮点击效果
    	$(".select_reset").on("click",function(){
    		$("li").removeClass("select_box_listbox_nav_active");
    		$("#Classify .classify_select input").removeAttr("checked")
    	})
    //确定按钮筛选内容box隐藏
    $(".select_submit").on("click",function(){
    	$(this).parents(".classify_nav_showbox").fadeOut("slow");
    	$("#Classify .classify_select").animate({right:"-80%"});
    })
