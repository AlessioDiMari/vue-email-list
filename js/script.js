const {createApp} = Vue;

createApp({
    data(){
        return{
            emails: [

            ]
        }
    },

    mounted() {
        // utilizzando un api pusho la email generata randomicamente nel'array emails
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(
            (esito) => {
                console.log(esito.data.response);
                this.emails.push(esito.data.response)
            }
        )
    },

}).mount("#app");