import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../components/Homepage.vue'
import About from './../components/About.vue'
import Booking from './../components/Booking.vue'
import Contact from './../components/Contact.vue'
import Feedback from './../components/Feedback.vue'
import Menu from './../components/Menu.vue'
import Order from './../components/Order.vue'
import Restaurant from './../components/Restaurant.vue'
// route array of objects : path, component
const routes = [
  {
    path:'/',
    component: HomePage
  },
  {
    path:'/about',
    component: About
  },
  {
    path:'/Booking',
    component: Booking
  },
  {
    path:'/Contact',
    component: Contact
  },
  {
    path:'/Feedback',
    component: Feedback
  },
  {
    path:'/Menu',
    component: Menu
  },
  {
    path:'/Order',
    component: Order
  },
  {
    path:'/Restaurant',
    component: Restaurant
  }
  
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
