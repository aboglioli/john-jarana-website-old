Animation = (function($) {
  function animateElements() {

    var animationDelay = 0;
    $(window).scroll( function() {
      /* Check the location of each desired element */
      $('.card').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
            (function($self, animationDelay) {
              setTimeout(function() {
                $self.addClass('animated bounceInRight');
                $self.css({'visibility': 'visible'});
              }, animationDelay);
              console.log(animationDelay);
            })($(this), animationDelay);

            animationDelay += 300;
          }
      });

      animationDelay = 0;

      $('.drink-img').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
            // $(this).addClass('animated hinge');
            $(this).addClass('animated wobble');
            // $(this).addClass('animated bounceInUp');
          }
      });

      $('.media-list-left, .media-list-right').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();

          /* If the object is completely visible in the window, fade it it */
          if( bottom_of_window > bottom_of_object ){
            // $(this).addClass('animated hinge');
            $(this).addClass('animated shake');
            // $(this).addClass('animated bounceInUp');
          }
      });
    });
  }

  return {
    animateElements: animateElements
  };
})(jQuery);

;(function () {

  'use strict';

  // iPad and iPod detection
  var isiPad = function(){
    return (navigator.platform.indexOf("iPad") != -1);
  };

  var isiPhone = function(){
      return (
      (navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPod") != -1)
      );
  };



  // Carousel Feature Slide
  var owlCrouselFeatureSlide = function() {
    var owl = $('.owl-carousel-main');
    owl.owlCarousel({
      items: 1,
      mouseDrag: false,
      loop: true,
      margin: 0,
      responsiveClass: true,
      nav: true,
      dots: true,
      autoHeight: true,
      smartSpeed: 500,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
        navText: [
          "<i class='icon-arrow-left2 owl-direction'></i>",
          "<i class='icon-arrow-right2 owl-direction'></i>"
        ]
    });
  };


  var owlCarouselScreenshots = function() {
    var owl = $('.owl-carousel-center');

    owl.owlCarousel({
        center: true,
        items:1,
        mouseDrag: false,
        loop: false,
        margin: 10,
        responsive:{
          0:{
              items:1
          },
          600:{
              items:4
          },
          1000:{
              items:5
          }
      }
    });


    $('body').on('click', '.owl-item', function(){

      var $this = $(this),
        index = $this.index();

        console.log(index);
      $('.owl-carousel-center .owl-dots > div').eq(index).trigger('click');
    });
  }




  // Burger Menu
  var burgerMenu = function() {

    $('body').on('click', '.js-fh5co-nav-toggle', function(event){

      if ( $('#navbar').is(':visible') ) {
        $(this).removeClass('active');
      } else {
        $(this).addClass('active');
      }

      event.preventDefault();

    });

  };



  // Page Nav
  var clickMenu = function() {

    $('a:not([class="external"])').click(function(event){
      var section = $(this).data('nav-section'),
        navbar = $('#navbar');
        $('html, body').animate({
            scrollTop: $('[data-section="' + section + '"]').offset().top
        }, 500);

        if ( navbar.is(':visible')) {
          navbar.removeClass('in');
          navbar.attr('aria-expanded', 'false');
          $('.js-fh5co-nav-toggle').removeClass('active');
        }

        event.preventDefault();
        return false;
    });

  };

  // Reflect scrolling in navigation
  var navActive = function(section) {

    var $el = $('#navbar > ul');
    $el.find('li').removeClass('active');
    $el.each(function(){
      $(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
    });

  };
  var navigationSection = function() {

    var $section = $('div[data-section]');

    $section.waypoint(function(direction) {
        if (direction === 'down') {
          navActive($(this.element).data('section'));

        }
    }, {
        offset: '150px'
    });

    $section.waypoint(function(direction) {
        if (direction === 'up') {
          navActive($(this.element).data('section'));
        }
    }, {
        offset: function() { return -$(this.element).height() + 155; }
    });

  };


  // Window Scroll
  var windowScroll = function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event){

       var header = $('#fh5co-header'),
        scrlTop = $(this).scrollTop();

      if ( scrlTop > 500 && scrlTop <= 2000 ) {
        header.addClass('navbar-fixed-top fh5co-animated slideInDown');
      } else if ( scrlTop <= 500) {
        if ( header.hasClass('navbar-fixed-top') ) {
          header.addClass('navbar-fixed-top fh5co-animated slideOutUp');
          setTimeout(function(){
            header.removeClass('navbar-fixed-top fh5co-animated slideInDown slideOutUp');
          }, 100 );
        }
      }

    });
  };



  // Animations


  var contentWayPoint = function() {
    var i = 0;
    $('.animate-box').waypoint( function( direction ) {

      if( direction === 'down' && !$(this.element).hasClass('animated') ) {

        i++;

        $(this.element).addClass('item-animate');
        setTimeout(function(){

          $('body .animate-box.item-animate').each(function(k){
            var el = $(this);
            setTimeout( function () {
              var effect = el.data('animate-effect');
              if ( effect === 'fadeIn') {
                el.addClass('fadeIn animated');
              } else if ( effect === 'fadeInLeft') {
                el.addClass('fadeInLeft animated');
              } else if ( effect === 'fadeInRight') {
                el.addClass('fadeInRight animated');
              } else {
                el.addClass('fadeInUp animated');
              }

              el.removeClass('item-animate');
            },  k * 200, 'easeInOutExpo' );
          });

        }, 100);

      }

    } , { offset: '85%' } );
  };




  // Document on load.
  $(function(){

    burgerMenu();
    owlCrouselFeatureSlide();
    owlCarouselScreenshots();
    clickMenu();
    windowScroll();
    navigationSection();

    contentWayPoint();

    Animation.animateElements();

  });

}());
