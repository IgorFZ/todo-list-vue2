// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'


import App from './App'
import router from './router'


import store from './store/index'

//chamadas http
import VueResource from 'vue-resource'
Vue.use(VueResource)

//adicionando plugins
import VueEvents from './plugins/events'
Vue.use(VueEvents)


/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  components: { App },
  template: `
    <div class="app">
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
    </div>
  `
})