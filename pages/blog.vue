<template>  
  <div class="container">
    <div class="blog">
      <h1>Blog</h1>
      <blog></blog>
    </div>
  </div>
</template>
<script>
import blog from '~/components/blog.vue'

export default {
	components: {
		blog
	}
}
</script>