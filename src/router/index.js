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
        { path: '/', name: 'Home', component: Home }
      ]
    },
  	{ path: '/open-source', name: 'Open Source', component: Page,
  	  children: [
        { path: 'ricochet', name: 'Ricochet', component: Ricochet },
        { path: 'barlow', name: 'Barlow', component: Barlow },
        { path: 'eff', name: 'EFF', component: EFF }
      ]
    },
    { path: '/publications', name: 'Publications', component: Page },
    { path: '/sketchbook', name: 'Sketchbook', component: Page },
   	{ path: '/about', name: 'About', component: Page, 
      children: [
        { path: 'contact', name: 'Contact', component: Contact }
      ]
    },
  	{ path: '/about', redirect: '/' },
  ]
})