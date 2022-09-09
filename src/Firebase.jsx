// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkFoPsEK_xlW8aOHLufyO6t7C11XvJrzI",
  authDomain: "sign-app-54c06.firebaseapp.com",
  projectId: "sign-app-54c06",
  storageBucket: "sign-app-54c06.appspot.com",
  messagingSenderId: "913764649802",
  appId: "1:913764649802:web:b1d51f13ba1514eec3cfb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);