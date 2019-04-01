import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _081c6d88 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _6fd60634 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _ab368a1a = () => interopDefault(import('../pages/fonts/index.vue' /* webpackChunkName: "pages/fonts/index" */))
const _56b77358 = () => interopDefault(import('../pages/graphic.vue' /* webpackChunkName: "pages/graphic" */))
const _21df787e = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _fc4945e0 = () => interopDefault(import('../pages/fonts/barlow.vue' /* webpackChunkName: "pages/fonts/barlow" */))
const _004a0a0c = () => interopDefault(import('../pages/fonts/galiano.vue' /* webpackChunkName: "pages/fonts/galiano" */))
const _32b81e9f = () => interopDefault(import('../pages/projects/chefs-feed.vue' /* webpackChunkName: "pages/projects/chefs-feed" */))
const _da97d4ec = () => interopDefault(import('../pages/projects/edupath.vue' /* webpackChunkName: "pages/projects/edupath" */))
const _abdd69d8 = () => interopDefault(import('../pages/projects/eff.vue' /* webpackChunkName: "pages/projects/eff" */))
const _bb2044d0 = () => interopDefault(import('../pages/projects/ricochet.vue' /* webpackChunkName: "pages/projects/ricochet" */))
const _842c9766 = () => interopDefault(import('../pages/projects/vpn-cash.vue' /* webpackChunkName: "pages/projects/vpn-cash" */))
const _5a604784 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
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
      path: "/projects/ricochet",
      component: _bb2044d0,
      name: "projects-ricochet"
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
  })
}
