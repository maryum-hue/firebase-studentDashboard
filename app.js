// app.js


import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Firebase Firestore
import { getFirestore, collection, addDoc, getDocs } 
  from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyC9ZteNI5jYVds6UKVrUOVUeuMkHS-3sfY",
  authDomain: "loginsignup-399e0.firebaseapp.com",
  projectId: "loginsignup-399e0",
  storageBucket: "loginsignup-399e0.appspot.com",
  messagingSenderId: "972809079302",
  appId: "1:972809079302:web:4cfbac666309cf04b3d187",
  measurementId: "G-69VR74DZ5X"
};




export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);


// Toggle Tabs
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const showLogin = document.getElementById("showLogin");
const showSignup = document.getElementById("showSignup");

showLogin.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  showLogin.classList.add("active");
  showSignup.classList.remove("active");
});

showSignup.addEventListener("click", () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  showSignup.classList.add("active");
  showLogin.classList.remove("active");
});

// Signup
document.getElementById("signupBtn").addEventListener("click", () => {
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      Swal.fire("Success", "Signup successful!", "success")
        .then(() => {
          // Show login form after signup
          loginForm.classList.remove("hidden");
          signupForm.classList.add("hidden");
          showLogin.classList.add("active");
          showSignup.classList.remove("active");
        });
    })
    .catch(error => {
      Swal.fire("Error", error.message, "error");
    });
});

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      Swal.fire("Welcome", "Login successful!", "success")
        .then(() => window.location.href = "main.html");
    })
    .catch(error => {
      Swal.fire("Error", error.message, "error");
    });
});




