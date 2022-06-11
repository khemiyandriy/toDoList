<template>
  <div class="todo__item">

    <input type="checkbox" 
      :checked="todo.checked" 
      @change="$emit('change', todo.id)"/>

    <p class="text" 
      @click="editToDo" 
      v-show="!inEditMode" 
      v-bind:class="{crossed: todo.checked}">
      {{ todo.todoTitle }} 
    </p> 

    <input type="text" 
      v-model="text" 
      :placeholder="todo.todoTitle" 
      v-show="inEditMode" 
      @keyup.enter='savedToDo' 
      ref="todoInput">
    <button class="close" v-on:click="$emit('deleteTodoItem', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  data: ()=> {
   return  {
    inEditMode: false,
    text: ""
    } 
  },
  props: {
    todo: {},
  },
  methods: {
      editToDo() {
        this.inEditMode = true;
/*         document.addEventListener("click", (item)=> {
        if (item.target !==this.$refs["todoInput"]) { this.inEditMode = false} }) */
      },
      savedToDo(){
        this.$emit('savedToDo', this.text,  this.todo.id);
        this.inEditMode = false;
      }
  },
/* mounted() {
        let vm=this;
        document.addEventListener("click", (item)=> {
            if (item.target !==vm.$refs["todoInput"]) {vm.inEditMode = false}
        })
        
    } */
};
</script>

<style scoped>
.crossed{
        text-decoration: line-through;
    }
.todo__item{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.text{
  margin: 20px 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  font-size: 24px;
  font-style: italic;
}

</style>