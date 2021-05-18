function smallNavOnScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 5 || isMobile()){
		$('.navbar').addClass('opaque');
	}
	else {
		$('.navbar').removeClass('opaque');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5 || isMobile()){
			$('.navbar').addClass('opaque');
		}
		else {
			$('.navbar').removeClass('opaque');
		}
	});
}
function toggleMobileNav(){
	$('.menu-toggle').click(function(e){
		e.preventDefault();
		$('.mobile-nav').addClass('open');
		$('.body-overlay').addClass('show');
	});
	$('.close-btn').click(function(e){
		e.preventDefault();
		$('.mobile-nav').removeClass('open');
		$('.body-overlay').removeClass('show');
	});
	$('.body-overlay').click(function(){
		$('.mobile-nav').removeClass('open');
		$('.body-overlay').removeClass('show');
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
function preventDefaultOnClick(){
	$('a').click(function(e){
		e.preventDefault();
	})
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
$(window).resize(function(){
	// Remove styles that may have been applied on mobile/desktop
	if($(window).width() > 1400){
		$('.mobile-nav').removeClass('open');
		$('.body-container').removeClass('show');
	}
});
$(document).ready(function(){
	smallNavOnScroll();
	toggleMobileNav();
	preventDefaultOnClick();
	new universalParallax().init({
	  speed: 2.0
	});
});