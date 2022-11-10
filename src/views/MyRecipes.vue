<template>
  <div class="container-fluid px-5">
    <nav-bar></nav-bar>
    <h2 class="text-center p-5">My Recipes</h2>
    <div v-if="getRecipes == 0" class="row recipe-card-style">
      <button class="btn btn-primary" v-on:click="getRecipes">Click me</button>
      <!-- Bug(?): Button currently might overlap with stuff -->
    </div>
    <div v-else class="row">
      <div class="col d-flex justify-content-center">
        <img style="width: 500px; height: 500px;" src="../assets/img/core-img/noRecipes.png" alt="">
        <button class="btn btn-primary" v-on:click="getRecipes">Click me</button>
      </div>
    </div>
    <add-new-recipe></add-new-recipe>
  </div>
  <h4 class="mt-5 mx-5"></h4>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import RecipeCard from "../components/RecipeCard.vue";
import AddNewRecipe from "../components/AddNewRecipe.vue";

export default {
  name: "MyRecipes",
  components: {
    NavBar,
    RecipeCard,
    AddNewRecipe
  },
  data() {
    return {}
  },
  methods: {
    getRecipes() {
      let userId = this.$store.state.userId;
      let recipeCount = 1;
      axios.get(`https://wad-proj-22042-default-rtdb.asia-southeast1.firebasedatabase.app/community/${userId}`)
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error.message)
        if (error.message == "Network Error") {
          return 0;
        }
      })
    },
    createNewRecipe() {
      
    }
  }
};
</script>

<style></style>
