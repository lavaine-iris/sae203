<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Billeterie</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>

    <CardBillet />
    <CardBillet :nom="'Samedi 4 février'" />
    <CardBillet :nom="'Dimanche 5 février'" />
    <CardBilleterie />
    <CardBilleterie :nom="'Forfait 3 jours'" :price="'90€'" :description="'VENDREDI 3 FEVRIER + SAMEDI 4 FEVRIER + DIMANCHE 5 FEVRIER'" />
  </main>
</template>

<script>
import CardBillet from "../components/CardBillet.vue";
import CardBilleterie from "../components/CardBilleterie.vue";

export default {
  components: {
    CardBillet, CardBilleterie
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>