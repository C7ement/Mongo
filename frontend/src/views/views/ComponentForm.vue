// VComponent.vue
<script>
import MongoService from "../../services/MongoService";
import VDashboardForm from "../../components/mongo/VDashboardForm";
import VItemForm from "../../components/mongo/VItemForm";
import VListForm from "../../components/mongo/VListForm";
import VAltCoinForm from "../../components/mongo/VAltCoinForm";

export default {
  name: "ComponentForm",

  props: ['type', 'id', 'parentId'],
  components: { VDashboardForm, VItemForm, VListForm, VAltCoinForm},
  data() {
    return {
      components: {
        list: 'VListForm',
        dashboard: 'VDashboardForm',
        item: 'VItemForm',
        'alt-coin': 'VAltCoinForm',
      },
    };
  },
  methods: {
    submit(doc) {
        if (this.id) {
          this.updateItem(doc);
        } else {
          this.createItem(doc);
        }
    },
    updateItem(doc) {
      return MongoService.updateItem(doc)
          .then(() => {
            this.$emit('refresh');
          })
    },
    createItem(doc) {
      return MongoService.createItem(doc)
          .then( res => MongoService.addChild(this.parentId, {child: res.data.insertedId}))
          .then(() => {
            this.$emit('refresh');
          })
    }
  },
}
</script>

<template>
  <div id="ComponentForm">
      <component :is="components[type]" :parentId="parentId" :id="id"
                 @submitItem="submit"></component>
  </div>
</template>

<style scoped lang="less">

</style>