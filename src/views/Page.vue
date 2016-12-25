<template lang="pug">
div.page
  router-view
</template>

<script>

</script>
<style lang="sass">
@import "../styles/globals.scss";


div.page div.container {

  @include container(80%);
  @include susy-media($md) {
    @include container(100%);
  }
}

div.page > div > div.container { // subpage
  @include susy-media($md) {
    @include container(80%);
  } 
}
div.page > div > div.container img {
  
  position: absolute;
  left: 0;
  width: 100%;

  @include susy-media($md) {
    position: relative;
    width: auto;
    max-width: 100%;
  }
}

div.page div {


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
    max-width: 28em;
    margin-bottom: 1em;
  }

  img {
    margin-top: 20px;
    margin-bottom: 40px;
    // max-width: 100%;

    border: 1px solid #e6e6e6;
  }
}
</style>