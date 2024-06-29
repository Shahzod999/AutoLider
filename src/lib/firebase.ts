import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "autolider-f40fa.firebaseapp.com",
  projectId: "autolider-f40fa",
  storageBucket: "autolider-f40fa.appspot.com",
  messagingSenderId: "910424399550",
  appId: "1:910424399550:web:37ee8346cbcc40bed7c8ef"
};

const app = initializeApp(firebaseConfig);