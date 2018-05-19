import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _7c47fb59 = () => import('../pages/sketchbook.vue' /* webpackChunkName: "pages/sketchbook" */).then(m => m.default || m)
const _081c6d88 = () => import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */).then(m => m.default || m)
const _6fd60634 = () => import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */).then(m => m.default || m)
const _21df787e = () => import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */).then(m => m.default || m)
const _ab368a1a = () => import('../pages/fonts/index.vue' /* webpackChunkName: "pages/fonts/index" */).then(m => m.default || m)
const _32b81e9f = () => import('../pages/projects/chefs-feed.vue' /* webpackChunkName: "pages/projects/chefs-feed" */).then(m => m.default || m)
const _abdd69d8 = () => import('../pages/projects/eff.vue' /* webpackChunkName: "pages/projects/eff" */).then(m => m.default || m)
const _004a0a0c = () => import('../pages/fonts/galiano.vue' /* webpackChunkName: "pages/fonts/galiano" */).then(m => m.default || m)
const _fc4945e0 = () => import('../pages/fonts/barlow.vue' /* webpackChunkName: "pages/fonts/barlow" */).then(m => m.default || m)
const _a432c21c = () => import('../pages/about/bio.vue' /* webpackChunkName: "pages/about/bio" */).then(m => m.default || m)
const _da97d4ec = () => import('../pages/projects/edupath.vue' /* webpackChunkName: "pages/projects/edupath" */).then(m => m.default || m)
const _842c9766 = () => import('../pages/projects/vpn-cash.vue' /* webpackChunkName: "pages/projects/vpn-cash" */).then(m => m.default || m)
const _9015fdec = () => import('../pages/about/contact.vue' /* webpackChunkName: "pages/about/contact" */).then(m => m.default || m)
const _5a604784 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
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


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/sketchbook",
			component: _7c47fb59,
			name: "sketchbook"
		},
		{
			path: "/about",
			component: _081c6d88,
			name: "about"
		},
		{
			path: "/blog",
			component: _6fd60634,
			name: "blog"
		},
		{
			path: "/projects",
			component: _21df787e,
			name: "projects"
		},
		{
			path: "/fonts",
			component: _ab368a1a,
			name: "fonts"
		},
		{
			path: "/projects/chefs-feed",
			component: _32b81e9f,
			name: "projects-chefs-feed"
		},
		{
			path: "/projects/eff",
			component: _abdd69d8,
			name: "projects-eff"
		},
		{
			path: "/fonts/galiano",
			component: _004a0a0c,
			name: "fonts-galiano"
		},
		{
			path: "/fonts/barlow",
			component: _fc4945e0,
			name: "fonts-barlow"
		},
		{
			path: "/about/bio",
			component: _a432c21c,
			name: "about-bio"
		},
		{
			path: "/projects/edupath",
			component: _da97d4ec,
			name: "projects-edupath"
		},
		{
			path: "/projects/vpn-cash",
			component: _842c9766,
			name: "projects-vpn-cash"
		},
		{
			path: "/about/contact",
			component: _9015fdec,
			name: "about-contact"
		},
		{
			path: "/",
			component: _5a604784,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
