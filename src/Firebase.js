import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_8JDawuvvz_mKhIkJ4gaJ5BiKPrz8lZc",
  authDomain: "remember-d2713.firebaseapp.com",
  projectId: "remember-d2713",
  storageBucket: "remember-d2713.appspot.com",
  messagingSenderId: "617357813854",
  appId: "1:617357813854:web:42eb6a182e4db286de6ccf",
  measurementId: "G-XZ138S1T22"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

