<template>
  <h1 class="mt-4 bg-yellow-500 text-center text-2xl text-white">Style guide</h1>
  <p class="mx-5 mt-2 text-base text-black">Main color</p>
  <div class="flex w-full gap-2 px-10">
    <MainColor class="bg-yellow-500"></MainColor>
    <MainColor class="bg-cyan-600"></MainColor>
    <MainColor class="bg-gray-800"></MainColor>
    <MainColor class="border border-gray-500 bg-white"></MainColor>
  </div>

  <p class="my-5 bg-yellow-400 text-center text-base text-white">Greyscale</p>
  <div class="mx-5 mt-5 flex">
    <MainColor class="bg-gray-50"></MainColor>
    <MainColor class="bg-gray-100"></MainColor>
    <MainColor class="bg-gray-200"></MainColor>
    <MainColor class="bg-gray-300"></MainColor>
    <MainColor class="bg-gray-400"></MainColor>
  </div>

  <div class="mx-5 mt-5 flex">
    <MainColor class="bg-gray-500"></MainColor>
    <MainColor class="bg-gray-600"></MainColor>
    <MainColor class="bg-gray-700"></MainColor>
    <MainColor class="bg-gray-800"></MainColor>
    <MainColor class="bg-gray-900"></MainColor>
  </div>

  <p class="my-5 bg-yellow-400 text-center text-base text-white">Styles</p>

  <div class="Police px-5">
    <div class="my-2 flex items-center justify-between">
      <div class="font-inter">
        <p class="font-bold">H1 / Headline 1</p>
        <p class="font-light">Staatliches</p>
        <p class="font-light">36px font size</p>
      </div>
      <div class="w-3/5">
        <p class="text-right font-staatliches text-xl">Snow pop</p>
      </div>
    </div>

    <div class="my-2 flex items-center justify-between">
      <div class="font-inter">
        <p class="font-bold">H2 / Headline 2</p>
        <p class="font-light">Staatliches</p>
        <p class="font-light">24px font size</p>
      </div>
      <div class="w-3/5">
        <p class="text-right font-staatliches text-xl">Festival</p>
      </div>
    </div>

    <div class="my-2 flex items-center justify-between">
      <div class="font-inter">
        <p class="font-bold">H3 / Headline 3</p>
        <p class="font-light">Inter - Semibold</p>
        <p class="font-light">16px font size</p>
      </div>
      <div class="w-3/5">
        <p class="text-right font-semibold">Un artiste aux multiples talents</p>
      </div>
    </div>

    <div class="my-2 flex items-center justify-between">
      <div class="font-inter w-1/5">
        <p class="font-medium">Body Medium</p>
        <p class="font-light">Inter (Medium)</p>
        <p class="font-light">16px font size</p>
      </div>
      <div class="w-3/5">
        <p class="font-inter text-right font-normal">
          Châtel est un village de Haute-Savoie en France, et l'un des camps de base du domaine skiable des Portes du Soleil. Village
          d'altitude situé au fond du val d'Abondance, dans le Chablais savoyard.
        </p>
      </div>
    </div>
  </div>
  <h3 class="my-5 bg-yellow-400 text-center text-base text-white">Icons</h3>
  <div class="flex w-full justify-around">
    <Logo /> <IconFacebook /> <IconYoutube /> <IconInsta /> <LogoAccueil class="h-14 w-14" /><MenuAlt1Icon class="h-10 w-10"></MenuAlt1Icon
    ><XIcon class="h-10 w-10"></XIcon>
  </div>

  <h3 class="my-5 bg-yellow-400 text-center text-base text-white">Composants</h3>
  <div class="grid grid-cols-2 gap-8 p-10">
    <Card />
    <CardArtiste />
    <CardAccueil />
    <CardBillet />
    <CardBilleterie />
  </div>
</template>
<script >
import MainColor from "../components/MainColor.vue";
import Card from "../components/Card.vue";
import CardArtiste from "../components/CardArtiste.vue";
import LogoAccueil from "../components/icons/LogoAccueil.vue";
import Logo from "../components/icons/Logo.vue";
import IconFacebook from "../components/icons/IconFacebook.vue";
import IconInsta from "../components/icons/IconInsta.vue";
import IconYoutube from "../components/icons/IconYoutube.vue";
import { MenuAlt1Icon, XIcon } from "@heroicons/vue/outline";
import CardAccueil from "../components/CardAccueil.vue";
import CardBillet from "../components/CardBillet.vue";
import CardBilleterie from "../components/CardBilleterie.vue";

export default {
  data() {
    return {
      MenuOpen: false,
    };
  },
  components: {
    MainColor,
    Card,
    CardArtiste,
    Logo,
    LogoAccueil,
    MenuAlt1Icon,
    XIcon,
    IconFacebook,
    IconInsta,
    IconYoutube,
    CardAccueil,
    CardBillet,
    CardBilleterie,
  },
};
</script>

