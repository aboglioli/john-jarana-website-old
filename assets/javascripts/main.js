jQuery(function($) {
  $(".owl-carousel").owlCarousel({
    navigation: true,
    margin:15,
    loop:true,
    items:2,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    transitionStyle: "backSlide"
  });
});
