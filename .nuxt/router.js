import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _081c6d88 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _6fd60634 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _ab368a1a = () => interopDefault(import('../pages/fonts/index.vue' /* webpackChunkName: "pages/fonts/index" */))
const _56b77358 = () => interopDefault(import('../pages/graphic.vue' /* webpackChunkName: "pages/graphic" */))
const _21df787e = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _fc4945e0 = () => interopDefault(import('../pages/fonts/barlow.vue' /* webpackChunkName: "pages/fonts/barlow" */))
const _004a0a0c = () => interopDefault(import('../pages/fonts/galiano.vue' /* webpackChunkName: "pages/fonts/galiano" */))
const _be478706 = () => interopDefault(import('../pages/fonts/tribby-grotesk.vue' /* webpackChunkName: "pages/fonts/tribby-grotesk" */))
const _32b81e9f = () => interopDefault(import('../pages/projects/chefs-feed.vue' /* webpackChunkName: "pages/projects/chefs-feed" */))
const _da97d4ec = () => interopDefault(import('../pages/projects/edupath.vue' /* webpackChunkName: "pages/projects/edupath" */))
const _abdd69d8 = () => interopDefault(import('../pages/projects/eff.vue' /* webpackChunkName: "pages/projects/eff" */))
const _049e499c = () => interopDefault(import('../pages/projects/nbc-universal.vue' /* webpackChunkName: "pages/projects/nbc-universal" */))
const _bb2044d0 = () => interopDefault(import('../pages/projects/ricochet.vue' /* webpackChunkName: "pages/projects/ricochet" */))
const _54712f71 = () => interopDefault(import('../pages/projects/shift.vue' /* webpackChunkName: "pages/projects/shift" */))
const _842c9766 = () => interopDefault(import('../pages/projects/vpn-cash.vue' /* webpackChunkName: "pages/projects/vpn-cash" */))
const _5a604784 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _081c6d88,
      name: "about"
    }, {
      path: "/blog",
      component: _6fd60634,
      name: "blog"
    }, {
      path: "/fonts",
      component: _ab368a1a,
      name: "fonts"
    }, {
      path: "/graphic",
      component: _56b77358,
      name: "graphic"
    }, {
      path: "/projects",
      component: _21df787e,
      name: "projects"
    }, {
      path: "/fonts/barlow",
      component: _fc4945e0,
      name: "fonts-barlow"
    }, {
      path: "/fonts/galiano",
      component: _004a0a0c,
      name: "fonts-galiano"
    }, {
      path: "/fonts/tribby-grotesk",
      component: _be478706,
      name: "fonts-tribby-grotesk"
    }, {
      path: "/projects/chefs-feed",
      component: _32b81e9f,
      name: "projects-chefs-feed"
    }, {
      path: "/projects/edupath",
      component: _da97d4ec,
      name: "projects-edupath"
    }, {
      path: "/projects/eff",
      component: _abdd69d8,
      name: "projects-eff"
    }, {
      path: "/projects/nbc-universal",
      component: _049e499c,
      name: "projects-nbc-universal"
    }, {
      path: "/projects/ricochet",
      component: _bb2044d0,
      name: "projects-ricochet"
    }, {
      path: "/projects/shift",
      component: _54712f71,
      name: "projects-shift"
    }, {
      path: "/projects/vpn-cash",
      component: _842c9766,
      name: "projects-vpn-cash"
    }, {
      path: "/",
      component: _5a604784,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
