<template>
  <div class="error">
    404 Not Found
  </div>
</template>
<style lang="scss">
  @import "~assets/css/globals.scss";
  @import "~assets/css/fonts.scss";
  div.error {

    top: 0;
    margin: none;
    display: flex;
    height: 100%;
    font-size: 6vw;
    letter-spacing: 0.15vw;
    justify-content: center;
    align-items: center;
    font-family: 'Barlow-Regular';
    @include breakpoint($lg) {
      font-family: 'Barlow-Thin';
    }
  }
</style>