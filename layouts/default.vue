<template>
  <div id="app" :class="[pageClass, { dark: this.$store.state.dark }]">
    <navbar class="header" :class="pageClass"></navbar>
    <img class="hamburger top" @click="toggleSide" src="~assets/nav.svg" alt="Open Menu"/>
    <headroom :offset="280">
      <navbar class="sticky" :class="[ pageClass, {dark: this.$store.state.dark}]"></navbar>
      <img class="hamburger" @click="toggleSide" src="~assets/nav.svg" alt="Open Menu"/>
    </headroom>
    <navbar class="side" :class="pageClass"></navbar>
    <img class="close" @click="toggleSide" src="~assets/close.svg" alt="Close Menu"/>
    <nuxt/>
  </div>
</template>
<script>
import navbar from '@/components/navbar.vue';
import headroom from '@/components/vue-headroom/src/headroom.vue';


export default {
  data: function() {
    return {
      menuPinned: false
    }
  },
  methods: {
    toggleSide () {
      if(document.body.classList == 'active') {
        document.body.classList = '';
      } else {
        document.body.classList = 'active';
      }
    },
    menuPin () {
      this.menuPinned = true
    },
    menuUnpin () {
      this.menuPinned = false
    }
  },
  computed: {
    pageClass: function () {
      if(this.$route.path == '/') {
        this.$store.commit('setDark', false)
        return 'front-page'
      } else if(this.$route.path.startsWith('/fonts/barlow')) {
        this.$store.commit('setDark', true)
        return 'barlow'
      } else if(this.$route.path.startsWith('/projects/chefs')) {
        this.$store.commit('setDark', false)
        return 'sub-page chefs-feed'
      } else if(this.$route.path.startsWith('/projects/vpn')) {
        this.$store.commit('setDark', true)
        return 'sub-page vpn-cash'
      } else {
        this.$store.commit('setDark', false)
        return 'sub-page'
      }
    }
  },
  components: { 
    navbar, headroom
  }
}
</script>
</template>
<style lang="scss">
@import '~assets/css/globals.scss';
@import '~assets/css/fonts.scss';

body, html {
  background-color: $white;
}
.barlow nav {
  display: none !important;
}
html {
  font-family: "Barlow Regular", "Helvetica Neue", -apple-system,  Arial, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.headroom--top.headroom--pinned {
  transform: translate3d(0,-300%,0) !important;
  z-index: -20 !important;
  // display: none !important;
}

#app {
  min-height: 100vh;
  padding-bottom: 20px;
}
#app.vpn-cash {
  color: $white;
  // background: linear-gradient(to bottom right, $darkish-blue, $dark-blue);
  background-color: $dark-blue !important;
  nav {
    background: $dark-blue !important;
  }
}
#app.chefs-feed {
  background-color: #fef301 !important;
  nav {
    background-color: #fef301 !important;
  }
}
nav.navbar.header {

  position: absolute !important;
  // transform: translate3d(0,0,0) !important;
  top: 0;
  @include breakpoint($md) {
    padding-top: 4em;
     p {
      visibility: hidden;
    }
    img.home {
      visibility: visible;
    }
  }
}
.sub-page nav.navbar.header {
  @include breakpoint($md) {
    p {
      visibility: visible;
    }
  }
}
#app.front-page  {
  padding-top: 0;
  @include breakpoint($md) {
    padding-top: 280px;
  }
}

#app.sub-page {
  padding-top: 25vh;
  @include breakpoint($md) {
    padding-top: 280px;
  }
}

#app:not(~ .barlow) {
   padding-top: 20vh;
  @include breakpoint($md) {
    padding-top: 280px;
  } 
}
// .barlow {
//   .navbar {
//     display: none;
//   }
// }

.sticky.barlow,nav.barlow {
  display: none !important;
}
body.active {
  overflow: hidden;
  #app > *:not(.close) {

    transform: translate3d(-270px, 0, 0); 

  }


  #app .headroom--not-top {
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
  transition: all 240ms linear;
}



img.close {
  display: none;
}



.container > *:not(img) {
  max-width: 1440px;
  padding-left: (100% - $container) / 2;
  padding-right: (100% - $container) / 2;
}

#app.barlow img.hamburger {
  display: none;
}
img.hamburger {

  position: fixed;
  right: 20px;
  height: 1.2em;
  top: 14px;
  width: auto;
  z-index: 9999999;

  &:hover {
    cursor: pointer;
  }
  @include breakpoint($md) {
    display: none;
  }

}


img.close {

  position: fixed;
  right: 18px;
  height: 1.5em;
  top: 12px;
  width: auto;
  z-index: 9999999;

  &:hover {
    cursor: pointer;
  }
  @include breakpoint($md) {
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

  font-family: courier;
  color: #111;
}

#app {
  background-color: $white;
  transition: all 240ms linear;
}
#app.front-page {

  padding-bottom: 52px;
}
#app.dark {
  background-color: $not-black;
}

#app {
 
  display: block;
  // margin-top: 40px;

  // @include breakpoint($md) {
  //   padding-top: 200px;
  // }
  div.container {

  
    hr {
      display: none;
    }

    p {
      font-size: 18px;
      line-height: 2em;
      max-width: 700px;
      margin-bottom: 3em;

    }
      
    
    // padding: 0 2em;
    @include breakpoint($md) {
      
      hr {
        // @include container($container)

        display: block;
      }

    }

  }
}

h1 {
  font-size: 1.8em;
  font-family: $heading-font-family;
  font-weight: $heading-font-weight;
  margin-bottom: 1.1em;
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

</style>