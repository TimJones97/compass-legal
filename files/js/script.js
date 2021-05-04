function smallNavOnScroll(){
	//Check on the navbar on start
	var scrollTop = $(document).scrollTop();
	if(scrollTop > 5){
		$('.navbar').addClass('small');
	}
	else {
		$('.navbar').removeClass('small');
	}
	$(window).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop > 5){
			$('.navbar').addClass('small');
		}
		else {
			$('.navbar').removeClass('small');
		}
	});
}
$(document).ready(function(){
	smallNavOnScroll();
	$('.parallax-window').parallax();
});