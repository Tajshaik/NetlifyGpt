// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdj9YFbg2gM9OoPRpcesfU_DL2ITDCenw",
  authDomain: "netlifygpt.firebaseapp.com",
  projectId: "netlifygpt",
  storageBucket: "netlifygpt.appspot.com",
  messagingSenderId: "608845612790",
  appId: "1:608845612790:web:1c40b524a854f0258cced7",
  measurementId: "G-SJTGQDL383"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth()