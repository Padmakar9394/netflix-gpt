// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3tl0MB0BSi_cX-Zz5Yt_HoOmmNcXgoEc",
  authDomain: "netflixgpt-98d00.firebaseapp.com",
  projectId: "netflixgpt-98d00",
  storageBucket: "netflixgpt-98d00.appspot.com",
  messagingSenderId: "416512014345",
  appId: "1:416512014345:web:29c7bb8c98e869400b60d8",
  measurementId: "G-DM5Q9080BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();