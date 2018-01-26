import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './Routes'
import VueMeta from 'vue-meta'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueMeta)

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
