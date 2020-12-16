<template>
  <div id="App" class="container-fluid">
    <TodoApp  data-aos="fade-up" msg="Welcome to Your Vue.js ToDo App"/>
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
}
</style>
