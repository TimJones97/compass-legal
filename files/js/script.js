function smallNavOnScroll(index=false){
	var offset = 5;
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > offset || isMobile()){
		$('.navbar').addClass('opaque');
	}
	else {
		$('.navbar').removeClass('opaque');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > offset || isMobile()){
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
		closeMenu();
	});
	$('.body-overlay').click(function(){
		closeMenu();
	});
}
function addBodyFooterMargin(){
	$('main').css('margin-bottom', $('footer').outerHeight() + 'px');
}
function isMobile(){
	if($(window).width() < 991){
		return true;
	}
	else {
		return false;
	}
}
function setCopyrightYear(){
	var theDate = new Date(); 
	$(".year").text(theDate.getFullYear());
}
function isHomepage(){
	var page = document.title;
	// If page title matches homepage title, return true
	if(page == 'Brisbane & Gold Coast Lawyers | Compass Legal Solutions'){
		return true;
	}
	else {
		return false;
	}
}
function animateHeroText(){
	$('.banner-text').addClass('animate');
	// Wait 4.2s for animation to complete
	setTimeout(function(){
		$('.banner-text').removeClass('animate');
		$('.banner-text').addClass('animate-finish');
	}, 4700)
}
function bindVelocity(){
  // bind click event to all internal page anchors
  $('a[href*="#"]').on('click', function (e) {
	var target = $(this).attr('href');
	// If the target is not empty
    if(target != '#'){
		if(isMobile()){
			// scroll to each target
		    $(target).velocity("scroll", { 
		      duration: 1000,
		      offset: -79
		    });
		}
		else {
		    $(target).velocity("scroll", { 
		      duration: 1000,
		      offset: -110
		    });
		}
		closeMenu();
    }
    else {
    	e.preventDefault();
    	e.stopPropagation();
    }
  });
}
function closeMenu(){
	$('.mobile-nav').removeClass('open');
	$('.body-overlay').removeClass('show');
}
function setActiveNavItem(){
	var title = document.title,
		pageHref;
	if(title != null){
		// Get first word of title
		title = title.split(' ')[0].toLowerCase();
	}
	$('nav .nav-item').each(function(){
		// Get the anchor element in each nav item and split the href
		// attribute by / and - to get the page name
		pageHref = $(this).children().first().attr('href').split('/')[1];
		if(pageHref != null){
			// Get the first word of page name
			pageHref = pageHref.split('-')[0];

			if(title == pageHref){
				$(this).addClass('active');
			}
		}
	});
}
$(window).resize(function(){
	// Remove styles that may have been applied on mobile/desktop
	if($(window).width() > 1400){
		$('.mobile-nav').removeClass('open');
		$('.body-overlay').removeClass('show');
	}
	setTimeout(function(){
		addBodyFooterMargin();
	}, 200)
	smallNavOnScroll(isHomepage());
});
$(window).scroll(function(){
	smallNavOnScroll(isHomepage());
});
$(document).ready(function(){
	bindVelocity();
	smallNavOnScroll(isHomepage());
	toggleMobileNav();
	setActiveNavItem();
	setCopyrightYear();
	addBodyFooterMargin();
	setTimeout(function(){
		addBodyFooterMargin();
	}, 200)
	new universalParallax().init({
	  speed: 1.8
	});
	// Wait for page to load before enabling transitions 
	// to stop elements from showing too early
	setTimeout(function(){
  		$("body").removeClass("no-anim");
		animateHeroText();
	}, 100);
});