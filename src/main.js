import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs3f8X_O2I4LjZObiD9JkeLe0MuFi6-8M",
  authDomain: "wad-proj-22042.firebaseapp.com",
  databaseURL:
    "https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wad-proj-22042",
  storageBucket: "wad-proj-22042.appspot.com",
  messagingSenderId: "231907482770",
  appId: "1:231907482770:web:7e50ceb9acbe9320995a4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
