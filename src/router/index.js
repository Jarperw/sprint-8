import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/starships',
      name: 'starships',
      component: () => import('../views/StarshipsView.vue'),
      beforeEnter: (to, from, next) => {
        if(store.state.login == true){
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignInView.vue'),
      beforeEnter: (to, from, next) => {
        if(store.state.login == true){
          next();
        }else{
          next('/login');
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
  ]
})

export default router
