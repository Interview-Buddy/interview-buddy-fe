// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPsDywdGHulSwvPzOhLnT1mG7ErfrcATM",
  authDomain: "interview-buddy-42e9a.firebaseapp.com",
  projectId: "interview-buddy-42e9a",
  storageBucket: "interview-buddy-42e9a.appspot.com",
  messagingSenderId: "181235796146",
  appId: "1:181235796146:web:006715aadacc9c4ee6a1ab",
  measurementId: "G-QVDKLH30MM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);