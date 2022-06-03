<template>
  <figure class="relative min-h-[40px]">
    <img class="border-4 border-yellow-500" :src="image" alt="artiste" />
    <figcaption class="absolute bottom-0 w-full bg-yellow-500/50 py-3 text-center font-staatliches text-xl text-white">
      {{ nom }}
    </figcaption>
    <span class="editsupp absolute top-1 right-1 z-10"><slot></slot></span>
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


<style>

figure .editsupp{
  display: none;
}

figure:hover .editsupp{
  display: flex;
}
</style>