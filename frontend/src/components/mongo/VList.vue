<script>
import ComponentFormSelect from "../../views/views/ComponentFormSelect";
import VDropdown from "../util/VDropdown";

export default {

  name: "VList",
  components: {VDropdown, ComponentFormSelect, ComponentSwitch: ()=>import('../../views/views/ComponentSwitch')},
  props: ['id', 'parentId', 'doc'],
  data() {
    return {
    };
  },
  methods: {
    refresh(event) {
      this.$emit('refresh');
    },
    destroy() {
      this.$emit('destroy');
    },
  },
}
</script>

<template>
  <div id="VList">
    <h5>
      {{doc.name}}
      <VDropdown>
          <a @click="destroy" class="delete">Supprimer</a>
      </VDropdown>
    </h5>
    <ComponentSwitch v-for="childId of doc.children" v-bind:key="childId" :id="childId" :parentId="doc._id" @refresh="refresh"></ComponentSwitch>
    <ComponentFormSelect @refresh="refresh" :parentId="doc._id"></ComponentFormSelect>
  </div>
</template>

<style scoped lang="less">
#VList {
  width: 320px;
  max-height: 600px;
  overflow: auto;

}
</style>