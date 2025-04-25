
import { FirestoreQuery } from '../../public/modules/firestore_query.js'; 
import { FirestoreService } from '../../public/modules/firestore_service.js';// Asegúrate de que la ruta sea correcta

const queryService = new FirestoreQuery("customers");
const firebase = new FirestoreService("customers"); // asegúrate de usar minúsculas

const loginButton = document.getElementById("btnLogIn");

if (loginButton) {
    loginButton.addEventListener("click", async () => {
        const inputEmail = document.getElementById("docIdCorreoElectronico").value.trim();
        const inputPassword = document.getElementById("docIdContraseña").value.trim();

        if (!inputEmail || !inputPassword) {
            alert("We need both email and password to log in.");
            return;
        }

        const result = await queryService.whereQuery("email", "==", inputEmail);

        if (result.length === 0) {
            alert("No user found with that email.");
            return;
        }

        const userDoc = result[0];

        if (result) {
            localStorage.setItem("userName", userDoc.name);
            window.location.href = "../../Views/ShowData.html";
        } else {
            alert("Email incorrect");
        }
    });
}

document.getElementById("btngetDatabase").addEventListener("click", async () => {
    const inputDocId = document.getElementById("docIduser").value.trim();
    const inputEmail = document.getElementById("docIdCorreoElectronico").value.trim();
    const inputPassword = document.getElementById("docIdContraseña").value.trim();

    if (!inputDocId || !inputEmail || !inputPassword) {
        alert("Por favor completa todos los campos.");
        return;
    }

    try {
        const userDoc = await firebase.getDocumentById(inputDocId);

        if (!userDoc) {
            alert("❌ Usuario no encontrado.");
            return;
        }

        const emailDB = userDoc.email;
        const passwordDB = userDoc.password;

        if (emailDB === inputEmail && passwordDB === inputPassword) {
            // Convertimos todo el doc a texto legible
            const docInfo = JSON.stringify(userDoc, null, 2); // Formateado bonito
            alert(`✅ Autenticación exitosa:\n${docInfo}`);
        } else {
            alert("❌ Email o contraseña incorrectos.");
        }
    } catch (error) {
        console.error("Error al obtener el documento:", error);
        alert("❌ Ocurrió un error al acceder a la base de datos.");
    }
});





window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM Loaded: Revisando nombre de usuario");

    const userName = localStorage.getItem("userName");
    const nameDisplay = document.getElementById("namecarlos");

    if (nameDisplay) {
        nameDisplay.textContent = userName ? userName : "Invitado";
        console.log("Nombre mostrado:", nameDisplay.textContent);
    } else {
        console.warn("No se encontró el elemento #namecarlos en el DOM");
    }
});