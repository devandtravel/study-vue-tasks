import { createRouter, createWebHistory } from 'vue-router'
import Create from '../views/Create'

const routes = [
  {
    path: '/',
    name: 'create',
    component: Create
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../views/List')
  },
  {
    path: '/task/:taskId',
    name: 'task',
    component: () => import('../views/Task')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
