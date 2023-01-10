import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9GzEYZH5f1Cp4kx6Mz7Lq0vSts7XwkNQ",
  authDomain: "friendly-10-1-23date.firebaseapp.com",
  projectId: "friendly-10-1-23date",
  storageBucket: "friendly-10-1-23date.appspot.com",
  messagingSenderId: "857140335770",
  appId: "1:857140335770:web:9b69b3cf145313c1247b23",
  measurementId: "G-4QTNHG6E7T",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
