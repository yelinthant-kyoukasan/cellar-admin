import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFF01sEwClc17LyC8C-JDik9JQF01a9KI",
  authDomain: "cellar-online-shop-f0e26.firebaseapp.com",
  projectId: "cellar-online-shop-f0e26",
  storageBucket: "cellar-online-shop-f0e26.appspot.com",
  messagingSenderId: "687870785000",
  appId: "1:687870785000:web:e71b49f3f47a1f851c605d",
  measurementId: "G-LEX0Y4VYC9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


