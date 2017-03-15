<template lang="pug">
nav.sidemenu
  ul
    template(v-for='route in routes')
      li(v-if="route.path==='/'")
        router-link.img(to="/")
          img.home(:class="{ active: isParent(route.path) }" src="../assets/home.svg" alt="home")
      li(v-else :class="{ active: isParent(route.path) }")
        router-link(v-on:mouseover.native.self="openMenu" v-bind:to="route.path") {{ route.children[0].name }}
        ul(v-if="route.children[1]")
          li(v-for="child in route.children")
            template(v-if="child.path != '' || child.name === 'More...'")
              router-link(:to="route.path + '/' + child.path" exact) {{ child.name }}
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
  }
}
</script>