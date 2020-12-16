import { createApp } from 'vue'
// import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos-animations/dist/animations.min.css'
import 'aos-animations/dist/animations.min.js'
import store from './store'

createApp(App).use(store).mount('#app')

// Vue.config.productionTip = false;
// Vue.use(Vuex);
// new Vue({
//     store,
//     render: (h) => h(App)
// }).$mount('#app');