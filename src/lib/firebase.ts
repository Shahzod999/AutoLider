import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCEbeRw90iMDLfdfoRQDmGD1MR3XGUbXBQ",
  authDomain: "autocar-8e5f7.firebaseapp.com",
  projectId: "autocar-8e5f7",
  storageBucket: "autocar-8e5f7.appspot.com",
  messagingSenderId: "816830113238",
  appId: "1:816830113238:web:aa89761010eb891feeb077",
  measurementId: "G-23JKYS3RHK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)