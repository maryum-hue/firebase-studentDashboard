// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


export {
  collection,
  addDoc,
  doc,
  onSnapshot,
  deleteDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC9ZteNI5jYVds6UKVrUOVUeuMkHS-3sfY",
  authDomain: "loginsignup-399e0.firebaseapp.com",
  projectId: "loginsignup-399e0",
  storageBucket: "loginsignup-399e0.appspot.com",
  messagingSenderId: "972809079302",
  appId: "1:972809079302:web:4cfbac666309cf04b3d187",
  measurementId: "G-69VR74DZ5X"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
