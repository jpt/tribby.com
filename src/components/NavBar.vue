<template lang="pug">
div.navbar
  ul
    li #[router-link(to='/' exact) Home]
    li #[router-link(to='/store' exact) Store]
</template>
<script>

</script>
<style lang="sass" scoped>
@import '../styles/globals.scss';

.navbar {
  position: fixed;
  height: 40px;
  line-height: 40px;
  top: 0;
  left: 0;
  width: 100%;
}

ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

li {
  display: inline;
  margin-right: 1em;
}

a {
  color: $grey-dark;
  text-decoration: none;
  &:visited {
    color: $grey-medium;
  }
  &:hover {
    text-decoration: underline
  }
}
</style>