import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJjkUHau4j0I151iXoWeTQ39sQCuLtZT8",
  authDomain: "beats-learning.firebaseapp.com",
  projectId: "beats-learning",
  storageBucket: "beats-learning.firebasestorage.app",
  messagingSenderId: "299858444333",
  appId: "1:299858444333:web:59f3ff8e061a05ed7cf8a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
export const auth = getAuth(app);