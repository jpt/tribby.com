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
            <li><nuxt-link to="#specimen">Interactive Specimen</nuxt-link></li>
            <li><nuxt-link to="#story">Story</nuxt-link></li>
            <li><a href="https://github.com/jpt/barlow" target="_new">Github</a></li>
            <li><a href="mailto:jeremy@tribby.com">Contact</a></li>
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
                <div class="slide">
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
    <div class="section specimen">
      <div class="heading">
        <a name="specimen" id="specimen"></a>
          <h1 class="title">Interactive Specimen</h1>
          <hr class="thin black">
          <h2 class="title sub">Pick a weight, width, style, and case for the body text below.</h2>
        </div>
      </div>
<!--       <div class="texttype">
        <div><a class="active">Headings</a></div>
        <div><a>Body text</a></div>
      </div> -->
      <div class="styles-wrapper" @scroll="removeStyles">
        <div class="scroll" :class="{ active: scrollState === 'scrolled' }">Swipe for more options &gt;</div>
        <div class="styles">
          <ul>
            <li>Type</li>
            <li v-for="type in types">
              <a :class="{ active: isType(type) }" @click="updateType(type)">{{ type }}</a>
            </li>
          </ul>
          <ul>
            <li>Weight</li>
            <li v-for="weight in weights">
              <a :class="{ active: isWeight(weight.name) }" @click="updateWeight(weight.name)">{{ weight.name }} </a>
            </li>
          </ul>
          <ul>
            <li>Width</li>
            <li v-for="width in widths">
              <a :class="{ active: isWidth(width) }" @click="updateWidth(width)">{{ width }} </a>
            </li>
          </ul>
          <ul>
            <li>Style</li>
            <li v-for="style in styles">
              <a :class="{ active: isStyle(style) }" @click="updateStyle(style)">{{ style }} </a>
            </li>
          </ul>
          <ul>
            <li>Case</li>
            <li v-for="caseKind in cases">
              <a :class="{ active: isCase(caseKind) }" @click="updateCase(caseKind)">{{ caseKind }} </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="section examples">
        <h3>Vincent to Theo Van Gogh</h3>
        <h4>The Hague, 1883</h4>
        <!-- <div class="size">16px / 36px</div> -->
          <!-- <p contenteditable spellcheck="false" @input="updateText" :style="{ display: 'inline', fontSize: '18px', lineHeight: '25px', fontFamily: selectedFontFamily, textTransform: caseCSS }">{{ bodyText }}</p>
 -->
