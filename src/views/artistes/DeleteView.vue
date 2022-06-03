<template>
<div class="mt-12 px-5 flex flex-col gap-20 relative h-[80vh] justify-center">

  <form @submit.prevent="deleteArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="photoActuelle" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-cyan-600 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full bg-slate-100 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artiste.nom" disabled>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-cyan-600 px-5 border-[1px] flex justify-center items-center">Scène</div>
                        <input class="w-full bg-slate-100 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artiste.scene" disabled>
                    </div>
                
                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3 bg-slate-100" type="submit">Delete</button>
                <button class="w-fit px-6 py-3 bg-slate-100" type="button"><RouterLink to="/Artistes">Annuler</RouterLink></button>
            </div>
        </form>
  </div>
</template>
<script>
import { 
    getFirestore,
    doc, 
    getDoc,
    deleteDoc
    } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js'
import { 
    getStorage, 
    ref, 
    getDownloadURL,
    uploadString,
    deleteObject} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js'
export default {
    data(){
        return{ 
            artiste:{   
                nom:null,
                scene:null,
                image:null, 
            },

            refArtiste:null,      
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{

      async getArtiste(id){
          const firestore = getFirestore();
          const docRef = doc(firestore, "artistes", id);
          this.refArtiste = await getDoc(docRef);
          if(this.refArtiste.exists()){
              this.artiste = this.refArtiste.data();
              this.photoActuelle = this.artiste.image;
          }else{
              this.console.log("artiste inexistant");
          }
          const storage = getStorage();
          const spaceRef = ref(storage, 'artistes/'+this.artiste.image);
          getDownloadURL(spaceRef)
            .then((url)=>{
                this.photoActuelle = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async deleteArtiste(){
            const firestore = getFirestore();
            await deleteDoc(doc(firestore, "artistes", this.$route.params.id));
            const storage = getStorage();
            let docRef = ref(storage, 'artistes/'+this.artiste.img);
            deleteObject(docRef);
            this.$router.push('/Artistes');       
        }
    }

}
</script>
