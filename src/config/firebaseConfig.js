// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCAl7ZpzbjuxZ0DUYBCsqcZecnBPV5ybc",
  authDomain: "luminaris-version-two.firebaseapp.com",
  projectId: "luminaris-version-two",
  storageBucket: "luminaris-version-two.appspot.com",
  messagingSenderId: "438917763139",
  appId: "1:438917763139:web:cae078487748cc70d544f6",
  measurementId: "G-799TYDTHTK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);