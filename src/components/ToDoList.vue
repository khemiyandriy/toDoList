<template>
    <div>
        <ul>
         <ToDoItem 
         v-for="(todo, i) of todos" 
         v-bind:todo = "todo" 
         v-bind:index = "i" 
         v-on:remove-todo="removeTodo"/>
        </ul>
    </div>
</template>

<script>
import ToDoItem from "@/components/ToDoItem.vue";
export default {
    props : ["todos"],
  components: {
    ToDoItem
  },
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
