<template>  
  <div class="container">
    <div class="chefs-feed">
      <h1>Chefs Feed</h1>
<!--       <h2>Lead Interactive Designer, ca. 2015</h2> -->
    </div>
    <div class="white">
	    <img src="~assets/cf.jpeg">
	    <img src="~assets/chefs1.png">
	    <img src="~assets/chefs2.png">
	    <img src="~assets/chefs4.png" >
	    <img src="~assets/cf2.jpeg">
	</div>

  </div>
</template>
<style lang="scss" scoped>
@import '~assets/css/globals.scss';
.white {
	// background-color: $white;
	width: 100%;
	padding: 0 7.5% 2em 7.5%;
	margin: 0;
}
	img {
		display: block;
		width: 100%;
		border: 20px solid $white;
		// padding: 0 7.5% 2em 7.5%;
		margin-bottom: 2em;

	}
	h2 {
		font-family: 'Barlow-Regular';
		opacity: 0.8;
		font-size: 1em;
	}
	.chefs-feed {
		display: block;
		margin-bottom: 0;
	}
</style>