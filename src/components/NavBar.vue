<template lang="pug">
div.overflow-container
  div.navbar
    ul(v-for='route in routes')
      template(v-if="route.path==='/'")
        router-link.img(to='/' exact)
          img.home(src='../assets/home.svg' alt='home')
      template(v-else)
        li.heading(v-bind:class="{ active: isParent(route.path) }") {{ route.name }}
        li(v-for='child in route.children')
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
      return this.$route.matched[0].path === route
    }
  }
}

</script>
<style lang="sass" scoped>
@import '../styles/globals.scss';

.overflow-container {
  padding: 0;
  margin: 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  @include susy-media($md) {
    overflow-x: default;
  }
}

ul:nth-of-type(1) {
  display: none;
  @include susy-media($md) {
    display: block;
  }
}
.home {
  height: 14px;
  width: 14px;
  margin-top: 0.36em;
  margin-right: 1em;
}
.navbar {
  padding-left: 10%;
  padding-right: 30px;
  padding-top: 15px;
  padding-bottom: 30px;

  // padding: 15px 30px 30px 105
  @include susy-media($sm) {
    padding-left: 0;
    margin-left: 10%;
  }
  width: 540px;
  @include susy-media($md) {
    width: 700px;
  }
  max-width: 700px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  

  
}

ul {
  
  padding: 0;
  margin: 0;
  list-style: none;
}

li.heading.active {
  &:after {
    content: '';
    display: block;
    margin-top: -3px;
    height: 3px;
    width: 100%;
    background: $grey-black;
    transition: width 0.2s;
  }

}

li {
  display: block;
  line-height: 1.8em;
  margin-right: 1em;
  font-family: $interface-font-family;
  font-weight: 400;
  // letter-spacing: 0.032em;
  font-size: 1em;
  color: $grey-medium;

  a {
    display: inline-block;
  }
}

li.heading {
  color: $grey-black;
  font-size: 1.1em;
  margin-bottom: 8px;
  &:after {
    content: '';
    display: block;
    margin-top:-3px;
    height: 3px;
    width: 0%;
  }
  font-family: $heading-font-family;
  font-weight: 600;
  letter-spacing: 0.012em;
}
li.heading {

  // &:hover:after {
  //   width: 80%;
  //   background: $grey-black;
  // }

}
ul li a.router-link-active {
  color: $grey-black;
}

ul li.heading a.router-link-active {

}

a {
  color: $grey-medium;
  transition: color 0.1s;
  text-decoration: none;
  &:visited {
    color: $grey-medium;
  }
  &:hover {
    color: $grey-black;
  }
}
</style>