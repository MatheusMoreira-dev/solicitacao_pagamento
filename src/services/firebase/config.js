// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJQ_kYTgnCrVqtSUqklAh4Nrr7LmBL-4c",
  authDomain: "documento-ci.firebaseapp.com",
  databaseURL: "https://documento-ci-default-rtdb.firebaseio.com",
  projectId: "documento-ci",
  storageBucket: "documento-ci.firebasestorage.app",
  messagingSenderId: "365704933998",
  appId: "1:365704933998:web:e393a40cd50c61b08f2c7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
