var firebaseConfig = {
  apiKey: 'AIzaSyBKpDfpZ-E0zVh9-Iw5GgO94wqiktFKa08',
  authDomain: 'csci225-josephjohnson.firebaseapp.com',
  projectId: 'csci225-josephjohnson',
  storageBucket: 'csci225-josephjohnson.appspot.com',
  messagingSenderId: '449711620730',
  appId: '1:449711620730:web:57d0b17e63f389722f71c3',
  measurementId: 'G-PPGN5EDK91',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// save the data
$('#signup-form').submit(function (e) {
  e.preventDefault();
  //get the username(email) and password from the form
  // change the following code

  var email = $('#signup-form input[name="username"]').val();
  var password = $('#signup-form input[name="password"]').val();
  var cpassword = $('#signup-form input[name="cpassword"]').val();
  console.log(email + '  ' + password + '  ' + cpassword);

  if (password == cpassword) {
    // create a user with email address and password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // Signed in
        // ...

        console.log('You are signed up');
        window.location.href = 'Login.html';
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.code);
        console.log(errorMessage);
      });
  } else {
    console.log('Passwords dont match');
    window.alert('Passwords must match');
  }
});

//using google instead
$('#google').click(function () {
  console.log('g selected');

  var provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      console.log('Signed in');
      /**window.location.href = 'Login.html'; **/
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      console.log(credential);
    });
});
