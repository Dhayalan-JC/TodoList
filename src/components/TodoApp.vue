<template>
  <div class="col-xl-12">
   
   
  </div>
</template>

<script>
  export default {
    name: 'TodoApp',
    props: {
      msg: String
    },
    data (){
        return{
          todos:[
              {
                id:1,
                title:"Amritsar"
              },
              {
                id:2,
                title:"Bombay"
              },
              {
                id:3,
                title:"Chennai"
              }
            ]
        }
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
