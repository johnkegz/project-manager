import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
      apiKey: "AIzaSyDYJ_ZmrHHuXVv6hQJ7HVvtYE6nexX8wyc",
      authDomain: "project-manager-8ab9d.firebaseapp.com",
      databaseURL: "https://project-manager-8ab9d.firebaseio.com",
      projectId: "project-manager-8ab9d",
      storageBucket: "project-manager-8ab9d.appspot.com",
      messagingSenderId: "183168786888",
      appId: "1:183168786888:web:7d0c9d629304439f7ba0fd",
      measurementId: "G-6B10FGES8S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;