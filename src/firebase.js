import { getDatabase } from 'firebase/database'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBa5QyGVdJpE_J3sbutwe3KDEWziXQO7bI",
  authDomain: "task-manager-560d5.firebaseapp.com",
  projectId: "task-manager-560d5",
  storageBucket: "task-manager-560d5.appspot.com",
  messagingSenderId: "53148818653",
  appId: "1:53148818653:web:9f4e8db46569df3ca20f34"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)