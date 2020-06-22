import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyCH0BjQs4j0FglZ_zxwRnmzz7sJbQOKPM0",
    authDomain: "dope-clothing-db.firebaseapp.com",
    databaseURL: "https://dope-clothing-db.firebaseio.com",
    projectId: "dope-clothing-db",
    storageBucket: "dope-clothing-db.appspot.com",
    messagingSenderId: "844430163356",
    appId: "1:844430163356:web:ab236cb0ac0d47d1cf1c59",
    measurementId: "G-LWG7QBH7K7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;