import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAkyAe566weCXSVZrQKIlE82efodwLFaik",
  authDomain: "soljamfinal.firebaseapp.com",
  projectId: "soljamfinal",
  storageBucket: "soljamfinal.appspot.com",
  messagingSenderId: "853264757339",
  appId: "1:853264757339:web:0168e86425785f4b98457e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
