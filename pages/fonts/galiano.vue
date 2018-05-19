<template>  
  <div class="container">
    <div class="galiano">
      <h1>Galiano (Coming Soon)</h1>
    </div>

    <div class="duo">
	    <img src="~assets/galiano1.jpg">
	    <img src="~assets/galiano2.jpg">
	</div>
	<div class="duo">
	    <img src="~assets/galiano4.jpg">
	    <img src="~assets/galiano3.png">
	</div>
  </div>
</template>
<style lang="scss">
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
					margin-bottom: 0;
					
				
				
			}
		}
		@include breakpoint($md) {
			
			flex-direction: row;
			
		}
		&:last-of-type {
			margin-bottom: 5em;
		}

	}
</style>