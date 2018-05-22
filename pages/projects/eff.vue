<template>  
  <div class="container">
    <div class="eff">
      <div class="heading">
        <h1>Electronic Frontier Foundation</h1>
        <p>is a digital civil liberties non-profit. I worked here as a front-end engineer on a lot of internal and external tools, including Certbot.</p>
      </div>
      <div class="sub-body">
      	<img src="~assets/certbot.png">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "~assets/css/globals";
  img {
  	// width: 100%;
  	@include breakpoint($md) {
	  	// margin-left: 7.5%;
	  	// max-width: 85%;
	  	border: 1px solid $light-grey;
	}
  	margin-bottom: 3em;
  	border-top: 1px solid $light-grey;
  	border-bottom: 1px solid $light-grey;
  }

</style>