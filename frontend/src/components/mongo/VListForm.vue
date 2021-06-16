<script>

export default {

  name: "VListForm",
  props: ['parentId','oldDoc'],
  data() {
    return {
      doc: {
        type: 'list',
        name: '',
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
      this.doc.name = '';
    },
  },
}
</script>

<template>
  <div id="VListForm">
    <form>
      <input type="text" placeholder="Liste" v-model="doc.name" />
      <input type="submit" class="send" @click="submitItem" value=">"/>
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