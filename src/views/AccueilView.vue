<template>
  <main>
    <logo-accueil />
    <h2 class="font-staatliches text-xl text-cyan-600">3 - 4 - 5 Février 2023</h2>
    <img src="../assets/nekfeu1.webp" alt="Nekfeu" />
    <p class="bg-cyan-600 text-white">Découvrez la programmation du festival Snow Pop</p>
    <p class="bg-cyan-600 text-white">Réservez votre place dés maintenant !</p>
    <img src="../assets/map.webp" alt="Carte" />
    <p class="bg-cyan-600 text-white">Où se déroule le festival Snow POP ?</p>
    <p class="font-staatliches text-xl">Galerie photo</p>
    <img src="../assets/scene1.webp" alt="Première scène" />
    <img src="../assets/scene2.webp" alt="Seconde scène" />
    <img src="../assets/chatel.webp" alt="Chatel" />
  </main>
</template>

<script>
import LogoAccueil from "../components/icons/LogoAccueil.vue";
export default {
  components: { LogoAccueil },
};
</script>
