// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnp5IJ6IOVgxpV5gPKxkB-__IKkEndBNE",
  authDomain: "gestao-despesas-6e842.firebaseapp.com",
  projectId: "gestao-despesas-6e842",
  storageBucket: "gestao-despesas-6e842.firebasestorage.app",
  messagingSenderId: "476223555348",
  appId: "1:476223555348:web:babc27fe9839ac1c5c6401",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
