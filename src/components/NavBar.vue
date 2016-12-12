<template lang="pug">
div.navbar
  ul
    li.heading Projects
    li #[router-link(to='/projects/ricochet' exact) Ricochet]
    li #[router-link(to='/projects/barlow' exact) Barlow]
    li #[router-link(to='/projects/eff' exact) EFF]
  ul
    li.heading About
    li #[router-link(to='/about/contact') Contact]
</template>
<style lang="sass" scoped>
@import '../styles/globals.scss';


.navbar {
  clear: both;
  position: relative;
  margin-top: 66px;
  width: 260px;
  @include susy-media($sm) {
    width: 350px;
  }
  @include susy-media($md) {
    width: 500px;
  }
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li.heading {
  margin-bottom: 8px;
}

li {
  display: block;
  line-height: 1.8em;
  margin-right: 1em;
  font-family: $body-font-family;
  font-weight: $body-font-weight;
  font-size: 1em;
  @include susy-media(0 $sm) {
    font-size: 0.86em;
  }
  a {
    display: inline-block;
  }
}

li.heading {
  color: $grey-dark;
  font-size: 1.2em;

  font-family: $heading-font-family;
  font-weight: $heading-font-weight;
  letter-spacing: 0.012em;
  @include susy-media(0 $sm) {
    font-size: 1.1em;
  }
  a {
    color: $grey-dark;
  }
}

ul li a.router-link-active {
  color: $grey-black;
  // &::after {
  //   content: '';
  //   position: relative;
  //   display: block;
  //   width: 100%;
  //   top: -3px;
  //   height: 4px;
  //   margin-left: 1px;
  //   background: $grey-dark;
  //   transition: width 0.1s;
  // }
}

li:not(.heading) a {
  &:hover {
    cursor: pointer;
    color: $grey-black;
    // &::after {
    //   width: 100%;
    // }
  }

  // &::after {
  //   content: '';
  //   position: relative;
  //   display: block;
  //   width: 0px;
  //   top: -3px;
  //   height: 4px;
  //   margin-left: 1px;
  //   background: $grey-dark;
  //   transition: width 0.2s;
  
  // }
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