<template>
     <div class="row pt-4 pl-1 pr-1 justify-content-between">
         <h3>{{todo.title}}</h3>
        <div>
        <button class="btn btn-success  mx-3">Edit</button>
        <button @click="del_todo(todo.id)" class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   props:{
       todo:{}
   },
   methods:{
       ...mapActions(["del_todo"])
   }
}
</script>

<style lang="stylus" scoped>

</style>