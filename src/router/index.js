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
import NotFoundComponent from '../views/404.vue'
import GestionView from '../views/billetterie/GestionView.vue'
import CreateView from '../views/artistes/CreateView.vue'
import DeleteView from '../views/artistes/DeleteView.vue'
import UpdateView from '../views/artistes/UpdateView.vue'

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
    { path: '/style-guide', name: 'Style', component: StyleView },
    { path: '/:pathMatch(.*)', component: NotFoundComponent },
    { path: '/Gestion', name: 'Gestion', component: GestionView },
    { path: '/Create', name: 'Create', component: CreateView },
    { path: '/Delete/:id', name: 'Delete', component: DeleteView },
    { path: '/Update/:id', name: 'Update', component: UpdateView },
    // ici les autre routes
  ]
})

export default router


