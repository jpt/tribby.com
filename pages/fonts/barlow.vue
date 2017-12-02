<template>
  <div id="minisite">
    <div class="preload">
      <template v-for="font in allStyles">
        <span :style="{ fontFamily: font }">&zwnj;</span>
      </template>
    </div>
    <div class="top">
      <div class="header">
        <div class="menu">
          <h1 class="barlow">Barlow</h1>
          <ul>
            <li><a href="specimen">Interactive Specimen</a></li>
            <li><a>Story</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
        <hr>
        <div class="intro">
          <div class="mono">
            <h1>Ba</h1>
          </div>
          <div>
            <p>Barlow is a slightly rounded, low-contrast, grotesk font superfamily designed by Jeremy Tribby. The typeface draws from the visual style of the California public, sharing qualities with the state's car plates, highway signs, busses, and trains. Barlow is free, open source software.</p>
            <div class="download">
              <a href="https://github.com/jpt/barlow/archive/master.zip">Download Barlow v1.2</a>
              <a href="https://fonts.google.com/specimen/Barlow" target="_blank">Google Fonts</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <hr class="thin">
      </div>
      <div class="hero">
        <div class="carousel">
          <h1 class="style">{{ carouselStateToStyle || 'Regular' }}</h1>
          <template v-for="(width, wi) in widths">
            <template v-for="(style, si) in styles">
              <transition name="ease-in-fast-out">
                <div class="slide" :class="{  }">
                  <div class="headline" :class="{ italic: style === 'Italic', active: isActive(wi,si) }" v-for="weight in reversedWeights">
                    <h2 :style="{ fontFamily: barlowFamily(width,weight.name,style), fontWeight: barlowWeight(weight) }">You weary giants of flesh and steel.</h2>
                  </div>
                </div>
              </transition>
            </template>
          </template>
        </div>
      </div>
    </div>
    <div class="section comingsoon">
      <h1 class="title">Interactive Specimen (In development -- check back soon!)</h1>
      <hr class="thin black">
      <h2 class="title sub">Pick a weight, width, style, and case for the body text below.</h2>
    </div>
    <div class="section specimen">
<!--       <div class="texttype">
        <div><a class="active">Headings</a></div>
        <div><a>Body text</a></div>
      </div> -->
      <div class="styles">
        <ul>
          <li v-for="weight in weights">
            <a :class="{ active: isWeight(weight.name) }" @click="updateWeight(weight.name)">{{ weight.name }} </a>
          </li>
        </ul>
        <ul>
          <li v-for="width in widths">
            <a :class="{ active: isWidth(width) }" @click="updateWidth(width)">{{ width }} </a>
          </li>
        </ul>
        <ul>
          <li v-for="style in styles">
            <a :class="{ active: isStyle(style) }" @click="updateStyle(style)">{{ style }} </a>
          </li>
        </ul>
        <ul>
          <li v-for="caseKind in cases">
            <a :class="{ active: isCase(caseKind) }" @click="updateCase(caseKind)">{{ caseKind }} </a>
          </li>
        </ul>
      </div>
      <div class="examples">

        <h2 class="title sub">Click or tap the text to edit.</h2>
