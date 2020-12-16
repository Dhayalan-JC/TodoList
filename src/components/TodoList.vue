<template>
        <div v-for="todo in  allTodos" :key="todo.id" class="row pt-4 pl-1 pr-1 d-flex justify-content-between">
            <TodoItem :todo='todo' />
        </div>
</template>

<script>
import TodoItem from './TodoItem'
import { mapGetters } from 'vuex'

export default {
    components:{
        TodoItem
    },
    computed:{
        ...mapGetters(["allTodos"])
    }
}
</script>

<style scoped>

</style>