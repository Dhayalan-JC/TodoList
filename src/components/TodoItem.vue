<template>
     <div class="row pt-4 pl-1 pr-1 justify-content-between">
         <h3 v-if="!editing">{{todo.title}}</h3>
         <input 
         v-bind:value="todoText" 
         v-else 
         type="text" 
         @click="todoTextchange"
         class="col form-control">
        <div>
        <button @click="update(todo)" class="btn btn-success  mx-3"> {{editing?'Update':'Edit'}}</button>
        <button @click="deltodo(todo.id)" class="btn btn-danger">Delete</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
   props:{
       todo:{}
   },
   data(){
       return{
           todoText: "",
           editing: false
       }
   },
   methods:{
       ...mapActions(["deltodo", "updatetodo"]),
       todoTextchange(e){
           this.todoText= e.target.value;
       },
       update(todo){
           this.editing= this.editing == true ? false :true;
           if(this.editing){
               this.todoText = todo.title;
               this.updatetodo(todo);
           }
           else{
               todo.title = this.todoText;
           }
       }
   }
}
</script>

<style lang="stylus" scoped>

</style>