console.log('Componente VUE')
console.log(Vue)
/*con esto se escriben todos los componentes de vue */

const app=Vue.createApp({
    //`` estas comillas son backtips
    template: `
     <h1> Hola mundo</h1>
     <p>Desde Vue.JS</p>   
    `
})
/*se crea un identificador */
app.mount('#myApp')