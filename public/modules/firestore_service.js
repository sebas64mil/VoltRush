import { db } from '../modules/firebase_init.js';
import { collection, getDocs, getDoc, addDoc, setDoc, doc, query, where,orderBy } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

export class FirestoreService {
  constructor(collectionName) {
    this.collectionRef = collection(db, collectionName);
  }

  async getAllDocuments() {
    const snapshot = await getDocs(this.collectionRef);
    const data = [];
    snapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    return data;
  }

  async getDocumentById(id) {
    const docRef = doc(this.collectionRef, id);
    const snapshot = await getDoc(docRef);
  
    if (snapshot.exists()) {
      return { id: snapshot.id, ...snapshot.data() };
    } else {
      return null; 
    }
  }

  async PostDocument(customId, dataObject) {
    try {
      console.log(customId, dataObject);
      const docRef = doc(this.collectionRef, customId.toString());
      await setDoc(docRef, dataObject);
      console.log("Documento creado con ID:", customId);
      alert("Documento creado con éxito.");
    } catch (e) {
      console.error("Error al crear el documento:", e);
      alert("Error al crear el documento.");
    }
  }

  // 🔍 Consulta dinámica con múltiples filtros, orden y límite
  async combinedQuery(filters = [], order = null, limitNum = null) {
    try {
      let q = this.collectionRef;

      // Aplicar filtros where encadenados
      if (filters.length > 0) {
        filters.forEach(({ column, comparison, value }) => {
          q = query(q, where(column, comparison, value));
        });
      }

      // Aplicar orden
      if (order && order.column) {
        q = query(q, orderBy(order.column, order.direction || "asc"));
      }

      // Aplicar límite
      if (limitNum && !isNaN(limitNum)) {
        q = query(q, firestoreLimit(limitNum));
      }

      const snapshot = await getDocs(q);
      const results = [];
      snapshot.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      return results;
    } catch (error) {
      console.error("Error en combinedQuery:", error);
      return [];
    }
  }
}

