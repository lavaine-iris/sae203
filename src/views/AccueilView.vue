<template>
  <main>
    <div class="mb-5">
      <logo-accueil
        class="justify-content-center m-auto mt-8 flex flex-col justify-center md:h-[300px] md:w-[600px] lg:h-[400px] lg:w-[700px]"
      />
      <h2 class="text-center font-staatliches text-xl text-cyan-600 md:text-4xl lg:text-5xl">3 - 4 - 5 Février 2023</h2>
    </div>

    <div class="mx-auto grid w-4/5 grid-cols-1 justify-items-center lg:grid-cols-3">
      <RouterLink to="/Programmation"><CardAccueil /></RouterLink>
      <RouterLink to="/Billeterie"
        ><CardAccueil :nom="'Réservez votre place dés maintenant !'" image="/images/billeterie.webp"
      /></RouterLink>
      <RouterLink to="/Festival"><CardAccueil :nom="'Où se déroule le festival Snow POP ?'" image="/images/map-accueil.webp" /></RouterLink>
    </div>

    <p class="px-5 font-staatliches text-xl">Galerie photo</p>

    <div class="relative flex w-full snap-x overflow-x-auto pb-14">
      <div class="h-40 shrink-0 shadow-xl sm:h-60 md:h-80 lg:h-[28rem]">
        <img class="h-full w-full object-cover" src="../assets/chatel.webp" alt="Châtel" />
      </div>
      <div class="h-40 shrink-0 shadow-xl sm:h-60 md:h-80 lg:h-[28rem]">
        <img class="h-full w-full object-cover" src="../assets/scene1.webp" alt="Première scène" />
      </div>
      <div class="h-40 shrink-0 shadow-xl sm:h-60 md:h-80 lg:h-[28rem]">
        <img class="h-full w-full object-cover" src="../assets/scene2.webp" alt="Deuxième scène" />
      </div>
    </div>
  </main>
</template>

<script>
import LogoAccueil from "../components/icons/LogoAccueil.vue";
import CardAccueil from "../components/CardAccueil.vue";
export default {
  components: { LogoAccueil, CardAccueil },
};
</script>
