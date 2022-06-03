<template>
  <div class="m-5 mx-14 grid min-w-[15rem] max-w-xs place-content-center bg-cyan-600 p-5">
    <div class="mb-2 font-staatliches text-lg text-white">{{ date }}</div>
    <p class="p-2 text-center font-staatliches text-lg text-white">{{nom}}</p>
    <p class="p-2 text-center font-staatliches text-7xl text-white">{{prix}}</p>
    <button class="bg-gray-200 py-2 px-8 text-center font-staatliches text-lg hover:bg-yellow-500">Acheter</button>
  </div>
</template>

  <script>
export default {
  props: {
    date: {
      type: String,
      default: "Vendredi 3 février",
    },
    nom:{
      type:String,
      default:'Billet 1 jour'
    },
    prix:{
      type:String,
      default:'35€'
    }
  },
  components: {},
};
</script>