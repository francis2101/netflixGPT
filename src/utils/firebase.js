// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRfnDDmRcHof7nbYd-COIzUy2sF8sZpzE",
  authDomain: "netflixgpt-f7f08.firebaseapp.com",
  projectId: "netflixgpt-f7f08",
  storageBucket: "netflixgpt-f7f08.appspot.com",
  messagingSenderId: "902918674566",
  appId: "1:902918674566:web:5e2f94e7a5eae6fc41d907",
  measurementId: "G-8WY6P63Y5T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);