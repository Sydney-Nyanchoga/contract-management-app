// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxEyY33ubLsIwrJIeDdim01T-_lxW-n2I",
  authDomain: "contracts-management-d9ebf.firebaseapp.com",
  projectId: "contracts-management-d9ebf",
  storageBucket: "contracts-management-d9ebf.appspot.com",
  messagingSenderId: "512501422982",
  appId: "1:512501422982:web:7b61420bb65c155d4faa07",
  measurementId: "G-HD4K3Q2MBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
