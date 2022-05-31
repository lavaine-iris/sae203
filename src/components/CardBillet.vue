<template>
  <div class="m-5 mx-14 grid min-w-[15rem] max-w-xs place-content-center bg-cyan-600 p-5">
    <div class="mb-2 font-staatliches text-lg text-white">{{ nom }}</div>
    <p class="p-2 text-center font-staatliches text-lg text-white">Billet 1 jour</p>
    <p class="p-2 text-center font-staatliches text-7xl text-white">35€</p>
    <button class="bg-gray-200 py-2 px-8 text-center font-staatliches">Acheter</button>
  </div>
</template>

  <script>
export default {
  props: {
    nom: {
      type: String,
      default: "Vendredi 3 février",
    },
  },
  components: {},
};
</script>