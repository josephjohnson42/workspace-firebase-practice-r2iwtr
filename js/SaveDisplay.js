// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
$(".sampleSurvey input[type='submit']").click(function (e) {
  e.preventDefault();

  // get the value of the form using serializeArray method

  const inputdata = $('.sampleSurvey').serializeArray();
  console.log(inputdata);

  var inputJson = {};
  inputdata.forEach((data) => {
    console.log(data.name);
    console.log(data.value);

    var n = data.name;
    var v = data.value;

    inputJson[n] = v;
  });

  firebase.firestore().collection('survey').add(inputJson);
});

firebase
  .firestore()
  .collection('survey')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comment);
    });
  });

// update the result in table
