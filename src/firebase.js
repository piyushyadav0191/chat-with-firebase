import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6t8bN-Gp-V82qoRk-QlPzWLGAewkhQLg",
  authDomain: "chat-app-64b96.firebaseapp.com",
  projectId: "chat-app-64b96",
  storageBucket: "chat-app-64b96.appspot.com",
  messagingSenderId: "866915687978",
  appId: "1:866915687978:web:81d6f1dfee9eddc45a6d53",
  measurementId: "G-HK09XF82WD"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()