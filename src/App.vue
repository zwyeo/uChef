<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'my-cookbook' }">My Cookbook</router-link> |
    <router-link :to="{ name: 'recipe-details' }">Recipe Details</router-link> |
    <router-link :to="{ name: 'search-recipe-results' }"
      >Recipe Search Result</router-link
    >
    |
  </nav> -->
  <router-view />git s
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.btn-primary,
.btn-primary:hover,
.btn-primary:active,
.btn-primary:visited {
  background-color: #42b983 !important;
  border: #42b983 !important;
}

a .nav-link.active {
  background-color: #42b983 !important;
}

a .nav-link {
  color: #42b983;
  font-weight: bold;
}
</style>
