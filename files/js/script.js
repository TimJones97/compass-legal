function smallNavOnScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 5 || isMobile()){
		$('.navbar').addClass('small');
	}
	else {
		$('.navbar').removeClass('small');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5 || isMobile()){
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
function isMobile(){
	if($(window).width() < 767){
		return true;
	}
	else {
		return false;
	}
}
$(window).resize(function(){
	if(!isMobile()){
		$('.mobile-nav').removeClass('open');
	}
});
$(document).ready(function(){
	smallNavOnScroll();
	toggleMobileNav();
	new universalParallax().init({
	  speed: 2.0
	});
	$('.parallax-window').parallax();
});