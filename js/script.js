const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [

            ]
        }
    },

    mounted() {

        // Creo un ciclo for per far riempire l'array 10 volte
        for(let i = 0; i < 10; i++){
            // utilizzando un api pusho la email generata randomicamente nel'array emails
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(
                (esito) => {
                    console.log(esito.data.response);
                    this.emails.push(esito.data.response)
                }
            )
        }

    },

}).mount("#app");