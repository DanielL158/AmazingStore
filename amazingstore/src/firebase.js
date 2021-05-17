import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBgM743UeBJBqEMb1LB_5PS4yqSenRa8N8",
  authDomain: "amazingstore-2e894.firebaseapp.com",
  projectId: "amazingstore-2e894",
  storageBucket: "amazingstore-2e894.appspot.com",
  messagingSenderId: "731224474864",
  appId: "1:731224474864:web:95cf485cf846f0993c6e35",
  measurementId: "G-2TQ6QVSQCE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };