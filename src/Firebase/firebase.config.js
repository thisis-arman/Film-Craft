// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApfWwPU2eP_hvhziBctZFb8bztnN6bBaI",
  authDomain: "film-craft.firebaseapp.com",
  projectId: "film-craft",
  storageBucket: "film-craft.appspot.com",
  messagingSenderId: "120706154424",
  appId: "1:120706154424:web:7867468298f99675cf994d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;