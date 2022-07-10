// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWNP-SQZTR9JyweMxP4OGO36WTE_0bNGM",
  authDomain: "vue-test-app-6cb38.firebaseapp.com",
  projectId: "vue-test-app-6cb38",
  storageBucket: "vue-test-app-6cb38.appspot.com",
  messagingSenderId: "272793183748",
  appId: "1:272793183748:web:0490b8e6145035e9e07751",
  measurementId: "G-JNDKD33BGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);