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
		if(scrollTop > 250 || isMobile()){
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
function addBodyFooterMargin(){
	$('main').css('margin-bottom', $('footer').height() + 'px');
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
  	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();
	})
}
function showHiddenFooterScroll(){
	// Check scroll position on page load before 
	// adding scroll listener
	if($(document).scrollTop() > $(window).height() + 200){
		$('footer').css('opacity', '1');
	}
	else {
		$('footer').css('opacity', '0');
	}
	$(window).scroll(function(){
		if($(document).scrollTop() > $(window).height() + 200){
			$('footer').css('opacity', '1');
		}
		else {
			$('footer').css('opacity', '0');
		}
	});
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
// function fadeBannerText(){
// 	$(window).scroll(function(){
// 		var scrollTop = $(this).scrollTop(),
// 			heroText = $(".parallax-window h1");

// 	  	if (scrollTop > 50) {
// 		    heroText.css('color', "rgba(255, 255, 255, 0.2)");
// 	  	} 
// 	  	else if ( scrollTop < 50 ) {
// 		    heroText.css('color', "rgba(255, 255, 255, 1.0)");
// 	  	}
//     });
// }
function animateHeroText(){
	$('.banner-text').addClass('animate');
}
$(window).resize(function(){
	// Remove styles that may have been applied on mobile/desktop
	if($(window).width() > 1400){
		$('.mobile-nav').removeClass('open');
		$('.body-container').removeClass('show');
	}
	setTimeout(function(){
		addBodyFooterMargin();
	}, 200)
});
$(document).ready(function(){
	smallNavOnScroll();
	toggleMobileNav();
	preventDefaultOnClick();
	setCopyrightYear();
	showHiddenFooterScroll();
	setTimeout(function(){
		addBodyFooterMargin();
		animateHeroText();
	}, 200)
	new universalParallax().init({
	  speed: 2.0
	});
});