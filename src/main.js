import Vue from 'vue'
import App from './App'

import vueRouter from 'vue-router'
import router from './router'

import {BootstrapVue, IconsPlugin} from  'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(vueRouter)

// Instalar BootstrapVue
Vue.use (BootstrapVue)
// Instale opcionalmente el complemento de componentes de iconos BootstrapVue 
Vue.use (IconsPlugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: { App },
  template: '<App/>'
})
