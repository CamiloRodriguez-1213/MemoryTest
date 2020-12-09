import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
import Cantidad from '../views/Cantidad.vue'
import Juego from '../views/Juego.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Categorias',
    name: 'Categorias',
    component: Categorias
  },
  {
    path: '/Cantidad',
    name: 'Cantidad',
    component: Cantidad
  },
  {
    path: '/Juego',
    name: 'Juego',
    component: Juego
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
