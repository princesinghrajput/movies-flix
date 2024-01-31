// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVs5e3YhpckEG-bg0wD6_d_fTLO6fjNag",
  authDomain: "movies-flix-2f473.firebaseapp.com",
  projectId: "movies-flix-2f473",
  storageBucket: "movies-flix-2f473.appspot.com",
  messagingSenderId: "476133606726",
  appId: "1:476133606726:web:5228d609bef63c82655147",
  measurementId: "G-RZVG3V5V6Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
