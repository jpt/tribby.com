import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'

import Page from '../views/Page.vue'

import Home from '../pages/Home.vue'
import Barlow from '../pages/Barlow.vue';
import Ricochet from '../pages/Ricochet.vue';
import EFF from '../pages/EFF.vue';
import Contact from '../pages/Contact.vue';
import About from '../pages/About.vue';
import Projects from '../pages/Projects.vue';
import Store from '../pages/Store.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  	{ path: '/', component: Page, 
      children: [
        { path: '/', name: 'Home', component: Home }
      ]
    },
  	{ path: '/projects', component: Page,
  	  children: [
        { path: '', name: 'Projects', component: Projects },
        { path: 'ricochet', name: 'Ricochet', component: Ricochet },
        { path: 'barlow', name: 'Barlow', component: Barlow },
        { path: 'eff', name: 'EFF', component: EFF },
        { path: '', name: 'More...', component: Projects },

      ]
    },
   	{ path: '/about', component: Page, 
      children: [
        { path: '', name: 'About', component: About },
        { path: 'contact', name: 'Contact', component: Contact }
      ]
    },
    { path: '/store', component: Page,
      children: [
        { path: '', name: 'Store', component: Store }
      ]
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

