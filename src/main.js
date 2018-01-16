import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './Routes'
import * as firebase from 'firebase'
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
  router: router,
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB9bM1lupwcooEBt4JwFphTHDxrCRshaVI',
      authDomain: 'alheak-vapor-shop-c6cb1.firebaseapp.com',
      databaseURL: 'https://alheak-vapor-shop-c6cb1.firebaseio.com',
      projectId: 'alheak-vapor-shop-c6cb1',
      storageBucket: 'alheak-vapor-shop-c6cb1.appspot.com'
    })
  }
})
