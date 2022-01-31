import { createRouter, createWebHistory } from 'vue-router'
import login from '../views/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/home.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.path !== '/login' && !token) next({ name: 'login' })
  else next()
})

export default router
