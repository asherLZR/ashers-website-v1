import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js'
import 'materialize-css/dist/css/materialize.css'

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'   //TODO: https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
