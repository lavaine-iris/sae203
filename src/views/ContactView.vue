<template>
  <main>
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Contact</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>

    <h2 class="font-staatliches text-xl">Pour nous contacter</h2>
    <p class="text-sm font-normal">Si vous souhaitez nous contacter, veuillez remplir le formulaire ci-dessous</p>

    <label class="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700" for="grid-first-name"> Nom</label>
    <input
      class="
        mb-3
        block
        w-full
        appearance-none
        rounded-3xl
        border border-cyan-600
        bg-white
        py-3
        px-4
        leading-tight
        text-gray-700
        focus:bg-cyan-100 focus:outline-none
      "
      id="grid-first-name"
      type="text"
      placeholder="Votre nom*"
    />
    <input
      class="
        mb-3
        block
        w-full
        appearance-none
        rounded-3xl
        border border-cyan-600
        bg-white
        py-3
        px-4
        leading-tight
        text-gray-700
        focus:bg-cyan-100 focus:outline-none
      "
      id="grid-name"
      type="text"
      placeholder="Votre prénom*"
    />
    <input
      class="
        mb-3
        block
        w-full
        appearance-none
        rounded-3xl
        border border-cyan-600
        bg-white
        py-3
        px-4
        leading-tight
        text-gray-700
        focus:bg-cyan-100 focus:outline-none
      "
      id="grid-first-name"
      type="text"
      placeholder="Votre adresse-mail*"
    />
    <input
      class="
        mb-3
        block
        w-full
        appearance-none
        rounded-3xl
        border border-cyan-600
        bg-white
        py-3
        px-4
        leading-tight
        text-gray-700
        focus:bg-cyan-100 focus:outline-none
      "
      id="grid-first-name"
      type="text"
      placeholder="Votre message*"
    />
  </main>
</template>