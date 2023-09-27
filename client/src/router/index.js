import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'

import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'

import MyVideoView from "../views/MyVideoView.vue";
import DetailView from '../views/DetailView.vue'

import NotFoundView from '../views/NotFoundView.vue'

import FormItems from '../components/FormItems.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/myvideo',
      name: 'myvideo',
      component: MyVideoView
    },
    {
      path: '/add-video',
      name: 'add-video',
      component: FormItems
    },
    {
      path: '/detail/video/:id',
      name: 'detail-video',
      component: DetailView
    },
    {
      path : '/profile',
      name : 'profile',
      component : ProfileView
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFoundView
    }
  ]
})

router.beforeEach((to, from, next)=>{
  let isLogged = !!localStorage.getItem('access_token')
  
  if (isLogged && (to.name === 'login' || to.name === 'register')) {
    return next('/')
  } else {
    return next()
  }
})

export default router
