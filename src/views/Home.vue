<template>
  <div class="">
    <nav-bar></nav-bar>
    <banner></banner>

    <!-- display recipe result items -->
    <!-- TODO: Need to change to smart recomendation when we have the algo-->
    <h4 class="mt-5 mx-5">Smart Recomendations:</h4>
    <div class="mx-5 d-flex row-cols-4 overflow-auto mt-3">
      <recipe-card
        class="mx-2"
        v-for="recipe in $store.state.recipes"
        :key="recipe.id"
        :title="recipe.title"
        :img="recipe.image"
      ></recipe-card>
    </div>
  </div>

  <!-- Display community items -->
  <h4 class="mt-5 mx-5">By the Community:</h4>
  <div class="mx-5 d-flex row-cols-4 overflow-auto mt-3">
    <recipe-card
      class="mx-2"
      v-for="recipe in $store.state.recipes"
      :key="recipe.id"
      :title="recipe.title"
      :img="recipe.image"
    ></recipe-card>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RecipeCard from "@/components/RecipeCard.vue";
import Banner from "@/components/Banner.vue";

export default {
  name: "Home",
  components: {
    NavBar,
    RecipeCard,
    Banner,
  },
};
</script>
