<template>
  <header>
    <nav>
      <Logo />
      <ul>
        <li>
          <RouterLink to="/" class="text-blue-600 underline">Accueil</RouterLink>
        </li>
        <li>
          <RouterLink to="/Programmation" class="text-blue-600 underline">Programmation</RouterLink>
        </li>
        <li>
          <RouterLink to="/Festival" class="text-blue-600 underline">Festival</RouterLink>
        </li>
        <li>
          <RouterLink to="/Concert" class="text-blue-600 underline">Concert</RouterLink>
        </li>
        <li>
          <RouterLink to="/Artistes" class="text-blue-600 underline">Artistes</RouterLink>
        </li>
        <li>
          <RouterLink to="/Billeterie" class="text-blue-600 underline">Billeterie</RouterLink>
        </li>
        <li>
          <RouterLink to="/Contact" class="text-blue-600 underline">Contact</RouterLink>
        </li>
      </ul>
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