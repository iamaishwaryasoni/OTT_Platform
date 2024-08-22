// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfPyxX5NpalL8lRWnz_7glcVX0UXkxjGI",
  authDomain: "ottplatform-9cb4d.firebaseapp.com",
  projectId: "ottplatform-9cb4d",
  storageBucket: "ottplatform-9cb4d.appspot.com",
  messagingSenderId: "61751839088",
  appId: "1:61751839088:web:d07a4805e4bc7a661927b5",
  measurementId: "G-FSSRC5TKMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();