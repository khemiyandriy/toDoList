<template>
         <li>
    <span v-bind:class="{crossed: todo.completed}">
        <input type="checkbox" v-on:change="todo.completed = !todo.completed">
        <b>{{index + 1}}</b>
        {{todo.title}}
    </span>
    <button class="close" v-on:click="$emit('remove-todo', todo.id)">X</button>
        </li>
</template>

<script>
export default {
     props : {todo :{
         type: Object,
         required: true
     }, 
     index: Number
}
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
        width: 30%;
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
</style>