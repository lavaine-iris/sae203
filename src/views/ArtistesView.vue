<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Artistes</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <div class="gap-8 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <Card />
      <Card :nom="'PLK'" image="/images/plk.webp" />
      <Card :nom="'Nekfeu'" image="/images/nekfeu.webp" />
      <Card :nom="'Vald'" image="/images/vald.webp" />
      <Card :nom="'Niska'" image="/images/niska.webp" />
      <Card :nom="'Damso'" image="/images/damso.webp" />
      <Card :nom="'Ninho'" image="/images/ninho.webp" />
      <Card :nom="'Koba la D'" image="/images/koba.webp" />
      <Card :nom="'Naps'" image="/images/naps.webp" />
      <Card :nom="'Laylow'" image="/images/laylow.webp" />
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
