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
		if(!isMobile()){
			$('section').addClass('blur');
			$('main').addClass('blur');
			$('nav').addClass('blur');
		}
	});
	$('.close-btn').click(function(e){
		e.preventDefault();
		$('section').removeClass('blur');
		$('main').removeClass('blur');
		$('nav').removeClass('blur');
		$('.mobile-nav').removeClass('open');
	});
	$('.body-overlay').click(function(){
		$('.mobile-nav').removeClass('open');
		$('section').removeClass('blur');
		$('main').removeClass('blur');
		$('nav').removeClass('blur');
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
	// Remove styles that may have been applied on mobile/desktop
	$('section').removeClass('blur');
	$('main').removeClass('blur');
	$('nav').removeClass('blur');
	$('.mobile-nav').removeClass('open');
});
$(document).ready(function(){
	smallNavOnScroll();
	toggleMobileNav();
	new universalParallax().init({
	  speed: 2.0
	});
});