<template>  
  <div class="container">
    <div class="blog">
    	
      <blog></blog>
    </div>
  </div>
</template>
<script>
import blog from '~/components/blog.vue'
import HR from '~/components/HR'
export default {
	components: {
		blog, HR
	}
}
</script>