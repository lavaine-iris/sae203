<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Artiste</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>

    <h2 class="font-staatliches text-xl m-2">Nekfeu</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2">
    <img class="p-5" src="/public/images/nekfeu.webp" alt="Nekfeu" />
    <div>
    <h3 class="font-semibold m-6">Un artiste aux multiples talents</h3>
    <p class="m-4 mr-8">
      Que ce soit dans sa carrière solo, avec ses différents groupes ou au cinéma, Nekfeu semble transformer tout ce qu’il touche en or.
      Outre son flow technique, son don pour les jeux de mots et ses thèmes abordant les sujets de société, le rappeur arrive à surprendre
      avec des collaborations sortant de son univers musical. Feu comprend ainsi le titre Reuf en featuring avec Ed Sheeran, Cyborg compte
      les chansons Avant tu riais avec Clara Luciani et Nekketsu avec la chanteuse japonaise Crystal Kay, et Les Étoiles vagabondes inclut
      Dans l’univers, une collaboration avec Vanessa Paradis. Nekfeu doit aussi son succès à son grand sens de l’autopromotion, lui qui
      parvient à créer la surprise auprès de ses fans et à les tenir en haleine avec les sorties de ses albums.
    </p></div></div>
    <h3 class="font-semibold m-6">Les derniers albums de Nekfeu</h3>
    <div class="gap-8 p-12 grid grid-cols-1 lg:grid-cols-3">
      <img src="../assets/cd1.webp" alt="Album FEU de Nekfeu" />
      <img src="../assets/cd2.webp" alt="Album Les étoiles vagabondes de Nekfeu" />
      <img src="../assets/cd3.webp" alt="Album Cyborg de Nekfeu" />
    </div>

    <h3 class="font-semibold m-6">Les titres les plus écoutés de Nekfeu</h3>
    <img class="mx-auto" src="../assets/video.webp" alt="Vidéo youtube Nekfeu" />
    <p class="m-4">
      “On verra” fait partie des quatre titres de Nekfeu dans le classement. Les trois autres sont issus de son dernier opus : “Dans
      l’univers”, “Elle pleut” et “Tricheur”. Les trois titres les plus streamés de “Les étoiles vagabondes”.
    </p>
    
    <router-link to="/Billeterie" class="bg-cyan-600 py-2 px-4 font-staatliches text-2xl text-white block w-max mx-auto mb-4">
      Billeterie
    </router-link>
  </main>
</template>

<style>
</style>

