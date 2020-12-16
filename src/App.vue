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
body{
  width:100%;
  height:100%;
  /* background-color:#018786; */
  background-color:#03dAC6 !important;
  position:relative;
  overflow:hidden;
}
body:after{
  content: "TO Do App";
    position: absolute;
    right: 0;
    background-color: gold;
      width: 60%;
    height: 80%;
    z-index: -1;
    /* transform: rotate(45deg); */
    border-radius: 100%;
    transition: 0.5s ease;
    margin: 0 auto;
    left: 0;
    text-align: c;
    vertical-align: middle;
    text-align: center;
    padding-top: 5rem;
    font-size: 5rem;
    color: white;
    text-transform: uppercase;
    font-style: italic;
   animation: mymove 2s forwards;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  padding:1.5rem;
      height: 100vh;
}
@keyframes mymove{
  from{
    bottom: -100%;
  }
  to{
    bottom: -50%;
  }
}
@keyframes scale{
  from{
    transform:scale(0.7);
  }
  to{
     transform:scale(1);
  }
}

@media only screen and (max-width: 800px) {
  body:after {
      width: 100%;
      padding-top: 3rem;
      font-size: 3rem;
      height: 70%;
  }
}
</style>
