<template>
  <div id="app" class="app">
      <ToDoList 
        v-for="todolist in list"
        :key="todolist.id"
        :todoList="todolist"
        @deleteTodo="deleteTodo"
        @deleteTodoItem="deleteTodoItem"
        @add-todo="addToDo"
        @savedToDo="savedToDo"
        @change="change"
      />
      <button class="button" @click="addList">Add List</button>

  </div>
</template>

<script>
import ToDoList from "./components/ToDoList.vue";
export default {
  name: "App",
  components: { ToDoList},
  data() {
    return {
      list: [
        {
          listId: 1,
          listName: "Todo1",
          listTodos: [
            { id: 1, todoTitle: "Vue", checked: true },
            { id: 2, todoTitle: "React", checked: false },
            { id: 3, todoTitle: "Angular", checked: false },
          ],
        },
        {
          listId: 2,
          listName: "Todo2",
          listTodos: [
            { id: 1, todoTitle: "One", checked: false },
            { id: 2, todoTitle: "Two", checked: false },
            { id: 3, todoTitle: "Three", checked: false },
            { id: 4, todoTitle: "Four", checked: false },
          ],
        },
      ],
    newList: {}
    };
  },
  
  methods: {
    createList() {return {
       listId: Date.now(),
       listName: "NewTodo",
       listTodos: [
      { 
      id: Date.now(), 
      todoTitle: "***", 
      checked: false 
      },
                  ],
    }},

    addList() {
      this.list.push(this.createList())
    },

    deleteTodo(id){
      this.list = this.list.filter(list => list.listId !== id)
    },

    deleteTodoItem(todoid, listid){  

      const listIndex = this.list.findIndex((el) => {
        return el.listId == listid})

      const todoIndex = this.list[listIndex].listTodos.findIndex((el) => {
        return el.id == todoid})

      this.list[listIndex].listTodos.splice(todoIndex, 1)
  },

    addToDo(newTodo, listid){
      const listIndex = this.list.findIndex((el) => {
        return el.listId == listid});

      this.list[listIndex].listTodos.push(newTodo);
  },

    savedToDo(text, todoid, listid){
      const listIndex = this.list.findIndex((el) => {
        return el.listId == listid});

      const todoIndex = this.list[listIndex].listTodos.findIndex((el) => {
        return el.id == todoid});
      this.list[listIndex].listTodos[todoIndex].todoTitle = text;
  },
    change(todoid, listid){
      const listIndex = this.list.findIndex((el) => {
        return el.listId == listid});

      const todoIndex = this.list[listIndex].listTodos.findIndex((el) => {
        return el.id == todoid});
      
      this.list[listIndex].listTodos[todoIndex].checked = !this.list[listIndex].listTodos[todoIndex].checked;
  }

  }
  
}
</script>

<style scoped>
.app{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #777777;
  display: flex;
  flex-wrap: wrap;
}
.button{
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background: linear-gradient(rgba(11, 123, 5, 0.5), rgba(8, 107, 141, 0.5));
  font-size: 48px;
  color: #fff;
}

</style>