<script>
import MainDashboard from "./views/MainDashboard";
import MongoService from "../services/MongoService";

export default {

  name: "Mongo",
  data() {
    return {
      items: null
    };
  },
  components: {
    MainDashboard,
  },
  mounted() {
    MongoService.listItems().then(res => {
      this.items = res.data;
    })
  },
  methods: {
  },
}
</script>

<template>
  <div id="Mongo">
    <div class="background">{{items}}</div>
    <MainDashboard :id="'603587a0fc307000069fef19'"></MainDashboard>
  </div>
</template>

<style scoped lang="less">
#Mongo {

  .background {
    position: absolute;
    color: rgba(80,80,80,0.25);
    z-index: -1;
    text-align: justify;
  }
}
</style>