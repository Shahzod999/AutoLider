import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyCbN3uWin88FMOyV3uucSZbB28_C0SuezI',
  authDomain: "autolider-f40fa.firebaseapp.com",
  projectId: "autolider-f40fa",
  storageBucket: "autolider-f40fa.appspot.com",
  messagingSenderId: "910424399550",
  appId: "1:910424399550:web:37ee8346cbcc40bed7c8ef"
};

const app = initializeApp(firebaseConfig);
export { app }
export const auth = getAuth(app)