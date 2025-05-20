import { FirestoreService } from '../../public/modules/firestore_service.js';

const firestore = new FirestoreService("Deudores");

const app = Vue.createApp({
  data() {
    return {
      ids: [],
      nombres: [],
      apellidos: []
    };
  },
  async mounted() {
    const docs = await firestore.getAllDocuments();

    this.ids = docs.map(doc => doc.ID);
    this.nombres = docs.map(doc => doc.Nombre);
    this.apellidos = docs.map(doc => doc.Apellido);
  }
});

app.mount('#app');
