<template>
    <nav class="navbar" :class="{ active: menuOpen }" @mouseenter="openMenu" @mouseleave="closeMenu">
      <HR height="1px"  :style="{ backgroundColor: '#ccc'}" class="hr-hide"/>
      <div class="branding">
        <nuxt-link to="/" class="tribby">Tribby</nuxt-link>
         <!--  <p class="intro">Designing and engineering type, products, and digital experiences.</p>
     -->  </div>
      <ul class="menu">
        <template v-for="route in routes">
          <li v-if="route.path=='/'" class="home-li">
            <nuxt-link class="img" to="/">
              <img class="home" :class="{ active: isParent(route.path) }" :src="homeDark" alt="home"/>
            </nuxt-link>
          </li>
          <li class="cart" v-else-if="route.path=='/cart'">
            <a class="title cart-regular" @click.prevent="toggleCart">
            Cart ({{ $store.state.cartItems.length }})</a>
            <nuxt-link to="/cart" class="title cart-small"><span  @click="closeCart">
            Cart ({{ $store.state.cartItems.length }})</span></nuxt-link>
           <!--  <div class="mini-cart" v-if="cartOpen"></div> -->

          </li>
          <li v-else :class="{ active: isParent(route.path)}">
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
  import HR from '@/components/HR';
  const hw = require('@/assets/home-white.svg')
  const h = require('@/assets/home.svg')
export default {
  data: function() {
    return {
      route: '/',
      routes: {
        '/': { path: '/',
          children: [
            { path: '/', name: 'Home' }
          ]
        },
        '/fonts': { path: '/fonts',
          children: [
            { path: '', name: 'Fonts' },
            { path: 'nbc-universal', name: 'NBC Universal' },
            // { path: 'tribby-grotesk', name: 'Tribby Grotesk'},
            // { path: 'galiano', name: 'Galiano' },
            { path: 'barlow', name: 'Barlow' },
          ]
        },
        // '/case-studies': { path: 'case-studies',
        //   children: [
        //     { path: '', name: 'Case Studies' },
        //     { path: 'nbc-universal', name: 'NBC Universal' }
        //   ]
        // },

        // '/projects': { path: '/projects',
        //   children: [
        //     { path: '', name: 'Projects' },
        //     { path: 'nbc-universal', name: 'NBC Universal' },
        //     { path: 'shift', name: 'Shift' },
        //     { path: 'vpn-cash', name: 'VPN Cash' },
        //     // { path: 'ricochet', name: 'Ricochet' },
        //     { path: 'chefs-feed', name: 'Chefs Feed' },
        //     { path: 'edupath', name: 'Edupath' },
        //     { path: 'eff', name: 'EFF' },


        //   ]
        // },
        '/works':{ path: '/works', 
          children: [
            { path: '', name: 'Works' },
            { path: '', name: '&nbsp;' }
          ]
        },
        // '/graphic': { path: '/graphic', 
        //   children: [
        //     { path: '', name: 'Graphic' },
        //     { path: '', name: '&nbsp;' }
        //   ]
        // },
        '/about': { path: '/about', 
          children: [
            { path: '', name: 'About' },
            { path: '', name: '&nbsp;' }
          ]
        },
        // '/cart':{ path: '/cart', 
        //   children: [
        //     { path: '', name: 'Cart' },
        //     { path: '', name: '' }
        //   ]
        // }
      },
      active: false,
      menuOpen: false,
      cartOpen: false,

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
    toggleCart () {
      if(document.body.classList == 'active') {
        document.body.classList = 'active cart-side';
      } else if (document.body.classList == '') {

        document.body.classList = 'cart-side'
      } else {
        document.body.classList = ''
      }
      this.$store.commit('toggleCart', !this.$store.state.cartOpen)
    },
  //     toggleCart() {
  //       console.log('toggle')
  //   // this.$store.dispatch(toggleCart);
  // },
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
    },
    openCart() {
      this.cartOpen = true;
    },
    closeCart() {
        document.body.classList = ''
      this.$store.commit('toggleCart', false)
      this.cartOpen = false;
    }
  },
  components: {
    HR
  }
}

</script>
<style lang="scss" scoped>
@import '~assets/css/globals.scss';
@import '~assets/css/fonts.scss';

.hr-hide {
  height: 1px;
  margin-top: -20px;
  margin-bottom: 20px;
  display: none;
  @include breakpoint($md) {
    display: block;
  }
}
.headroom .barlow {
  display: none !important;
}


.mini-cart {
  display: block;
  width: 280px;
  opacity: 0.9;
  position: absolute;
  height: 180px;
  background-color: red;
  right: 7.5%;
  margin-top: 10px;


}

.cart-regular {
  display: none;
  @include breakpoint($md) {
    display: inline-block;
  }
}
.cart-small {
  display: inline-block;
  @include breakpoint($md) {
    display: none;
  }
}
.cart {
  // width: 200px;
}
nav > ul > li:not(.menu) {
  display: none;
  @include breakpoint($md) {
    display: block;
  }

}
.top-hr {
  @include breakpoint(0 $md) {
    display: none;
  }
  margin-bottom: 30px;
}
nav.side {
  position: fixed;
  top: 0px;
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

.light {
  // color: #666;
}
.tribby {
  position: relative;
  font-family: 'Tribby Grotesk';
  font-size: 1em;
  color: #000;
  opacity: 1;
  font-weight: 500;
  letter-spacing: -0.2px;
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

.li {

}

nav.side > ul > li.menu {
  display: none;
}

ul.menu > li:not(.home-li) {
  // width: 200px;
}

// ul.menu > li:last-of-type {
//   width: auto;
// }
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
    height: 240px;
    max-height: 500px;
  }
}
span.title {
  position: absolute;
  right: 20px;
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
    margin-top: -1px;
    float: left;
    display: inline;


  }

  p {
    display: none;
    max-width: 260px;
    margin-left: 155px;
    font-size: 0.9em;
    color: $grey-medium;
    font-family: 'Escrow-Light';
    @include breakpoint($xl) {
      
      // display: block;
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
  z-index: 100;
}
.home-li {
  width: 20px;
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
    max-width: 640px;
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
    opacity: 1;
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
  white-space: nowrap;
  line-height: 0.9em;
  color: $grey-black;
  font-size: 0.92em;
  margin-bottom: 8px;
  opacity: 0.86;
  &:after {
    content: '';
    display: block;
    margin-top: 5px;
    height: 2px;
    width: 0%;
  }
  font-family: 'Tribby Grotesk';
  font-weight: 500;
  letter-spacing: 0.012em;
  &:hover {
    opacity: 1;
    cursor: pointer;
  }
}



a.title.nuxt-link-active {
  opacity: 1;
  &:after {
    content: '';
    display: block;
    margin-top: 5px;
    height: 2px;
    width: 100%;
    background: $grey-black;
    transition: width 0.2s;
  }
}



a.nuxt-link-active {
  color: $grey-black;
}
</style>
