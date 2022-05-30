<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Programmation</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <div class="flex flex-col gap-8 p-10">
      <h2 class="font-staatliches text-xl">Vendredi 3 février 2023</h2>
      <Card />
      <Card :nom="'Damso'" image="/images/damso.webp" />
      <Card :nom="'Laylow'" image="/images/laylow.webp" />
    </div>
    <div class="flex flex-col gap-8 p-10">
      <h2 class="font-staatliches text-xl">Samedi 4 février 2023</h2>
      <Card :nom="'Naps'" image="/images/naps.webp" />
      <Card :nom="'Nekfeu'" image="/images/nekfeu.webp" />
      <Card :nom="'Niska'" image="/images/niska.webp" />
    </div>
    <div class="flex flex-col gap-8 p-10">
      <h2 class="font-staatliches text-xl">Dimanche 5 février 2023</h2>
      <Card :nom="'Vald'" image="/images/vald.webp" />
      <Card :nom="'Ninho'" image="/images/ninho.webp" />
      <Card :nom="'Koba la D'" image="/images/koba.webp" />
      <Card :nom="'PLK'" image="/images/plk.webp" />
    </div>
  </main>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>