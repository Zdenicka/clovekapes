import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import treninky from '../views/treninky.vue'
import prihlasovani from '../views/prihlasovani.vue'
import kontakt from '../views/kontakt.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/treninky',
    name: 'treninky',
    component: treninky,

  },
  {
    path: '/prihlasovani',
    name: 'prihlasovani',
    component: prihlasovani
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: kontakt
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
