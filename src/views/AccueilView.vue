<template>
  <main>
    <div class="mb-5">
      <logo-accueil class="justify-content-center m-auto mt-5 flex flex-col justify-center" />
      <h2 class="text-center font-staatliches text-xl text-cyan-600">3 - 4 - 5 Février 2023</h2>
    </div>

    <div class="relative">
      <img src="../assets/nekfeu-accueil.webp" alt="Nekfeu" />
      <figcaption class="absolute -bottom-20 w-full bg-cyan-600 py-2 text-center font-staatliches text-xl text-white">
        Découvrez la programmation du festival Snow Pop
      </figcaption>
    </div>

    <figure class="relative">
      <img src="../assets/billeterie.webp" alt="Nekfeu" />
      <figcaption class="absolute -bottom-20 w-full bg-cyan-600 py-2 text-center font-staatliches text-xl text-white">
        Découvrez la programmation du festival Snow Pop
      </figcaption>
    </figure>

    <div>
      <p class="bg-cyan-600 text-white">Réservez votre place dés maintenant !</p>
    </div>

    <div>
      <img src="../assets/map-accueil.webp" alt="Carte" />
      <p class="bg-cyan-600 text-white">Où se déroule le festival Snow POP ?</p>
    </div>

    <p class="font-staatliches text-xl">Galerie photo</p>

    <div class="relative flex w-full snap-x overflow-x-auto pb-14">
      <div class="h-40 shrink-0 shadow-xl">
        <img class="h-full w-full object-cover" src="../assets/chatel.webp" alt="Châtel" />
      </div>
      <div class="h-40 shrink-0 shadow-xl">
        <img class="h-full w-full object-cover" src="../assets/scene1.webp" alt="Première scène" />
      </div>
      <div class="h-40 shrink-0 shadow-xl">
        <img class="h-full w-full object-cover" src="../assets/scene2.webp" alt="Deuxième scène" />
      </div>
    </div>
  </main>
</template>

<script>
import LogoAccueil from "../components/icons/LogoAccueil.vue";
export default {
  components: { LogoAccueil },
};
</script>
