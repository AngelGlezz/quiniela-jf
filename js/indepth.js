$(document).ready(function(){
    $(".show").fancybox({
        'centerOnScroll': true,
        'padding': 0
    });

    $("#mx").click(function(){
    	$("#liga").show();
    	$("#main-content").hide();
    	$(".close").show();
    });

    $("#usa").click(function(){
    	$("#nfl").show();
    	$("#main-content").hide();
    	$(".close").show();
    });

    $(".close").click(function(){
    	$(".indepth_content").hide();
    	$("#main-content").show();
    	$(".close").hide();
    });
});