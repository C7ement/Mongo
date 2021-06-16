<script>

export default {

  name: "VItemForm",
  props: ['parentId', 'oldDoc'],
  data() {
    return {
      doc: {
        type: 'item',
        content: '',
      }
    };
  },
  methods: {
    mounted() {
      if (this.oldDoc) {
        this.doc = {... this.oldDoc};
      }
    },
    submitItem() {
      this.$emit('submitItem', this.doc);
      // this.refresh();
    },
    refresh() {
      this.doc.content = '';
    }
  },
}
</script>

<template>
  <div id="VItemForm">
    <form>
      <input type="text" placeholder="Item" v-model="doc.content" />
      <input class="send" type="submit" @click="submitItem" value=">"/>
    </form>
  </div>
</template>

<style scoped lang="less">
#VItemForm {
  display: flex;
  justify-content: space-between;
  input[type=text] {
    width: 230px;
  }
}
</style>