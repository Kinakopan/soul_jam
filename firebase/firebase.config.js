// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCp4GXSiRaNFHvRYi8h5Jggocg0u0VCRjQ",
  authDomain: "souljam-c0e66.firebaseapp.com",
  projectId: "souljam-c0e66",
  storageBucket: "souljam-c0e66.appspot.com",
  messagingSenderId: "675653656470",
  appId: "1:675653656470:web:566127204207b6b93f07b7"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);