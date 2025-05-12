import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
        import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyANIYCtkrM7UcmFJK4AunyERlGKiHN8l1k",
            authDomain: "voltrush-c1ee8.firebaseapp.com",
            projectId: "voltrush-c1ee8",
            storageBucket: "voltrush-c1ee8.appspot.com",
            messagingSenderId: "902027158636",
            appId: "1:902027158636:web:18bcf5560098dd6f6fa449"
        };

        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // Obtener y mostrar la información de la cuenta
        async function loadUserData(userId) {
            const userRef = doc(db, "users", userId);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const data = userSnap.data();
                document.getElementById("userPhoto").src = data.photoURL || "default-profile.jpg";
                document.getElementById("userName").textContent = data.name || "";
                document.getElementById("userLastName").textContent = data.lastName || "";
                document.getElementById("userAge").textContent = data.age || "";
            } else {
                alert("No se encontró el usuario.");
            }
        }

        // Lógica de edición (puedes personalizar esto)
        document.getElementById("editBtn").addEventListener("click", () => {
            alert("Aquí iría la lógica para editar los datos.");
        });

        // Cargar datos al iniciar (ejemplo con ID fijo)
        loadUserData("usuario123"); // <-- Cambia por el ID real del usuario