<template>
	<li class="collection-item">
		<div class="row">
			<div class="col s12 m3 center-align">
				<a :href="link" target="_blank"><img :src="imgSrc" :alt="imgSrc" class="responsive-img"></a>
			</div>
			<div class="col s12 m9">
				<h5>{{projectTitle}}</h5>
				<p class="meta">{{metaTag}}</p>
				<slot></slot>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	data() {
		return {
		}
	},
	props: {
		imgSrc: String,
		projectTitle: String,
		link: String,
		metaTag: String
	}
}
</script>


<style scoped>
img {
	width: 80%;
	max-width: 150px;
	height: auto;
}

.meta {
	font-style: italic;
	font-size: 0.8em;
}

.collection-item {
	background-color: transparent;
	border-bottom: 0px;
}
</style>
