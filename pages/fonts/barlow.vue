<template>
  <div id="minisite">
    <div class="preload">
      <template v-for="font in allStyles">
        <span :style="{ fontFamily: font }">&zwnj;</span>
      </template>
    </div>
    <div class="top">
      <div class="header">
        <h1>Barlow</h1>
        <hr>
        <p>Barlow is a slightly rounded, low-contrast, grotesk type family designed by Jeremy Tribby. Drawing from the visual style of the California public, Barlow shares qualities with the state's car plates, highway signs, busses, and trains. Barlow is free, open source software.</p>
      </div>
      <div class="download">
        <a href="https://github.com/jpt/barlow/archive/master.zip">Download Barlow v1.2</a>
        <a href="https://fonts.google.com/specimen/Barlow" target="_blank">Google Fonts</a>
      </div>
      <div>
        <hr class="thin">
      </div>
      <div class="hero">
        <div class="carousel">
          <template v-for="(width, wi) in widths">
            <template v-for="(style, si) in styles">
              <div class="slide" :class="{ italic: style === 'Italic', active: isActive(wi,si)}" v-for="weight in reversedWeights">
                <h2 :style="{ fontFamily: barlowFamily(width,weight.name,style), fontWeight: barlowWeight(weight) }">You weary giants of flesh and steel.</h2>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>
    <!-- <div class="middle">
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
        <div v-for="pair in pairs">
          <div class="size">{{ pair[0] }}px / {{ pair[1] }}px</div>
          <p contenteditable spellcheck="false" @input="updateText" :style="{ fontSize: pair[0] + 'px', lineHeight: pair[1] + 'px', fontFamily: selectedFontFamily, textTransform: caseCSS }">{{ bodyText }}</p>
        </div>
      </div> -->
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
      carouselState: 0,
      carouselItalic: 0,
      carouselCurrentWidth: 'Regular',
      carouselCurrentStyle: 'Roman',
      selectedStyle: 'Roman',
      selectedWidth: 'Regular',
      selectedWeight: 'Regular',
      selectedCase: 'Default',
      bodyText: 'You weary giants of flesh and steel.',
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
      ],
      pairs: [
        [54, 84],
        [48, 82],
        [36, 58],
        [30, 52],
        [24, 42],
        [18, 30],
        [16, 27],
        [14, 24],
        [12, 20]
      ]
    }
  },
  methods: {
    isActive: function (wi, si) {
      return wi === this.carouselState && si === this.carouselItalic
    },
    onInterval: function () {
      console.log(this.carouselItalic)
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
    },
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
    setInterval(this.onInterval, 2000)
  },
  computed: {
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
$lg: 1440px;
$bg: #15161c;
$white: #fafaf0;
$black: #15161c;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body,html {
  background-color: $black;
}
#minisite {


}

.slide {
  display: none;
}

.active {
  display: block;
}

.italic {
  font-style: italic;
}

span {
  display: none;
  @include breakpoint($md) {
    display: inline;
  }
}

.top > div {
  padding: 0 5%;
  @include breakpoint($md) {
    padding: 0 10%;
  }
}

.top {
  padding-bottom: 10em;
}
hr {
  border-top: 8px solid $white;
  position: relative;
  max-width: 1200px;
  align: left;
  &:first-of-type {
    margin-bottom: 40px;
  }

}
hr.thin {
  margin-top: 90px;
  border-top: 1px solid $white;
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
   margin-top: 4.8em;
   margin-bottom: 2.5em;
   display: flex;
   flex-direction: column;
   a {
    min-width: 310px;
    margin-bottom: 1em;
    width: 100%;
    text-align: center;
   }
   @include breakpoint($md) {
    flex-direction: row;
    a {
      margin-bottom: 0;
      max-width: 310px;
    }
   }
}
.download a {

  border: 1px solid $white;
  padding: 1em 4.5em;
  margin-right: 1em;
  color: $white;
  text-decoration: none;
  border-radius: 5px;
  font-family: 'Barlow-Medium';
  font-weight: 500;
  letter-spacing: 0.3px;

  &:hover, &:first-of-type {
    color: $black;
    border: 1px solid $black;
    background-color: $white;
  }
}
.intro {

}


.top {
  padding-top: 80px;
  background-color: $black;
}

.top .container {

}
.hero {
  max-width: $lg;
  overflow-x: auto;

  // padding-top: 30px;
  padding-bottom: 90px;
  font-size: 3.3vw;

  @include breakpoint($lg) {
    font-size: 48px;
  }

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

}
.header {

  color: $white;
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}

.top h2 {
  color: $white;
}

.header p {
  // @include breakpoint($md) {
  //   margin-left: 5em;
  // }
  max-width: 700px;
  font-family: 'Barlow-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.8em;
  color: $white;

}

h1 {

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
  width: 100%;
  max-width: 720px;
}

.width {
  font-size: 1em;
}

.styles {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  min-width: 590px;
  // float: left;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;

}

.styles > ul > li {
  font-feature-settings: "smcp"; 
  text-transform: lowercase;
  font-family: 'Barlow';
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
</style>
