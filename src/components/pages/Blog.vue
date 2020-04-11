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

	table {
		width: fit-content;
	}

	code, tt {
		margin: 0 2px;
		padding: 0 5px;
		white-space: nowrap;
		border: 1px solid #eaeaea;
		background-color: #f8f8f8;
		border-radius: 3px;
	}

	pre code {
		margin: 0;
		padding: 0;
		white-space: pre;
		border: none;
		background: transparent;
	}

	.highlight pre {
		background-color: #f8f8f8;
		border: 1px solid #cccccc;
		font-size: 13px;
		line-height: 19px;
		overflow: auto;
		padding: 6px 10px;
		border-radius: 3px;
	}

	pre {
		color: #dbdbdb;
		background-color: black;
		// border: 1px solid #cccccc;
		font-size: 13px;
		line-height: 19px;
		overflow: auto;
		padding: 6px 10px;
		border-radius: 3px;
	}

	pre code, pre tt {
		background-color: transparent;
		border: none;
	}
  }
}
</style>
