<script>
  export default {
    name: 'ListDisplay',
    props: {
      item: Object,
      name: String,
    },
    data: () => {
      return {
      }
    },
  }
</script>

<template>
  <ul id="ListDisplay">
    <h3>{{name}}</h3>
    <li v-for="key of Object.keys(item)" v-bind:key="key">
      <a class="key">{{key}}</a> : <a>{{item[key]}}</a>
    </li>
  </ul>
</template>

<style scoped>
  #ListDisplay {
    margin: 20px;
    border-top: solid 1px purple;
  }
  li { border-bottom: 1px solid red; }
  li:last-child { border-bottom: none; }
  .key {
    font-weight: bold;
  }
</style>
