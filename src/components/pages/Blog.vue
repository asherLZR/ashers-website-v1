<template>
	<div class="blog">
		<router-view />
	</div>
</template>


<style lang="scss" scoped>
.blog {
  /deep/ {
    h1 {
		font-size: 2.2rem;
		margin-top: 1rem;
		margin-bottom: .2rem;
    }
	h2 {
		font-size: 1.8rem;
		margin-top: 1rem;
		margin-bottom: .2rem;
	}
	h3 {
		font-size: 1.3rem;
	}
	img {
		width: 80%;
		height: auto;
	}
	pre {
		color: black;
		background-color: lightgray;
	}
  }
}
</style>
