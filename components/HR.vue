<template>  
  <div class="hr" :style="{ backgroundColor: backgroundColor }">&nbsp;</div>
</template>
<script>
	export default {
		computed: {
			backgroundColor () {
				if(this.$store.state.dark == false) {
					return '#000' 
				} else {
					return '#fff'
				}
			}
		}
	}
</script>