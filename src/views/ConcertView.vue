<template>
  <main class="dark:bg-colors-black-gray">
    <div class="flex items-center justify-between py-8">
      <div class="h-1 w-1/3 bg-yellow-500"></div>
      <div class="flex w-1/3 justify-around">
        <h2 class="font-staatliches text-xl dark:text-white">Concert</h2>
      </div>
      <div class="h-1 w-1/3 bg-yellow-500"></div>
    </div>
    <div class="dark:text-white">
      <h2 class="px-5 font-staatliches text-xl">La petite scène</h2>
      <img class="mx-auto p-5 md:w-3/4" src="../assets/scene1.webp" alt="La petite scène" />
      <h2 class="px-5 font-staatliches text-xl">Les différents artistes présents sur la petite scène</h2>
    </div>

    <div class="grid grid-cols-1 gap-10 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <RouterLink to="/Artiste" v-for="art in grandeScene" :key="art"
        ><CardArtiste :nom="art.nom" :image="art.image" :scene="art.scene"
      /></RouterLink>
    </div>

    <div class="dark:text-white">
      <h2 class="px-5 font-staatliches text-xl">La grande scène</h2>
      <img class="mx-auto p-5 md:w-3/4" src="../assets/scene2.webp" alt="La grande scène" />
      <h2 class="px-5 font-staatliches text-xl">Les différents artistes présents sur la GRANDE scène</h2>
    </div>

    <div class="grid grid-cols-1 gap-10 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <RouterLink to="/Artiste" v-for="art in petiteScene" :key="art"
        ><CardArtiste :nom="art.nom" :image="art.image" :scene="art.scene"
      /></RouterLink>
    </div>
  </main>
</template>

<script>
import CardArtiste from "../components/CardArtiste.vue";
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
    CardArtiste,
  },
  data() {
    return {
      listeArtiste: [],
      qGrand: 1,
      qpetit: 2,
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
  computed: {
    petiteScene() {
      let query = this.qpetit;
      return this.listeArtiste.filter(function (art) {
        return art.scene.includes(query);
      });
    },
    grandeScene() {
      let query = this.qGrand;
      return this.listeArtiste.filter(function (art) {
        return art.scene.includes(query);
      });
    },
  },
};
</script>