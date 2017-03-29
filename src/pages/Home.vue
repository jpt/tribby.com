<template lang="pug">
div.home
  section.blog
    article
      h1 Coming Soon: Barlow
      h5 March 25th
      img(src="https://raw.githubusercontent.com/jpt/barlow/master/documentation/barlow.gif")

      p Barlow is a variable font superfamily I've been working on. It comes out of the box with roman and obliques spanning 54 suggested styles in three widths and nine weights. It's pretty usable right now with 165/219 glyphs completed so far -- you can #[a(href="https://github.com/jpt/barlow") download the work in progress on GitHub].
    article
      h1 Cleanup on aisle you.
      h5 March 15th
      p Rebuilding the website. Some stuff coming from the archives soon.
</template>
<style lang="sass">

@import "../styles/globals.scss";

section.blog {
  margin-top: 22px;
}
section.blog article {
  h1 {
    margin-bottom: 8px;
  }

  h5 {
    color: $grey-medium;
    margin-top: 0px;
    margin-bottom: 20px;
  }

  margin-bottom: 50px;
}

// overrideing: 
// div.container img:not(.logo) {
//   @include susy-media($md) {
//     width: auto;
//     margin-left: (100% - $container) / 2;
//     margin-right: (100% - $container) / 2;
//     max-width: $container;
//   }
// }

// div.home img:not(.logo) {
//   @include susy-media($md) {
//     width: auto;
//     margin-left: (90% - $container) / 2;
//     margin-right: (90% - $container) / 2;
//     max-width: $container + 10%;
//   }
// }
</style>