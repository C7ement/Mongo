<script>
export default {
  name: "VDropdown"
}
</script>

<template>

  <div id="VDropdown">

    <button class="dropbtn">⋮</button>
    <div class="dropdown-content">
      <!--          <a v-show="todo.url && todo.url!==''" :href="todo.url" target="_blank">Lien</a>-->

        <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">

  #VDropdown {
    display: inline-block;

    &:hover .dropbtn {
      background-color: cornflowerblue;
      color:white;
    }
    .dropbtn {
      border: none;
    }

    &:hover .dropdown-content {display: block;}
    &:active .dropdown-content {
      display: none;
      position: absolute;
      &:hover {
        z-index:1000;
        position: absolute;
        display:block;

        overflow: visible;
      }
    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f1f1f1;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;

      a {
        &.delete {color:indianred}
        padding: 10px 16px;
        text-decoration: none;
        display: block;
        &:hover {background-color: #ddd;}
      }
    }
  }
</style>