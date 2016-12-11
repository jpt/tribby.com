import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

import Home from '../pages/Home.vue'
import Store from '../pages/Store.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{ path: '/', component: Home },
    { path: '/store', component: Store }
  ]
})