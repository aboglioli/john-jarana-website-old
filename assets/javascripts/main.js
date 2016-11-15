jQuery(function($) {
  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    margin: 0,
    nav: false,
    autoplayHoverPause: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
  });

  /**
  * Contact form
  */
  $('#contact-form').submit(function(e) {
    e.preventDefault();

    var formObj = $(this);
    var contactData = formObj.serializeArray();


    // Store emails to firebase
    console.log(contactData);

    firebase.auth().signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);

        firebaseContact.database().ref('/contact').push(contactData);
      }
    });

  });

  /**
   * Typist
   */
  var typistElement = document.querySelector('#typist-element');
  new Typist(typistElement, {
    letterInterval: 60,
    textInterval: 3000
  });
});
