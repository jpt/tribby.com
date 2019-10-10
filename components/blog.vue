<template>  
  <div>
  	<template v-for="post in blog">
  		<BlogPost :id="post.postId" :title="post.title" :dateCreate="post.dateCreate" :dateEdit="post.dateEdit" :content="post.content" />
  		
 	</template>
  </div>
</template>
<script>
	import BlogPost from '@/components/blog-post.vue';

	export default {
		data: () => {
			return {
				blog: [
					{
						postId: '1',
						title: 'On Fonts and Intellectual Property',
						slug: '',
						content: `Hello`,
						dateCreate: Date().now,
						dateEdit: Date().now,
					},
					{
						postId: '2',
						title: 'On Tell it How it Is',
						slug: '',
						content: `<b>Hello</b>`,
						dateCreate: Date().now,
						dateEdit: Date().now,
					}
				],

			}

		},
		components: {
			BlogPost
		}

	}
</script>