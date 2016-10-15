jQuery(function($) {
  $(".owl-carousel").owlCarousel({
    margin:30,
    loop:true,
    items:3,
    autoplay:true,
    autoplayTimeout:3500,
    autoplayHoverPause:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
  });
});
