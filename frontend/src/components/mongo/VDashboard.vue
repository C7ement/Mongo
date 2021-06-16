<script>
import VDropdown from "../util/VDropdown";

export default {

  name: "VDashBoard",
  components: {VDropdown},
  props: ['id', 'parentId', 'doc'],
  data() {
    return {
    };
  },
  methods: {
    destroy() {
      this.$emit('destroy');
    },
    onClick() {
      this.$emit('moveToDashboard', this.doc._id)
    }
  },
}
</script>

<template>
  <div id="VDashBoard" @click="onClick">
    <h5>
      {{doc.name}}
<!--      <VDropdown>-->
<!--        <a @click="destroy" class="delete">Supprimer</a>-->
<!--      </VDropdown>-->
    </h5>
  </div>
</template>

<style scoped lang="less">
#VDashBoard {
  width: 120px;
  max-height: 600px;
  border: 1px solid black;
  border-radius: 15px;
  margin: 20px;

}
</style>