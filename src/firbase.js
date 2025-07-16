import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCKqvYZzkLWMVqh2ozvhI_USu1Y_0N6EF8",
  authDomain: "netflix-clone-ff11c.firebaseapp.com",
  projectId: "netflix-clone-ff11c",
  storageBucket: "netflix-clone-ff11c.firebasestorage.app",
  messagingSenderId: "566383528315",
  appId: "1:566383528315:web:f0dc0639dce83d3badd5de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up
const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.log(err);
    toast.error(err.code.split('/')[1].split('-').join(" "));
    
  }
};

// Login
const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.log(err);
    toast.error(err.code.split('/')[1].split('-').join(" "));
  
  }
};

// Logout
const logout = async () => {
  await signOut(auth);
};

export { auth, db, login, signUp, logout };
