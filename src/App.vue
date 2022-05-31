<template>
  <header class="sticky top-0 z-50 flex h-14 w-screen items-center bg-yellow-500">
    <MenuAlt1Icon class="absolute right-4 h-8 w-8 lg:hidden" @click="MenuOpen = !MenuOpen" v-if="!MenuOpen" />
    <XIcon class="absolute right-4 z-50 h-8 w-8 lg:hidden" @click="MenuOpen = !MenuOpen" v-if="MenuOpen" />
    <Logo class="mx-auto" />
    <nav
      class="
        absolute
        left-0
        top-0
        bottom-0
        right-0
        h-screen
        -translate-x-full
        bg-yellow-500
        opacity-0
        lg:relative lg:h-fit lg:translate-x-0 lg:opacity-100
      "
      :class="MenuOpen && 'translate-x-0 opacity-100'"
    >
      <ul
        class="
          flex
          h-full
          flex-col
          items-center
          justify-center
          gap-14
          text-center
          font-staatliches
          text-3xl
          lg:h-fit lg:flex-row lg:pr-8 lg:text-lg
        "
      >
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
  <footer class="bg-cyan-600 py-6">
    <div class="flex items-center justify-between">
      <div class="h-1 w-1/3 bg-gray-800"></div>
      <div class="flex w-1/3 justify-around">
        <icon-youtube />
        <icon-insta />
        <icon-facebook />
      </div>
      <div class="h-1 w-1/3 bg-gray-800"></div>
    </div>
    <div class="flex justify-center p-2">
      <logo />
    </div>
    <div class="flex justify-center p-2 text-xs font-light">
      <p>Copyright © 2022 Snow Pop</p>
    </div>
    <div class="flex w-full justify-evenly p-2 text-gray-800">
      <RouterLink to="/Contact" class="text-sm text-gray-800">Contact</RouterLink>
      <RouterLink to="/Mentions" class="text-sm text-gray-800">Mentions Légales</RouterLink>
    </div>
  </footer>
</template>

<script>
import LogoAccueil from "./components/icons/LogoAccueil.vue";
import Logo from "./components/icons/Logo.vue";
import IconFacebook from "./components/icons/IconFacebook.vue";
import IconInsta from "./components/icons/IconInsta.vue";
import IconYoutube from "./components/icons/IconYoutube.vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: { Logo, LogoAccueil, MenuAlt1Icon, XIcon, IconFacebook, IconInsta, IconYoutube },
};
</script>