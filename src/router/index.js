import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
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
          name: 'products',
          component: () => import('../views/Products.vue'),
        },
        {
          path: 'orders',
          name: 'orders',
          component: () => import('../views/Orders.vue'),
        },
        {
          path: 'coupon',
          name: 'coupon',
          component: () => import('../views/Coupon.vue'),
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
