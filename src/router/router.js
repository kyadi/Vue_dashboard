//import Vue from 'vue';
// //mport vuetify from '@/plugins/vuetify';
// import LoginPage from '../components/pages/LoginPage'
// import VueRouter from 'vue-router'
// import { createApp } from 'vue'
// //import App from './App.vue'

// const app = createApp()
// app.use( VueRouter)
// //Vue.use(Router)

// const routes =[
//     {
//         name:'home',
//         path: '/',
//         component:LoginPage

// }
// ];

// const router = new VueRouter({
//    mode:'history', 
//     base:"localhost:8080",
//     routes
// });


// export default router;

//import { createApp } from 'vue'
//import App from '../App.vue'
import LoginPage from '../components/pages/LoginPage'

import {createRouter, createWebHashHistory} from 'vue-router'  

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage,//shsould be imported 
   
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;