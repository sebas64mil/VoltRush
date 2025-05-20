    import { FirestoreService } from '../../public/modules/firestore_service.js';



    const firestore = new FirestoreService("Deudores");




document.getElementById("addDocBtn").addEventListener("click", async () => {
    const Cantidad = parseInt(document.getElementById("Cuantos").value.trim());

    if (!Cantidad || Cantidad <= 0) {

        return;
    }

    for (let i = 0; i <= Cantidad; i++) {
        const docId = i.toString().padStart(3, '0'); // 001, 002, etc.

        const data = {
            ID: i,
            Nombre: `user${i}`,
            Apellido: `apellido${i}`
        };

        try {
            await firestore.PostDocument(docId, data);

        } catch (error) {
            console.error(`Error al agregar documento ${docId}:`, error);
        }
    }

});
