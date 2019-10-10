<template>
	<div>
		<H1>{{ title }}</H1>
		<p v-html="content"></p>
	</div>
</template>
<script>
export default {
	props: ['title','id','content']
}
</script>