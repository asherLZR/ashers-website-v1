<template>
	<div>
		<div class="row">
			<div class="col s12 m3 photo-container center-align">
				<img class="profileImg" src="@/assets/asher.jpg" alt="My photo"/>
				<p class="center-align caption-text">
					<b>Final year student</b>
					<br>
					Bachelor of Computer Science, Monash University
					<br>
					Jun. 2020 Graduation
				</p>
			</div>
			<div class="col s12 m9">
				<p>Hi there! I'm Asher, a final year computer science student from Singapore currently living in Melbourne, Australia. I was fortunate to have been introduced to web and mobile development, and data analytics and visualisation when I was 17. However, it was exposure to the complex ecosystem of computing theory and software development in university that ignited my interest in algorithms and software.</p>
				<p>I code in Javascript, Python, and Java, including Android, and have experience with frameworks and languages such as Vue.js, SQL. View my <a href="https://drive.google.com/open?id=1LTQ6jqlvKxntFMM6PwJ_ySaNOHwFf270" target="_blank">resume</a> for more detailed information!</p>
				<p>Outside of lectures, I've taken part in hackathons such as Unihack and Hackamon, and enjoy teaching what I've learnt to newcomers. I'm always looking forward to working with fun and creative people to build ethical software that is mindful of more than simply its functional purpose but also how it might improve the lives of its users.</p>
				Thank you for visiting my website! 😊
			</div>
		</div>
		<div class="row">
			<div class="col s12">
				<h5>Personal Interests</h5>
				<p>As someone who believes in the promising uses of technology, I'm interested in the intersection of tech with social change and education, and view political structures and business as both enablers and hindrances of such change.</p>
				<p>A source of frustration is the lack of awareness within the student tech community of how to approach such issues, often conflating more technology with better outcomes. I believe part of this problem is the lack of opportunities we have to work directly at the estuaries of these domains. In addition, academic and cultural scaffolds could do more to disambiguate the importance of primal metrics like privacy, free speech, and ultimately societal impact over functional requirements.</p>
			</div>
		</div>
		<div class="row">
			<div class="col s12">
			<h5>Fun Tidbits</h5>
			<div class="tidbits caption-text">
				<div class="row">
					<div class="col s12 m6">
						<h6>Hackathons 💻</h6>
						<p>Working with brilliant people to build innovative projects</p>
						<img src="@/assets/unihack.jpg" alt="unihack">
					</div>
					<div class="col s12 m6">
						<h6>Army 🚩</h6>
						<p>I was a Signal Officer in the Singapore Armed Forces</p>
						<img src="@/assets/ord.jpg" alt="ord">
					</div>
				</div>
				<div class="row">
					<div class="col s12 m6">
						<h6>Dragonboating 🐉</h6>
						<p>Rower in battalion dragonboat team which won the annual Army Regatta</p>
						<img src="@/assets/dragonboat.jpg" alt="dragonboat">
					</div>
					<div class="col s12 m6">
						<h6>Astronomy ⭐</h6>
						<p>We started an Astronomy club in Temasek Polytechnic</p>
						<img src="@/assets/stargazers.png" alt="stargazers">
					</div>
				</div>
			</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.profileImg {
	width: 90%;
	max-width: 150px;
	height: auto;
}

.tidbits img {
	width: 100%;
	height: auto;
	max-height: 280px;
}

.tidbits {
	text-align: center;
}

.caption-text {
	font-size: 0.8em;
	display: block;
}

.photo-container {
	vertical-align: top;
    display: inline-block;
    text-align: center;
}
</style>

