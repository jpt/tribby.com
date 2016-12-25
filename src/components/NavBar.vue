<template lang="pug">
nav.navbar
  div.branding
    router-link(to='/' exact)
      img.logo(src='../assets/tribby.svg' alt='Tribby')
    p.intro Product design, web development, illustration, branding, and custom type since 1999.
  ul
    template(v-for='route in routes')
      li(v-if="route.path==='/'")
        router-link.img(to='/' exact)
          img.home(v-bind:class="{ active: isParent(route.path) }" src='../assets/home.svg' alt='home')
      li(v-else v-bind:class="{ active: isParent(route.path) }")
        router-link(v-bind:to='route.path') {{ route.name }}
        ul(v-if="route.children")
          li(v-for="child in route.children")
            router-link(v-bind:to="route.path + '/' + child.path" exact) {{ child.name }}
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
  }
}

</script>
<style lang="sass" scoped>
@import '../styles/globals.scss';

.branding {
  a {
    padding: 0;
    margin-top: -3px;
    float: left;
  }
  p {
    display: none;
    max-width: 320px;
    // margin-top: -2px;
    margin-left: 107px;
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
  font-size: 1em;
  color: $grey-medium;
  transition: color 0.1s;
  text-decoration: none;

  // &:visited {
  //   color: $grey-black;
  // }
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
  margin-top: 0.18em;
  margin-right: 1.5em;
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
  // width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @include susy-media($md) {
    justify-content: flex-end;
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

nav > ul > li:nth-child(n+2):nth-last-child(n+2) {
  margin-right: 1em;
}

nav > ul > li > a {
  line-height: 0.9em;
  color: $grey-black;
  font-size: 0.95em;
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