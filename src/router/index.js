import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/DashBoard.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/Products.vue'),
        }
      ]
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

export default router
