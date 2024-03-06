// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA584DypkdiTzqVqK0I0vGb6x6CRE2__3g",
    authDomain: "nobaber-chat.firebaseapp.com",
    projectId: "nobaber-chat",
    storageBucket: "nobaber-chat.appspot.com",
    messagingSenderId: "737105371612",
    appId: "1:737105371612:web:e789f39dad0fef0c712f19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();