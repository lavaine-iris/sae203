import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'


// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA95kpGyV9raGZ0eViGVcWh_mD6swFQ93o",
    authDomain: "sae203-eb083.firebaseapp.com",
    projectId: "sae203-eb083",
    storageBucket: "sae203-eb083.appspot.com",
    messagingSenderId: "449713925632",
    appId: "1:449713925632:web:3814c7687c962ee8f172e5"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);


const app = createApp(App)

app.use(router)

app.mount('#app')