<!--         <div v-for="pair in pairs">
          <div class="size">{{ pair[0] }}px / {{ pair[1] }}px</div>
          <div>
            <p contenteditable spellcheck="false" @input="updateText" :style="{ display: 'inline', fontSize: pair[0] + 'px', lineHeight: pair[1] + 'px', fontFamily: selectedFontFamily, textTransform: caseCSS }">{{ bodyText }}</p>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  head () {
    return {
      title: 'Barlow: A font superfamily by Jeremy Tribby'
    }
  },
  data () {
    return {
      fps: 0.4,
      fpsInterval: 0,
      startTime: 0,
      now: 0,
      then: 0,
      elapsed: 0,
      carouselState: 0,
      carouselItalic: 0,
      carouselCurrentWidth: 'Regular',
      carouselCurrentStyle: 'Roman',
      selectedStyle: 'Roman',
      selectedWidth: 'Regular',
      selectedWeight: 'Regular',
      selectedCase: 'Default',
      bodyText: 'There\'s a time when the operation of the machine becomes so odious, makes you so sick at heart, that you can\'t take part! You can\'t even passively take part! And you\'ve got to put your bodies upon the gears and upon the wheels…upon the levers, upon all the apparatus, and you\'ve got to make it stop! And you\'ve got to indicate to the people who run it, to the people who own it, that unless you\'re free, the machine will be prevented from working at all!',
      weights: {
        'Thin': {
          name: 'Thin',
          css: 100
        },
        'ExtraLight': {
          name: 'ExtraLight',
          css: 200
        },
        'Light': {
          name: 'Light',
          css: 300
        },
        'Regular': {
          name: 'Regular',
          css: 400
        },
        'Medium': {
          name: 'Medium',
          css: 500
        },
        'SemiBold': {
          name: 'SemiBold',
          css: 600
        },
        'Bold': {
          name: 'Bold',
          css: 700
        },
        'ExtraBold': {
          name: 'ExtraBold',
          css: 800
        },
        'Black': {
          name: 'Black',
          css: 900
        }
      },
      widths: [
        'Regular',
        'SemiCondensed',
        'Condensed'
      ],
      styles: [
        'Roman',
        'Italic'
      ],
      cases: [
        'Uppercase',
        'Lowercase',
        'Default',
        'Title Case'
      ]
    }
  },
  methods: {
    isActive: function (wi, si) {
      return wi === this.carouselState && si === this.carouselItalic
    },
    onInterval: function () {
      let now = Date.now()
      this.elapsed = now - this.then
      if (this.elapsed > this.fpsInterval) {
        this.then = now - (this.elapsed % this.fpsInterval)
        if (this.carouselItalic === 0) {
          this.carouselItalic = 1
        } else if (this.carouselItalic === 1) {
          this.carouselItalic = 0
          if (this.carouselState === 2) {
            this.carouselState = 0
          } else {
            this.carouselState += 1
          }
        }
      }

      requestAnimationFrame(this.onInterval)
    },
    // isActive: function (width) {
    //   return width === this.carouselState
    // },
    barlowFamily: function (width, weight, style) {
      if (style === 'Roman') {
        style = ''
      }
      let fontName = ''
      if (width === 'Regular') {
        fontName = 'Barlow'
      } else if (width === 'SemiCondensed') {
        fontName = 'BarlowSemicondensed'
      } else if (width === 'Condensed') {
        fontName = 'BarlowCondensed'
      }
      if (weight === 'Regular' && style === 'Italic') {
        weight = ''
      }
      return fontName + '-' + weight + style
    },
    barlowWeight: function (weight) {
      return weight.css
    },
    updateText (e) {
      this.bodyText = e.target.innerText
    },
    updateWeight: function (weight) {
      this.selectedWeight = weight
    },
    updateWidth: function (width) {
      this.selectedWidth = width
    },
    updateCase: function (caseKind) {
      this.selectedCase = caseKind
    },
    updateStyle: function (style) {
      this.selectedStyle = style
    },
    fontWeightCSS: function (fontWeight) {
      return this.weights[fontWeight].css
    },
    isWeight: function (weight) {
      return this.selectedWeight === weight || (this.selectedWeight === '' && this.selectedStyle === 'Italic')
    },
    isWidth: function (width) {
      return this.selectedWidth === width || (this.selectedWidth === '' && width === 'Regular')
    },
    isStyle: function (style) {
      return (this.selectedStyle === '' && this.selectedWeight === 'Regular') || this.selectedStyle === style || (this.selectedStyle === '' && style === 'Roman')
    },
    isCase: function (caseKind) {
      return this.selectedCase === caseKind
    }
  },
  mounted () {
    // setInterval(this.onInterval, 2000)
    this.fpsInterval = 1000 / this.fps
    this.then = Date.now()
    this.startTime = this.then
    requestAnimationFrame(this.onInterval)
  },
  computed: {
    carouselStateToStyle: function () {
      switch (this.carouselState) {
        case 0:
          return 'Regular'
        case 1:
          return 'SemiCondensed'
        case 2:
          return 'Condensed'
      }
    },
    activeCarouselState: function () {
      return this.carouselState
    },
    reversedWeights: function () {
      return _.orderBy(this.weights, 'css', 'desc')
    },
    selectedFontFamily: function () {
      let wi = this.selectedWidth
      let we = this.selectedWeight
      let st = this.selectedStyle

      if (this.selectedWidth === 'Regular') {
        wi = ''
      }
      if (this.selectedStyle === 'Roman') {
        st = ''
      }
      if (this.selectedStyle === 'Italic' && this.selectedWeight === 'Regular') {
        we = ''
      }
      return 'Barlow' + wi + '-' + we + st
    },
    caseCSS: function () {
      switch (this.selectedCase) {
        case 'Default':
          return ''
        case 'Uppercase':
          return 'uppercase'
        case 'Lowercase':
          return 'lowercase'
        case 'Title Case':
          return 'capitalize'
      }
    },
    allStyles: function () {
      let fonts = []
      for (let weight = 0; weight < Object.keys(this.weights).length; weight++) {
        for (let width = 0; width < this.widths.length; width++) {
          for (let style = 0; style < this.styles.length; style++) {
            let wi = this.widths[width]
            let st = this.styles[style]
            let wh = Object.keys(this.weights)[weight]

            if (wh === 'Regular' && st === 'Italic') {
              wh = ''
            }
            if (wi === 'Regular') {
              wi = ''
            }
            if (st === 'Roman') {
              st = ''
            }

            let font = ['Barlow', wi, '-', wh, st].join('') // join because regular concatenation will force the string 'undefined'
            fonts.push(font)
          }
        }
      }
      return fonts
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~assets/styles/globals.scss";
@import "~assets/styles/fonts.scss";
@import "~susy/sass/susy";
@import "~breakpoint-sass/stylesheets/breakpoint";

$sm: 480px;
$md: 786px;
$lg: 1024px;
$xl: 1220px;
$xxl: 1440px;

$bg: #15161c;
$white: #fafaf0;
$black: #15161c;


.text-type {
  display: flex;
  flex-direction: coumn;
}
.ease-in-fast-out-enter-active, .ease-in-fast-out-leave-active {
  transition: opacity .5s;
  opacity: 1;
}
.ease-in-fast-out-enter, .ease-in-fast-out-leave-to {
  opacity: 0;
}

.menu li {
  font-family: 'Barlow-Medium';
}
.menu {
  display: none;
  @include breakpoint($md) {
    display: block;
  }
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,html {
  background-color: $black;
}

sup,sub {
  font-size: 0.5em;
  font-family: 'Barlow-Regular';
  font-weight: 400;
}

h1.title {
  font-family: 'Barlow-ExtraLight';
  font-size: 40px;
  @include breakpoint($xl) {
    font-size: 50px;
  }
  max-width: 1200px;
  font-weight: 275;
  margin-bottom: 1em;
  letter-spacing: 1px;
  text-transform: none;
  color: $black;
}
h2.title {
  font-family: 'Barlow-Regular';
  font-size: 20px;
  // @include breakpoint($xl) {
  //   font-size: 30px;
  // }
  max-width: 1200px;
  font-weight: 400;
  margin-bottom: 2.6em;
  text-transform: none;
  color: rgba(0,0,10,0.33);
  margin-top: 0;
}
h1.style {
  font-family: 'Barlow-ExtraLight';
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 35px;
  font-feature-settings: "smcp";
  letter-spacing: 3px;
  color: rgba(255,255,255,0.25);
}

// .slide:nth-of-type(1) {
//   opacity: 1;
// }
// .slide {
//   position: absolute;
//   opacity: 1;
//   height: 100%;
// }

.headline {
  display: block;
  position: absolute;
  opacity: 0;

}
.headline.active {
  display: block;
  opacity: 1;
  position: relative;
}

// .slide:nth-of-type(1) {
//   animation:fade 8s infinite;
// } 
// .slide:nth-of-type(2) {
//   animation:fade2 8s infinite;
// }
// .slide:nth-of-type(3) {
//   animation: fade3 8s infinite;
// }
// .slide:nth-of-type(4) {
//   animation: fade4 8s infinite;
// }

// .slide:nth-of-type(5) {
//   animation: fade5 8s infinite;
// }
// .slide:nth-of-type(6) {
//   animation: fade6 8s infinite;
// }


.italic {
  font-style: italic;
}

div.menu ul {
  display: none;
  @include breakpoint($md) {
    display: flex;
  }
}
div.menu {
  display: flex;
  align-content: flex-end;
  justify-content: space-between;
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    display: inline;
    font-feature-settings: "smcp"; 
    text-transform: lowercase;
    font-family: 'Barlow-SemiBold';
    letter-spacing: 0.07em;
    font-weight: 600;
    font-size: 14px;
    line-height: 28px;
    margin-right: 3em;
    a {
      transition: opacity 120ms linear;
      opacity: 0.85;
      &:hover {
        transition: opacity 220ms ease-in;
        opacity: 1;
        cursor: pointer;
      }
    }

  }
  ul li:last-of-type {
    margin-right: 0;
  }
}

span {
  display: none;
  @include breakpoint($md) {
    display: inline;
  }
}

.section {
  padding: 0 5%;
  @include breakpoint($md) {
    padding: 0 10%;
  }
  // margin-bottom: 80px;
}


.barlow {}
hr {
  border-top: 8px solid $white;
  position: relative;
  max-width: 1200px;
  align: left;
  &:first-of-type {
    margin-bottom: 2em;
  }

}
hr.thin {
  margin-top: 90px;
  border-top: 1px solid $white;
}
hr.thin.black {
  margin-top: 90px;
  border-top: 1px solid $black;
}
.container {

  // max-width: 720px;
  // padding-left: 20px;
  // padding-right: 20px;
  @include breakpoint(1024px) {

  }

  width: 100%;
}

.download {

  margin-top: 2.8em;
  @include breakpoint($xl) {
    margin-top: 1.4em !important;
  }
  @include breakpoint($xxl) {
    margin-top: 3.1em !important;
  }
  display: flex;
  flex-direction: column-reverse;
  @include breakpoint($lg) {
    flex-direction: column;
  }
  font-size: 16px;

  a {
    width: 350px;
    margin-bottom: 1em;
    width: 100%;
    text-align: center;
    border: 1px solid $white;
    padding: 1em 4.5em;
    margin-right: 1em;
    color: $white;
    text-decoration: none;
    border-radius: 5px;
    font-family: 'Barlow-Medium';
    font-weight: 500;
    letter-spacing: 0.3px;

    @include breakpoint($md) {
      a {
        margin-bottom: 0;
        margin-top: 20px;
        max-width: 350px;
        padding: 1.3em 2.1em;
     }
    }

    &:hover, &:first-of-type {
      color: $white;
      border: 1px solid $white;
      background-color: $black;
      @include breakpoint($lg) {
        color: $black;
        border: 1px solid $black;
        background-color: $white;
        &:hover, &:first-of-type {
          color: $black;
          border: 1px solid $black;
          background-color: $white;
        }
      }
    }
    &:nth-of-type(2) {
      color: $black;
      border: 1px solid $black;
      background-color: $white;
      &:hover, &:first-of-type {
        color: $black;
        border: 1px solid $black;
        background-color: $white;
      }
      @include breakpoint($lg) {
         color: $white;
      border: 1px solid $white;
      background-color: $black;
      }
    }
  }
   @include breakpoint($lg) {
    flex-direction: row;
    a {
      min-width: 210px;
      padding: 1.3em 0;
      margin-top: 0;
      margin-bottom: 0;
    }
   }
    @include breakpoint($xl) {

    a {
      margin-bottom: 0;
      margin-top: 20px;
      max-width: 350px;
      min-width: 270px;
      padding: 1.3em 2.4em;
    }
    margin-top: 1.6em;

   }
  @include breakpoint($xl) {
    flex-direction: row;
    margin-top: 1.6em;
  }
}

.mono h1 {
  position: relative;
  padding: 0;
  margin: 0;
  font-size: 300px;
  // transform: rotate(8deg);
  line-height: 190px;
  vertical-align: top;
  text-transform: none;
  font-family: 'Barlow-ExtraLight';
  font-weight: 275;
  margin-left: -32px;
}

.intro {

  display: flex;
  flex-direction: column;
  @include breakpoint($lg) {
    flex-direction: row;
  }
  @include breakpoint($lg) {
    div:first-of-type {
      margin-right: 80px;
    }
  }

  div > p {
    margin-top: 75px;
    @include breakpoint($lg) {
      margin-top: 0;
    }
  }

}




.hero {
  max-width: $xxl;
  // overflow-x: auto;

  // padding-top: 30px;
  font-size: 3.3vw;

  @include breakpoint($xxl) {
    font-size: 48px;
  }

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

}
.header {

  color: $white;
  font-size: 1.5em;
}

.top h2 {
  color: $white;
}

.header p {
  // @include breakpoint($md) {
  //   margin-left: 5em;
  // }
  max-width: 100%;
  width: 100%;
  @include breakpoint($lg) {
    width: 420px;
    max-width: 700px;
  }
  @include breakpoint($xl) {
    width: 580px;
  }
  @include breakpoint($xxl) {
    width: 700px;
  }
  font-family: 'Barlow-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.8em;
  color: $white;

}


h1.barlow {

  font-family: 'BarlowCondensed-SemiBold';
  font-size: 28px;
  margin-bottom: 2.5em;
  padding: 0;
  letter-spacing: 2px;
  text-transform: uppercase;
}


.preload {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.size {
  margin-top: 35px;
  font-size: 12px;
  color: #a9a9a9;
  margin-bottom: 7px;
}

.examples {
  // margin-left: 208px;

}

.examples p:focus {
    outline: none;
}

.comingsoon {

}
.section:not(.specimen) {
  // padding: 0 10%;
  margin-top: 80px;

  
}

.top > div {
  padding: 0 5%;
  @include breakpoint(420px) {
    padding: 0 10%;
  }
  width: 100%;
  padding: 0 10%;

}
.top {
  padding-top: 50px;
  @include breakpoint($md) {
    padding-top: 80px;
  }
  background-color: $black;
  padding-bottom: 10em;
}



.width {
  font-size: 1em;
}


.styles {

  display: flex;
  flex-direction: row;
  // direction: ltr;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  min-width: 590px;
  float: left;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 40px;


  > ul > li {
    font-feature-settings: "smcp"; 
    text-transform: lowercase;
    font-family: 'Barlow-Regular';
    letter-spacing: 0.07em;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;


    &:hover {
      cursor: pointer;
    }

  }
  p {
    margin-bottom: 2em;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  }
  ul {
    list-style-type: none;
    margin-bottom: 2em;
    margin-right: 2em;
    float: left;
  }
  li {
    overflow: hidden;
    font-size: 1em;
    line-height: 1.35em;
    font-weight: 400;
  }

  h1 {
    font-family: 'Barlow-ExtraBold';
    font-size: 60px;
    margin-bottom: 20px;
    margin-left: -5px;
    padding: 0;
  }
  li a {
    display: inline-block;
    &:after {
      content: '';
      display: block;
      margin-top: -4px;
      height: 1px;
      width: 0%;
      background: #000;
      transition: width 150ms;
    }
    &.active {
      &:after {
        width: 100%;
      }
    }
  }


  .examples p:focus {
      outline: none;
  }

}


</style>
