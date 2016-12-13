<template lang="pug">
div.page
  router-view
</template>

<script>

</script>
<style lang="sass">
@import "../styles/globals.scss";
.page div {

  &:first-of-type {

    margin-top: 80px;
    @include susy-breakpoint($sm) {
      margin-top: 40px;
    }
  }
  a {
    text-decoration: none;
    color: rgba(18,133,277,1);
  }
  h1 {
    margin-bottom: 0.6em;
  }
  p {
    font-size: 1.05em;
    line-height: 1.8em;
    @include susy-media($sm) {
      font-size: 1.2em;
      line-height: 1.7em;
    }
    max-width: 28em;
    margin-bottom: 1em;
  }

  img {
    margin-top: 20px;
    margin-bottom: 40px;
    max-width: 100%;
    @include susy-media($md) {
      max-width: 40em;
    }
    border: 1px solid #e6e6e6;
  }
}
</style>