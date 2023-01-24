import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import CepChecker from '../components/CepChecker.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/cep',
      name: 'CepChecker',
      component: CepChecker
    }
  ]
})
