<template>
    <section class="cepChecker">
        <label for="">Seu CEP:</label>
        <input v-focus="true" @keyup.enter="checkCep" v-mask="'99999-999'" type="text">
        <div v-show="hasAddress()">
            <p>Rua: {{ address.logradouro }}</p>
            <p>Bairro: {{ address.bairro }}</p>
            <p>Cidade: {{ address.cidade }}</p>
            <p>Estado: {{ address.estado }}</p>
        </div>
        <div>
            <br>
            <router-link to="/">Home</router-link>
        </div>
        <footer-todo>
            <p>CEP MIT License</p>
        </footer-todo>
    </section>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import Focus from '../directives/focus'
import FooterTodo from './FooterTodo.vue'

export default {
    components: {
        FooterTodo
    },
    data() {
        return {
            address: {}
        }
    },
    directives: {
        'mask': AwesomeMask,
        'focus': Focus
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

<style>
.home{
  text-decoration: none;
  font-size: 16px;
  display: block;
  padding: 5px;
  text-align: center;
}
.cepChecker{
  margin: 20px 0;
  text-align: center;
}
.cepChecker label {
    display: block;
}
.cepChecker input {
    margin: 20px;
    height: 2em;
    padding: 2px;
}
</style>