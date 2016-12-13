<template lang="pug">
div.overflow-container
  div.navbar
    router-link.img(to='/' exact)
      img.home(src='../assets/home.svg' alt='home')
    ul
      li.heading(v-bind:class="{ active: isParent('/open-source') }") Open Source
      li #[router-link(to='/open-source/ricochet' exact) Ricochet]
      li #[router-link(to='/open-source/barlow' exact) Barlow]
      li #[router-link(to='/open-source/eff' exact) EFF]
    ul
      li.heading(v-bind:class="{ active: isParent('/publications') }") Publications
        li Coming soon
    ul
      li.heading(v-bind:class="{ active: isParent('/sketchbook') }") Sketchbook
      li Coming soon
    ul
      li.heading(v-bind:class="{ active: isParent('/about') }") About
      li #[router-link(to='/about/contact') Contact]
</template>
<script>
export default {

  data: function() {
    return {
      route: '/'
    }

  },
  methods: {
    isParent(route) {
      return this.$route.path.startsWith(route)
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
  margin-left: 10%;
  @include susy-media($md) {
    overflow-x: default;
  }
}

a.img {
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
  padding-right: 30px;
  padding-top: 15px;
  @include susy-media($sm) {
    padding-left: 0;
  }
  width: 540px;
  @include susy-media($md) {
    width: 700px;
  }
  max-width: 700px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding-bottom: 30px;

  
}

ul {
  
  padding: 0;
  margin: 0;
  list-style: none;
}

li.heading {
  margin-bottom: 8px;
  &:after {
    content: '';
    display: block;
    margin-top:-3px;
    height: 3px;
    width: 0%;
  }
}

li.heading.active {
  &:after {
    content: '';
    display: block;
    margin-top: -3px;
    height: 3px;
    width: 100%;
    background: $grey-black;
    transition: width 0.1s;
  }

}

li {
  display: block;
  line-height: 1.8em;
  margin-right: 1em;
  font-family: $interface-font-family;
  font-weight: 400;
  letter-spacing: 0.024em;
  font-size: 1em;
  color: $grey-medium;

  a {
    display: inline-block;
  }
}

li.heading {
  color: $grey-black;
  font-size: 1.05em;

  font-family: $heading-font-family;
  font-weight: 700;
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