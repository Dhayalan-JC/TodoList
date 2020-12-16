<template>
  <div id="App" class="container">
    <TodoApp  data-aos="fade-up" msg="My First ToDo App with VUE Js"/>
  </div>
</template>

<script>
import TodoApp from './components/TodoApp'

export default {
  name: 'App',
  components: {
    TodoApp
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:1.5rem;
}
</style>
