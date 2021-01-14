import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import { ValidationProvider, ValidationObserver } from "vee-validate"
import VueResource from "vue-resource"

import { routes } from "./router"

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component("ValidationProvider", ValidationProvider)
Vue.component("ValidationObserver", ValidationObserver)

const router = new VueRouter({
  routes,
  mode: "history"
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
