<template>
	<div>
		<p>Authors through the reaches of time have written about writing, that need has always trumped desire. In this and perhaps every craft the author feels a deep compulsion to express themselves; they are driven by an absoluteness about what they are and make little fuss about why they spend hours poring over and pouring out their thoughts.</p>
		<ul class="collection">
			<app-card v-for="(item, index) in blogList" :key="index" :item="item" />
		</ul>
	</div>
</template>

<script>
import BlogList from '@/static/blogList.json';
import BlogCard from './BlogCard.vue';

export default {
	data() {
		return {
			blogList: BlogList
		}
	},
	components: {
		'app-card': BlogCard
	}
}
</script>


<style scoped>
.collection {
	border: 0px;
	border-radius: 0px;
}

.collection .collection-item {
	background-color: transparent;
}
</style>
