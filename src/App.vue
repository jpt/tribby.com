<template lang="pug">
  #app
    nav-bar
    div.container
      transition(name='fade' mode='out-in')
        router-view(class='view')

</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar },
  data () {
    return {
      lol: true
    }
  }
}
</script>

<style lang="sass">
@import 'styles/globals.scss';

html {
  padding: 0;
  margin: 0;
}

body {
  font-family: courier;
  color: #111;
  padding: 0;
  margin: 0;
  background-color: #fdfdfd;
}

#app {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.fade-enter-active, .fade-leave-active {
  transition: all .15s ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>