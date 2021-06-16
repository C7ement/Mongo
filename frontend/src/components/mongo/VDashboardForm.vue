<script>

export default {

  name: "VDashboardForm",
  props: ['parentId', 'oldDoc'],
  data() {
    return {
      doc: {
        type: 'dashboard',
        name: '',
      }
    };
  },
  methods: {
    submitItem() {
      this.$emit('submitItem', this.doc);
      // this.refresh();
    },
    refresh() {
      this.doc.name = '';
    }
  },
}
</script>

<template>
  <div id="VDashboardForm">
    <form>
      <input type="text" placeholder="Liste" v-model="doc.name" />
      <input type="submit" class="send" @click="submitItem" value=">"/>
    </form>
  </div>
</template>

<style scoped lang="less">
#VDashboardForm {
  display: flex;
  justify-content: space-between;
  input[type=text] {
    width: 230px;
  }
}
</style>