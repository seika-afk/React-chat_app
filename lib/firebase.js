// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "reactchatapp-71d22.firebaseapp.com",
    projectId: "reactchatapp-71d22",
    storageBucket: "reactchatapp-71d22.appspot.com",
    messagingSenderId: "47911008613",
    appId: "1:47911008613:web:b85d47fc09201dd587898c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth()

export const db = getFirestore()

export const storage = getStorage()