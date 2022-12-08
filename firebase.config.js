import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbKIePCtA6V14FgnjDS-eEJ96gfz5ugw0",
  authDomain: "souljam2-cfebc.firebaseapp.com",
  projectId: "souljam2-cfebc",
  storageBucket: "souljam2-cfebc.appspot.com",
  messagingSenderId: "114321363258",
  appId: "1:114321363258:web:9390d92aeb1ef1b37e8003"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
