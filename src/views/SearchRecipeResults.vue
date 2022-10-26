<template>
  <search-bar></search-bar>
  <button @click="$store.commit('searchByIngredients')">Ingredients👨‍🍳</button>
  <br />
  Filter by:
  <select v-model="selectedFilter">
    <option v-for="category of $store.state.categories" :value="category">
      {{ category }}
    </option>
  </select>
  <h2>Selected</h2>
  {{ $store.state.selectedCategory }}
  <div v-if="$store.state.selectedCategory == 'Nutrition'">
    <b>For empty search query</b>
    <br />
    Calories<input type="number" v-model="inputedCalories" />
    <button @click="$store.dispatch('nutritionFilterBlank')">
      Filter with blank search query
    </button>
    <button>Filter search by ingredients</button>

    <br />
    From store: {{ $store.state.calories }}
    <br />

    <!-- <br />
    Carbs<input type="number" />
    <br />
    Protein<input type="number" />
    <br />
    Fat<input type="number" /> -->
  </div>
  <div v-if="$store.state.selectedCategory == 'Prep Time'">
    Max time taken to cook<input type="number" v-model="inputedMaxTime" />
  </div>
  <h2>Preview</h2>
  {{ $store.state.previews }}
  <h2>Recipes</h2>
  {{ $store.state.recipes }}
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
  computed: {
    selectedFilter: {
      get() {
        // console.log(this.$store.state.selectedCategory);
        return this.$store.state.selectedCategory;
      },
      set(selectedCategory) {
        // console.log(selectedCategory);
        this.$store.dispatch("setCategory", selectedCategory);
      },
    },
    inputedCalories: {
      get() {
        return this.$store.state.calories;
      },
      set(setCalories) {
        this.$store.dispatch("setCalories", setCalories);
      },
    },
    inputedMaxTime: {
      get() {
        return this.$store.state.maxtime;
      },
      set(setMaxTime) {
        this.$store.dispatch("setMaxTime", setMaxTime);
      },
    },
  },
};
</script>

<style></style>
