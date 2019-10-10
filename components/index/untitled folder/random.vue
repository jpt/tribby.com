<template>
  <div class="letter-container">
    <template v-for="n in stringLetters.length">
      <div class="letter-wrapper" v-for="i in 9">
        <div :style="{ fontWeight:  fontWeight(i) }">
          
            <div class="outer-letter">
            <div class="root-letter" :class="{ rotated: isRotated(i,n)}" :style="{ transform: animationCalc(i,n)}">
              {{ stringLetters[n-1] }}
            </div>
            </div>
        </div>
      </div>
    </template>

    <div v-waypoint="{ active: true, callback: onWaypoint}"/>
  </div>
</template>
<script>
import Vue from 'vue'
import Vuex from 'vuex'
// import { ObserveVisibility } from 'vue-observe-visibility'
// import inViewportDirective from 'vue-in-viewport-directive'


let string = 'Tribby Type';
let grid = [];
let cols = 9;
let rows = string.split('').filter((item) => item != ' ').length;
// console.log(rows);
// for (let r = 0; r<rows; r++) {
//   grid[r] = []
//   for (let c = 0; c < cols; c++ ) {
//     let randomTranslate = Math.floor(Math.random() * 10) - 5;
//     grid[r][c] = randomTranslate;
//   }
// }
// console.log(rows,cols)
// console.log(grid)


  // import VueIsInView from 'vue-is-in-view';
  // Vue.use(VueIsInView);

  
// Vue.directive('observe-visibility', ObserveVisibility)
// Vue.directive('in-viewport', inViewportDirective)

export default {
  data: function() {
    return {
      string: string,
      fps: 0,
      fps: 0.4,
      fpsInterval: 0,
      startTime: 0,
      now: 0,
      then: 0,
      elapsed: 0,
      rotated: 0,
      grid: grid
    }
  },
  mounted () {
    // instead of e.g. setInterval(this.onInterval, 1000)
    this.fpsInterval = 1000 / this.fps
    this.then = Date.now()
    this.startTime = this.then
    requestAnimationFrame(this.onInterval)
  },
  methods: {
   isRotated: function(i,n) {
      if(this.rotated) {
        return 1
      } else {
        return 0
      }
   },
   animationCalc: function(i,n) {
     if(this.rotated) {
        return `rotate3d(-1, 1, 0, 0deg) translate3d(${this.grid[n-1][i-1]}vw,${this.grid[n-1][i-1]}vw,0)`
      } else {
        return `rotate3d(-1, 1, 0, 0deg) translate3d(0,0,0)`
      }
   },
   onInterval: function () {
      let now = Date.now()
             
      this.elapsed = now - this.then
      if (this.elapsed > this.fpsInterval) {
        this.then = now - (this.elapsed % this.fpsInterval)

         let gridCalc = []
        for (let r = 0; r<rows; r++) {
          gridCalc[r] = []
          for (let c = 0; c < cols; c++ ) {
            let randomTranslate = Math.floor(Math.random() * 16) - 8;
            gridCalc[r][c] = randomTranslate;
          }
        }
        this.grid = gridCalc


        this.rotated == 1 ? this.rotated = 0 : this.rotated = 1
      }

      requestAnimationFrame(this.onInterval)
    },
    fontWeight: (i) => {
      return 1000-(i*100)
    },
    animateSpeed: (i,n) => {
      //return 'rotate-in 6s ease infinite alternate'
      // return 'rotate-in 5s ease-in-out infinite alternate'
      //return 'rotate-in ms ease 1 forwards'
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
  // max-width: 1440px;
  margin: 0;
  padding: 0;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(9, 1fr);
  // flex-wrap: wrap;
  //   align-items: center;
  // justify-content: center;

 // margin: 0 -8vw 0 -8vw;
 //  @include breakpoint($lg) {
    
 //    margin: 0 -8.5vw 0 -7.2vw;
 //  }
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
  // animation: rotate-in 5s ease-in-out infinite forwards;
  // rotate3d(-1, 1, 0, 50deg)srotate3d(-1, 1, 0, 50deg
  transition: transform 0.9s ease;
  transform: rotate3d(-1, 1, 0, 0deg) translate3d(0,0,0);


}

.rotated {
  transform:  rotate3d(-1, 1, 0, 50deg) translate3d(0,0,0);
}
// @keyframes rotate-in {

//   0% {
//     //transform: translate3d(-7vw,-7vw,0) rotate3d(-1, 1, 0, 20deg);

//   }

//   40% {
//      //transform:  translate3d(0,0,0) rotate3d(-1, 1, 0, 50deg);
//     transform:  rotate3d(-1, 1, 0, 50deg);
//          // transform:  translate3d(7vw,7vw,0) rotate3d(-1, 1, 0, 90deg);

//   }
//   50% {
//      //transform:  translate3d(0,0,0) rotate3d(-1, 1, 0, 50deg);
//     transform:  rotate3d(-1, 1, 0, 50deg);
//          // transform:  translate3d(7vw,7vw,0) rotate3d(-1, 1, 0, 90deg);

//   }

//   100% {
//     //transform: translate3d(-7vw,-7vw,0) rotate3d(-1, 1, 0, 20deg);
// transform: rotate3d(-1, 1, 0, 0deg);
//   }
// }

/*@keyframes slide-in {
  0% {

    transform: translateX(-10vw);

  }
  100% {

    transform: translateX(0);
  }
}*/


</style>