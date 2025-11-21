import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
 apiKey: "AIzaSyCcccpF8v0OcrthcQlEirXEeWWu1LXC2Rs",
  authDomain: "gestor-tareas-a659d.firebaseapp.com",
  projectId: "gestor-tareas-a659d",
  storageBucket: "gestor-tareas-a659d.firebasestorage.app",
  messagingSenderId: "881133041122",
  appId: "1:881133041122:web:698a78586f72960f4c75bb"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

