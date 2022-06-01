<template>
  <main class="dark:bg-colors-black-gray">
    <div class="flex items-center justify-between py-8 dark:text-white">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl">Artistes</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <div class="grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <RouterLink to="/Artiste" v-for="art in listeArtiste" :key="art"><Card :nom="art.nom" :image="art.image" /></RouterLink>
    </div>
  </main>
</template>

<script>
import Card from "../components/Card.vue";
import {
  getFirestore,
  collection,
  doc,
  query,
  orderBy,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js";
import {
  getStorage, // Obtenir le Cloud Storage
  ref, // Pour créer une référence à un fichier à uploader
  getDownloadURL, // Permet de récupérer l'adress complète d'un fichier du Storage
  uploadString, // Permet d'uploader sur le Cloud Storage une image en Base64
} from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";

export default {
  components: {
    Card,
  },
  data() {
    return {
      listeArtiste: [],
    };
  },
  mounted() {
    this.getArtiste();
  },
  methods: {
    async getArtiste() {
      const firestore = getFirestore();
      const dbArt = collection(firestore, "artistes");
      const q = query(dbArt, orderBy("nom", "asc"));
      await onSnapshot(q, (snapshot) => {
        this.listeArtiste = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.listeArtiste.forEach(function (personne) {
          const storage = getStorage();
          const spaceRef = ref(storage, "artistes/" + personne.image);
          getDownloadURL(spaceRef)
            .then((url) => {
              personne.image = url;
            })
            .catch((error) => {
              console.log("erreur download url", error);
            });
        });
      });
    },
  },
};
</script>