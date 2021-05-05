import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Active from '../views/Active.vue'
import Completed from '../views/Completed.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/active',
    name: 'Active',
    component: Active
  },
  {
    path: '/completed',
    name: 'Completed',
    component: Completed
  }
]

const router = new VueRouter({
  routes
})

export default router
