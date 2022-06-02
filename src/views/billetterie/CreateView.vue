<template>
  <h2 class="font-source-sans-pro m-auto w-4/5 text-base">Créer Billet</h2>
  <div class="mx-auto grid w-4/5 grid-cols-3">
    <div class="flex h-10 overflow-hidden rounded-l-sm text-black">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Nom</div>
      <input class="w-full" type="text" placeholder="Date du billet" v-model="date" required />
    </div>
    <div class="flex h-10 overflow-hidden rounded-l-sm text-black">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Nom</div>
      <input class="w-full" type="text" placeholder="Nom du billet" v-model="nom" required />
    </div>
    <div class="flex h-10 w-full overflow-hidden rounded-r-sm text-black">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Prix</div>
      <input class="w-full" type="number" placeholder="Prix du billet" v-model="prix" required />
      <div class="flex w-fit gap-3 bg-white px-3">
        <button type="button" @click.prevent="createBillet()"><SaveIcon class="w-7" /></button>
      </div>
    </div>
  </div>
  <h3 class="font-source-sans-pro m-auto w-4/5 text-base">Liste des tickets</h3>
  <div class="mx-auto grid w-4/5 grid-cols-3" v-for="billet in listeBillet" :key="billet">
    <div class="flex h-10 overflow-hidden rounded-l-sm text-black">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Date</div>
      <input class="w-full" type="text" placeholder="Date du billet" v-model="billet.date" required />
    </div>
    <div class="flex h-10 overflow-hidden rounded-l-sm text-black">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Nom</div>
      <input class="w-full" type="text" placeholder="Nom du billet" v-model="billet.nom" required />
    </div>
    <div class="flex h-10 w-full overflow-hidden rounded-r-sm text-black">
      <div class="bg-true-gray-25 flex items-center justify-center border-[1px] px-5">Prix</div>
      <input class="w-full" type="text" placeholder="Prix du billet" v-model="billet.prix" required />
      <div class="flex w-fit gap-3 bg-white px-3">
        <button type="button" @click.prevent="updateBillet(billet)"><SaveIcon class="w-7" /></button>
        <button type="button" @click.prevent="deleteBillet(billet)"><TrashIcon class="w-7" /></button>
      </div>
    </div>
  </div>
</template>
<script>
// Bibliothèque Firestore : import des fonctions
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
import { SaveIcon, TrashIcon } from "@heroicons/vue/outline";

export default {
  name: "ListeView",
  data() {
    return {
      listeBillet: [],
      date: null,
      prix: null,
      nom: null,
      filter: "",
    };
  },
  components: { SaveIcon, TrashIcon },

  mounted() {
    // Montage de la vue
    // Appel de la liste des categories synchronisée
    this.getBillet();
  },
  methods: {
    async getBillet() {
      const firestore = getFirestore();
      const dbBillet = collection(firestore, "billetterie");
      const q = query(dbBillet, orderBy("prix", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeBillet = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    },
    async createBillet() {
      const firestore = getFirestore();
      const dbTick = collection(firestore, "billetterie");
      const docRef = await addDoc(dbTick, {
        nom: this.nom,
        prix: this.prix,
        date: this.date,
      });
      console.log("document créé avec le id : ", docRef.id);
    },
    async updateBillet(billet) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "billetterie", billet.id);
      await updateDoc(docRef, {
        nom: billet.nom,
        prix: billet.prix,
        date: billet.date,
      });
    },
    async deleteBillet(billet) {
      const firestore = getFirestore();
      const docRef = doc(firestore, "billetterie", billet.id);
      await deleteDoc(docRef);
    },
  },
};
</script>

<style scoped>
</style>


