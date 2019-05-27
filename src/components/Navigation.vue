<template>
    <div>
        <nav class="nav-center transparent hide-on-small-only" role="navigation">
            <div class="nav-wrapper">
                <router-link class="title left" to="/">ASHER LIM</router-link>
                <ul class="right">
                    <li><router-link to="/projects" tag="li" active-class="active" exact><a>Projects</a></router-link></li>
                    <li><router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link></li>
                </ul>
            </div>
        </nav>
        <div id="mobile-nav" class="hide-on-med-and-up">
            <router-link class="title" to="/">ASHER LIM</router-link>
            <nav class="nav-center transparent" role="navigation">
                <div class="nav-wrapper">
                    <ul>
                        <li><router-link to="/projects" tag="li" active-class="active" exact><a>Projects</a></router-link></li>
                        <li><router-link to="/blog" tag="li" active-class="active"><a>Blog</a></router-link></li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.title {
  font-family: 'Roboto', sans-serif;
  font-weight:300;
  font-size: 2.7em;
  color: black;
}

nav.nav-center ul {
    text-align: center;
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

#mobile-nav {
    text-align: center;
}
</style>
