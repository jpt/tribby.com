import Vue from 'vue'
import Vuex from 'vuex'

export const state = () => {
  dark: false
}

export const mutations = {
  setDark(state, data) {
    state.dark = data
  }
}