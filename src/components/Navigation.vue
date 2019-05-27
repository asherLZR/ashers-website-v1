<template>
	<nav class="nav-center transparent" role="navigation">
        <div class="nav-wrapper">
            <ul class="right">
                <router-link to="/projects" tag="li" active-class="active" exact><a>Projects</a></router-link>
                <router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
nav.nav-center ul {
    text-align: right;
}
nav.nav-center ul li {
    display: inline;
    float: none;
}
nav.nav-center ul li a:hover {
    background-color: transparent;
}
.active {
    background-color: transparent;
}
nav.nav-center ul li a {
    display: inline-block;
    font-size: 1em;
    color: black;
}
nav.nav-center {
    box-shadow: 0px;
    -webkit-box-shadow: None;
}
</style>
