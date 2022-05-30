<template>
  <header>
    <nav>
      <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="../views/ProgView.vue" class="text-blue-600 underline">Programmation</RouterLink>
      <RouterLink to="../views/FestivalView.vue" class="text-blue-600 underline">Festival</RouterLink>
      <RouterLink to="../views/ConcertView.vue" class="text-blue-600 underline">Concert</RouterLink>
      <RouterLink to="../views/ArtistesView.vue" class="text-blue-600 underline">Artistes</RouterLink>
      <RouterLink to="../views/BilleterieView.vue" class="text-blue-600 underline">Billeterie</RouterLink>
      <RouterLink to="../views/ContactView.vue" class="text-blue-600 underline">Contact</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import IconLogo from "./components/icons/IconLogo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: {},
};
</script>