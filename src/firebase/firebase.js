// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider, signInWithPopup, signOut} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp26MlhvFAclppFGuIjPU_aDRxC2cBL2I",
  authDomain: "project02-3c730.firebaseapp.com",
  projectId: "project02-3c730",
  storageBucket: "project02-3c730.appspot.com",
  messagingSenderId: "68069721870",
  appId: "1:68069721870:web:829ad7a7eaec50c71ab95f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider(auth);
export const googlePopup = () => signInWithPopup(auth, provider).catch((error) => alert(error.message));
export const logOut = ()=> signOut(auth);