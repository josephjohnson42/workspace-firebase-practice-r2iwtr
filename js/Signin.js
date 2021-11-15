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
$('#Login').submit(function (e) {
  e.preventDefault();
  // get the user name and password from form
  // You need to change this.
  var email = 'yilianz4@gmail.com';
  var password = 'ddsgagafda';
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((success) => {
      // Signed in
      // ...
      console.log('login in');
      let user = firebase.auth().currentUser;

      //user.updateProfile({ displayName: "Not sure" });
      if (user != null) {
        name = user.displayName;
        email = user.email;
        photoUrl = user.photoURL;
        emailVerified = user.emailVerified;
        console.log(name + email + emailVerified);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
});
