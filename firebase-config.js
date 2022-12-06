import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyyYVGhNP3CAG3JskrUg-8REZ_3DpwnY0",
  authDomain: "souljam-de2ed.firebaseapp.com",
  projectId: "souljam-de2ed",
  storageBucket: "souljam-de2ed.appspot.com",
  messagingSenderId: "857918259960",
  appId: "1:857918259960:web:4251002d600a4bf91ab10d"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);