<template>
	<li class="collection-item">
		<div class="row">
			<div class="col s12 m3 center-align hide-on-med-and-up">
				<img :src="requiredImg" :alt="item.img" class="responsive-img">
			</div>
			<div class="col s12 m9 left-align">
				<h5 class="title"><router-link :to="{name: item.id}">{{item.title}}</router-link></h5>
				<p class="description">{{item.description}}</p>
				<p class="date">{{item.date}}</p>
			</div>
			<div class="col s12 m3 center-align hide-on-small-only">
				<img :src="requiredImg" :alt="item.img" class="responsive-img">
				<p class="img-caption">{{item.caption}}</p>
			</div>
		</div>
	</li>
</template>

<script>
export default {
	props: {
		item: Object
	},
	computed: {
		requiredImg(){ return require('../../assets/' + this.item.img);}
	}
}
</script>

<style scoped>
img {
	width: 80%;
	max-width: 150px;
	height: auto;
}

.title a {
	color: black;
}

.description {
	font-style: italic;
	color: gray;
}

.date {
	color: gray;
}

.img {
	width: auto;
	height: 100%;
}

.img-caption {
	font-style: italic;
	font-size: 0.8rem;
}
</style>
