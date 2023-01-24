<template>
    <section>
        <label for="">Seu CEP:</label>
        <input @keyup.enter="checkCep" type="text">
        <div v-show="hasAddress()">
            <p>Rua: {{ address.logradouro }}</p>
            <p>Bairro: {{ address.bairro }}</p>
            <p>Cidade: {{ address.cidade }}</p>
            <p>Estado: {{ address.estado }}</p>
        </div>
        <router-link to="/">Home</router-link>
    </section>
</template>

<script>
export default {
    data() {
        return {
            address: {}
        }
    },
    methods: {
        checkCep($event) {
            let cep = $event.target.value
            this.$http.get('https://api.postmon.com.br/v1/cep/' + cep)
            .then((response) => {
                this.address = response.body
                console.log(this.address)
            })
        },
        hasAddress() {
            return Object.keys(this.address).length > 0
        }
    }
}
</script>