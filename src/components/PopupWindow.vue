<template>
    <div class="popup">
        <div class="popup__header">
           <h1>New ToDo</h1> 
        </div>
        <div class="popup__form"  ref="popup">

            <form v-on:submit.prevent="onSubmit">
            <input type="text" v-model="title" id="input">
            <button type="submit" @click="saveToDo">OK</button>

        </form>
        </div>
    </div>
</template>

<script>
export default {

  methods: {
      saveToDo() {
          this.$emit("closepopup", this.title);
        }
  }, 
mounted() {
        document.querySelector("#input").focus();
        let vm=this;
        document.addEventListener("click", (item)=> {
            if (item.target !==vm.$refs["popup"]) {vm.saveToDo()}
        })
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.popup{
    box-sizing: border-box;
    padding: 20px;
    height: 200px;
    width: 400px;
    position: fixed;
    top: 100px;
    background: rgba(133, 171, 246, 0.9);
    box-shadow: 0 0 17px 0 #e7e7e7;
    z-index: 10;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  height: 25px;
}
input{
    height: 20px;
}
</style>
