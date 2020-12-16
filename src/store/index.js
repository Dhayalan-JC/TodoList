// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)


// export default new Vuex.Store({
//   state: {
//     todos:[
//       {
//         id:1,
//         title:"One"
//       },
//       {
//         id:2,
//         title:"Two"
//       },
//       {
//         id:3,
//         title:"Three"
//       }
//     ],
//   },
//   getters:{
//     allTodos:(state)=> state.todoos,
//   },
//   actions: {
//     addTodo({ commit }, todo){
//       commit("add_todo", todo);
//     }
//   },
//   mutations: {
//     add_todo(state, todo){
//       state.todos.push(todo);
//       console.log(todo);
//     }
//   },
//   modules: {
//   }
// })


import { createStore } from 'vuex'
export default new createStore({
  state: {
    todos:[
      {
        id:1,
        title:"One"
      },
      {
        id:2,
        title:"Two"
      },
      {
        id:3,
        title:"Three"
      }
    ],
  },
  getters:{
    allTodos:(state)=> state.todos,
  },
  actions: {
    addTodo({ commit }, todo){
      commit("add_todo", todo);
    },
    del_todo({ commit }, id){
      commit("del_todo", id);
    }
  },
  mutations: {
    add_todo(state, todo){
      state.todos.push(todo);
      console.log(todo);
    },
    del_todo(state, id){
      state.todos = state.todos.filter((todo) => todo.id  != id);
     
    }   
  },
  modules: {
  }
})
