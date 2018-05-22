<template>  
  <div class="container">
    <div class="graphic">
      <h1>Graphic</h1>
    </div>
    <div class="sub-body">
      <img src="~assets/marytodd.jpg">
      <img src="~assets/megkath.png">
      <img src="~assets/notbad.jpg">
      <video autoplay="autoplay" loop>
	  	<source src="~assets/galiano.mp4" type="video/mp4">
	  </video>
      <img src="~assets/notbad2.jpg">
      <img src="~assets/booth.png">
      <img src="~assets/celebration.jpg">
      <img src="~assets/jack.png">
      <img src="~assets/barlow.gif">
      <img src="~assets/rene.png">
      <img src="~assets/hds.jpg">
      <img src="~assets/orion.gif">

      <img src="~assets/robottos2.png">
      <img src="~assets/robottos.png">
    
      
      
    </div>
  </div>
</template>
<style lang="scss" scoped>

@import '~assets/css/fonts.scss';
@import '~assets/css/globals.scss';
@include breakpoint($md) {
	img, video {
	width: 600px;

}
img {
		display: block;
	clear: both;
}
video {
	margin: 1em 0;
}
}
/*	img {
		border: none !important;
	}*/
</style>