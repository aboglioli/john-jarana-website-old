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
  function thanks() {
    $('.form-contact').hide(500);
    $('.contact-message').show(1000);
  }

  $('#contact-form').submit(function(e) {
    e.preventDefault();

    var formObj = $(this);
    var contactData = formObj.serializeArray();

    console.log(contactData);

    var ok = contactData.every(function(item) {
      return item.value !== '';
    });

    if(!ok) {
      alert('Algunos campos están vacíos. Por favor, completalos.');
    } else {
      // Store emails to firebase
      firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebaseContact.database().ref('/contact').push(contactData);

        }
      });
      thanks();
    }

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
