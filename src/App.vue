<template>
  <div class="page-flexbox-wrapper">
    <main>
      <div class="container">
        <br>
        <app-nav></app-nav>
        <br>        
        <router-view></router-view>
      </div>
    </main>
    <footer>
      <app-footer></app-footer>
    </footer>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  components: {
    "app-nav": Navigation,
    "app-footer": Footer
  },
  data() {
    return {};
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap');

main {
  background-color: #f0f0f0;
  /*for sticky footer*/
  flex: 1 0 auto;
}

html {
  font-family: 'Roboto', sans-serif;
  color: black;
  font-weight: 400;
  font-size: 1em;
}

.page-flexbox-wrapper {
  /*for sticky footer*/
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}
</style>
