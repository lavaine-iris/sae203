<template>
  <div class="m-5 grid place-content-center gap-5 bg-yellow-500 p-5">
    <p class="p-2 text-center font-staatliches text-7xl text-white">
      {{ price }}
    </p>
    <div class="mb-2 text-center font-staatliches text-lg text-white">{{ nom }}</div>
    <p class="p-2 text-center font-staatliches text-lg text-white">
      {{ description }}
    </p>
    <div class="mx-auto">
      <button class="bg-gray-200 py-2 px-8 text-center font-staatliches text-lg hover:bg-cyan-600">Acheter</button>
    </div>
  </div>
</template>

  <script>
export default {
  props: {
    nom: {
      type: String,
      default: "Forfait 2 jours",
    },
    price: {
      type: String,
      default: "60€",
    },
    description: {
      type: String,
      default: "2 JOURS AU CHOIX SUR LES 3 JOURS (VENDREDI, SAMEDI & DIMANCHE)",
    },
  },
  components: {},
};
</script>