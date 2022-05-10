<template>
    <div>
        <ul>
         <Student v-for="student of students" v-bind:student = "student"/>
        </ul>
    </div>
</template>

<script>
import Student from "@/components/Student.vue";
export default {
    props : ["students"],
  components: {
    Student
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
