<template lang="pug">
div.home
  section.blog
    article
      h1 Coming Soon: Barlow
      h5 March 25th
      img(src="https://raw.githubusercontent.com/jpt/barlow/master/documentation/barlow.gif")
      p I've been working on a type family called Barlow (coming soon to Google Fonts). It's pretty usable right now with 165/219 glyphs completed so far -- you can #[a(href="https://github.com/jpt/barlow") download the work in progress on GitHub].
    article
      h1 Cleanup on aisle you.
      h5 March 15th
      p Rebuilding the website. Some stuff coming from the archives soon.
</template>
<style lang="sass">

@import "../styles/globals.scss";

section.bog {
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
</style>