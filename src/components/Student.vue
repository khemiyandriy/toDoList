<template>
         <li>
    <span>
        <b>{{student.id}}</b>
        {{student.firstname}}
        {{student.lastname}}
    </span>
        </li>
</template>

<script>
export default {
     props : {student :{
         type: Object,
         required: true
     }, 
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>