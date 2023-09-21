// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtJsKUHnIRBjkvfiEkt0PAdTu9LrYBhrE",
  authDomain: "cakeshop-d4a4a.firebaseapp.com",
  projectId: "cakeshop-d4a4a",
  storageBucket: "cakeshop-d4a4a.appspot.com",
  messagingSenderId: "96331791933",
  appId: "1:96331791933:web:f1d4d49ea9b4c24c9c7454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);