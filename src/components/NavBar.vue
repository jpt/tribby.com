<template lang="pug">
nav.navbar
  div.branding
    router-link(to="/" exact)
      img.logo(src="../assets/tribby.svg" alt="Tribby")
    p.intro Product design, web development, illustration, branding, and custom type since 1999.
  ul
    template(v-for='route in routes')
      li(v-if="route.path==='/'")
        router-link.img(to="/")
          img.home(:class="{ active: isParent(route.path) }" src="../assets/home.svg" alt="home")
      li(v-else :class="{ active: isParent(route.path) }")
        router-link(:to="route.path") {{ route.children[0].name }}
        ul(v-if="route.children[1]")
          li(v-for="child in route.children")
            template(v-if="child.path!=''")
              router-link(:to="route.path + '/' + child.path" exact) {{ child.name }}
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
      routes: routes
    }
  },
  methods: {
    isParent(route) {
      let path = this.$route.matched[0].path === '' ? '/' : this.$route.matched[0].path
      return path === route
    }
  },
  mounted () {
    let nav = this.$el
    // let body = document.body

    // let navClone = nav.cloneNode(true)
    // navClone.classList.add('clone')

    // body.insertBefore(navClone, nav.nextSibling)


  }
}

</script>
<style lang="sass" scoped>
@import '../styles/globals.scss';

li.menu {
  img {
    height: 1.2em;
    width: auto;
  }
  @include susy-media($md) {
    display: none;
  }
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

a {

  display: inline-block;
  line-height: 1.8em;
  margin-right: 1em;
  font-family: $interface-font-family;
  font-weight: 400;
  font-size: 0.9em;
  color: $grey-medium;
  transition: color 0.1s;
  text-decoration: none;
  letter-spacing: 0.03em;

  &:hover {
    color: $grey-black;
  }

}

img.logo {
  position: relative;
  width: 50px;
  height: auto;
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

nav.navbar {
  width: $container;
  margin: 0 auto;
  padding-bottom: 30px;
}

nav > ul {
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
  padding: 0;
  margin: 0;
  list-style: none;
}

li.active > a {
  &:after {
    content: '';
    display: block;
    margin-top: 2px;
    height: 3px;
    width: 100%;
    background: $grey-black;
    transition: width 0.2s;
  }
}



// nav > ul > li:nth-child(n+2):nth-last-child(n+3) { // not first and not last or menu
//   // margin-right: 0.2em;
//   min-width: 90px;
// }

nav > ul > li:not(.menu) {
  display: none;
  @include susy-media($md) {
    display: block;
  }
}

nav > ul > li > a { // headings
  line-height: 0.9em;
  color: $grey-black;
  font-size: 1.05em;
  margin-bottom: 8px;
  &:after {
    content: '';
    display: block;
    margin-top: 2px;
    height: 3px;
    width: 0%;
  }
  font-family: $heading-font-family;
  font-weight: 700;
  letter-spacing: 0.012em;
}

ul li a.router-link-active {
  color: $grey-black;
}
</style>