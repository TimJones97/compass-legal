var isHomepage = false;

function smallNavOnScroll(){
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
function checkHomepage(){
	var page = document.title;
	// If page title matches homepage title, return true
	if(page == 'Brisbane & Gold Coast Lawyers | Compass Legal Solutions'){
		isHomepage = true;
	}
	else {
		isHomepage = false;
	}
}
function getUrlParameter(sParam){
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};
function bindVelocity(){
	var serviceCategory = getUrlParameter('go'),
		serviceCategoryAnchor = "#";
		serviceID = "";
	if(getUrlParameter('go') != undefined){
		// Add the hash symbol to the category string 
		// to make it a target anchor
		serviceCategoryAnchor = serviceCategoryAnchor + serviceCategory;
		setTimeout(function(){
			$(serviceCategoryAnchor).velocity("scroll", { 
			  duration: 1000,
			  offset: -150
			});			
		}, 1000)
		// Highlight the selected category with a box shadow
		setTimeout(function(){
			$('.services-page .service').each(function(){
				serviceID = $(this).attr('id')
				if(serviceID == serviceCategory){
					$(this).addClass('highlight');
				}
			});
		}, 2300)
		// Remove the highlight shadow after 1 second
		setTimeout(function(){
			$('.services-page .service').removeClass('highlight');
		}, 3300)
	}
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
		pageHref = $(this).children().first().attr('href').split('/')[2]; // Affected by /compass-legal URL, change to 1 after publishing
		if(pageHref != null){
			// Get the first word of page name
			pageHref = pageHref.split('-')[0];
			if(title == pageHref){
				$(this).addClass('active');
			}
		}
	});
}
function createScrollRevealEffects(){
	var slideUp = {
		duration: 700,
		origin: 'bottom',
		distance: '100px',
		scale: '0.5',
	},
	slideUpNoZoom = {
		duration: 700,
		origin: 'bottom',
		distance: '100px'
	},
	slideInLeft = {
		duration: 700,
		distance: '100px',
		origin: 'left'
	}
	slideInRight = {
		duration: 700,
		distance: '100px',
		origin: 'right'
	}


	// Add the animation to the elements
	ScrollReveal().reveal('.objectives-container .objective.one', slideInLeft);
	ScrollReveal().reveal('.objectives-container .objective.two', slideInRight);

	// Services
	ScrollReveal().reveal('.service-boxes .service', slideUpNoZoom);

	// Process steps
	ScrollReveal().reveal('.steps .step', slideUp);

	// For the two objectives
	ScrollReveal().reveal($('.objective.one'),  { delay: 400, afterReveal: removeScrollRevealStyles });
	ScrollReveal().reveal($('.objective.two'),  { delay: 400, afterReveal: removeScrollRevealStyles  });

	// For the process steps
	ScrollReveal().reveal($('.service-boxes .service.one'),  { delay: 400, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.service-boxes .service.two'),  { delay: 400, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.service-boxes .service.three'),  { delay: 400, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.service-boxes .service.four'),  { delay: 600, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.service-boxes .service.five'),  { delay: 600, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.service-boxes .service.six'),  { delay: 600, afterReveal: removeScrollRevealStyles  });

	// For the process steps
	ScrollReveal().reveal($('.step.one'),  { delay: 400, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.step.two'),  { delay: 700, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.step.three'),  { delay: 1000, afterReveal: removeScrollRevealStyles  });

	// For the contact information
	ScrollReveal().reveal($('.contact .contact-details'),  { delay: 400, afterReveal: removeScrollRevealStyles  });
	ScrollReveal().reveal($('.contact #map'),  { delay: 400, afterReveal: removeScrollRevealStyles  });

}
function removeScrollRevealStyles(el){
	$(el).removeAttr('style');
}
function fadeInParallax(){
    $('.parallax-window').addClass('loaded');
}
function toggleClientCentrePages(){
	$('.page').click(function(){
		// Toggle Client Centre element to show and hide on click
    	$('.client-centre').removeClass('show');
    	$('.hidden-forms').removeClass('hide');
	});
	$('.go-back').click(function(){
		$('.client-centre').addClass('show');
		$('.hidden-forms .container').addClass('hide');
		// Wait 500ms until client-centre main page links has appeared again
		setTimeout(function(){
			$('.hidden-forms').addClass('hide');
		}, 500);
	});
    
    $('.payment').click(function(){
    	$('.payment-page').toggleClass('hide');
    });
    $('.conveyancing').click(function(){
    	$('.conveyancing-page').toggleClass('hide');
    });
    $('.will').click(function(){
    	$('.will-page').toggleClass('hide');
    });
    $('.engagement').click(function(){
		// Remove hide class from hidden forms/pages
    	$('.engagement-page').toggleClass('hide');
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
	smallNavOnScroll();
});
$(window).scroll(function(){
	smallNavOnScroll();
});
$(window).on('load', function(){
	fadeInParallax();
    // Wait for page to load before enabling transitions 
    // to stop elements from showing animating early
	$("body").removeClass("no-anim");
});
$(document).ready(function(){
	new universalParallax().init({
	  speed: 1.8
	});
	bindVelocity();
	smallNavOnScroll();
	toggleMobileNav();
	setActiveNavItem();
	setCopyrightYear();
	addBodyFooterMargin();
	toggleClientCentrePages();
	// Only add scroll reveal effects on homepage
	if(isHomepage){
		createScrollRevealEffects();
	}
	setTimeout(function(){
		addBodyFooterMargin();
	}, 200)
});