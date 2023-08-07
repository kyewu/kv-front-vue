// import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router/auto'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
