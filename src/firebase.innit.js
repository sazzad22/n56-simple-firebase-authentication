// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAc2GTkeMhjndGZCKTqXkd6Qn13urASRMA",
  authDomain: "simple-firebase-authenti-2ae66.firebaseapp.com",
  projectId: "simple-firebase-authenti-2ae66",
  storageBucket: "simple-firebase-authenti-2ae66.appspot.com",
  messagingSenderId: "47888663687",
  appId: "1:47888663687:web:c845336e8a80e5f08ce422",
  measurementId: "G-5JY2720W0E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;