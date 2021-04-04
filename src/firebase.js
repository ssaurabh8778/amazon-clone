import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBSi24ZOqNt4XLId4U6yo4JDQz1h8Sd4aQ",
  authDomain: "clone-de4d6.firebaseapp.com",
  databaseURL: "https://clone-de4d6.firebaseio.com",
  projectId: "clone-de4d6",
  storageBucket: "clone-de4d6.appspot.com",
  messagingSenderId: "260590044298",
  appId: "1:260590044298:web:ec13aad27f796929df5973",
  measurementId: "G-VVTDT8JGMT",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
