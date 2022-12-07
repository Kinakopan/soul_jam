import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgR8qMWhjU0YFr4AHdNgi1Ghli2Ktk3p0",
  authDomain: "souljam-46981.firebaseapp.com",
  projectId: "souljam-46981",
  storageBucket: "souljam-46981.appspot.com",
  messagingSenderId: "259611567402",
  appId: "1:259611567402:web:761b9a5c1c48382977aa53"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);