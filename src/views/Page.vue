<template lang="pug">
div.page
  router-view
</template>

<script>

</script>
<style lang="sass">
@import "../styles/globals.scss";


div.page {
  padding-top: 2em;
  @include susy-media($md) {
    padding-top: 0em;
  }
}

div.container img {
  

  position: relative;
  display: inline-block;
  width: 100%;


}

div.container img:not(.logo) {
  @include susy-media($md) {
    width: auto;
    margin-left: (100% - $container) / 2;
    margin-right: (100% - $container) / 2;
    max-width: $container;
  }
}

div.page > div, div.page > div > div {

  &:first-of-type {

    margin-top: 22px;
    @include susy-media($sm) {
      margin-top: 48px;
    }

  }
  a {
    text-decoration: none;
    color: rgba(18,133,277,1);
  }

  p {
    font-size: 1.05em;
    line-height: 1.8em;
    @include susy-media($sm) {
      font-size: 1.2em;
      line-height: 1.5em;
    }
    margin-left: (100% - $container) / 2;
    margin-right: (100% - $container) / 2;
    max-width: 28em;
    margin-bottom: 1em;
  }

  h1, h5 {
    margin-left: (100% - $container) / 2;
    margin-right: (100% - $container) / 2;
    max-width: 28em;
  }

  img {
    margin-top: 20px;
    margin-bottom: 40px;
    // max-width: 100%;

    border: 1px solid #e6e6e6;
  }
}
</style>