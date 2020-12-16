// import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'aos-animations/dist/animations.min.css'
import 'aos-animations/dist/animations.min.js'
import store from './store'

// import 'aos-animations/dist/animations.min.css';
// import 'aos-animations/dist/animations.min.js';

// createApp(App).use(store).mount('#app')

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App)
}).$mount("#app");