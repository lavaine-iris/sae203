<template>
  <main class="dark:bg-colors-black-gray">
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl dark:text-white">Billetterie</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>

    <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <CardBillet />
      <CardBillet :nom="'Samedi 4 février'" />
      <CardBillet :nom="'Dimanche 5 février'" />
    </div>

    <div class="p-5">
      <CardBilleterie />
      <CardBilleterie :nom="'Forfait 3 jours'" :price="'90€'" :description="'VENDREDI 3 FEVRIER + SAMEDI 4 FEVRIER + DIMANCHE 5 FEVRIER'" />
    </div>

    <router-link to="/Create" class="mx-auto mb-4 block w-max bg-cyan-600 py-2 px-4 font-staatliches text-2xl text-white hover:bg-sky-700">
      Modifier
    </router-link>
  </main>
</template>

<script>
import CardBillet from "../components/CardBillet.vue";
import CardBilleterie from "../components/CardBilleterie.vue";

export default {
  components: {
    CardBillet,
    CardBilleterie,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>