<template>  
  <div class="container">
    <div class="tribby-grotesk">
      <h1>Tribby Grotesk - Coming Soon</h1>
    </div>

    <!-- <div class="duo">
	    <img src="~assets/galiano1.jpg">
	    <img src="~assets/galiano2.jpg">
	</div>
	<div class="duo">
	    <img src="~assets/galiano4.jpg">
	    <img src="~assets/galiano3.png">
	</div> -->
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/css/globals";

	.duo {
		flex-direction: column;
		display: flex;
		img {
			// width: 100%;
			max-width: 100%;
			max-width: 100%;
			margin-bottom: 3em;
			@include breakpoint($md) {
		
					// padding: 0;
					// margin: 0;
					// display: inline;
					max-width: 50%;
					max-height: 50%;
					width: 100%;
					height: 100%;
					margin-bottom: -5px;
					
				
				
			}
		}
		@include breakpoint($md) {
			
			flex-direction: row;
			
		}

	}
	.container {
		padding-bottom: 2em;
	}
</style>