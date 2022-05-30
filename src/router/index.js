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
    { path: '/Artistes', name: 'Artistes', component: ArtistesView },
    { path: '/Billeterie', name: 'Billeterie', component: BilleterieView },
    { path: '/Concert', name: 'Concert', component: ConcertView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/Festival', name: 'Festival', component: FestivalView },
    { path: '/Programmation', name: 'Programmation', component: ProgView },
    // ici les autre routes
  ]
})

export default router
