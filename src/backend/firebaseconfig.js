// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxSCCwUOdDmTYESi7IJ_c5Wv51qwVGboE",
  authDomain: "project-1714.firebaseapp.com",
  projectId: "project-1714",
  storageBucket: "project-1714.firebasestorage.app",
  messagingSenderId: "921835467124",
  appId: "1:921835467124:web:b850d9e21ab090fe937c21"
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export let __AUTH = getAuth(firebaseApp);
export let __DB = getFirestore(firebaseApp);

export default firebaseApp;