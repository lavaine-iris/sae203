<template>
<div class="mt-12 px-5 flex flex-col gap-20 relative h-[80vh] justify-center">

  <form @submit.prevent="updateArtiste">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="grid place-items-center">
                    <img :src="imageData" class="w-1/2">
                </div>
                <div class="grid grid-cols-1 gap-14">
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-cyan-600 px-5 border-[1px] flex justify-center items-center">Nom</div>
                        <input class="w-full bg-slate-100 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artiste.nom" required>
                    </div>
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-cyan-600 px-5 border-[1px] flex justify-center items-center">Scène</div>
                        <input class=" bg-slate-100 pl-2" type="text" placeholder="Nom de l'artiste" v-model="artiste.scene" required>
                    </div>
                    
                    <div class="flex h-10 text-black rounded-sm overflow-hidden">
                        <div class="bg-cyan-600 px-5 border-[1px] flex justify-center items-center">Photo</div>
                        <div class="relative w-full">
                            <input type="file" class="w-full relative bg-slate-100 pl-2" ref="file" id="file" @change="previewImage">
                            <label class="absolute w-full left-0 top-0 bottom-0 flex justify-center items-center bg-slate-100 pl-2" for="file">Sélectionner l'image</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 w-full place-items-center">
                <button class="w-fit px-6 py-3 bg-slate-100" type="submit">Modifier</button>
                <button class="w-fit px-6 py-3 bg-slate-100" type="button"><RouterLink to="/Artistes">Annuler</RouterLink></button>
            </div>
        </form>
  </div>
</template>

<script>
import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    updateDoc, 
    onSnapshot, 
    query,
    orderBy
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
            imageData:null,
            artiste:{   
                nom:null,
                image:null, 
                scene:null
            },

            refArtiste:null,     
            imgModifiee:false,       
            photoActuelle:null 
        }
    },
    mounted(){
        this.getArtiste(this.$route.params.id);
    },
    methods:{
        previewImage: function(event){
          this.file = this.$refs.file.files[0];
          this.artiste.image = this.file.name;
          this.imgModifiee = true;
          var input = event.target;
          if(input.files && input.files[0]){
              var reader = new FileReader();
              reader.onload = (e) => {
                  this.imageData = e.target.result;
              }
              reader.readAsDataURL(input.files[0]);
          }
      },

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
                this.imageData = url;
            })
            .catch((error) => {
                console.log('erreur downloadurl', error);
            })
      },

      async updateArtiste(){
          if(this.imgModifiee){
              const storage = getStorage();
              let docRef = ref(storage, 'artistes/'+this.photoActuelle);
              deleteObject(docRef);
              docRef = ref(storage, 'artistes/'+this.artiste.image);
              await uploadString(docRef, this.imageData, 'data_url').then((snapshot) =>{
                  console.log('Uploaded a base64 string', this.artiste.image);
              });
          }
          const firestore = getFirestore();
          await updateDoc(doc(firestore, "artistes", this.$route.params.id), this.artiste);
          this.$router.push('/Artistes');
      }
    }

}
</script>
