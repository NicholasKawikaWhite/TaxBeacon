import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  collection,
  getDocs,
  getFirestore,
  addDoc,
  serverTimestamp,
  deleteDoc,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlzywQhcxNZ58Z75_vbt8gKCrm2lvm-Vk",
  authDomain: "tax-beacon.firebaseapp.com",
  projectId: "tax-beacon",
  storageBucket: "tax-beacon.appspot.com",
  messagingSenderId: "435786837850",
  appId: "1:435786837850:web:ba0a567104193dbcf3cd63",
  measurementId: "G-THRBZ6WQK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    db,
    auth
}