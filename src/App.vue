<template lang="pug">
  #app
    nav-bar
    
    img.hamburger.top(@click="toggleSide" src="./assets/nav.svg" alt="Open Menu")
    headroom(:onPin="menuPin" v-bind:onUnpin="menuUnpin" v-bind:class="{ pinned: menuPinned }")
      nav-bar
      img.hamburger(@click="toggleSide" src="./assets/nav.svg" alt="Open Menu")

    nav-bar.side
    img.close(@click="toggleSide" src="./assets/close.svg" alt="Close Menu")
    div.container
      hr
      transition(name='fade' mode='out-in')
        router-view(:key='$route.fullPath' class='view')
</template>

<script>
import NavBar from './components/NavBar.vue'
import headroom from './vendor/vue-headroom/headroom.vue'
import router from './router'


export default {
  data: function() {
    return {
      menuPinned: false
    }
  },
  methods: {
    toggleSide() {
      if(document.body.classList == 'active') {
        document.body.classList = '';
      } else {
        document.body.classList = 'active';
      }
    },
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


body.active {
  overflow: hidden;
  #app > *:not(.headroom-wrapper):not(.close) {

    transform: translate3d(-270px, 0, 0);

  }
  #app > .headroom-wrapper > .headroom {
    overflow: hidden;
    transform: translate3d(-270px,0,0) !important;
    top: 0;
  }

  #app {
    img.close {
      display: block;
    }
  }
}

#app > * {
  transition: transform 120ms ease-in-out;
}



img.close {
  display: none;
}




img.hamburger,img.close {

  position: fixed;
  right: 20px;
  height: 1.2em;
  top: 14px;
  width: auto;
  z-index: 9999999;

  &:hover {
    cursor: pointer;
  }
  @include susy-media($md) {
    display: none;
  }

}

.hamburger.top {
  position: absolute;
}


* {
  -webkit-font-smoothing: subpixel-antialiased;
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

    }

  }
}

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