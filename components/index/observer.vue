<template>
  <div>
    <div ref="topEdgeObserve" v-waypoint="{ active: true, callback: onTopEdgeEnter}"/>
    <div class="letter-container" ref="bigType">
      <template v-for="n in stringLetters.length">
        <div class="letter-wrapper" v-for="i in 9">
          <div :style="{ fontWeight:  fontWeight(i) }">
            <div v-if="i===1" class="outer-letter" v-waypoint="{ active: true, callback: onLetterEnter}">
              <div class="root-letter" :style="{ transform: animationCalc(i,n)}">
                {{ stringLetters[n-1] }}
              </div>
            </div>
            <div v-else="i===1" class="outer-letter">
              <div class="root-letter" :style="{ transform: animationCalc(i,n)}">
                {{ stringLetters[n-1] }}
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {

  data: function() {
    return {
      string: 'Tribby Type',
      rotated: 0,
      grid: [],
      lastScrollY: 0,
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 1] // [0.25, 0.75] if you want a 25% offset!
      } // 
    }
  },
  beforeMount () {
    this.randomizeTransform();
  },
  methods: {
    onTopEdgeEnter ({ going, direction }) {

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        this.rotated = true
        this.topEnter = true
        this.$store.commit('setDark', true)
      }

      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        this.topEnter = false
      }
    },
    onLetterEnter ({ going, direction }) {

      if (direction === this.$waypointMap.DIRECTION_TOP) {
        if(this.topEnter == true) {
            this.rotated = true
            this.$store.commit('setDark', true)
            console.log('wtf')
        }
      }
      if (direction === this.$waypointMap.DIRECTION_BOTTOM) {
        this.rotated = false
        this.$store.commit('setDark', false)
        this.randomizeTransform()
      }
    },
    randomizeTransform: function() {
        let gridCalc = []
        // r < length of string without spaces, i.e. # of rows
        for (let r = 0; r<this.stringLetters.length; r++) {
          gridCalc[r] = []
          for (let c = 0; c < 9; c++ ) {
            let randomTranslate = Math.floor(Math.random() * 16) - 8;
            gridCalc[r][c] = randomTranslate;
          }
        }
        this.grid = gridCalc
    },
    animationCalc: function(i,n) {
      if(this.rotated) {
        return `rotate3d(-1, 1, 0, 50deg) translate3d(${this.grid[n-1][i-1]}vw,${this.grid[n-1][i-1]}vw,0)`
      } else {
        return `rotate3d(-1, 1, 0, 50deg) translate3d(0,0,0)`
      }
    },
    fontWeight: (i) => {
      return 1000-(i*100)
    },
  },
  computed: {
    stringLetters: function() {
      return this.string.split('').filter((item) => item != ' ')
    }
  }

}
</script>
<style lang="scss" scoped>
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
  text-transform: uppercase;
  transition: transform 0.9s ease;

}


</style>