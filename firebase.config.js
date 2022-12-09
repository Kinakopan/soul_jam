import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcf-r1fqVWTvd8GUJBpngK1AXBsRrmayI",
  authDomain: "souljam-55ff8.firebaseapp.com",
  projectId: "souljam-55ff8",
  storageBucket: "souljam-55ff8.appspot.com",
  messagingSenderId: "62516204706",
  appId: "1:62516204706:web:9b3efbf7f1246514bbb3fb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
