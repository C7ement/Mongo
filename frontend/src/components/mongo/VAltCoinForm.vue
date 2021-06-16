<script>
import MongoService from "../../services/MongoService";

export default {

  name: "VAltCoinForm",
  props: ['parentId', 'id'],
  data() {
    return {
      doc: {
        type: 'alt-coin',
        name: '',
        url: '',
        amount: '',
        date: '',
      }
    };
  },
  mounted() {
    console.log(this.doc);
    if (this.id) {
      if (this.id) {
        MongoService.retrieveItem(this.id).then(res => {
          this.doc = {...res.data};
          console.log(this.doc);
        });
      }
    }
  },
  methods: {
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
  <div id="VAltCoinForm">
    <form>
      <input type="text" placeholder="Nom" v-model="doc.name" />
      <input type="text" placeholder="Url" v-model="doc.url" />
      <input type="number" step="any" placeholder="Quantité" v-model="doc.amount" />
      <input type="date" placeholder="Date" v-model="doc.date" />
      <input class="send" type="submit" @click="submitItem" value=">"/>
    </form>
  </div>
</template>

<style scoped lang="less">
#VAltCoinForm {
  display: flex;
  justify-content: space-between;
  input[type=text] {
    width: 230px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
}
</style>