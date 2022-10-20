<template>
  <input
    class="form-control w-25 m-auto my-3"
    type="text"
    placeholder="Search food recipe"
    v-model="searchQuery"
  />
  <button @click="$store.dispatch('getRecipes')" class="btn btn-primary">
    Search
  </button>
</template>

<script>
export default {
  name: "SearchBar",
  props: {},
  computed: {
    // searchQuery is different from the usual computed because it required getter and setter
    searchQuery: {
      get() {
        return this.$store.state.queryParams;
      },
      set(newValue) {
        // console.log(newValue);
        this.$store.dispatch("setQueryParam", newValue);
      },
    },
  },
};
</script>

<style></style>
