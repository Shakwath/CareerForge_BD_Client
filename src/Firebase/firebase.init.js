// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIQK59H1Vo0RlR-3I1qOXEOsL21PLeoFw",
  authDomain: "careerforgebd-app.firebaseapp.com",
  projectId: "careerforgebd-app",
  storageBucket: "careerforgebd-app.firebasestorage.app",
  messagingSenderId: "652701814330",
  appId: "1:652701814330:web:603c935788ade73f206f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;