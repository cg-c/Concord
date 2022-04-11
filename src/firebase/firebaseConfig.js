// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
//import firebase from "firebase/compt/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbbKrPpAofxmAyP4lbXeQ9ATDpi0pal9g",
  authDomain: "hidden-will-345502.firebaseapp.com",
  databaseURL: "https://hidden-will-345502-default-rtdb.firebaseio.com",
  projectId: "hidden-will-345502",
  storageBucket: "hidden-will-345502.appspot.com",
  messagingSenderId: "209653197439",
  appId: "1:209653197439:web:7e8137fa2ef971d877ed4a",
  measurementId: "G-H72HYZWNP6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth();

export default app;