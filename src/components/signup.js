import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { 
  getFirestore, 
  collection, 
  addDoc,          
  Timestamp 
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyANIYCtkrM7UcmFJK4AunyERlGKiHN8l1k",
  authDomain: "voltrush-c1ee8.firebaseapp.com",
  projectId: "voltrush-c1ee8",
  storageBucket: "voltrush-c1ee8.firebasestorage.app",
  messagingSenderId: "902027158636",
  appId: "1:902027158636:web:18bcf5560098dd6f6fa449"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const salesTotal = parseFloat(document.getElementById("salesTotal").value);

    if (!email || !name || !password || !phone || isNaN(salesTotal)) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const customerData = {
      email,
      name,
      password,
      phone,
      sales: [
        {
          salesDate: Timestamp.fromDate(new Date()),
          salesTotal: salesTotal
        }
      ]
    };

    console.log("Customer data to add:", customerData);

    try {
      await addDoc(collection(db, "customers"), customerData);
      alert("Customer added successfully with auto-generated ID!");
    } catch (error) {
      console.error("Error adding customer:", error);
      alert("Failed to add customer.");
    }
  });
});