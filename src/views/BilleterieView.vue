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
  </main>
</template>

<script>
import CardBillet from "../components/CardBillet.vue";

export default {
  components: {
    CardBillet,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>