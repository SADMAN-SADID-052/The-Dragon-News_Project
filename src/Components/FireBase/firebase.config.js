// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4VNUi6NJ3_8emcZRdZvbUqjRXDePv-nU",
  authDomain: "dragon-news-project-fd18f.firebaseapp.com",
  projectId: "dragon-news-project-fd18f",
  storageBucket: "dragon-news-project-fd18f.firebasestorage.app",
  messagingSenderId: "667854123328",
  appId: "1:667854123328:web:44611b16e9022d47604aa5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;