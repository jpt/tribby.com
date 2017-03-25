<template lang="pug">
  #app
    nav-bar
    
    headroom(v-bind:onPin="menuPin" v-bind:onUnpin="menuUnpin" v-bind:class="{ pinned: menuPinned }")
      nav-bar
    div.container
      hr
      transition(name='fade' mode='out-in')
        router-view(:key='$route.fullPath' class='view')
</template>

<script>
import NavBar from './components/NavBar.vue'
import headroom from './vendor/vue-headroom/headroom.vue'

export default {
  data: function() {
    return {
      menuPinned: false
    }
  },
  methods: {
    menuPin() {
      this.menuPinned = true
    },
    menuUnpin() {
      this.menuPinned = false
    }
  },
  components: { NavBar, headroom }
}
</script>

<style lang="sass">
@import 'styles/fonts.scss';
@import 'styles/globals.scss';

// .headroom {
//   translate 
// }
// .headroom-wrapper.pinned > div > nav {

// }

.sidebar {
  position: absolute;
  left: -100%;
  display: none !important;
  visibility: hidden;
}
// div.headroom-wrapper > div.headroom {
//   // position: fixed !important;
//   top: 0;
// }

// .pinned > div.headroom {
//   position: fixed !important;
// }
// .navbar.clone {
//   // display: none;
// }

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
  // margin-top: 40px;
  padding-bottom: 52px;
  // @include susy-media($md) {
  //   padding-top: 200px;
  // }
  div.container {
  
    hr {
      display: none;
    }

      
    
    // padding: 0 2em;
    @include susy-media($md) {
      
      hr {
        @include container($container)

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
// img {
//   z-index: -1;
// }
h1 {
  font-size: 1.8em;
  font-family: $heading-font-family;
  font-weight: $heading-font-weight;
  margin-bottom: 0.6em;
  line-height: 1.1em;
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