<template lang="pug">
div.home
  section.blog
    article
      h1 Available Now on Google Fonts: Barlow
      h5 Nov 15 
      img(src="https://raw.githubusercontent.com/jpt/barlow/master/documentation/barlow.gif")

      p Barlow is a slightly rounded, low-contrast, grotesk type family designed by Jeremy Tribby. Drawing from the visual style of the California public, Barlow shares qualities with the state's car plates, highway signs, busses, and trains.

      p The open source, free type family includes 54 styles in three widths and nine weights, as well as italics, suitable for large and small digital and print use. Customizable weights and widths are available via the included variable font (GX) file.

      p Barlow is named after internet pioneer, EFF co-founder, songwriter, and activist John Perry Barlow, in tribute to his lasting impact on the information superhighway. Please consider making a donation to the #[a(href='https://www.johnperrybarlow-wellnesstrust.com/') John Perry Barlow Wellness Trust].

      p #[a(href='https://github.com/jpt/barlow/archive/master.zip') Download Barlow directly] or fork it on #[a(href='https://github.com/jpt/barlow') Github].

      p Barlow is available for embedding through Google Fonts: visit the specimen for #[a(href='https://fonts.google.com/specimen/Barlow') Barlow], #[a(href='https://fonts.google.com/specimen/Barlow+Condensed') Barlow Condensed], and #[a(href='https://fonts.google.com/specimen/Barlow+Semi+Condensed') Barlow Semi Condensed].

    article
      h1 Cleanup on aisle you.
      h5 October 15th
      p Slowly rebuilding the website. Some stuff coming from the archives soon.
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