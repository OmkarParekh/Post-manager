import firebase from 'firebase'
var firebaseConfig = {
     apiKey: "AIzaSyATdzBCFzscrCZ5M16nCXQgjOyhR33bhps",
     authDomain: "post-manager-300210.firebaseapp.com",
     projectId: "post-manager-300210",
     storageBucket: "post-manager-300210.appspot.com",
     messagingSenderId: "472574786179",
     appId: "1:472574786179:web:768338d8e595ffbc3f39b6",
     measurementId: "G-BLQM3MKT44"
   };
   // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;