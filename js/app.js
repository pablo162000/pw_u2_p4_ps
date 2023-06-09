console.log('Componente VUE')
console.log(Vue)
/*con esto se escriben todos los componentes de vue */

const app = Vue.createApp({
    //`` estas comillas son backtips
    //template: `
    //   <h1> Hola mundo</h1>
    //   <p>Desde Vue.JS</p>
    //   <p>{{1+1}}</p> 
    //  `

    data() {
        return {
            nombre: 'Pablo',
            apellido: 'Suntaxi',
            mensaje: 'Hola mundo 2 desde Vue.JS'

        }
    },
    //OPCION DE METODOS(me permite declarar metodos en el JS)
    methods: {
        cambiarNombre() {
            console.log('cambiar nombre')
            this.nombre = 'Daniel'

        },
        cambiarApellido() {
            console.log('cambiar apellido')
            this.apellido = 'Teran'

        }
    }
})
/*se crea un identificador */
app.mount('#myApp')