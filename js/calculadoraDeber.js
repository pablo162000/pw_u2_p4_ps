

const app = Vue.createApp({

    data(){
        return {
            entrada: '',
            
            numero:''
        }
    }
,
    methods:{
        calculo() {
            
            this.entrada = eval(this.entrada)
        }, 


        agregarToLabel(entrada) {
                this.entrada += entrada;
        
        }

    }

})


app.mount('#myApp4')
