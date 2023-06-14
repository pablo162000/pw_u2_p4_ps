
const arreglo = []


const app = Vue.createApp({
    data() {
        return {
            miarreglo: arreglo,
            placa: '',
            marca: '',
            modelo: '',
            kilometraje: ''
        }
    },
    methods: {
        agregarAuto() {
            console.log('Valor de placa:', this.placa);
            console.log('Valor de marca:', this.marca);
            console.log('Valor de modelo:', this.modelo);
            console.log('Valor de kilometraje:', this.kilometraje);

            const nuevoAuto = {
                placa: this.placa,
                marca: this.marca,
                modelo: this.modelo,
                kilometraje: this.kilometraje
            };

            this.miarreglo.push(nuevoAuto);            
            console.log('Nuevo auto agregado:', nuevoAuto);
            console.log('Arreglo de autos:', this.miarreglo);

            this.placa = '';
            this.marca = '';
            this.modelo = '';
            this.kilometraje = '';
        }
    }
});

app.mount('#myApp3');