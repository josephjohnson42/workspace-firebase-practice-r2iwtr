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

    inputJson[data.name] = data.value;
  });

  firebase.firestore().collection('survey').add(inputJson);
});

// update the result in table
firebase
  .firestore()
  .collection('survey')
  .onSnapshot((querySnapshot) => {
    console.log(querySnapshot.size);

    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      console.log(doc.data().choice);
      console.log(doc.data().comm);

      if (doc.data.choice == 'A') {
        n1 += 1;
      } else if (doc.data().choice == 'B') {
        n2 += 1;
      } else if (doc.data().choice == 'C') {
        n3 += 1;
      } else if (doc.data().choice == 'D') {
        n4 += 1;
      } else if (doc.data().choice == 'E') {
        n5 += 1;
      }
    });
    $('#ans1').text(n1);
    $('#ans2').text(n2);
    $('#ans3').text(n3);
    $('#ans4').text(n4);
    $('#ans5').text(n5);
  });
