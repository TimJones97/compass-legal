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
// Initialize and add the map
function initMap(){
  // The location of Uluru
  const uluru = { lat: -27.4744557, lng: 152.8952036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(
    document.getElementById("map"),
    {
      zoom: 17,
      center: uluru,
    }
  );

  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
$(document).ready(function(){
	smallNavOnScroll();
	$('.parallax-window').parallax();
});