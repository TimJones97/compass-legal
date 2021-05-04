function smallNavOnScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 5 || $(window).width() < 767){
		$('.navbar').addClass('small');
	}
	else {
		$('.navbar').removeClass('small');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5 || $(window).width() < 767){
			$('.navbar').addClass('small');
		}
		else {
			$('.navbar').removeClass('small');
		}
	});
}
function toggleMobileNav(){
	$('.menu-toggle').click(function(e){
		e.preventDefault();
		$('.mobile-nav').addClass('open');
	});
	$('.close').click(function(e){
		e.preventDefault();
		$('.mobile-nav').removeClass('open');
	});
}
$(document).ready(function(){
	smallNavOnScroll();
	toggleMobileNav();
	$('.parallax-window').parallax();
});