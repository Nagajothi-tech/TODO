
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNNmKJU969tXA30Olq_onZN4fLCyBPSPc",
    authDomain: "todo-list-d5fc5.firebaseapp.com",
    databaseURL: "https://todo-list-d5fc5-default-rtdb.firebaseio.com",
    projectId: "todo-list-d5fc5",
    storageBucket: "todo-list-d5fc5.firebasestorage.app",
    messagingSenderId: "63709325784",
    appId: "1:63709325784:web:467b60094c4a0fbb98aaad",
    measurementId: "G-LM4SNQGMG8"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  
  export { db };