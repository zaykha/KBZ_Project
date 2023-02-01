// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT6XeWDxQBvEJtRTeu0P5Y-HogPCllfAY",
  authDomain: "kbz-money-project.firebaseapp.com",
  projectId: "kbz-money-project",
  storageBucket: "kbz-money-project.appspot.com",
  messagingSenderId: "554269783987",
  appId: "1:554269783987:web:85955901046b1a7a3f7dc6",
  measurementId: "G-NQEVMBRXL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
