<template lang="pug">
div.navbar
  router-link(to='/' exact)
    img.home(src='../assets/home.svg' alt='home')
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

.home {
  height: 14px;
  width: 14px;
  margin-top: 0.36em;
  margin-right: 1em;
}
.navbar {
  clear: both;
  position: relative;
  margin-top: 66px;
  @include susy-media($sm) {
    max-width: 400px;
  }
 
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 30px;
  
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
  font-family: $interface-font-family;
  font-weight: 400;
  letter-spacing: 0.024em;
  font-size: 1em;

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
  @include susy-media(0 $sm) {
    font-size: 1.1em;
  }
}

ul li a.router-link-active {
  color: $grey-black;
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