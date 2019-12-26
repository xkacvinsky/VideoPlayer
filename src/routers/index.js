import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeScreen from '../views/HomeScreen.vue'
import VideoPlayer from '../views/VideoPlayer.vue'
import Login from '../views/Login.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: HomeScreen
  },
  {
    path: '/video',
    name: 'video',
    component: VideoPlayer
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
