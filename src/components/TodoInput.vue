<template>
    <div class="row">
        <!-- <input v-model="todoText" class="form-control col mx-3"  type="text" /> -->
        <input 
        @change="todoTextchange"
        v-bind:value="todoText" 
        class="form-control col mx-3"  
        type="text" />
        <button @click="addTodoI" class="btn btn-primary">ADD</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import { v1 } from 'uuid'
export default {
    data(){
        return{
            todoText: ""
        };
    },
   methods:{
       ...mapActions(["addTodo"]),
       todoTextchange(e){
           this.todoText= e.target.value;
       },
       addTodoI(){
           this.addTodo({
               id:v1(),
               title:this.todoText
           });
           this.todoText= "";
       }
   }
}
</script>

<style lang="stylus" scoped>

</style>