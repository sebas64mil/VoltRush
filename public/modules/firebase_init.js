// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const firebaseConfig = {
//   apiKey: "AIzaSyBBgoWaCd6APngiq3Jv-d4abmByqZyFxJ8",
//   authDomain: "db-multimedia.firebaseapp.com",
//   projectId: "db-multimedia",
//   storageBucket: "db-multimedia.firebasestorage.app",
//   messagingSenderId: "703694156223",
//   appId: "1:703694156223:web:cd702f775e4417841db10a"
// };

const firebaseConfig = {
  apiKey: "AIzaSyANIYCtkrM7UcmFJK4AunyERlGKiHN8l1k",
  authDomain: "voltrush-c1ee8.firebaseapp.com",
  projectId: "voltrush-c1ee8",
  storageBucket: "voltrush-c1ee8.firebasestorage.app",
  messagingSenderId: "902027158636",
  appId: "1:902027158636:web:18bcf5560098dd6f6fa449"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };