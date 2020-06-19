<template>
	<ul class="collection">
		<!-- <app-card imgSrc="suffix_tree.jpg" projectTitle="Advanced Data Structures and Algorithms" link="https://github.com/asherLZR/adv-ds-alg" metaTag="Python implementations from one of my favourite subjects">
			These are data structures and algorithms covering topics such as string pattern matching, semi-numerical algorithms, lossless compression, and more! [The repository has been privated.]
		</app-card> -->

		<app-card
			v-for="(item, index) in projectList"
			:key="index"
			:imgSrc="item.imgSrc"
			:projectTitle="item.projectTitle"
			:link="item.link"
			:metaTag="item.metaTag"
		>
			{{ item.description }}
		</app-card>
	</ul>
</template>

<script>
import ProjectCard from './ProjectCard.vue';
import ProjectList from '@/static/projectList.json';

export default {
	data() {
		return {
			projectList: ProjectList,
		};
	},
	components: {
		'app-card': ProjectCard,
	},
};
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
