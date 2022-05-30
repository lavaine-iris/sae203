<template>
  <h2 class="font-staatliches text-xl">Artistes</h2>
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
