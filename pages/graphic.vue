<template>  
  <div class="container">
    <div class="graphic">
      <h1>Graphic</h1>
    </div>
    <div class="sub-body">
      <img src="~assets/marytodd.png">
      <img src="~assets/vintervagor.jpg" class="stroke">
      <img src="~assets/megkath.png">
      <img src="~assets/notbad.jpg">
      <video autoplay="autoplay" loop>
	  	<source src="~assets/galiano.mp4" type="video/mp4">
	  </video>
      <img src="~assets/notbad2.jpg">
      <img src="~assets/celebration.jpg">
      <img src="~assets/jack.png">
      <img src="~assets/barlow.gif">
      <img src="~assets/rene.png">
      <img src="~assets/hds.jpg">
      <img src="~assets/robottos2.png">
      <img src="~assets/robottos.png">
    
      
      
    </div>
  </div>
</template>
<style lang="scss" scoped>

@import '~assets/css/fonts.scss';
@import '~assets/css/globals.scss';

  .stroke {
    border: 1px solid #ccc;
  }
	img, video {
	width: 100%;
  @include breakpoint($md) {
    width: 600px;
  }
  display: block;
  clear: both;

}
video {
  margin: 1em 0 2em;
}
/*	img {
		border: none !important;
	}*/
</style>