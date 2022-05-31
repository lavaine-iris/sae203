<template>
      <div class="grid place-content-center bg-cyan-600 m-5 p-5 mx-14">
    <div class="font-staatliches mb-2 text-white text-lg"> {{ nom }} </div>
    <p class="text-white font-staatliches text-lg text-center p-2">
      Billet 1 jour
    </p>
    <p class="text-white font-staatliches text-7xl text-center p-2">
      35€
    </p>
    <button class="bg-gray-200 font-staatliches py-2 px-8 text-center">Acheter</button>
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