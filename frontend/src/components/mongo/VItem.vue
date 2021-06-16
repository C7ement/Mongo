<script>
import VDropdown from "../util/VDropdown";

export default {

  name: "VItem",
  props: ['id', 'parentId', 'doc'],
  components: {VDropdown},
  data() {
    return {
    };
  },
  methods: {
    destroy() {
      this.$emit('destroy');
    },
  },
}
</script>

<template>
  <div id="VItem">
    <div class="content">
      <span>{{doc.content || '...'}}</span>
        <VDropdown>
          <a @click="destroy" class="delete">Suprimer</a>
        </VDropdown>
    </div>
    <hr>
  </div>
</template>

<style scoped lang="less">
#VItem {

  .content {

    display: flex;
    justify-content: space-between;
    span {
      width: 200px;
    }
    text-align: left;
    overflow-wrap: break-word;
    //border-bottom: 1px black solid;

  }
}
</style>