// VComponent.vue
<script>
import MongoService from "../../services/MongoService";
import VDashboard from "../../components/mongo/VDashboard";
import VItem from "../../components/mongo/VItem";
import VList from "../../components/mongo/VList";
import VAltCoin from "../../components/mongo/VAltCoin";
import ComponentForm from "./ComponentForm";

export default {
  name: "ComponentSwitch",

  props: ['id', 'parentId'],
  components: {
    ComponentForm, VDashboard, VItem,
    VList
  },
  data() {
    return {
      doc: {},
      components: {
        list: 'VList',
        dashboard: 'VDashboard',
        item: 'VItem',
        'alt-coin': VAltCoin,
      },
      edit: false
    };
  },
  mounted() {
    this.refresh();
  },
  methods: {
    refresh(event) {
      this.edit = false;
      MongoService.retrieveItem(this.id).then(res => {
        this.doc = res.data;
      });
    },
    destroy() {
      console.log('DESTROY')

      MongoService.destroyItem(this.doc._id)
          .then(() => MongoService.removeChild(this.parentId, this.doc._id))
          .then(() => {this.$emit('refresh')})
    },
    editItem() {this.edit = true;}
  },
}
</script>

<template>
  <div id="ComponentSwitch">
    <ComponentForm v-if="edit" :id="id" :type="doc.type" :parentId="parentId" v-on="$listeners" @refresh="refresh">

    </ComponentForm>
    <component  v-show="!edit" :is="components[doc.type]" :id="id" :parentId="parentId" :doc="doc"
               @refresh="refresh" @destroy="destroy" @editItem="editItem" v-on="$listeners">

    </component>
  </div>
</template>

<style scoped lang="less">

</style>