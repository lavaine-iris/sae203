import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import ArtistesView from '../views/ArtistesView.vue'
import ArtisteView from '../views/ArtisteView.vue'
import BilleterieView from '../views/BilleterieView.vue'
import ConcertView from '../views/ConcertView.vue'
import ContactView from '../views/ContactView.vue'
import FestivalView from '../views/FestivalView.vue'
import ProgView from '../views/ProgView.vue'
import MentionsView from '../views/MentionsView.vue'
import StyleView from '../views/StyleView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: AccueilView },
    { path: '/Artistes', name: 'Artistes', component: ArtistesView },
    { path: '/Artiste', name: 'Artiste', component: ArtisteView },
    { path: '/Billeterie', name: 'Billeterie', component: BilleterieView },
    { path: '/Concert', name: 'Concert', component: ConcertView },
    { path: '/Contact', name: 'Contact', component: ContactView },
    { path: '/Festival', name: 'Festival', component: FestivalView },
    { path: '/Programmation', name: 'Programmation', component: ProgView },
    { path: '/Mentions', name: 'Mentions', component: MentionsView },
    { path: '/Style', name: 'Style', component: StyleView },
    // ici les autre routes
  ]
})

export default router
