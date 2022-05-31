<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Artistes</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <div class="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <RouterLink to="/Artiste"><Card /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'PLK'" image="/images/plk.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Nekfeu'" image="/images/nekfeu.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Vald'" image="/images/vald.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Niska'" image="/images/niska.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Damso'" image="/images/damso.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Ninho'" image="/images/ninho.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Koba la D'" image="/images/koba.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Naps'" image="/images/naps.webp" /></RouterLink>
      <RouterLink to="/Artiste"><Card :nom="'Laylow'" image="/images/laylow.webp" /></RouterLink>
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
