$(document).ready(function() 
  {
  function setHeight() {
      windowHeight = $(window).innerHeight();
      $('.window_height').css('height', windowHeight-100);
  };
  setHeight();
    
  $(window).resize(function() {
      setHeight();
  });
});

$(document).ready(function() 
  {
	$('.lights_slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: true
	});
});

$(document).ready(function() 
  {
  $('.top_rated_slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true
  });
});


$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});