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
/* object examples */
var testJson = {};
testJson['lastname'] = 'zhang';
testJson['location'] = 'aiken';
console.log(testJson);

//AUTHORIZE USER SIGNED IN
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email);
  } else {
    console.log('no user');
  }
});

// enter data in
$("input[type='button']").click(function (e) {
  //get the value of form
  const inputdata = $('form').serializeArray();
  console.log(inputdata);

  /* save the data to database */
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var n = inputdata[i]['name'];
    var v = inputdata[i]['value'];
    inputJson[n] = v;
    console.log(n + ' ' + v);
  }

  firebase.firestore().collection('hotelreservation').add(inputJson); //saves the data

  /* clear the entry */
  $('form')[0].reset();
});

//sign out
$('#signout').click(function () {
  firebase
    .auth()
    .signOut()
    .then(() => {
      //success
      //redirect page
    })
    .catch((error) => {
      //error happened
    });
});

/* array example
const array1 = ['a', 'b', 'c'];
array1.forEach(element => console.log(element));
*/

/* read the data from the database */

firebase
  .firestore()
  .collection('hotelreservation')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().room);
      console.log(doc.data().checkout);
    });
  });
