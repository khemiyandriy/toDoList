<template>
  <div class="todo__list">
    <div><h1 class="title">{{ todoList.listName }}</h1></div>
    <PopupWindow v-if="isPopupVisible" @closepopup="closeTodoPopup"/>
    <div>
      <ul>
        <li>
          <ToDoItem
            v-for="listTodo in todoList.listTodos"
            :key="listTodo.id"
            :todo="listTodo"
            @deleteTodoItem="deleteTodoItem"
            @savedToDo="savedToDo"
            @change="change"
          />
        </li>
      </ul>
    </div>
    <button @click="showPopup" class="button button_green">Add ToDo</button>
    <button @click="$emit('deleteTodo', todoList.listId)" class="button button_red">X</button>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem.vue";
import PopupWindow from "./PopupWindow.vue";

export default {
  data: () =>{
    return {
      isPopupVisible:false,
      title: ""
      }
  },

  components: { ToDoItem, PopupWindow },
  props: {
    todoList: {},
  },
  methods: {
    deleteTodoItem(id){
      this.$emit('deleteTodoItem', id,  this.todoList.listId)
  },
  showPopup(){
      this.isPopupVisible = true;
  },
  closeTodoPopup(title){
            this.title=title;
            if(this.title.trim()){
                let newTodo = {
                    todoTitle: this.title,
                    checked: false,
                    id: Date.now()
                }
                this.$emit("add-todo", newTodo, this.todoList.listId);
                this.title = "";
               }
          this.isPopupVisible = false;},
  savedToDo(text, todoid){
    this.$emit('savedToDo', text,  todoid, this.todoList.listId)
  },
  change(todoid){
    this.$emit('change', todoid, this.todoList.listId)
  }
}
}
</script>

<style scoped>
.todo__list{
  padding: 10px;
  background: linear-gradient(rgba(61, 103, 187, 0.9), rgba(255, 255, 255, .9));
  border: 2px solid black;
  border-radius: 10px;
  width: 400px;
  min-height: 600px;
  list-style: none;
  display: flex;
  flex-direction: column;
  position: relative;
}
li{
  list-style: none;
}
.button{
  border: none;
  border-radius: 10px;
  height: 50px;
  width: 100px;
}
.button_red{
  background: linear-gradient(rgba(229, 22, 22, 0.5), rgba(255, 255, 255, .5));
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  width: 50px;
}
.button_green{
  background: linear-gradient(rgba(11, 123, 5, 0.5), rgba(255, 255, 255, .5));
  margin: 0 auto;
}
.title{
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif ;
  font-size: 36px;
  font-style: italic;
}
</style>