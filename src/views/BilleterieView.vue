<template>
  <main class="pb-4 dark:bg-colors-black-gray">
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl dark:text-white">Billetterie</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>

    <div class="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
      <CardBillet v-for="billet in listeBillet" :key="billet" :nom="billet.nom" :date="billet.date" :prix="billet.prix"/>
    </div>

    <div class="p-5">
      <CardBilleterie />
      <CardBilleterie :nom="'Forfait 3 jours'" :price="'90€'" :description="'VENDREDI 3 FEVRIER + SAMEDI 4 FEVRIER + DIMANCHE 5 FEVRIER'" />
    </div>

    <router-link to="/Gestion" class="mx-auto block w-max bg-cyan-600 py-2 px-4 font-staatliches text-2xl text-white hover:bg-sky-700">
      Modifier
    </router-link>
  </main>
</template>

<script>
import {
  query,
  getFirestore,
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import CardBillet from "../components/CardBillet.vue";
import CardBilleterie from "../components/CardBilleterie.vue";

export default {
  components: {
    CardBillet,
    CardBilleterie,
  },
  data() {
    return {
      listeBillet:[]
    };
  },
  methods:{
        async getBillet() {
      const firestore = getFirestore();
      const dbBillet = collection(firestore, "billetterie");
      const q = query(dbBillet, orderBy("prix", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeBillet = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
  },
  mounted(){
    this.getBillet();
  }
};
</script>

<style>
</style>