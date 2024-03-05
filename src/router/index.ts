import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import MainPage from '../ui/pages/MainPage.vue'
import TasksPage from '../ui/pages/TasksPage.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Main',
    component: MainPage,
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: TasksPage,
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
