import firebase from "firebase/app";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBf75cI-pTKc7aLS4qKOpj2-dr9krQGg-s",
  authDomain: "clone-e2833.firebaseapp.com",
  projectId: "clone-e2833",
  storageBucket: "clone-e2833.appspot.com",
  messagingSenderId: "609843429685",
  appId: "1:609843429685:web:6552ebe6269046423fcc7c",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
