<template>
  <figure class="relative">
    <img class="border-4 border-yellow-500" src="../assets/plk.webp" alt="PLK" />
    <figcaption class="absolute bottom-0 w-full bg-yellow-500 py-7 text-center opacity-50">PLK</figcaption>
  </figure>
</template>

  <script>
export default {
  props: {
    image: {
      type: String,
      default: "/src/assets/47ter.webp",
    },
    nom: {
      type: String,
      default: "47 TER",
    },
  },
  components: {},
};
</script>