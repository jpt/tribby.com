<template>
  <nav class="navbar" :class="{ active: menuOpen }" @mouseenter="openMenu" @mouseleave="closeMenu">
    <div class="branding">
      <nuxt-link to="/" class="tribby">TRIBBY</nuxt-link>
        <p class="intro">Designing and engineering type, products, and digital experiences.</p>
    </div>
    <ul class="menu">
      <template v-for="route in routes">
        <li v-if="route.path=='/'">
          <nuxt-link class="img" to="/">
            <img class="home" :class="{ active: isParent(route.path) }" :src="homeDark" alt="home"/>
          </nuxt-link>
        </li>
        <li v-else :class="{ active: isParent(route.path) }">
          <nuxt-link class="title" :to="route.path" @click.native.prevent="removeActive">{{ route.children[0].name }}</nuxt-link>
          <ul v-if="route.children[1]">
            <li v-for="child in route.children">
              <template v-if="child.path != '' || child.name === 'All'">
                <nuxt-link class="child" :to="route.path + '/' + child.path" @click.native.prevent="removeActive">{{ child.name }}</nuxt-link>
              </template>
            </li>
          </ul>
        </li>
      </template>
    </ul>
  </nav>
</template>
<script>
  const hw = require('@/assets/home-white.svg')
  const h = require('@/assets/home.svg')
