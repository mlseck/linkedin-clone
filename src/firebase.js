import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD-WkBDui6HOWETD7c4lp4HfYJ7AmTERco",
    authDomain: "linked-in-clone-efb4b.firebaseapp.com",
    projectId: "linked-in-clone-efb4b",
    storageBucket: "linked-in-clone-efb4b.appspot.com",
    messagingSenderId: "475393463939",
    appId: "1:475393463939:web:8078fe003c55cbe12eadb6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};