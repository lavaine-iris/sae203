<template>
  <figure class="relative">
    <img class="rounded-full" :src="image" alt="artiste" />
    <figcaption
      class="
        absolute
        -bottom-6
        w-full
        rounded-full
        bg-gray-500/50
        py-2
        text-center
        font-staatliches
        text-xl text-white
        dark:bg-gray-100 dark:text-black
      "
    >
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