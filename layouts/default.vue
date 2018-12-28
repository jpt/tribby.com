<template>
  <div id="app" :class="[pageClass, { dark: this.$store.state.dark }]">
    <navbar class="header" :class="pageClass"></navbar>
    <div class="menu-item abs" @click="toggleSide">
      <img class="hamburger top" :src="navDark" alt="Open Menu"/>
    </div>
    <headroom :offset="280">
      <navbar class="sticky" :class="[ pageClass, {dark: this.$store.state.dark}]"></navbar>
      <div class="menu-item" @click="toggleSide">
        <img class="hamburger" :src="navDark" alt="Open Menu"/>
      </div>
    </headroom>
    <navbar class="side" :class="pageClass"></navbar>
    <div class="close" @click="toggleSide">
      <img class="close-img"  :src="closeDark" alt="Close Menu"/>
    </div>
    <nuxt/>
  </div>
</template>
<script>
import navbar from '@/components/navbar.vue';
import headroom from '@/components/vue-headroom/src/headroom.vue';

const n = require('@/assets/nav.svg')
const nw = require('@/assets/nav-white.svg')

const c = require('@/assets/close.svg')
const cw = require('@/assets/close-white.svg')

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
    navDark: function () {
      if(this.$store.state.dark) {
        
        return nw
      } else {

        return n
      }
    },
    closeDark: function () {
      if(this.$store.state.dark) {
        
        return cw
      } else {

        return c
      }
    },
    pageClass: function () {
      if(this.$route.path == '/') {
        this.$store.commit('setDark', false)
        return 'front-page'
      } else if(this.$route.path.startsWith('/fonts/barlow')) {
        this.$store.commit('setDark', false)
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
.menu-item {
  top: 0;
  position: fixed;
  padding-right: 7.5%;
  padding-top: 12px;
  padding-left: 20px;
  width: 50px;
  height: 50px;
  right: 0;
  z-index: 999999999;
  &:hover {
    cursor: pointer;
  }
  img {
    display: inline;
  }
}

.menu-item.abs {
  padding-top: 19px;
  position: absolute;
}
img.hamburger {

  
  
  height: 10px;
  
  width: auto;
  z-index: 9999999;

  &:hover {
    cursor: pointer;
  }
  @include breakpoint($md) {
    display: none;
  }

}


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
  backface-visibility: hidden;
  min-height: 100vh;
  padding-bottom: 20px;
}
#app.vpn-cash {
  color: $white;
  // background: linear-gradient(to bottom right, $darkish-blue, $dark-blue);
  background-color: $dark-blue !important;
  nav {
    background-color: $dark-blue !important;
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
body,#app,html {
  height: 100%;
}
.sub-body {
  // background-color: $white;
  width: 100%;
  // padding: 0 7.5% 2em 7.5%;
  margin: 0;
  img {
    display: inline-block;
    width: 100%;
    border: 1px solid #eee;
    // padding: 0 7.5% 2em 7.5%;
    margin-bottom: 2em;
    @include breakpoint($md) {
      // width: 100%;
      // margin: 0 auto 3em auto;
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
    .close {
      display: block;
    }
  }
}

#app > * {
  transition: all 240ms ease-out;
}



.close {
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

body.active .close {
  padding-top: 14.5px;
  padding-right: 5.6%;
}
.close {
  position: fixed;
  right: 0;
  z-index: 999999;
  right: 0;
  padding-top: 16px;
  // width: 50px;
  height: 50px;
  padding-right: 5%;
  padding-left: 5%;
    @include breakpoint($md) {
    display: none;
  }
  top: 0;
  &:hover {
    cursor: pointer;
  }
}
img.close-img {
  display: inline;
  height: 12px;

  
  
  
  width: auto;
  // z-index: 9999999;



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

.sub-page .container > div {
  display: block;
  margin-bottom: 0;
  
}

.heading {
  h1 {
    display: inline;
    margin-right: 0.5em;
    margin-bottom: 0;
    padding: 0;
    line-height: 1em;
  }
  max-width: 660px;
  p {

    display: inline;
    margin-bottom: 2em;
    font-size: 22px !important;
    // line-height: 1.5em !important;
  }
  margin-bottom: 4em;
}



body {

  font-family: courier;
  color: #111;
}

#app {
  background-color: $white;
  transition: all 240ms ease-out;
}
#app.front-page {

  padding-bottom: 52px;
}
#app.dark {
  background-color: $not-black;
}

 #app.dark:not(nav) p a {
    color: $light-grey;
    &:hover {
      color: $white;
    }
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
  font-weight: 500;
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
#app {
  padding-bottom: 7em;
}
</style>