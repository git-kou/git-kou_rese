$(function() {

    $('.han').click(function() {
        $('.media-list').slideToggle();
        $(this).toggleClass('active');
    });

    $('a,img,main,footer').click(function() {
        $('.media-list').slideUp();
        $('.han').removeClass('active');
    });

    $(window).scroll(function(){
		$('.menu-box').each(function(){
			var pos_a = $(this).offset().top;
			var scr_a = $(window).scrollTop();
			var win_a = $(window).height();
			if (scr_a > pos_a - win_a + 100){
				$(this).addClass('scroll');
			}else{
				$(this).removeClass('scroll');
		});
	});

    $(window).scroll(function(){
		$('.scr').each(function(){
			var pos_b = $(this).offset().top;
			var scr_b = $(window).scrollTop();
			var win_b = $(window).height();
			if (scr_b > pos_b - win_b + 100){
				$(this).addClass('scroll_2');
			}else{
				$(this).removeClass('scroll_2');
		});
	});

	$(window).scroll(function(){
		$('.scr_2').each(function(){
			var pos_c = $(this).offset().top;
			var scr_c = $(window).scrollTop();
			var win_c = $(window).height();
			if (scr_c > pos_c - win_c + 100){
				$(this).addClass('scroll_3');
			}else{
				$(this).removeClass('scroll_3');
		});
	});
});
