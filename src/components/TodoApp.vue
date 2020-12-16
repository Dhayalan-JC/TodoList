<template>
  <div class="col-xl-12">
      <TodoInput />
      <TodoList />
  </div>
</template>

<script>
import TodoInput from './TodoInput'
import TodoList from './TodoList'
  export default {
    name: 'TodoApp',
    props: {
      msg: String
    },
    components: {
      TodoInput,
      TodoList
    }    
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
