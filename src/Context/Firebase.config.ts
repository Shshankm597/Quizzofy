import firebase  from "firebase/app";
import "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCdcs7laCd1asWIyB8AEgAk15GvXka6T88",
    authDomain: "quizzofy-68b9e.firebaseapp.com",
    projectId: "quizzofy-68b9e",
    storageBucket: "quizzofy-68b9e.appspot.com",
    messagingSenderId: "1077832524493",
    appId: "1:1077832524493:web:42f2f14a033abe0dc7bf84",
    measurementId: "G-CQCQZR8NME"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();
