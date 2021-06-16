<script>
import VNavbar from "./components/VNavbar";

  export default {
    name: 'App',
    components: {
      VNavbar,
    },
    methods: {}
  }
</script>

<template>
  <div id="app">

    <VNavbar/>
    <router-view/>
  </div>
</template>


<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .flex{display: flex;}
  .column{flex-direction: column;}
</style>
