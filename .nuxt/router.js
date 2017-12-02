import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5a604784 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _fc4945e0 = () => import('../pages/fonts/barlow.vue' /* webpackChunkName: "pages/fonts/barlow" */).then(m => m.default || m)
const _7751d793 = () => import('../pages/fonts/barlow/index.vue' /* webpackChunkName: "pages/fonts/barlow/index" */).then(m => m.default || m)
const _b48218de = () => import('../pages/fonts/blog.vue' /* webpackChunkName: "pages/fonts/blog" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _5a604784,
			name: "index"
		},
		{
			path: "/fonts/barlow",
			component: _fc4945e0,
			children: [
				{
					path: "",
					component: _7751d793,
					name: "fonts-barlow"
				}
			]
		},
		{
			path: "/fonts/blog",
			component: _b48218de,
			name: "fonts-blog"
		}
    ],
    fallback: false
  })
}
