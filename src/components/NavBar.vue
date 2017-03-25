<template lang="pug">
nav.navbar(v-bind:class="{ active: menuOpen, pinned: menuPinned }" @mouseenter="openMenu" @mouseleave="closeMenu")
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
      menuOpen: true,
      menuPinned: false

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
    },
    onPin() {
      // let nav = this.$el.children[0].children[0];
      // console.log(nav);
      // // nav.style.height='0px';
      // nav.style.overflow='hidden';
      this.menuPinned = true
    },
    menuUnpin() {
      // let nav = this.$el.children[0].children[0];
      // console.log(nav);
      // nav.style.height='auto';
      this.menuPinned = false
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

.headroom {
  position: fixed !important;
  display: block;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 9999;
  transform: translateY(0px);
  transition: all 250ms ease-in-out;
}

.headroom .clone {
  display: none !important;
}
.headroom-wrapper.pinned > div > nav.active {
  // height: 50px;
  // overflow: hidden;
}
nav > ul > li:not(.menu) {
  display: none;
  @include susy-media($md) {
    display: block;
  }
}

.navbar {

  position: fixed;
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
  height: auto;
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
  display: inline-block;
  margin-top: 6px;
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