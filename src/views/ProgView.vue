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
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <RouterLink to="/Concert"><Card /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'Damso'" image="/images/damso.webp" /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'Laylow'" image="/images/laylow.webp" /></RouterLink>
      </div>
    </div>
    <div class="flex flex-col gap-8 p-10">
      <h2 class="font-staatliches text-xl">Samedi 4 février 2023</h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        <RouterLink to="/Concert"><Card :nom="'Naps'" image="/images/naps.webp" /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'Nekfeu'" image="/images/nekfeu.webp" /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'Niska'" image="/images/niska.webp" /></RouterLink>
      </div>
    </div>
    <div class="flex flex-col gap-8 p-10">
      <h2 class="font-staatliches text-xl">Dimanche 5 février 2023</h2>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
        <RouterLink to="/Concert"><Card :nom="'Vald'" image="/images/vald.webp" /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'Ninho'" image="/images/ninho.webp" /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'Koba la D'" image="/images/koba.webp" /></RouterLink>
        <RouterLink to="/Concert"><Card :nom="'PLK'" image="/images/plk.webp" /></RouterLink>
      </div>
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