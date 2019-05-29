<template>
	<ul class="collection">
		<app-card imgSrc="perspective.png" projectTitle="Perspective" link="https://github.com/asherLZR/perspective" metaTag="2nd Place Winners, Hackamon 2019">
			While it is agreed that one of the best modes of learning is through teaching, this is rarely tapped upon.
			Perspective is a video learning website where the content creators are students. Students upload videos of themselves teaching different topics within a unit, soliciting feedback from their peers through this exercise. Watchers of these videos benefit from another student's summarised perspective on the same content, instead of relying solely on the lecturer's.
		</app-card>

		<app-card imgSrc="meta.png" projectTitle="Meta" link="https://github.com/asherLZR/meta" metaTag="Unihack 2019">
			Meta is a self-improvement web app that provides statistics on the type of news articles consumed by a user. As members of today's youth, we are constantly being fed curated news through sources like Facebook, Twitter, Reddit etc. The sheer enormity of information makes it difficult for the average consumer to be mindful and take control of the news they consume. As a result, it is difficult to check their personal biases and explore new areas of interest.
		</app-card>

		<app-card imgSrc="safehearts.png" projectTitle="Safehearts" link="https://github.com/asherLZR/safehearts" metaTag="Software Architecture &amp; Design">
			Safehearts is an Android-FHIR app for medical practitioners to monitor patients' key health stats. It was my first foray into Android programming and was instructive in the design thinking applied, keeping within the realm of OO, barring such concepts as functional and reactive programming. Some of the patterns used include the Strategy and Adapter patterns, bearing in mind the usual principles like SOLID.
		</app-card>

		<app-card imgSrc="zalg.png" projectTitle="Z-Algorithm Visualised" link="https://zalg.herokuapp.com/" metaTag="Web Framework / Algorithms">
			Gusfield's Z-algorithm is used as a pre-processing step on the pattern as input to string pattern-matching algorithms like KMP and Boyer-Moore. I built this application with Vue.js as a first step towards understanding web technologies and the process from design to production.	
		</app-card>		
	</ul>
</template>

<script>
import ProjectCard from "./ProjectCard.vue"

export default {
	data() {
		return {
			
		}
	},
	components: {
		"app-card": ProjectCard
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

