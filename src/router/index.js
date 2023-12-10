import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlaylistView from '../views/PlaylistView.vue'
import CalendarView from '../views/CalendarView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: HomeView
    },
    {
      path: '/playlist',
      name: 'playlist',
      component: PlaylistView
    },
    {
      path: '/calendar',
      name: 'calendar',
      component: CalendarView
    }
  ]
})

export default router
