<template>
  <div class="mb-5 grid max-w-[250px] grid-cols-1 justify-items-center">
    <img class="w-full" :src="image" alt="Nekfeu" />
    <div class="min-h-[300px]">
      <p class="bg-cyan-600 p-5 text-center font-staatliches text-xl text-white">{{ nom }}</p>
    </div>
  </div>
</template>

  <script>
export default {
  props: {
    image: {
      type: String,
      default: "/public/images/nekfeu-accueil.webp",
    },
    nom: {
      type: String,
      default: "La programmation du festival Snow Pop",
    },
  },
  components: {},
};
</script>