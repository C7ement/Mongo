// VComponent.vue
<script>
import ComponentForm from "./ComponentForm";

export default {
  name: "ComponentFormSelect",

  props: ['parentId'],
  components: {ComponentForm},
  data() {
    return {
      options: ['list','dashboard','item','alt-coin'],
      type: '',
    };
  },
  mounted() {
  },
  methods: {
  },
}
</script>

<template>
  <div id="ComponentFormSelect">
      <select v-model="type">
        <option v-for="t of options" :value="t">{{t}}</option>
      </select>
      <ComponentForm :parentId="parentId" v-on="$listeners" :type="type"></ComponentForm>
  </div>
</template>

<style scoped lang="less">

</style>