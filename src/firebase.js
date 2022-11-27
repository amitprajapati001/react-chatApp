import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6JS5gxxLl7P6eqHjr7D2T5JREUfEwkW0",
  authDomain: "chat-app-77cdf.firebaseapp.com",
  projectId: "chat-app-77cdf",
  storageBucket: "chat-app-77cdf.appspot.com",
  messagingSenderId: "901181180505",
  appId: "1:901181180505:web:d036106f705e24c824ff48"
};

export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage = getStorage()
export const db = getFirestore()