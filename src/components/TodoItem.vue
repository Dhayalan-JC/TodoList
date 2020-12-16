<template>
    <div class="todos d-flex">
         <h3 v-if="!editing" class="text-white">{{todo.title}}</h3>
         <input 
         v-bind:value="todoText" 
         v-else 
         type="text" 
         @change="todoTextchange"
         class="col form-control ">
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
       ...mapActions(["deltodo", "updatetodo"]), //DISPATCH Action From Store to View
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

<style  scoped>
.todos{
    width: 100%;
    justify-content: space-between;
        animation: scale .5s forwards;
}
</style>