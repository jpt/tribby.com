<template>  
  <div class="container">
    <div class="edupath">
      <div class="heading">
        <h1>Edupath</h1>
        <p>is a Berkeley-based iOS test prep app and non-profit tutoring center. I worked here as a visual designer, illustrator, front-end engineer, and product designer, amongst other "hats!"</p>
      </div>
    </div>
    <img src="~assets/edupath3.jpg">
    <img src="~assets/edupath.jpg">
    <img src="~assets/edudash.jpg">
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/css/globals";
	img {
		display: block;
		width: 100%;
		border: 1px solid #eee;
		// padding: 0 7.5% 2em 7.5%;
		margin-bottom: 2em;
		@include breakpoint($md) {
			width: 85%;
			margin: 0 auto 3em auto;
		}

	}
</style>