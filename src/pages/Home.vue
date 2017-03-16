<template lang="pug">
div.home
  section.blog
    article
      h1 Almsot there.
      h5 2017 March 15th
      p Just need to fix the hamburger menu.
    article
      h1 Cleanup on aisle you.
      h5 2017 February 16th
      p Slowly building out a new website. I'll have some stuff from the archives, soon. Mobile experience is a work in progress (hello, non-fucntioning hamburger button).
</template>
<style lang="sass">

@import "../styles/globals.scss";

section.blog {
  article {
    h1 {
      margin-bottom: 0em;
    }

    h5 {
      line-height: 1.6em;
      color: $grey-medium;
    }
    p:first-of-type {
      margin-top: 22px;
    }

    margin-bottom: 50px;
  }
}
</style>