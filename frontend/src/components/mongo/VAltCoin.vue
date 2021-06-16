<script>

import axios from 'axios';
import VDropdown from "../util/VDropdown";
export default {

  name: "VAltCoin",
  props: ['id', 'parentId', 'doc'],
  components: {VDropdown},
  data() {
    return {
      value: 0,
    };
  },
  mounted() {
    console.log('mounted')
    axios.get(this.doc.url,
        {transformRequest: (data, headers) => {
            delete headers.common['Authorization'];
          }})
        .then(res => this.value = res.data[Object.keys(res.data)].eur);
  },
  methods: {
    destroy() {
      this.$emit('destroy');
    },
  },
}
</script>

<template>
  <div id="VAltCoin">
    <div class="content">
      <div class="data">
        <span>{{ (doc.name || '...')+' ('+(value)+'€)' }}</span>
<!--        <span class="url">{{doc.url}}</span>-->
<!--        <span>{{doc.date}}</span>-->
        <div class="value">
          <span>{{doc.amount}}</span>
          <span>{{Math.trunc(value*doc.amount)+'€'}}</span>
        </div>
      </div>
      <VDropdown>
        <a @click="$emit('editItem')">Modifier</a>
        <a @click="destroy" class="delete">Suprimer</a>
      </VDropdown>
    </div>
    <hr>
  </div>
</template>

<style scoped lang="less">
#VAltCoin {

  .content {

    display: flex;
    justify-content: space-between;

    text-align: left;
    overflow-wrap: break-word;
    //border-bottom: 1px black solid;

    .data {
      display: flex;
      flex-direction: column;
      width: 200px;
      .url {
        display: block;
        overflow: auto;
        white-space: nowrap;
      }
    }
    .value {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>