<template>  
  <div class="container">
    <div class="edupath">
      <h1>Edupath</h1>
    </div>
    <img src="~assets/edupath.jpg">
  </div>
</template>
<style lang="scss">
@import "~assets/css/globals";
	img {
		display: block;
		width: 100%;

		// padding: 0 7.5% 2em 7.5%;
		margin-bottom: 2em;
		@include breakpoint($md) {
			width: 85%;
			margin: 0 auto;
		}

	}
</style>