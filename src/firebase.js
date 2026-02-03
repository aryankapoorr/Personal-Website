// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "aryan-portfolio-1676e.firebaseapp.com",
  projectId: "aryan-portfolio-1676e",
  storageBucket: "aryan-portfolio-1676e.firebasestorage.app",
  messagingSenderId: "174785909018",
  appId: "1:174785909018:web:94543b58e03f99e04adca3",
  measurementId: "G-LEF5PH1SWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };