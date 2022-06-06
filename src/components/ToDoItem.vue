<template>
         <li>
    <span v-bind:class="{crossed: todo.completed}">
        <input type="checkbox" v-on:change="todo.completed = !todo.completed">
        <b class="index">{{index + 1}}</b>
        <span v-on:dblclick="editTodo" v-show="!inEditModel">{{todo.title}}</span><input ref="todoInput" v-on:keyup.enter='savedToDo' v-model="todo.title" v-show="inEditModel">
    </span>
    <button class="close" v-on:click="$emit('remove-todo', todo.id)">X</button>
        </li>
</template>

<script>
export default {
    data: function() {return {inEditModel:false}},
    methods: {
        editTodo: function() {
            this.inEditModel = true;
        },
        savedToDo: function() {
            this.inEditModel = false;
        }
    },
    mounted() {
        let vm=this;
        document.addEventListener("click", (item)=> {
            if (item.target !==vm.$refs["todoInput"]) {vm.savedToDo()}
        })
    },
     props : {todo :{
         type: Object,
         required: true
     }, 
     index: Number
}, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    button{
        border: none;
        border-radius: 50%;
        background: linear-gradient(rgba(75, 128, 233, 0.5), rgba(255, 255, 255, .5));
    }
    li{
        width: 90%;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        background: linear-gradient(rgba(0, 0, 0, .5), rgba(255, 255, 255, .5));
        padding: 10px;
        border-radius: 20px;
        cursor: pointer;
        font-size: 18px;
    }

    li:hover{
        background: rgb(93, 122, 162);
    }

    .crossed{
        text-decoration: line-through;
    }
    .index{
        margin: 0 10px;
    }
</style>