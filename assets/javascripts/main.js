jQuery(function($) {
  // $(".owl-carousel").owlCarousel({
  //   loop: true,
  //   autoplay: true,
  //   items: 1,
  //   margin: 0,
  //   nav: true,
  //   navText: ['', ''],
  //   autoplayHoverPause: true,
  //   animateOut: 'slideOutUp',
  //   animateIn: 'slideInUp'
  // });

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

    // var config = {
    //   apiKey: "AIzaSyAERhm4hw0QCBBXS_-IL2pcxvv-ZUqrdMk",
    //   authDomain: "contact-form-91ea2.firebaseapp.com",
    //   databaseURL: "https://contact-form-91ea2.firebaseio.com",
    //   storageBucket: "",
    //   messagingSenderId: "862668692236"
    // };
    // firebase.initializeApp(config);

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
});
