import Vue from 'vue'
import App from './App.vue'
import router from './router'



const app = new Vue(Vue.util.extend({ router }, App))


export { app, router }