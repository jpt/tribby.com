import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d80e85ba = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _1f7d8edf = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _426baeda = () => interopDefault(import('../pages/fonts/index.vue' /* webpackChunkName: "pages/fonts/index" */))
const _b2d1748a = () => interopDefault(import('../pages/graphic.vue' /* webpackChunkName: "pages/graphic" */))
const _ffad1b0c = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _a269f250 = () => interopDefault(import('../pages/works/index.vue' /* webpackChunkName: "pages/works/index" */))
const _2a9a33ee = () => interopDefault(import('../pages/fonts/barlow.vue' /* webpackChunkName: "pages/fonts/barlow" */))
const _9b38bf9a = () => interopDefault(import('../pages/fonts/galiano.vue' /* webpackChunkName: "pages/fonts/galiano" */))
const _3be4e896 = () => interopDefault(import('../pages/fonts/nbc-universal.vue' /* webpackChunkName: "pages/fonts/nbc-universal" */))
const _57888714 = () => interopDefault(import('../pages/fonts/tribby-grotesk.vue' /* webpackChunkName: "pages/fonts/tribby-grotesk" */))
const _23dc3b86 = () => interopDefault(import('../pages/projects/chefs-feed.vue' /* webpackChunkName: "pages/projects/chefs-feed" */))
const _423c7a03 = () => interopDefault(import('../pages/projects/edupath.vue' /* webpackChunkName: "pages/projects/edupath" */))
const _12e8d40d = () => interopDefault(import('../pages/projects/eff.vue' /* webpackChunkName: "pages/projects/eff" */))
const _43c4a156 = () => interopDefault(import('../pages/projects/nbc-universal.vue' /* webpackChunkName: "pages/projects/nbc-universal" */))
const _3817ef82 = () => interopDefault(import('../pages/projects/ricochet.vue' /* webpackChunkName: "pages/projects/ricochet" */))
const _34eb43ac = () => interopDefault(import('../pages/projects/shift.vue' /* webpackChunkName: "pages/projects/shift" */))
const _01244218 = () => interopDefault(import('../pages/projects/vpn-cash.vue' /* webpackChunkName: "pages/projects/vpn-cash" */))
const _68798965 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _d80e85ba,
    name: "about"
  }, {
    path: "/blog",
    component: _1f7d8edf,
    name: "blog"
  }, {
    path: "/fonts",
    component: _426baeda,
    name: "fonts"
  }, {
    path: "/graphic",
    component: _b2d1748a,
    name: "graphic"
  }, {
    path: "/projects",
    component: _ffad1b0c,
    name: "projects"
  }, {
    path: "/works",
    component: _a269f250,
    name: "works"
  }, {
    path: "/fonts/barlow",
    component: _2a9a33ee,
    name: "fonts-barlow"
  }, {
    path: "/fonts/galiano",
    component: _9b38bf9a,
    name: "fonts-galiano"
  }, {
    path: "/fonts/nbc-universal",
    component: _3be4e896,
    name: "fonts-nbc-universal"
  }, {
    path: "/fonts/tribby-grotesk",
    component: _57888714,
    name: "fonts-tribby-grotesk"
  }, {
    path: "/projects/chefs-feed",
    component: _23dc3b86,
    name: "projects-chefs-feed"
  }, {
    path: "/projects/edupath",
    component: _423c7a03,
    name: "projects-edupath"
  }, {
    path: "/projects/eff",
    component: _12e8d40d,
    name: "projects-eff"
  }, {
    path: "/projects/nbc-universal",
    component: _43c4a156,
    name: "projects-nbc-universal"
  }, {
    path: "/projects/ricochet",
    component: _3817ef82,
    name: "projects-ricochet"
  }, {
    path: "/projects/shift",
    component: _34eb43ac,
    name: "projects-shift"
  }, {
    path: "/projects/vpn-cash",
    component: _01244218,
    name: "projects-vpn-cash"
  }, {
    path: "/",
    component: _68798965,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
