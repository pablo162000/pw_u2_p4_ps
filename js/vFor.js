/* se realiza una lista para poder recorrer elementos con vue*/

const estudiante1 = { nombre: "Pablo", apellido: "Suntaxi" }
const estudiante2 = { nombre: "Xavier", apellido: "Paez" }
const estudiante3 = { nombre: "Romina", apellido: "Ramirez" }
const estudiante4 = { nombre: "Michael", apellido: "Garcia" }
const estudiante5 = { nombre: "Xavier", apellido: "Aguilar" }
const estudiante6 = { nombre: "Axel", apellido: "Flores" }
const estudiante7 = { nombre: "Josue", apellido: "Masabanda" }
const estudiante8 = { nombre: "Kevin", apellido: "Chiguano" }
const estudiante9 = { nombre: "Erick", apellido: "Solano" }
const estudiante10 = { nombre: "Fernando", apellido: "Mosquera" }

const arreglo = [estudiante1,
    estudiante2, estudiante3, estudiante4, estudiante5,
    estudiante6, estudiante7, estudiante8, estudiante9, estudiante10]

console.log(arreglo)


const app = Vue.createApp({
    data() {
        return {
            miarreglo: arreglo,
            nombre:'Pablo'
        }
    },
    methods:{
        agregarEstudiante(event){
            console.log('Vamos agregar')
            console.log(this.nombre)
            console.log(event)
            console.log(event.charCode)
            if(event.charCode=='13'){

                console.log('presiono enter')
                const nuevoEstudiante={
                    nombre: this.nombre,
                    apellido: 'NuevoApellido '
                }
                this.miarreglo.unshift(nuevoEstudiante)
            }else{
                console.log('no es enter')
            }

        },
        
        agregarEstudiante2(){
            console.log('Vamos agregar')
            const nuevoEstudiante={
                nombre: this.nombre
            }
            this.miarreglo.unshift(nuevoEstudiante)

        }

    }
})



app.mount('#myApp2')

