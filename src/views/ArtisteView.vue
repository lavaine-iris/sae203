<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Artiste</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>

    <h2 class="font-staatliches text-xl">Nekfeu</h2>
    <img src="/public/images/nekfeu.webp" alt="Nekfeu" />
    <h3>Un artiste aux multiples talents</h3>
    <p>
      Que ce soit dans sa carrière solo, avec ses différents groupes ou au cinéma, Nekfeu semble transformer tout ce qu’il touche en or.
      Outre son flow technique, son don pour les jeux de mots et ses thèmes abordant les sujets de société, le rappeur arrive à surprendre
      avec des collaborations sortant de son univers musical. Feu comprend ainsi le titre Reuf en featuring avec Ed Sheeran, Cyborg compte
      les chansons Avant tu riais avec Clara Luciani et Nekketsu avec la chanteuse japonaise Crystal Kay, et Les Étoiles vagabondes inclut
      Dans l’univers, une collaboration avec Vanessa Paradis. Nekfeu doit aussi son succès à son grand sens de l’autopromotion, lui qui
      parvient à créer la surprise auprès de ses fans et à les tenir en haleine avec les sorties de ses albums.
    </p>
    <h3>Les derniers albums de Nekfeu</h3>
    <div class="flex flex-col gap-8 p-16">
      <img src="../assets/cd1.webp" alt="Album FEU de Nekfeu" />
      <img src="../assets/cd2.webp" alt="Album Les étoiles vagabondes de Nekfeu" />
      <img src="../assets/cd3.webp" alt="Album Cyborg de Nekfeu" />
    </div>

    <h3>Les titres les plus écoutés de Nekfeu</h3>
    <img class="mx-auto" src="../assets/video.webp" alt="Vidéo youtube Nekfeu" />
    <p>
      “On verra” fait partie des quatre titres de Nekfeu dans le classement. Les trois autres sont issus de son dernier opus : “Dans
      l’univers”, “Elle pleut” et “Tricheur”. Les trois titres les plus streamés de “Les étoiles vagabondes”.
    </p>
    <button class="boutondesign border-2 border-yellow-500 bg-cyan-600"></button>
  </main>
</template>

<style>
.boutondesign::after {
  content: "";
  width: 100%;
  height: 100%;
  background: orange;
  position: absolute;
  left: 10px;
  top: -10px;
}
</style>

