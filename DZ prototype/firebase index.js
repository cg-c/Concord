import firebase from "firebase/compat/app";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD6xKeES62CWOMgG07OHoJSSN1uXq3TZJs",
    authDomain: "file-storage-2e2fe.firebaseapp.com",
    projectId: "file-storage-2e2fe",
    storageBucket: "file-storage-2e2fe.appspot.com",
    messagingSenderId: "304255651765",
    appId: "1:304255651765:web:714c01420215e7008853fc",
    measurementId: "G-DDSYME51YS"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default};