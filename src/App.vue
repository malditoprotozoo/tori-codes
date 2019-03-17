<template>
  <div id="app">
    <Navbar/>
  </div>
</template>

<script>
  import Navbar from "./components/Navbar";

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar-light .navbar-nav .nav-link {
  color: #e93ea4 !important;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #e93ea4 !important;
  font-weight: bolder;
}
</style>
