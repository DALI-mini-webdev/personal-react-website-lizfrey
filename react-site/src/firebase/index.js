import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCbW3DgJiIq6pH2MM01JvTer7i_z9SxR_0",
    authDomain: "personalwebsite-7a7da.firebaseapp.com",
    projectId: "personalwebsite-7a7da",
    storageBucket: "personalwebsite-7a7da.appspot.com",
    messagingSenderId: "628564864148",
    appId: "1:628564864148:web:07ecba91aaf9404bd01881",
    measurementId: "G-YV1HCJYK89"
  });
  
  
  const db = firebase.firestore();
  
  
  export default {
    firebase, db
  }
  