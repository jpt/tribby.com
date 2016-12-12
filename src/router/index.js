import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

import Page from '../views/Page.vue'

import Home from '../pages/Home.vue'
import Barlow from '../pages/Barlow.vue';
import Ricochet from '../pages/Ricochet.vue';
import EFF from '../pages/EFF.vue';
import Contact from '../pages/Contact.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{ path: '/', component: Page, 
      children: [
        { path: '/', component: Home }
      ]
    },
  	{ path: '/projects', component: Page,
  	  children: [
        { path: 'ricochet', component: Ricochet },
        { path: 'barlow', component: Barlow },
        { path: 'EFF', component: EFF }
      ]
    },
   	{ path: '/about', component: Page, 
      children: [
        { path: 'contact', component: Contact }
      ]
    },
  	{ path: '/about', redirect: '/' },
  ]
})