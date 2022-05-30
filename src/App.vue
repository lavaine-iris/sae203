<template>
  <header class="sticky top-0 flex h-14 w-screen items-center bg-yellow-500">
    <MenuAlt1Icon class="absolute right-4 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <XIcon class="absolute right-4 z-50 h-8 w-8" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <Logo class="mx-auto" />
    <nav
      class="absolute left-0 top-0 bottom-0 right-0 h-screen -translate-x-full bg-yellow-500 opacity-0"
      :class="MenuOpen && 'translate-x-0 opacity-100'"
    >
      <ul class="flex h-full flex-col items-center justify-center gap-14 text-center font-staatliches text-3xl">
        <li>
          <RouterLink to="/" @click="MenuOpen = !MenuOpen">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/Programmation" @click="MenuOpen = !MenuOpen">Programmation</RouterLink>
        </li>
        <li>
          <RouterLink to="/Festival" @click="MenuOpen = !MenuOpen">Festival</RouterLink>
        </li>
        <li>
          <RouterLink to="/Concert" @click="MenuOpen = !MenuOpen">Concert</RouterLink>
        </li>
        <li>
          <RouterLink to="/Artistes" @click="MenuOpen = !MenuOpen">Artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/Billeterie" @click="MenuOpen = !MenuOpen">Billeterie</RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact" @click="MenuOpen = !MenuOpen">Contact</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
  <footer></footer>
</template>

<script>
import LogoAccueil from "./components/icons/LogoAccueil.vue";
import Logo from "./components/icons/Logo.vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { Logo, LogoAccueil, MenuAlt1Icon, XIcon },
};
</script>