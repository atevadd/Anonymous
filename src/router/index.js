import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Message from '../views/Message.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Anon - Send anonymous messages, recieve honest feedbacks'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: 'Login - Anon - Send anonymous messages, recieve honest feedbacks'
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: {
      title: 'Signup - Anon - Send anonymous messages, recieve honest feedbacks'
    }
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
    meta: {
      title: 'Your messages - Anon - Send anonymous messages, recieve honest feedbacks'
    }
  }
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// changing the page title from the meta property of the route
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
