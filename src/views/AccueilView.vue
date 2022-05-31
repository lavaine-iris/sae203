<template>
  <main>
    <div class="mb-5">
      <logo-accueil class="justify-content-center m-auto mt-5 flex flex-col justify-center" />
      <h2 class="text-center font-staatliches text-xl text-cyan-600">3 - 4 - 5 Février 2023</h2>
    </div>

  
    <div class="block mx-auto p-10 w-4/5">
      <div class="rounded overflow-hidden shadow-lg mb-5">
        <img class="w-full" src="../assets/nekfeu-accueil.webp" alt="Nekfeu">
      <div>
        <p class="text-white font-staatliches bg-cyan-600 text-xl text-center p-5">
        Découvrez la programmation du festival Snow Pop
        </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg mb-5">
        <img class="w-full" src="../assets/billeterie.webp" alt="Billeterie">
      <div>
        <p class="text-white font-staatliches bg-cyan-600 text-xl text-center p-5">
        Réservez votre place dés maintenant !
        </p>
        </div>
      </div>

      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full" src="../assets/map-accueil.webp" alt="Billeterie">
      <div>
        <p class="text-white font-staatliches bg-cyan-600 text-xl text-center p-5">
        Où se déroule le festival Snow POP ?
        </p>
        </div>
      </div>
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
