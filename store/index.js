import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {

  dark: false

}

const mutations = {

  setDark: function (state, data) {
    state.dark = data
  }
  
}

const actions = {
  
  async nuxtServerInit ({ commit, dispatch }, { res, req, route, app, store }) {

  }
}

const store = () => new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
