<template>
  <figure class="relative">
    <img class="rounded-full" :src="image" alt="artiste" />
    <figcaption class="absolute -bottom-6 w-full rounded-full bg-gray-500/50 py-3 text-center font-staatliches text-xl text-white">
      {{ nom }}
    </figcaption>
  </figure>
</template>

  <script>
export default {
  props: {
    image: {
      type: String,
      default: "/images/47ter.webp",
    },
    nom: {
      type: String,
      default: "47 TER",
    },
  },
  components: {},
};
</script>