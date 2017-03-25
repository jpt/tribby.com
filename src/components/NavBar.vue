<template lang="pug">
nav.navbar(v-bind:class="{ active: menuOpen }" @mouseenter="openMenu" @mouseleave="closeMenu")
  div.branding
    router-link(to="/" exact)
      img.logo(src="../assets/tribby.svg" alt="Tribby")
    p.intro Products, web development, and custom type since 1999.
  ul.menu
    template(v-for='route in routes')
      li(v-if="route.path==='/'")
        router-link.img(to="/")
          img.home(:class="{ active: isParent(route.path) }" src="../assets/home.svg" alt="home")
      li(v-else :class="{ active: isParent(route.path) }")
        router-link(v-bind:to="route.path" class="title") {{ route.children[0].name }}
        ul(v-if="route.children[1]")
          li(v-for="child in route.children")
            template(v-if="child.path != '' || child.name === 'More...'")
              router-link(v-bind:to="route.path + '/' + child.path" exact class="child") {{ child.name }}
    li.menu
      img(src="../assets/nav.svg" alt="Menu")
</template>
<script>
import Route from '../router'

let routes = Route.options.routes

export default {
  data: function() {
    return {
      route: '/',
      routes: routes,
      active: false,
      menuOpen: true

    }
  },
  methods: {
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
<style lang="sass" scoped>

// nav > div {
//   width: 100%;
//   height: 100%;
// }
@import '../styles/globals.scss';

// .headroom {
//   position: fixed !important;
//   display: block;
//   top: 0px;
//   left: 0px;
//   right: 0px;
//   z-index: 9999;
//   transform: translateY(0px);
//   transition: all 250ms ease-in-out;
// }

// .headroom {

//   transform: translateY(-250px);
// }


// .headroom .clone {
//   display: none !important;
// }
.headroom-wrapper.pinned nav {

}
nav > ul > li:not(.menu) {
  display: none;
  @include susy-media($md) {
    display: block;
  }
}

.headroom .navbar {
  padding-top: 15px;
  padding-bottom: 0px;

  p {
    display: none;
  }
  height: 35px;
  transition: height 120ms ease-in-out;
  overflow: hidden;
}

.headroom .navbar.active {
  @include susy-media($md) {
    height: 180px;
    max-height: 500px;
    transition: height 120ms ease-in-out;
  }
}
.navbar {

  position: relative;
  width: 100%;
  max-width: $container;
  padding-left: (100% - $container) / 2;
  padding-right: (100% - $container) / 2;
  display: block;
  @include susy-media($md) {
    // width: $container;
    padding-bottom: 50px;
    padding-top: 30px;
  }
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 8px;
  background-color: rgba(255,255,255,0.9);
  // height: auto;
  // height: 50px;
}

li.menu {
  display: inline-block;
  img {
    height: 1.2em;
    width: auto;
  }
  @include susy-media($md) {
    display: none;
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
    max-width: 220px;
    margin-left: 100px;
    font-size: 0.9em;
    color: $grey-medium;
    @include susy-media($lg) {
      
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
  @include susy-media($md) {
    display: block;
  }
}



.menu {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @include susy-media($md) {
    justify-content: space-between;
    margin-left: auto;
    max-width: 420px;
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
  font-family: $interface-font-family;
  font-weight: 400;
  font-size: 0.92em;
  color: $grey-medium;
  transition: color 0.1s;
  text-decoration: none;
  letter-spacing: 0.03em;

  &:hover {
    color: $grey-black;
  }

}

a.title {
  line-height: 0.9em;
  color: $grey-black;
  font-size: 1.08em;
  margin-bottom: 8px;
  &:after {
    content: '';
    display: block;
    margin-top: 3px;
    height: 3px;
    width: 0%;
  }
  font-family: $heading-font-family;
  font-weight: $heading-font-weight;
  letter-spacing: 0.012em;
}



li.active > a {
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



ul li a.router-link-active {
  color: $grey-black;
}
</style>