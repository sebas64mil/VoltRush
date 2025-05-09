        const app = Vue.createApp({
            data() {
                return {
                    Deudors: ['pepito', 'aleja', 'Juan Jose'],
                    nuevaDeudor: ''
                };
            },
            methods: {
                // Puedes agregar métodos aquí si es necesario
                agregarDeudor() {
                    if (this.nuevaDeudor.trim() !== '') {
                        this.Deudors.push(this.nuevaDeudor);
                        this.nuevaDeudor = ''; // Limpiar el campo de entrada
                    }
                },
                eliminarDeudor(index) {
                    this.Deudors.splice(index, 1); // Eliminar la Deudor en el índice especificado
                }
               
                
            }
        });

        app.mount('#app');