<template lang="pug">
  #app
    div.container
      nav-bar
      hr
      transition(name='fade' mode='out-in')
        router-view(:key='$route.fullPath' class='view')
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style lang="sass">
@import 'styles/fonts.scss';
@import 'styles/globals.scss';

* {
  box-model: border-box;
  padding: 0;
  margin: 0;
}

body,div,p {
  font-family: $body-font-family;
  font-size: 16px;
}

body {
  background-color: $body-bg-color;
  font-family: courier;
  color: #111;
}

#app {
  display: block;
  margin-top: 20px;
  padding-bottom: 52px;
  div.container {
  
    hr {
      display: none;
    }

      
    
    // padding: 0 2em;
    @include susy-media($md) {
      
      hr {
        @include container(80%)

        display: block;
      }
      // @include container(80%);
    }
    // @include susy-media($xl) {
    //   @include container($lg);
    // }
    // @include susy-media($xxl) {
    //   @include container($xl);
    // }
  }
}

h1 {
  font-size: 2.5em;
  font-family: $heading-font-family;
  font-weight: $heading-font-weight;
  margin-bottom: 0.6em;
  line-height: 0.85em;
}

h5 {
  font-size: 0.9em;
  margin-top: 0.6em;
  font-family: $interface-font-family;
  font-weight: 400;
  letter-spacing: 0.03em;
}

hr {
  padding: 0;
  border: none;
  // margin-top: 25px;
  // margin-bottom: 40px;
  border-top: 12px solid $grey-black;
  color: $grey-light;
  text-align: center;
}

.view {
  clear: both;
}

.fade-enter-active, .fade-leave-active {
  transition: all .15s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>