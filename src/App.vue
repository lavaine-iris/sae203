<template>
  <header>
    <nav>
      <Logo />
      <RouterLink to="../views/AccueilView.vue" class="text-blue-600 underline">Accueil</RouterLink>
      <RouterLink to="../views/ProgView.vue" class="m-2 text-blue-600 underline">Programmation</RouterLink>
      <RouterLink to="../views/FestivalView.vue" class="text-blue-600 underline">Festival</RouterLink>
      <RouterLink to="../views/ConcertView.vue" class="m-2 text-blue-600 underline">Concert</RouterLink>
      <RouterLink to="../views/ArtistesView.vue" class="m-2 text-blue-600 underline">Artistes</RouterLink>
      <RouterLink to="../views/BilleterieView.vue" class="text-blue-600 underline">Billeterie</RouterLink>
      <RouterLink to="../views/ContactView.vue" class="m-2 text-blue-600 underline">Contact</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<script>
import LogoAccueil from "./components/icons/LogoAccueil.vue";
import Logo from "./components/icons/Logo.vue";
import { FilmIcon } from "@heroicons/vue/outline";
export default {
  components: { Logo, LogoAccueil },
};
</script>