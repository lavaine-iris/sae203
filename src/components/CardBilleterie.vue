<template>
      <div class="grid place-content-center bg-yellow-500 m-5 p-5 mx-14">
    
    <p class="text-white font-staatliches text-7xl text-center p-2">
      {{ price }}
    </p>
    <div class="font-staatliches mb-2 text-white text-lg text-center"> {{ nom }} </div> 
    <p class="text-white font-staatliches text-lg text-center p-2">
    {{ description }}</p>
    <button class="bg-gray-200 font-staatliches py-2 px-8 text-center">Acheter</button>
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