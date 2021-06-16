<script>
import MongoService from "../../services/MongoService";
import VItemForm from "../../components/mongo/VItemForm";
import VItem from "../../components/mongo/VItem";
import VList from "../../components/mongo/VList";
import ComponentFormSelect from "./ComponentFormSelect";
import VDashboardForm from "../../components/mongo/VDashboardForm";
import ComponentSwitch from "./ComponentSwitch";

export default {

  name: "MainDashboard",
  components: {ComponentFormSelect, VList, VItemForm, VItem, VDashboardForm, ComponentSwitch},
  props: ['id'],
  data() {
    return {
      doc: {},
      path: [],
      dragId: '',
      currentId: null,
    };
  },
  mounted() {
    console.log("MOUNTED");
    this.currentId = this.id;
    this.path = [this.id];
    this.refresh();
  },
  methods: {
    refresh() {
      console.log('heeeere');
      MongoService.retrieveItem(this.currentId).then(res => {
        console.log(res.data);
        console.log(res);
        this.doc = res.data;
      })
    },
    moveToParent() {
      if (this.path.length < 1) return;
      this.path.pop();
      this.currentId = this.path[this.path.length-1];
      this.refresh();
    },
    moveToChild(childId) {
      this.path.push(childId);
      this.currentId = childId;
      this.refresh()
    },

    onDragStart(e, dragId) {
      console.log('dragStart');
      // this.originalTodoItems = [...this.todo.todoItems];
      e.dataTransfer.setData("text", dragId);
      // this.dragId = dragId;
    },
    onDragOver(e) {
      e.preventDefault();
      // e.dataTransfer.dropEffect = "copy"
      console.log('dragOver');
    },
    onDragEnter(e, dropId) {
      console.log('dragenter');
      let dragId = e.dataTransfer.getData('text')
      if (dropId==dragId) return;
      // let dragItem = this.todo.todoItems.find(i => i.id == dragId);
      // let dropItem = this.todo.todoItems.find(i => i.id == dropId);
      let dragIndex = this.doc.children.indexOf(dragId);
      let dropIndex = this.doc.children.indexOf(dropId);
      if (!dragIndex || !dropIndex) {
        return;
      }
      // console.log('drag: '+dragItem.id +' '+dragItem.index);
      // console.log('drop: '+dropItem.id +' '+dropItem.index);
      // let tmp = dropItem.index;
      // dropItem.index = dragItem.index;
      // dragItem.index = tmp;
      if (dropIndex < dragIndex) {
        this.doc.children.splice(dragIndex, 1);
        this.doc.children.splice(dropIndex, 0, dragId);
      } else {
        this.doc.children.splice(dropIndex, 1);
        this.doc.children.splice(dragIndex, 0, dropId);

      }
    },
    onDragLeave(e) {
      // document.getElementById('drag-area').remove()
    },
    onDragEnd(e) {
      this.dragId = '';
    },
    onDrop(e, listId) {
      e.preventDefault();

      return MongoService.updateItem(this.doc)
          .then(() => {
            this.refresh();
          })
      // let dragId = e.dataTransfer.getData('text')
      // let dragItem = this.todo.todoItems.find(i => i.id == dragId);
      // if (!dragItem) {
      //   console.log('item undefined');
      //   let s = e.dataTransfer.getData(e.dataTransfer.items[0].type)
      //   console.log(s);
      //   let title = JSON.parse(s).title;
      //   let uri = JSON.parse(s).uri;
      //   this.newItem = {content: title, url: uri};
      //   this.createItem();
      //   return;
      // }
      //
      // let modified = this.todo.todoItems.filter((item, i) => item.index !== this.originalTodoItems[i].index );
      // let promises = modified.map(item => {
      //   return new Promise( (resolve, reject)=> this.updateItem(item))
      // });
      // Promise.allSettled(promises).then(this.refresh);
    },
  },
}
</script>

<template>
  <div id="MainDashboard">
    <div class="path" v-show="path.length>1">

      <div class="left">
        <a @click="moveToParent">←</a>
      </div>
      <div class="center">
        <h4>{{ doc.name }}</h4>
<!--        {{path.join('/')}}-->
      </div>
      <div class="right">
      </div>
    </div>
    <div class="content">
      <div class="dragContainer" v-for="listId of doc.children" v-bind:key="listId"
           @dragstart="onDragStart($event, listId)" draggable="true" @dragend="onDragEnd"
           @dragover="onDragOver" @drop="onDrop($event, listId)"
           @dragenter="onDragEnter($event, listId)" @dragleave="onDragLeave">

        <ComponentSwitch  :id="listId" :parentId="doc._id" @refresh="refresh"
                          @moveToDashboard="moveToChild">
        </ComponentSwitch>
      </div>
      <ComponentFormSelect @refresh="refresh" :parentId="doc._id"></ComponentFormSelect>
      <VDashboardForm @refresh="refresh" :parentId="doc._id"></VDashboardForm>
    </div>
  </div>
</template>

<style scoped lang="less">
#MainDashboard {
  .content{
    display:flex;
    flex-wrap: wrap;
  }
  .path {

    .left>* {
      vertical-align:middle;
    }

    .left, .right {
      flex: 1;
    }
    .left {
      text-align: left;
    }
    .right {
      text-align: right;
    }
  }
}
</style>