export default {
  data: function() {
    return {
      route: '/',
      routes: [
        { path: '/',
          children: [
            { path: '/', name: 'Home' }
          ]
        },
        { path: '/fonts',
          children: [
            { path: '', name: 'Fonts' },
            { path: 'barlow', name: 'Barlow' },
            { path: 'galiano', name: 'Galiano' },
          ]
        },
        { path: '/projects',
          children: [
            { path: '', name: 'Projects' },
            { path: 'vpn-cash', name: 'VPN Cash' },
            { path: 'chefs-feed', name: 'Chefs Feed' },
            { path: 'edupath', name: 'Edupath' },
            { path: 'eff', name: 'EFF' },


          ]
        },
        { path: '/sketchbook', 
          children: [
            { path: '', name: 'Sketchbook' },
            { path: '', name: '&nbsp;' }
          ]
        },
        { path: '/about', 
          children: [
            { path: '', name: 'About' },
            { path: 'contact', name: 'Contact' },
            { path: 'bio', name: 'Bio' }
          ]
        }
      ],
      active: false,
      menuOpen: false

    }
  },
  computed: {
    homeDark: function () {
      if(this.$store.state.dark) {
        
        return hw
      } else {

        return h
      }
    },
    offsetpx: function () {
      if(this.$route.path == '/') {
        return 280
      } else {
        return 0
      }
    },
    pageClass: function () {
      if(this.$route.path == '/') {
        return 'front-page'
      } else if(this.$route.path.startsWith('/fonts/barlow')) {
        return 'barlow'
      } else {
        return ''
      }
    }
  },
  methods: {
    removeActive() {
      if(document.body.classList.contains('active')) {
        document.body.classList = ''
        console.log(document.body.classList)
      } else {
        console.log(document.body.classList)
      }
    },
    isParent(route) {
      let path = this.$route.matched[0].path === '' ? '/' : this.$route.matched[0].path
      return path === route
    },
    openMenu() {
      this.menuOpen = true;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/css/globals.scss';
@import '~assets/css/fonts.scss';
.headroom .barlow {
  display: none !important;
}


nav > ul > li:not(.menu) {
  display: none;
  @include breakpoint($md) {
    display: block;
  }
}

nav.side {
  position: fixed;
  top: -40px;
  right: -270px;
  width: 270px;
  height: 100%;
  z-index: 1;
  display: block;
  padding: 0;
  transition: all 240ms ease-out;
  @include breakpoint($md) {
    display: none;
  }
}

.tribby {
  position: relative;
  font-family: 'BarlowCondensed-SemiBold';
  font-size: 1.2em;
  color: #000;
  opacity: 1;
  &:hover {
    opacity: 1;
  }
  &.active {
    opacity: 1;
  }

}
nav.side {
  padding-top: 40px;
  div.branding {
    display: none;
  }
}
nav.side > ul > li:not(.menu) {
  display: block;
}

nav.side > ul > li.menu {
  display: none;
}

nav.side > ul > li > ul {
  margin-bottom: 30px;
}

nav.side ul.menu {
  margin-left: 50px;
  float: left;
  flex-direction: column;
}

.headroom .navbar {
  padding-top: 15px;
  padding-bottom: 0px;

  p {
    visibility: hidden;
  }

  transition: height 240ms ease-out;
  overflow: hidden;
}

.headroom .navbar.active {
  transition: height 240ms ease-out;
  @include breakpoint($md) {
    height: 200px;
    max-height: 500px;
  }
}

.header .headroom .navbar {
  padding-top: 3em;
  @include breakpoint($md) {
    height: 200px;
    max-height: 500px;
  }
}

.sticky .headroom--top {
  display: none;
}

.headroom .navbar {
  background-color: rgba(253,253,253,0.9);
}
.navbar {
  transition: background-color 500ms linear;
  position: relative;
  width: 100%;
  max-width: 1440px;
  padding-left: (100% - $container) / 2;
  padding-right: (100% - $container) / 2;
  display: block;
  @include breakpoint($md) {
    // width: $container;
    padding-bottom: 50px;
    padding-top: 30px;
  }
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 8px;
  // background-color: rgba(255,255,255,0.9);
  background-color: $white;
  height: 50px;
}

li.menu {
  display: inline-block;
  position: absolute;
  right: 20px;
  img {
    position: relative;
    right: 0;
    height: 1.2em;
    width: auto;
  }
  @include breakpoint($md) {
    display: none;
  }
  &:hover {
    cursor: pointer
  }
}

// Nav 2 

a.child {
  line-height: 1.7em;
}

.branding {
  a {
    padding: 0;
    margin-top: -4px;
    float: left;
  }

  p {
    display: none;
    max-width: 260px;
    margin-left: 120px;
    font-size: 0.9em;
    color: $grey-medium;
    font-family: 'Escrow-Light';
    @include breakpoint($lg) {
      
      display: block;
    }
  }
  float: left;

}


img.logo {
  position: relative;
  width: 50px;

  height: auto;
  display: block;
  margin-top: 6px;
  z-index: 10000;
}

img.home {
  height: 14px;
  width: 14px;
  margin-top: 2px;
  // margin-right: 1.5em;
  opacity: 0.5;
  &:hover {
    opacity: 1;
  }
  transition: opacity 0.2s;
  &.active {
    opacity: 1;
  }
  display: none;
  @include breakpoint($xl) {
    display: block;
  }
}



.menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @include breakpoint($md) {
    justify-content: space-between;
    margin-left: auto;
    max-width: 500px;
  }
}

ul {
  display: block;
  padding: 0;
  margin: 0;
  list-style: none;
}


a {

  display: inline-block;
  margin-right: 1em;
  font-family: 'Barlow';
  font-weight: 400;
  font-size: 0.85em;
  color: $grey-medium;
  transition: color 0.1s;
  text-decoration: none;
  letter-spacing: 0.03em;

  &:hover {
    color: $grey-black;
  }

}

.dark {
  .navbar {
    transition: background-color 500ms linear;
    background-color: $not-black;
  }
  p.intro {
    color: $light-grey;
  }
  .tribby {
    color: $white;
  }
  a {
    color: $light-grey;
    &:hover {
      color: $white;
    }
  }
  a.title {
    color: $white;
  }
  a.title.nuxt-link-active {
    &:after {
      content: '';
      display: block;
      margin-top: 3px;
      height: 3px;
      width: 100%;
      background: $white;
      transition: width 0.2s;
    }
  }

  a.nuxt-link-active {
    color: $white;
  }
}

a.title {
  line-height: 0.9em;
  color: $grey-black;
  font-size: 1em;
  margin-bottom: 8px;
  &:after {
    content: '';
    display: block;
    margin-top: 3px;
    height: 3px;
    width: 0%;
  }
  font-family: 'Akademie Bold';
  font-weight: $heading-font-weight;
  letter-spacing: 0.012em;
}



a.title.nuxt-link-active {
  &:after {
    content: '';
    display: block;
    margin-top: 3px;
    height: 3px;
    width: 100%;
    background: $grey-black;
    transition: width 0.2s;
  }
}



a.nuxt-link-active {
  color: $grey-black;
}
</style>