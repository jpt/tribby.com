<template>
  <div class="container">
  <div class="letter-container">
    <template v-for="n in stringLetters.length">
      <div class="letter-wrapper" v-for="i in 9">
        <div :style="{ fontWeight:  fontWeight(i) }">
          <template v-if="n === stringLetters.length && i === 1">
            <div class="outer-letter">
            <div :style="{animation: animateSpeed(i,n)}" class="root-letter" v-waypoint="{ active: true, callback: onWaypoint}">
              {{ stringLetters[n-1] }}
            </div>
            </div>
          </template>
          <template v-else>
            <div :style="{animation: animateSpeed(i,n)}" class="root-letter">
              {{ stringLetters[n-1] }}
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
// import { ObserveVisibility } from 'vue-observe-visibility'
// import inViewportDirective from 'vue-in-viewport-directive'



  // import VueIsInView from 'vue-is-in-view';
  // Vue.use(VueIsInView);

  
// Vue.directive('observe-visibility', ObserveVisibility)
// Vue.directive('in-viewport', inViewportDirective)

export default {
  data: function() {
    return {
      string: 'Tribby Type',
    }
  },
  methods: {
    fontWeight: (i) => {
      return 1000-(i*100)
    },
    animateSpeed: (i,n) => {
      return 'rotate-in 3s linear infinite forwards'
      // return 'slide-in 1.5s ease 1 forwards'
    },

    visibilityChanged: function(isVisible) {
      this.$store.commit('setDark', isVisible)
    },
     onWaypoint ({ going, direction }) {
      // going: in, out
      // direction: top, right, bottom, left
      // if (going === this.$waypointMap.GOING_IN) {
      //  this.$store.commit('setDark', isVisible)
      // }

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.$store.commit('setDark', true)
      }
       if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        this.$store.commit('setDark', false)
      }
    }

  },
  computed: {
    stringLetters: function() {
      return this.string.split('').filter((item) => item != ' ')
    }
  }


}
</script>
<style lang="scss">
@import "~assets/css/globals.scss";
@import "~assets/css/fonts.scss";
.letter-container {
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  // flex-wrap: wrap;
  //   align-items: center;
  // justify-content: center;

 margin: 0 -3vw 0 -5vw;
  @include breakpoint($md) {
    margin: 0 -1vw 0 -5vw;
    
  }
  @include breakpoint($lg) {
    
    margin: 0 -2.5vw 0 -4.5vw;
  }
}
.letter-wrapper {
  overflow: hidden;


  height: 12vw;
  text-align: center;
  flex: 1 1 21%;
  @include breakpoint($md) {
    flex: 1 1 11%;
  }
  /*transform: rotate3d(-1, 1, 0, 50deg);*/


}  
.wrapper-container {

}
.outer-letter {
  display: inline;
   transform-origin: bottom right;
}
.root-letter {
    font-size: 10vw;
  font-family: 'Tribby Grotesk';
    // animation: ;
  text-transform: uppercase;
  // rotate3d(-1, 1, 0, 50deg)srotate3d(-1, 1, 0, 50deg

}

@keyframes rotate-in {

  0% {
    transform: translate3d(-7vw,-7vw,0) rotate3d(-1, 1, 0, 20deg);

  }

  100% {
    // transform:  translate3d(0,0,0) rotate3d(-1, 1, 0, 50deg);
         transform:  translate3d(7vw,7vw,0) rotate3d(-1, 1, 0, 90deg);

  }


}

/*@keyframes slide-in {
  0% {

    transform: translateX(-10vw);

  }
  100% {

    transform: translateX(0);
  }
}*/


</style>