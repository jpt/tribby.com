<template>
  <div class="container">
    <div class="index">
      <div class="announce" v-in-viewport.once>
        <h1>Designing and engineering type, products, and digital experiences.</h1>
      </div>
      <div class="soon" v-observe-visibility="visibilityChanged">
        <h1>Coming soon.</h1>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'

import { ObserveVisibility } from 'vue-observe-visibility'
import inViewportDirective from 'vue-in-viewport-directive'



  // import VueIsInView from 'vue-is-in-view';
  // Vue.use(VueIsInView);

  
Vue.directive('observe-visibility', ObserveVisibility)
Vue.directive('in-viewport', inViewportDirective)

export default {

  data() {
    return {
      animate: true
    }

  },
  transition: 'page',
  methods: {
    visibilityChanged (isVisible) {
      this.$store.commit('setDark', isVisible)
    }
  }
}
</script>
<style lang="scss" scoped>

@import "~assets/css/globals.scss";
@import "~assets/css/fonts.scss";

.soon h1 {
  color: $white;
  margin-top: 20em;
  margin-bottom: 2em;
}

.announce.in-viewport {
  opacity: 1;
  transform: translate3d(0,0,0);
}
.announce {
  transition: opacity 800ms ease-out, transform 500ms ease-out;
  transform: translate3d(0,50px,0);
  margin-bottom: 200px;

  top: 0;
  opacity: 0;
  height: 100vh;
  padding-top: 33vh;
  @include breakpoint($md) {
    padding-top:40px;
  }
   @include breakpoint($lg) {
    padding-top:80px;
  }

  margin-right: 10%;
  max-width: 1150px;

  h1 {
    font-family: 'Tribby No 5';
    font-weight: 500;
    font-size: 8vw;
    @include breakpoint($md) {
      font-size: 3.5em;
      font-family: 'Tribby No 5';
      font-weight: 500;
    }
  }
}
img {
  width: 100%;
  @include breakpoint($md) {
     max-width: 1440px;
    padding-left: (100% - $container) / 2;
     padding-right: (100% - $container) / 2;
  }
}

h1 {
  // word-break: break-all;
  font-family: 'Tribby No 5';
  font-weight: 500;
  letter-spacing: -3px;
  font-size: 2em;
  line-height: 1.25em;
}


</style>
