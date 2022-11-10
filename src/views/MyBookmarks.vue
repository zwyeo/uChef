<template>
  <div class="container-fluid px-5">
    <nav-bar></nav-bar>
    <h2 class="text-center p-5">My Bookmarks</h2>
    <div v-if="$store.state.userId != ''" class="row recipe-card-style">
      {{ $store.state.user }}
    </div>
    <div v-else class="row">
      <div class="col d-flex justify-content-center">
        <img style="width: 500px; height: 500px;" src="../assets/img/core-img/noBookmarks.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import RecipeCard from "@/components/RecipeCard.vue";

export default {
  name: "MyBookmark",
  components: {
    NavBar,
  },
  methods: {
    getBookmarks() {
      console.log(this.$store.state.user)
    }
  }
};
</script>

<style></style>
