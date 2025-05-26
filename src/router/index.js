// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DestinationPage from '../components/DestinationPage.vue'
import CrewPage from '../components/CrewPage.vue'
import TechnologyPage from '../components/TechnologyPage.vue'

const routes = [
  { path: '/', name: 'HomeView', component: HomeView },
  { path: '/destination', name: 'Destination', component: DestinationPage },
  { path: '/crew', name: 'Crew', component: CrewPage },
  { path: '/technology', name: 'Technology', component: TechnologyPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
