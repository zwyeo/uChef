<template>
  <div class="container-fluid px-5">
    <nav-bar></nav-bar>
    <h2 class="text-center p-5">
      <span v-if="$store.state.queryParam.length > 0">
        You searched for:"{{ this.$store.state.queryParam }}"</span
      >
      <span v-if="$store.state.selectedCategory.length > 0">
        You searched for:"{{ this.$store.state.selectedCategory }}"</span
      >
    </h2>
    <div v-if="$store.state.recipes.length != 0" class="row recipe-card-style">
      <div
        v-for="recipe in $store.state.recipes"
        :key="recipe.idMeal"
        class="col-xl-4 col-lg-6"
      >
        <router-link
          :to="{ name: 'recipe-details', params: { id: recipe.idMeal } }"
        >
          <recipe-card
            :title="recipe.strMeal"
            :img="recipe.strMealThumb"
            class="mb-5"
          ></recipe-card>
        </router-link>
      </div>
      <!-- <button class="btn btn-primary" v-on:click="getBookmarks">Click me</button> -->
    </div>
    <div v-else class="row">
      <div class="col d-flex justify-content-center">
        <img
          style="width: 500px; height: 500px"
          src="../assets/img/core-img/noBookmarks.png"
          alt=""
        />
        <h1>No Results</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RecipeCard from "@/components/RecipeCard.vue";
export default {
  name: "SearchResults",
  components: {
    NavBar,
    RecipeCard,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