<!--   <p contenteditable spellcheck="false" @input="updateText" :style="{ display: 'inline', fontSize: pair[0] + 'px', lineHeight: pair[1] + 'px', fontFamily: selectedFontFamily, textTransform: caseCSS }">{{ bodyText }}</p>
</div> -->
          <div class="example">
            <p :style="{ display: 'inline', fontFamily: selectedFontFamily, textTransform: caseCSS }">In my opinion, I am often rich as Crœsus, not in money, but (though it doesn't happen every day) rich, because I have found in my work something to which I can devote myself heart and soul, and which gives inspiration and significance to life.
            <br><br>Of course my moods vary, but there is an average of serenity. I have a sure faith in art, a sure confidence that it is a powerful stream, which hears a man to harbour, though he himself must do his bit too; and at all events I think it such a great blessing, when a man has found his work, that I cannot count myself among the unfortunate. I mean, I may be in certain relatively great difficulties, and there may be gloomy days in my life, but I shouldn't want to be counted among the unfortunate nor would it be correct.
            <br><br>You write in your letter something which I sometimes feel also: “Sometimes I do not know how I shall pull through.”
            <br><br>Look here, I often feel the same in more than one respect, not only in financial things, but in art itself, and in life in general. But do you think that something exceptional? Don't you think every man with a little pluck and energy has those moments?
            <br><br>Moments of melancholy, of distress, of anguish, I think we all have them, more or less, and it is a condition of every conscious human life. It seems that some people have no self-consciousness. But those who have it, they may sometimes be in distress, but for all that they are not unhappy, nor is it something exceptional that happens to them.
            <br><br>And sometimes there comes relief, sometimes there comes new inner energy, and one rises up from it, till at last, some day, one perhaps doesn't rise up any more, que soit, but that is nothing extraordinary, and I repeat, such is the common human fate, in my opinion.</p>
          </div>
        </div>
        <!-- <h2 class="title sub">Click or tap the text to edit.</h2> -->
<!--         <div v-for="pair in pairs">
          <div class="size">{{ pair[0] }}px / {{ pair[1] }}px</div>
          <div>
            <p contenteditable spellcheck="false" @input="updateText" :style="{ display: 'inline', fontSize: pair[0] + 'px', lineHeight: pair[1] + 'px', fontFamily: selectedFontFamily, textTransform: caseCSS }">{{ bodyText }}</p>
          </div>
        </div> -->
<!--       </div> -->
      <div class="section story black">
        <a name="story" id="story"></a>
        <h1 class="title">Story</h1>
        <hr class="white thin">
        <p>A few years ago I worked at the Electronic Frontier Foundation, where I quickly bonded with art director Hugh D'Andrade over our shared affinity for fonts derived from the DIN Engschrift grid, and we agreed there wasn't a good open source option. Somewhere along the line I got good photo of the original Engschrift grid from designer <a href="http://nitrofurano.altervista.org/">Paulo Silva</a> and started to draw out some ideas. Over the next few months I helped to host a <a target="_new" href="https://craftingtype.com/">Crafting Type</a> workshop with instructors Dave Crossland and Thomas Phinney, and then another, along with my colleague Soraya Okuda. Dave and Thomas were excited about variable fonts and I began to form ideas about Barlow with the new font technology in mind.</p>
        <img src="~/assets/early.jpg">
        <p>The font was named after EFF co-founder, activist, songwriter, and cattle wrancher <a target="_new" href="https://en.wikipedia.org/wiki/John_Perry_Barlow">John Perry Barlow</a>, in tribute to his lasting impact on the information superhighway. Even in tribute, I didn't want to name the font after someone who didn't like the way it looked, so I asked a lawyer who asked a designer who asked a squire, and eventually I met with him while <a href="https://en.wikipedia.org/wiki/John_Gilmore_(activist)">John Gilmore</a> happened to be around. Gilmore and Barlow debated the techno dystopia and utopia as it can play out in the world of web fonts and content distribution. It was a fascinating conversation, and I was relieved and honored to walk away with Barlow's approval.</p>
        <p>As I worked on the font family and thought about my meeting with giants of activism in California, I looked at ways to incorporate the public aspects of my native state -- its highway and train signs, especially -- deeper into the font's aesthetic. Our BART train system uses typefaces a bit rounder than the average street sign, and you can see this especially in Barlow's heavier weights.</p>
        <p>Barlow is free software, released under the SIL Open Font License. If you find it useful and you'd like to throw a zillionth of a bitcoin my way, the address is:</p>
        <p class="btc">12KGiXzkWnkyw9KRC1Fa1RBSFg6TMvYThf</p>
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
      scrollState: 'unscrolled',
      carouselCurrentWidth: 'Regular',
      carouselCurrentStyle: 'Roman',
      selectedType: 'Body text',
      selectedStyle: 'Roman',
      selectedWidth: 'Regular',
      selectedWeight: 'Regular',
      selectedCase: 'Default',
      bodyText: '',
      types: [
        // 'Headline',
        // 'Sub headline',
        'Body text'
      ],
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
    removeStyles: function () {
      this.scrollState = 'scrolled'
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
    updateType: function (type) {
      this.selectedType = type
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
    },
    isType: function (type) {
      return this.selectedType === type
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


div.story {
  img {
    max-width: 800px;
    width: 100%;
    padding-bottom: 60px;
  }
  h1 {
    font-family: 'Barlow-Regular';
    font-weight: 400;
  }
  padding-bottom: 120px;
  p {
    padding-bottom: 42px;
    font-family: 'Barlow-Medium';
    font-weight: 500;
    max-width: 700px;
    font-size: 18px;
    line-height: 34px;
  }
  p.btc {
    font-family: 'Barlow-SemiBold';
    font-weight: 400;
    font-size: 13px;
  }
  p:first-of-type {
    padding-top: 45px;
  }
}
html, body {
  overflow: hidden;
  // height: 100%;
  // width: 100%;
}
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
body, html, .top {
  background-color: $black;
}

sup,sub {
  font-size: 0.5em;
  font-family: 'Barlow-Regular';
  font-weight: 400;
}

h1.title {
  font-family: 'Barlow-Light';
  font-size: 30px;
  @include breakpoint($md) {
    font-family: 'Barlow-ExtraLight';
    font-size: 42px;
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


// .italic {
//   font-style: italic;
// }

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
      text-decoration: none;
      color: $white;
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
  background-color: $white;
  padding: 50px 10% 20px 10%;
  // @include breakpoint($md) {
  //   padding: 0px 5% 70px 5%;;
  // }
  // margin-bottom: 80px;
}

.section.examples {
  padding-top: 100px;
  padding-bottom: 140px;

  margin-top: 0;
  p {
    font-size: 16px;
    line-height: 36px;
    letter-spacing: 0;
  }
  .examples {
    // margin-left: 208px;

  }

  .examples p:focus {
      outline: none;
  }
  .example {
    max-width: $xl;
    column-count: 1;
    @include breakpoint($md) {
     column-count: 2;
     column-gap: 60px;
    }
    @include breakpoint($xl) {
      column-count: 3;
      column-gap: 60px;

    }
  }

  h3 {
    clear: both;
    display: block;
    font-family: 'Barlow-ExtraBold';
    font-weight: 800;
    font-size: 42px;
    padding-top: 30px;
    padding-bottom: 10px;
  }
  h4 {
    font-family: 'BarlowSemiCondensed-Italic';
    opacity: 0.35;
    font-style: italic;
    padding-bottom: 40px;
    font-weight: 400;
    font-size: 33px;
  }
}

.section.black {
  background-color: $black;
  margin: 0;

  * {
    background-color: $black;
    color: $white;
  }
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
.specimen hr {
  margin-bottom: 1em;
}
.heading hr {

}
hr.thin {
  margin-top: 90px;
  border-top: 1px solid $white;
}
hr.thin.black {
  margin-top: 90px;
  border-top: 1px solid $black;
}
hr.black {
  border-color: $black;
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
  font-size: 250px;
  margin-left: -27px;
  @include breakpoint($sm) {
    font-size: 300px;
    margin-left: -32px;
  }
  // transform: rotate(8deg);
  line-height: 190px;
  vertical-align: top;
  text-transform: none;
  font-family: 'Barlow-ExtraLight';
  font-weight: 275;
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
  font-size: 2.5vw;
  @included breakpoint($sm) {
    font-size: 3.3vw;
  }

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
  clear: both;
  display: block;
  padding-top: 20px;
  font-size: 12px;
  color: #a9a9a9;
  margin-bottom: 7px;
}



.comingsoon {

}
.section {
  // padding: 0 10%;
  // margin-top: 80px;

  
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
  padding-bottom: 90px;
}



.width {
  font-size: 1em;
}

.scroll.active {
  opacity: 0;
  transition: opacity 150ms ease-out;
}
.scroll {
  opacity: 1; 
  font-size: 12px;
  font-family: 'Barlow-Medium';
  font-weight: 500;
  position: absolute;
  margin-top: -30px;
  text-align: right;
  width: 100%;
  display: block;
  padding: 0 10%;

  @include breakpoint(560px) {
    opacity: 0;
  }
}
.styles-wrapper {
  clear: both;
  display: block;
  overflow-x: scroll;
  float: left;
  width: 100%;
  background-color: $white;

}

.styles {
  padding-left: 10%;
  // width: 100%;
  color: $black;
  display: flex;
  flex-direction: row;
  // direction: ltr;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 820px;
  min-width: 650px;
  float: left;
  -webkit-overflow-scrolling: touch;
  // padding-bottom: 40px;


  // > ul:nth-of-type(2) {
  //   li:first-of-type {
  //     font-family: 'Barlow-SemiBold';
  //     font-weight: 600;
  //   }
  //   // display: block;
  //   // column-count: 2;
  //   // margin-right: 00px;

  //   // height: 200px;
  //   li {
  //     padding-right: 20px;
  //   }
  // }

  > ul > li {
    font-feature-settings: "smcp"; 
    text-transform: lowercase;
    font-family: 'Barlow-Regular';
    letter-spacing: 0.07em;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;


    @include breakpoint($lg) {
      line-height: 40px;
    }


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
  > ul > li:first-of-type {
    font-family: 'Barlow-SemiBold';
    font-feature-settings: normal;
    letter-spacing: 0;
    font-size: 1em;
    font-weight: 600;
    text-transform: none;
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
      background: $black;
      transition: width 150ms;
    }
    &.active {
      &:after {
        width: 100%;
      }
    }
  }


}


</style>
