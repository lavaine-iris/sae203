import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import ProgView from '../views/ProgView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/artistes', name: 'Artistes', component: ArtistesView },
    { path: '/billeterie', name: 'Billeterie', component: BilleterieView },
    { path: '/concert', name: 'Concert', component: ConcertView },
    { path: '/contact', name: 'Contact', component: ContactView },
    { path: '/festival', name: 'Festival', component: FestivalView },
    { path: '/programmation', name: 'Programmation', component: ProgView },
    // ici les autre routes
  ]
})

export default router
