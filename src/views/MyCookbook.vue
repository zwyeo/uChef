<template>
  <div class="">
    <nav-bar></nav-bar>
    <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active" id="nav-bookmarks-tab" data-bs-toggle="tab" data-bs-target="#nav-bookmarks" type="button" role="tab" aria-controls="nav-bookmarks" aria-selected="true">Bookmarks</button>
            <button class="nav-link" id="nav-my-recipes-tab" data-bs-toggle="tab" data-bs-target="#nav-my-recipes" type="button" role="tab" aria-controls="nav-my-recipes" aria-selected="false">My Recipes</button>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">

      <div class="tab-pane fade show active" id="nav-bookmarks" role="tabpanel" aria-labelledby="nav-bookmarks-tab">
        <div class="mx-5 d-flex row-cols-4 overflow-auto mt-3">
          <!-- Need to change v-for condition after firebase is set up -->
          <div v-for="recipe in $store.state.recipes" :key="recipe.id">
            <router-link
              :to="{ name: 'recipe-details', params: { id: recipe.id } }"
            >
              <recipe-card
                class="mx-2"
                :key="recipe.id"
                :title="recipe.title"
                :img="recipe.image"
              ></recipe-card>
            </router-link>
          </div>
        </div>
      </div>

      <div class="tab-pane fade" id="nav-my-recipes" role="tabpanel" aria-labelledby="nav-my-recipes-tab">
        <div class="mx-5 d-flex row-cols-4 overflow-auto mt-3">
          <!-- Need to change v-for condition after firebase is set up -->
          <div v-for="recipe in $store.state.recipes" :key="recipe.id">
            <router-link
              :to="{ name: 'recipe-details', params: { id: recipe.id } }"
            >
              <recipe-card
                class="mx-2"
                :key="recipe.id"
                :title="recipe.title"
                :img="recipe.image"
              ></recipe-card>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <h4 class="mt-5 mx-5"></h4>

  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RecipeCard from "../components/RecipeCard.vue";

export default {
  name: "MyCookbook",
  components: {
    NavBar,
    RecipeCard
  },
  data() {
    return {}
  }
};
</script>

<style></style>
