<template>
  <div id="newList">
    <img alt="Vue logo" class = "main_logo" src="./assets/logo.png">
    <button class="delete">X</button>
    <h1>Aplication ToDo Khemiia</h1>

    <ToDoList 
    v-bind:todos="todos" v-on:remove-todo="removeTodo"/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Loader v-if="loading"/>
<!--     <Students 
    v-bind:students="students"/> -->
    
  </div>
</template>

<script>

import ToDoList from "@/components/ToDoList.vue";
import AddTodo from "@/components/AddTodo.vue";
import Loader from"@/components/Loader.vue";
export default {
  name: 'NewList',
  data() {
    return {
      // todos: [
      //   {id: 1, text: "Lern Vue JS", checked: false},
      //   {id: 2, text: "Lern React", checked: false},
      //   {id: 3, text: "Lern Angular", checked: false},
      //   {id: 4, text: "Lern PHP", checked: false},

      // ],
      todos: [
        // {id: 1, title: "Lern Vue JS", completed: false},
        // {id: 2, title: "Lern React", completed: false},
        // {id: 3, title: "Lern Angular", completed: false},
        // {id: 4, title: "Lern PHP", completed: false},

      ],
      loading: true
    }
  },
  mounted() {
  fetch('./todos.json')
  .then(response => response.json())
  .then(json => {
    setTimeout(()=>{
    this.todos = json;
    this.loading = false 
    }, 2000)
    
    })
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(todo) {
      /* let i;
      for (i = 0; i < this.todos.length; i++) 
      !this.todos[i] ? i : i=i+1;
      todo.id=i; */
      /* var rez=0;
      for (let i = 1; i <= this.todos.length; i++){
        if (!this.todos[this.todos.length]){
          return rez=i+1;
        }
      }
      console.log(rez); */
      /* let i=this.todos.length+1;
      while (!!this.todos[i]){console.log(!!this.todos[i]);i++};
      todo.id = i; */
      /* for (let i=0; i< this.todos.length; i++) {
        console.log(!this.todos[i])
      }
      todo.id = this.todos.length + 1; */

      this.todos.push(todo);
    }
  },
  components: {ToDoList, AddTodo, Loader}
    
  }

</script>

<style>
body{
  background: rgba(255, 255, 255, .9);
}
#app{
  text-align: center;/* 
  background: #87a4df; */
  padding: 0;
  margin: 0;
  height: fit-content;
  width: 400px;
  border: 2px solid black;
  border-radius: 10px;
  background: linear-gradient(rgba(61, 103, 187, 0.9), rgba(255, 255, 255, .9));
  position: relative;
}
.main_logo{
  color: aqua;
  width: 100px;
}
h1{
  color:aliceblue;
}
.delete{
  position: absolute;
  right: 10px;
  top: 10px;
}

</style>
