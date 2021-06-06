import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBzOdJ9popsF0ud2BIZDa86rBEdHOZaDFw",
    authDomain: "facebook-clone-4f52e.firebaseapp.com",
    databaseURL: "https://facebook-clone-4f52e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "facebook-clone-4f52e",
    storageBucket: "facebook-clone-4f52e.appspot.com",
    messagingSenderId: "756907158765",
    appId: "1:756907158765:web:e7674c6b08da312b8a30e4",
    measurementId: "G-B6W1S3J46D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); //for logging in
  const provider = new firebase.auth.GoogleAuthProvider(); //Google login service

  export { auth, provider };
  export default db;