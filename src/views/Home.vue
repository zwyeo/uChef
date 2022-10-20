<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <search-bar></search-bar>

    <!-- display recipe result items -->
    <div class="d-flex">
      <recipe-card
        class="mx-2"
        v-for="recipe in $store.state.recipes"
        :key="recipe.id"
        :title="recipe.title"
        :img="recipe.image"
      ></recipe-card>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "Home",
  components: {
    SearchBar,
    RecipeCard,
  },
};
</script>
