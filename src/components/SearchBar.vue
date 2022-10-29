<template>
  <div
    class="d-flex text-center rounded-pill w-50 pe-2 border border-secondary px-2 mt-2"
  >
    <div class="pt-2 icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search mb-1"
        viewBox="0 0 16 16"
        @click="$store.dispatch('getRecipes')"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        ></path>
      </svg>
    </div>
    <input
      type="text"
      :placeholder="$store.state.searchDesc"
      class="text-light w-5 form-control rounded-pill text-dark input border-0"
      v-model="searchQuery"
      @keyup.enter="$store.dispatch('getRecipes')"
      @change="$store.dispatch('showPreviews')"
    />
  </div>
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
      // newValue is the user's search result
      set(newValue) {
        console.log(newValue);
        this.$store.dispatch("setQueryParam", newValue);
      },
    },
  },
};
</script>

<style scoped>
.input:focus {
  box-shadow: none;
  text-decoration: none;
}

.icon {
  padding-left: -5px;
}
</style>
