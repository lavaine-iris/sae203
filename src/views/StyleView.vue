<template>
  <h1 class="bg-indigo-800 text-center text-2xl text-white">Style guide</h1>
  <p class="mx-5 mt-2 text-base text-blue-800">Main color</p>
  <div class="flex w-full gap-2 px-10">
    <MainColor class="bg-gray-900"></MainColor>
    <MainColor class="bg-indigo-500"></MainColor>
    <MainColor class="bg-indigo-900"></MainColor>
    <MainColor class="border border-gray-500 bg-white"></MainColor>
  </div>

  <p class="my-5 bg-indigo-500 text-center text-base text-white">Shades of Purple</p>
  <div class="flex w-full px-5">
    <MainColor class="bg-indigo-25"></MainColor>
    <MainColor class="bg-indigo-50"></MainColor>
    <MainColor class="bg-indigo-100"></MainColor>
    <MainColor class="bg-indigo-200"></MainColor>
    <MainColor class="bg-indigo-300"></MainColor>
  </div>

  <p class="my-5 bg-indigo-500 text-center text-base text-white">Greyscale</p>
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

  <p class="my-5 bg-indigo-500 text-center text-base text-white">Styles</p>

  <div class="Police px-5">
    <div class="my-2 flex items-center justify-between">
      <div class="font-inter">
        <p class="font-bold">H4 / Headline 4</p>
        <p class="font-light">Inter (Bold)</p>
        <p class="font-light">24px font size</p>
      </div>
      <div class="w-3/5">
        <p class="font-inter text-right font-medium">The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>

    <div class="my-2 flex items-center justify-between">
      <div class="font-inter w-1/5">
        <p class="font-medium">Body Medium</p>
        <p class="font-light">Inter (Medium)</p>
        <p class="font-light">16px font size</p>
      </div>
      <div class="w-3/5">
        <p class="font-inter text-right font-medium">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </div>
    <div class="my-2 flex items-center justify-between">
      <div class="font-inter w-1/5">
        <p class="font-normal">Body XSmall</p>
        <p class="font-light">Inter(Regular)</p>
        <p class="font-light">12px font size</p>
      </div>
      <div class="w-3/5">
        <p class="font-inter text-right font-normal">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly believable.
        </p>
      </div>
    </div>
  </div>
  <h3 class="my-5 bg-indigo-500 text-center text-base text-white">Icons</h3>
  <div class="flex w-full justify-around"></div>

  <h3 class="my-5 bg-indigo-500 text-center text-base text-white">Composants</h3>
</template>
<script >
import MainColor from "../components/MainColor.vue";

export default {
  components: { MainColor },
};
</script>
