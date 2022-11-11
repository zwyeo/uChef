<template>
  <div class="container-fluid px-5">
    <nav-bar></nav-bar>
    <h2 class="text-center p-5">My Recipes</h2>
    <div v-if="recipes.length != 0" class="row recipe-card-style">
      <div
        v-for="recipe in recipes"
        :key="recipe.id"
        class="col-xl-4 col-lg-6">
        <router-link
          :to="{ name: 'recipe-details', params: { id: recipe.id } }"
        >
          <recipe-card
            :title="recipe.title"
            :img="recipe.image"
            class="mb-5"
          ></recipe-card>
        </router-link>
      </div>
      <!-- <button class="btn btn-primary" v-on:click="getBookmarks">Click me</button> -->
    </div>
    <div v-else class="row">
      <div class="col d-flex justify-content-center">
        <img style="width: 500px; height: 500px;" src="../assets/img/core-img/noRecipes.png" alt="">
      </div>
    </div>
    <add-new-recipe></add-new-recipe>
  </div>
  <h4 class="mt-5 mx-5"></h4>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RecipeCard from "../components/RecipeCard.vue";
import AddNewRecipe from "../components/AddNewRecipe.vue";
import RemoveRecipe from "../components/RemoveRecipe.vue";
import { getDatabase, ref, onValue } from "firebase/database";

export default {
  name: "MyRecipes",
  data() {
    return {
      recipes: []
    }
  },
  components: {
    NavBar,
    RecipeCard,
    AddNewRecipe
  },
  methods: {
    getRecipes() {
      let userId = this.$store.state.userId;
      const db = getDatabase();
      // console.log(db);
      const usersRef = ref(db, `users/${userId}/recipes`);

      onValue(usersRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          this.recipes = data;
          console.log(this.recipes);
        } else {
          console.log("no data exists");
        }
      })
    }
  },
  mounted() {
    console.log("mounted");
    this.getRecipes();
  }

};
</script>

<style></style>
