<template>
<div>

        <popup v-if="isPopupVisible" @closepopup="closeTodoPopup" >

        </popup>

     <button @click="showPopup" >Add ToDo</button>
<!--         <form v-on:submit.prevent="onSubmit">
            <input type="text" v-model="title" v-show="showInput">
            <button type="submit" v-show="showInput">ok</button>
        </form>  -->
</div>
        
</template>

<script>
import popup from "@/components/popup.vue"
export default {
    data: function() {
        return {
        isPopupVisible:false,
        title: ""}},
    methods: {
        showPopup(){
            this.isPopupVisible = true;
        },
        closeTodoPopup(title){
            this.title=title;
            if(this.title.trim()){
                let newTodo = {
                    title: this.title,
                    completed: false,
                    id: Date.now()
                }
                this.$emit("add-todo", newTodo);
                this.title = "";
        };
          this.isPopupVisible = false;},

    },
   
    components: {popup}
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
input {
  margin-right: 20px;
  padding: 5px;
  border: 1px solid #ddeeff;
  border-radius: 5px;
  width: 250px;
}
button {
  background: #295956;
  border: none;
  color: #fff;
  border: 1px solid #fff;
  padding: 0 19px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  height: 40px;
}

</style>