<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1>This is just a random pic</h1>
      <p>Maybe add food details here?</p>
      <button class="btn btn-primary">Go to Recipe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
body,
html {
  height: 100%;
}
body,
html {
  height: 100%;
}

/* The hero image */
.hero-image {
  /* Use "linear-gradient" to add a darken background effect to the image (photographer.jpg). This will make the text easier to read */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://links.papareact.com/0fm");

  /* Set a specific height */
  height: 50%;

  /* Position and center the image to scale nicely on all screens */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

/* Place text in the middle of the image */
.hero-text {
  text-align: center;
  color: white;
  padding-top: 300px;
  padding-bottom: 300px;
}
</style>
