<template>
  <div class="container">
   
    <div class="index">

 
<!--   <div class="hr" :style="{ backgroundColor: this.$store.state.dark?  '#fff' : '#000', height: '4px', width: '100%' }">
  &nbsp;</div>
 -->
      <div class="big-type">
    
       <BigType :style="{ color: this.$store.state.dark?  '#fff' : '#000'}"/>

      </div>
      <!-- <div class="announce" v-in-viewport.once>
       
        <h1>Designing and engineering type, products, and digital experiences.</h1>
      </div> -->
      <div class="soon">
        <h1>Coming soon.</h1>
        <p>As of 2021, tribby.com hasn't been updated in a number years. New site on the way soon.</p>
      </div>
    </div>
  </div>
</template> 
<script>
import HR from '@/components/HR'
import Vuex from 'vuex'
import BigType from '@/components/index/bigtype.vue'


export default {

  data() {
    return {
      animate: true
    }

  },
  transition: 'page',
  methods: {
    visibilityChanged (isVisible) {
      this.$store.commit('setDark', isVisible)
    },
    onInterval: function () {
      let now = Date.now()
      this.elapsed = now - this.then
      if (this.elapsed > this.fpsInterval) {
        this.then = now - (this.elapsed % this.fpsInterval)
      }

      requestAnimationFrame(this.onInterval)
    },
  },
  components: {
    BigType,
    HR
  }
}
</script>
<style lang="scss" scoped>

@import "~assets/css/globals.scss";
@import "~assets/css/fonts.scss";
.hr {
  display: none;
  @include breakpoint($md) {
    display: block;
  }
}
.big-type {


  padding-top: 18vw;
  @include breakpoint($md) {
    padding-top:0px;
  }
   @include breakpoint($lg) {
    padding-top:10px;
  }
  max-width: 1150px;
}

.soon h1 {
  color: $white;
  margin-top: 6em;
  margin-bottom: 2em;
}

.soon p {
  color: $white;
}

.announce.in-viewport {
  opacity: 1;
  transform: translate3d(0,0,0);
}
.announce {
  transition: opacity 800ms ease-out, transform 500ms ease-out;
  transform: translate3d(0,50px,0);
  margin-bottom: 200px;

  top: 0;
  opacity: 0;
  height: 100vh;
  padding-top: 33vh;
  @include breakpoint($md) {
    padding-top:40px;
  }
   @include breakpoint($lg) {
    padding-top:80px;
  }

  margin-right: 10%;
  max-width: 1150px;

  h1 {
    font-family: 'Tribby Grotesk';
    font-weight: 600;
    font-size: 8vw;
    @include breakpoint($md) {
      font-size: 3.5em;
      font-family: 'Tribby Grotesk';
    }
  }
}
img {
  width: 100%;
  @include breakpoint($md) {
     max-width: 1440px;
    padding-left: (100% - $container) / 2;
     padding-right: (100% - $container) / 2;
  }
}

h1 {
  // word-break: break-all;
  font-family: 'Tribby Grotesk';
  font-weight: 500;
  letter-spacing: -0.007em;
  font-size: 2em;
  line-height: 1.25em;
}


</style>
