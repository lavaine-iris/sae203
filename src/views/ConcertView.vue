<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Concert</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <h2 class="font-staatliches text-xl px-5">La petite scène</h2>
    <img class="p-5" src="../assets/scene1.webp" alt="La petite scène" />
    <h2 class="font-staatliches text-xl px-5">Les différents artistes présents sur la petite scène</h2>

    <div class="gap-10 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <CardArtiste />
      <CardArtiste :nom="'Laylow'" image="/images/laylow.webp" />
      <CardArtiste :nom="'Naps'" image="/images/naps.webp" />
      <CardArtiste :nom="'Koba la D'" image="/images/koba.webp" />
      <CardArtiste :nom="'Niska'" image="/images/niska.webp" />
    </div>

    <h2 class="font-staatliches text-xl px-5">La grande scène</h2>
    <img class="p-5" src="../assets/scene2.webp" alt="La grande scène" />
    <h2 class="font-staatliches text-xl px-5">Les différents artistes présents sur la GRANDE scène</h2>

    <div class="gap-10 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <CardArtiste :nom="'PLK'" image="/images/plk.webp" />
      <CardArtiste :nom="'Nekfeu'" image="/images/nekfeu.webp" />
      <CardArtiste :nom="'Vald'" image="/images/vald.webp" />
      <CardArtiste :nom="'Ninho'" image="/images/ninho.webp" />
      <CardArtiste :nom="'Damso'" image="/images/damso.webp" />
    </div>
  </main>
</template>

<script>
import CardArtiste from "../components/CardArtiste.vue";

export default {
  components: {
    CardArtiste,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>