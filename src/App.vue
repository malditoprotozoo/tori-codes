<template>
  <div id="app">
    <Navbar/>
    <Masthead/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";
  import Masthead from "./components/home/Masthead";
  import Main from "./components/home/Main";
  import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Navbar,
    Masthead,
    Main,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand|Roboto+Mono:100,300,400,500,700');
#app {
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("./assets/background.jpg");
  background-position: center;
}
.navbar-item img {
  width: 50px;
  height: 50px !important;
  max-height: 50px !important;
}
.navbar-light .navbar-nav .nav-link {
  color: #e93ea4 !important;
  text-shadow: 0 0 2px #FFDE00;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #e93ea4 !important;
  font-weight: bolder;
}
.vue-typer .custom.char {
  color: black;
  font-weight: 100;
}
.vue-typer .custom.char.selected {
  background-color: #fcf9ef;
}
</style>
