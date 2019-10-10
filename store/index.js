import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => ({
  dark: false,
  menuOpen: false,
  cartOpen: false,
  loggedIn: false,
  user: '',
  pageTitle: '',
  cartItems: [
	{
	 productId: 1,
	 productName: 'Tribby Grotesk Medium',
	 productLicense: 'computer',
	 productUsers: 2,
	 productPrice: 39.00,
	},

  ]
})


// export const actions = {
// 	toggleMenu(menuState) {
// 		state.commit('toggleMenu', menuState)
// 	}
// }


export const mutations = {
  toggleCart(state, data) {
  	state.cartOpen = data
  },
  setDark(state, data) {
    state.dark = data
  },
  toggleMenu(state, data) {
  	state.menuOpen = data
  }
}